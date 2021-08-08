# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ManagedBlockchainClient <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createMember` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.createMember"></a>

```typescript
public createMember(input: ManagedBlockchainCreateMemberInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput)

---

##### `createNetwork` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.createNetwork"></a>

```typescript
public createNetwork(input: ManagedBlockchainCreateNetworkInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput)

---

##### `createNode` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.createNode"></a>

```typescript
public createNode(input: ManagedBlockchainCreateNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput)

---

##### `createProposal` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.createProposal"></a>

```typescript
public createProposal(input: ManagedBlockchainCreateProposalInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput)

---

##### `deleteMember` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.deleteMember"></a>

```typescript
public deleteMember(input: ManagedBlockchainDeleteMemberInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteMemberInput)

---

##### `deleteNode` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.deleteNode"></a>

```typescript
public deleteNode(input: ManagedBlockchainDeleteNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteNodeInput)

---

##### `fetchMember` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.fetchMember"></a>

```typescript
public fetchMember(input: ManagedBlockchainGetMemberInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---

##### `fetchNetwork` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.fetchNetwork"></a>

```typescript
public fetchNetwork(input: ManagedBlockchainGetNetworkInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput)

---

##### `fetchNode` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.fetchNode"></a>

```typescript
public fetchNode(input: ManagedBlockchainGetNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---

##### `fetchProposal` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.fetchProposal"></a>

```typescript
public fetchProposal(input: ManagedBlockchainGetProposalInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput)

---

##### `listInvitations` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.listInvitations"></a>

```typescript
public listInvitations(input: ManagedBlockchainListInvitationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsInput)

---

##### `listMembers` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.listMembers"></a>

```typescript
public listMembers(input: ManagedBlockchainListMembersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput)

---

##### `listNetworks` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.listNetworks"></a>

```typescript
public listNetworks(input: ManagedBlockchainListNetworksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput)

---

##### `listNodes` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.listNodes"></a>

```typescript
public listNodes(input: ManagedBlockchainListNodesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput)

---

##### `listProposals` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.listProposals"></a>

```typescript
public listProposals(input: ManagedBlockchainListProposalsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput)

---

##### `listProposalVotes` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.listProposalVotes"></a>

```typescript
public listProposalVotes(input: ManagedBlockchainListProposalVotesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput)

---

##### `rejectInvitation` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.rejectInvitation"></a>

```typescript
public rejectInvitation(input: ManagedBlockchainRejectInvitationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainRejectInvitationInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainRejectInvitationInput)

---

##### `updateMember` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.updateMember"></a>

```typescript
public updateMember(input: ManagedBlockchainUpdateMemberInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateMemberInput)

---

##### `updateNode` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.updateNode"></a>

```typescript
public updateNode(input: ManagedBlockchainUpdateNodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeInput)

---

##### `voteOnProposal` <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.voteOnProposal"></a>

```typescript
public voteOnProposal(input: ManagedBlockchainVoteOnProposalInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalInput)

---




## Structs <a name="Structs"></a>

### ManagedBlockchainApprovalThresholdPolicy <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainApprovalThresholdPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainApprovalThresholdPolicy: managedblockchain.ManagedBlockchainApprovalThresholdPolicy = { ... }
```

##### `proposalDurationInHours`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainApprovalThresholdPolicy.property.proposalDurationInHours"></a>

- *Type:* `number`

---

##### `thresholdComparator`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainApprovalThresholdPolicy.property.thresholdComparator"></a>

- *Type:* `string`

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainApprovalThresholdPolicy.property.thresholdPercentage"></a>

- *Type:* `number`

---

### ManagedBlockchainCreateMemberInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateMemberInput: managedblockchain.ManagedBlockchainCreateMemberInput = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput.property.invitationId"></a>

- *Type:* `string`

---

##### `memberConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput.property.memberConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput.property.networkId"></a>

- *Type:* `string`

---

### ManagedBlockchainCreateMemberOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateMemberOutput: managedblockchain.ManagedBlockchainCreateMemberOutput = { ... }
```

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberOutput.property.memberId"></a>

- *Type:* `string`

---

### ManagedBlockchainCreateNetworkInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateNetworkInput: managedblockchain.ManagedBlockchainCreateNetworkInput = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.framework"></a>

- *Type:* `string`

---

##### `frameworkVersion`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.frameworkVersion"></a>

- *Type:* `string`

---

##### `memberConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.memberConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.name"></a>

- *Type:* `string`

---

##### `votingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.votingPolicy"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainVotingPolicy`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainVotingPolicy)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.description"></a>

- *Type:* `string`

---

##### `frameworkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput.property.frameworkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkConfiguration)

---

### ManagedBlockchainCreateNetworkOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateNetworkOutput: managedblockchain.ManagedBlockchainCreateNetworkOutput = { ... }
```

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkOutput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkOutput.property.networkId"></a>

- *Type:* `string`

---

### ManagedBlockchainCreateNodeInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateNodeInput: managedblockchain.ManagedBlockchainCreateNodeInput = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput.property.networkId"></a>

- *Type:* `string`

---

##### `nodeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput.property.nodeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeConfiguration)

---

### ManagedBlockchainCreateNodeOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateNodeOutput: managedblockchain.ManagedBlockchainCreateNodeOutput = { ... }
```

##### `nodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeOutput.property.nodeId"></a>

- *Type:* `string`

---

### ManagedBlockchainCreateProposalInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateProposalInput: managedblockchain.ManagedBlockchainCreateProposalInput = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput.property.actions"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalActions`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalActions)

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput.property.networkId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput.property.description"></a>

- *Type:* `string`

---

### ManagedBlockchainCreateProposalOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainCreateProposalOutput: managedblockchain.ManagedBlockchainCreateProposalOutput = { ... }
```

##### `proposalId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalOutput.property.proposalId"></a>

- *Type:* `string`

---

### ManagedBlockchainDeleteMemberInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteMemberInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainDeleteMemberInput: managedblockchain.ManagedBlockchainDeleteMemberInput = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteMemberInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteMemberInput.property.networkId"></a>

- *Type:* `string`

---

### ManagedBlockchainDeleteMemberOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteMemberOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainDeleteMemberOutput: managedblockchain.ManagedBlockchainDeleteMemberOutput = { ... }
```

### ManagedBlockchainDeleteNodeInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainDeleteNodeInput: managedblockchain.ManagedBlockchainDeleteNodeInput = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteNodeInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteNodeInput.property.networkId"></a>

- *Type:* `string`

---

##### `nodeId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteNodeInput.property.nodeId"></a>

- *Type:* `string`

---

### ManagedBlockchainDeleteNodeOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainDeleteNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainDeleteNodeOutput: managedblockchain.ManagedBlockchainDeleteNodeOutput = { ... }
```

### ManagedBlockchainGetMemberInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetMemberInput: managedblockchain.ManagedBlockchainGetMemberInput = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput.property.networkId"></a>

- *Type:* `string`

---

### ManagedBlockchainGetMemberOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetMemberOutput: managedblockchain.ManagedBlockchainGetMemberOutput = { ... }
```

##### `member`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberOutput.property.member"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMember`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMember)

---

### ManagedBlockchainGetNetworkInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetNetworkInput: managedblockchain.ManagedBlockchainGetNetworkInput = { ... }
```

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput.property.networkId"></a>

- *Type:* `string`

---

### ManagedBlockchainGetNetworkOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetNetworkOutput: managedblockchain.ManagedBlockchainGetNetworkOutput = { ... }
```

##### `network`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkOutput.property.network"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork)

---

### ManagedBlockchainGetNodeInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetNodeInput: managedblockchain.ManagedBlockchainGetNodeInput = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput.property.networkId"></a>

- *Type:* `string`

---

##### `nodeId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput.property.nodeId"></a>

- *Type:* `string`

---

### ManagedBlockchainGetNodeOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetNodeOutput: managedblockchain.ManagedBlockchainGetNodeOutput = { ... }
```

##### `node`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeOutput.property.node"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNode`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNode)

---

### ManagedBlockchainGetProposalInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetProposalInput: managedblockchain.ManagedBlockchainGetProposalInput = { ... }
```

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput.property.networkId"></a>

- *Type:* `string`

---

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput.property.proposalId"></a>

- *Type:* `string`

---

### ManagedBlockchainGetProposalOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainGetProposalOutput: managedblockchain.ManagedBlockchainGetProposalOutput = { ... }
```

##### `proposal`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalOutput.property.proposal"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal)

---

### ManagedBlockchainInvitation <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainInvitation: managedblockchain.ManagedBlockchainInvitation = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation.property.creationDate"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation.property.expirationDate"></a>

- *Type:* `string`

---

##### `invitationId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation.property.invitationId"></a>

- *Type:* `string`

---

##### `networkSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation.property.networkSummary"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainInviteAction <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInviteAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainInviteAction: managedblockchain.ManagedBlockchainInviteAction = { ... }
```

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainInviteAction.property.principal"></a>

- *Type:* `string`

---

### ManagedBlockchainListInvitationsInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListInvitationsInput: managedblockchain.ManagedBlockchainListInvitationsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsInput.property.nextToken"></a>

- *Type:* `string`

---

### ManagedBlockchainListInvitationsOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListInvitationsOutput: managedblockchain.ManagedBlockchainListInvitationsOutput = { ... }
```

##### `invitations`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsOutput.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsOutput.property.nextToken"></a>

- *Type:* `string`

---

### ManagedBlockchainListMembersInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListMembersInput: managedblockchain.ManagedBlockchainListMembersInput = { ... }
```

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput.property.networkId"></a>

- *Type:* `string`

---

##### `isOwned`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput.property.isOwned"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainListMembersOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListMembersOutput: managedblockchain.ManagedBlockchainListMembersOutput = { ... }
```

##### `members`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersOutput.property.members"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersOutput.property.nextToken"></a>

- *Type:* `string`

---

### ManagedBlockchainListNetworksInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListNetworksInput: managedblockchain.ManagedBlockchainListNetworksInput = { ... }
```

##### `framework`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput.property.framework"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainListNetworksOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListNetworksOutput: managedblockchain.ManagedBlockchainListNetworksOutput = { ... }
```

##### `networks`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksOutput.property.networks"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksOutput.property.nextToken"></a>

- *Type:* `string`

---

### ManagedBlockchainListNodesInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListNodesInput: managedblockchain.ManagedBlockchainListNodesInput = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput.property.networkId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainListNodesOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListNodesOutput: managedblockchain.ManagedBlockchainListNodesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `nodes`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesOutput.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary)[]

---

### ManagedBlockchainListProposalsInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListProposalsInput: managedblockchain.ManagedBlockchainListProposalsInput = { ... }
```

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput.property.networkId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput.property.nextToken"></a>

- *Type:* `string`

---

### ManagedBlockchainListProposalsOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListProposalsOutput: managedblockchain.ManagedBlockchainListProposalsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `proposals`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsOutput.property.proposals"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary)[]

---

### ManagedBlockchainListProposalVotesInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListProposalVotesInput: managedblockchain.ManagedBlockchainListProposalVotesInput = { ... }
```

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput.property.networkId"></a>

- *Type:* `string`

---

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput.property.proposalId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput.property.nextToken"></a>

- *Type:* `string`

---

### ManagedBlockchainListProposalVotesOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainListProposalVotesOutput: managedblockchain.ManagedBlockchainListProposalVotesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `proposalVotes`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesOutput.property.proposalVotes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary)[]

---

### ManagedBlockchainLogConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainLogConfiguration: managedblockchain.ManagedBlockchainLogConfiguration = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

### ManagedBlockchainLogConfigurations <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainLogConfigurations: managedblockchain.ManagedBlockchainLogConfigurations = { ... }
```

##### `cloudwatch`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations.property.cloudwatch"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfiguration)

---

### ManagedBlockchainMember <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMember: managedblockchain.ManagedBlockchainMember = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.description"></a>

- *Type:* `string`

---

##### `frameworkAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.frameworkAttributes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkAttributes)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.id"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.name"></a>

