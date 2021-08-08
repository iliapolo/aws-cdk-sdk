# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ServiceQuotasClient <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateServiceQuotaTemplate` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.associateServiceQuotaTemplate"></a>

```typescript
public associateServiceQuotaTemplate()
```

##### `deleteServiceQuotaIncreaseRequestFromTemplate` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.deleteServiceQuotaIncreaseRequestFromTemplate"></a>

```typescript
public deleteServiceQuotaIncreaseRequestFromTemplate(input: ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest)

---

##### `disassociateServiceQuotaTemplate` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.disassociateServiceQuotaTemplate"></a>

```typescript
public disassociateServiceQuotaTemplate()
```

##### `fetchAssociationForServiceQuotaTemplate` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.fetchAssociationForServiceQuotaTemplate"></a>

```typescript
public fetchAssociationForServiceQuotaTemplate()
```

##### `fetchAwsDefaultServiceQuota` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.fetchAwsDefaultServiceQuota"></a>

```typescript
public fetchAwsDefaultServiceQuota(input: ServiceQuotasGetAwsDefaultServiceQuotaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest)

---

##### `fetchRequestedServiceQuotaChange` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.fetchRequestedServiceQuotaChange"></a>

```typescript
public fetchRequestedServiceQuotaChange(input: ServiceQuotasGetRequestedServiceQuotaChangeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest)

---

##### `fetchServiceQuota` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.fetchServiceQuota"></a>

```typescript
public fetchServiceQuota(input: ServiceQuotasGetServiceQuotaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest)

---

##### `fetchServiceQuotaIncreaseRequestFromTemplate` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.fetchServiceQuotaIncreaseRequestFromTemplate"></a>

```typescript
public fetchServiceQuotaIncreaseRequestFromTemplate(input: ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest)

---

##### `listAwsDefaultServiceQuotas` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.listAwsDefaultServiceQuotas"></a>

```typescript
public listAwsDefaultServiceQuotas(input: ServiceQuotasListAwsDefaultServiceQuotasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest)

---

##### `listRequestedServiceQuotaChangeHistory` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.listRequestedServiceQuotaChangeHistory"></a>

```typescript
public listRequestedServiceQuotaChangeHistory(input: ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest)

---

##### `listRequestedServiceQuotaChangeHistoryByQuota` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.listRequestedServiceQuotaChangeHistoryByQuota"></a>

```typescript
public listRequestedServiceQuotaChangeHistoryByQuota(input: ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest)

---

##### `listServiceQuotaIncreaseRequestsInTemplate` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.listServiceQuotaIncreaseRequestsInTemplate"></a>

```typescript
public listServiceQuotaIncreaseRequestsInTemplate(input: ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest)

---

##### `listServiceQuotas` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.listServiceQuotas"></a>

```typescript
public listServiceQuotas(input: ServiceQuotasListServiceQuotasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest)

---

##### `listServices` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.listServices"></a>

```typescript
public listServices(input: ServiceQuotasListServicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListServicesRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListServicesRequest)

---

##### `putServiceQuotaIncreaseRequestIntoTemplate` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.putServiceQuotaIncreaseRequestIntoTemplate"></a>

```typescript
public putServiceQuotaIncreaseRequestIntoTemplate(input: ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest)

---

##### `requestServiceQuotaIncrease` <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.requestServiceQuotaIncrease"></a>

```typescript
public requestServiceQuotaIncrease(input: ServiceQuotasRequestServiceQuotaIncreaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest)

---




## Structs <a name="Structs"></a>

### ServiceQuotasAssociateServiceQuotaTemplateRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasAssociateServiceQuotaTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasAssociateServiceQuotaTemplateRequest: servicequotas.ServiceQuotasAssociateServiceQuotaTemplateRequest = { ... }
```

### ServiceQuotasAssociateServiceQuotaTemplateResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasAssociateServiceQuotaTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasAssociateServiceQuotaTemplateResponse: servicequotas.ServiceQuotasAssociateServiceQuotaTemplateResponse = { ... }
```

### ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest: servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest.property.awsRegion"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest.property.quotaCode"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateRequest.property.serviceCode"></a>

- *Type:* `string`

---

### ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse: servicequotas.ServiceQuotasDeleteServiceQuotaIncreaseRequestFromTemplateResponse = { ... }
```

### ServiceQuotasDisassociateServiceQuotaTemplateRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasDisassociateServiceQuotaTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasDisassociateServiceQuotaTemplateRequest: servicequotas.ServiceQuotasDisassociateServiceQuotaTemplateRequest = { ... }
```

### ServiceQuotasDisassociateServiceQuotaTemplateResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasDisassociateServiceQuotaTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasDisassociateServiceQuotaTemplateResponse: servicequotas.ServiceQuotasDisassociateServiceQuotaTemplateResponse = { ... }
```

