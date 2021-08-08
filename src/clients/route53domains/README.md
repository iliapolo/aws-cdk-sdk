# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Route53DomainsClient <a name="aws-cdk-sdk.route53domains.Route53DomainsClient"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptDomainTransferFromAnotherAwsAccount` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.acceptDomainTransferFromAnotherAwsAccount"></a>

```typescript
public acceptDomainTransferFromAnotherAwsAccount(input: Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest)

---

##### `cancelDomainTransferToAnotherAwsAccount` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.cancelDomainTransferToAnotherAwsAccount"></a>

```typescript
public cancelDomainTransferToAnotherAwsAccount(input: Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest)

---

##### `checkDomainAvailability` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.checkDomainAvailability"></a>

```typescript
public checkDomainAvailability(input: Route53DomainsCheckDomainAvailabilityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityRequest`](#aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityRequest)

---

##### `checkDomainTransferability` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.checkDomainTransferability"></a>

```typescript
public checkDomainTransferability(input: Route53DomainsCheckDomainTransferabilityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest`](#aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest)

---

##### `deleteTagsForDomain` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.deleteTagsForDomain"></a>

```typescript
public deleteTagsForDomain(input: Route53DomainsDeleteTagsForDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDeleteTagsForDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsDeleteTagsForDomainRequest)

---

##### `disableDomainAutoRenew` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.disableDomainAutoRenew"></a>

```typescript
public disableDomainAutoRenew(input: Route53DomainsDisableDomainAutoRenewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDisableDomainAutoRenewRequest`](#aws-cdk-sdk.route53domains.Route53DomainsDisableDomainAutoRenewRequest)

---

##### `disableDomainTransferLock` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.disableDomainTransferLock"></a>

```typescript
public disableDomainTransferLock(input: Route53DomainsDisableDomainTransferLockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockRequest`](#aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockRequest)

---

##### `enableDomainAutoRenew` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.enableDomainAutoRenew"></a>

```typescript
public enableDomainAutoRenew(input: Route53DomainsEnableDomainAutoRenewRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsEnableDomainAutoRenewRequest`](#aws-cdk-sdk.route53domains.Route53DomainsEnableDomainAutoRenewRequest)

---

##### `enableDomainTransferLock` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.enableDomainTransferLock"></a>

```typescript
public enableDomainTransferLock(input: Route53DomainsEnableDomainTransferLockRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockRequest`](#aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockRequest)

---

##### `fetchContactReachabilityStatus` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.fetchContactReachabilityStatus"></a>

```typescript
public fetchContactReachabilityStatus(input: Route53DomainsGetContactReachabilityStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusRequest)

---

##### `fetchDomainDetail` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.fetchDomainDetail"></a>

```typescript
public fetchDomainDetail(input: Route53DomainsGetDomainDetailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest)

---

##### `fetchDomainSuggestions` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.fetchDomainSuggestions"></a>

```typescript
public fetchDomainSuggestions(input: Route53DomainsGetDomainSuggestionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest)

---

##### `fetchOperationDetail` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.fetchOperationDetail"></a>

```typescript
public fetchOperationDetail(input: Route53DomainsGetOperationDetailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailRequest)

---

##### `listDomains` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.listDomains"></a>

```typescript
public listDomains(input: Route53DomainsListDomainsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsListDomainsRequest`](#aws-cdk-sdk.route53domains.Route53DomainsListDomainsRequest)

---

##### `listOperations` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.listOperations"></a>

```typescript
public listOperations(input: Route53DomainsListOperationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest`](#aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest)

---

##### `listTagsForDomain` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.listTagsForDomain"></a>

```typescript
public listTagsForDomain(input: Route53DomainsListTagsForDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainRequest)

---

##### `registerDomain` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.registerDomain"></a>

```typescript
public registerDomain(input: Route53DomainsRegisterDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest)

---

##### `rejectDomainTransferFromAnotherAwsAccount` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.rejectDomainTransferFromAnotherAwsAccount"></a>

```typescript
public rejectDomainTransferFromAnotherAwsAccount(input: Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest)

---

##### `renewDomain` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.renewDomain"></a>

```typescript
public renewDomain(input: Route53DomainsRenewDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest)

---

##### `resendContactReachabilityEmail` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.resendContactReachabilityEmail"></a>

```typescript
public resendContactReachabilityEmail(input: Route53DomainsResendContactReachabilityEmailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailRequest)

---

##### `retrieveDomainAuthCode` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.retrieveDomainAuthCode"></a>

```typescript
public retrieveDomainAuthCode(input: Route53DomainsRetrieveDomainAuthCodeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeRequest)

---

##### `transferDomain` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.transferDomain"></a>

```typescript
public transferDomain(input: Route53DomainsTransferDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest)

---

##### `transferDomainToAnotherAwsAccount` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.transferDomainToAnotherAwsAccount"></a>

```typescript
public transferDomainToAnotherAwsAccount(input: Route53DomainsTransferDomainToAnotherAwsAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest)

---

##### `updateDomainContact` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.updateDomainContact"></a>

```typescript
public updateDomainContact(input: Route53DomainsUpdateDomainContactRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest`](#aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest)

---

##### `updateDomainContactPrivacy` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.updateDomainContactPrivacy"></a>

```typescript
public updateDomainContactPrivacy(input: Route53DomainsUpdateDomainContactPrivacyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest`](#aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest)

---

##### `updateDomainNameservers` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.updateDomainNameservers"></a>

```typescript
public updateDomainNameservers(input: Route53DomainsUpdateDomainNameserversRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest`](#aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest)

---

##### `updateTagsForDomain` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.updateTagsForDomain"></a>

```typescript
public updateTagsForDomain(input: Route53DomainsUpdateTagsForDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsUpdateTagsForDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsUpdateTagsForDomainRequest)

---

##### `viewBilling` <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.viewBilling"></a>

```typescript
public viewBilling(input: Route53DomainsViewBillingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest`](#aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest)

---




## Structs <a name="Structs"></a>

### Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest: route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest.property.domainName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest.property.password"></a>

- *Type:* `string`

---

### Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse: route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsBillingRecord <a name="aws-cdk-sdk.route53domains.Route53DomainsBillingRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsBillingRecord: route53domains.Route53DomainsBillingRecord = { ... }
```

##### `billDate`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsBillingRecord.property.billDate"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsBillingRecord.property.domainName"></a>

- *Type:* `string`

---

##### `invoiceId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsBillingRecord.property.invoiceId"></a>

- *Type:* `string`

---

##### `operation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsBillingRecord.property.operation"></a>

- *Type:* `string`

---

##### `price`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsBillingRecord.property.price"></a>

- *Type:* `number`

---

### Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsCancelDomainTransferToAnotherAwsAccountRequest: route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsCancelDomainTransferToAnotherAwsAccountResponse: route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsCheckDomainAvailabilityRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsCheckDomainAvailabilityRequest: route53domains.Route53DomainsCheckDomainAvailabilityRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityRequest.property.domainName"></a>

- *Type:* `string`

---

##### `idnLangCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityRequest.property.idnLangCode"></a>

- *Type:* `string`

---

### Route53DomainsCheckDomainAvailabilityResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsCheckDomainAvailabilityResponse: route53domains.Route53DomainsCheckDomainAvailabilityResponse = { ... }
```

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityResponse.property.availability"></a>

- *Type:* `string`

---

### Route53DomainsCheckDomainTransferabilityRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsCheckDomainTransferabilityRequest: route53domains.Route53DomainsCheckDomainTransferabilityRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest.property.domainName"></a>

- *Type:* `string`

---

##### `authCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest.property.authCode"></a>

- *Type:* `string`

---

### Route53DomainsCheckDomainTransferabilityResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsCheckDomainTransferabilityResponse: route53domains.Route53DomainsCheckDomainTransferabilityResponse = { ... }
```

##### `transferability`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityResponse.property.transferability"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDomainTransferability`](#aws-cdk-sdk.route53domains.Route53DomainsDomainTransferability)

---

### Route53DomainsContactDetail <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsContactDetail: route53domains.Route53DomainsContactDetail = { ... }
```

##### `addressLine1`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.addressLine1"></a>

- *Type:* `string`

---

##### `addressLine2`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.addressLine2"></a>

- *Type:* `string`

---

##### `city`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.city"></a>

- *Type:* `string`

---

##### `contactType`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.contactType"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.countryCode"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.email"></a>

- *Type:* `string`

---

##### `extraParams`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.extraParams"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsExtraParam`](#aws-cdk-sdk.route53domains.Route53DomainsExtraParam)[]

---

##### `fax`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.fax"></a>

- *Type:* `string`

---

##### `firstName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.lastName"></a>

- *Type:* `string`

---

##### `organizationName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.organizationName"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.phoneNumber"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.state"></a>

- *Type:* `string`

---

##### `zipCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsContactDetail.property.zipCode"></a>

- *Type:* `string`

---

### Route53DomainsDeleteTagsForDomainRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsDeleteTagsForDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDeleteTagsForDomainRequest: route53domains.Route53DomainsDeleteTagsForDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDeleteTagsForDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `tagsToDelete`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDeleteTagsForDomainRequest.property.tagsToDelete"></a>

- *Type:* `string`[]

---

### Route53DomainsDeleteTagsForDomainResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsDeleteTagsForDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDeleteTagsForDomainResponse: route53domains.Route53DomainsDeleteTagsForDomainResponse = { ... }
```

### Route53DomainsDisableDomainAutoRenewRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsDisableDomainAutoRenewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDisableDomainAutoRenewRequest: route53domains.Route53DomainsDisableDomainAutoRenewRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDisableDomainAutoRenewRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsDisableDomainAutoRenewResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsDisableDomainAutoRenewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDisableDomainAutoRenewResponse: route53domains.Route53DomainsDisableDomainAutoRenewResponse = { ... }
```

### Route53DomainsDisableDomainTransferLockRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDisableDomainTransferLockRequest: route53domains.Route53DomainsDisableDomainTransferLockRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsDisableDomainTransferLockResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDisableDomainTransferLockResponse: route53domains.Route53DomainsDisableDomainTransferLockResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsDomainSuggestion <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSuggestion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDomainSuggestion: route53domains.Route53DomainsDomainSuggestion = { ... }
```

##### `availability`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSuggestion.property.availability"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSuggestion.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsDomainSummary <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDomainSummary: route53domains.Route53DomainsDomainSummary = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSummary.property.domainName"></a>

- *Type:* `string`

---

##### `autoRenew`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSummary.property.autoRenew"></a>

- *Type:* `boolean`

---

##### `expiry`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSummary.property.expiry"></a>

- *Type:* `string`

---

##### `transferLock`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainSummary.property.transferLock"></a>

- *Type:* `boolean`

---

### Route53DomainsDomainTransferability <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainTransferability"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsDomainTransferability: route53domains.Route53DomainsDomainTransferability = { ... }
```

##### `transferable`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsDomainTransferability.property.transferable"></a>

- *Type:* `string`

---

### Route53DomainsEnableDomainAutoRenewRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsEnableDomainAutoRenewRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsEnableDomainAutoRenewRequest: route53domains.Route53DomainsEnableDomainAutoRenewRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsEnableDomainAutoRenewRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsEnableDomainAutoRenewResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsEnableDomainAutoRenewResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsEnableDomainAutoRenewResponse: route53domains.Route53DomainsEnableDomainAutoRenewResponse = { ... }
```

### Route53DomainsEnableDomainTransferLockRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsEnableDomainTransferLockRequest: route53domains.Route53DomainsEnableDomainTransferLockRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsEnableDomainTransferLockResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsEnableDomainTransferLockResponse: route53domains.Route53DomainsEnableDomainTransferLockResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsExtraParam <a name="aws-cdk-sdk.route53domains.Route53DomainsExtraParam"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsExtraParam: route53domains.Route53DomainsExtraParam = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsExtraParam.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsExtraParam.property.value"></a>

- *Type:* `string`

---

### Route53DomainsGetContactReachabilityStatusRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetContactReachabilityStatusRequest: route53domains.Route53DomainsGetContactReachabilityStatusRequest = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsGetContactReachabilityStatusResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetContactReachabilityStatusResponse: route53domains.Route53DomainsGetContactReachabilityStatusResponse = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusResponse.property.domainName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusResponse.property.status"></a>

- *Type:* `string`

---

### Route53DomainsGetDomainDetailRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetDomainDetailRequest: route53domains.Route53DomainsGetDomainDetailRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsGetDomainDetailResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetDomainDetailResponse: route53domains.Route53DomainsGetDomainDetailResponse = { ... }
```

##### `adminContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.adminContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.domainName"></a>

- *Type:* `string`

---

##### `nameservers`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.nameservers"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsNameserver`](#aws-cdk-sdk.route53domains.Route53DomainsNameserver)[]

---

##### `registrantContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.registrantContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `techContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.techContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `abuseContactEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.abuseContactEmail"></a>

- *Type:* `string`

---

##### `abuseContactPhone`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.abuseContactPhone"></a>

- *Type:* `string`

---

##### `adminPrivacy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.adminPrivacy"></a>

- *Type:* `boolean`

---

##### `autoRenew`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.autoRenew"></a>

- *Type:* `boolean`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.creationDate"></a>

- *Type:* `string`

---

##### `dnsSec`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.dnsSec"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.expirationDate"></a>

- *Type:* `string`

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.registrantPrivacy"></a>

- *Type:* `boolean`

---

##### `registrarName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.registrarName"></a>

- *Type:* `string`

---

##### `registrarUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.registrarUrl"></a>

- *Type:* `string`

---

##### `registryDomainId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.registryDomainId"></a>

- *Type:* `string`

---

##### `reseller`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.reseller"></a>

- *Type:* `string`

---

##### `statusList`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.statusList"></a>

- *Type:* `string`[]

---

##### `techPrivacy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.techPrivacy"></a>

- *Type:* `boolean`

---

##### `updatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.updatedDate"></a>

- *Type:* `string`

---

##### `whoIsServer`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailResponse.property.whoIsServer"></a>

- *Type:* `string`

---

### Route53DomainsGetDomainSuggestionsRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetDomainSuggestionsRequest: route53domains.Route53DomainsGetDomainSuggestionsRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest.property.domainName"></a>

- *Type:* `string`

---

##### `onlyAvailable`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest.property.onlyAvailable"></a>

- *Type:* `boolean`

---

##### `suggestionCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest.property.suggestionCount"></a>

- *Type:* `number`

---

### Route53DomainsGetDomainSuggestionsResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetDomainSuggestionsResponse: route53domains.Route53DomainsGetDomainSuggestionsResponse = { ... }
```

##### `suggestionsList`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsResponse.property.suggestionsList"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDomainSuggestion`](#aws-cdk-sdk.route53domains.Route53DomainsDomainSuggestion)[]

---

### Route53DomainsGetOperationDetailRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetOperationDetailRequest: route53domains.Route53DomainsGetOperationDetailRequest = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailRequest.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsGetOperationDetailResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsGetOperationDetailResponse: route53domains.Route53DomainsGetOperationDetailResponse = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailResponse.property.domainName"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailResponse.property.message"></a>

- *Type:* `string`

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailResponse.property.operationId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailResponse.property.status"></a>

- *Type:* `string`

---

##### `submittedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailResponse.property.submittedDate"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailResponse.property.type"></a>

- *Type:* `string`

---

### Route53DomainsListDomainsRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsListDomainsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsListDomainsRequest: route53domains.Route53DomainsListDomainsRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListDomainsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListDomainsRequest.property.maxItems"></a>

- *Type:* `number`

---

### Route53DomainsListDomainsResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsListDomainsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsListDomainsResponse: route53domains.Route53DomainsListDomainsResponse = { ... }
```

##### `domains`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListDomainsResponse.property.domains"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDomainSummary`](#aws-cdk-sdk.route53domains.Route53DomainsDomainSummary)[]

---

##### `nextPageMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListDomainsResponse.property.nextPageMarker"></a>

- *Type:* `string`

---

### Route53DomainsListOperationsRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsListOperationsRequest: route53domains.Route53DomainsListOperationsRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `submittedSince`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest.property.submittedSince"></a>

- *Type:* `string`

---

### Route53DomainsListOperationsResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsListOperationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsListOperationsResponse: route53domains.Route53DomainsListOperationsResponse = { ... }
```

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListOperationsResponse.property.operations"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsOperationSummary`](#aws-cdk-sdk.route53domains.Route53DomainsOperationSummary)[]

---

##### `nextPageMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListOperationsResponse.property.nextPageMarker"></a>

- *Type:* `string`

---

### Route53DomainsListTagsForDomainRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsListTagsForDomainRequest: route53domains.Route53DomainsListTagsForDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsListTagsForDomainResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsListTagsForDomainResponse: route53domains.Route53DomainsListTagsForDomainResponse = { ... }
```

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainResponse.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsTag`](#aws-cdk-sdk.route53domains.Route53DomainsTag)[]

---

### Route53DomainsNameserver <a name="aws-cdk-sdk.route53domains.Route53DomainsNameserver"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsNameserver: route53domains.Route53DomainsNameserver = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsNameserver.property.name"></a>

- *Type:* `string`

---

##### `glueIps`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsNameserver.property.glueIps"></a>

- *Type:* `string`[]

---

### Route53DomainsOperationSummary <a name="aws-cdk-sdk.route53domains.Route53DomainsOperationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsOperationSummary: route53domains.Route53DomainsOperationSummary = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsOperationSummary.property.operationId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsOperationSummary.property.status"></a>

- *Type:* `string`

---

##### `submittedDate`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsOperationSummary.property.submittedDate"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsOperationSummary.property.type"></a>

- *Type:* `string`

---

### Route53DomainsRegisterDomainRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRegisterDomainRequest: route53domains.Route53DomainsRegisterDomainRequest = { ... }
```

##### `adminContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.adminContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `durationInYears`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.durationInYears"></a>

- *Type:* `number`

---

##### `registrantContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.registrantContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `techContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.techContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `autoRenew`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.autoRenew"></a>

- *Type:* `boolean`

---

##### `idnLangCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.idnLangCode"></a>

- *Type:* `string`

---

##### `privacyProtectAdminContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.privacyProtectAdminContact"></a>

- *Type:* `boolean`

---

##### `privacyProtectRegistrantContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.privacyProtectRegistrantContact"></a>

- *Type:* `boolean`

---

##### `privacyProtectTechContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest.property.privacyProtectTechContact"></a>

- *Type:* `boolean`

---

### Route53DomainsRegisterDomainResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRegisterDomainResponse: route53domains.Route53DomainsRegisterDomainResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest: route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse: route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsRenewDomainRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRenewDomainRequest: route53domains.Route53DomainsRenewDomainRequest = { ... }
```

##### `currentExpiryYear`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest.property.currentExpiryYear"></a>

- *Type:* `number`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `durationInYears`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest.property.durationInYears"></a>

- *Type:* `number`

---

### Route53DomainsRenewDomainResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsRenewDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRenewDomainResponse: route53domains.Route53DomainsRenewDomainResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRenewDomainResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsResendContactReachabilityEmailRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsResendContactReachabilityEmailRequest: route53domains.Route53DomainsResendContactReachabilityEmailRequest = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsResendContactReachabilityEmailResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsResendContactReachabilityEmailResponse: route53domains.Route53DomainsResendContactReachabilityEmailResponse = { ... }
```

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailResponse.property.domainName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailResponse.property.emailAddress"></a>

- *Type:* `string`

---

##### `isAlreadyVerified`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailResponse.property.isAlreadyVerified"></a>

- *Type:* `boolean`

---

### Route53DomainsRetrieveDomainAuthCodeRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRetrieveDomainAuthCodeRequest: route53domains.Route53DomainsRetrieveDomainAuthCodeRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsRetrieveDomainAuthCodeResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsRetrieveDomainAuthCodeResponse: route53domains.Route53DomainsRetrieveDomainAuthCodeResponse = { ... }
```

##### `authCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeResponse.property.authCode"></a>

- *Type:* `string`

---

### Route53DomainsTag <a name="aws-cdk-sdk.route53domains.Route53DomainsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsTag: route53domains.Route53DomainsTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTag.property.value"></a>

- *Type:* `string`

---

### Route53DomainsTransferDomainRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsTransferDomainRequest: route53domains.Route53DomainsTransferDomainRequest = { ... }
```

##### `adminContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.adminContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `durationInYears`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.durationInYears"></a>

- *Type:* `number`

---

##### `registrantContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.registrantContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `techContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.techContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `authCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.authCode"></a>

- *Type:* `string`

---

##### `autoRenew`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.autoRenew"></a>

- *Type:* `boolean`

---

##### `idnLangCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.idnLangCode"></a>

- *Type:* `string`

---

##### `nameservers`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.nameservers"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsNameserver`](#aws-cdk-sdk.route53domains.Route53DomainsNameserver)[]

---

##### `privacyProtectAdminContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.privacyProtectAdminContact"></a>

- *Type:* `boolean`

---

##### `privacyProtectRegistrantContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.privacyProtectRegistrantContact"></a>

- *Type:* `boolean`

---

##### `privacyProtectTechContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest.property.privacyProtectTechContact"></a>

- *Type:* `boolean`

---

### Route53DomainsTransferDomainResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsTransferDomainResponse: route53domains.Route53DomainsTransferDomainResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsTransferDomainToAnotherAwsAccountRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsTransferDomainToAnotherAwsAccountRequest: route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest.property.accountId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest.property.domainName"></a>

- *Type:* `string`

---

### Route53DomainsTransferDomainToAnotherAwsAccountResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsTransferDomainToAnotherAwsAccountResponse: route53domains.Route53DomainsTransferDomainToAnotherAwsAccountResponse = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountResponse.property.operationId"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountResponse.property.password"></a>

- *Type:* `string`

---

### Route53DomainsUpdateDomainContactPrivacyRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateDomainContactPrivacyRequest: route53domains.Route53DomainsUpdateDomainContactPrivacyRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest.property.domainName"></a>

- *Type:* `string`

---

##### `adminPrivacy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest.property.adminPrivacy"></a>

- *Type:* `boolean`

---

##### `registrantPrivacy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest.property.registrantPrivacy"></a>

- *Type:* `boolean`

---

##### `techPrivacy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest.property.techPrivacy"></a>

- *Type:* `boolean`

---

### Route53DomainsUpdateDomainContactPrivacyResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateDomainContactPrivacyResponse: route53domains.Route53DomainsUpdateDomainContactPrivacyResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsUpdateDomainContactRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateDomainContactRequest: route53domains.Route53DomainsUpdateDomainContactRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest.property.domainName"></a>

- *Type:* `string`

---

##### `adminContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest.property.adminContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `registrantContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest.property.registrantContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

##### `techContact`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest.property.techContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsContactDetail`](#aws-cdk-sdk.route53domains.Route53DomainsContactDetail)

---

### Route53DomainsUpdateDomainContactResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateDomainContactResponse: route53domains.Route53DomainsUpdateDomainContactResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsUpdateDomainNameserversRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateDomainNameserversRequest: route53domains.Route53DomainsUpdateDomainNameserversRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest.property.domainName"></a>

- *Type:* `string`

---

##### `nameservers`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest.property.nameservers"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsNameserver`](#aws-cdk-sdk.route53domains.Route53DomainsNameserver)[]

---

##### `fiAuthKey`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest.property.fiAuthKey"></a>

- *Type:* `string`

---

### Route53DomainsUpdateDomainNameserversResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateDomainNameserversResponse: route53domains.Route53DomainsUpdateDomainNameserversResponse = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversResponse.property.operationId"></a>

- *Type:* `string`

---

### Route53DomainsUpdateTagsForDomainRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateTagsForDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateTagsForDomainRequest: route53domains.Route53DomainsUpdateTagsForDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateTagsForDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `tagsToUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateTagsForDomainRequest.property.tagsToUpdate"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsTag`](#aws-cdk-sdk.route53domains.Route53DomainsTag)[]

---

### Route53DomainsUpdateTagsForDomainResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsUpdateTagsForDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsUpdateTagsForDomainResponse: route53domains.Route53DomainsUpdateTagsForDomainResponse = { ... }
```

### Route53DomainsViewBillingRequest <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsViewBillingRequest: route53domains.Route53DomainsViewBillingRequest = { ... }
```

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest.property.end"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest.property.start"></a>

- *Type:* `string`

---

### Route53DomainsViewBillingResponse <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

const route53DomainsViewBillingResponse: route53domains.Route53DomainsViewBillingResponse = { ... }
```

##### `billingRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingResponse.property.billingRecords"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsBillingRecord`](#aws-cdk-sdk.route53domains.Route53DomainsBillingRecord)[]

---

##### `nextPageMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsViewBillingResponse.property.nextPageMarker"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount(__scope: Construct, __resources: string[], __input: Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsAcceptDomainTransferFromAnotherAwsAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesAcceptDomainTransferFromAnotherAwsAccount.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount(__scope: Construct, __resources: string[], __input: Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsCancelDomainTransferToAnotherAwsAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCancelDomainTransferToAnotherAwsAccount.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesCheckDomainAvailability <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainAvailability"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainAvailability.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesCheckDomainAvailability(__scope: Construct, __resources: string[], __input: Route53DomainsCheckDomainAvailabilityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainAvailability.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainAvailability.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainAvailability.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityRequest`](#aws-cdk-sdk.route53domains.Route53DomainsCheckDomainAvailabilityRequest)

---



#### Properties <a name="Properties"></a>

##### `availability`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainAvailability.property.availability"></a>

- *Type:* `string`

---


### Route53DomainsResponsesCheckDomainTransferability <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferability"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferability.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesCheckDomainTransferability(__scope: Construct, __resources: string[], __input: Route53DomainsCheckDomainTransferabilityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferability.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferability.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferability.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest`](#aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest)

---



#### Properties <a name="Properties"></a>

##### `transferability`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferability.property.transferability"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability`](#aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability)

---


### Route53DomainsResponsesCheckDomainTransferabilityTransferability <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability(__scope: Construct, __resources: string[], __input: Route53DomainsCheckDomainTransferabilityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest`](#aws-cdk-sdk.route53domains.Route53DomainsCheckDomainTransferabilityRequest)

---



#### Properties <a name="Properties"></a>

##### `transferable`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesCheckDomainTransferabilityTransferability.property.transferable"></a>

- *Type:* `string`

---


### Route53DomainsResponsesDisableDomainTransferLock <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesDisableDomainTransferLock"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesDisableDomainTransferLock.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesDisableDomainTransferLock(__scope: Construct, __resources: string[], __input: Route53DomainsDisableDomainTransferLockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesDisableDomainTransferLock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesDisableDomainTransferLock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesDisableDomainTransferLock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockRequest`](#aws-cdk-sdk.route53domains.Route53DomainsDisableDomainTransferLockRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesDisableDomainTransferLock.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesEnableDomainTransferLock <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesEnableDomainTransferLock"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesEnableDomainTransferLock.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesEnableDomainTransferLock(__scope: Construct, __resources: string[], __input: Route53DomainsEnableDomainTransferLockRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesEnableDomainTransferLock.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesEnableDomainTransferLock.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesEnableDomainTransferLock.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockRequest`](#aws-cdk-sdk.route53domains.Route53DomainsEnableDomainTransferLockRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesEnableDomainTransferLock.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesFetchContactReachabilityStatus <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchContactReachabilityStatus"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchContactReachabilityStatus.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesFetchContactReachabilityStatus(__scope: Construct, __resources: string[], __input: Route53DomainsGetContactReachabilityStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchContactReachabilityStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchContactReachabilityStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchContactReachabilityStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetContactReachabilityStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchContactReachabilityStatus.property.domainName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchContactReachabilityStatus.property.status"></a>

- *Type:* `string`

---


### Route53DomainsResponsesFetchDomainDetail <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesFetchDomainDetail(__scope: Construct, __resources: string[], __input: Route53DomainsGetDomainDetailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest)

---



#### Properties <a name="Properties"></a>

##### `abuseContactEmail`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.abuseContactEmail"></a>

- *Type:* `string`

---

##### `abuseContactPhone`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.abuseContactPhone"></a>

- *Type:* `string`

---

##### `adminContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.adminContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact`](#aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact)

---

##### `adminPrivacy`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.adminPrivacy"></a>

- *Type:* `boolean`

---

##### `autoRenew`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.autoRenew"></a>

- *Type:* `boolean`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.creationDate"></a>

- *Type:* `string`

---

##### `dnsSec`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.dnsSec"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.domainName"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.expirationDate"></a>

- *Type:* `string`

---

##### `nameservers`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.nameservers"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsNameserver`](#aws-cdk-sdk.route53domains.Route53DomainsNameserver)[]

---

##### `registrantContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.registrantContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact`](#aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact)

---

##### `registrantPrivacy`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.registrantPrivacy"></a>

- *Type:* `boolean`

---

##### `registrarName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.registrarName"></a>

- *Type:* `string`

---

##### `registrarUrl`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.registrarUrl"></a>

- *Type:* `string`

---

##### `registryDomainId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.registryDomainId"></a>

- *Type:* `string`

---

##### `reseller`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.reseller"></a>

- *Type:* `string`

---

##### `statusList`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.statusList"></a>

- *Type:* `string`[]

---

##### `techContact`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.techContact"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact`](#aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact)

---

##### `techPrivacy`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.techPrivacy"></a>

- *Type:* `boolean`

---

##### `updatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.updatedDate"></a>

- *Type:* `string`

---

##### `whoIsServer`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetail.property.whoIsServer"></a>

- *Type:* `string`

---


### Route53DomainsResponsesFetchDomainDetailAdminContact <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact(__scope: Construct, __resources: string[], __input: Route53DomainsGetDomainDetailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest)

---



#### Properties <a name="Properties"></a>

##### `addressLine1`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.addressLine1"></a>

- *Type:* `string`

---

##### `addressLine2`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.addressLine2"></a>

- *Type:* `string`

---

##### `city`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.city"></a>

- *Type:* `string`

---

##### `contactType`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.contactType"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.countryCode"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.email"></a>

- *Type:* `string`

---

##### `extraParams`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.extraParams"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsExtraParam`](#aws-cdk-sdk.route53domains.Route53DomainsExtraParam)[]

---

##### `fax`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.fax"></a>

- *Type:* `string`

---

##### `firstName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.lastName"></a>

- *Type:* `string`

---

##### `organizationName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.organizationName"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.phoneNumber"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.state"></a>

- *Type:* `string`

---

##### `zipCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailAdminContact.property.zipCode"></a>

- *Type:* `string`

---


### Route53DomainsResponsesFetchDomainDetailRegistrantContact <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact(__scope: Construct, __resources: string[], __input: Route53DomainsGetDomainDetailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest)

---



#### Properties <a name="Properties"></a>

##### `addressLine1`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.addressLine1"></a>

- *Type:* `string`

---

##### `addressLine2`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.addressLine2"></a>

- *Type:* `string`

---

##### `city`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.city"></a>

- *Type:* `string`

---

##### `contactType`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.contactType"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.countryCode"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.email"></a>

- *Type:* `string`

---

##### `extraParams`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.extraParams"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsExtraParam`](#aws-cdk-sdk.route53domains.Route53DomainsExtraParam)[]

---

##### `fax`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.fax"></a>

- *Type:* `string`

---

##### `firstName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.lastName"></a>

- *Type:* `string`

---

##### `organizationName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.organizationName"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.phoneNumber"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.state"></a>

- *Type:* `string`

---

##### `zipCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailRegistrantContact.property.zipCode"></a>

- *Type:* `string`

---


### Route53DomainsResponsesFetchDomainDetailTechContact <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesFetchDomainDetailTechContact(__scope: Construct, __resources: string[], __input: Route53DomainsGetDomainDetailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetDomainDetailRequest)

---



#### Properties <a name="Properties"></a>

##### `addressLine1`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.addressLine1"></a>

- *Type:* `string`

---

##### `addressLine2`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.addressLine2"></a>

- *Type:* `string`

---

##### `city`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.city"></a>

- *Type:* `string`

---

##### `contactType`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.contactType"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.countryCode"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.email"></a>

- *Type:* `string`

---

##### `extraParams`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.extraParams"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsExtraParam`](#aws-cdk-sdk.route53domains.Route53DomainsExtraParam)[]

---

##### `fax`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.fax"></a>

- *Type:* `string`

---

##### `firstName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.firstName"></a>

- *Type:* `string`

---

##### `lastName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.lastName"></a>

- *Type:* `string`

---

##### `organizationName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.organizationName"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.phoneNumber"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.state"></a>

- *Type:* `string`

---

##### `zipCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainDetailTechContact.property.zipCode"></a>

- *Type:* `string`

---


### Route53DomainsResponsesFetchDomainSuggestions <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainSuggestions"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainSuggestions.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesFetchDomainSuggestions(__scope: Construct, __resources: string[], __input: Route53DomainsGetDomainSuggestionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainSuggestions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainSuggestions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainSuggestions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetDomainSuggestionsRequest)

---



#### Properties <a name="Properties"></a>

##### `suggestionsList`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchDomainSuggestions.property.suggestionsList"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDomainSuggestion`](#aws-cdk-sdk.route53domains.Route53DomainsDomainSuggestion)[]

---


### Route53DomainsResponsesFetchOperationDetail <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesFetchOperationDetail(__scope: Construct, __resources: string[], __input: Route53DomainsGetOperationDetailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsGetOperationDetailRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.property.domainName"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.property.message"></a>

- *Type:* `string`

---

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.property.operationId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.property.status"></a>

- *Type:* `string`

---

##### `submittedDate`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.property.submittedDate"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesFetchOperationDetail.property.type"></a>

- *Type:* `string`

---


### Route53DomainsResponsesListDomains <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListDomains"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListDomains.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesListDomains(__scope: Construct, __resources: string[], __input: Route53DomainsListDomainsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListDomains.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListDomains.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListDomains.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsListDomainsRequest`](#aws-cdk-sdk.route53domains.Route53DomainsListDomainsRequest)

---



#### Properties <a name="Properties"></a>

##### `domains`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListDomains.property.domains"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsDomainSummary`](#aws-cdk-sdk.route53domains.Route53DomainsDomainSummary)[]

---

##### `nextPageMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListDomains.property.nextPageMarker"></a>

- *Type:* `string`

---


### Route53DomainsResponsesListOperations <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListOperations"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListOperations.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesListOperations(__scope: Construct, __resources: string[], __input: Route53DomainsListOperationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest`](#aws-cdk-sdk.route53domains.Route53DomainsListOperationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextPageMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListOperations.property.nextPageMarker"></a>

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListOperations.property.operations"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsOperationSummary`](#aws-cdk-sdk.route53domains.Route53DomainsOperationSummary)[]

---


### Route53DomainsResponsesListTagsForDomain <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListTagsForDomain"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListTagsForDomain.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesListTagsForDomain(__scope: Construct, __resources: string[], __input: Route53DomainsListTagsForDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListTagsForDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListTagsForDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListTagsForDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsListTagsForDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesListTagsForDomain.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsTag`](#aws-cdk-sdk.route53domains.Route53DomainsTag)[]

---


### Route53DomainsResponsesRegisterDomain <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRegisterDomain"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRegisterDomain.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesRegisterDomain(__scope: Construct, __resources: string[], __input: Route53DomainsRegisterDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRegisterDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRegisterDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRegisterDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRegisterDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRegisterDomain.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount(__scope: Construct, __resources: string[], __input: Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRejectDomainTransferFromAnotherAwsAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRejectDomainTransferFromAnotherAwsAccount.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesRenewDomain <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRenewDomain"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRenewDomain.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesRenewDomain(__scope: Construct, __resources: string[], __input: Route53DomainsRenewDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRenewDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRenewDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRenewDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRenewDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRenewDomain.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesResendContactReachabilityEmail <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesResendContactReachabilityEmail(__scope: Construct, __resources: string[], __input: Route53DomainsResendContactReachabilityEmailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailRequest`](#aws-cdk-sdk.route53domains.Route53DomainsResendContactReachabilityEmailRequest)

---



#### Properties <a name="Properties"></a>

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail.property.domainName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail.property.emailAddress"></a>

- *Type:* `string`

---

##### `isAlreadyVerified`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesResendContactReachabilityEmail.property.isAlreadyVerified"></a>

- *Type:* `boolean`

---


### Route53DomainsResponsesRetrieveDomainAuthCode <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRetrieveDomainAuthCode"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRetrieveDomainAuthCode.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesRetrieveDomainAuthCode(__scope: Construct, __resources: string[], __input: Route53DomainsRetrieveDomainAuthCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRetrieveDomainAuthCode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRetrieveDomainAuthCode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRetrieveDomainAuthCode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeRequest`](#aws-cdk-sdk.route53domains.Route53DomainsRetrieveDomainAuthCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `authCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesRetrieveDomainAuthCode.property.authCode"></a>

- *Type:* `string`

---


### Route53DomainsResponsesTransferDomain <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomain"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomain.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesTransferDomain(__scope: Construct, __resources: string[], __input: Route53DomainsTransferDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest`](#aws-cdk-sdk.route53domains.Route53DomainsTransferDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomain.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesTransferDomainToAnotherAwsAccount <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount(__scope: Construct, __resources: string[], __input: Route53DomainsTransferDomainToAnotherAwsAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest`](#aws-cdk-sdk.route53domains.Route53DomainsTransferDomainToAnotherAwsAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount.property.operationId"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesTransferDomainToAnotherAwsAccount.property.password"></a>

- *Type:* `string`

---


### Route53DomainsResponsesUpdateDomainContact <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContact"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContact.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesUpdateDomainContact(__scope: Construct, __resources: string[], __input: Route53DomainsUpdateDomainContactRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest`](#aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContact.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesUpdateDomainContactPrivacy <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContactPrivacy"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContactPrivacy.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesUpdateDomainContactPrivacy(__scope: Construct, __resources: string[], __input: Route53DomainsUpdateDomainContactPrivacyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContactPrivacy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContactPrivacy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContactPrivacy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest`](#aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainContactPrivacyRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainContactPrivacy.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesUpdateDomainNameservers <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainNameservers"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainNameservers.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesUpdateDomainNameservers(__scope: Construct, __resources: string[], __input: Route53DomainsUpdateDomainNameserversRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainNameservers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainNameservers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainNameservers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest`](#aws-cdk-sdk.route53domains.Route53DomainsUpdateDomainNameserversRequest)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesUpdateDomainNameservers.property.operationId"></a>

- *Type:* `string`

---


### Route53DomainsResponsesViewBilling <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesViewBilling"></a>

#### Initializer <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesViewBilling.Initializer"></a>

```typescript
import { route53domains } from 'aws-cdk-sdk'

new route53domains.Route53DomainsResponsesViewBilling(__scope: Construct, __resources: string[], __input: Route53DomainsViewBillingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesViewBilling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesViewBilling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesViewBilling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest`](#aws-cdk-sdk.route53domains.Route53DomainsViewBillingRequest)

---



#### Properties <a name="Properties"></a>

##### `billingRecords`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesViewBilling.property.billingRecords"></a>

- *Type:* [`aws-cdk-sdk.route53domains.Route53DomainsBillingRecord`](#aws-cdk-sdk.route53domains.Route53DomainsBillingRecord)[]

---

##### `nextPageMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53domains.Route53DomainsResponsesViewBilling.property.nextPageMarker"></a>

- *Type:* `string`

---



