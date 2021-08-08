# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### StsClient <a name="aws-cdk-sdk.sts.StsClient"></a>

#### Initializer <a name="aws-cdk-sdk.sts.StsClient.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.StsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `assumeRole` <a name="aws-cdk-sdk.sts.StsClient.assumeRole"></a>

```typescript
public assumeRole(input: StsAssumeRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleRequest`](#aws-cdk-sdk.sts.StsAssumeRoleRequest)

---

##### `assumeRoleWithSaml` <a name="aws-cdk-sdk.sts.StsClient.assumeRoleWithSaml"></a>

```typescript
public assumeRoleWithSaml(input: StsAssumeRoleWithSamlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest)

---

##### `assumeRoleWithWebIdentity` <a name="aws-cdk-sdk.sts.StsClient.assumeRoleWithWebIdentity"></a>

```typescript
public assumeRoleWithWebIdentity(input: StsAssumeRoleWithWebIdentityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest)

---

##### `decodeAuthorizationMessage` <a name="aws-cdk-sdk.sts.StsClient.decodeAuthorizationMessage"></a>

```typescript
public decodeAuthorizationMessage(input: StsDecodeAuthorizationMessageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsDecodeAuthorizationMessageRequest`](#aws-cdk-sdk.sts.StsDecodeAuthorizationMessageRequest)

---

##### `fetchAccessKeyInfo` <a name="aws-cdk-sdk.sts.StsClient.fetchAccessKeyInfo"></a>

```typescript
public fetchAccessKeyInfo(input: StsGetAccessKeyInfoRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetAccessKeyInfoRequest`](#aws-cdk-sdk.sts.StsGetAccessKeyInfoRequest)

---

##### `fetchCallerIdentity` <a name="aws-cdk-sdk.sts.StsClient.fetchCallerIdentity"></a>

```typescript
public fetchCallerIdentity()
```

##### `fetchFederationToken` <a name="aws-cdk-sdk.sts.StsClient.fetchFederationToken"></a>

```typescript
public fetchFederationToken(input: StsGetFederationTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetFederationTokenRequest`](#aws-cdk-sdk.sts.StsGetFederationTokenRequest)

---

##### `fetchSessionToken` <a name="aws-cdk-sdk.sts.StsClient.fetchSessionToken"></a>

```typescript
public fetchSessionToken(input: StsGetSessionTokenRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetSessionTokenRequest`](#aws-cdk-sdk.sts.StsGetSessionTokenRequest)

---




## Structs <a name="Structs"></a>

### StsAssumedRoleUser <a name="aws-cdk-sdk.sts.StsAssumedRoleUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsAssumedRoleUser: sts.StsAssumedRoleUser = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumedRoleUser.property.arn"></a>

- *Type:* `string`

---

##### `assumedRoleId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumedRoleUser.property.assumedRoleId"></a>

- *Type:* `string`

---

### StsAssumeRoleRequest <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsAssumeRoleRequest: sts.StsAssumeRoleRequest = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `roleSessionName`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.roleSessionName"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.durationSeconds"></a>

- *Type:* `number`

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.externalId"></a>

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.policy"></a>

- *Type:* `string`

---

##### `policyArns`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.policyArns"></a>

- *Type:* [`aws-cdk-sdk.sts.StsPolicyDescriptorType`](#aws-cdk-sdk.sts.StsPolicyDescriptorType)[]

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.serialNumber"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sts.StsTag`](#aws-cdk-sdk.sts.StsTag)[]

---

##### `tokenCode`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.tokenCode"></a>

- *Type:* `string`

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleRequest.property.transitiveTagKeys"></a>

- *Type:* `string`[]

---

### StsAssumeRoleResponse <a name="aws-cdk-sdk.sts.StsAssumeRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsAssumeRoleResponse: sts.StsAssumeRoleResponse = { ... }
```

##### `assumedRoleUser`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleResponse.property.assumedRoleUser"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumedRoleUser`](#aws-cdk-sdk.sts.StsAssumedRoleUser)

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleResponse.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.StsCredentials`](#aws-cdk-sdk.sts.StsCredentials)

---

##### `packedPolicySize`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleResponse.property.packedPolicySize"></a>

- *Type:* `number`

---

### StsAssumeRoleWithSamlRequest <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsAssumeRoleWithSamlRequest: sts.StsAssumeRoleWithSamlRequest = { ... }
```

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest.property.principalArn"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `samlAssertion`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest.property.samlAssertion"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest.property.durationSeconds"></a>

- *Type:* `number`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest.property.policy"></a>

- *Type:* `string`

---

##### `policyArns`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest.property.policyArns"></a>

- *Type:* [`aws-cdk-sdk.sts.StsPolicyDescriptorType`](#aws-cdk-sdk.sts.StsPolicyDescriptorType)[]

---

### StsAssumeRoleWithSamlResponse <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsAssumeRoleWithSamlResponse: sts.StsAssumeRoleWithSamlResponse = { ... }
```

##### `assumedRoleUser`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.assumedRoleUser"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumedRoleUser`](#aws-cdk-sdk.sts.StsAssumedRoleUser)

---

##### `audience`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.audience"></a>

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.StsCredentials`](#aws-cdk-sdk.sts.StsCredentials)

---

##### `issuer`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.issuer"></a>

- *Type:* `string`

---

##### `nameQualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.nameQualifier"></a>

- *Type:* `string`

---

##### `packedPolicySize`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.packedPolicySize"></a>

- *Type:* `number`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.subject"></a>

- *Type:* `string`

---

##### `subjectType`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithSamlResponse.property.subjectType"></a>

- *Type:* `string`

---

### StsAssumeRoleWithWebIdentityRequest <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsAssumeRoleWithWebIdentityRequest: sts.StsAssumeRoleWithWebIdentityRequest = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `roleSessionName`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest.property.roleSessionName"></a>

- *Type:* `string`

---

##### `webIdentityToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest.property.webIdentityToken"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest.property.durationSeconds"></a>

- *Type:* `number`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest.property.policy"></a>

- *Type:* `string`

---

##### `policyArns`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest.property.policyArns"></a>

- *Type:* [`aws-cdk-sdk.sts.StsPolicyDescriptorType`](#aws-cdk-sdk.sts.StsPolicyDescriptorType)[]

---

##### `providerId`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest.property.providerId"></a>

- *Type:* `string`

---

### StsAssumeRoleWithWebIdentityResponse <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsAssumeRoleWithWebIdentityResponse: sts.StsAssumeRoleWithWebIdentityResponse = { ... }
```

##### `assumedRoleUser`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityResponse.property.assumedRoleUser"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumedRoleUser`](#aws-cdk-sdk.sts.StsAssumedRoleUser)

---

##### `audience`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityResponse.property.audience"></a>

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityResponse.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.StsCredentials`](#aws-cdk-sdk.sts.StsCredentials)

---

##### `packedPolicySize`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityResponse.property.packedPolicySize"></a>

- *Type:* `number`

---

##### `provider`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityResponse.property.provider"></a>

- *Type:* `string`

---

##### `subjectFromWebIdentityToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityResponse.property.subjectFromWebIdentityToken"></a>

- *Type:* `string`

---

### StsCredentials <a name="aws-cdk-sdk.sts.StsCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsCredentials: sts.StsCredentials = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsCredentials.property.sessionToken"></a>

- *Type:* `string`

---

### StsDecodeAuthorizationMessageRequest <a name="aws-cdk-sdk.sts.StsDecodeAuthorizationMessageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsDecodeAuthorizationMessageRequest: sts.StsDecodeAuthorizationMessageRequest = { ... }
```

##### `encodedMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsDecodeAuthorizationMessageRequest.property.encodedMessage"></a>

- *Type:* `string`

---

### StsDecodeAuthorizationMessageResponse <a name="aws-cdk-sdk.sts.StsDecodeAuthorizationMessageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsDecodeAuthorizationMessageResponse: sts.StsDecodeAuthorizationMessageResponse = { ... }
```

##### `decodedMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsDecodeAuthorizationMessageResponse.property.decodedMessage"></a>

- *Type:* `string`

---

### StsFederatedUser <a name="aws-cdk-sdk.sts.StsFederatedUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsFederatedUser: sts.StsFederatedUser = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsFederatedUser.property.arn"></a>

- *Type:* `string`

---

##### `federatedUserId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsFederatedUser.property.federatedUserId"></a>

- *Type:* `string`

---

### StsGetAccessKeyInfoRequest <a name="aws-cdk-sdk.sts.StsGetAccessKeyInfoRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetAccessKeyInfoRequest: sts.StsGetAccessKeyInfoRequest = { ... }
```

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsGetAccessKeyInfoRequest.property.accessKeyId"></a>

- *Type:* `string`

---

### StsGetAccessKeyInfoResponse <a name="aws-cdk-sdk.sts.StsGetAccessKeyInfoResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetAccessKeyInfoResponse: sts.StsGetAccessKeyInfoResponse = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetAccessKeyInfoResponse.property.account"></a>

- *Type:* `string`

---

### StsGetCallerIdentityRequest <a name="aws-cdk-sdk.sts.StsGetCallerIdentityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetCallerIdentityRequest: sts.StsGetCallerIdentityRequest = { ... }
```

### StsGetCallerIdentityResponse <a name="aws-cdk-sdk.sts.StsGetCallerIdentityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetCallerIdentityResponse: sts.StsGetCallerIdentityResponse = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetCallerIdentityResponse.property.account"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetCallerIdentityResponse.property.arn"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetCallerIdentityResponse.property.userId"></a>

- *Type:* `string`

---

### StsGetFederationTokenRequest <a name="aws-cdk-sdk.sts.StsGetFederationTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetFederationTokenRequest: sts.StsGetFederationTokenRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenRequest.property.name"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenRequest.property.durationSeconds"></a>

- *Type:* `number`

---

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenRequest.property.policy"></a>

- *Type:* `string`

---

##### `policyArns`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenRequest.property.policyArns"></a>

- *Type:* [`aws-cdk-sdk.sts.StsPolicyDescriptorType`](#aws-cdk-sdk.sts.StsPolicyDescriptorType)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sts.StsTag`](#aws-cdk-sdk.sts.StsTag)[]

---

### StsGetFederationTokenResponse <a name="aws-cdk-sdk.sts.StsGetFederationTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetFederationTokenResponse: sts.StsGetFederationTokenResponse = { ... }
```

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenResponse.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.StsCredentials`](#aws-cdk-sdk.sts.StsCredentials)

---

##### `federatedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenResponse.property.federatedUser"></a>

- *Type:* [`aws-cdk-sdk.sts.StsFederatedUser`](#aws-cdk-sdk.sts.StsFederatedUser)

---

##### `packedPolicySize`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetFederationTokenResponse.property.packedPolicySize"></a>

- *Type:* `number`

---

### StsGetSessionTokenRequest <a name="aws-cdk-sdk.sts.StsGetSessionTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetSessionTokenRequest: sts.StsGetSessionTokenRequest = { ... }
```

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetSessionTokenRequest.property.durationSeconds"></a>

- *Type:* `number`

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetSessionTokenRequest.property.serialNumber"></a>

- *Type:* `string`

---

##### `tokenCode`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetSessionTokenRequest.property.tokenCode"></a>

- *Type:* `string`

---

### StsGetSessionTokenResponse <a name="aws-cdk-sdk.sts.StsGetSessionTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsGetSessionTokenResponse: sts.StsGetSessionTokenResponse = { ... }
```

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsGetSessionTokenResponse.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.StsCredentials`](#aws-cdk-sdk.sts.StsCredentials)

---

### StsPolicyDescriptorType <a name="aws-cdk-sdk.sts.StsPolicyDescriptorType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsPolicyDescriptorType: sts.StsPolicyDescriptorType = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.sts.StsPolicyDescriptorType.property.arn"></a>

- *Type:* `string`

---

### StsTag <a name="aws-cdk-sdk.sts.StsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

const stsTag: sts.StsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.sts.StsTag.property.value"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### STSResponsesAssumeRole <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRole(__scope: Construct, __resources: string[], __input: StsAssumeRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleRequest`](#aws-cdk-sdk.sts.StsAssumeRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `assumedRoleUser`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole.property.assumedRoleUser"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser`](#aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser)

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials`](#aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials)

---

##### `packedPolicySize`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRole.property.packedPolicySize"></a>

- *Type:* `number`

---


### STSResponsesAssumeRoleAssumedRoleUser <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleAssumedRoleUser(__scope: Construct, __resources: string[], __input: StsAssumeRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleRequest`](#aws-cdk-sdk.sts.StsAssumeRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser.property.arn"></a>

- *Type:* `string`

---

##### `assumedRoleId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleAssumedRoleUser.property.assumedRoleId"></a>

- *Type:* `string`

---


### STSResponsesAssumeRoleCredentials <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleCredentials(__scope: Construct, __resources: string[], __input: StsAssumeRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleRequest`](#aws-cdk-sdk.sts.StsAssumeRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### STSResponsesAssumeRoleWithSaml <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleWithSaml(__scope: Construct, __resources: string[], __input: StsAssumeRoleWithSamlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest)

---



#### Properties <a name="Properties"></a>

##### `assumedRoleUser`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.assumedRoleUser"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser`](#aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser)

---

##### `audience`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.audience"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials`](#aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials)

---

##### `issuer`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.issuer"></a>

- *Type:* `string`

---

##### `nameQualifier`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.nameQualifier"></a>

- *Type:* `string`

---

##### `packedPolicySize`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.packedPolicySize"></a>

- *Type:* `number`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.subject"></a>

- *Type:* `string`

---

##### `subjectType`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSaml.property.subjectType"></a>

- *Type:* `string`

---


### STSResponsesAssumeRoleWithSamlAssumedRoleUser <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser(__scope: Construct, __resources: string[], __input: StsAssumeRoleWithSamlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser.property.arn"></a>

- *Type:* `string`

---

##### `assumedRoleId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlAssumedRoleUser.property.assumedRoleId"></a>

- *Type:* `string`

---


### STSResponsesAssumeRoleWithSamlCredentials <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleWithSamlCredentials(__scope: Construct, __resources: string[], __input: StsAssumeRoleWithSamlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithSamlRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithSamlCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### STSResponsesAssumeRoleWithWebIdentity <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleWithWebIdentity(__scope: Construct, __resources: string[], __input: StsAssumeRoleWithWebIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `assumedRoleUser`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.property.assumedRoleUser"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser`](#aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser)

---

##### `audience`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.property.audience"></a>

- *Type:* `string`

---

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials`](#aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials)

---

##### `packedPolicySize`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.property.packedPolicySize"></a>

- *Type:* `number`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.property.provider"></a>

- *Type:* `string`

---

##### `subjectFromWebIdentityToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentity.property.subjectFromWebIdentityToken"></a>

- *Type:* `string`

---


### STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser(__scope: Construct, __resources: string[], __input: StsAssumeRoleWithWebIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser.property.arn"></a>

- *Type:* `string`

---

##### `assumedRoleId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityAssumedRoleUser.property.assumedRoleId"></a>

- *Type:* `string`

---


### STSResponsesAssumeRoleWithWebIdentityCredentials <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesAssumeRoleWithWebIdentityCredentials(__scope: Construct, __resources: string[], __input: StsAssumeRoleWithWebIdentityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest`](#aws-cdk-sdk.sts.StsAssumeRoleWithWebIdentityRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesAssumeRoleWithWebIdentityCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### STSResponsesDecodeAuthorizationMessage <a name="aws-cdk-sdk.sts.STSResponsesDecodeAuthorizationMessage"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesDecodeAuthorizationMessage.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesDecodeAuthorizationMessage(__scope: Construct, __resources: string[], __input: StsDecodeAuthorizationMessageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesDecodeAuthorizationMessage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesDecodeAuthorizationMessage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesDecodeAuthorizationMessage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsDecodeAuthorizationMessageRequest`](#aws-cdk-sdk.sts.StsDecodeAuthorizationMessageRequest)

---



#### Properties <a name="Properties"></a>

##### `decodedMessage`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesDecodeAuthorizationMessage.property.decodedMessage"></a>

- *Type:* `string`

---


### STSResponsesFetchAccessKeyInfo <a name="aws-cdk-sdk.sts.STSResponsesFetchAccessKeyInfo"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesFetchAccessKeyInfo.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesFetchAccessKeyInfo(__scope: Construct, __resources: string[], __input: StsGetAccessKeyInfoRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchAccessKeyInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchAccessKeyInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchAccessKeyInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetAccessKeyInfoRequest`](#aws-cdk-sdk.sts.StsGetAccessKeyInfoRequest)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchAccessKeyInfo.property.account"></a>

- *Type:* `string`

---


### STSResponsesFetchCallerIdentity <a name="aws-cdk-sdk.sts.STSResponsesFetchCallerIdentity"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesFetchCallerIdentity.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesFetchCallerIdentity(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchCallerIdentity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchCallerIdentity.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchCallerIdentity.property.account"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchCallerIdentity.property.arn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchCallerIdentity.property.userId"></a>

- *Type:* `string`

---


### STSResponsesFetchFederationToken <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesFetchFederationToken(__scope: Construct, __resources: string[], __input: StsGetFederationTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetFederationTokenRequest`](#aws-cdk-sdk.sts.StsGetFederationTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials`](#aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials)

---

##### `federatedUser`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken.property.federatedUser"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser`](#aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser)

---

##### `packedPolicySize`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationToken.property.packedPolicySize"></a>

- *Type:* `number`

---


### STSResponsesFetchFederationTokenCredentials <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesFetchFederationTokenCredentials(__scope: Construct, __resources: string[], __input: StsGetFederationTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetFederationTokenRequest`](#aws-cdk-sdk.sts.StsGetFederationTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenCredentials.property.sessionToken"></a>

- *Type:* `string`

---


### STSResponsesFetchFederationTokenFederatedUser <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesFetchFederationTokenFederatedUser(__scope: Construct, __resources: string[], __input: StsGetFederationTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetFederationTokenRequest`](#aws-cdk-sdk.sts.StsGetFederationTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser.property.arn"></a>

- *Type:* `string`

---

##### `federatedUserId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchFederationTokenFederatedUser.property.federatedUserId"></a>

- *Type:* `string`

---


### STSResponsesFetchSessionToken <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionToken"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionToken.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesFetchSessionToken(__scope: Construct, __resources: string[], __input: StsGetSessionTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetSessionTokenRequest`](#aws-cdk-sdk.sts.StsGetSessionTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `credentials`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionToken.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials`](#aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials)

---


### STSResponsesFetchSessionTokenCredentials <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.Initializer"></a>

```typescript
import { sts } from 'aws-cdk-sdk'

new sts.STSResponsesFetchSessionTokenCredentials(__scope: Construct, __resources: string[], __input: StsGetSessionTokenRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sts.StsGetSessionTokenRequest`](#aws-cdk-sdk.sts.StsGetSessionTokenRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.property.accessKeyId"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.property.expiration"></a>

- *Type:* `string`

---

##### `secretAccessKey`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.property.secretAccessKey"></a>

- *Type:* `string`

---

##### `sessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.sts.STSResponsesFetchSessionTokenCredentials.property.sessionToken"></a>

- *Type:* `string`

---



