# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AcmpcaClient <a name="aws-cdk-sdk.acmpca.AcmpcaClient"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.AcmpcaClient.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.AcmpcaClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createCertificateAuthority` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.createCertificateAuthority"></a>

```typescript
public createCertificateAuthority(input: AcmpcaCreateCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest)

---

##### `createCertificateAuthorityAuditReport` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.createCertificateAuthorityAuditReport"></a>

```typescript
public createCertificateAuthorityAuditReport(input: AcmpcaCreateCertificateAuthorityAuditReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest`](#aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest)

---

##### `createPermission` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.createPermission"></a>

```typescript
public createPermission(input: AcmpcaCreatePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCreatePermissionRequest`](#aws-cdk-sdk.acmpca.AcmpcaCreatePermissionRequest)

---

##### `deleteCertificateAuthority` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.deleteCertificateAuthority"></a>

```typescript
public deleteCertificateAuthority(input: AcmpcaDeleteCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDeleteCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDeleteCertificateAuthorityRequest)

---

##### `deletePermission` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.deletePermission"></a>

```typescript
public deletePermission(input: AcmpcaDeletePermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDeletePermissionRequest`](#aws-cdk-sdk.acmpca.AcmpcaDeletePermissionRequest)

---

##### `deletePolicy` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.deletePolicy"></a>

```typescript
public deletePolicy(input: AcmpcaDeletePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDeletePolicyRequest`](#aws-cdk-sdk.acmpca.AcmpcaDeletePolicyRequest)

---

##### `describeCertificateAuthority` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.describeCertificateAuthority"></a>

```typescript
public describeCertificateAuthority(input: AcmpcaDescribeCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest)

---

##### `describeCertificateAuthorityAuditReport` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.describeCertificateAuthorityAuditReport"></a>

```typescript
public describeCertificateAuthorityAuditReport(input: AcmpcaDescribeCertificateAuthorityAuditReportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest)

---

##### `fetchCertificate` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.fetchCertificate"></a>

```typescript
public fetchCertificate(input: AcmpcaGetCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetCertificateRequest)

---

##### `fetchCertificateAuthorityCertificate` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.fetchCertificateAuthorityCertificate"></a>

```typescript
public fetchCertificateAuthorityCertificate(input: AcmpcaGetCertificateAuthorityCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateRequest)

---

##### `fetchCertificateAuthorityCsr` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.fetchCertificateAuthorityCsr"></a>

```typescript
public fetchCertificateAuthorityCsr(input: AcmpcaGetCertificateAuthorityCsrRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrRequest)

---

##### `fetchPolicy` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.fetchPolicy"></a>

```typescript
public fetchPolicy(input: AcmpcaGetPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetPolicyRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetPolicyRequest)

---

##### `importCertificateAuthorityCertificate` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.importCertificateAuthorityCertificate"></a>

```typescript
public importCertificateAuthorityCertificate(input: AcmpcaImportCertificateAuthorityCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaImportCertificateAuthorityCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaImportCertificateAuthorityCertificateRequest)

---

##### `issueCertificate` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.issueCertificate"></a>

```typescript
public issueCertificate(input: AcmpcaIssueCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest)

---

##### `listCertificateAuthorities` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.listCertificateAuthorities"></a>

```typescript
public listCertificateAuthorities(input: AcmpcaListCertificateAuthoritiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest`](#aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest)

---

##### `listPermissions` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.listPermissions"></a>

```typescript
public listPermissions(input: AcmpcaListPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest`](#aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest)

---

##### `listTags` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.listTags"></a>

```typescript
public listTags(input: AcmpcaListTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaListTagsRequest`](#aws-cdk-sdk.acmpca.AcmpcaListTagsRequest)

---

##### `putPolicy` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.putPolicy"></a>

```typescript
public putPolicy(input: AcmpcaPutPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaPutPolicyRequest`](#aws-cdk-sdk.acmpca.AcmpcaPutPolicyRequest)

---

##### `restoreCertificateAuthority` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.restoreCertificateAuthority"></a>

```typescript
public restoreCertificateAuthority(input: AcmpcaRestoreCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaRestoreCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaRestoreCertificateAuthorityRequest)

---

##### `revokeCertificate` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.revokeCertificate"></a>

```typescript
public revokeCertificate(input: AcmpcaRevokeCertificateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaRevokeCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaRevokeCertificateRequest)

---

##### `tagCertificateAuthority` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.tagCertificateAuthority"></a>

```typescript
public tagCertificateAuthority(input: AcmpcaTagCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaTagCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaTagCertificateAuthorityRequest)

---

##### `untagCertificateAuthority` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.untagCertificateAuthority"></a>

```typescript
public untagCertificateAuthority(input: AcmpcaUntagCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaUntagCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaUntagCertificateAuthorityRequest)

---

##### `updateCertificateAuthority` <a name="aws-cdk-sdk.acmpca.AcmpcaClient.updateCertificateAuthority"></a>

```typescript
public updateCertificateAuthority(input: AcmpcaUpdateCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaUpdateCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaUpdateCertificateAuthorityRequest)

---




## Structs <a name="Structs"></a>

### Acmpcaasn1Subject <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaasn1Subject: acmpca.Acmpcaasn1Subject = { ... }
```

##### `commonName`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.commonName"></a>

- *Type:* `string`

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.country"></a>

- *Type:* `string`

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.distinguishedNameQualifier"></a>

- *Type:* `string`

---

##### `generationQualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.generationQualifier"></a>

- *Type:* `string`

---

##### `givenName`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.givenName"></a>

- *Type:* `string`

---

##### `initials`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.initials"></a>

- *Type:* `string`

---

##### `locality`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.locality"></a>

- *Type:* `string`

---

##### `organization`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.organization"></a>

- *Type:* `string`

---

##### `organizationalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.organizationalUnit"></a>

- *Type:* `string`

---

##### `pseudonym`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.pseudonym"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.serialNumber"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.state"></a>

- *Type:* `string`

---

##### `surname`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.surname"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.Acmpcaasn1Subject.property.title"></a>

- *Type:* `string`

---

### AcmpcaCertificateAuthority <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCertificateAuthority: acmpca.AcmpcaCertificateAuthority = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.arn"></a>

- *Type:* `string`

---

##### `certificateAuthorityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.certificateAuthorityConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration`](#aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration)

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.createdAt"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.failureReason"></a>

- *Type:* `string`

---

##### `lastStateChangeAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.lastStateChangeAt"></a>

- *Type:* `string`

---

##### `notAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.notBefore"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.ownerAccount"></a>

- *Type:* `string`

---

##### `restorableUntil`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.restorableUntil"></a>

- *Type:* `string`

---

##### `revocationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.revocationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration`](#aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration)

---

##### `serial`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.serial"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority.property.type"></a>

- *Type:* `string`

---

### AcmpcaCertificateAuthorityConfiguration <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCertificateAuthorityConfiguration: acmpca.AcmpcaCertificateAuthorityConfiguration = { ... }
```

##### `keyAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration.property.subject"></a>

- *Type:* [`aws-cdk-sdk.acmpca.Acmpcaasn1Subject`](#aws-cdk-sdk.acmpca.Acmpcaasn1Subject)

---

### AcmpcaCreateCertificateAuthorityAuditReportRequest <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCreateCertificateAuthorityAuditReportRequest: acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest = { ... }
```

##### `auditReportResponseFormat`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest.property.auditReportResponseFormat"></a>

- *Type:* `string`

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest.property.s3BucketName"></a>

- *Type:* `string`

---

### AcmpcaCreateCertificateAuthorityAuditReportResponse <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCreateCertificateAuthorityAuditReportResponse: acmpca.AcmpcaCreateCertificateAuthorityAuditReportResponse = { ... }
```

##### `auditReportId`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportResponse.property.auditReportId"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportResponse.property.s3Key"></a>

- *Type:* `string`

---

### AcmpcaCreateCertificateAuthorityRequest <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCreateCertificateAuthorityRequest: acmpca.AcmpcaCreateCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest.property.certificateAuthorityConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration`](#aws-cdk-sdk.acmpca.AcmpcaCertificateAuthorityConfiguration)

---

##### `certificateAuthorityType`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest.property.certificateAuthorityType"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `revocationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest.property.revocationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration`](#aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaTag`](#aws-cdk-sdk.acmpca.AcmpcaTag)[]

---

### AcmpcaCreateCertificateAuthorityResponse <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCreateCertificateAuthorityResponse: acmpca.AcmpcaCreateCertificateAuthorityResponse = { ... }
```

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityResponse.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

### AcmpcaCreatePermissionRequest <a name="aws-cdk-sdk.acmpca.AcmpcaCreatePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCreatePermissionRequest: acmpca.AcmpcaCreatePermissionRequest = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreatePermissionRequest.property.actions"></a>

- *Type:* `string`[]

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreatePermissionRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreatePermissionRequest.property.principal"></a>

- *Type:* `string`

---

##### `sourceAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCreatePermissionRequest.property.sourceAccount"></a>

- *Type:* `string`

---

### AcmpcaCrlConfiguration <a name="aws-cdk-sdk.acmpca.AcmpcaCrlConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaCrlConfiguration: acmpca.AcmpcaCrlConfiguration = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCrlConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `customCname`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCrlConfiguration.property.customCname"></a>

- *Type:* `string`

---

##### `expirationInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCrlConfiguration.property.expirationInDays"></a>

- *Type:* `number`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaCrlConfiguration.property.s3BucketName"></a>

- *Type:* `string`

---

### AcmpcaDeleteCertificateAuthorityRequest <a name="aws-cdk-sdk.acmpca.AcmpcaDeleteCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaDeleteCertificateAuthorityRequest: acmpca.AcmpcaDeleteCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDeleteCertificateAuthorityRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `permanentDeletionTimeInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDeleteCertificateAuthorityRequest.property.permanentDeletionTimeInDays"></a>

- *Type:* `number`

---

### AcmpcaDeletePermissionRequest <a name="aws-cdk-sdk.acmpca.AcmpcaDeletePermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaDeletePermissionRequest: acmpca.AcmpcaDeletePermissionRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDeletePermissionRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDeletePermissionRequest.property.principal"></a>

- *Type:* `string`

---

##### `sourceAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDeletePermissionRequest.property.sourceAccount"></a>

- *Type:* `string`

---

### AcmpcaDeletePolicyRequest <a name="aws-cdk-sdk.acmpca.AcmpcaDeletePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaDeletePolicyRequest: acmpca.AcmpcaDeletePolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDeletePolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AcmpcaDescribeCertificateAuthorityAuditReportRequest <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaDescribeCertificateAuthorityAuditReportRequest: acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest = { ... }
```

##### `auditReportId`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest.property.auditReportId"></a>

- *Type:* `string`

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

### AcmpcaDescribeCertificateAuthorityAuditReportResponse <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaDescribeCertificateAuthorityAuditReportResponse: acmpca.AcmpcaDescribeCertificateAuthorityAuditReportResponse = { ... }
```

##### `auditReportStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportResponse.property.auditReportStatus"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportResponse.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportResponse.property.s3Key"></a>

- *Type:* `string`

---

### AcmpcaDescribeCertificateAuthorityRequest <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaDescribeCertificateAuthorityRequest: acmpca.AcmpcaDescribeCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

### AcmpcaDescribeCertificateAuthorityResponse <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaDescribeCertificateAuthorityResponse: acmpca.AcmpcaDescribeCertificateAuthorityResponse = { ... }
```

##### `certificateAuthority`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityResponse.property.certificateAuthority"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority`](#aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority)

---

### AcmpcaGetCertificateAuthorityCertificateRequest <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetCertificateAuthorityCertificateRequest: acmpca.AcmpcaGetCertificateAuthorityCertificateRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

### AcmpcaGetCertificateAuthorityCertificateResponse <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetCertificateAuthorityCertificateResponse: acmpca.AcmpcaGetCertificateAuthorityCertificateResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateResponse.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateResponse.property.certificateChain"></a>

- *Type:* `string`

---

### AcmpcaGetCertificateAuthorityCsrRequest <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetCertificateAuthorityCsrRequest: acmpca.AcmpcaGetCertificateAuthorityCsrRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

### AcmpcaGetCertificateAuthorityCsrResponse <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetCertificateAuthorityCsrResponse: acmpca.AcmpcaGetCertificateAuthorityCsrResponse = { ... }
```

##### `csr`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrResponse.property.csr"></a>

- *Type:* `string`

---

### AcmpcaGetCertificateRequest <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetCertificateRequest: acmpca.AcmpcaGetCertificateRequest = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateRequest.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

### AcmpcaGetCertificateResponse <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetCertificateResponse: acmpca.AcmpcaGetCertificateResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateResponse.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetCertificateResponse.property.certificateChain"></a>

- *Type:* `string`

---

### AcmpcaGetPolicyRequest <a name="aws-cdk-sdk.acmpca.AcmpcaGetPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetPolicyRequest: acmpca.AcmpcaGetPolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AcmpcaGetPolicyResponse <a name="aws-cdk-sdk.acmpca.AcmpcaGetPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaGetPolicyResponse: acmpca.AcmpcaGetPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaGetPolicyResponse.property.policy"></a>

- *Type:* `string`

---

### AcmpcaImportCertificateAuthorityCertificateRequest <a name="aws-cdk-sdk.acmpca.AcmpcaImportCertificateAuthorityCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaImportCertificateAuthorityCertificateRequest: acmpca.AcmpcaImportCertificateAuthorityCertificateRequest = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaImportCertificateAuthorityCertificateRequest.property.certificate"></a>

- *Type:* `any`

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaImportCertificateAuthorityCertificateRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaImportCertificateAuthorityCertificateRequest.property.certificateChain"></a>

- *Type:* `any`

---

### AcmpcaIssueCertificateRequest <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaIssueCertificateRequest: acmpca.AcmpcaIssueCertificateRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `csr`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest.property.csr"></a>

- *Type:* `any`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `validity`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest.property.validity"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaValidity`](#aws-cdk-sdk.acmpca.AcmpcaValidity)

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest.property.templateArn"></a>

- *Type:* `string`

---

### AcmpcaIssueCertificateResponse <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaIssueCertificateResponse: acmpca.AcmpcaIssueCertificateResponse = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaIssueCertificateResponse.property.certificateArn"></a>

- *Type:* `string`

---

### AcmpcaListCertificateAuthoritiesRequest <a name="aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaListCertificateAuthoritiesRequest: acmpca.AcmpcaListCertificateAuthoritiesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest.property.resourceOwner"></a>

- *Type:* `string`

---

### AcmpcaListCertificateAuthoritiesResponse <a name="aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaListCertificateAuthoritiesResponse: acmpca.AcmpcaListCertificateAuthoritiesResponse = { ... }
```

##### `certificateAuthorities`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesResponse.property.certificateAuthorities"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority`](#aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesResponse.property.nextToken"></a>

- *Type:* `string`

---

### AcmpcaListPermissionsRequest <a name="aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaListPermissionsRequest: acmpca.AcmpcaListPermissionsRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AcmpcaListPermissionsResponse <a name="aws-cdk-sdk.acmpca.AcmpcaListPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaListPermissionsResponse: acmpca.AcmpcaListPermissionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListPermissionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaPermission`](#aws-cdk-sdk.acmpca.AcmpcaPermission)[]

---

### AcmpcaListTagsRequest <a name="aws-cdk-sdk.acmpca.AcmpcaListTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaListTagsRequest: acmpca.AcmpcaListTagsRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListTagsRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListTagsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListTagsRequest.property.nextToken"></a>

- *Type:* `string`

---

### AcmpcaListTagsResponse <a name="aws-cdk-sdk.acmpca.AcmpcaListTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaListTagsResponse: acmpca.AcmpcaListTagsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListTagsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaListTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaTag`](#aws-cdk-sdk.acmpca.AcmpcaTag)[]

---

### AcmpcaPermission <a name="aws-cdk-sdk.acmpca.AcmpcaPermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaPermission: acmpca.AcmpcaPermission = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPermission.property.actions"></a>

- *Type:* `string`[]

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPermission.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPermission.property.createdAt"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPermission.property.policy"></a>

- *Type:* `string`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPermission.property.principal"></a>

- *Type:* `string`

---

##### `sourceAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPermission.property.sourceAccount"></a>

- *Type:* `string`

---

### AcmpcaPutPolicyRequest <a name="aws-cdk-sdk.acmpca.AcmpcaPutPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaPutPolicyRequest: acmpca.AcmpcaPutPolicyRequest = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPutPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaPutPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AcmpcaRestoreCertificateAuthorityRequest <a name="aws-cdk-sdk.acmpca.AcmpcaRestoreCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaRestoreCertificateAuthorityRequest: acmpca.AcmpcaRestoreCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaRestoreCertificateAuthorityRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

### AcmpcaRevocationConfiguration <a name="aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaRevocationConfiguration: acmpca.AcmpcaRevocationConfiguration = { ... }
```

##### `crlConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration.property.crlConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCrlConfiguration`](#aws-cdk-sdk.acmpca.AcmpcaCrlConfiguration)

---

### AcmpcaRevokeCertificateRequest <a name="aws-cdk-sdk.acmpca.AcmpcaRevokeCertificateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaRevokeCertificateRequest: acmpca.AcmpcaRevokeCertificateRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaRevokeCertificateRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `certificateSerial`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaRevokeCertificateRequest.property.certificateSerial"></a>

- *Type:* `string`

---

##### `revocationReason`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaRevokeCertificateRequest.property.revocationReason"></a>

- *Type:* `string`

---

### AcmpcaTag <a name="aws-cdk-sdk.acmpca.AcmpcaTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaTag: acmpca.AcmpcaTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaTag.property.value"></a>

- *Type:* `string`

---

### AcmpcaTagCertificateAuthorityRequest <a name="aws-cdk-sdk.acmpca.AcmpcaTagCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaTagCertificateAuthorityRequest: acmpca.AcmpcaTagCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaTagCertificateAuthorityRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaTagCertificateAuthorityRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaTag`](#aws-cdk-sdk.acmpca.AcmpcaTag)[]

---

### AcmpcaUntagCertificateAuthorityRequest <a name="aws-cdk-sdk.acmpca.AcmpcaUntagCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaUntagCertificateAuthorityRequest: acmpca.AcmpcaUntagCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaUntagCertificateAuthorityRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaUntagCertificateAuthorityRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaTag`](#aws-cdk-sdk.acmpca.AcmpcaTag)[]

---

### AcmpcaUpdateCertificateAuthorityRequest <a name="aws-cdk-sdk.acmpca.AcmpcaUpdateCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaUpdateCertificateAuthorityRequest: acmpca.AcmpcaUpdateCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaUpdateCertificateAuthorityRequest.property.certificateAuthorityArn"></a>

- *Type:* `string`

---

##### `revocationConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaUpdateCertificateAuthorityRequest.property.revocationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration`](#aws-cdk-sdk.acmpca.AcmpcaRevocationConfiguration)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaUpdateCertificateAuthorityRequest.property.status"></a>

- *Type:* `string`

---

### AcmpcaValidity <a name="aws-cdk-sdk.acmpca.AcmpcaValidity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

const acmpcaValidity: acmpca.AcmpcaValidity = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaValidity.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.AcmpcaValidity.property.value"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### ACMPCAResponsesCreateCertificateAuthority <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthority.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesCreateCertificateAuthority(__scope: Construct, __resources: string[], __input: AcmpcaCreateCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthority.property.certificateAuthorityArn"></a>

- *Type:* `string`

---


### ACMPCAResponsesCreateCertificateAuthorityAuditReport <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport(__scope: Construct, __resources: string[], __input: AcmpcaCreateCertificateAuthorityAuditReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest`](#aws-cdk-sdk.acmpca.AcmpcaCreateCertificateAuthorityAuditReportRequest)

---



#### Properties <a name="Properties"></a>

##### `auditReportId`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport.property.auditReportId"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesCreateCertificateAuthorityAuditReport.property.s3Key"></a>

- *Type:* `string`

---


### ACMPCAResponsesDescribeCertificateAuthority <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthority.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesDescribeCertificateAuthority(__scope: Construct, __resources: string[], __input: AcmpcaDescribeCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthority`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthority.property.certificateAuthority"></a>

- *Type:* [`aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority`](#aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority)

---


### ACMPCAResponsesDescribeCertificateAuthorityAuditReport <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport(__scope: Construct, __resources: string[], __input: AcmpcaDescribeCertificateAuthorityAuditReportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityAuditReportRequest)

---



#### Properties <a name="Properties"></a>

##### `auditReportStatus`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.property.auditReportStatus"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.property.createdAt"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityAuditReport.property.s3Key"></a>

- *Type:* `string`

---


### ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority(__scope: Construct, __resources: string[], __input: AcmpcaDescribeCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.arn"></a>

- *Type:* `string`

---

##### `certificateAuthorityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.certificateAuthorityConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration`](#aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration)

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.createdAt"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.failureReason"></a>

- *Type:* `string`

---

##### `lastStateChangeAt`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.lastStateChangeAt"></a>

- *Type:* `string`

---

##### `notAfter`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.notAfter"></a>

- *Type:* `string`

---

##### `notBefore`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.notBefore"></a>

- *Type:* `string`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.ownerAccount"></a>

- *Type:* `string`

---

##### `restorableUntil`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.restorableUntil"></a>

- *Type:* `string`

---

##### `revocationConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.revocationConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration`](#aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration)

---

##### `serial`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.serial"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthority.property.type"></a>

- *Type:* `string`

---


### ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration(__scope: Construct, __resources: string[], __input: AcmpcaDescribeCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `keyAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration.property.keyAlgorithm"></a>

- *Type:* `string`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfiguration.property.subject"></a>

- *Type:* [`aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject`](#aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject)

---


### ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject(__scope: Construct, __resources: string[], __input: AcmpcaDescribeCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `commonName`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.commonName"></a>

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.country"></a>

- *Type:* `string`

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.distinguishedNameQualifier"></a>

- *Type:* `string`

---

##### `generationQualifier`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.generationQualifier"></a>

- *Type:* `string`

---

##### `givenName`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.givenName"></a>

- *Type:* `string`

---

##### `initials`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.initials"></a>

- *Type:* `string`

---

##### `locality`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.locality"></a>

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organization"></a>

- *Type:* `string`

---

##### `organizationalUnit`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.organizationalUnit"></a>

- *Type:* `string`

---

##### `pseudonym`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.pseudonym"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.serialNumber"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.state"></a>

- *Type:* `string`

---

##### `surname`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.surname"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityCertificateAuthorityConfigurationSubject.property.title"></a>

- *Type:* `string`

---


### ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration(__scope: Construct, __resources: string[], __input: AcmpcaDescribeCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `crlConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfiguration.property.crlConfiguration"></a>

- *Type:* [`aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration`](#aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration)

---


### ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration(__scope: Construct, __resources: string[], __input: AcmpcaDescribeCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest`](#aws-cdk-sdk.acmpca.AcmpcaDescribeCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `customCname`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `expirationInDays`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays"></a>

- *Type:* `number`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesDescribeCertificateAuthorityCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName"></a>

- *Type:* `string`

---


### ACMPCAResponsesFetchCertificate <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificate.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesFetchCertificate(__scope: Construct, __resources: string[], __input: AcmpcaGetCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificate.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificate.property.certificateChain"></a>

- *Type:* `string`

---


### ACMPCAResponsesFetchCertificateAuthorityCertificate <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate(__scope: Construct, __resources: string[], __input: AcmpcaGetCertificateAuthorityCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate.property.certificate"></a>

- *Type:* `string`

---

##### `certificateChain`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCertificate.property.certificateChain"></a>

- *Type:* `string`

---


### ACMPCAResponsesFetchCertificateAuthorityCsr <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCsr"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCsr.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesFetchCertificateAuthorityCsr(__scope: Construct, __resources: string[], __input: AcmpcaGetCertificateAuthorityCsrRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCsr.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCsr.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCsr.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetCertificateAuthorityCsrRequest)

---



#### Properties <a name="Properties"></a>

##### `csr`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchCertificateAuthorityCsr.property.csr"></a>

- *Type:* `string`

---


### ACMPCAResponsesFetchPolicy <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchPolicy.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesFetchPolicy(__scope: Construct, __resources: string[], __input: AcmpcaGetPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaGetPolicyRequest`](#aws-cdk-sdk.acmpca.AcmpcaGetPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesFetchPolicy.property.policy"></a>

- *Type:* `string`

---


### ACMPCAResponsesIssueCertificate <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesIssueCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesIssueCertificate.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesIssueCertificate(__scope: Construct, __resources: string[], __input: AcmpcaIssueCertificateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesIssueCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesIssueCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesIssueCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest`](#aws-cdk-sdk.acmpca.AcmpcaIssueCertificateRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesIssueCertificate.property.certificateArn"></a>

- *Type:* `string`

---


### ACMPCAResponsesListCertificateAuthorities <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListCertificateAuthorities"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListCertificateAuthorities.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesListCertificateAuthorities(__scope: Construct, __resources: string[], __input: AcmpcaListCertificateAuthoritiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListCertificateAuthorities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListCertificateAuthorities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListCertificateAuthorities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest`](#aws-cdk-sdk.acmpca.AcmpcaListCertificateAuthoritiesRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorities`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListCertificateAuthorities.property.certificateAuthorities"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority`](#aws-cdk-sdk.acmpca.AcmpcaCertificateAuthority)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListCertificateAuthorities.property.nextToken"></a>

- *Type:* `string`

---


### ACMPCAResponsesListPermissions <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListPermissions.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesListPermissions(__scope: Construct, __resources: string[], __input: AcmpcaListPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest`](#aws-cdk-sdk.acmpca.AcmpcaListPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListPermissions.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaPermission`](#aws-cdk-sdk.acmpca.AcmpcaPermission)[]

---


### ACMPCAResponsesListTags <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListTags"></a>

#### Initializer <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListTags.Initializer"></a>

```typescript
import { acmpca } from 'aws-cdk-sdk'

new acmpca.ACMPCAResponsesListTags(__scope: Construct, __resources: string[], __input: AcmpcaListTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaListTagsRequest`](#aws-cdk-sdk.acmpca.AcmpcaListTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListTags.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.acmpca.ACMPCAResponsesListTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.acmpca.AcmpcaTag`](#aws-cdk-sdk.acmpca.AcmpcaTag)[]

---



