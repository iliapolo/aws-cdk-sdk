# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SnsClient <a name="aws-cdk-sdk.sns.SnsClient"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SnsClient.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SnsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addPermission` <a name="aws-cdk-sdk.sns.SnsClient.addPermission"></a>

```typescript
public addPermission(input: SnsAddPermissionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsAddPermissionInput`](#aws-cdk-sdk.sns.SnsAddPermissionInput)

---

##### `checkIfPhoneNumberIsOptedOut` <a name="aws-cdk-sdk.sns.SnsClient.checkIfPhoneNumberIsOptedOut"></a>

```typescript
public checkIfPhoneNumberIsOptedOut(input: SnsCheckIfPhoneNumberIsOptedOutInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutInput`](#aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutInput)

---

##### `confirmSubscription` <a name="aws-cdk-sdk.sns.SnsClient.confirmSubscription"></a>

```typescript
public confirmSubscription(input: SnsConfirmSubscriptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsConfirmSubscriptionInput`](#aws-cdk-sdk.sns.SnsConfirmSubscriptionInput)

---

##### `createPlatformApplication` <a name="aws-cdk-sdk.sns.SnsClient.createPlatformApplication"></a>

```typescript
public createPlatformApplication(input: SnsCreatePlatformApplicationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput`](#aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput)

---

##### `createPlatformEndpoint` <a name="aws-cdk-sdk.sns.SnsClient.createPlatformEndpoint"></a>

```typescript
public createPlatformEndpoint(input: SnsCreatePlatformEndpointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput`](#aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput)

---

##### `createTopic` <a name="aws-cdk-sdk.sns.SnsClient.createTopic"></a>

```typescript
public createTopic(input: SnsCreateTopicInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCreateTopicInput`](#aws-cdk-sdk.sns.SnsCreateTopicInput)

---

##### `deleteEndpoint` <a name="aws-cdk-sdk.sns.SnsClient.deleteEndpoint"></a>

```typescript
public deleteEndpoint(input: SnsDeleteEndpointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsDeleteEndpointInput`](#aws-cdk-sdk.sns.SnsDeleteEndpointInput)

---

##### `deletePlatformApplication` <a name="aws-cdk-sdk.sns.SnsClient.deletePlatformApplication"></a>

```typescript
public deletePlatformApplication(input: SnsDeletePlatformApplicationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsDeletePlatformApplicationInput`](#aws-cdk-sdk.sns.SnsDeletePlatformApplicationInput)

---

##### `deleteTopic` <a name="aws-cdk-sdk.sns.SnsClient.deleteTopic"></a>

```typescript
public deleteTopic(input: SnsDeleteTopicInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsDeleteTopicInput`](#aws-cdk-sdk.sns.SnsDeleteTopicInput)

---

##### `fetchEndpointAttributes` <a name="aws-cdk-sdk.sns.SnsClient.fetchEndpointAttributes"></a>

```typescript
public fetchEndpointAttributes(input: SnsGetEndpointAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetEndpointAttributesInput`](#aws-cdk-sdk.sns.SnsGetEndpointAttributesInput)

---

##### `fetchPlatformApplicationAttributes` <a name="aws-cdk-sdk.sns.SnsClient.fetchPlatformApplicationAttributes"></a>

```typescript
public fetchPlatformApplicationAttributes(input: SnsGetPlatformApplicationAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesInput`](#aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesInput)

---

##### `fetchSmsAttributes` <a name="aws-cdk-sdk.sns.SnsClient.fetchSmsAttributes"></a>

```typescript
public fetchSmsAttributes(input: SnsGetSmsAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetSmsAttributesInput`](#aws-cdk-sdk.sns.SnsGetSmsAttributesInput)

---

##### `fetchSubscriptionAttributes` <a name="aws-cdk-sdk.sns.SnsClient.fetchSubscriptionAttributes"></a>

```typescript
public fetchSubscriptionAttributes(input: SnsGetSubscriptionAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetSubscriptionAttributesInput`](#aws-cdk-sdk.sns.SnsGetSubscriptionAttributesInput)

---

##### `fetchTopicAttributes` <a name="aws-cdk-sdk.sns.SnsClient.fetchTopicAttributes"></a>

```typescript
public fetchTopicAttributes(input: SnsGetTopicAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetTopicAttributesInput`](#aws-cdk-sdk.sns.SnsGetTopicAttributesInput)

---

##### `listEndpointsByPlatformApplication` <a name="aws-cdk-sdk.sns.SnsClient.listEndpointsByPlatformApplication"></a>

```typescript
public listEndpointsByPlatformApplication(input: SnsListEndpointsByPlatformApplicationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationInput`](#aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationInput)

---

##### `listPhoneNumbersOptedOut` <a name="aws-cdk-sdk.sns.SnsClient.listPhoneNumbersOptedOut"></a>

```typescript
public listPhoneNumbersOptedOut(input: SnsListPhoneNumbersOptedOutInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutInput`](#aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutInput)

---

##### `listPlatformApplications` <a name="aws-cdk-sdk.sns.SnsClient.listPlatformApplications"></a>

```typescript
public listPlatformApplications(input: SnsListPlatformApplicationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListPlatformApplicationsInput`](#aws-cdk-sdk.sns.SnsListPlatformApplicationsInput)

---

##### `listSubscriptions` <a name="aws-cdk-sdk.sns.SnsClient.listSubscriptions"></a>

```typescript
public listSubscriptions(input: SnsListSubscriptionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListSubscriptionsInput`](#aws-cdk-sdk.sns.SnsListSubscriptionsInput)

---

##### `listSubscriptionsByTopic` <a name="aws-cdk-sdk.sns.SnsClient.listSubscriptionsByTopic"></a>

```typescript
public listSubscriptionsByTopic(input: SnsListSubscriptionsByTopicInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListSubscriptionsByTopicInput`](#aws-cdk-sdk.sns.SnsListSubscriptionsByTopicInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.sns.SnsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SnsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListTagsForResourceRequest`](#aws-cdk-sdk.sns.SnsListTagsForResourceRequest)

---

##### `listTopics` <a name="aws-cdk-sdk.sns.SnsClient.listTopics"></a>

```typescript
public listTopics(input: SnsListTopicsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListTopicsInput`](#aws-cdk-sdk.sns.SnsListTopicsInput)

---

##### `optInPhoneNumber` <a name="aws-cdk-sdk.sns.SnsClient.optInPhoneNumber"></a>

```typescript
public optInPhoneNumber(input: SnsOptInPhoneNumberInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsOptInPhoneNumberInput`](#aws-cdk-sdk.sns.SnsOptInPhoneNumberInput)

---

##### `publish` <a name="aws-cdk-sdk.sns.SnsClient.publish"></a>

```typescript
public publish(input: SnsPublishInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsPublishInput`](#aws-cdk-sdk.sns.SnsPublishInput)

---

##### `putEndpointAttributes` <a name="aws-cdk-sdk.sns.SnsClient.putEndpointAttributes"></a>

```typescript
public putEndpointAttributes(input: SnsSetEndpointAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSetEndpointAttributesInput`](#aws-cdk-sdk.sns.SnsSetEndpointAttributesInput)

---

##### `putPlatformApplicationAttributes` <a name="aws-cdk-sdk.sns.SnsClient.putPlatformApplicationAttributes"></a>

```typescript
public putPlatformApplicationAttributes(input: SnsSetPlatformApplicationAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSetPlatformApplicationAttributesInput`](#aws-cdk-sdk.sns.SnsSetPlatformApplicationAttributesInput)

---

##### `putSmsAttributes` <a name="aws-cdk-sdk.sns.SnsClient.putSmsAttributes"></a>

```typescript
public putSmsAttributes(input: SnsSetSmsAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSetSmsAttributesInput`](#aws-cdk-sdk.sns.SnsSetSmsAttributesInput)

---

##### `putSubscriptionAttributes` <a name="aws-cdk-sdk.sns.SnsClient.putSubscriptionAttributes"></a>

```typescript
public putSubscriptionAttributes(input: SnsSetSubscriptionAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSetSubscriptionAttributesInput`](#aws-cdk-sdk.sns.SnsSetSubscriptionAttributesInput)

---

##### `putTopicAttributes` <a name="aws-cdk-sdk.sns.SnsClient.putTopicAttributes"></a>

```typescript
public putTopicAttributes(input: SnsSetTopicAttributesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSetTopicAttributesInput`](#aws-cdk-sdk.sns.SnsSetTopicAttributesInput)

---

##### `removePermission` <a name="aws-cdk-sdk.sns.SnsClient.removePermission"></a>

```typescript
public removePermission(input: SnsRemovePermissionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsRemovePermissionInput`](#aws-cdk-sdk.sns.SnsRemovePermissionInput)

---

##### `subscribe` <a name="aws-cdk-sdk.sns.SnsClient.subscribe"></a>

```typescript
public subscribe(input: SnsSubscribeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSubscribeInput`](#aws-cdk-sdk.sns.SnsSubscribeInput)

---

##### `tagResource` <a name="aws-cdk-sdk.sns.SnsClient.tagResource"></a>

```typescript
public tagResource(input: SnsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsTagResourceRequest`](#aws-cdk-sdk.sns.SnsTagResourceRequest)

---

##### `unsubscribe` <a name="aws-cdk-sdk.sns.SnsClient.unsubscribe"></a>

```typescript
public unsubscribe(input: SnsUnsubscribeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsUnsubscribeInput`](#aws-cdk-sdk.sns.SnsUnsubscribeInput)

---

##### `untagResource` <a name="aws-cdk-sdk.sns.SnsClient.untagResource"></a>

```typescript
public untagResource(input: SnsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsUntagResourceRequest`](#aws-cdk-sdk.sns.SnsUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### SnsAddPermissionInput <a name="aws-cdk-sdk.sns.SnsAddPermissionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsAddPermissionInput: sns.SnsAddPermissionInput = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsAddPermissionInput.property.actionName"></a>

- *Type:* `string`[]

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsAddPermissionInput.property.awsAccountId"></a>

- *Type:* `string`[]

---

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsAddPermissionInput.property.label"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsAddPermissionInput.property.topicArn"></a>

- *Type:* `string`

---

### SnsCheckIfPhoneNumberIsOptedOutInput <a name="aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCheckIfPhoneNumberIsOptedOutInput: sns.SnsCheckIfPhoneNumberIsOptedOutInput = { ... }
```

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutInput.property.phoneNumber"></a>

- *Type:* `string`

---

### SnsCheckIfPhoneNumberIsOptedOutResponse <a name="aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCheckIfPhoneNumberIsOptedOutResponse: sns.SnsCheckIfPhoneNumberIsOptedOutResponse = { ... }
```

##### `isOptedOut`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutResponse.property.isOptedOut"></a>

- *Type:* `boolean`

---

### SnsConfirmSubscriptionInput <a name="aws-cdk-sdk.sns.SnsConfirmSubscriptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsConfirmSubscriptionInput: sns.SnsConfirmSubscriptionInput = { ... }
```

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsConfirmSubscriptionInput.property.token"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsConfirmSubscriptionInput.property.topicArn"></a>

- *Type:* `string`

---

##### `authenticateOnUnsubscribe`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsConfirmSubscriptionInput.property.authenticateOnUnsubscribe"></a>

- *Type:* `string`

---

### SnsConfirmSubscriptionResponse <a name="aws-cdk-sdk.sns.SnsConfirmSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsConfirmSubscriptionResponse: sns.SnsConfirmSubscriptionResponse = { ... }
```

##### `subscriptionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsConfirmSubscriptionResponse.property.subscriptionArn"></a>

- *Type:* `string`

---

### SnsCreateEndpointResponse <a name="aws-cdk-sdk.sns.SnsCreateEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCreateEndpointResponse: sns.SnsCreateEndpointResponse = { ... }
```

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCreateEndpointResponse.property.endpointArn"></a>

- *Type:* `string`

---

### SnsCreatePlatformApplicationInput <a name="aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCreatePlatformApplicationInput: sns.SnsCreatePlatformApplicationInput = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput.property.name"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput.property.platform"></a>

- *Type:* `string`

---

### SnsCreatePlatformApplicationResponse <a name="aws-cdk-sdk.sns.SnsCreatePlatformApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCreatePlatformApplicationResponse: sns.SnsCreatePlatformApplicationResponse = { ... }
```

##### `platformApplicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformApplicationResponse.property.platformApplicationArn"></a>

- *Type:* `string`

---

### SnsCreatePlatformEndpointInput <a name="aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCreatePlatformEndpointInput: sns.SnsCreatePlatformEndpointInput = { ... }
```

##### `platformApplicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput.property.platformApplicationArn"></a>

- *Type:* `string`

---

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput.property.token"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `customUserData`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput.property.customUserData"></a>

- *Type:* `string`

---

### SnsCreateTopicInput <a name="aws-cdk-sdk.sns.SnsCreateTopicInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCreateTopicInput: sns.SnsCreateTopicInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsCreateTopicInput.property.name"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCreateTopicInput.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCreateTopicInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsTag`](#aws-cdk-sdk.sns.SnsTag)[]

---

### SnsCreateTopicResponse <a name="aws-cdk-sdk.sns.SnsCreateTopicResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsCreateTopicResponse: sns.SnsCreateTopicResponse = { ... }
```

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsCreateTopicResponse.property.topicArn"></a>

- *Type:* `string`

---

### SnsDeleteEndpointInput <a name="aws-cdk-sdk.sns.SnsDeleteEndpointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsDeleteEndpointInput: sns.SnsDeleteEndpointInput = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsDeleteEndpointInput.property.endpointArn"></a>

- *Type:* `string`

---

### SnsDeletePlatformApplicationInput <a name="aws-cdk-sdk.sns.SnsDeletePlatformApplicationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsDeletePlatformApplicationInput: sns.SnsDeletePlatformApplicationInput = { ... }
```

##### `platformApplicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsDeletePlatformApplicationInput.property.platformApplicationArn"></a>

- *Type:* `string`

---

### SnsDeleteTopicInput <a name="aws-cdk-sdk.sns.SnsDeleteTopicInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsDeleteTopicInput: sns.SnsDeleteTopicInput = { ... }
```

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsDeleteTopicInput.property.topicArn"></a>

- *Type:* `string`

---

### SnsEndpoint <a name="aws-cdk-sdk.sns.SnsEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsEndpoint: sns.SnsEndpoint = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsEndpoint.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsEndpoint.property.endpointArn"></a>

- *Type:* `string`

---

### SnsGetEndpointAttributesInput <a name="aws-cdk-sdk.sns.SnsGetEndpointAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetEndpointAttributesInput: sns.SnsGetEndpointAttributesInput = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsGetEndpointAttributesInput.property.endpointArn"></a>

- *Type:* `string`

---

### SnsGetEndpointAttributesResponse <a name="aws-cdk-sdk.sns.SnsGetEndpointAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetEndpointAttributesResponse: sns.SnsGetEndpointAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsGetEndpointAttributesResponse.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### SnsGetPlatformApplicationAttributesInput <a name="aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetPlatformApplicationAttributesInput: sns.SnsGetPlatformApplicationAttributesInput = { ... }
```

##### `platformApplicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesInput.property.platformApplicationArn"></a>

- *Type:* `string`

---

### SnsGetPlatformApplicationAttributesResponse <a name="aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetPlatformApplicationAttributesResponse: sns.SnsGetPlatformApplicationAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesResponse.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### SnsGetSmsAttributesInput <a name="aws-cdk-sdk.sns.SnsGetSmsAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetSmsAttributesInput: sns.SnsGetSmsAttributesInput = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsGetSmsAttributesInput.property.attributes"></a>

- *Type:* `string`[]

---

### SnsGetSmsAttributesResponse <a name="aws-cdk-sdk.sns.SnsGetSmsAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetSmsAttributesResponse: sns.SnsGetSmsAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsGetSmsAttributesResponse.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### SnsGetSubscriptionAttributesInput <a name="aws-cdk-sdk.sns.SnsGetSubscriptionAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetSubscriptionAttributesInput: sns.SnsGetSubscriptionAttributesInput = { ... }
```

##### `subscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsGetSubscriptionAttributesInput.property.subscriptionArn"></a>

- *Type:* `string`

---

### SnsGetSubscriptionAttributesResponse <a name="aws-cdk-sdk.sns.SnsGetSubscriptionAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetSubscriptionAttributesResponse: sns.SnsGetSubscriptionAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsGetSubscriptionAttributesResponse.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### SnsGetTopicAttributesInput <a name="aws-cdk-sdk.sns.SnsGetTopicAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetTopicAttributesInput: sns.SnsGetTopicAttributesInput = { ... }
```

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsGetTopicAttributesInput.property.topicArn"></a>

- *Type:* `string`

---

### SnsGetTopicAttributesResponse <a name="aws-cdk-sdk.sns.SnsGetTopicAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsGetTopicAttributesResponse: sns.SnsGetTopicAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsGetTopicAttributesResponse.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### SnsListEndpointsByPlatformApplicationInput <a name="aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListEndpointsByPlatformApplicationInput: sns.SnsListEndpointsByPlatformApplicationInput = { ... }
```

##### `platformApplicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationInput.property.platformApplicationArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationInput.property.nextToken"></a>

- *Type:* `string`

---

### SnsListEndpointsByPlatformApplicationResponse <a name="aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListEndpointsByPlatformApplicationResponse: sns.SnsListEndpointsByPlatformApplicationResponse = { ... }
```

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationResponse.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsEndpoint`](#aws-cdk-sdk.sns.SnsEndpoint)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationResponse.property.nextToken"></a>

- *Type:* `string`

---

### SnsListPhoneNumbersOptedOutInput <a name="aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListPhoneNumbersOptedOutInput: sns.SnsListPhoneNumbersOptedOutInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutInput.property.nextToken"></a>

- *Type:* `string`

---

### SnsListPhoneNumbersOptedOutResponse <a name="aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListPhoneNumbersOptedOutResponse: sns.SnsListPhoneNumbersOptedOutResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumbers`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutResponse.property.phoneNumbers"></a>

- *Type:* `string`[]

---

### SnsListPlatformApplicationsInput <a name="aws-cdk-sdk.sns.SnsListPlatformApplicationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListPlatformApplicationsInput: sns.SnsListPlatformApplicationsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListPlatformApplicationsInput.property.nextToken"></a>

- *Type:* `string`

---

### SnsListPlatformApplicationsResponse <a name="aws-cdk-sdk.sns.SnsListPlatformApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListPlatformApplicationsResponse: sns.SnsListPlatformApplicationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListPlatformApplicationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `platformApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListPlatformApplicationsResponse.property.platformApplications"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsPlatformApplication`](#aws-cdk-sdk.sns.SnsPlatformApplication)[]

---

### SnsListSubscriptionsByTopicInput <a name="aws-cdk-sdk.sns.SnsListSubscriptionsByTopicInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListSubscriptionsByTopicInput: sns.SnsListSubscriptionsByTopicInput = { ... }
```

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsListSubscriptionsByTopicInput.property.topicArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListSubscriptionsByTopicInput.property.nextToken"></a>

- *Type:* `string`

---

### SnsListSubscriptionsByTopicResponse <a name="aws-cdk-sdk.sns.SnsListSubscriptionsByTopicResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListSubscriptionsByTopicResponse: sns.SnsListSubscriptionsByTopicResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListSubscriptionsByTopicResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListSubscriptionsByTopicResponse.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSubscription`](#aws-cdk-sdk.sns.SnsSubscription)[]

---

### SnsListSubscriptionsInput <a name="aws-cdk-sdk.sns.SnsListSubscriptionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListSubscriptionsInput: sns.SnsListSubscriptionsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListSubscriptionsInput.property.nextToken"></a>

- *Type:* `string`

---

### SnsListSubscriptionsResponse <a name="aws-cdk-sdk.sns.SnsListSubscriptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListSubscriptionsResponse: sns.SnsListSubscriptionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListSubscriptionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListSubscriptionsResponse.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSubscription`](#aws-cdk-sdk.sns.SnsSubscription)[]

---

### SnsListTagsForResourceRequest <a name="aws-cdk-sdk.sns.SnsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListTagsForResourceRequest: sns.SnsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### SnsListTagsForResourceResponse <a name="aws-cdk-sdk.sns.SnsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListTagsForResourceResponse: sns.SnsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsTag`](#aws-cdk-sdk.sns.SnsTag)[]

---

### SnsListTopicsInput <a name="aws-cdk-sdk.sns.SnsListTopicsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListTopicsInput: sns.SnsListTopicsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListTopicsInput.property.nextToken"></a>

- *Type:* `string`

---

### SnsListTopicsResponse <a name="aws-cdk-sdk.sns.SnsListTopicsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsListTopicsResponse: sns.SnsListTopicsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListTopicsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `topics`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsListTopicsResponse.property.topics"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsTopic`](#aws-cdk-sdk.sns.SnsTopic)[]

---

### SnsMessageAttributeValue <a name="aws-cdk-sdk.sns.SnsMessageAttributeValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsMessageAttributeValue: sns.SnsMessageAttributeValue = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsMessageAttributeValue.property.dataType"></a>

- *Type:* `string`

---

##### `binaryValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsMessageAttributeValue.property.binaryValue"></a>

- *Type:* `any`

---

##### `stringValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsMessageAttributeValue.property.stringValue"></a>

- *Type:* `string`

---

### SnsOptInPhoneNumberInput <a name="aws-cdk-sdk.sns.SnsOptInPhoneNumberInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsOptInPhoneNumberInput: sns.SnsOptInPhoneNumberInput = { ... }
```

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsOptInPhoneNumberInput.property.phoneNumber"></a>

- *Type:* `string`

---

### SnsOptInPhoneNumberResponse <a name="aws-cdk-sdk.sns.SnsOptInPhoneNumberResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsOptInPhoneNumberResponse: sns.SnsOptInPhoneNumberResponse = { ... }
```

### SnsPlatformApplication <a name="aws-cdk-sdk.sns.SnsPlatformApplication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsPlatformApplication: sns.SnsPlatformApplication = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPlatformApplication.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `platformApplicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPlatformApplication.property.platformApplicationArn"></a>

- *Type:* `string`

---

### SnsPublishInput <a name="aws-cdk-sdk.sns.SnsPublishInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsPublishInput: sns.SnsPublishInput = { ... }
```

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.message"></a>

- *Type:* `string`

---

##### `messageAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.messageAttributes"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.sns.SnsMessageAttributeValue`](#aws-cdk-sdk.sns.SnsMessageAttributeValue)}

---

##### `messageDeduplicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.messageDeduplicationId"></a>

- *Type:* `string`

---

##### `messageGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.messageGroupId"></a>

- *Type:* `string`

---

##### `messageStructure`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.messageStructure"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.phoneNumber"></a>

- *Type:* `string`

---

##### `subject`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.subject"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.targetArn"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishInput.property.topicArn"></a>

- *Type:* `string`

---

### SnsPublishResponse <a name="aws-cdk-sdk.sns.SnsPublishResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsPublishResponse: sns.SnsPublishResponse = { ... }
```

##### `messageId`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishResponse.property.messageId"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsPublishResponse.property.sequenceNumber"></a>

- *Type:* `string`

---

### SnsRemovePermissionInput <a name="aws-cdk-sdk.sns.SnsRemovePermissionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsRemovePermissionInput: sns.SnsRemovePermissionInput = { ... }
```

##### `label`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsRemovePermissionInput.property.label"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsRemovePermissionInput.property.topicArn"></a>

- *Type:* `string`

---

### SnsSetEndpointAttributesInput <a name="aws-cdk-sdk.sns.SnsSetEndpointAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSetEndpointAttributesInput: sns.SnsSetEndpointAttributesInput = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetEndpointAttributesInput.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetEndpointAttributesInput.property.endpointArn"></a>

- *Type:* `string`

---

### SnsSetPlatformApplicationAttributesInput <a name="aws-cdk-sdk.sns.SnsSetPlatformApplicationAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSetPlatformApplicationAttributesInput: sns.SnsSetPlatformApplicationAttributesInput = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetPlatformApplicationAttributesInput.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `platformApplicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetPlatformApplicationAttributesInput.property.platformApplicationArn"></a>

- *Type:* `string`

---

### SnsSetSmsAttributesInput <a name="aws-cdk-sdk.sns.SnsSetSmsAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSetSmsAttributesInput: sns.SnsSetSmsAttributesInput = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetSmsAttributesInput.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

### SnsSetSmsAttributesResponse <a name="aws-cdk-sdk.sns.SnsSetSmsAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSetSmsAttributesResponse: sns.SnsSetSmsAttributesResponse = { ... }
```

### SnsSetSubscriptionAttributesInput <a name="aws-cdk-sdk.sns.SnsSetSubscriptionAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSetSubscriptionAttributesInput: sns.SnsSetSubscriptionAttributesInput = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetSubscriptionAttributesInput.property.attributeName"></a>

- *Type:* `string`

---

##### `subscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetSubscriptionAttributesInput.property.subscriptionArn"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSetSubscriptionAttributesInput.property.attributeValue"></a>

- *Type:* `string`

---

### SnsSetTopicAttributesInput <a name="aws-cdk-sdk.sns.SnsSetTopicAttributesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSetTopicAttributesInput: sns.SnsSetTopicAttributesInput = { ... }
```

##### `attributeName`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetTopicAttributesInput.property.attributeName"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSetTopicAttributesInput.property.topicArn"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSetTopicAttributesInput.property.attributeValue"></a>

- *Type:* `string`

---

### SnsSubscribeInput <a name="aws-cdk-sdk.sns.SnsSubscribeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSubscribeInput: sns.SnsSubscribeInput = { ... }
```

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSubscribeInput.property.protocol"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsSubscribeInput.property.topicArn"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscribeInput.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscribeInput.property.endpoint"></a>

- *Type:* `string`

---

##### `returnSubscriptionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscribeInput.property.returnSubscriptionArn"></a>

- *Type:* `boolean`

---

### SnsSubscribeResponse <a name="aws-cdk-sdk.sns.SnsSubscribeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSubscribeResponse: sns.SnsSubscribeResponse = { ... }
```

##### `subscriptionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscribeResponse.property.subscriptionArn"></a>

- *Type:* `string`

---

### SnsSubscription <a name="aws-cdk-sdk.sns.SnsSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsSubscription: sns.SnsSubscription = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscription.property.endpoint"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscription.property.owner"></a>

- *Type:* `string`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscription.property.protocol"></a>

- *Type:* `string`

---

##### `subscriptionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscription.property.subscriptionArn"></a>

- *Type:* `string`

---

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsSubscription.property.topicArn"></a>

- *Type:* `string`

---

### SnsTag <a name="aws-cdk-sdk.sns.SnsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsTag: sns.SnsTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsTag.property.value"></a>

- *Type:* `string`

---

### SnsTagResourceRequest <a name="aws-cdk-sdk.sns.SnsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsTagResourceRequest: sns.SnsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsTag`](#aws-cdk-sdk.sns.SnsTag)[]

---

### SnsTagResourceResponse <a name="aws-cdk-sdk.sns.SnsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsTagResourceResponse: sns.SnsTagResourceResponse = { ... }
```

### SnsTopic <a name="aws-cdk-sdk.sns.SnsTopic"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsTopic: sns.SnsTopic = { ... }
```

##### `topicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.sns.SnsTopic.property.topicArn"></a>

- *Type:* `string`

---

### SnsUnsubscribeInput <a name="aws-cdk-sdk.sns.SnsUnsubscribeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsUnsubscribeInput: sns.SnsUnsubscribeInput = { ... }
```

##### `subscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsUnsubscribeInput.property.subscriptionArn"></a>

- *Type:* `string`

---

### SnsUntagResourceRequest <a name="aws-cdk-sdk.sns.SnsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsUntagResourceRequest: sns.SnsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SnsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SnsUntagResourceResponse <a name="aws-cdk-sdk.sns.SnsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

const snsUntagResourceResponse: sns.SnsUntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### SNSResponsesCheckIfPhoneNumberIsOptedOut <a name="aws-cdk-sdk.sns.SNSResponsesCheckIfPhoneNumberIsOptedOut"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesCheckIfPhoneNumberIsOptedOut.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesCheckIfPhoneNumberIsOptedOut(__scope: Construct, __resources: string[], __input: SnsCheckIfPhoneNumberIsOptedOutInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCheckIfPhoneNumberIsOptedOut.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCheckIfPhoneNumberIsOptedOut.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCheckIfPhoneNumberIsOptedOut.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutInput`](#aws-cdk-sdk.sns.SnsCheckIfPhoneNumberIsOptedOutInput)

---



#### Properties <a name="Properties"></a>

##### `isOptedOut`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCheckIfPhoneNumberIsOptedOut.property.isOptedOut"></a>

- *Type:* `boolean`

---


### SNSResponsesConfirmSubscription <a name="aws-cdk-sdk.sns.SNSResponsesConfirmSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesConfirmSubscription.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesConfirmSubscription(__scope: Construct, __resources: string[], __input: SnsConfirmSubscriptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesConfirmSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesConfirmSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesConfirmSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsConfirmSubscriptionInput`](#aws-cdk-sdk.sns.SnsConfirmSubscriptionInput)

---



#### Properties <a name="Properties"></a>

##### `subscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesConfirmSubscription.property.subscriptionArn"></a>

- *Type:* `string`

---


### SNSResponsesCreatePlatformApplication <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformApplication"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformApplication.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesCreatePlatformApplication(__scope: Construct, __resources: string[], __input: SnsCreatePlatformApplicationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput`](#aws-cdk-sdk.sns.SnsCreatePlatformApplicationInput)

---



#### Properties <a name="Properties"></a>

##### `platformApplicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformApplication.property.platformApplicationArn"></a>

- *Type:* `string`

---


### SNSResponsesCreatePlatformEndpoint <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformEndpoint.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesCreatePlatformEndpoint(__scope: Construct, __resources: string[], __input: SnsCreatePlatformEndpointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput`](#aws-cdk-sdk.sns.SnsCreatePlatformEndpointInput)

---



#### Properties <a name="Properties"></a>

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreatePlatformEndpoint.property.endpointArn"></a>

- *Type:* `string`

---


### SNSResponsesCreateTopic <a name="aws-cdk-sdk.sns.SNSResponsesCreateTopic"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesCreateTopic.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesCreateTopic(__scope: Construct, __resources: string[], __input: SnsCreateTopicInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreateTopic.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreateTopic.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreateTopic.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsCreateTopicInput`](#aws-cdk-sdk.sns.SnsCreateTopicInput)

---



#### Properties <a name="Properties"></a>

##### `topicArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesCreateTopic.property.topicArn"></a>

- *Type:* `string`

---


### SNSResponsesFetchEndpointAttributes <a name="aws-cdk-sdk.sns.SNSResponsesFetchEndpointAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesFetchEndpointAttributes.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesFetchEndpointAttributes(__scope: Construct, __resources: string[], __input: SnsGetEndpointAttributesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchEndpointAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchEndpointAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchEndpointAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetEndpointAttributesInput`](#aws-cdk-sdk.sns.SnsGetEndpointAttributesInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchEndpointAttributes.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---


### SNSResponsesFetchPlatformApplicationAttributes <a name="aws-cdk-sdk.sns.SNSResponsesFetchPlatformApplicationAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesFetchPlatformApplicationAttributes.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesFetchPlatformApplicationAttributes(__scope: Construct, __resources: string[], __input: SnsGetPlatformApplicationAttributesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchPlatformApplicationAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchPlatformApplicationAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchPlatformApplicationAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesInput`](#aws-cdk-sdk.sns.SnsGetPlatformApplicationAttributesInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchPlatformApplicationAttributes.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---


### SNSResponsesFetchSmsAttributes <a name="aws-cdk-sdk.sns.SNSResponsesFetchSmsAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesFetchSmsAttributes.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesFetchSmsAttributes(__scope: Construct, __resources: string[], __input: SnsGetSmsAttributesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSmsAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSmsAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSmsAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetSmsAttributesInput`](#aws-cdk-sdk.sns.SnsGetSmsAttributesInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSmsAttributes.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---


### SNSResponsesFetchSubscriptionAttributes <a name="aws-cdk-sdk.sns.SNSResponsesFetchSubscriptionAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesFetchSubscriptionAttributes.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesFetchSubscriptionAttributes(__scope: Construct, __resources: string[], __input: SnsGetSubscriptionAttributesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSubscriptionAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSubscriptionAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSubscriptionAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetSubscriptionAttributesInput`](#aws-cdk-sdk.sns.SnsGetSubscriptionAttributesInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchSubscriptionAttributes.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---


### SNSResponsesFetchTopicAttributes <a name="aws-cdk-sdk.sns.SNSResponsesFetchTopicAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesFetchTopicAttributes.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesFetchTopicAttributes(__scope: Construct, __resources: string[], __input: SnsGetTopicAttributesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchTopicAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchTopicAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchTopicAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsGetTopicAttributesInput`](#aws-cdk-sdk.sns.SnsGetTopicAttributesInput)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesFetchTopicAttributes.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---


### SNSResponsesListEndpointsByPlatformApplication <a name="aws-cdk-sdk.sns.SNSResponsesListEndpointsByPlatformApplication"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesListEndpointsByPlatformApplication.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesListEndpointsByPlatformApplication(__scope: Construct, __resources: string[], __input: SnsListEndpointsByPlatformApplicationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListEndpointsByPlatformApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListEndpointsByPlatformApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListEndpointsByPlatformApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationInput`](#aws-cdk-sdk.sns.SnsListEndpointsByPlatformApplicationInput)

---



#### Properties <a name="Properties"></a>

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListEndpointsByPlatformApplication.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsEndpoint`](#aws-cdk-sdk.sns.SnsEndpoint)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListEndpointsByPlatformApplication.property.nextToken"></a>

- *Type:* `string`

---


### SNSResponsesListPhoneNumbersOptedOut <a name="aws-cdk-sdk.sns.SNSResponsesListPhoneNumbersOptedOut"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesListPhoneNumbersOptedOut.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesListPhoneNumbersOptedOut(__scope: Construct, __resources: string[], __input: SnsListPhoneNumbersOptedOutInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPhoneNumbersOptedOut.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPhoneNumbersOptedOut.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPhoneNumbersOptedOut.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutInput`](#aws-cdk-sdk.sns.SnsListPhoneNumbersOptedOutInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPhoneNumbersOptedOut.property.nextToken"></a>

- *Type:* `string`

---

##### `phoneNumbers`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPhoneNumbersOptedOut.property.phoneNumbers"></a>

- *Type:* `string`[]

---


### SNSResponsesListPlatformApplications <a name="aws-cdk-sdk.sns.SNSResponsesListPlatformApplications"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesListPlatformApplications.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesListPlatformApplications(__scope: Construct, __resources: string[], __input: SnsListPlatformApplicationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPlatformApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPlatformApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPlatformApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListPlatformApplicationsInput`](#aws-cdk-sdk.sns.SnsListPlatformApplicationsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPlatformApplications.property.nextToken"></a>

- *Type:* `string`

---

##### `platformApplications`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListPlatformApplications.property.platformApplications"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsPlatformApplication`](#aws-cdk-sdk.sns.SnsPlatformApplication)[]

---


### SNSResponsesListSubscriptions <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptions"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptions.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesListSubscriptions(__scope: Construct, __resources: string[], __input: SnsListSubscriptionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListSubscriptionsInput`](#aws-cdk-sdk.sns.SnsListSubscriptionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptions.property.nextToken"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptions.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSubscription`](#aws-cdk-sdk.sns.SnsSubscription)[]

---


### SNSResponsesListSubscriptionsByTopic <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptionsByTopic"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptionsByTopic.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesListSubscriptionsByTopic(__scope: Construct, __resources: string[], __input: SnsListSubscriptionsByTopicInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptionsByTopic.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptionsByTopic.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptionsByTopic.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListSubscriptionsByTopicInput`](#aws-cdk-sdk.sns.SnsListSubscriptionsByTopicInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptionsByTopic.property.nextToken"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListSubscriptionsByTopic.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSubscription`](#aws-cdk-sdk.sns.SnsSubscription)[]

---


### SNSResponsesListTagsForResource <a name="aws-cdk-sdk.sns.SNSResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesListTagsForResource.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SnsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListTagsForResourceRequest`](#aws-cdk-sdk.sns.SnsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsTag`](#aws-cdk-sdk.sns.SnsTag)[]

---


### SNSResponsesListTopics <a name="aws-cdk-sdk.sns.SNSResponsesListTopics"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesListTopics.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesListTopics(__scope: Construct, __resources: string[], __input: SnsListTopicsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTopics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTopics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTopics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsListTopicsInput`](#aws-cdk-sdk.sns.SnsListTopicsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTopics.property.nextToken"></a>

- *Type:* `string`

---

##### `topics`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesListTopics.property.topics"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsTopic`](#aws-cdk-sdk.sns.SnsTopic)[]

---


### SNSResponsesPublish <a name="aws-cdk-sdk.sns.SNSResponsesPublish"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesPublish.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesPublish(__scope: Construct, __resources: string[], __input: SnsPublishInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesPublish.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesPublish.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesPublish.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsPublishInput`](#aws-cdk-sdk.sns.SnsPublishInput)

---



#### Properties <a name="Properties"></a>

##### `messageId`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesPublish.property.messageId"></a>

- *Type:* `string`

---

##### `sequenceNumber`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesPublish.property.sequenceNumber"></a>

- *Type:* `string`

---


### SNSResponsesSubscribe <a name="aws-cdk-sdk.sns.SNSResponsesSubscribe"></a>

#### Initializer <a name="aws-cdk-sdk.sns.SNSResponsesSubscribe.Initializer"></a>

```typescript
import { sns } from 'aws-cdk-sdk'

new sns.SNSResponsesSubscribe(__scope: Construct, __resources: string[], __input: SnsSubscribeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesSubscribe.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesSubscribe.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesSubscribe.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.sns.SnsSubscribeInput`](#aws-cdk-sdk.sns.SnsSubscribeInput)

---



#### Properties <a name="Properties"></a>

##### `subscriptionArn`<sup>Required</sup> <a name="aws-cdk-sdk.sns.SNSResponsesSubscribe.property.subscriptionArn"></a>

- *Type:* `string`

---



