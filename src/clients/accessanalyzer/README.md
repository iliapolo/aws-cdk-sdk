# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### AccessAnalyzerClient <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `applyArchiveRule` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.applyArchiveRule"></a>

```typescript
public applyArchiveRule(input: AccessAnalyzerApplyArchiveRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerApplyArchiveRuleRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerApplyArchiveRuleRequest)

---

##### `createAnalyzer` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.createAnalyzer"></a>

```typescript
public createAnalyzer(input: AccessAnalyzerCreateAnalyzerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest)

---

##### `createArchiveRule` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.createArchiveRule"></a>

```typescript
public createArchiveRule(input: AccessAnalyzerCreateArchiveRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest)

---

##### `deleteAnalyzer` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.deleteAnalyzer"></a>

```typescript
public deleteAnalyzer(input: AccessAnalyzerDeleteAnalyzerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteAnalyzerRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteAnalyzerRequest)

---

##### `deleteArchiveRule` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.deleteArchiveRule"></a>

```typescript
public deleteArchiveRule(input: AccessAnalyzerDeleteArchiveRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteArchiveRuleRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteArchiveRuleRequest)

---

##### `fetchAnalyzedResource` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.fetchAnalyzedResource"></a>

```typescript
public fetchAnalyzedResource(input: AccessAnalyzerGetAnalyzedResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest)

---

##### `fetchAnalyzer` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.fetchAnalyzer"></a>

```typescript
public fetchAnalyzer(input: AccessAnalyzerGetAnalyzerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest)

---

##### `fetchArchiveRule` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.fetchArchiveRule"></a>

```typescript
public fetchArchiveRule(input: AccessAnalyzerGetArchiveRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest)

---

##### `fetchFinding` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.fetchFinding"></a>

```typescript
public fetchFinding(input: AccessAnalyzerGetFindingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest)

---

##### `listAnalyzedResources` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.listAnalyzedResources"></a>

```typescript
public listAnalyzedResources(input: AccessAnalyzerListAnalyzedResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest)

---

##### `listAnalyzers` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.listAnalyzers"></a>

```typescript
public listAnalyzers(input: AccessAnalyzerListAnalyzersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest)

---

##### `listArchiveRules` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.listArchiveRules"></a>

```typescript
public listArchiveRules(input: AccessAnalyzerListArchiveRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest)

---

##### `listFindings` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.listFindings"></a>