### ServiceQuotasErrorReason <a name="aws-cdk-sdk.servicequotas.ServiceQuotasErrorReason"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasErrorReason: servicequotas.ServiceQuotasErrorReason = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasErrorReason.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasErrorReason.property.errorMessage"></a>

- *Type:* `string`

---

### ServiceQuotasGetAssociationForServiceQuotaTemplateRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAssociationForServiceQuotaTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetAssociationForServiceQuotaTemplateRequest: servicequotas.ServiceQuotasGetAssociationForServiceQuotaTemplateRequest = { ... }
```

### ServiceQuotasGetAssociationForServiceQuotaTemplateResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAssociationForServiceQuotaTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetAssociationForServiceQuotaTemplateResponse: servicequotas.ServiceQuotasGetAssociationForServiceQuotaTemplateResponse = { ... }
```

##### `serviceQuotaTemplateAssociationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAssociationForServiceQuotaTemplateResponse.property.serviceQuotaTemplateAssociationStatus"></a>

- *Type:* `string`

---

### ServiceQuotasGetAwsDefaultServiceQuotaRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetAwsDefaultServiceQuotaRequest: servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest = { ... }
```

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest.property.quotaCode"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest.property.serviceCode"></a>

- *Type:* `string`

---

### ServiceQuotasGetAwsDefaultServiceQuotaResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetAwsDefaultServiceQuotaResponse: servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaResponse = { ... }
```

##### `quota`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaResponse.property.quota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota)

---

### ServiceQuotasGetRequestedServiceQuotaChangeRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetRequestedServiceQuotaChangeRequest: servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest = { ... }
```

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest.property.requestId"></a>

- *Type:* `string`

---

### ServiceQuotasGetRequestedServiceQuotaChangeResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetRequestedServiceQuotaChangeResponse: servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeResponse = { ... }
```

##### `requestedQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeResponse.property.requestedQuota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange)

---

### ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest: servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest.property.awsRegion"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest.property.quotaCode"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest.property.serviceCode"></a>

- *Type:* `string`

---

### ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse: servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse = { ... }
```

##### `serviceQuotaIncreaseRequestInTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateResponse.property.serviceQuotaIncreaseRequestInTemplate"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate)

---

### ServiceQuotasGetServiceQuotaRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetServiceQuotaRequest: servicequotas.ServiceQuotasGetServiceQuotaRequest = { ... }
```

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest.property.quotaCode"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest.property.serviceCode"></a>

- *Type:* `string`

---

### ServiceQuotasGetServiceQuotaResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasGetServiceQuotaResponse: servicequotas.ServiceQuotasGetServiceQuotaResponse = { ... }
```

##### `quota`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaResponse.property.quota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota)

---

### ServiceQuotasListAwsDefaultServiceQuotasRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListAwsDefaultServiceQuotasRequest: servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest = { ... }
```

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest.property.serviceCode"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceQuotasListAwsDefaultServiceQuotasResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListAwsDefaultServiceQuotasResponse: servicequotas.ServiceQuotasListAwsDefaultServiceQuotasResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `quotas`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasResponse.property.quotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota)[]

---

### ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest: servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest = { ... }
```

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest.property.quotaCode"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest.property.serviceCode"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest.property.status"></a>

- *Type:* `string`

---

### ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse: servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestedQuotas`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaResponse.property.requestedQuotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange)[]

---

### ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListRequestedServiceQuotaChangeHistoryRequest: servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest.property.serviceCode"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest.property.status"></a>

- *Type:* `string`

---

### ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListRequestedServiceQuotaChangeHistoryResponse: servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestedQuotas`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryResponse.property.requestedQuotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange)[]

---

### ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest: servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest = { ... }
```

##### `awsRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest.property.awsRegion"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest.property.serviceCode"></a>

- *Type:* `string`

---

### ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse: servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceQuotaIncreaseRequestInTemplateList`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateResponse.property.serviceQuotaIncreaseRequestInTemplateList"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate)[]

---

### ServiceQuotasListServiceQuotasRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListServiceQuotasRequest: servicequotas.ServiceQuotasListServiceQuotasRequest = { ... }
```

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest.property.serviceCode"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceQuotasListServiceQuotasResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListServiceQuotasResponse: servicequotas.ServiceQuotasListServiceQuotasResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `quotas`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasResponse.property.quotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota)[]

---

### ServiceQuotasListServicesRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListServicesRequest: servicequotas.ServiceQuotasListServicesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ServiceQuotasListServicesResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasListServicesResponse: servicequotas.ServiceQuotasListServicesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServicesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasListServicesResponse.property.services"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceInfo`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceInfo)[]

