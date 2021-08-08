# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### OutpostsClient <a name="aws-cdk-sdk.outposts.OutpostsClient"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsClient.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createOutpost` <a name="aws-cdk-sdk.outposts.OutpostsClient.createOutpost"></a>

```typescript
public createOutpost(input: OutpostsCreateOutpostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsCreateOutpostInput`](#aws-cdk-sdk.outposts.OutpostsCreateOutpostInput)

---

##### `deleteOutpost` <a name="aws-cdk-sdk.outposts.OutpostsClient.deleteOutpost"></a>

```typescript
public deleteOutpost(input: OutpostsDeleteOutpostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsDeleteOutpostInput`](#aws-cdk-sdk.outposts.OutpostsDeleteOutpostInput)

---

##### `deleteSite` <a name="aws-cdk-sdk.outposts.OutpostsClient.deleteSite"></a>

```typescript
public deleteSite(input: OutpostsDeleteSiteInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsDeleteSiteInput`](#aws-cdk-sdk.outposts.OutpostsDeleteSiteInput)

---

##### `fetchOutpost` <a name="aws-cdk-sdk.outposts.OutpostsClient.fetchOutpost"></a>

```typescript
public fetchOutpost(input: OutpostsGetOutpostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsGetOutpostInput`](#aws-cdk-sdk.outposts.OutpostsGetOutpostInput)

---

##### `fetchOutpostInstanceTypes` <a name="aws-cdk-sdk.outposts.OutpostsClient.fetchOutpostInstanceTypes"></a>

```typescript
public fetchOutpostInstanceTypes(input: OutpostsGetOutpostInstanceTypesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput`](#aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput)

---

##### `listOutposts` <a name="aws-cdk-sdk.outposts.OutpostsClient.listOutposts"></a>

```typescript
public listOutposts(input: OutpostsListOutpostsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsListOutpostsInput`](#aws-cdk-sdk.outposts.OutpostsListOutpostsInput)

---

##### `listSites` <a name="aws-cdk-sdk.outposts.OutpostsClient.listSites"></a>

```typescript
public listSites(input: OutpostsListSitesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsListSitesInput`](#aws-cdk-sdk.outposts.OutpostsListSitesInput)

---




## Structs <a name="Structs"></a>

### OutpostsCreateOutpostInput <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsCreateOutpostInput: outposts.OutpostsCreateOutpostInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostInput.property.name"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostInput.property.siteId"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostInput.property.availabilityZone"></a>

- *Type:* `string`

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostInput.property.availabilityZoneId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### OutpostsCreateOutpostOutput <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsCreateOutpostOutput: outposts.OutpostsCreateOutpostOutput = { ... }
```

##### `outpost`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsCreateOutpostOutput.property.outpost"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsOutpost`](#aws-cdk-sdk.outposts.OutpostsOutpost)

---

### OutpostsDeleteOutpostInput <a name="aws-cdk-sdk.outposts.OutpostsDeleteOutpostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsDeleteOutpostInput: outposts.OutpostsDeleteOutpostInput = { ... }
```

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsDeleteOutpostInput.property.outpostId"></a>

- *Type:* `string`

---

### OutpostsDeleteOutpostOutput <a name="aws-cdk-sdk.outposts.OutpostsDeleteOutpostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsDeleteOutpostOutput: outposts.OutpostsDeleteOutpostOutput = { ... }
```

### OutpostsDeleteSiteInput <a name="aws-cdk-sdk.outposts.OutpostsDeleteSiteInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsDeleteSiteInput: outposts.OutpostsDeleteSiteInput = { ... }
```

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsDeleteSiteInput.property.siteId"></a>

- *Type:* `string`

---

### OutpostsDeleteSiteOutput <a name="aws-cdk-sdk.outposts.OutpostsDeleteSiteOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsDeleteSiteOutput: outposts.OutpostsDeleteSiteOutput = { ... }
```

### OutpostsGetOutpostInput <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsGetOutpostInput: outposts.OutpostsGetOutpostInput = { ... }
```

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInput.property.outpostId"></a>

- *Type:* `string`

---

### OutpostsGetOutpostInstanceTypesInput <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsGetOutpostInstanceTypesInput: outposts.OutpostsGetOutpostInstanceTypesInput = { ... }
```

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput.property.outpostId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput.property.nextToken"></a>

- *Type:* `string`

---

### OutpostsGetOutpostInstanceTypesOutput <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsGetOutpostInstanceTypesOutput: outposts.OutpostsGetOutpostInstanceTypesOutput = { ... }
```

##### `instanceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesOutput.property.instanceTypes"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsInstanceTypeItem`](#aws-cdk-sdk.outposts.OutpostsInstanceTypeItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `outpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesOutput.property.outpostArn"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesOutput.property.outpostId"></a>

- *Type:* `string`

---

### OutpostsGetOutpostOutput <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsGetOutpostOutput: outposts.OutpostsGetOutpostOutput = { ... }
```

##### `outpost`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsGetOutpostOutput.property.outpost"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsOutpost`](#aws-cdk-sdk.outposts.OutpostsOutpost)

---

### OutpostsInstanceTypeItem <a name="aws-cdk-sdk.outposts.OutpostsInstanceTypeItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsInstanceTypeItem: outposts.OutpostsInstanceTypeItem = { ... }
```

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsInstanceTypeItem.property.instanceType"></a>

- *Type:* `string`

---

### OutpostsListOutpostsInput <a name="aws-cdk-sdk.outposts.OutpostsListOutpostsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsListOutpostsInput: outposts.OutpostsListOutpostsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListOutpostsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListOutpostsInput.property.nextToken"></a>

- *Type:* `string`

---

### OutpostsListOutpostsOutput <a name="aws-cdk-sdk.outposts.OutpostsListOutpostsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsListOutpostsOutput: outposts.OutpostsListOutpostsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListOutpostsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `outposts`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListOutpostsOutput.property.outposts"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsOutpost`](#aws-cdk-sdk.outposts.OutpostsOutpost)[]

---

### OutpostsListSitesInput <a name="aws-cdk-sdk.outposts.OutpostsListSitesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsListSitesInput: outposts.OutpostsListSitesInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListSitesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListSitesInput.property.nextToken"></a>

- *Type:* `string`

---

### OutpostsListSitesOutput <a name="aws-cdk-sdk.outposts.OutpostsListSitesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsListSitesOutput: outposts.OutpostsListSitesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListSitesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `sites`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsListSitesOutput.property.sites"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsSite`](#aws-cdk-sdk.outposts.OutpostsSite)[]

---

### OutpostsOutpost <a name="aws-cdk-sdk.outposts.OutpostsOutpost"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsOutpost: outposts.OutpostsOutpost = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.availabilityZone"></a>

- *Type:* `string`

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.availabilityZoneId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.description"></a>

- *Type:* `string`

---

##### `lifeCycleStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.lifeCycleStatus"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.name"></a>

- *Type:* `string`

---

##### `outpostArn`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.outpostArn"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.outpostId"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.ownerId"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.siteId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsOutpost.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### OutpostsSite <a name="aws-cdk-sdk.outposts.OutpostsSite"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

const outpostsSite: outposts.OutpostsSite = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsSite.property.accountId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsSite.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsSite.property.name"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsSite.property.siteId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.outposts.OutpostsSite.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

## Classes <a name="Classes"></a>

### OutpostsResponsesCreateOutpost <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpost"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpost.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsResponsesCreateOutpost(__scope: Construct, __resources: string[], __input: OutpostsCreateOutpostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsCreateOutpostInput`](#aws-cdk-sdk.outposts.OutpostsCreateOutpostInput)

---



#### Properties <a name="Properties"></a>

##### `outpost`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpost.property.outpost"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost`](#aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost)

---


### OutpostsResponsesCreateOutpostOutpost <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsResponsesCreateOutpostOutpost(__scope: Construct, __resources: string[], __input: OutpostsCreateOutpostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsCreateOutpostInput`](#aws-cdk-sdk.outposts.OutpostsCreateOutpostInput)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.availabilityZone"></a>

- *Type:* `string`

---

##### `availabilityZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.availabilityZoneId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.description"></a>

- *Type:* `string`

---

##### `lifeCycleStatus`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.lifeCycleStatus"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.name"></a>

- *Type:* `string`

---

##### `outpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.outpostArn"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.outpostId"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.ownerId"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.siteId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesCreateOutpostOutpost.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### OutpostsResponsesFetchOutpost <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpost"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpost.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsResponsesFetchOutpost(__scope: Construct, __resources: string[], __input: OutpostsGetOutpostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsGetOutpostInput`](#aws-cdk-sdk.outposts.OutpostsGetOutpostInput)

---



#### Properties <a name="Properties"></a>

##### `outpost`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpost.property.outpost"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost`](#aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost)

---


### OutpostsResponsesFetchOutpostInstanceTypes <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsResponsesFetchOutpostInstanceTypes(__scope: Construct, __resources: string[], __input: OutpostsGetOutpostInstanceTypesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput`](#aws-cdk-sdk.outposts.OutpostsGetOutpostInstanceTypesInput)

---



#### Properties <a name="Properties"></a>

##### `instanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.property.instanceTypes"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsInstanceTypeItem`](#aws-cdk-sdk.outposts.OutpostsInstanceTypeItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.property.nextToken"></a>

- *Type:* `string`

---

##### `outpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.property.outpostArn"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostInstanceTypes.property.outpostId"></a>

- *Type:* `string`

---


### OutpostsResponsesFetchOutpostOutpost <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsResponsesFetchOutpostOutpost(__scope: Construct, __resources: string[], __input: OutpostsGetOutpostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsGetOutpostInput`](#aws-cdk-sdk.outposts.OutpostsGetOutpostInput)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.availabilityZone"></a>

- *Type:* `string`

---

##### `availabilityZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.availabilityZoneId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.description"></a>

- *Type:* `string`

---

##### `lifeCycleStatus`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.lifeCycleStatus"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.name"></a>

- *Type:* `string`

---

##### `outpostArn`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.outpostArn"></a>

- *Type:* `string`

---

##### `outpostId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.outpostId"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.ownerId"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.siteId"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesFetchOutpostOutpost.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### OutpostsResponsesListOutposts <a name="aws-cdk-sdk.outposts.OutpostsResponsesListOutposts"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsResponsesListOutposts.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsResponsesListOutposts(__scope: Construct, __resources: string[], __input: OutpostsListOutpostsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListOutposts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListOutposts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListOutposts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsListOutpostsInput`](#aws-cdk-sdk.outposts.OutpostsListOutpostsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListOutposts.property.nextToken"></a>

- *Type:* `string`

---

##### `outposts`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListOutposts.property.outposts"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsOutpost`](#aws-cdk-sdk.outposts.OutpostsOutpost)[]

---


### OutpostsResponsesListSites <a name="aws-cdk-sdk.outposts.OutpostsResponsesListSites"></a>

#### Initializer <a name="aws-cdk-sdk.outposts.OutpostsResponsesListSites.Initializer"></a>

```typescript
import { outposts } from 'aws-cdk-sdk'

new outposts.OutpostsResponsesListSites(__scope: Construct, __resources: string[], __input: OutpostsListSitesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListSites.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListSites.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListSites.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsListSitesInput`](#aws-cdk-sdk.outposts.OutpostsListSitesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListSites.property.nextToken"></a>

- *Type:* `string`

---

##### `sites`<sup>Required</sup> <a name="aws-cdk-sdk.outposts.OutpostsResponsesListSites.property.sites"></a>

- *Type:* [`aws-cdk-sdk.outposts.OutpostsSite`](#aws-cdk-sdk.outposts.OutpostsSite)[]

---