```typescript
public listFindings(input: AccessAnalyzerListFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: AccessAnalyzerListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceRequest)

---

##### `startResourceScan` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.startResourceScan"></a>

```typescript
public startResourceScan(input: AccessAnalyzerStartResourceScanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerStartResourceScanRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerStartResourceScanRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.tagResource"></a>

```typescript
public tagResource(input: AccessAnalyzerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerTagResourceRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.untagResource"></a>

```typescript
public untagResource(input: AccessAnalyzerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerUntagResourceRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerUntagResourceRequest)

---

##### `updateArchiveRule` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.updateArchiveRule"></a>

```typescript
public updateArchiveRule(input: AccessAnalyzerUpdateArchiveRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest)

---

##### `updateFindings` <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.updateFindings"></a>

```typescript
public updateFindings(input: AccessAnalyzerUpdateFindingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest)

---




## Structs <a name="Structs"></a>

### AccessAnalyzerAnalyzedResource <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerAnalyzedResource: accessanalyzer.AccessAnalyzerAnalyzedResource = { ... }
```

##### `analyzedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.analyzedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.createdAt"></a>

- *Type:* `string`

---

##### `isPublic`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.isPublic"></a>

- *Type:* `boolean`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.resourceOwnerAccount"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.resourceType"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.updatedAt"></a>

- *Type:* `string`

---

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.actions"></a>

- *Type:* `string`[]

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.error"></a>

- *Type:* `string`

---

##### `sharedVia`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.sharedVia"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource.property.status"></a>

- *Type:* `string`

---

### AccessAnalyzerAnalyzedResourceSummary <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerAnalyzedResourceSummary: accessanalyzer.AccessAnalyzerAnalyzedResourceSummary = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary.property.resourceOwnerAccount"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary.property.resourceType"></a>

- *Type:* `string`

---

### AccessAnalyzerAnalyzerSummary <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerAnalyzerSummary: accessanalyzer.AccessAnalyzerAnalyzerSummary = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.type"></a>

- *Type:* `string`

---

##### `lastResourceAnalyzed`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.lastResourceAnalyzed"></a>

- *Type:* `string`

---

##### `lastResourceAnalyzedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.lastResourceAnalyzedAt"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.statusReason"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerStatusReason`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerStatusReason)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AccessAnalyzerApplyArchiveRuleRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerApplyArchiveRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerApplyArchiveRuleRequest: accessanalyzer.AccessAnalyzerApplyArchiveRuleRequest = { ... }
```

##### `analyzerArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerApplyArchiveRuleRequest.property.analyzerArn"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerApplyArchiveRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerApplyArchiveRuleRequest.property.clientToken"></a>

- *Type:* `string`

---

### AccessAnalyzerArchiveRuleSummary <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerArchiveRuleSummary: accessanalyzer.AccessAnalyzerArchiveRuleSummary = { ... }
```

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary.property.filter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion)}

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary.property.ruleName"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary.property.updatedAt"></a>

- *Type:* `string`

---

### AccessAnalyzerCreateAnalyzerRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerCreateAnalyzerRequest: accessanalyzer.AccessAnalyzerCreateAnalyzerRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest.property.analyzerName"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest.property.type"></a>

- *Type:* `string`

---

##### `archiveRules`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest.property.archiveRules"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerInlineArchiveRule`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerInlineArchiveRule)[]

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AccessAnalyzerCreateAnalyzerResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerCreateAnalyzerResponse: accessanalyzer.AccessAnalyzerCreateAnalyzerResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerResponse.property.arn"></a>

- *Type:* `string`

---

### AccessAnalyzerCreateArchiveRuleRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerCreateArchiveRuleRequest: accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest.property.analyzerName"></a>

- *Type:* `string`

---

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest.property.filter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion)}

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateArchiveRuleRequest.property.clientToken"></a>

- *Type:* `string`

---

### AccessAnalyzerCriterion <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerCriterion: accessanalyzer.AccessAnalyzerCriterion = { ... }
```

##### `contains`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion.property.contains"></a>

- *Type:* `string`[]

---

##### `eq`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion.property.eq"></a>

- *Type:* `string`[]

---

##### `exists`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion.property.exists"></a>

- *Type:* `boolean`

---

##### `neq`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion.property.neq"></a>

- *Type:* `string`[]

---

### AccessAnalyzerDeleteAnalyzerRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteAnalyzerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerDeleteAnalyzerRequest: accessanalyzer.AccessAnalyzerDeleteAnalyzerRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteAnalyzerRequest.property.analyzerName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteAnalyzerRequest.property.clientToken"></a>

- *Type:* `string`

---

### AccessAnalyzerDeleteArchiveRuleRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteArchiveRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerDeleteArchiveRuleRequest: accessanalyzer.AccessAnalyzerDeleteArchiveRuleRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteArchiveRuleRequest.property.analyzerName"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteArchiveRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerDeleteArchiveRuleRequest.property.clientToken"></a>

- *Type:* `string`

---

### AccessAnalyzerFinding <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerFinding: accessanalyzer.AccessAnalyzerFinding = { ... }
```

##### `analyzedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.analyzedAt"></a>

- *Type:* `string`

---

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.condition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.id"></a>

- *Type:* `string`

---

##### `resourceOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.resourceOwnerAccount"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.updatedAt"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.action"></a>

- *Type:* `string`[]

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.error"></a>

- *Type:* `string`

---

##### `isPublic`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.isPublic"></a>

- *Type:* `boolean`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.principal"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.resource"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding.property.sources"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource)[]

---

### AccessAnalyzerFindingSource <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerFindingSource: accessanalyzer.AccessAnalyzerFindingSource = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource.property.type"></a>

- *Type:* `string`

---

##### `detail`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource.property.detail"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSourceDetail`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSourceDetail)

---

