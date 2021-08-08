# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SecretsManagerClient <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelRotateSecret` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.cancelRotateSecret"></a>

```typescript
public cancelRotateSecret(input: SecretsManagerCancelRotateSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretRequest)

---

##### `createSecret` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.createSecret"></a>

```typescript
public createSecret(input: SecretsManagerCreateSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest)

---

##### `deleteResourcePolicy` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.deleteResourcePolicy"></a>

```typescript
public deleteResourcePolicy(input: SecretsManagerDeleteResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyRequest)

---

##### `deleteSecret` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.deleteSecret"></a>

```typescript
public deleteSecret(input: SecretsManagerDeleteSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest)

---

##### `describeSecret` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.describeSecret"></a>

```typescript
public describeSecret(input: SecretsManagerDescribeSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest)

---

##### `fetchRandomPassword` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.fetchRandomPassword"></a>

```typescript
public fetchRandomPassword(input: SecretsManagerGetRandomPasswordRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest)

---

##### `fetchResourcePolicy` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.fetchResourcePolicy"></a>

```typescript
public fetchResourcePolicy(input: SecretsManagerGetResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyRequest)

---

##### `fetchSecretValue` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.fetchSecretValue"></a>

```typescript
public fetchSecretValue(input: SecretsManagerGetSecretValueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest)

---

##### `listSecrets` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.listSecrets"></a>

```typescript
public listSecrets(input: SecretsManagerListSecretsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest)

---

##### `listSecretVersionIds` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.listSecretVersionIds"></a>

```typescript
public listSecretVersionIds(input: SecretsManagerListSecretVersionIdsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest)

---

##### `putResourcePolicy` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.putResourcePolicy"></a>

```typescript
public putResourcePolicy(input: SecretsManagerPutResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest)

---

##### `putSecretValue` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.putSecretValue"></a>

```typescript
public putSecretValue(input: SecretsManagerPutSecretValueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest)

---

##### `restoreSecret` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.restoreSecret"></a>