- *Type:* `string`

---

##### `networkId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.networkId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMember.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainMemberConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberConfiguration: managedblockchain.ManagedBlockchainMemberConfiguration = { ... }
```

##### `frameworkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration.property.frameworkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration.property.description"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberConfiguration.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration)

---

### ManagedBlockchainMemberFabricAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberFabricAttributes: managedblockchain.ManagedBlockchainMemberFabricAttributes = { ... }
```

##### `adminUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricAttributes.property.adminUsername"></a>

- *Type:* `string`

---

##### `caEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricAttributes.property.caEndpoint"></a>

- *Type:* `string`

---

### ManagedBlockchainMemberFabricConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberFabricConfiguration: managedblockchain.ManagedBlockchainMemberFabricConfiguration = { ... }
```

##### `adminPassword`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricConfiguration.property.adminPassword"></a>

- *Type:* `string`

---

##### `adminUsername`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricConfiguration.property.adminUsername"></a>

- *Type:* `string`

---

### ManagedBlockchainMemberFabricLogPublishingConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricLogPublishingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberFabricLogPublishingConfiguration: managedblockchain.ManagedBlockchainMemberFabricLogPublishingConfiguration = { ... }
```

##### `caLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricLogPublishingConfiguration.property.caLogs"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations)

---

### ManagedBlockchainMemberFrameworkAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberFrameworkAttributes: managedblockchain.ManagedBlockchainMemberFrameworkAttributes = { ... }
```

##### `fabric`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkAttributes.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricAttributes)

---

### ManagedBlockchainMemberFrameworkConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberFrameworkConfiguration: managedblockchain.ManagedBlockchainMemberFrameworkConfiguration = { ... }
```

##### `fabric`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFrameworkConfiguration.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricConfiguration)

---

### ManagedBlockchainMemberLogPublishingConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberLogPublishingConfiguration: managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration = { ... }
```

##### `fabric`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberFabricLogPublishingConfiguration)

---

### ManagedBlockchainMemberSummary <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainMemberSummary: managedblockchain.ManagedBlockchainMemberSummary = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary.property.id"></a>

- *Type:* `string`

---

##### `isOwned`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary.property.isOwned"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainNetwork <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNetwork: managedblockchain.ManagedBlockchainNetwork = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.description"></a>

- *Type:* `string`

---

##### `framework`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.framework"></a>

- *Type:* `string`

---

##### `frameworkAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.frameworkAttributes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkAttributes)

---

##### `frameworkVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.frameworkVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.status"></a>

- *Type:* `string`

---

##### `votingPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.votingPolicy"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainVotingPolicy`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainVotingPolicy)

---

##### `vpcEndpointServiceName`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetwork.property.vpcEndpointServiceName"></a>

- *Type:* `string`

---

### ManagedBlockchainNetworkFabricAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNetworkFabricAttributes: managedblockchain.ManagedBlockchainNetworkFabricAttributes = { ... }
```

##### `edition`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricAttributes.property.edition"></a>

- *Type:* `string`

---

##### `orderingServiceEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricAttributes.property.orderingServiceEndpoint"></a>

- *Type:* `string`

---

### ManagedBlockchainNetworkFabricConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNetworkFabricConfiguration: managedblockchain.ManagedBlockchainNetworkFabricConfiguration = { ... }
```

##### `edition`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricConfiguration.property.edition"></a>

- *Type:* `string`

---

### ManagedBlockchainNetworkFrameworkAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNetworkFrameworkAttributes: managedblockchain.ManagedBlockchainNetworkFrameworkAttributes = { ... }
```

##### `fabric`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkAttributes.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricAttributes)

---

### ManagedBlockchainNetworkFrameworkConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNetworkFrameworkConfiguration: managedblockchain.ManagedBlockchainNetworkFrameworkConfiguration = { ... }
```

##### `fabric`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFrameworkConfiguration.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkFabricConfiguration)

---

### ManagedBlockchainNetworkSummary <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNetworkSummary: managedblockchain.ManagedBlockchainNetworkSummary = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary.property.description"></a>

- *Type:* `string`

---

##### `framework`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary.property.framework"></a>

- *Type:* `string`

---

##### `frameworkVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary.property.frameworkVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainNode <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNode: managedblockchain.ManagedBlockchainNode = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.availabilityZone"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.creationDate"></a>