### AccessAnalyzerFindingSourceDetail <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSourceDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerFindingSourceDetail: accessanalyzer.AccessAnalyzerFindingSourceDetail = { ... }
```

##### `accessPointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSourceDetail.property.accessPointArn"></a>

- *Type:* `string`

---

### AccessAnalyzerFindingSummary <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerFindingSummary: accessanalyzer.AccessAnalyzerFindingSummary = { ... }
```

##### `analyzedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.analyzedAt"></a>

- *Type:* `string`

---

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.condition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.id"></a>

- *Type:* `string`

---

##### `resourceOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.resourceOwnerAccount"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.updatedAt"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.action"></a>

- *Type:* `string`[]

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.error"></a>

- *Type:* `string`

---

##### `isPublic`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.isPublic"></a>

- *Type:* `boolean`

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.principal"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.resource"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary.property.sources"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource)[]

---

### AccessAnalyzerGetAnalyzedResourceRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetAnalyzedResourceRequest: accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest = { ... }
```

##### `analyzerArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest.property.analyzerArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AccessAnalyzerGetAnalyzedResourceResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetAnalyzedResourceResponse: accessanalyzer.AccessAnalyzerGetAnalyzedResourceResponse = { ... }
```

##### `resource`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceResponse.property.resource"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResource)

---

### AccessAnalyzerGetAnalyzerRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetAnalyzerRequest: accessanalyzer.AccessAnalyzerGetAnalyzerRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest.property.analyzerName"></a>

- *Type:* `string`

---

### AccessAnalyzerGetAnalyzerResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetAnalyzerResponse: accessanalyzer.AccessAnalyzerGetAnalyzerResponse = { ... }
```

##### `analyzer`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerResponse.property.analyzer"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary)

---

### AccessAnalyzerGetArchiveRuleRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetArchiveRuleRequest: accessanalyzer.AccessAnalyzerGetArchiveRuleRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest.property.analyzerName"></a>

- *Type:* `string`

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

### AccessAnalyzerGetArchiveRuleResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetArchiveRuleResponse: accessanalyzer.AccessAnalyzerGetArchiveRuleResponse = { ... }
```

##### `archiveRule`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleResponse.property.archiveRule"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary)

---

### AccessAnalyzerGetFindingRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetFindingRequest: accessanalyzer.AccessAnalyzerGetFindingRequest = { ... }
```

##### `analyzerArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest.property.analyzerArn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest.property.id"></a>

- *Type:* `string`

---

### AccessAnalyzerGetFindingResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerGetFindingResponse: accessanalyzer.AccessAnalyzerGetFindingResponse = { ... }
```

##### `finding`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingResponse.property.finding"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerFinding)

---

### AccessAnalyzerInlineArchiveRule <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerInlineArchiveRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerInlineArchiveRule: accessanalyzer.AccessAnalyzerInlineArchiveRule = { ... }
```

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerInlineArchiveRule.property.filter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion)}

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerInlineArchiveRule.property.ruleName"></a>

- *Type:* `string`

---

### AccessAnalyzerListAnalyzedResourcesRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListAnalyzedResourcesRequest: accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest = { ... }
```

##### `analyzerArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest.property.analyzerArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest.property.resourceType"></a>

- *Type:* `string`

---

### AccessAnalyzerListAnalyzedResourcesResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListAnalyzedResourcesResponse: accessanalyzer.AccessAnalyzerListAnalyzedResourcesResponse = { ... }
```

##### `analyzedResources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesResponse.property.analyzedResources"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

### AccessAnalyzerListAnalyzersRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListAnalyzersRequest: accessanalyzer.AccessAnalyzerListAnalyzersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest.property.type"></a>

- *Type:* `string`

---

### AccessAnalyzerListAnalyzersResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListAnalyzersResponse: accessanalyzer.AccessAnalyzerListAnalyzersResponse = { ... }
```

##### `analyzers`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersResponse.property.analyzers"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersResponse.property.nextToken"></a>

- *Type:* `string`

---

### AccessAnalyzerListArchiveRulesRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListArchiveRulesRequest: accessanalyzer.AccessAnalyzerListArchiveRulesRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest.property.analyzerName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

### AccessAnalyzerListArchiveRulesResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListArchiveRulesResponse: accessanalyzer.AccessAnalyzerListArchiveRulesResponse = { ... }
```

