# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SupportClient <a name="aws-cdk-sdk.support.SupportClient"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportClient.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addAttachmentsToSet` <a name="aws-cdk-sdk.support.SupportClient.addAttachmentsToSet"></a>

```typescript
public addAttachmentsToSet(input: SupportAddAttachmentsToSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportAddAttachmentsToSetRequest`](#aws-cdk-sdk.support.SupportAddAttachmentsToSetRequest)

---

##### `addCommunicationToCase` <a name="aws-cdk-sdk.support.SupportClient.addCommunicationToCase"></a>

```typescript
public addCommunicationToCase(input: SupportAddCommunicationToCaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest`](#aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest)

---

##### `createCase` <a name="aws-cdk-sdk.support.SupportClient.createCase"></a>

```typescript
public createCase(input: SupportCreateCaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCreateCaseRequest`](#aws-cdk-sdk.support.SupportCreateCaseRequest)

---

##### `describeAttachment` <a name="aws-cdk-sdk.support.SupportClient.describeAttachment"></a>

```typescript
public describeAttachment(input: SupportDescribeAttachmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeAttachmentRequest`](#aws-cdk-sdk.support.SupportDescribeAttachmentRequest)

---

##### `describeCases` <a name="aws-cdk-sdk.support.SupportClient.describeCases"></a>

```typescript
public describeCases(input: SupportDescribeCasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeCasesRequest`](#aws-cdk-sdk.support.SupportDescribeCasesRequest)

---

##### `describeCommunications` <a name="aws-cdk-sdk.support.SupportClient.describeCommunications"></a>

```typescript
public describeCommunications(input: SupportDescribeCommunicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeCommunicationsRequest`](#aws-cdk-sdk.support.SupportDescribeCommunicationsRequest)

---

##### `describeServices` <a name="aws-cdk-sdk.support.SupportClient.describeServices"></a>

```typescript
public describeServices(input: SupportDescribeServicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeServicesRequest`](#aws-cdk-sdk.support.SupportDescribeServicesRequest)

---

##### `describeSeverityLevels` <a name="aws-cdk-sdk.support.SupportClient.describeSeverityLevels"></a>

```typescript
public describeSeverityLevels(input: SupportDescribeSeverityLevelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeSeverityLevelsRequest`](#aws-cdk-sdk.support.SupportDescribeSeverityLevelsRequest)

---

##### `describeTrustedAdvisorCheckRefreshStatuses` <a name="aws-cdk-sdk.support.SupportClient.describeTrustedAdvisorCheckRefreshStatuses"></a>

```typescript
public describeTrustedAdvisorCheckRefreshStatuses(input: SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest)

---

##### `describeTrustedAdvisorCheckResult` <a name="aws-cdk-sdk.support.SupportClient.describeTrustedAdvisorCheckResult"></a>

```typescript
public describeTrustedAdvisorCheckResult(input: SupportDescribeTrustedAdvisorCheckResultRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest)

---

##### `describeTrustedAdvisorChecks` <a name="aws-cdk-sdk.support.SupportClient.describeTrustedAdvisorChecks"></a>

```typescript
public describeTrustedAdvisorChecks(input: SupportDescribeTrustedAdvisorChecksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksRequest)

---

##### `describeTrustedAdvisorCheckSummaries` <a name="aws-cdk-sdk.support.SupportClient.describeTrustedAdvisorCheckSummaries"></a>

```typescript
public describeTrustedAdvisorCheckSummaries(input: SupportDescribeTrustedAdvisorCheckSummariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesRequest)

---

##### `refreshTrustedAdvisorCheck` <a name="aws-cdk-sdk.support.SupportClient.refreshTrustedAdvisorCheck"></a>

```typescript
public refreshTrustedAdvisorCheck(input: SupportRefreshTrustedAdvisorCheckRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest`](#aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest)

---

##### `resolveCase` <a name="aws-cdk-sdk.support.SupportClient.resolveCase"></a>

```typescript
public resolveCase(input: SupportResolveCaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResolveCaseRequest`](#aws-cdk-sdk.support.SupportResolveCaseRequest)

---




## Structs <a name="Structs"></a>

### SupportAddAttachmentsToSetRequest <a name="aws-cdk-sdk.support.SupportAddAttachmentsToSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportAddAttachmentsToSetRequest: support.SupportAddAttachmentsToSetRequest = { ... }
```

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportAddAttachmentsToSetRequest.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.support.SupportAttachment`](#aws-cdk-sdk.support.SupportAttachment)[]

---

##### `attachmentSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAddAttachmentsToSetRequest.property.attachmentSetId"></a>

- *Type:* `string`

---

### SupportAddAttachmentsToSetResponse <a name="aws-cdk-sdk.support.SupportAddAttachmentsToSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportAddAttachmentsToSetResponse: support.SupportAddAttachmentsToSetResponse = { ... }
```

##### `attachmentSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAddAttachmentsToSetResponse.property.attachmentSetId"></a>

- *Type:* `string`

---

##### `expiryTime`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAddAttachmentsToSetResponse.property.expiryTime"></a>

- *Type:* `string`

---

### SupportAddCommunicationToCaseRequest <a name="aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportAddCommunicationToCaseRequest: support.SupportAddCommunicationToCaseRequest = { ... }
```

##### `communicationBody`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest.property.communicationBody"></a>

- *Type:* `string`

---

##### `attachmentSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest.property.attachmentSetId"></a>

- *Type:* `string`

---

##### `caseId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest.property.caseId"></a>

- *Type:* `string`

---

##### `ccEmailAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest.property.ccEmailAddresses"></a>

- *Type:* `string`[]

---

### SupportAddCommunicationToCaseResponse <a name="aws-cdk-sdk.support.SupportAddCommunicationToCaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportAddCommunicationToCaseResponse: support.SupportAddCommunicationToCaseResponse = { ... }
```

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAddCommunicationToCaseResponse.property.result"></a>

- *Type:* `boolean`

---

### SupportAttachment <a name="aws-cdk-sdk.support.SupportAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportAttachment: support.SupportAttachment = { ... }
```

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAttachment.property.data"></a>

- *Type:* `any`

---

##### `fileName`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAttachment.property.fileName"></a>

- *Type:* `string`

---

### SupportAttachmentDetails <a name="aws-cdk-sdk.support.SupportAttachmentDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportAttachmentDetails: support.SupportAttachmentDetails = { ... }
```

##### `attachmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAttachmentDetails.property.attachmentId"></a>

- *Type:* `string`

---

##### `fileName`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportAttachmentDetails.property.fileName"></a>

- *Type:* `string`

---

### SupportCaseDetails <a name="aws-cdk-sdk.support.SupportCaseDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportCaseDetails: support.SupportCaseDetails = { ... }
```

##### `caseId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.caseId"></a>

- *Type:* `string`

---

##### `categoryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.categoryCode"></a>

- *Type:* `string`

---

##### `ccEmailAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.ccEmailAddresses"></a>

- *Type:* `string`[]

---

##### `displayId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.displayId"></a>

- *Type:* `string`

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.language"></a>

- *Type:* `string`

---

##### `recentCommunications`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.recentCommunications"></a>

- *Type:* [`aws-cdk-sdk.support.SupportRecentCaseCommunications`](#aws-cdk-sdk.support.SupportRecentCaseCommunications)

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.serviceCode"></a>

- *Type:* `string`

---

##### `severityCode`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.severityCode"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.status"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.subject"></a>

- *Type:* `string`

---

##### `submittedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.submittedBy"></a>

- *Type:* `string`

---

##### `timeCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCaseDetails.property.timeCreated"></a>

- *Type:* `string`

---

### SupportCategory <a name="aws-cdk-sdk.support.SupportCategory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportCategory: support.SupportCategory = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCategory.property.code"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCategory.property.name"></a>

- *Type:* `string`

---

### SupportCommunication <a name="aws-cdk-sdk.support.SupportCommunication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportCommunication: support.SupportCommunication = { ... }
```

##### `attachmentSet`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCommunication.property.attachmentSet"></a>

- *Type:* [`aws-cdk-sdk.support.SupportAttachmentDetails`](#aws-cdk-sdk.support.SupportAttachmentDetails)[]

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCommunication.property.body"></a>

- *Type:* `string`

---

##### `caseId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCommunication.property.caseId"></a>

- *Type:* `string`

---

##### `submittedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCommunication.property.submittedBy"></a>

- *Type:* `string`

---

##### `timeCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCommunication.property.timeCreated"></a>

- *Type:* `string`

---

### SupportCreateCaseRequest <a name="aws-cdk-sdk.support.SupportCreateCaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportCreateCaseRequest: support.SupportCreateCaseRequest = { ... }
```

##### `communicationBody`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.communicationBody"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.subject"></a>

- *Type:* `string`

---

##### `attachmentSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.attachmentSetId"></a>

- *Type:* `string`

---

##### `categoryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.categoryCode"></a>

- *Type:* `string`

---

##### `ccEmailAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.ccEmailAddresses"></a>

- *Type:* `string`[]

---

##### `issueType`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.issueType"></a>

- *Type:* `string`

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.language"></a>

- *Type:* `string`

---

##### `serviceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.serviceCode"></a>

- *Type:* `string`

---

##### `severityCode`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseRequest.property.severityCode"></a>

- *Type:* `string`

---

### SupportCreateCaseResponse <a name="aws-cdk-sdk.support.SupportCreateCaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportCreateCaseResponse: support.SupportCreateCaseResponse = { ... }
```

##### `caseId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportCreateCaseResponse.property.caseId"></a>

- *Type:* `string`

---

### SupportDescribeAttachmentRequest <a name="aws-cdk-sdk.support.SupportDescribeAttachmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeAttachmentRequest: support.SupportDescribeAttachmentRequest = { ... }
```

##### `attachmentId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeAttachmentRequest.property.attachmentId"></a>

- *Type:* `string`

---

### SupportDescribeAttachmentResponse <a name="aws-cdk-sdk.support.SupportDescribeAttachmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeAttachmentResponse: support.SupportDescribeAttachmentResponse = { ... }
```

##### `attachment`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeAttachmentResponse.property.attachment"></a>

- *Type:* [`aws-cdk-sdk.support.SupportAttachment`](#aws-cdk-sdk.support.SupportAttachment)

---

### SupportDescribeCasesRequest <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeCasesRequest: support.SupportDescribeCasesRequest = { ... }
```

##### `afterTime`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.afterTime"></a>

- *Type:* `string`

---

##### `beforeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.beforeTime"></a>

- *Type:* `string`

---

##### `caseIdList`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.caseIdList"></a>

- *Type:* `string`[]

---

##### `displayId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.displayId"></a>

- *Type:* `string`

---

##### `includeCommunications`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.includeCommunications"></a>

- *Type:* `boolean`

---

##### `includeResolvedCases`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.includeResolvedCases"></a>

- *Type:* `boolean`

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.language"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SupportDescribeCasesResponse <a name="aws-cdk-sdk.support.SupportDescribeCasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeCasesResponse: support.SupportDescribeCasesResponse = { ... }
```

##### `cases`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesResponse.property.cases"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCaseDetails`](#aws-cdk-sdk.support.SupportCaseDetails)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCasesResponse.property.nextToken"></a>

- *Type:* `string`

---

### SupportDescribeCommunicationsRequest <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeCommunicationsRequest: support.SupportDescribeCommunicationsRequest = { ... }
```

##### `caseId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsRequest.property.caseId"></a>

- *Type:* `string`

---

##### `afterTime`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsRequest.property.afterTime"></a>

- *Type:* `string`

---

##### `beforeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsRequest.property.beforeTime"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SupportDescribeCommunicationsResponse <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeCommunicationsResponse: support.SupportDescribeCommunicationsResponse = { ... }
```

##### `communications`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsResponse.property.communications"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCommunication`](#aws-cdk-sdk.support.SupportCommunication)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeCommunicationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### SupportDescribeServicesRequest <a name="aws-cdk-sdk.support.SupportDescribeServicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeServicesRequest: support.SupportDescribeServicesRequest = { ... }
```

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeServicesRequest.property.language"></a>

- *Type:* `string`

---

##### `serviceCodeList`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeServicesRequest.property.serviceCodeList"></a>

- *Type:* `string`[]

---

### SupportDescribeServicesResponse <a name="aws-cdk-sdk.support.SupportDescribeServicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeServicesResponse: support.SupportDescribeServicesResponse = { ... }
```

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeServicesResponse.property.services"></a>

- *Type:* [`aws-cdk-sdk.support.SupportService`](#aws-cdk-sdk.support.SupportService)[]

---

### SupportDescribeSeverityLevelsRequest <a name="aws-cdk-sdk.support.SupportDescribeSeverityLevelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeSeverityLevelsRequest: support.SupportDescribeSeverityLevelsRequest = { ... }
```

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeSeverityLevelsRequest.property.language"></a>

- *Type:* `string`

---

### SupportDescribeSeverityLevelsResponse <a name="aws-cdk-sdk.support.SupportDescribeSeverityLevelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeSeverityLevelsResponse: support.SupportDescribeSeverityLevelsResponse = { ... }
```

##### `severityLevels`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeSeverityLevelsResponse.property.severityLevels"></a>

- *Type:* [`aws-cdk-sdk.support.SupportSeverityLevel`](#aws-cdk-sdk.support.SupportSeverityLevel)[]

---

### SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorCheckRefreshStatusesRequest: support.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest = { ... }
```

##### `checkIds`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest.property.checkIds"></a>

- *Type:* `string`[]

---

### SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorCheckRefreshStatusesResponse: support.SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse = { ... }
```

##### `statuses`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesResponse.property.statuses"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus)[]

---

### SupportDescribeTrustedAdvisorCheckResultRequest <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorCheckResultRequest: support.SupportDescribeTrustedAdvisorCheckResultRequest = { ... }
```

##### `checkId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest.property.checkId"></a>

- *Type:* `string`

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest.property.language"></a>

- *Type:* `string`

---

### SupportDescribeTrustedAdvisorCheckResultResponse <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorCheckResultResponse: support.SupportDescribeTrustedAdvisorCheckResultResponse = { ... }
```

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultResponse.property.result"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult)

---

### SupportDescribeTrustedAdvisorChecksRequest <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorChecksRequest: support.SupportDescribeTrustedAdvisorChecksRequest = { ... }
```

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksRequest.property.language"></a>

- *Type:* `string`

---

### SupportDescribeTrustedAdvisorChecksResponse <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorChecksResponse: support.SupportDescribeTrustedAdvisorChecksResponse = { ... }
```

##### `checks`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksResponse.property.checks"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription)[]

---

### SupportDescribeTrustedAdvisorCheckSummariesRequest <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorCheckSummariesRequest: support.SupportDescribeTrustedAdvisorCheckSummariesRequest = { ... }
```

##### `checkIds`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesRequest.property.checkIds"></a>

- *Type:* `string`[]

---

### SupportDescribeTrustedAdvisorCheckSummariesResponse <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportDescribeTrustedAdvisorCheckSummariesResponse: support.SupportDescribeTrustedAdvisorCheckSummariesResponse = { ... }
```

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesResponse.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary)[]

---

### SupportRecentCaseCommunications <a name="aws-cdk-sdk.support.SupportRecentCaseCommunications"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportRecentCaseCommunications: support.SupportRecentCaseCommunications = { ... }
```

##### `communications`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportRecentCaseCommunications.property.communications"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCommunication`](#aws-cdk-sdk.support.SupportCommunication)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportRecentCaseCommunications.property.nextToken"></a>

- *Type:* `string`

---

### SupportRefreshTrustedAdvisorCheckRequest <a name="aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportRefreshTrustedAdvisorCheckRequest: support.SupportRefreshTrustedAdvisorCheckRequest = { ... }
```

##### `checkId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest.property.checkId"></a>

- *Type:* `string`

---

### SupportRefreshTrustedAdvisorCheckResponse <a name="aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportRefreshTrustedAdvisorCheckResponse: support.SupportRefreshTrustedAdvisorCheckResponse = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckResponse.property.status"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus)

---

### SupportResolveCaseRequest <a name="aws-cdk-sdk.support.SupportResolveCaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportResolveCaseRequest: support.SupportResolveCaseRequest = { ... }
```

##### `caseId`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportResolveCaseRequest.property.caseId"></a>

- *Type:* `string`

---

### SupportResolveCaseResponse <a name="aws-cdk-sdk.support.SupportResolveCaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportResolveCaseResponse: support.SupportResolveCaseResponse = { ... }
```

##### `finalCaseStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportResolveCaseResponse.property.finalCaseStatus"></a>

- *Type:* `string`

---

##### `initialCaseStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportResolveCaseResponse.property.initialCaseStatus"></a>

- *Type:* `string`

---

### SupportService <a name="aws-cdk-sdk.support.SupportService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportService: support.SupportService = { ... }
```

##### `categories`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportService.property.categories"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCategory`](#aws-cdk-sdk.support.SupportCategory)[]

---

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportService.property.code"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportService.property.name"></a>

- *Type:* `string`

---

### SupportSeverityLevel <a name="aws-cdk-sdk.support.SupportSeverityLevel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportSeverityLevel: support.SupportSeverityLevel = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportSeverityLevel.property.code"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportSeverityLevel.property.name"></a>

- *Type:* `string`

---

### SupportTrustedAdvisorCategorySpecificSummary <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCategorySpecificSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorCategorySpecificSummary: support.SupportTrustedAdvisorCategorySpecificSummary = { ... }
```

##### `costOptimizing`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCategorySpecificSummary.property.costOptimizing"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCostOptimizingSummary`](#aws-cdk-sdk.support.SupportTrustedAdvisorCostOptimizingSummary)

---

### SupportTrustedAdvisorCheckDescription <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorCheckDescription: support.SupportTrustedAdvisorCheckDescription = { ... }
```

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription.property.category"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription.property.id"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription.property.metadata"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription.property.name"></a>

- *Type:* `string`

---

### SupportTrustedAdvisorCheckRefreshStatus <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorCheckRefreshStatus: support.SupportTrustedAdvisorCheckRefreshStatus = { ... }
```

##### `checkId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus.property.checkId"></a>

- *Type:* `string`

---

##### `millisUntilNextRefreshable`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus.property.millisUntilNextRefreshable"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus.property.status"></a>

- *Type:* `string`

---

### SupportTrustedAdvisorCheckResult <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorCheckResult: support.SupportTrustedAdvisorCheckResult = { ... }
```

##### `categorySpecificSummary`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult.property.categorySpecificSummary"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCategorySpecificSummary`](#aws-cdk-sdk.support.SupportTrustedAdvisorCategorySpecificSummary)

---

##### `checkId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult.property.checkId"></a>

- *Type:* `string`

---

##### `flaggedResources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult.property.flaggedResources"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail`](#aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail)[]

---

##### `resourcesSummary`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult.property.resourcesSummary"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary`](#aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult.property.status"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckResult.property.timestamp"></a>

- *Type:* `string`

---

### SupportTrustedAdvisorCheckSummary <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorCheckSummary: support.SupportTrustedAdvisorCheckSummary = { ... }
```

##### `categorySpecificSummary`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary.property.categorySpecificSummary"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCategorySpecificSummary`](#aws-cdk-sdk.support.SupportTrustedAdvisorCategorySpecificSummary)

---

##### `checkId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary.property.checkId"></a>

- *Type:* `string`

---

##### `resourcesSummary`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary.property.resourcesSummary"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary`](#aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary.property.status"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary.property.timestamp"></a>

- *Type:* `string`

---

##### `hasFlaggedResources`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary.property.hasFlaggedResources"></a>

- *Type:* `boolean`

---

### SupportTrustedAdvisorCostOptimizingSummary <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCostOptimizingSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorCostOptimizingSummary: support.SupportTrustedAdvisorCostOptimizingSummary = { ... }
```

##### `estimatedMonthlySavings`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCostOptimizingSummary.property.estimatedMonthlySavings"></a>

- *Type:* `number`

---

##### `estimatedPercentMonthlySavings`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorCostOptimizingSummary.property.estimatedPercentMonthlySavings"></a>

- *Type:* `number`

---

### SupportTrustedAdvisorResourceDetail <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorResourceDetail: support.SupportTrustedAdvisorResourceDetail = { ... }
```

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail.property.metadata"></a>

- *Type:* `string`[]

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail.property.resourceId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail.property.status"></a>

- *Type:* `string`

---

##### `isSuppressed`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail.property.isSuppressed"></a>

- *Type:* `boolean`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail.property.region"></a>

- *Type:* `string`

---

### SupportTrustedAdvisorResourcesSummary <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

const supportTrustedAdvisorResourcesSummary: support.SupportTrustedAdvisorResourcesSummary = { ... }
```

##### `resourcesFlagged`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary.property.resourcesFlagged"></a>

- *Type:* `number`

---

##### `resourcesIgnored`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary.property.resourcesIgnored"></a>

- *Type:* `number`

---

##### `resourcesProcessed`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary.property.resourcesProcessed"></a>

- *Type:* `number`

---

##### `resourcesSuppressed`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportTrustedAdvisorResourcesSummary.property.resourcesSuppressed"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### SupportResponsesAddAttachmentsToSet <a name="aws-cdk-sdk.support.SupportResponsesAddAttachmentsToSet"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesAddAttachmentsToSet.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesAddAttachmentsToSet(__scope: Construct, __resources: string[], __input: SupportAddAttachmentsToSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddAttachmentsToSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddAttachmentsToSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddAttachmentsToSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportAddAttachmentsToSetRequest`](#aws-cdk-sdk.support.SupportAddAttachmentsToSetRequest)

---



#### Properties <a name="Properties"></a>

##### `attachmentSetId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddAttachmentsToSet.property.attachmentSetId"></a>

- *Type:* `string`

---

##### `expiryTime`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddAttachmentsToSet.property.expiryTime"></a>

- *Type:* `string`

---


### SupportResponsesAddCommunicationToCase <a name="aws-cdk-sdk.support.SupportResponsesAddCommunicationToCase"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesAddCommunicationToCase.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesAddCommunicationToCase(__scope: Construct, __resources: string[], __input: SupportAddCommunicationToCaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddCommunicationToCase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddCommunicationToCase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddCommunicationToCase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest`](#aws-cdk-sdk.support.SupportAddCommunicationToCaseRequest)

---



#### Properties <a name="Properties"></a>

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesAddCommunicationToCase.property.result"></a>

- *Type:* `boolean`

---


### SupportResponsesCreateCase <a name="aws-cdk-sdk.support.SupportResponsesCreateCase"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesCreateCase.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesCreateCase(__scope: Construct, __resources: string[], __input: SupportCreateCaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesCreateCase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesCreateCase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesCreateCase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCreateCaseRequest`](#aws-cdk-sdk.support.SupportCreateCaseRequest)

---



#### Properties <a name="Properties"></a>

##### `caseId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesCreateCase.property.caseId"></a>

- *Type:* `string`

---


### SupportResponsesDescribeAttachment <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachment"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachment.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeAttachment(__scope: Construct, __resources: string[], __input: SupportDescribeAttachmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeAttachmentRequest`](#aws-cdk-sdk.support.SupportDescribeAttachmentRequest)

---



#### Properties <a name="Properties"></a>

##### `attachment`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachment.property.attachment"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment`](#aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment)

---


### SupportResponsesDescribeAttachmentAttachment <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeAttachmentAttachment(__scope: Construct, __resources: string[], __input: SupportDescribeAttachmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeAttachmentRequest`](#aws-cdk-sdk.support.SupportDescribeAttachmentRequest)

---



#### Properties <a name="Properties"></a>

##### `data`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment.property.data"></a>

- *Type:* `any`

---

##### `fileName`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeAttachmentAttachment.property.fileName"></a>

- *Type:* `string`

---


### SupportResponsesDescribeCases <a name="aws-cdk-sdk.support.SupportResponsesDescribeCases"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeCases.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeCases(__scope: Construct, __resources: string[], __input: SupportDescribeCasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeCasesRequest`](#aws-cdk-sdk.support.SupportDescribeCasesRequest)

---



#### Properties <a name="Properties"></a>

##### `cases`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCases.property.cases"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCaseDetails`](#aws-cdk-sdk.support.SupportCaseDetails)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCases.property.nextToken"></a>

- *Type:* `string`

---


### SupportResponsesDescribeCommunications <a name="aws-cdk-sdk.support.SupportResponsesDescribeCommunications"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeCommunications.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeCommunications(__scope: Construct, __resources: string[], __input: SupportDescribeCommunicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCommunications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCommunications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCommunications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeCommunicationsRequest`](#aws-cdk-sdk.support.SupportDescribeCommunicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `communications`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCommunications.property.communications"></a>

- *Type:* [`aws-cdk-sdk.support.SupportCommunication`](#aws-cdk-sdk.support.SupportCommunication)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeCommunications.property.nextToken"></a>

- *Type:* `string`

---


### SupportResponsesDescribeServices <a name="aws-cdk-sdk.support.SupportResponsesDescribeServices"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeServices.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeServices(__scope: Construct, __resources: string[], __input: SupportDescribeServicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeServicesRequest`](#aws-cdk-sdk.support.SupportDescribeServicesRequest)

---



#### Properties <a name="Properties"></a>

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeServices.property.services"></a>

- *Type:* [`aws-cdk-sdk.support.SupportService`](#aws-cdk-sdk.support.SupportService)[]

---


### SupportResponsesDescribeSeverityLevels <a name="aws-cdk-sdk.support.SupportResponsesDescribeSeverityLevels"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeSeverityLevels.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeSeverityLevels(__scope: Construct, __resources: string[], __input: SupportDescribeSeverityLevelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeSeverityLevels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeSeverityLevels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeSeverityLevels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeSeverityLevelsRequest`](#aws-cdk-sdk.support.SupportDescribeSeverityLevelsRequest)

---



#### Properties <a name="Properties"></a>

##### `severityLevels`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeSeverityLevels.property.severityLevels"></a>

- *Type:* [`aws-cdk-sdk.support.SupportSeverityLevel`](#aws-cdk-sdk.support.SupportSeverityLevel)[]

---


### SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckRefreshStatusesRequest)

---



#### Properties <a name="Properties"></a>

##### `statuses`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckRefreshStatuses.property.statuses"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckRefreshStatus)[]

---


### SupportResponsesDescribeTrustedAdvisorCheckResult <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResult"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResult.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorCheckResult(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorCheckResultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest)

---



#### Properties <a name="Properties"></a>

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResult.property.result"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult`](#aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult)

---


### SupportResponsesDescribeTrustedAdvisorCheckResultResult <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorCheckResultResult(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorCheckResultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest)

---



#### Properties <a name="Properties"></a>

##### `categorySpecificSummary`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.property.categorySpecificSummary"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary`](#aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary)

---

##### `checkId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.property.checkId"></a>

- *Type:* `string`

---

##### `flaggedResources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.property.flaggedResources"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail`](#aws-cdk-sdk.support.SupportTrustedAdvisorResourceDetail)[]

---

##### `resourcesSummary`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.property.resourcesSummary"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary`](#aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.property.status"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResult.property.timestamp"></a>

- *Type:* `string`

---


### SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorCheckResultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest)

---



#### Properties <a name="Properties"></a>

##### `costOptimizing`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummary.property.costOptimizing"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing`](#aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing)

---


### SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorCheckResultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest)

---



#### Properties <a name="Properties"></a>

##### `estimatedMonthlySavings`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing.property.estimatedMonthlySavings"></a>

- *Type:* `number`

---

##### `estimatedPercentMonthlySavings`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultCategorySpecificSummaryCostOptimizing.property.estimatedPercentMonthlySavings"></a>

- *Type:* `number`

---


### SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorCheckResultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckResultRequest)

---



#### Properties <a name="Properties"></a>

##### `resourcesFlagged`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.property.resourcesFlagged"></a>

- *Type:* `number`

---

##### `resourcesIgnored`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.property.resourcesIgnored"></a>

- *Type:* `number`

---

##### `resourcesProcessed`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.property.resourcesProcessed"></a>

- *Type:* `number`

---

##### `resourcesSuppressed`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckResultResultResourcesSummary.property.resourcesSuppressed"></a>

- *Type:* `number`

---


### SupportResponsesDescribeTrustedAdvisorChecks <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorChecks"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorChecks.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorChecks(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorChecksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorChecks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorChecks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorChecks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorChecksRequest)

---



#### Properties <a name="Properties"></a>

##### `checks`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorChecks.property.checks"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckDescription)[]

---


### SupportResponsesDescribeTrustedAdvisorCheckSummaries <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckSummaries"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckSummaries.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesDescribeTrustedAdvisorCheckSummaries(__scope: Construct, __resources: string[], __input: SupportDescribeTrustedAdvisorCheckSummariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckSummaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckSummaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckSummaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesRequest`](#aws-cdk-sdk.support.SupportDescribeTrustedAdvisorCheckSummariesRequest)

---



#### Properties <a name="Properties"></a>

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesDescribeTrustedAdvisorCheckSummaries.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary`](#aws-cdk-sdk.support.SupportTrustedAdvisorCheckSummary)[]

---


### SupportResponsesRefreshTrustedAdvisorCheck <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheck"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheck.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesRefreshTrustedAdvisorCheck(__scope: Construct, __resources: string[], __input: SupportRefreshTrustedAdvisorCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest`](#aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheck.property.status"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus`](#aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus)

---


### SupportResponsesRefreshTrustedAdvisorCheckStatus <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesRefreshTrustedAdvisorCheckStatus(__scope: Construct, __resources: string[], __input: SupportRefreshTrustedAdvisorCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest`](#aws-cdk-sdk.support.SupportRefreshTrustedAdvisorCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `checkId`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus.property.checkId"></a>

- *Type:* `string`

---

##### `millisUntilNextRefreshable`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus.property.millisUntilNextRefreshable"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesRefreshTrustedAdvisorCheckStatus.property.status"></a>

- *Type:* `string`

---


### SupportResponsesResolveCase <a name="aws-cdk-sdk.support.SupportResponsesResolveCase"></a>

#### Initializer <a name="aws-cdk-sdk.support.SupportResponsesResolveCase.Initializer"></a>

```typescript
import { support } from 'aws-cdk-sdk'

new support.SupportResponsesResolveCase(__scope: Construct, __resources: string[], __input: SupportResolveCaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesResolveCase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesResolveCase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesResolveCase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.support.SupportResolveCaseRequest`](#aws-cdk-sdk.support.SupportResolveCaseRequest)

---



#### Properties <a name="Properties"></a>

##### `finalCaseStatus`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesResolveCase.property.finalCaseStatus"></a>

- *Type:* `string`

---

##### `initialCaseStatus`<sup>Required</sup> <a name="aws-cdk-sdk.support.SupportResponsesResolveCase.property.initialCaseStatus"></a>

- *Type:* `string`

---