```typescript
public restoreSecret(input: SecretsManagerRestoreSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretRequest)

---

##### `rotateSecret` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.rotateSecret"></a>

```typescript
public rotateSecret(input: SecretsManagerRotateSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.tagResource"></a>

```typescript
public tagResource(input: SecretsManagerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerTagResourceRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.untagResource"></a>

```typescript
public untagResource(input: SecretsManagerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerUntagResourceRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerUntagResourceRequest)

---

##### `updateSecret` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.updateSecret"></a>

```typescript
public updateSecret(input: SecretsManagerUpdateSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest)

---

##### `updateSecretVersionStage` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.updateSecretVersionStage"></a>

```typescript
public updateSecretVersionStage(input: SecretsManagerUpdateSecretVersionStageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest)

---

##### `validateResourcePolicy` <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.validateResourcePolicy"></a>

```typescript
public validateResourcePolicy(input: SecretsManagerValidateResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyRequest)

---




## Structs <a name="Structs"></a>

### SecretsManagerCancelRotateSecretRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerCancelRotateSecretRequest: secretsmanager.SecretsManagerCancelRotateSecretRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretRequest.property.secretId"></a>

- *Type:* `string`

---

### SecretsManagerCancelRotateSecretResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerCancelRotateSecretResponse: secretsmanager.SecretsManagerCancelRotateSecretResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretResponse.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretResponse.property.versionId"></a>

- *Type:* `string`

---

### SecretsManagerCreateSecretRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerCreateSecretRequest: secretsmanager.SecretsManagerCreateSecretRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest.property.name"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `secretBinary`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest.property.secretBinary"></a>

- *Type:* `any`

---

##### `secretString`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest.property.secretString"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerTag`](#aws-cdk-sdk.secretsmanager.SecretsManagerTag)[]

---

### SecretsManagerCreateSecretResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerCreateSecretResponse: secretsmanager.SecretsManagerCreateSecretResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretResponse.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretResponse.property.versionId"></a>

- *Type:* `string`

---

### SecretsManagerDeleteResourcePolicyRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerDeleteResourcePolicyRequest: secretsmanager.SecretsManagerDeleteResourcePolicyRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyRequest.property.secretId"></a>

- *Type:* `string`

---

### SecretsManagerDeleteResourcePolicyResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerDeleteResourcePolicyResponse: secretsmanager.SecretsManagerDeleteResourcePolicyResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyResponse.property.name"></a>

- *Type:* `string`

---

### SecretsManagerDeleteSecretRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerDeleteSecretRequest: secretsmanager.SecretsManagerDeleteSecretRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest.property.secretId"></a>

- *Type:* `string`

---

##### `forceDeleteWithoutRecovery`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest.property.forceDeleteWithoutRecovery"></a>

- *Type:* `boolean`

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest.property.recoveryWindowInDays"></a>

- *Type:* `number`

---

### SecretsManagerDeleteSecretResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerDeleteSecretResponse: secretsmanager.SecretsManagerDeleteSecretResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretResponse.property.arn"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretResponse.property.deletionDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretResponse.property.name"></a>

- *Type:* `string`

---

### SecretsManagerDescribeSecretRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerDescribeSecretRequest: secretsmanager.SecretsManagerDescribeSecretRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest.property.secretId"></a>

- *Type:* `string`

---

### SecretsManagerDescribeSecretResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerDescribeSecretResponse: secretsmanager.SecretsManagerDescribeSecretResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `deletedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.deletedDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lastAccessedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.lastAccessedDate"></a>

- *Type:* `string`

---

##### `lastChangedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.lastChangedDate"></a>

- *Type:* `string`

---

##### `lastRotatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.lastRotatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.name"></a>

- *Type:* `string`

---

##### `owningService`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.owningService"></a>

- *Type:* `string`

---

##### `rotationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.rotationEnabled"></a>

- *Type:* `boolean`

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.rotationLambdaArn"></a>

- *Type:* `string`

---

##### `rotationRules`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.rotationRules"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType`](#aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerTag`](#aws-cdk-sdk.secretsmanager.SecretsManagerTag)[]

---

##### `versionIdsToStages`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretResponse.property.versionIdsToStages"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### SecretsManagerFilter <a name="aws-cdk-sdk.secretsmanager.SecretsManagerFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerFilter: secretsmanager.SecretsManagerFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerFilter.property.values"></a>

- *Type:* `string`[]

---

### SecretsManagerGetRandomPasswordRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerGetRandomPasswordRequest: secretsmanager.SecretsManagerGetRandomPasswordRequest = { ... }
```

##### `excludeCharacters`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.excludeCharacters"></a>

- *Type:* `string`

---

##### `excludeLowercase`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.excludeLowercase"></a>

- *Type:* `boolean`

---

##### `excludeNumbers`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.excludeNumbers"></a>

- *Type:* `boolean`

---

##### `excludePunctuation`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.excludePunctuation"></a>

- *Type:* `boolean`

---

##### `excludeUppercase`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.excludeUppercase"></a>

- *Type:* `boolean`

---

##### `includeSpace`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.includeSpace"></a>

- *Type:* `boolean`

---

##### `passwordLength`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.passwordLength"></a>

- *Type:* `number`

---

##### `requireEachIncludedType`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest.property.requireEachIncludedType"></a>

- *Type:* `boolean`

---

### SecretsManagerGetRandomPasswordResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerGetRandomPasswordResponse: secretsmanager.SecretsManagerGetRandomPasswordResponse = { ... }
```

##### `randomPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordResponse.property.randomPassword"></a>

- *Type:* `string`

---

### SecretsManagerGetResourcePolicyRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerGetResourcePolicyRequest: secretsmanager.SecretsManagerGetResourcePolicyRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyRequest.property.secretId"></a>

- *Type:* `string`

---

### SecretsManagerGetResourcePolicyResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerGetResourcePolicyResponse: secretsmanager.SecretsManagerGetResourcePolicyResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyResponse.property.name"></a>

- *Type:* `string`

---

##### `resourcePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyResponse.property.resourcePolicy"></a>

- *Type:* `string`

---

### SecretsManagerGetSecretValueRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerGetSecretValueRequest: secretsmanager.SecretsManagerGetSecretValueRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest.property.secretId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest.property.versionId"></a>

- *Type:* `string`

---

##### `versionStage`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest.property.versionStage"></a>

- *Type:* `string`

---

### SecretsManagerGetSecretValueResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerGetSecretValueResponse: secretsmanager.SecretsManagerGetSecretValueResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse.property.name"></a>

- *Type:* `string`

---

##### `secretBinary`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse.property.secretBinary"></a>

- *Type:* `any`

---

##### `secretString`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse.property.secretString"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse.property.versionId"></a>

- *Type:* `string`

---

##### `versionStages`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueResponse.property.versionStages"></a>

- *Type:* `string`[]

---

### SecretsManagerListSecretsRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerListSecretsRequest: secretsmanager.SecretsManagerListSecretsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerFilter`](#aws-cdk-sdk.secretsmanager.SecretsManagerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest.property.sortOrder"></a>

- *Type:* `string`

---

### SecretsManagerListSecretsResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerListSecretsResponse: secretsmanager.SecretsManagerListSecretsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `secretList`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsResponse.property.secretList"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry`](#aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry)[]

---

### SecretsManagerListSecretVersionIdsRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerListSecretVersionIdsRequest: secretsmanager.SecretsManagerListSecretVersionIdsRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest.property.secretId"></a>

- *Type:* `string`

---

##### `includeDeprecated`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest.property.includeDeprecated"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SecretsManagerListSecretVersionIdsResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerListSecretVersionIdsResponse: secretsmanager.SecretsManagerListSecretVersionIdsResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsResponse.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry`](#aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry)[]

---

### SecretsManagerPutResourcePolicyRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerPutResourcePolicyRequest: secretsmanager.SecretsManagerPutResourcePolicyRequest = { ... }
```

##### `resourcePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest.property.resourcePolicy"></a>

- *Type:* `string`

---

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest.property.secretId"></a>

- *Type:* `string`

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest.property.blockPublicPolicy"></a>

- *Type:* `boolean`

---

### SecretsManagerPutResourcePolicyResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerPutResourcePolicyResponse: secretsmanager.SecretsManagerPutResourcePolicyResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyResponse.property.name"></a>

- *Type:* `string`

---

### SecretsManagerPutSecretValueRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerPutSecretValueRequest: secretsmanager.SecretsManagerPutSecretValueRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest.property.secretId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `secretBinary`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest.property.secretBinary"></a>

- *Type:* `any`

---

##### `secretString`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest.property.secretString"></a>

- *Type:* `string`

---

##### `versionStages`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest.property.versionStages"></a>

- *Type:* `string`[]

---

### SecretsManagerPutSecretValueResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerPutSecretValueResponse: secretsmanager.SecretsManagerPutSecretValueResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueResponse.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueResponse.property.versionId"></a>

- *Type:* `string`

---

##### `versionStages`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueResponse.property.versionStages"></a>

- *Type:* `string`[]

---

### SecretsManagerRestoreSecretRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerRestoreSecretRequest: secretsmanager.SecretsManagerRestoreSecretRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretRequest.property.secretId"></a>

- *Type:* `string`

---

### SecretsManagerRestoreSecretResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerRestoreSecretResponse: secretsmanager.SecretsManagerRestoreSecretResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretResponse.property.name"></a>

- *Type:* `string`

---

### SecretsManagerRotateSecretRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerRotateSecretRequest: secretsmanager.SecretsManagerRotateSecretRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest.property.secretId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest.property.rotationLambdaArn"></a>

- *Type:* `string`

---

##### `rotationRules`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest.property.rotationRules"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType`](#aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType)

---

### SecretsManagerRotateSecretResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerRotateSecretResponse: secretsmanager.SecretsManagerRotateSecretResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretResponse.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretResponse.property.versionId"></a>

- *Type:* `string`

---

### SecretsManagerRotationRulesType <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerRotationRulesType: secretsmanager.SecretsManagerRotationRulesType = { ... }
```

##### `automaticallyAfterDays`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType.property.automaticallyAfterDays"></a>

- *Type:* `number`

---

### SecretsManagerSecretListEntry <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerSecretListEntry: secretsmanager.SecretsManagerSecretListEntry = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.arn"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.createdDate"></a>

- *Type:* `string`

---

##### `deletedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.deletedDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lastAccessedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.lastAccessedDate"></a>

- *Type:* `string`

---

##### `lastChangedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.lastChangedDate"></a>

- *Type:* `string`

---

##### `lastRotatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.lastRotatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.name"></a>

- *Type:* `string`

---

##### `owningService`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.owningService"></a>

- *Type:* `string`

---

##### `rotationEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.rotationEnabled"></a>

- *Type:* `boolean`

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.rotationLambdaArn"></a>

- *Type:* `string`

---

##### `rotationRules`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.rotationRules"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType`](#aws-cdk-sdk.secretsmanager.SecretsManagerRotationRulesType)

---

##### `secretVersionsToStages`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.secretVersionsToStages"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry.property.tags"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerTag`](#aws-cdk-sdk.secretsmanager.SecretsManagerTag)[]

---

### SecretsManagerSecretVersionsListEntry <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerSecretVersionsListEntry: secretsmanager.SecretsManagerSecretVersionsListEntry = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry.property.createdDate"></a>

- *Type:* `string`

---

##### `lastAccessedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry.property.lastAccessedDate"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry.property.versionId"></a>

- *Type:* `string`

---

##### `versionStages`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry.property.versionStages"></a>

- *Type:* `string`[]

---

### SecretsManagerTag <a name="aws-cdk-sdk.secretsmanager.SecretsManagerTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerTag: secretsmanager.SecretsManagerTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerTag.property.value"></a>

- *Type:* `string`

---

### SecretsManagerTagResourceRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerTagResourceRequest: secretsmanager.SecretsManagerTagResourceRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerTagResourceRequest.property.secretId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerTag`](#aws-cdk-sdk.secretsmanager.SecretsManagerTag)[]

---

### SecretsManagerUntagResourceRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerUntagResourceRequest: secretsmanager.SecretsManagerUntagResourceRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUntagResourceRequest.property.secretId"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SecretsManagerUpdateSecretRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerUpdateSecretRequest: secretsmanager.SecretsManagerUpdateSecretRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest.property.secretId"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `secretBinary`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest.property.secretBinary"></a>

- *Type:* `any`

---

##### `secretString`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest.property.secretString"></a>

- *Type:* `string`

---

### SecretsManagerUpdateSecretResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerUpdateSecretResponse: secretsmanager.SecretsManagerUpdateSecretResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretResponse.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretResponse.property.versionId"></a>

- *Type:* `string`

---

### SecretsManagerUpdateSecretVersionStageRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerUpdateSecretVersionStageRequest: secretsmanager.SecretsManagerUpdateSecretVersionStageRequest = { ... }
```

##### `secretId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest.property.secretId"></a>

- *Type:* `string`

---

##### `versionStage`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest.property.versionStage"></a>

- *Type:* `string`

---

##### `moveToVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest.property.moveToVersionId"></a>

- *Type:* `string`

---

##### `removeFromVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest.property.removeFromVersionId"></a>

- *Type:* `string`

---

### SecretsManagerUpdateSecretVersionStageResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerUpdateSecretVersionStageResponse: secretsmanager.SecretsManagerUpdateSecretVersionStageResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageResponse.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageResponse.property.name"></a>

- *Type:* `string`

---

### SecretsManagerValidateResourcePolicyRequest <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerValidateResourcePolicyRequest: secretsmanager.SecretsManagerValidateResourcePolicyRequest = { ... }
```

##### `resourcePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyRequest.property.resourcePolicy"></a>

- *Type:* `string`

---

##### `secretId`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyRequest.property.secretId"></a>

- *Type:* `string`

---

### SecretsManagerValidateResourcePolicyResponse <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerValidateResourcePolicyResponse: secretsmanager.SecretsManagerValidateResourcePolicyResponse = { ... }
```

##### `policyValidationPassed`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyResponse.property.policyValidationPassed"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyResponse.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerValidationErrorsEntry`](#aws-cdk-sdk.secretsmanager.SecretsManagerValidationErrorsEntry)[]

---

### SecretsManagerValidationErrorsEntry <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidationErrorsEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

const secretsManagerValidationErrorsEntry: secretsmanager.SecretsManagerValidationErrorsEntry = { ... }
```

##### `checkName`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidationErrorsEntry.property.checkName"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerValidationErrorsEntry.property.errorMessage"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### SecretsManagerResponsesCancelRotateSecret <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesCancelRotateSecret(__scope: Construct, __resources: string[], __input: SecretsManagerCancelRotateSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerCancelRotateSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCancelRotateSecret.property.versionId"></a>

- *Type:* `string`

---


### SecretsManagerResponsesCreateSecret <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesCreateSecret(__scope: Construct, __resources: string[], __input: SecretsManagerCreateSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerCreateSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesCreateSecret.property.versionId"></a>

- *Type:* `string`

---


### SecretsManagerResponsesDeleteResourcePolicy <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteResourcePolicy.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesDeleteResourcePolicy(__scope: Construct, __resources: string[], __input: SecretsManagerDeleteResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerDeleteResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteResourcePolicy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteResourcePolicy.property.name"></a>

- *Type:* `string`

---


### SecretsManagerResponsesDeleteSecret <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesDeleteSecret(__scope: Construct, __resources: string[], __input: SecretsManagerDeleteSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerDeleteSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret.property.arn"></a>

- *Type:* `string`

---

##### `deletionDate`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret.property.deletionDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDeleteSecret.property.name"></a>

- *Type:* `string`

---


### SecretsManagerResponsesDescribeSecret <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesDescribeSecret(__scope: Construct, __resources: string[], __input: SecretsManagerDescribeSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.arn"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.createdDate"></a>

- *Type:* `string`

---

##### `deletedDate`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.deletedDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.description"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `lastAccessedDate`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.lastAccessedDate"></a>

- *Type:* `string`

---

##### `lastChangedDate`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.lastChangedDate"></a>

- *Type:* `string`

---

##### `lastRotatedDate`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.lastRotatedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.name"></a>

- *Type:* `string`

---

##### `owningService`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.owningService"></a>

- *Type:* `string`

---

##### `rotationEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.rotationEnabled"></a>

- *Type:* `boolean`

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.rotationLambdaArn"></a>

- *Type:* `string`

---

##### `rotationRules`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.rotationRules"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules`](#aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.tags"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerTag`](#aws-cdk-sdk.secretsmanager.SecretsManagerTag)[]

---

##### `versionIdsToStages`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecret.property.versionIdsToStages"></a>

- *Type:* {[ key: string ]: `string`[]}

---


### SecretsManagerResponsesDescribeSecretRotationRules <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules(__scope: Construct, __resources: string[], __input: SecretsManagerDescribeSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerDescribeSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `automaticallyAfterDays`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesDescribeSecretRotationRules.property.automaticallyAfterDays"></a>

- *Type:* `number`

---


### SecretsManagerResponsesFetchRandomPassword <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchRandomPassword"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchRandomPassword.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesFetchRandomPassword(__scope: Construct, __resources: string[], __input: SecretsManagerGetRandomPasswordRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchRandomPassword.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchRandomPassword.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchRandomPassword.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerGetRandomPasswordRequest)

---



#### Properties <a name="Properties"></a>

##### `randomPassword`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchRandomPassword.property.randomPassword"></a>

- *Type:* `string`

---


### SecretsManagerResponsesFetchResourcePolicy <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesFetchResourcePolicy(__scope: Construct, __resources: string[], __input: SecretsManagerGetResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerGetResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy.property.name"></a>

- *Type:* `string`

---

##### `resourcePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchResourcePolicy.property.resourcePolicy"></a>

- *Type:* `string`

---


### SecretsManagerResponsesFetchSecretValue <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesFetchSecretValue(__scope: Construct, __resources: string[], __input: SecretsManagerGetSecretValueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerGetSecretValueRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.property.arn"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.property.createdDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.property.name"></a>

- *Type:* `string`

---

##### `secretBinary`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.property.secretBinary"></a>

- *Type:* `any`

---

##### `secretString`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.property.secretString"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.property.versionId"></a>

- *Type:* `string`

---

##### `versionStages`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesFetchSecretValue.property.versionStages"></a>

- *Type:* `string`[]

---


### SecretsManagerResponsesListSecrets <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecrets"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecrets.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesListSecrets(__scope: Construct, __resources: string[], __input: SecretsManagerListSecretsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecrets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecrets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecrets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerListSecretsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecrets.property.nextToken"></a>

- *Type:* `string`

---

##### `secretList`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecrets.property.secretList"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry`](#aws-cdk-sdk.secretsmanager.SecretsManagerSecretListEntry)[]

---


### SecretsManagerResponsesListSecretVersionIds <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesListSecretVersionIds(__scope: Construct, __resources: string[], __input: SecretsManagerListSecretVersionIdsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerListSecretVersionIdsRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesListSecretVersionIds.property.versions"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry`](#aws-cdk-sdk.secretsmanager.SecretsManagerSecretVersionsListEntry)[]

---


### SecretsManagerResponsesPutResourcePolicy <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutResourcePolicy.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesPutResourcePolicy(__scope: Construct, __resources: string[], __input: SecretsManagerPutResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerPutResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutResourcePolicy.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutResourcePolicy.property.name"></a>

- *Type:* `string`

---


### SecretsManagerResponsesPutSecretValue <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesPutSecretValue(__scope: Construct, __resources: string[], __input: SecretsManagerPutSecretValueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerPutSecretValueRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.property.versionId"></a>

- *Type:* `string`

---

##### `versionStages`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesPutSecretValue.property.versionStages"></a>

- *Type:* `string`[]

---


### SecretsManagerResponsesRestoreSecret <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRestoreSecret"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRestoreSecret.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesRestoreSecret(__scope: Construct, __resources: string[], __input: SecretsManagerRestoreSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRestoreSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRestoreSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRestoreSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerRestoreSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRestoreSecret.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRestoreSecret.property.name"></a>

- *Type:* `string`

---


### SecretsManagerResponsesRotateSecret <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesRotateSecret(__scope: Construct, __resources: string[], __input: SecretsManagerRotateSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerRotateSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesRotateSecret.property.versionId"></a>

- *Type:* `string`

---


### SecretsManagerResponsesUpdateSecret <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesUpdateSecret(__scope: Construct, __resources: string[], __input: SecretsManagerUpdateSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret.property.name"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecret.property.versionId"></a>

- *Type:* `string`

---


### SecretsManagerResponsesUpdateSecretVersionStage <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage(__scope: Construct, __resources: string[], __input: SecretsManagerUpdateSecretVersionStageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerUpdateSecretVersionStageRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage.property.arn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesUpdateSecretVersionStage.property.name"></a>

- *Type:* `string`

---


### SecretsManagerResponsesValidateResourcePolicy <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesValidateResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesValidateResourcePolicy.Initializer"></a>

```typescript
import { secretsmanager } from 'aws-cdk-sdk'

new secretsmanager.SecretsManagerResponsesValidateResourcePolicy(__scope: Construct, __resources: string[], __input: SecretsManagerValidateResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesValidateResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesValidateResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesValidateResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyRequest`](#aws-cdk-sdk.secretsmanager.SecretsManagerValidateResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyValidationPassed`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesValidateResourcePolicy.property.policyValidationPassed"></a>

- *Type:* `boolean`

---

##### `validationErrors`<sup>Required</sup> <a name="aws-cdk-sdk.secretsmanager.SecretsManagerResponsesValidateResourcePolicy.property.validationErrors"></a>

- *Type:* [`aws-cdk-sdk.secretsmanager.SecretsManagerValidationErrorsEntry`](#aws-cdk-sdk.secretsmanager.SecretsManagerValidationErrorsEntry)[]

---