- *Type:* `string`

---

##### `frameworkAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.frameworkAttributes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFrameworkAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFrameworkAttributes)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.id"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.instanceType"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration)

---

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.networkId"></a>

- *Type:* `string`

---

##### `stateDb`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.stateDb"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNode.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainNodeConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNodeConfiguration: managedblockchain.ManagedBlockchainNodeConfiguration = { ... }
```

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeConfiguration.property.availabilityZone"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeConfiguration.property.instanceType"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeConfiguration.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration)

---

##### `stateDb`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeConfiguration.property.stateDb"></a>

- *Type:* `string`

---

### ManagedBlockchainNodeFabricAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNodeFabricAttributes: managedblockchain.ManagedBlockchainNodeFabricAttributes = { ... }
```

##### `peerEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricAttributes.property.peerEndpoint"></a>

- *Type:* `string`

---

##### `peerEventEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricAttributes.property.peerEventEndpoint"></a>

- *Type:* `string`

---

### ManagedBlockchainNodeFabricLogPublishingConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricLogPublishingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNodeFabricLogPublishingConfiguration: managedblockchain.ManagedBlockchainNodeFabricLogPublishingConfiguration = { ... }
```

##### `chaincodeLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricLogPublishingConfiguration.property.chaincodeLogs"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations)

---

##### `peerLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricLogPublishingConfiguration.property.peerLogs"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainLogConfigurations)

---

### ManagedBlockchainNodeFrameworkAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFrameworkAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNodeFrameworkAttributes: managedblockchain.ManagedBlockchainNodeFrameworkAttributes = { ... }
```

##### `fabric`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFrameworkAttributes.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricAttributes)

---

### ManagedBlockchainNodeLogPublishingConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNodeLogPublishingConfiguration: managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration = { ... }
```

##### `fabric`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeFabricLogPublishingConfiguration)

---

### ManagedBlockchainNodeSummary <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainNodeSummary: managedblockchain.ManagedBlockchainNodeSummary = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary.property.availabilityZone"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary.property.id"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary.property.instanceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainProposal <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainProposal: managedblockchain.ManagedBlockchainProposal = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.actions"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalActions`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalActions)

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.expirationDate"></a>

- *Type:* `string`

---

##### `networkId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.networkId"></a>

- *Type:* `string`

---

##### `noVoteCount`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.noVoteCount"></a>

- *Type:* `number`

---

##### `outstandingVoteCount`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.outstandingVoteCount"></a>

- *Type:* `number`

---

##### `proposalId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.proposalId"></a>

- *Type:* `string`

---

##### `proposedByMemberId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.proposedByMemberId"></a>

- *Type:* `string`

---

##### `proposedByMemberName`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.proposedByMemberName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.status"></a>

- *Type:* `string`

---

##### `yesVoteCount`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposal.property.yesVoteCount"></a>

- *Type:* `number`

---

### ManagedBlockchainProposalActions <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainProposalActions: managedblockchain.ManagedBlockchainProposalActions = { ... }
```

##### `invitations`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalActions.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainInviteAction`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainInviteAction)[]

---

##### `removals`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalActions.property.removals"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainRemoveAction`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainRemoveAction)[]

---

### ManagedBlockchainProposalSummary <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainProposalSummary: managedblockchain.ManagedBlockchainProposalSummary = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary.property.expirationDate"></a>

- *Type:* `string`

---

##### `proposalId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary.property.proposalId"></a>

- *Type:* `string`

---

##### `proposedByMemberId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary.property.proposedByMemberId"></a>

- *Type:* `string`

---

##### `proposedByMemberName`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary.property.proposedByMemberName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary.property.status"></a>

- *Type:* `string`

---

### ManagedBlockchainRejectInvitationInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainRejectInvitationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainRejectInvitationInput: managedblockchain.ManagedBlockchainRejectInvitationInput = { ... }
```

##### `invitationId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainRejectInvitationInput.property.invitationId"></a>

- *Type:* `string`

---

### ManagedBlockchainRejectInvitationOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainRejectInvitationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainRejectInvitationOutput: managedblockchain.ManagedBlockchainRejectInvitationOutput = { ... }
```

### ManagedBlockchainRemoveAction <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainRemoveAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainRemoveAction: managedblockchain.ManagedBlockchainRemoveAction = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainRemoveAction.property.memberId"></a>

- *Type:* `string`

---

### ManagedBlockchainUpdateMemberInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateMemberInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainUpdateMemberInput: managedblockchain.ManagedBlockchainUpdateMemberInput = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateMemberInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateMemberInput.property.networkId"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateMemberInput.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberLogPublishingConfiguration)

---

### ManagedBlockchainUpdateMemberOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateMemberOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainUpdateMemberOutput: managedblockchain.ManagedBlockchainUpdateMemberOutput = { ... }
```

### ManagedBlockchainUpdateNodeInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainUpdateNodeInput: managedblockchain.ManagedBlockchainUpdateNodeInput = { ... }
```

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeInput.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeInput.property.networkId"></a>

- *Type:* `string`

---

##### `nodeId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeInput.property.nodeId"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeInput.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeLogPublishingConfiguration)

---

### ManagedBlockchainUpdateNodeOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainUpdateNodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainUpdateNodeOutput: managedblockchain.ManagedBlockchainUpdateNodeOutput = { ... }
```

### ManagedBlockchainVoteOnProposalInput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainVoteOnProposalInput: managedblockchain.ManagedBlockchainVoteOnProposalInput = { ... }
```

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalInput.property.networkId"></a>

- *Type:* `string`

---

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalInput.property.proposalId"></a>

- *Type:* `string`

---

##### `vote`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalInput.property.vote"></a>

- *Type:* `string`

---

##### `voterMemberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalInput.property.voterMemberId"></a>

- *Type:* `string`

---

### ManagedBlockchainVoteOnProposalOutput <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteOnProposalOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainVoteOnProposalOutput: managedblockchain.ManagedBlockchainVoteOnProposalOutput = { ... }
```

### ManagedBlockchainVoteSummary <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainVoteSummary: managedblockchain.ManagedBlockchainVoteSummary = { ... }
```

##### `memberId`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary.property.memberId"></a>

- *Type:* `string`

---

##### `memberName`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary.property.memberName"></a>

- *Type:* `string`

---

##### `vote`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary.property.vote"></a>

- *Type:* `string`

---

### ManagedBlockchainVotingPolicy <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVotingPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

const managedBlockchainVotingPolicy: managedblockchain.ManagedBlockchainVotingPolicy = { ... }
```

##### `approvalThresholdPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainVotingPolicy.property.approvalThresholdPolicy"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainApprovalThresholdPolicy`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainApprovalThresholdPolicy)

---

## Classes <a name="Classes"></a>

### ManagedBlockchainResponsesCreateMember <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateMember"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateMember.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesCreateMember(__scope: Construct, __resources: string[], __input: ManagedBlockchainCreateMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateMemberInput)

---



#### Properties <a name="Properties"></a>

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateMember.property.memberId"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesCreateNetwork <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNetwork.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesCreateNetwork(__scope: Construct, __resources: string[], __input: ManagedBlockchainCreateNetworkInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNetworkInput)

---



#### Properties <a name="Properties"></a>

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNetwork.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNetwork.property.networkId"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesCreateNode <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNode"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNode.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesCreateNode(__scope: Construct, __resources: string[], __input: ManagedBlockchainCreateNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateNodeInput)

---



#### Properties <a name="Properties"></a>

##### `nodeId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateNode.property.nodeId"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesCreateProposal <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateProposal"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateProposal.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesCreateProposal(__scope: Construct, __resources: string[], __input: ManagedBlockchainCreateProposalInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainCreateProposalInput)

---