---

### ServiceQuotasMetricInfo <a name="aws-cdk-sdk.servicequotas.ServiceQuotasMetricInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasMetricInfo: servicequotas.ServiceQuotasMetricInfo = { ... }
```

##### `metricDimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasMetricInfo.property.metricDimensions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasMetricInfo.property.metricName"></a>

- *Type:* `string`

---

##### `metricNamespace`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasMetricInfo.property.metricNamespace"></a>

- *Type:* `string`

---

##### `metricStatisticRecommendation`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasMetricInfo.property.metricStatisticRecommendation"></a>

- *Type:* `string`

---

### ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest: servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest = { ... }
```

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest.property.awsRegion"></a>

- *Type:* `string`

---

##### `desiredValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest.property.desiredValue"></a>

- *Type:* `number`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest.property.quotaCode"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest.property.serviceCode"></a>

- *Type:* `string`

---

### ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse: servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse = { ... }
```

##### `serviceQuotaIncreaseRequestInTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateResponse.property.serviceQuotaIncreaseRequestInTemplate"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate)

---

### ServiceQuotasQuotaPeriod <a name="aws-cdk-sdk.servicequotas.ServiceQuotasQuotaPeriod"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasQuotaPeriod: servicequotas.ServiceQuotasQuotaPeriod = { ... }
```

##### `periodUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasQuotaPeriod.property.periodUnit"></a>

- *Type:* `string`

---

##### `periodValue`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasQuotaPeriod.property.periodValue"></a>

- *Type:* `number`

---

### ServiceQuotasRequestedServiceQuotaChange <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasRequestedServiceQuotaChange: servicequotas.ServiceQuotasRequestedServiceQuotaChange = { ... }
```

##### `caseId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.caseId"></a>

- *Type:* `string`

---

##### `created`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.created"></a>

- *Type:* `string`

---

##### `desiredValue`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.desiredValue"></a>

- *Type:* `number`

---

##### `globalQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.id"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.lastUpdated"></a>

- *Type:* `string`

---

##### `quotaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.quotaArn"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.quotaName"></a>

- *Type:* `string`

---

##### `requester`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.requester"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.serviceName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.status"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange.property.unit"></a>

- *Type:* `string`

---

### ServiceQuotasRequestServiceQuotaIncreaseRequest <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasRequestServiceQuotaIncreaseRequest: servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest = { ... }
```

##### `desiredValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest.property.desiredValue"></a>

- *Type:* `number`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest.property.quotaCode"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest.property.serviceCode"></a>

- *Type:* `string`

---

### ServiceQuotasRequestServiceQuotaIncreaseResponse <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasRequestServiceQuotaIncreaseResponse: servicequotas.ServiceQuotasRequestServiceQuotaIncreaseResponse = { ... }
```

##### `requestedQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseResponse.property.requestedQuota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange)

---

### ServiceQuotasServiceInfo <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasServiceInfo: servicequotas.ServiceQuotasServiceInfo = { ... }
```

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceInfo.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceInfo.property.serviceName"></a>

- *Type:* `string`

---

### ServiceQuotasServiceQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasServiceQuota: servicequotas.ServiceQuotasServiceQuota = { ... }
```

##### `adjustable`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.adjustable"></a>

- *Type:* `boolean`

---

##### `errorReason`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.errorReason"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasErrorReason`](#aws-cdk-sdk.servicequotas.ServiceQuotasErrorReason)

---

##### `globalQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.period"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasQuotaPeriod`](#aws-cdk-sdk.servicequotas.ServiceQuotasQuotaPeriod)

---

##### `quotaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.quotaArn"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.quotaName"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.serviceName"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.unit"></a>

- *Type:* `string`

---

##### `usageMetric`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.usageMetric"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasMetricInfo`](#aws-cdk-sdk.servicequotas.ServiceQuotasMetricInfo)

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota.property.value"></a>

- *Type:* `number`

---

### ServiceQuotasServiceQuotaIncreaseRequestInTemplate <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

const serviceQuotasServiceQuotaIncreaseRequestInTemplate: servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate = { ... }
```

##### `awsRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.awsRegion"></a>

- *Type:* `string`

---

##### `desiredValue`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.desiredValue"></a>

- *Type:* `number`

---

##### `globalQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `quotaCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.quotaName"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.serviceName"></a>

- *Type:* `string`

