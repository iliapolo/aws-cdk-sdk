# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Cloud9Client <a name="aws-cdk-sdk.cloud9.Cloud9Client"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9Client.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createEnvironmentEc2` <a name="aws-cdk-sdk.cloud9.Cloud9Client.createEnvironmentEc2"></a>

```typescript
public createEnvironmentEc2(input: Cloud9CreateEnvironmentEc2Request)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request`](#aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request)

---

##### `createEnvironmentMembership` <a name="aws-cdk-sdk.cloud9.Cloud9Client.createEnvironmentMembership"></a>

```typescript
public createEnvironmentMembership(input: Cloud9CreateEnvironmentMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest`](#aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest)

---

##### `deleteEnvironment` <a name="aws-cdk-sdk.cloud9.Cloud9Client.deleteEnvironment"></a>

```typescript
public deleteEnvironment(input: Cloud9DeleteEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentRequest`](#aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentRequest)

---

##### `deleteEnvironmentMembership` <a name="aws-cdk-sdk.cloud9.Cloud9Client.deleteEnvironmentMembership"></a>

```typescript
public deleteEnvironmentMembership(input: Cloud9DeleteEnvironmentMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentMembershipRequest`](#aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentMembershipRequest)

---

##### `describeEnvironmentMemberships` <a name="aws-cdk-sdk.cloud9.Cloud9Client.describeEnvironmentMemberships"></a>

```typescript
public describeEnvironmentMemberships(input: Cloud9DescribeEnvironmentMembershipsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest`](#aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest)

---

##### `describeEnvironments` <a name="aws-cdk-sdk.cloud9.Cloud9Client.describeEnvironments"></a>

```typescript
public describeEnvironments(input: Cloud9DescribeEnvironmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsRequest`](#aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsRequest)

---

##### `describeEnvironmentStatus` <a name="aws-cdk-sdk.cloud9.Cloud9Client.describeEnvironmentStatus"></a>

```typescript
public describeEnvironmentStatus(input: Cloud9DescribeEnvironmentStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusRequest`](#aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusRequest)

---

##### `listEnvironments` <a name="aws-cdk-sdk.cloud9.Cloud9Client.listEnvironments"></a>

```typescript
public listEnvironments(input: Cloud9ListEnvironmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsRequest`](#aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.cloud9.Cloud9Client.listTagsForResource"></a>

```typescript
public listTagsForResource(input: Cloud9ListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceRequest`](#aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.cloud9.Cloud9Client.tagResource"></a>

```typescript
public tagResource(input: Cloud9TagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9TagResourceRequest`](#aws-cdk-sdk.cloud9.Cloud9TagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.cloud9.Cloud9Client.untagResource"></a>

```typescript
public untagResource(input: Cloud9UntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9UntagResourceRequest`](#aws-cdk-sdk.cloud9.Cloud9UntagResourceRequest)

---

##### `updateEnvironment` <a name="aws-cdk-sdk.cloud9.Cloud9Client.updateEnvironment"></a>

```typescript
public updateEnvironment(input: Cloud9UpdateEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentRequest`](#aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentRequest)

---

##### `updateEnvironmentMembership` <a name="aws-cdk-sdk.cloud9.Cloud9Client.updateEnvironmentMembership"></a>

```typescript
public updateEnvironmentMembership(input: Cloud9UpdateEnvironmentMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest`](#aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest)

---




## Structs <a name="Structs"></a>

### Cloud9CreateEnvironmentEc2Request <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9CreateEnvironmentEc2Request: cloud9.Cloud9CreateEnvironmentEc2Request = { ... }
```

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.instanceType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.name"></a>

- *Type:* `string`

---

##### `automaticStopTimeMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.automaticStopTimeMinutes"></a>

- *Type:* `number`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.connectionType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.description"></a>

- *Type:* `string`

---

##### `ownerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.ownerArn"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.subnetId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9Tag`](#aws-cdk-sdk.cloud9.Cloud9Tag)[]

---

### Cloud9CreateEnvironmentEc2Result <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Result"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9CreateEnvironmentEc2Result: cloud9.Cloud9CreateEnvironmentEc2Result = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Result.property.environmentId"></a>

- *Type:* `string`

---

### Cloud9CreateEnvironmentMembershipRequest <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9CreateEnvironmentMembershipRequest: cloud9.Cloud9CreateEnvironmentMembershipRequest = { ... }
```

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest.property.permissions"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest.property.userArn"></a>

- *Type:* `string`

---

### Cloud9CreateEnvironmentMembershipResult <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9CreateEnvironmentMembershipResult: cloud9.Cloud9CreateEnvironmentMembershipResult = { ... }
```

##### `membership`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipResult.property.membership"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9EnvironmentMember`](#aws-cdk-sdk.cloud9.Cloud9EnvironmentMember)

---

### Cloud9DeleteEnvironmentMembershipRequest <a name="aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DeleteEnvironmentMembershipRequest: cloud9.Cloud9DeleteEnvironmentMembershipRequest = { ... }
```

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentMembershipRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentMembershipRequest.property.userArn"></a>

- *Type:* `string`

---

### Cloud9DeleteEnvironmentMembershipResult <a name="aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentMembershipResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DeleteEnvironmentMembershipResult: cloud9.Cloud9DeleteEnvironmentMembershipResult = { ... }
```

### Cloud9DeleteEnvironmentRequest <a name="aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DeleteEnvironmentRequest: cloud9.Cloud9DeleteEnvironmentRequest = { ... }
```

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentRequest.property.environmentId"></a>

- *Type:* `string`

---

### Cloud9DeleteEnvironmentResult <a name="aws-cdk-sdk.cloud9.Cloud9DeleteEnvironmentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DeleteEnvironmentResult: cloud9.Cloud9DeleteEnvironmentResult = { ... }
```

### Cloud9DescribeEnvironmentMembershipsRequest <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DescribeEnvironmentMembershipsRequest: cloud9.Cloud9DescribeEnvironmentMembershipsRequest = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest.property.permissions"></a>

- *Type:* `string`[]

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest.property.userArn"></a>

- *Type:* `string`

---

### Cloud9DescribeEnvironmentMembershipsResult <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DescribeEnvironmentMembershipsResult: cloud9.Cloud9DescribeEnvironmentMembershipsResult = { ... }
```

##### `memberships`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsResult.property.memberships"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9EnvironmentMember`](#aws-cdk-sdk.cloud9.Cloud9EnvironmentMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsResult.property.nextToken"></a>

- *Type:* `string`

---

### Cloud9DescribeEnvironmentsRequest <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DescribeEnvironmentsRequest: cloud9.Cloud9DescribeEnvironmentsRequest = { ... }
```

##### `environmentIds`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsRequest.property.environmentIds"></a>

- *Type:* `string`[]

---

### Cloud9DescribeEnvironmentsResult <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DescribeEnvironmentsResult: cloud9.Cloud9DescribeEnvironmentsResult = { ... }
```

##### `environments`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsResult.property.environments"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9Environment`](#aws-cdk-sdk.cloud9.Cloud9Environment)[]

---

### Cloud9DescribeEnvironmentStatusRequest <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DescribeEnvironmentStatusRequest: cloud9.Cloud9DescribeEnvironmentStatusRequest = { ... }
```

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusRequest.property.environmentId"></a>

- *Type:* `string`

---

### Cloud9DescribeEnvironmentStatusResult <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9DescribeEnvironmentStatusResult: cloud9.Cloud9DescribeEnvironmentStatusResult = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusResult.property.message"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusResult.property.status"></a>

- *Type:* `string`

---

### Cloud9Environment <a name="aws-cdk-sdk.cloud9.Cloud9Environment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9Environment: cloud9.Cloud9Environment = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.arn"></a>

- *Type:* `string`

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.connectionType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.id"></a>

- *Type:* `string`

---

##### `lifecycle`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.lifecycle"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9EnvironmentLifecycle`](#aws-cdk-sdk.cloud9.Cloud9EnvironmentLifecycle)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.name"></a>

- *Type:* `string`

---

##### `ownerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.ownerArn"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Environment.property.type"></a>

- *Type:* `string`

---

### Cloud9EnvironmentLifecycle <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentLifecycle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9EnvironmentLifecycle: cloud9.Cloud9EnvironmentLifecycle = { ... }
```

##### `failureResource`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentLifecycle.property.failureResource"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentLifecycle.property.reason"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentLifecycle.property.status"></a>

- *Type:* `string`

---

### Cloud9EnvironmentMember <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9EnvironmentMember: cloud9.Cloud9EnvironmentMember = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentMember.property.environmentId"></a>

- *Type:* `string`

---

##### `lastAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentMember.property.lastAccess"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentMember.property.permissions"></a>

- *Type:* `string`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentMember.property.userArn"></a>

- *Type:* `string`

---

##### `userId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9EnvironmentMember.property.userId"></a>

- *Type:* `string`

---

### Cloud9ListEnvironmentsRequest <a name="aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9ListEnvironmentsRequest: cloud9.Cloud9ListEnvironmentsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### Cloud9ListEnvironmentsResult <a name="aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9ListEnvironmentsResult: cloud9.Cloud9ListEnvironmentsResult = { ... }
```

##### `environmentIds`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsResult.property.environmentIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsResult.property.nextToken"></a>

- *Type:* `string`

---

### Cloud9ListTagsForResourceRequest <a name="aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9ListTagsForResourceRequest: cloud9.Cloud9ListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### Cloud9ListTagsForResourceResponse <a name="aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9ListTagsForResourceResponse: cloud9.Cloud9ListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9Tag`](#aws-cdk-sdk.cloud9.Cloud9Tag)[]

---

### Cloud9Tag <a name="aws-cdk-sdk.cloud9.Cloud9Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9Tag: cloud9.Cloud9Tag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9Tag.property.value"></a>

- *Type:* `string`

---

### Cloud9TagResourceRequest <a name="aws-cdk-sdk.cloud9.Cloud9TagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9TagResourceRequest: cloud9.Cloud9TagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9TagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9TagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9Tag`](#aws-cdk-sdk.cloud9.Cloud9Tag)[]

---

### Cloud9TagResourceResponse <a name="aws-cdk-sdk.cloud9.Cloud9TagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9TagResourceResponse: cloud9.Cloud9TagResourceResponse = { ... }
```

### Cloud9UntagResourceRequest <a name="aws-cdk-sdk.cloud9.Cloud9UntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9UntagResourceRequest: cloud9.Cloud9UntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### Cloud9UntagResourceResponse <a name="aws-cdk-sdk.cloud9.Cloud9UntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9UntagResourceResponse: cloud9.Cloud9UntagResourceResponse = { ... }
```

### Cloud9UpdateEnvironmentMembershipRequest <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9UpdateEnvironmentMembershipRequest: cloud9.Cloud9UpdateEnvironmentMembershipRequest = { ... }
```

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest.property.permissions"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest.property.userArn"></a>

- *Type:* `string`

---

### Cloud9UpdateEnvironmentMembershipResult <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9UpdateEnvironmentMembershipResult: cloud9.Cloud9UpdateEnvironmentMembershipResult = { ... }
```

##### `membership`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipResult.property.membership"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9EnvironmentMember`](#aws-cdk-sdk.cloud9.Cloud9EnvironmentMember)

---

### Cloud9UpdateEnvironmentRequest <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9UpdateEnvironmentRequest: cloud9.Cloud9UpdateEnvironmentRequest = { ... }
```

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentRequest.property.name"></a>

- *Type:* `string`

---

### Cloud9UpdateEnvironmentResult <a name="aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

const cloud9UpdateEnvironmentResult: cloud9.Cloud9UpdateEnvironmentResult = { ... }
```

## Classes <a name="Classes"></a>

### Cloud9ResponsesCreateEnvironmentEc2 <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentEc2"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentEc2.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesCreateEnvironmentEc2(__scope: Construct, __resources: string[], __input: Cloud9CreateEnvironmentEc2Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentEc2.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentEc2.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentEc2.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request`](#aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentEc2Request)

---



#### Properties <a name="Properties"></a>

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentEc2.property.environmentId"></a>

- *Type:* `string`

---


### Cloud9ResponsesCreateEnvironmentMembership <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembership"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembership.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesCreateEnvironmentMembership(__scope: Construct, __resources: string[], __input: Cloud9CreateEnvironmentMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest`](#aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `membership`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembership.property.membership"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership`](#aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership)

---


### Cloud9ResponsesCreateEnvironmentMembershipMembership <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership(__scope: Construct, __resources: string[], __input: Cloud9CreateEnvironmentMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest`](#aws-cdk-sdk.cloud9.Cloud9CreateEnvironmentMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.property.environmentId"></a>

- *Type:* `string`

---

##### `lastAccess`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.property.lastAccess"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.property.permissions"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.property.userArn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesCreateEnvironmentMembershipMembership.property.userId"></a>

- *Type:* `string`

---


### Cloud9ResponsesDescribeEnvironmentMemberships <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentMemberships"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentMemberships.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesDescribeEnvironmentMemberships(__scope: Construct, __resources: string[], __input: Cloud9DescribeEnvironmentMembershipsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentMemberships.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentMemberships.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentMemberships.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest`](#aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentMembershipsRequest)

---



#### Properties <a name="Properties"></a>

##### `memberships`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentMemberships.property.memberships"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9EnvironmentMember`](#aws-cdk-sdk.cloud9.Cloud9EnvironmentMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentMemberships.property.nextToken"></a>

- *Type:* `string`

---


### Cloud9ResponsesDescribeEnvironments <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironments.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesDescribeEnvironments(__scope: Construct, __resources: string[], __input: Cloud9DescribeEnvironmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsRequest`](#aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `environments`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironments.property.environments"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9Environment`](#aws-cdk-sdk.cloud9.Cloud9Environment)[]

---


### Cloud9ResponsesDescribeEnvironmentStatus <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentStatus.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesDescribeEnvironmentStatus(__scope: Construct, __resources: string[], __input: Cloud9DescribeEnvironmentStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusRequest`](#aws-cdk-sdk.cloud9.Cloud9DescribeEnvironmentStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentStatus.property.message"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesDescribeEnvironmentStatus.property.status"></a>

- *Type:* `string`

---


### Cloud9ResponsesListEnvironments <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListEnvironments.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesListEnvironments(__scope: Construct, __resources: string[], __input: Cloud9ListEnvironmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsRequest`](#aws-cdk-sdk.cloud9.Cloud9ListEnvironmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `environmentIds`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListEnvironments.property.environmentIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListEnvironments.property.nextToken"></a>

- *Type:* `string`

---


### Cloud9ResponsesListTagsForResource <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListTagsForResource.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: Cloud9ListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceRequest`](#aws-cdk-sdk.cloud9.Cloud9ListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9Tag`](#aws-cdk-sdk.cloud9.Cloud9Tag)[]

---


### Cloud9ResponsesUpdateEnvironmentMembership <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembership"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembership.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesUpdateEnvironmentMembership(__scope: Construct, __resources: string[], __input: Cloud9UpdateEnvironmentMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest`](#aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `membership`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembership.property.membership"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership`](#aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership)

---


### Cloud9ResponsesUpdateEnvironmentMembershipMembership <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership"></a>

#### Initializer <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.Initializer"></a>

```typescript
import { cloud9 } from 'aws-cdk-sdk'

new cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership(__scope: Construct, __resources: string[], __input: Cloud9UpdateEnvironmentMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest`](#aws-cdk-sdk.cloud9.Cloud9UpdateEnvironmentMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.property.environmentId"></a>

- *Type:* `string`

---

##### `lastAccess`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.property.lastAccess"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.property.permissions"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.property.userArn"></a>

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="aws-cdk-sdk.cloud9.Cloud9ResponsesUpdateEnvironmentMembershipMembership.property.userId"></a>

- *Type:* `string`

---