#### Properties <a name="Properties"></a>

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesCreateProposal.property.proposalId"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesFetchMember <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMember"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMember.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMember(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `member`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMember.property.member"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember)

---


### ManagedBlockchainResponsesFetchMemberMember <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMemberMember(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.description"></a>

- *Type:* `string`

---

##### `frameworkAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.frameworkAttributes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.id"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.name"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.networkId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMember.property.status"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `fabric`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributes.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric)

---


### ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `adminUsername`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric.property.adminUsername"></a>

- *Type:* `string`

---

##### `caEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberFrameworkAttributesFabric.property.caEndpoint"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `fabric`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfiguration.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric)

---


### ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `caLogs`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabric.property.caLogs"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs)

---


### ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `cloudwatch`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogs.property.cloudwatch"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch)

---


### ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetMemberInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetMemberInput)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchMemberMemberLogPublishingConfigurationFabricCaLogsCloudwatch.property.enabled"></a>

- *Type:* `boolean`

---


### ManagedBlockchainResponsesFetchNetwork <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetwork.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNetwork(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNetworkInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput)

---



#### Properties <a name="Properties"></a>

##### `network`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetwork.property.network"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork)

---


### ManagedBlockchainResponsesFetchNetworkNetwork <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNetworkInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.description"></a>

- *Type:* `string`

---

##### `framework`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.framework"></a>

- *Type:* `string`

---

##### `frameworkAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.frameworkAttributes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes)

---

##### `frameworkVersion`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.frameworkVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.status"></a>

- *Type:* `string`

---

##### `votingPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.votingPolicy"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy)

---

##### `vpcEndpointServiceName`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetwork.property.vpcEndpointServiceName"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNetworkInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput)

---



#### Properties <a name="Properties"></a>

##### `fabric`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributes.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric)

---


### ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNetworkInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput)

---



#### Properties <a name="Properties"></a>

##### `edition`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric.property.edition"></a>

- *Type:* `string`

---

##### `orderingServiceEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkFrameworkAttributesFabric.property.orderingServiceEndpoint"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNetworkInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput)

---



#### Properties <a name="Properties"></a>

##### `approvalThresholdPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicy.property.approvalThresholdPolicy"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy)

---


### ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNetworkInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNetworkInput)

---



#### Properties <a name="Properties"></a>

##### `proposalDurationInHours`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy.property.proposalDurationInHours"></a>

- *Type:* `number`

---

##### `thresholdComparator`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy.property.thresholdComparator"></a>

- *Type:* `string`

---

##### `thresholdPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNetworkNetworkVotingPolicyApprovalThresholdPolicy.property.thresholdPercentage"></a>

- *Type:* `number`

---


### ManagedBlockchainResponsesFetchNode <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNode"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNode.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNode(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `node`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNode.property.node"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode)

---


### ManagedBlockchainResponsesFetchNodeNode <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNode(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.availabilityZone"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.creationDate"></a>

- *Type:* `string`

---

##### `frameworkAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.frameworkAttributes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.id"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.instanceType"></a>

- *Type:* `string`

---

##### `logPublishingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.logPublishingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration)

---

##### `memberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.memberId"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.networkId"></a>

- *Type:* `string`

---

##### `stateDb`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.stateDb"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNode.property.status"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `fabric`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributes.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric)

---


### ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `peerEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric.property.peerEndpoint"></a>

- *Type:* `string`

---

##### `peerEventEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeFrameworkAttributesFabric.property.peerEventEndpoint"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `fabric`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfiguration.property.fabric"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric)

---


### ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `chaincodeLogs`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric.property.chaincodeLogs"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs)

---

##### `peerLogs`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabric.property.peerLogs"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs)

---


### ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `cloudwatch`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogs.property.cloudwatch"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch)

---


### ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricChaincodeLogsCloudwatch.property.enabled"></a>

- *Type:* `boolean`

---


### ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `cloudwatch`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogs.property.cloudwatch"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch)

---


### ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetNodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetNodeInput)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchNodeNodeLogPublishingConfigurationFabricPeerLogsCloudwatch.property.enabled"></a>

- *Type:* `boolean`

---


### ManagedBlockchainResponsesFetchProposal <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposal"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposal.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchProposal(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetProposalInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput)

---



#### Properties <a name="Properties"></a>

##### `proposal`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposal.property.proposal"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal)

---


### ManagedBlockchainResponsesFetchProposalProposal <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchProposalProposal(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetProposalInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput)

---



#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.actions"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions)

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.expirationDate"></a>

- *Type:* `string`

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.networkId"></a>

- *Type:* `string`

---

##### `noVoteCount`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.noVoteCount"></a>

- *Type:* `number`

---

##### `outstandingVoteCount`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.outstandingVoteCount"></a>

- *Type:* `number`

---

##### `proposalId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.proposalId"></a>

- *Type:* `string`

---

##### `proposedByMemberId`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.proposedByMemberId"></a>

- *Type:* `string`

---

##### `proposedByMemberName`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.proposedByMemberName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.status"></a>

- *Type:* `string`

---

##### `yesVoteCount`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposal.property.yesVoteCount"></a>

- *Type:* `number`

---


### ManagedBlockchainResponsesFetchProposalProposalActions <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions(__scope: Construct, __resources: string[], __input: ManagedBlockchainGetProposalInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainGetProposalInput)

---



#### Properties <a name="Properties"></a>

##### `invitations`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainInviteAction`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainInviteAction)[]

---

##### `removals`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesFetchProposalProposalActions.property.removals"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainRemoveAction`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainRemoveAction)[]

---


### ManagedBlockchainResponsesListInvitations <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListInvitations"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListInvitations.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesListInvitations(__scope: Construct, __resources: string[], __input: ManagedBlockchainListInvitationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListInvitations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListInvitations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListInvitations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListInvitationsInput)

---



#### Properties <a name="Properties"></a>

##### `invitations`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListInvitations.property.invitations"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainInvitation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListInvitations.property.nextToken"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesListMembers <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListMembers"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListMembers.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesListMembers(__scope: Construct, __resources: string[], __input: ManagedBlockchainListMembersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListMembersInput)

---



#### Properties <a name="Properties"></a>

##### `members`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListMembers.property.members"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainMemberSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListMembers.property.nextToken"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesListNetworks <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNetworks"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNetworks.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesListNetworks(__scope: Construct, __resources: string[], __input: ManagedBlockchainListNetworksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNetworks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNetworks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNetworks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListNetworksInput)

---



#### Properties <a name="Properties"></a>

##### `networks`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNetworks.property.networks"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNetworkSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNetworks.property.nextToken"></a>

- *Type:* `string`

---


### ManagedBlockchainResponsesListNodes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNodes"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNodes.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesListNodes(__scope: Construct, __resources: string[], __input: ManagedBlockchainListNodesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNodes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNodes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNodes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListNodesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNodes.property.nextToken"></a>

- *Type:* `string`

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListNodes.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainNodeSummary)[]

---


### ManagedBlockchainResponsesListProposals <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposals"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposals.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesListProposals(__scope: Construct, __resources: string[], __input: ManagedBlockchainListProposalsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposals.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposals.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposals.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposals.property.nextToken"></a>

- *Type:* `string`

---

##### `proposals`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposals.property.proposals"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainProposalSummary)[]

---


### ManagedBlockchainResponsesListProposalVotes <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposalVotes"></a>

#### Initializer <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposalVotes.Initializer"></a>

```typescript
import { managedblockchain } from 'aws-cdk-sdk'

new managedblockchain.ManagedBlockchainResponsesListProposalVotes(__scope: Construct, __resources: string[], __input: ManagedBlockchainListProposalVotesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposalVotes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposalVotes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposalVotes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainListProposalVotesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposalVotes.property.nextToken"></a>

- *Type:* `string`

---

##### `proposalVotes`<sup>Required</sup> <a name="aws-cdk-sdk.managedblockchain.ManagedBlockchainResponsesListProposalVotes.property.proposalVotes"></a>

- *Type:* [`aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary`](#aws-cdk-sdk.managedblockchain.ManagedBlockchainVoteSummary)[]

---