---

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate.property.unit"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `serviceQuotaTemplateAssociationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAssociationForServiceQuotaTemplate.property.serviceQuotaTemplateAssociationStatus"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesFetchAwsDefaultServiceQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuota"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuota.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuota(__scope: Construct, __resources: string[], __input: ServiceQuotasGetAwsDefaultServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `quota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuota.property.quota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota)

---


### ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota(__scope: Construct, __resources: string[], __input: ServiceQuotasGetAwsDefaultServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `adjustable`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.adjustable"></a>

- *Type:* `boolean`

---

##### `errorReason`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.errorReason"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason)

---

##### `globalQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.period"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod)

---

##### `quotaArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.quotaArn"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.quotaName"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.serviceName"></a>

- *Type:* `string`

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.unit"></a>

- *Type:* `string`

---

##### `usageMetric`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.usageMetric"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric)

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuota.property.value"></a>

- *Type:* `number`

---


### ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason(__scope: Construct, __resources: string[], __input: ServiceQuotasGetAwsDefaultServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaErrorReason.property.errorMessage"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod(__scope: Construct, __resources: string[], __input: ServiceQuotasGetAwsDefaultServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `periodUnit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod.property.periodUnit"></a>

- *Type:* `string`

---

##### `periodValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaPeriod.property.periodValue"></a>

- *Type:* `number`

---


### ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric(__scope: Construct, __resources: string[], __input: ServiceQuotasGetAwsDefaultServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetAwsDefaultServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `metricDimensions`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.property.metricDimensions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.property.metricName"></a>

- *Type:* `string`

---

##### `metricNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.property.metricNamespace"></a>

- *Type:* `string`

---

##### `metricStatisticRecommendation`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchAwsDefaultServiceQuotaQuotaUsageMetric.property.metricStatisticRecommendation"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesFetchRequestedServiceQuotaChange <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChange"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChange.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChange(__scope: Construct, __resources: string[], __input: ServiceQuotasGetRequestedServiceQuotaChangeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChange.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChange.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChange.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest)

---



#### Properties <a name="Properties"></a>

##### `requestedQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChange.property.requestedQuota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota)

---


### ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota(__scope: Construct, __resources: string[], __input: ServiceQuotasGetRequestedServiceQuotaChangeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetRequestedServiceQuotaChangeRequest)

---



#### Properties <a name="Properties"></a>

##### `caseId`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.caseId"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.created"></a>

- *Type:* `string`

---

##### `desiredValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.desiredValue"></a>

- *Type:* `number`

---

##### `globalQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.id"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.lastUpdated"></a>

- *Type:* `string`

---

##### `quotaArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.quotaArn"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.quotaName"></a>

- *Type:* `string`

---

##### `requester`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.requester"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.serviceName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.status"></a>

