# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AcmClient <a name="aws-cdk-sdk.acm.AcmClient"></a>

#### Initializer <a name="aws-cdk-sdk.acm.AcmClient.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.AcmClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToCertificate` <a name="aws-cdk-sdk.acm.AcmClient.addTagsToCertificate"></a>

```typescript
public addTagsToCertificate(input: AcmAddTagsToCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmAddTagsToCertificateRequest`](#aws-cdk-sdk.acm.AcmAddTagsToCertificateRequest)

---

##### `deleteCertificate` <a name="aws-cdk-sdk.acm.AcmClient.deleteCertificate"></a>

```typescript
public deleteCertificate(input: AcmDeleteCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDeleteCertificateRequest`](#aws-cdk-sdk.acm.AcmDeleteCertificateRequest)

---

##### `describeCertificate` <a name="aws-cdk-sdk.acm.AcmClient.describeCertificate"></a>

```typescript
public describeCertificate(input: AcmDescribeCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDescribeCertificateRequest`](#aws-cdk-sdk.acm.AcmDescribeCertificateRequest)

---

##### `exportCertificate` <a name="aws-cdk-sdk.acm.AcmClient.exportCertificate"></a>

```typescript
public exportCertificate(input: AcmExportCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmExportCertificateRequest`](#aws-cdk-sdk.acm.AcmExportCertificateRequest)

---

##### `fetchCertificate` <a name="aws-cdk-sdk.acm.AcmClient.fetchCertificate"></a>

```typescript
public fetchCertificate(input: AcmGetCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmGetCertificateRequest`](#aws-cdk-sdk.acm.AcmGetCertificateRequest)

---

##### `importCertificate` <a name="aws-cdk-sdk.acm.AcmClient.importCertificate"></a>

```typescript
public importCertificate(input: AcmImportCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmImportCertificateRequest`](#aws-cdk-sdk.acm.AcmImportCertificateRequest)

---

##### `listCertificates` <a name="aws-cdk-sdk.acm.AcmClient.listCertificates"></a>

```typescript
public listCertificates(input: AcmListCertificatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmListCertificatesRequest`](#aws-cdk-sdk.acm.AcmListCertificatesRequest)

---

##### `listTagsForCertificate` <a name="aws-cdk-sdk.acm.AcmClient.listTagsForCertificate"></a>

```typescript
public listTagsForCertificate(input: AcmListTagsForCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmListTagsForCertificateRequest`](#aws-cdk-sdk.acm.AcmListTagsForCertificateRequest)

---

##### `removeTagsFromCertificate` <a name="aws-cdk-sdk.acm.AcmClient.removeTagsFromCertificate"></a>

```typescript
public removeTagsFromCertificate(input: AcmRemoveTagsFromCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmRemoveTagsFromCertificateRequest`](#aws-cdk-sdk.acm.AcmRemoveTagsFromCertificateRequest)

---

##### `renewCertificate` <a name="aws-cdk-sdk.acm.AcmClient.renewCertificate"></a>

```typescript
public renewCertificate(input: AcmRenewCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmRenewCertificateRequest`](#aws-cdk-sdk.acm.AcmRenewCertificateRequest)

---

##### `requestCertificate` <a name="aws-cdk-sdk.acm.AcmClient.requestCertificate"></a>

```typescript
public requestCertificate(input: AcmRequestCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmRequestCertificateRequest`](#aws-cdk-sdk.acm.AcmRequestCertificateRequest)

---

##### `resendValidationEmail` <a name="aws-cdk-sdk.acm.AcmClient.resendValidationEmail"></a>

```typescript
public resendValidationEmail(input: AcmResendValidationEmailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmResendValidationEmailRequest`](#aws-cdk-sdk.acm.AcmResendValidationEmailRequest)

---

##### `updateCertificateOptions` <a name="aws-cdk-sdk.acm.AcmClient.updateCertificateOptions"></a>

```typescript
public updateCertificateOptions(input: AcmUpdateCertificateOptionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmUpdateCertificateOptionsRequest`](#aws-cdk-sdk.acm.AcmUpdateCertificateOptionsRequest)

---




## Structs <a name="Structs"></a>

### AcmAddTagsToCertificateRequest <a name="aws-cdk-sdk.acm.AcmAddTagsToCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmAddTagsToCertificateRequest: acm.AcmAddTagsToCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmAddTagsToCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmAddTagsToCertificateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmTag`](#aws-cdk-sdk.acm.AcmTag)[]

---

### AcmCertificateDetail <a name="aws-cdk-sdk.acm.AcmCertificateDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmCertificateDetail: acm.AcmCertificateDetail = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.createdAt"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.domainName"></a>

- *Type:* `string`

---

##### `domainValidationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDomainValidation`](#aws-cdk-sdk.acm.AcmDomainValidation)[]

---

##### `extendedKeyUsages`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.extendedKeyUsages"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmExtendedKeyUsage`](#aws-cdk-sdk.acm.AcmExtendedKeyUsage)[]

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.failureReason"></a>

- *Type:* `string`

---

##### `importedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.importedAt"></a>

- *Type:* `string`

---

##### `inUseBy`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.inUseBy"></a>

- *Type:* `string`[]

---

##### `issuedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.issuedAt"></a>

- *Type:* `string`

---

##### `issuer`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.issuer"></a>

- *Type:* `string`

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `keyUsages`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.keyUsages"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmKeyUsage`](#aws-cdk-sdk.acm.AcmKeyUsage)[]

---

##### `notAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.notBefore"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.options"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmCertificateOptions`](#aws-cdk-sdk.acm.AcmCertificateOptions)

---

##### `renewalEligibility`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.renewalEligibility"></a>

- *Type:* `string`

---

##### `renewalSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.renewalSummary"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmRenewalSummary`](#aws-cdk-sdk.acm.AcmRenewalSummary)

---

##### `revocationReason`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.revocationReason"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.revokedAt"></a>

- *Type:* `string`

---

##### `serial`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.serial"></a>

- *Type:* `string`

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.signatureAlgorithm"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.status"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.subject"></a>

- *Type:* `string`

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateDetail.property.type"></a>

- *Type:* `string`

---

### AcmCertificateOptions <a name="aws-cdk-sdk.acm.AcmCertificateOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmCertificateOptions: acm.AcmCertificateOptions = { ... }
```

##### `certificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

- *Type:* `string`

---

### AcmCertificateSummary <a name="aws-cdk-sdk.acm.AcmCertificateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmCertificateSummary: acm.AcmCertificateSummary = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateSummary.property.certificateArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmCertificateSummary.property.domainName"></a>

- *Type:* `string`

---

### AcmDeleteCertificateRequest <a name="aws-cdk-sdk.acm.AcmDeleteCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmDeleteCertificateRequest: acm.AcmDeleteCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmDeleteCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

### AcmDescribeCertificateRequest <a name="aws-cdk-sdk.acm.AcmDescribeCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmDescribeCertificateRequest: acm.AcmDescribeCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmDescribeCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

### AcmDescribeCertificateResponse <a name="aws-cdk-sdk.acm.AcmDescribeCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmDescribeCertificateResponse: acm.AcmDescribeCertificateResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmDescribeCertificateResponse.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmCertificateDetail`](#aws-cdk-sdk.acm.AcmCertificateDetail)

---

### AcmDomainValidation <a name="aws-cdk-sdk.acm.AcmDomainValidation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmDomainValidation: acm.AcmDomainValidation = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidation.property.domainName"></a>

- *Type:* `string`

---

##### `resourceRecord`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidation.property.resourceRecord"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmResourceRecord`](#aws-cdk-sdk.acm.AcmResourceRecord)

---

##### `validationDomain`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidation.property.validationDomain"></a>

- *Type:* `string`

---

##### `validationEmails`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidation.property.validationEmails"></a>

- *Type:* `string`[]

---

##### `validationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidation.property.validationMethod"></a>

- *Type:* `string`

---

##### `validationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidation.property.validationStatus"></a>

- *Type:* `string`

---

### AcmDomainValidationOption <a name="aws-cdk-sdk.acm.AcmDomainValidationOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmDomainValidationOption: acm.AcmDomainValidationOption = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidationOption.property.domainName"></a>

- *Type:* `string`

---

##### `validationDomain`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmDomainValidationOption.property.validationDomain"></a>

- *Type:* `string`

---

### AcmExportCertificateRequest <a name="aws-cdk-sdk.acm.AcmExportCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmExportCertificateRequest: acm.AcmExportCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmExportCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `passphrase`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmExportCertificateRequest.property.passphrase"></a>

- *Type:* `any`

---

### AcmExportCertificateResponse <a name="aws-cdk-sdk.acm.AcmExportCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmExportCertificateResponse: acm.AcmExportCertificateResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmExportCertificateResponse.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmExportCertificateResponse.property.certificateChain"></a>

- *Type:* `string`

---

##### `privateKey`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmExportCertificateResponse.property.privateKey"></a>

- *Type:* `string`

---

### AcmExtendedKeyUsage <a name="aws-cdk-sdk.acm.AcmExtendedKeyUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmExtendedKeyUsage: acm.AcmExtendedKeyUsage = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmExtendedKeyUsage.property.name"></a>

- *Type:* `string`

---

##### `oid`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmExtendedKeyUsage.property.oid"></a>

- *Type:* `string`

---

### AcmFilters <a name="aws-cdk-sdk.acm.AcmFilters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmFilters: acm.AcmFilters = { ... }
```

##### `extendedKeyUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmFilters.property.extendedKeyUsage"></a>

- *Type:* `string`[]

---

##### `keyTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmFilters.property.keyTypes"></a>

- *Type:* `string`[]

---

##### `keyUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmFilters.property.keyUsage"></a>

- *Type:* `string`[]

---

### AcmGetCertificateRequest <a name="aws-cdk-sdk.acm.AcmGetCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmGetCertificateRequest: acm.AcmGetCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmGetCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

### AcmGetCertificateResponse <a name="aws-cdk-sdk.acm.AcmGetCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmGetCertificateResponse: acm.AcmGetCertificateResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmGetCertificateResponse.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmGetCertificateResponse.property.certificateChain"></a>

- *Type:* `string`

---

### AcmImportCertificateRequest <a name="aws-cdk-sdk.acm.AcmImportCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmImportCertificateRequest: acm.AcmImportCertificateRequest = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmImportCertificateRequest.property.certificate"></a>

- *Type:* `any`

---

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmImportCertificateRequest.property.privateKey"></a>

- *Type:* `any`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmImportCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmImportCertificateRequest.property.certificateChain"></a>

- *Type:* `any`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmImportCertificateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmTag`](#aws-cdk-sdk.acm.AcmTag)[]

---

### AcmImportCertificateResponse <a name="aws-cdk-sdk.acm.AcmImportCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmImportCertificateResponse: acm.AcmImportCertificateResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmImportCertificateResponse.property.certificateArn"></a>

- *Type:* `string`

---

### AcmKeyUsage <a name="aws-cdk-sdk.acm.AcmKeyUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmKeyUsage: acm.AcmKeyUsage = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmKeyUsage.property.name"></a>

- *Type:* `string`

---

### AcmListCertificatesRequest <a name="aws-cdk-sdk.acm.AcmListCertificatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmListCertificatesRequest: acm.AcmListCertificatesRequest = { ... }
```

##### `certificateStatuses`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmListCertificatesRequest.property.certificateStatuses"></a>

- *Type:* `string`[]

---

##### `includes`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmListCertificatesRequest.property.includes"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmFilters`](#aws-cdk-sdk.acm.AcmFilters)

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmListCertificatesRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmListCertificatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AcmListCertificatesResponse <a name="aws-cdk-sdk.acm.AcmListCertificatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmListCertificatesResponse: acm.AcmListCertificatesResponse = { ... }
```

##### `certificateSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmListCertificatesResponse.property.certificateSummaryList"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmCertificateSummary`](#aws-cdk-sdk.acm.AcmCertificateSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmListCertificatesResponse.property.nextToken"></a>

- *Type:* `string`

---

### AcmListTagsForCertificateRequest <a name="aws-cdk-sdk.acm.AcmListTagsForCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmListTagsForCertificateRequest: acm.AcmListTagsForCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmListTagsForCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

### AcmListTagsForCertificateResponse <a name="aws-cdk-sdk.acm.AcmListTagsForCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmListTagsForCertificateResponse: acm.AcmListTagsForCertificateResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmListTagsForCertificateResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmTag`](#aws-cdk-sdk.acm.AcmTag)[]

---

### AcmRemoveTagsFromCertificateRequest <a name="aws-cdk-sdk.acm.AcmRemoveTagsFromCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmRemoveTagsFromCertificateRequest: acm.AcmRemoveTagsFromCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmRemoveTagsFromCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmRemoveTagsFromCertificateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmTag`](#aws-cdk-sdk.acm.AcmTag)[]

---

### AcmRenewalSummary <a name="aws-cdk-sdk.acm.AcmRenewalSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmRenewalSummary: acm.AcmRenewalSummary = { ... }
```

##### `domainValidationOptions`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmRenewalSummary.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDomainValidation`](#aws-cdk-sdk.acm.AcmDomainValidation)[]

---

##### `renewalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmRenewalSummary.property.renewalStatus"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmRenewalSummary.property.updatedAt"></a>

- *Type:* `string`

---

##### `renewalStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRenewalSummary.property.renewalStatusReason"></a>

- *Type:* `string`

---

### AcmRenewCertificateRequest <a name="aws-cdk-sdk.acm.AcmRenewCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmRenewCertificateRequest: acm.AcmRenewCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmRenewCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

### AcmRequestCertificateRequest <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmRequestCertificateRequest: acm.AcmRequestCertificateRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.domainName"></a>

- *Type:* `string`

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `domainValidationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDomainValidationOption`](#aws-cdk-sdk.acm.AcmDomainValidationOption)[]

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.options"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmCertificateOptions`](#aws-cdk-sdk.acm.AcmCertificateOptions)

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmTag`](#aws-cdk-sdk.acm.AcmTag)[]

---

##### `validationMethod`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateRequest.property.validationMethod"></a>

- *Type:* `string`

---

### AcmRequestCertificateResponse <a name="aws-cdk-sdk.acm.AcmRequestCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmRequestCertificateResponse: acm.AcmRequestCertificateResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmRequestCertificateResponse.property.certificateArn"></a>

- *Type:* `string`

---

### AcmResendValidationEmailRequest <a name="aws-cdk-sdk.acm.AcmResendValidationEmailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmResendValidationEmailRequest: acm.AcmResendValidationEmailRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmResendValidationEmailRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmResendValidationEmailRequest.property.domain"></a>

- *Type:* `string`

---

##### `validationDomain`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmResendValidationEmailRequest.property.validationDomain"></a>

- *Type:* `string`

---

### AcmResourceRecord <a name="aws-cdk-sdk.acm.AcmResourceRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmResourceRecord: acm.AcmResourceRecord = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmResourceRecord.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmResourceRecord.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmResourceRecord.property.value"></a>

- *Type:* `string`

---

### AcmTag <a name="aws-cdk-sdk.acm.AcmTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmTag: acm.AcmTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.acm.AcmTag.property.value"></a>

- *Type:* `string`

---

### AcmUpdateCertificateOptionsRequest <a name="aws-cdk-sdk.acm.AcmUpdateCertificateOptionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

const acmUpdateCertificateOptionsRequest: acm.AcmUpdateCertificateOptionsRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmUpdateCertificateOptionsRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.acm.AcmUpdateCertificateOptionsRequest.property.options"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmCertificateOptions`](#aws-cdk-sdk.acm.AcmCertificateOptions)

---

## Classes <a name="Classes"></a>

### ACMResponsesDescribeCertificate <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificate.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesDescribeCertificate(__scope: Construct, __resources: string[], __input: AcmDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDescribeCertificateRequest`](#aws-cdk-sdk.acm.AcmDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificate.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate`](#aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate)

---


### ACMResponsesDescribeCertificateCertificate <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesDescribeCertificateCertificate(__scope: Construct, __resources: string[], __input: AcmDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDescribeCertificateRequest`](#aws-cdk-sdk.acm.AcmDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.createdAt"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.domainName"></a>

- *Type:* `string`

---

##### `domainValidationOptions`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDomainValidation`](#aws-cdk-sdk.acm.AcmDomainValidation)[]

---

##### `extendedKeyUsages`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.extendedKeyUsages"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmExtendedKeyUsage`](#aws-cdk-sdk.acm.AcmExtendedKeyUsage)[]

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.failureReason"></a>

- *Type:* `string`

---

##### `importedAt`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.importedAt"></a>

- *Type:* `string`

---

##### `inUseBy`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.inUseBy"></a>

- *Type:* `string`[]

---

##### `issuedAt`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.issuedAt"></a>

- *Type:* `string`

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.issuer"></a>

- *Type:* `string`

---

##### `keyAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `keyUsages`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.keyUsages"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmKeyUsage`](#aws-cdk-sdk.acm.AcmKeyUsage)[]

---

##### `notAfter`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.notBefore"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.options"></a>

- *Type:* [`aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions`](#aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions)

---

##### `renewalEligibility`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.renewalEligibility"></a>

- *Type:* `string`

---

##### `renewalSummary`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.renewalSummary"></a>

- *Type:* [`aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary`](#aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary)

---

##### `revocationReason`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.revocationReason"></a>

- *Type:* `string`

---

##### `revokedAt`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.revokedAt"></a>

- *Type:* `string`

---

##### `serial`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.serial"></a>

- *Type:* `string`

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.signatureAlgorithm"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.status"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.subject"></a>

- *Type:* `string`

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.subjectAlternativeNames"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificate.property.type"></a>

- *Type:* `string`

---


### ACMResponsesDescribeCertificateCertificateOptions <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesDescribeCertificateCertificateOptions(__scope: Construct, __resources: string[], __input: AcmDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDescribeCertificateRequest`](#aws-cdk-sdk.acm.AcmDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

- *Type:* `string`

---


### ACMResponsesDescribeCertificateCertificateRenewalSummary <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesDescribeCertificateCertificateRenewalSummary(__scope: Construct, __resources: string[], __input: AcmDescribeCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDescribeCertificateRequest`](#aws-cdk-sdk.acm.AcmDescribeCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `domainValidationOptions`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.property.domainValidationOptions"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmDomainValidation`](#aws-cdk-sdk.acm.AcmDomainValidation)[]

---

##### `renewalStatus`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.property.renewalStatus"></a>

- *Type:* `string`

---

##### `renewalStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.property.renewalStatusReason"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesDescribeCertificateCertificateRenewalSummary.property.updatedAt"></a>

- *Type:* `string`

---


### ACMResponsesExportCertificate <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesExportCertificate(__scope: Construct, __resources: string[], __input: AcmExportCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmExportCertificateRequest`](#aws-cdk-sdk.acm.AcmExportCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate.property.certificateChain"></a>

- *Type:* `string`

---

##### `privateKey`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesExportCertificate.property.privateKey"></a>

- *Type:* `string`

---


### ACMResponsesFetchCertificate <a name="aws-cdk-sdk.acm.ACMResponsesFetchCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesFetchCertificate.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesFetchCertificate(__scope: Construct, __resources: string[], __input: AcmGetCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesFetchCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesFetchCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesFetchCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmGetCertificateRequest`](#aws-cdk-sdk.acm.AcmGetCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesFetchCertificate.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesFetchCertificate.property.certificateChain"></a>

- *Type:* `string`

---


### ACMResponsesImportCertificate <a name="aws-cdk-sdk.acm.ACMResponsesImportCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesImportCertificate.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesImportCertificate(__scope: Construct, __resources: string[], __input: AcmImportCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesImportCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesImportCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesImportCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmImportCertificateRequest`](#aws-cdk-sdk.acm.AcmImportCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesImportCertificate.property.certificateArn"></a>

- *Type:* `string`

---


### ACMResponsesListCertificates <a name="aws-cdk-sdk.acm.ACMResponsesListCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesListCertificates.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesListCertificates(__scope: Construct, __resources: string[], __input: AcmListCertificatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmListCertificatesRequest`](#aws-cdk-sdk.acm.AcmListCertificatesRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListCertificates.property.certificateSummaryList"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmCertificateSummary`](#aws-cdk-sdk.acm.AcmCertificateSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListCertificates.property.nextToken"></a>

- *Type:* `string`

---


### ACMResponsesListTagsForCertificate <a name="aws-cdk-sdk.acm.ACMResponsesListTagsForCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesListTagsForCertificate.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesListTagsForCertificate(__scope: Construct, __resources: string[], __input: AcmListTagsForCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListTagsForCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListTagsForCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListTagsForCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmListTagsForCertificateRequest`](#aws-cdk-sdk.acm.AcmListTagsForCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesListTagsForCertificate.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmTag`](#aws-cdk-sdk.acm.AcmTag)[]

---


### ACMResponsesRequestCertificate <a name="aws-cdk-sdk.acm.ACMResponsesRequestCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acm.ACMResponsesRequestCertificate.Initializer"></a>

```typescript
import { acm } from 'aws-cdk-sdk'

new acm.ACMResponsesRequestCertificate(__scope: Construct, __resources: string[], __input: AcmRequestCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesRequestCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesRequestCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesRequestCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acm.AcmRequestCertificateRequest`](#aws-cdk-sdk.acm.AcmRequestCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acm.ACMResponsesRequestCertificate.property.certificateArn"></a>

- *Type:* `string`

---



