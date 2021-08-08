# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeStarClient <a name="aws-cdk-sdk.codestar.CodeStarClient"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarClient.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateTeamMember` <a name="aws-cdk-sdk.codestar.CodeStarClient.associateTeamMember"></a>

```typescript
public associateTeamMember(input: CodeStarAssociateTeamMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest`](#aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest)

---

##### `createProject` <a name="aws-cdk-sdk.codestar.CodeStarClient.createProject"></a>

```typescript
public createProject(input: CodeStarCreateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCreateProjectRequest`](#aws-cdk-sdk.codestar.CodeStarCreateProjectRequest)

---

##### `createUserProfile` <a name="aws-cdk-sdk.codestar.CodeStarClient.createUserProfile"></a>

```typescript
public createUserProfile(input: CodeStarCreateUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest)

---

##### `deleteProject` <a name="aws-cdk-sdk.codestar.CodeStarClient.deleteProject"></a>

```typescript
public deleteProject(input: CodeStarDeleteProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest`](#aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest)

---

##### `deleteUserProfile` <a name="aws-cdk-sdk.codestar.CodeStarClient.deleteUserProfile"></a>

```typescript
public deleteUserProfile(input: CodeStarDeleteUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDeleteUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarDeleteUserProfileRequest)

---

##### `describeProject` <a name="aws-cdk-sdk.codestar.CodeStarClient.describeProject"></a>

```typescript
public describeProject(input: CodeStarDescribeProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest`](#aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest)

---

##### `describeUserProfile` <a name="aws-cdk-sdk.codestar.CodeStarClient.describeUserProfile"></a>

```typescript
public describeUserProfile(input: CodeStarDescribeUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDescribeUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarDescribeUserProfileRequest)

---

##### `disassociateTeamMember` <a name="aws-cdk-sdk.codestar.CodeStarClient.disassociateTeamMember"></a>

```typescript
public disassociateTeamMember(input: CodeStarDisassociateTeamMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDisassociateTeamMemberRequest`](#aws-cdk-sdk.codestar.CodeStarDisassociateTeamMemberRequest)

---

##### `listProjects` <a name="aws-cdk-sdk.codestar.CodeStarClient.listProjects"></a>

```typescript
public listProjects(input: CodeStarListProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListProjectsRequest`](#aws-cdk-sdk.codestar.CodeStarListProjectsRequest)

---

##### `listResources` <a name="aws-cdk-sdk.codestar.CodeStarClient.listResources"></a>

```typescript
public listResources(input: CodeStarListResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListResourcesRequest`](#aws-cdk-sdk.codestar.CodeStarListResourcesRequest)

---

##### `listTagsForProject` <a name="aws-cdk-sdk.codestar.CodeStarClient.listTagsForProject"></a>

```typescript
public listTagsForProject(input: CodeStarListTagsForProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest`](#aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest)

---

##### `listTeamMembers` <a name="aws-cdk-sdk.codestar.CodeStarClient.listTeamMembers"></a>

```typescript
public listTeamMembers(input: CodeStarListTeamMembersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest`](#aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest)

---

##### `listUserProfiles` <a name="aws-cdk-sdk.codestar.CodeStarClient.listUserProfiles"></a>

```typescript
public listUserProfiles(input: CodeStarListUserProfilesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListUserProfilesRequest`](#aws-cdk-sdk.codestar.CodeStarListUserProfilesRequest)

---

##### `tagProject` <a name="aws-cdk-sdk.codestar.CodeStarClient.tagProject"></a>

```typescript
public tagProject(input: CodeStarTagProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarTagProjectRequest`](#aws-cdk-sdk.codestar.CodeStarTagProjectRequest)

---

##### `untagProject` <a name="aws-cdk-sdk.codestar.CodeStarClient.untagProject"></a>

```typescript
public untagProject(input: CodeStarUntagProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUntagProjectRequest`](#aws-cdk-sdk.codestar.CodeStarUntagProjectRequest)

---

##### `updateProject` <a name="aws-cdk-sdk.codestar.CodeStarClient.updateProject"></a>

```typescript
public updateProject(input: CodeStarUpdateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUpdateProjectRequest`](#aws-cdk-sdk.codestar.CodeStarUpdateProjectRequest)

---

##### `updateTeamMember` <a name="aws-cdk-sdk.codestar.CodeStarClient.updateTeamMember"></a>

```typescript
public updateTeamMember(input: CodeStarUpdateTeamMemberRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest`](#aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest)

---

##### `updateUserProfile` <a name="aws-cdk-sdk.codestar.CodeStarClient.updateUserProfile"></a>

```typescript
public updateUserProfile(input: CodeStarUpdateUserProfileRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest)

---




## Structs <a name="Structs"></a>

### CodeStarAssociateTeamMemberRequest <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarAssociateTeamMemberRequest: codestar.CodeStarAssociateTeamMemberRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest.property.projectId"></a>

- *Type:* `string`

---

##### `projectRole`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest.property.projectRole"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest.property.userArn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `remoteAccessAllowed`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest.property.remoteAccessAllowed"></a>

- *Type:* `boolean`

---

### CodeStarAssociateTeamMemberResult <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarAssociateTeamMemberResult: codestar.CodeStarAssociateTeamMemberResult = { ... }
```

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberResult.property.clientRequestToken"></a>

- *Type:* `string`

---

### CodeStarCode <a name="aws-cdk-sdk.codestar.CodeStarCode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCode: codestar.CodeStarCode = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCode.property.destination"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCodeDestination`](#aws-cdk-sdk.codestar.CodeStarCodeDestination)

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCode.property.source"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCodeSource`](#aws-cdk-sdk.codestar.CodeStarCodeSource)

---

### CodeStarCodeCommitCodeDestination <a name="aws-cdk-sdk.codestar.CodeStarCodeCommitCodeDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCodeCommitCodeDestination: codestar.CodeStarCodeCommitCodeDestination = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCodeCommitCodeDestination.property.name"></a>

- *Type:* `string`

---

### CodeStarCodeDestination <a name="aws-cdk-sdk.codestar.CodeStarCodeDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCodeDestination: codestar.CodeStarCodeDestination = { ... }
```

##### `codeCommit`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCodeDestination.property.codeCommit"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCodeCommitCodeDestination`](#aws-cdk-sdk.codestar.CodeStarCodeCommitCodeDestination)

---

##### `gitHub`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCodeDestination.property.gitHub"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination`](#aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination)

---

### CodeStarCodeSource <a name="aws-cdk-sdk.codestar.CodeStarCodeSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCodeSource: codestar.CodeStarCodeSource = { ... }
```

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCodeSource.property.s3"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarS3Location`](#aws-cdk-sdk.codestar.CodeStarS3Location)

---

### CodeStarCreateProjectRequest <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCreateProjectRequest: codestar.CodeStarCreateProjectRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest.property.name"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest.property.description"></a>

- *Type:* `string`

---

##### `sourceCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest.property.sourceCode"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCode`](#aws-cdk-sdk.codestar.CodeStarCode)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `toolchain`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectRequest.property.toolchain"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarToolchain`](#aws-cdk-sdk.codestar.CodeStarToolchain)

---

### CodeStarCreateProjectResult <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCreateProjectResult: codestar.CodeStarCreateProjectResult = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectResult.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectResult.property.id"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectResult.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `projectTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateProjectResult.property.projectTemplateId"></a>

- *Type:* `string`

---

### CodeStarCreateUserProfileRequest <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCreateUserProfileRequest: codestar.CodeStarCreateUserProfileRequest = { ... }
```

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest.property.emailAddress"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest.property.userArn"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest.property.sshPublicKey"></a>

- *Type:* `string`

---

### CodeStarCreateUserProfileResult <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarCreateUserProfileResult: codestar.CodeStarCreateUserProfileResult = { ... }
```

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileResult.property.userArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileResult.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileResult.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileResult.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileResult.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarCreateUserProfileResult.property.sshPublicKey"></a>

- *Type:* `string`

---

### CodeStarDeleteProjectRequest <a name="aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDeleteProjectRequest: codestar.CodeStarDeleteProjectRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest.property.id"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `deleteStack`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest.property.deleteStack"></a>

- *Type:* `boolean`

---

### CodeStarDeleteProjectResult <a name="aws-cdk-sdk.codestar.CodeStarDeleteProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDeleteProjectResult: codestar.CodeStarDeleteProjectResult = { ... }
```

##### `projectArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDeleteProjectResult.property.projectArn"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDeleteProjectResult.property.stackId"></a>

- *Type:* `string`

---

### CodeStarDeleteUserProfileRequest <a name="aws-cdk-sdk.codestar.CodeStarDeleteUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDeleteUserProfileRequest: codestar.CodeStarDeleteUserProfileRequest = { ... }
```

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDeleteUserProfileRequest.property.userArn"></a>

- *Type:* `string`

---

### CodeStarDeleteUserProfileResult <a name="aws-cdk-sdk.codestar.CodeStarDeleteUserProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDeleteUserProfileResult: codestar.CodeStarDeleteUserProfileResult = { ... }
```

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDeleteUserProfileResult.property.userArn"></a>

- *Type:* `string`

---

### CodeStarDescribeProjectRequest <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDescribeProjectRequest: codestar.CodeStarDescribeProjectRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest.property.id"></a>

- *Type:* `string`

---

### CodeStarDescribeProjectResult <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDescribeProjectResult: codestar.CodeStarDescribeProjectResult = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.name"></a>

- *Type:* `string`

---

##### `projectTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.projectTemplateId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.stackId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeProjectResult.property.status"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarProjectStatus`](#aws-cdk-sdk.codestar.CodeStarProjectStatus)

---

### CodeStarDescribeUserProfileRequest <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDescribeUserProfileRequest: codestar.CodeStarDescribeUserProfileRequest = { ... }
```

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileRequest.property.userArn"></a>

- *Type:* `string`

---

### CodeStarDescribeUserProfileResult <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDescribeUserProfileResult: codestar.CodeStarDescribeUserProfileResult = { ... }
```

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileResult.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileResult.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileResult.property.userArn"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileResult.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileResult.property.emailAddress"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarDescribeUserProfileResult.property.sshPublicKey"></a>

- *Type:* `string`

---

### CodeStarDisassociateTeamMemberRequest <a name="aws-cdk-sdk.codestar.CodeStarDisassociateTeamMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDisassociateTeamMemberRequest: codestar.CodeStarDisassociateTeamMemberRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDisassociateTeamMemberRequest.property.projectId"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarDisassociateTeamMemberRequest.property.userArn"></a>

- *Type:* `string`

---

### CodeStarDisassociateTeamMemberResult <a name="aws-cdk-sdk.codestar.CodeStarDisassociateTeamMemberResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarDisassociateTeamMemberResult: codestar.CodeStarDisassociateTeamMemberResult = { ... }
```

### CodeStarGitHubCodeDestination <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarGitHubCodeDestination: codestar.CodeStarGitHubCodeDestination = { ... }
```

##### `issuesEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination.property.issuesEnabled"></a>

- *Type:* `boolean`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination.property.owner"></a>

- *Type:* `string`

---

##### `privateRepository`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination.property.privateRepository"></a>

- *Type:* `boolean`

---

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination.property.token"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarGitHubCodeDestination.property.description"></a>

- *Type:* `string`

---

### CodeStarListProjectsRequest <a name="aws-cdk-sdk.codestar.CodeStarListProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListProjectsRequest: codestar.CodeStarListProjectsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListProjectsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarListProjectsResult <a name="aws-cdk-sdk.codestar.CodeStarListProjectsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListProjectsResult: codestar.CodeStarListProjectsResult = { ... }
```

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarListProjectsResult.property.projects"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarProjectSummary`](#aws-cdk-sdk.codestar.CodeStarProjectSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListProjectsResult.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarListResourcesRequest <a name="aws-cdk-sdk.codestar.CodeStarListResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListResourcesRequest: codestar.CodeStarListResourcesRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarListResourcesRequest.property.projectId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarListResourcesResult <a name="aws-cdk-sdk.codestar.CodeStarListResourcesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListResourcesResult: codestar.CodeStarListResourcesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListResourcesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListResourcesResult.property.resources"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarResource`](#aws-cdk-sdk.codestar.CodeStarResource)[]

---

### CodeStarListTagsForProjectRequest <a name="aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListTagsForProjectRequest: codestar.CodeStarListTagsForProjectRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest.property.id"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarListTagsForProjectResult <a name="aws-cdk-sdk.codestar.CodeStarListTagsForProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListTagsForProjectResult: codestar.CodeStarListTagsForProjectResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTagsForProjectResult.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTagsForProjectResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarListTeamMembersRequest <a name="aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListTeamMembersRequest: codestar.CodeStarListTeamMembersRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest.property.projectId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarListTeamMembersResult <a name="aws-cdk-sdk.codestar.CodeStarListTeamMembersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListTeamMembersResult: codestar.CodeStarListTeamMembersResult = { ... }
```

##### `teamMembers`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTeamMembersResult.property.teamMembers"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarTeamMember`](#aws-cdk-sdk.codestar.CodeStarTeamMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListTeamMembersResult.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarListUserProfilesRequest <a name="aws-cdk-sdk.codestar.CodeStarListUserProfilesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListUserProfilesRequest: codestar.CodeStarListUserProfilesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListUserProfilesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListUserProfilesRequest.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarListUserProfilesResult <a name="aws-cdk-sdk.codestar.CodeStarListUserProfilesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarListUserProfilesResult: codestar.CodeStarListUserProfilesResult = { ... }
```

##### `userProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarListUserProfilesResult.property.userProfiles"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUserProfileSummary`](#aws-cdk-sdk.codestar.CodeStarUserProfileSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarListUserProfilesResult.property.nextToken"></a>

- *Type:* `string`

---

### CodeStarProjectStatus <a name="aws-cdk-sdk.codestar.CodeStarProjectStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarProjectStatus: codestar.CodeStarProjectStatus = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarProjectStatus.property.state"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarProjectStatus.property.reason"></a>

- *Type:* `string`

---

### CodeStarProjectSummary <a name="aws-cdk-sdk.codestar.CodeStarProjectSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarProjectSummary: codestar.CodeStarProjectSummary = { ... }
```

##### `projectArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarProjectSummary.property.projectArn"></a>

- *Type:* `string`

---

##### `projectId`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarProjectSummary.property.projectId"></a>

- *Type:* `string`

---

### CodeStarResource <a name="aws-cdk-sdk.codestar.CodeStarResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarResource: codestar.CodeStarResource = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResource.property.id"></a>

- *Type:* `string`

---

### CodeStarS3Location <a name="aws-cdk-sdk.codestar.CodeStarS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarS3Location: codestar.CodeStarS3Location = { ... }
```

##### `bucketKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarS3Location.property.bucketKey"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarS3Location.property.bucketName"></a>

- *Type:* `string`

---

### CodeStarTagProjectRequest <a name="aws-cdk-sdk.codestar.CodeStarTagProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarTagProjectRequest: codestar.CodeStarTagProjectRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarTagProjectRequest.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarTagProjectRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarTagProjectResult <a name="aws-cdk-sdk.codestar.CodeStarTagProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarTagProjectResult: codestar.CodeStarTagProjectResult = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarTagProjectResult.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarTeamMember <a name="aws-cdk-sdk.codestar.CodeStarTeamMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarTeamMember: codestar.CodeStarTeamMember = { ... }
```

##### `projectRole`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarTeamMember.property.projectRole"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarTeamMember.property.userArn"></a>

- *Type:* `string`

---

##### `remoteAccessAllowed`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarTeamMember.property.remoteAccessAllowed"></a>

- *Type:* `boolean`

---

### CodeStarToolchain <a name="aws-cdk-sdk.codestar.CodeStarToolchain"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarToolchain: codestar.CodeStarToolchain = { ... }
```

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarToolchain.property.source"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarToolchainSource`](#aws-cdk-sdk.codestar.CodeStarToolchainSource)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarToolchain.property.roleArn"></a>

- *Type:* `string`

---

##### `stackParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarToolchain.property.stackParameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### CodeStarToolchainSource <a name="aws-cdk-sdk.codestar.CodeStarToolchainSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarToolchainSource: codestar.CodeStarToolchainSource = { ... }
```

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarToolchainSource.property.s3"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarS3Location`](#aws-cdk-sdk.codestar.CodeStarS3Location)

---

### CodeStarUntagProjectRequest <a name="aws-cdk-sdk.codestar.CodeStarUntagProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUntagProjectRequest: codestar.CodeStarUntagProjectRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarUntagProjectRequest.property.id"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarUntagProjectRequest.property.tags"></a>

- *Type:* `string`[]

---

### CodeStarUntagProjectResult <a name="aws-cdk-sdk.codestar.CodeStarUntagProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUntagProjectResult: codestar.CodeStarUntagProjectResult = { ... }
```

### CodeStarUpdateProjectRequest <a name="aws-cdk-sdk.codestar.CodeStarUpdateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUpdateProjectRequest: codestar.CodeStarUpdateProjectRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateProjectRequest.property.id"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateProjectRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateProjectRequest.property.name"></a>

- *Type:* `string`

---

### CodeStarUpdateProjectResult <a name="aws-cdk-sdk.codestar.CodeStarUpdateProjectResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUpdateProjectResult: codestar.CodeStarUpdateProjectResult = { ... }
```

### CodeStarUpdateTeamMemberRequest <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUpdateTeamMemberRequest: codestar.CodeStarUpdateTeamMemberRequest = { ... }
```

##### `projectId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest.property.projectId"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest.property.userArn"></a>

- *Type:* `string`

---

##### `projectRole`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest.property.projectRole"></a>

- *Type:* `string`

---

##### `remoteAccessAllowed`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest.property.remoteAccessAllowed"></a>

- *Type:* `boolean`

---

### CodeStarUpdateTeamMemberResult <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUpdateTeamMemberResult: codestar.CodeStarUpdateTeamMemberResult = { ... }
```

##### `projectRole`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberResult.property.projectRole"></a>

- *Type:* `string`

---

##### `remoteAccessAllowed`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberResult.property.remoteAccessAllowed"></a>

- *Type:* `boolean`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberResult.property.userArn"></a>

- *Type:* `string`

---

### CodeStarUpdateUserProfileRequest <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUpdateUserProfileRequest: codestar.CodeStarUpdateUserProfileRequest = { ... }
```

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest.property.userArn"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest.property.emailAddress"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest.property.sshPublicKey"></a>

- *Type:* `string`

---

### CodeStarUpdateUserProfileResult <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUpdateUserProfileResult: codestar.CodeStarUpdateUserProfileResult = { ... }
```

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileResult.property.userArn"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileResult.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileResult.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileResult.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileResult.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUpdateUserProfileResult.property.sshPublicKey"></a>

- *Type:* `string`

---

### CodeStarUserProfileSummary <a name="aws-cdk-sdk.codestar.CodeStarUserProfileSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

const codeStarUserProfileSummary: codestar.CodeStarUserProfileSummary = { ... }
```

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUserProfileSummary.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUserProfileSummary.property.emailAddress"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUserProfileSummary.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codestar.CodeStarUserProfileSummary.property.userArn"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### CodeStarResponsesAssociateTeamMember <a name="aws-cdk-sdk.codestar.CodeStarResponsesAssociateTeamMember"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesAssociateTeamMember.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesAssociateTeamMember(__scope: Construct, __resources: string[], __input: CodeStarAssociateTeamMemberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesAssociateTeamMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesAssociateTeamMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesAssociateTeamMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest`](#aws-cdk-sdk.codestar.CodeStarAssociateTeamMemberRequest)

---



#### Properties <a name="Properties"></a>

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesAssociateTeamMember.property.clientRequestToken"></a>

- *Type:* `string`

---


### CodeStarResponsesCreateProject <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesCreateProject(__scope: Construct, __resources: string[], __input: CodeStarCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCreateProjectRequest`](#aws-cdk-sdk.codestar.CodeStarCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.property.id"></a>

- *Type:* `string`

---

##### `projectTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateProject.property.projectTemplateId"></a>

- *Type:* `string`

---


### CodeStarResponsesCreateUserProfile <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesCreateUserProfile(__scope: Construct, __resources: string[], __input: CodeStarCreateUserProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarCreateUserProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesCreateUserProfile.property.userArn"></a>

- *Type:* `string`

---


### CodeStarResponsesDeleteProject <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteProject"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteProject.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesDeleteProject(__scope: Construct, __resources: string[], __input: CodeStarDeleteProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest`](#aws-cdk-sdk.codestar.CodeStarDeleteProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteProject.property.projectArn"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteProject.property.stackId"></a>

- *Type:* `string`

---


### CodeStarResponsesDeleteUserProfile <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteUserProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteUserProfile.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesDeleteUserProfile(__scope: Construct, __resources: string[], __input: CodeStarDeleteUserProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteUserProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteUserProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteUserProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDeleteUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarDeleteUserProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDeleteUserProfile.property.userArn"></a>

- *Type:* `string`

---


### CodeStarResponsesDescribeProject <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesDescribeProject(__scope: Construct, __resources: string[], __input: CodeStarDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest`](#aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.name"></a>

- *Type:* `string`

---

##### `projectTemplateId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.projectTemplateId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.stackId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProject.property.status"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus`](#aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus)

---


### CodeStarResponsesDescribeProjectStatus <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesDescribeProjectStatus(__scope: Construct, __resources: string[], __input: CodeStarDescribeProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest`](#aws-cdk-sdk.codestar.CodeStarDescribeProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus.property.reason"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeProjectStatus.property.state"></a>

- *Type:* `string`

---


### CodeStarResponsesDescribeUserProfile <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesDescribeUserProfile(__scope: Construct, __resources: string[], __input: CodeStarDescribeUserProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarDescribeUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarDescribeUserProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesDescribeUserProfile.property.userArn"></a>

- *Type:* `string`

---


### CodeStarResponsesListProjects <a name="aws-cdk-sdk.codestar.CodeStarResponsesListProjects"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesListProjects.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesListProjects(__scope: Construct, __resources: string[], __input: CodeStarListProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListProjectsRequest`](#aws-cdk-sdk.codestar.CodeStarListProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projects`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListProjects.property.projects"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarProjectSummary`](#aws-cdk-sdk.codestar.CodeStarProjectSummary)[]

---


### CodeStarResponsesListResources <a name="aws-cdk-sdk.codestar.CodeStarResponsesListResources"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesListResources.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesListResources(__scope: Construct, __resources: string[], __input: CodeStarListResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListResourcesRequest`](#aws-cdk-sdk.codestar.CodeStarListResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListResources.property.nextToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListResources.property.resources"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarResource`](#aws-cdk-sdk.codestar.CodeStarResource)[]

---


### CodeStarResponsesListTagsForProject <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTagsForProject"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTagsForProject.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesListTagsForProject(__scope: Construct, __resources: string[], __input: CodeStarListTagsForProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTagsForProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTagsForProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTagsForProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest`](#aws-cdk-sdk.codestar.CodeStarListTagsForProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTagsForProject.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTagsForProject.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeStarResponsesListTeamMembers <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTeamMembers"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTeamMembers.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesListTeamMembers(__scope: Construct, __resources: string[], __input: CodeStarListTeamMembersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTeamMembers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTeamMembers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTeamMembers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest`](#aws-cdk-sdk.codestar.CodeStarListTeamMembersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTeamMembers.property.nextToken"></a>

- *Type:* `string`

---

##### `teamMembers`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListTeamMembers.property.teamMembers"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarTeamMember`](#aws-cdk-sdk.codestar.CodeStarTeamMember)[]

---


### CodeStarResponsesListUserProfiles <a name="aws-cdk-sdk.codestar.CodeStarResponsesListUserProfiles"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesListUserProfiles.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesListUserProfiles(__scope: Construct, __resources: string[], __input: CodeStarListUserProfilesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListUserProfiles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListUserProfiles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListUserProfiles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarListUserProfilesRequest`](#aws-cdk-sdk.codestar.CodeStarListUserProfilesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListUserProfiles.property.nextToken"></a>

- *Type:* `string`

---

##### `userProfiles`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesListUserProfiles.property.userProfiles"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUserProfileSummary`](#aws-cdk-sdk.codestar.CodeStarUserProfileSummary)[]

---


### CodeStarResponsesTagProject <a name="aws-cdk-sdk.codestar.CodeStarResponsesTagProject"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesTagProject.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesTagProject(__scope: Construct, __resources: string[], __input: CodeStarTagProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesTagProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesTagProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesTagProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarTagProjectRequest`](#aws-cdk-sdk.codestar.CodeStarTagProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesTagProject.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### CodeStarResponsesUpdateTeamMember <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesUpdateTeamMember(__scope: Construct, __resources: string[], __input: CodeStarUpdateTeamMemberRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest`](#aws-cdk-sdk.codestar.CodeStarUpdateTeamMemberRequest)

---



#### Properties <a name="Properties"></a>

##### `projectRole`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember.property.projectRole"></a>

- *Type:* `string`

---

##### `remoteAccessAllowed`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember.property.remoteAccessAllowed"></a>

- *Type:* `boolean`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateTeamMember.property.userArn"></a>

- *Type:* `string`

---


### CodeStarResponsesUpdateUserProfile <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile"></a>

#### Initializer <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.Initializer"></a>

```typescript
import { codestar } from 'aws-cdk-sdk'

new codestar.CodeStarResponsesUpdateUserProfile(__scope: Construct, __resources: string[], __input: CodeStarUpdateUserProfileRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest`](#aws-cdk-sdk.codestar.CodeStarUpdateUserProfileRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.property.displayName"></a>

- *Type:* `string`

---

##### `emailAddress`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.property.emailAddress"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `sshPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.property.sshPublicKey"></a>

- *Type:* `string`

---

##### `userArn`<sup>Required</sup> <a name="aws-cdk-sdk.codestar.CodeStarResponsesUpdateUserProfile.property.userArn"></a>

- *Type:* `string`

---