- *Type:* `string`

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchRequestedServiceQuotaChangeRequestedQuota.property.unit"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesFetchServiceQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuota"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuota.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchServiceQuota(__scope: Construct, __resources: string[], __input: ServiceQuotasGetServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `quota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuota.property.quota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota)

---


### ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate(__scope: Construct, __resources: string[], __input: ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceQuotaIncreaseRequestInTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplate.property.serviceQuotaIncreaseRequestInTemplate"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate)

---


### ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate(__scope: Construct, __resources: string[], __input: ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaIncreaseRequestFromTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.awsRegion"></a>

- *Type:* `string`

---

##### `desiredValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.desiredValue"></a>

- *Type:* `number`

---

##### `globalQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.quotaName"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.serviceName"></a>

- *Type:* `string`

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaIncreaseRequestFromTemplateServiceQuotaIncreaseRequestInTemplate.property.unit"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesFetchServiceQuotaQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota(__scope: Construct, __resources: string[], __input: ServiceQuotasGetServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `adjustable`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.adjustable"></a>

- *Type:* `boolean`

---

##### `errorReason`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.errorReason"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason)

---

##### `globalQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.period"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod)

---

##### `quotaArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.quotaArn"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.quotaName"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.serviceName"></a>

- *Type:* `string`

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.unit"></a>

- *Type:* `string`

---

##### `usageMetric`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.usageMetric"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric)

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuota.property.value"></a>

- *Type:* `number`

---


### ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason(__scope: Construct, __resources: string[], __input: ServiceQuotasGetServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaErrorReason.property.errorMessage"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod(__scope: Construct, __resources: string[], __input: ServiceQuotasGetServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `periodUnit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod.property.periodUnit"></a>

- *Type:* `string`

---

##### `periodValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaPeriod.property.periodValue"></a>

- *Type:* `number`

---


### ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric(__scope: Construct, __resources: string[], __input: ServiceQuotasGetServiceQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasGetServiceQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `metricDimensions`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.property.metricDimensions"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.property.metricName"></a>

- *Type:* `string`

---

##### `metricNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.property.metricNamespace"></a>

- *Type:* `string`

---

##### `metricStatisticRecommendation`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesFetchServiceQuotaQuotaUsageMetric.property.metricStatisticRecommendation"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesListAwsDefaultServiceQuotas <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas(__scope: Construct, __resources: string[], __input: ServiceQuotasListAwsDefaultServiceQuotasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListAwsDefaultServiceQuotasRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas.property.nextToken"></a>

- *Type:* `string`

---

##### `quotas`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListAwsDefaultServiceQuotas.property.quotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota)[]

---


### ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory(__scope: Construct, __resources: string[], __input: ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory.property.nextToken"></a>

- *Type:* `string`

---

##### `requestedQuotas`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistory.property.requestedQuotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange)[]

---


### ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota(__scope: Construct, __resources: string[], __input: ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListRequestedServiceQuotaChangeHistoryByQuotaRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota.property.nextToken"></a>

- *Type:* `string`

---

##### `requestedQuotas`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListRequestedServiceQuotaChangeHistoryByQuota.property.requestedQuotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestedServiceQuotaChange)[]

---


### ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate(__scope: Construct, __resources: string[], __input: ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotaIncreaseRequestsInTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceQuotaIncreaseRequestInTemplateList`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotaIncreaseRequestsInTemplate.property.serviceQuotaIncreaseRequestInTemplateList"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuotaIncreaseRequestInTemplate)[]

---


### ServiceQuotasResponsesListServiceQuotas <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotas"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotas.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesListServiceQuotas(__scope: Construct, __resources: string[], __input: ServiceQuotasListServiceQuotasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListServiceQuotasRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotas.property.nextToken"></a>

- *Type:* `string`

---

##### `quotas`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServiceQuotas.property.quotas"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceQuota)[]

---


### ServiceQuotasResponsesListServices <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServices"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServices.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesListServices(__scope: Construct, __resources: string[], __input: ServiceQuotasListServicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasListServicesRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasListServicesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServices.property.nextToken"></a>

- *Type:* `string`

---

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesListServices.property.services"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasServiceInfo`](#aws-cdk-sdk.servicequotas.ServiceQuotasServiceInfo)[]

---


### ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate(__scope: Construct, __resources: string[], __input: ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceQuotaIncreaseRequestInTemplate`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplate.property.serviceQuotaIncreaseRequestInTemplate"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate)

---


### ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate(__scope: Construct, __resources: string[], __input: ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasPutServiceQuotaIncreaseRequestIntoTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `awsRegion`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.awsRegion"></a>

- *Type:* `string`

---

##### `desiredValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.desiredValue"></a>

- *Type:* `number`

---

##### `globalQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.quotaName"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.serviceName"></a>

- *Type:* `string`

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesPutServiceQuotaIncreaseRequestIntoTemplateServiceQuotaIncreaseRequestInTemplate.property.unit"></a>

- *Type:* `string`

---


### ServiceQuotasResponsesRequestServiceQuotaIncrease <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncrease"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncrease.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncrease(__scope: Construct, __resources: string[], __input: ServiceQuotasRequestServiceQuotaIncreaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncrease.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncrease.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncrease.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest)

---



#### Properties <a name="Properties"></a>

##### `requestedQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncrease.property.requestedQuota"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota`](#aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota)

---


### ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota"></a>

#### Initializer <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.Initializer"></a>

```typescript
import { servicequotas } from 'aws-cdk-sdk'

new servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota(__scope: Construct, __resources: string[], __input: ServiceQuotasRequestServiceQuotaIncreaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest`](#aws-cdk-sdk.servicequotas.ServiceQuotasRequestServiceQuotaIncreaseRequest)

---



#### Properties <a name="Properties"></a>

##### `caseId`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.caseId"></a>

- *Type:* `string`

---

##### `created`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.created"></a>

- *Type:* `string`

---

##### `desiredValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.desiredValue"></a>

- *Type:* `number`

---

##### `globalQuota`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.globalQuota"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.id"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.lastUpdated"></a>

- *Type:* `string`

---

##### `quotaArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.quotaArn"></a>

- *Type:* `string`

---

##### `quotaCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.quotaCode"></a>

- *Type:* `string`

---

##### `quotaName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.quotaName"></a>

- *Type:* `string`

---

##### `requester`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.requester"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.serviceCode"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.serviceName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.status"></a>

- *Type:* `string`

---

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.servicequotas.ServiceQuotasResponsesRequestServiceQuotaIncreaseRequestedQuota.property.unit"></a>

- *Type:* `string`

---