##### `archiveRules`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesResponse.property.archiveRules"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesResponse.property.nextToken"></a>

- *Type:* `string`

---

### AccessAnalyzerListFindingsRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListFindingsRequest: accessanalyzer.AccessAnalyzerListFindingsRequest = { ... }
```

##### `analyzerArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest.property.analyzerArn"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest.property.filter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion)}

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest.property.sort"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerSortCriteria`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerSortCriteria)

---

### AccessAnalyzerListFindingsResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListFindingsResponse: accessanalyzer.AccessAnalyzerListFindingsResponse = { ... }
```

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsResponse.property.findings"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsResponse.property.nextToken"></a>

- *Type:* `string`

---

### AccessAnalyzerListTagsForResourceRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListTagsForResourceRequest: accessanalyzer.AccessAnalyzerListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AccessAnalyzerListTagsForResourceResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerListTagsForResourceResponse: accessanalyzer.AccessAnalyzerListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AccessAnalyzerSortCriteria <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerSortCriteria: accessanalyzer.AccessAnalyzerSortCriteria = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerSortCriteria.property.attributeName"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerSortCriteria.property.orderBy"></a>

- *Type:* `string`

---

### AccessAnalyzerStartResourceScanRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerStartResourceScanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerStartResourceScanRequest: accessanalyzer.AccessAnalyzerStartResourceScanRequest = { ... }
```

##### `analyzerArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerStartResourceScanRequest.property.analyzerArn"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerStartResourceScanRequest.property.resourceArn"></a>

- *Type:* `string`

---

### AccessAnalyzerStatusReason <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerStatusReason"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerStatusReason: accessanalyzer.AccessAnalyzerStatusReason = { ... }
```

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerStatusReason.property.code"></a>

- *Type:* `string`

---

### AccessAnalyzerTagResourceRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerTagResourceRequest: accessanalyzer.AccessAnalyzerTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### AccessAnalyzerTagResourceResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerTagResourceResponse: accessanalyzer.AccessAnalyzerTagResourceResponse = { ... }
```

### AccessAnalyzerUntagResourceRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerUntagResourceRequest: accessanalyzer.AccessAnalyzerUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### AccessAnalyzerUntagResourceResponse <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerUntagResourceResponse: accessanalyzer.AccessAnalyzerUntagResourceResponse = { ... }
```

### AccessAnalyzerUpdateArchiveRuleRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerUpdateArchiveRuleRequest: accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest = { ... }
```

##### `analyzerName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest.property.analyzerName"></a>

- *Type:* `string`

---

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest.property.filter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion)}

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest.property.ruleName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateArchiveRuleRequest.property.clientToken"></a>

- *Type:* `string`

---

### AccessAnalyzerUpdateFindingsRequest <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

const accessAnalyzerUpdateFindingsRequest: accessanalyzer.AccessAnalyzerUpdateFindingsRequest = { ... }
```

##### `analyzerArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest.property.analyzerArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest.property.status"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `ids`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest.property.ids"></a>

