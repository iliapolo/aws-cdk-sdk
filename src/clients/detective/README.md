# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DetectiveClient <a name="aws-cdk-sdk.detective.DetectiveClient"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveClient.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptInvitation` <a name="aws-cdk-sdk.detective.DetectiveClient.acceptInvitation"></a>

```typescript
public acceptInvitation(input: DetectiveAcceptInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveAcceptInvitationRequest`](#aws-cdk-sdk.detective.DetectiveAcceptInvitationRequest)

---

##### `createGraph` <a name="aws-cdk-sdk.detective.DetectiveClient.createGraph"></a>

```typescript
public createGraph()
```

##### `createMembers` <a name="aws-cdk-sdk.detective.DetectiveClient.createMembers"></a>

```typescript
public createMembers(input: DetectiveCreateMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveCreateMembersRequest`](#aws-cdk-sdk.detective.DetectiveCreateMembersRequest)

---

##### `deleteGraph` <a name="aws-cdk-sdk.detective.DetectiveClient.deleteGraph"></a>

```typescript
public deleteGraph(input: DetectiveDeleteGraphRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveDeleteGraphRequest`](#aws-cdk-sdk.detective.DetectiveDeleteGraphRequest)

---

##### `deleteMembers` <a name="aws-cdk-sdk.detective.DetectiveClient.deleteMembers"></a>

```typescript
public deleteMembers(input: DetectiveDeleteMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveDeleteMembersRequest`](#aws-cdk-sdk.detective.DetectiveDeleteMembersRequest)

---

##### `disassociateMembership` <a name="aws-cdk-sdk.detective.DetectiveClient.disassociateMembership"></a>

```typescript
public disassociateMembership(input: DetectiveDisassociateMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveDisassociateMembershipRequest`](#aws-cdk-sdk.detective.DetectiveDisassociateMembershipRequest)

---

##### `fetchMembers` <a name="aws-cdk-sdk.detective.DetectiveClient.fetchMembers"></a>

```typescript
public fetchMembers(input: DetectiveGetMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveGetMembersRequest`](#aws-cdk-sdk.detective.DetectiveGetMembersRequest)

---

##### `listGraphs` <a name="aws-cdk-sdk.detective.DetectiveClient.listGraphs"></a>

```typescript
public listGraphs(input: DetectiveListGraphsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveListGraphsRequest`](#aws-cdk-sdk.detective.DetectiveListGraphsRequest)

---

##### `listInvitations` <a name="aws-cdk-sdk.detective.DetectiveClient.listInvitations"></a>

```typescript
public listInvitations(input: DetectiveListInvitationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveListInvitationsRequest`](#aws-cdk-sdk.detective.DetectiveListInvitationsRequest)

---

##### `listMembers` <a name="aws-cdk-sdk.detective.DetectiveClient.listMembers"></a>

```typescript
public listMembers(input: DetectiveListMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveListMembersRequest`](#aws-cdk-sdk.detective.DetectiveListMembersRequest)

---

##### `rejectInvitation` <a name="aws-cdk-sdk.detective.DetectiveClient.rejectInvitation"></a>

```typescript
public rejectInvitation(input: DetectiveRejectInvitationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveRejectInvitationRequest`](#aws-cdk-sdk.detective.DetectiveRejectInvitationRequest)

---

##### `startMonitoringMember` <a name="aws-cdk-sdk.detective.DetectiveClient.startMonitoringMember"></a>

```typescript
public startMonitoringMember(input: DetectiveStartMonitoringMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveStartMonitoringMemberRequest`](#aws-cdk-sdk.detective.DetectiveStartMonitoringMemberRequest)

---




## Structs <a name="Structs"></a>

### DetectiveAcceptInvitationRequest <a name="aws-cdk-sdk.detective.DetectiveAcceptInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveAcceptInvitationRequest: detective.DetectiveAcceptInvitationRequest = { ... }
```

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveAcceptInvitationRequest.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveAccount <a name="aws-cdk-sdk.detective.DetectiveAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveAccount: detective.DetectiveAccount = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveAccount.property.accountId"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveAccount.property.emailAddress"></a>

- *Type:* `string`

---

### DetectiveCreateGraphResponse <a name="aws-cdk-sdk.detective.DetectiveCreateGraphResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveCreateGraphResponse: detective.DetectiveCreateGraphResponse = { ... }
```

##### `graphArn`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveCreateGraphResponse.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveCreateMembersRequest <a name="aws-cdk-sdk.detective.DetectiveCreateMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveCreateMembersRequest: detective.DetectiveCreateMembersRequest = { ... }
```

##### `accounts`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveCreateMembersRequest.property.accounts"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveAccount`](#aws-cdk-sdk.detective.DetectiveAccount)[]

---

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveCreateMembersRequest.property.graphArn"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveCreateMembersRequest.property.message"></a>

- *Type:* `string`

---

### DetectiveCreateMembersResponse <a name="aws-cdk-sdk.detective.DetectiveCreateMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveCreateMembersResponse: detective.DetectiveCreateMembersResponse = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveCreateMembersResponse.property.members"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveCreateMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveUnprocessedAccount`](#aws-cdk-sdk.detective.DetectiveUnprocessedAccount)[]

---

### DetectiveDeleteGraphRequest <a name="aws-cdk-sdk.detective.DetectiveDeleteGraphRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveDeleteGraphRequest: detective.DetectiveDeleteGraphRequest = { ... }
```

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveDeleteGraphRequest.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveDeleteMembersRequest <a name="aws-cdk-sdk.detective.DetectiveDeleteMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveDeleteMembersRequest: detective.DetectiveDeleteMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveDeleteMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveDeleteMembersRequest.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveDeleteMembersResponse <a name="aws-cdk-sdk.detective.DetectiveDeleteMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveDeleteMembersResponse: detective.DetectiveDeleteMembersResponse = { ... }
```

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveDeleteMembersResponse.property.accountIds"></a>

- *Type:* `string`[]

---

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveDeleteMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveUnprocessedAccount`](#aws-cdk-sdk.detective.DetectiveUnprocessedAccount)[]

---

### DetectiveDisassociateMembershipRequest <a name="aws-cdk-sdk.detective.DetectiveDisassociateMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveDisassociateMembershipRequest: detective.DetectiveDisassociateMembershipRequest = { ... }
```

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveDisassociateMembershipRequest.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveGetMembersRequest <a name="aws-cdk-sdk.detective.DetectiveGetMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveGetMembersRequest: detective.DetectiveGetMembersRequest = { ... }
```

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveGetMembersRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveGetMembersRequest.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveGetMembersResponse <a name="aws-cdk-sdk.detective.DetectiveGetMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveGetMembersResponse: detective.DetectiveGetMembersResponse = { ... }
```

##### `memberDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveGetMembersResponse.property.memberDetails"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `unprocessedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveGetMembersResponse.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveUnprocessedAccount`](#aws-cdk-sdk.detective.DetectiveUnprocessedAccount)[]

---

### DetectiveGraph <a name="aws-cdk-sdk.detective.DetectiveGraph"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveGraph: detective.DetectiveGraph = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveGraph.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveGraph.property.createdTime"></a>

- *Type:* `string`

---

### DetectiveListGraphsRequest <a name="aws-cdk-sdk.detective.DetectiveListGraphsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveListGraphsRequest: detective.DetectiveListGraphsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListGraphsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListGraphsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DetectiveListGraphsResponse <a name="aws-cdk-sdk.detective.DetectiveListGraphsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveListGraphsResponse: detective.DetectiveListGraphsResponse = { ... }
```

##### `graphList`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListGraphsResponse.property.graphList"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveGraph`](#aws-cdk-sdk.detective.DetectiveGraph)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListGraphsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DetectiveListInvitationsRequest <a name="aws-cdk-sdk.detective.DetectiveListInvitationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveListInvitationsRequest: detective.DetectiveListInvitationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListInvitationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListInvitationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DetectiveListInvitationsResponse <a name="aws-cdk-sdk.detective.DetectiveListInvitationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveListInvitationsResponse: detective.DetectiveListInvitationsResponse = { ... }
```

##### `invitations`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListInvitationsResponse.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListInvitationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DetectiveListMembersRequest <a name="aws-cdk-sdk.detective.DetectiveListMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveListMembersRequest: detective.DetectiveListMembersRequest = { ... }
```

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveListMembersRequest.property.graphArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListMembersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListMembersRequest.property.nextToken"></a>

- *Type:* `string`

---

### DetectiveListMembersResponse <a name="aws-cdk-sdk.detective.DetectiveListMembersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveListMembersResponse: detective.DetectiveListMembersResponse = { ... }
```

##### `memberDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListMembersResponse.property.memberDetails"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveListMembersResponse.property.nextToken"></a>

- *Type:* `string`

---

### DetectiveMemberDetail <a name="aws-cdk-sdk.detective.DetectiveMemberDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveMemberDetail: detective.DetectiveMemberDetail = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.accountId"></a>

- *Type:* `string`

---

##### `disabledReason`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.disabledReason"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.emailAddress"></a>

- *Type:* `string`

---

##### `graphArn`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.graphArn"></a>

- *Type:* `string`

---

##### `invitedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.invitedTime"></a>

- *Type:* `string`

---

##### `masterId`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.masterId"></a>

- *Type:* `string`

---

##### `percentOfGraphUtilization`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.percentOfGraphUtilization"></a>

- *Type:* `number`

---

##### `percentOfGraphUtilizationUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.percentOfGraphUtilizationUpdatedTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveMemberDetail.property.updatedTime"></a>

- *Type:* `string`

---

### DetectiveRejectInvitationRequest <a name="aws-cdk-sdk.detective.DetectiveRejectInvitationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveRejectInvitationRequest: detective.DetectiveRejectInvitationRequest = { ... }
```

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveRejectInvitationRequest.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveStartMonitoringMemberRequest <a name="aws-cdk-sdk.detective.DetectiveStartMonitoringMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveStartMonitoringMemberRequest: detective.DetectiveStartMonitoringMemberRequest = { ... }
```

##### `accountId`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveStartMonitoringMemberRequest.property.accountId"></a>

- *Type:* `string`

---

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveStartMonitoringMemberRequest.property.graphArn"></a>

- *Type:* `string`

---

### DetectiveUnprocessedAccount <a name="aws-cdk-sdk.detective.DetectiveUnprocessedAccount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

const detectiveUnprocessedAccount: detective.DetectiveUnprocessedAccount = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveUnprocessedAccount.property.accountId"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.detective.DetectiveUnprocessedAccount.property.reason"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### DetectiveResponsesCreateGraph <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateGraph"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateGraph.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveResponsesCreateGraph(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateGraph.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `graphArn`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateGraph.property.graphArn"></a>

- *Type:* `string`

---


### DetectiveResponsesCreateMembers <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateMembers"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateMembers.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveResponsesCreateMembers(__scope: Construct, __resources: string[], __input: DetectiveCreateMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveCreateMembersRequest`](#aws-cdk-sdk.detective.DetectiveCreateMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesCreateMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveUnprocessedAccount`](#aws-cdk-sdk.detective.DetectiveUnprocessedAccount)[]

---


### DetectiveResponsesDeleteMembers <a name="aws-cdk-sdk.detective.DetectiveResponsesDeleteMembers"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveResponsesDeleteMembers.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveResponsesDeleteMembers(__scope: Construct, __resources: string[], __input: DetectiveDeleteMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesDeleteMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesDeleteMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesDeleteMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveDeleteMembersRequest`](#aws-cdk-sdk.detective.DetectiveDeleteMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesDeleteMembers.property.accountIds"></a>

- *Type:* `string`[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesDeleteMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveUnprocessedAccount`](#aws-cdk-sdk.detective.DetectiveUnprocessedAccount)[]

---


### DetectiveResponsesFetchMembers <a name="aws-cdk-sdk.detective.DetectiveResponsesFetchMembers"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveResponsesFetchMembers.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveResponsesFetchMembers(__scope: Construct, __resources: string[], __input: DetectiveGetMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesFetchMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesFetchMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesFetchMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveGetMembersRequest`](#aws-cdk-sdk.detective.DetectiveGetMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `memberDetails`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesFetchMembers.property.memberDetails"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `unprocessedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesFetchMembers.property.unprocessedAccounts"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveUnprocessedAccount`](#aws-cdk-sdk.detective.DetectiveUnprocessedAccount)[]

---


### DetectiveResponsesListGraphs <a name="aws-cdk-sdk.detective.DetectiveResponsesListGraphs"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveResponsesListGraphs.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveResponsesListGraphs(__scope: Construct, __resources: string[], __input: DetectiveListGraphsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListGraphs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListGraphs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListGraphs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveListGraphsRequest`](#aws-cdk-sdk.detective.DetectiveListGraphsRequest)

---



#### Properties <a name="Properties"></a>

##### `graphList`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListGraphs.property.graphList"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveGraph`](#aws-cdk-sdk.detective.DetectiveGraph)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListGraphs.property.nextToken"></a>

- *Type:* `string`

---


### DetectiveResponsesListInvitations <a name="aws-cdk-sdk.detective.DetectiveResponsesListInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveResponsesListInvitations.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveResponsesListInvitations(__scope: Construct, __resources: string[], __input: DetectiveListInvitationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveListInvitationsRequest`](#aws-cdk-sdk.detective.DetectiveListInvitationsRequest)

---



#### Properties <a name="Properties"></a>

##### `invitations`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListInvitations.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListInvitations.property.nextToken"></a>

- *Type:* `string`

---


### DetectiveResponsesListMembers <a name="aws-cdk-sdk.detective.DetectiveResponsesListMembers"></a>

#### Initializer <a name="aws-cdk-sdk.detective.DetectiveResponsesListMembers.Initializer"></a>

```typescript
import { detective } from 'aws-cdk-sdk'

new detective.DetectiveResponsesListMembers(__scope: Construct, __resources: string[], __input: DetectiveListMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveListMembersRequest`](#aws-cdk-sdk.detective.DetectiveListMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `memberDetails`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListMembers.property.memberDetails"></a>

- *Type:* [`aws-cdk-sdk.detective.DetectiveMemberDetail`](#aws-cdk-sdk.detective.DetectiveMemberDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.detective.DetectiveResponsesListMembers.property.nextToken"></a>

- *Type:* `string`

---