- *Type:* `string`[]

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerUpdateFindingsRequest.property.resourceArn"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AccessAnalyzerResponsesCreateAnalyzer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesCreateAnalyzer"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesCreateAnalyzer.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesCreateAnalyzer(__scope: Construct, __resources: string[], __input: AccessAnalyzerCreateAnalyzerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesCreateAnalyzer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesCreateAnalyzer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesCreateAnalyzer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCreateAnalyzerRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesCreateAnalyzer.property.arn"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesFetchAnalyzedResource <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResource"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResource.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResource(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetAnalyzedResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResource.property.resource"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource)

---


### AccessAnalyzerResponsesFetchAnalyzedResourceResource <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetAnalyzedResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzedResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.actions"></a>

- *Type:* `string`[]

---

##### `analyzedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.analyzedAt"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.createdAt"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.error"></a>

- *Type:* `string`

---

##### `isPublic`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.isPublic"></a>

- *Type:* `boolean`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.resourceOwnerAccount"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.resourceType"></a>

- *Type:* `string`

---

##### `sharedVia`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.sharedVia"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzedResourceResource.property.updatedAt"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesFetchAnalyzer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzer"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzer.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchAnalyzer(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetAnalyzerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest)

---



#### Properties <a name="Properties"></a>

##### `analyzer`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzer.property.analyzer"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer)

---


### AccessAnalyzerResponsesFetchAnalyzerAnalyzer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetAnalyzerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.createdAt"></a>

- *Type:* `string`

---

##### `lastResourceAnalyzed`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.lastResourceAnalyzed"></a>

- *Type:* `string`

---

##### `lastResourceAnalyzedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.lastResourceAnalyzedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.statusReason"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzer.property.type"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetAnalyzerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetAnalyzerRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchAnalyzerAnalyzerStatusReason.property.code"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesFetchArchiveRule <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRule"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRule.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchArchiveRule(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetArchiveRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `archiveRule`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRule.property.archiveRule"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule)

---


### AccessAnalyzerResponsesFetchArchiveRuleArchiveRule <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetArchiveRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetArchiveRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.property.createdAt"></a>

- *Type:* `string`

---

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.property.filter"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerCriterion)}

---

##### `ruleName`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.property.ruleName"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchArchiveRuleArchiveRule.property.updatedAt"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesFetchFinding <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFinding"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFinding.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchFinding(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetFindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFinding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFinding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFinding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest)

---



#### Properties <a name="Properties"></a>

##### `finding`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFinding.property.finding"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding)

---


### AccessAnalyzerResponsesFetchFindingFinding <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding(__scope: Construct, __resources: string[], __input: AccessAnalyzerGetFindingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerGetFindingRequest)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.action"></a>

- *Type:* `string`[]

---

##### `analyzedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.analyzedAt"></a>

- *Type:* `string`

---

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.condition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.createdAt"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.error"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.id"></a>

- *Type:* `string`

---

##### `isPublic`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.isPublic"></a>

- *Type:* `boolean`

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.principal"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resource`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.resource"></a>

- *Type:* `string`

---

##### `resourceOwnerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.resourceOwnerAccount"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.resourceType"></a>

- *Type:* `string`

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.sources"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSource)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.status"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesFetchFindingFinding.property.updatedAt"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesListAnalyzedResources <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources(__scope: Construct, __resources: string[], __input: AccessAnalyzerListAnalyzedResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzedResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `analyzedResources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources.property.analyzedResources"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzedResourceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzedResources.property.nextToken"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesListAnalyzers <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzers"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzers.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesListAnalyzers(__scope: Construct, __resources: string[], __input: AccessAnalyzerListAnalyzersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListAnalyzersRequest)

---



#### Properties <a name="Properties"></a>

##### `analyzers`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzers.property.analyzers"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerAnalyzerSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListAnalyzers.property.nextToken"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesListArchiveRules <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListArchiveRules"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListArchiveRules.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesListArchiveRules(__scope: Construct, __resources: string[], __input: AccessAnalyzerListArchiveRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListArchiveRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListArchiveRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListArchiveRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListArchiveRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `archiveRules`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListArchiveRules.property.archiveRules"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerArchiveRuleSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListArchiveRules.property.nextToken"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesListFindings <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListFindings"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListFindings.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesListFindings(__scope: Construct, __resources: string[], __input: AccessAnalyzerListFindingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListFindings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListFindings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListFindings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListFindingsRequest)

---



#### Properties <a name="Properties"></a>

##### `findings`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListFindings.property.findings"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerFindingSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListFindings.property.nextToken"></a>

- *Type:* `string`

---


### AccessAnalyzerResponsesListTagsForResource <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListTagsForResource.Initializer"></a>

```typescript
import { accessanalyzer } from 'aws-cdk-sdk'

new accessanalyzer.AccessAnalyzerResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: AccessAnalyzerListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceRequest`](#aws-cdk-sdk.accessanalyzer.AccessAnalyzerListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.accessanalyzer.AccessAnalyzerResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---



