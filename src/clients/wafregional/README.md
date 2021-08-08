# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### WafRegionalClient <a name="aws-cdk-sdk.wafregional.WafRegionalClient"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WafRegionalClient.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WafRegionalClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateWebAcl` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.associateWebAcl"></a>

```typescript
public associateWebAcl(input: WafRegionalAssociateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalAssociateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalAssociateWebAclRequest)

---

##### `createByteMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createByteMatchSet"></a>

```typescript
public createByteMatchSet(input: WafRegionalCreateByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest)

---

##### `createGeoMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createGeoMatchSet"></a>

```typescript
public createGeoMatchSet(input: WafRegionalCreateGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest)

---

##### `createIpSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createIpSet"></a>

```typescript
public createIpSet(input: WafRegionalCreateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest)

---

##### `createRateBasedRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createRateBasedRule"></a>

```typescript
public createRateBasedRule(input: WafRegionalCreateRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest)

---

##### `createRegexMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createRegexMatchSet"></a>

```typescript
public createRegexMatchSet(input: WafRegionalCreateRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest)

---

##### `createRegexPatternSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createRegexPatternSet"></a>

```typescript
public createRegexPatternSet(input: WafRegionalCreateRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest)

---

##### `createRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createRule"></a>

```typescript
public createRule(input: WafRegionalCreateRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest)

---

##### `createRuleGroup` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createRuleGroup"></a>

```typescript
public createRuleGroup(input: WafRegionalCreateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest)

---

##### `createSizeConstraintSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createSizeConstraintSet"></a>

```typescript
public createSizeConstraintSet(input: WafRegionalCreateSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest)

---

##### `createSqlInjectionMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createSqlInjectionMatchSet"></a>

```typescript
public createSqlInjectionMatchSet(input: WafRegionalCreateSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest)

---

##### `createWebAcl` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createWebAcl"></a>

```typescript
public createWebAcl(input: WafRegionalCreateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest)

---

##### `createWebAclMigrationStack` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createWebAclMigrationStack"></a>

```typescript
public createWebAclMigrationStack(input: WafRegionalCreateWebAclMigrationStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest)

---

##### `createXssMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.createXssMatchSet"></a>

```typescript
public createXssMatchSet(input: WafRegionalCreateXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest)

---

##### `deleteByteMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteByteMatchSet"></a>

```typescript
public deleteByteMatchSet(input: WafRegionalDeleteByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetRequest)

---

##### `deleteGeoMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteGeoMatchSet"></a>

```typescript
public deleteGeoMatchSet(input: WafRegionalDeleteGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetRequest)

---

##### `deleteIpSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteIpSet"></a>

```typescript
public deleteIpSet(input: WafRegionalDeleteIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetRequest)

---

##### `deleteLoggingConfiguration` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteLoggingConfiguration"></a>

```typescript
public deleteLoggingConfiguration(input: WafRegionalDeleteLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteLoggingConfigurationRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteLoggingConfigurationRequest)

---

##### `deletePermissionPolicy` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deletePermissionPolicy"></a>

```typescript
public deletePermissionPolicy(input: WafRegionalDeletePermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeletePermissionPolicyRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeletePermissionPolicyRequest)

---

##### `deleteRateBasedRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteRateBasedRule"></a>

```typescript
public deleteRateBasedRule(input: WafRegionalDeleteRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleRequest)

---

##### `deleteRegexMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteRegexMatchSet"></a>

```typescript
public deleteRegexMatchSet(input: WafRegionalDeleteRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetRequest)

---

##### `deleteRegexPatternSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteRegexPatternSet"></a>

```typescript
public deleteRegexPatternSet(input: WafRegionalDeleteRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetRequest)

---

##### `deleteRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteRule"></a>

```typescript
public deleteRule(input: WafRegionalDeleteRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRuleRequest)

---

##### `deleteRuleGroup` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteRuleGroup"></a>

```typescript
public deleteRuleGroup(input: WafRegionalDeleteRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupRequest)

---

##### `deleteSizeConstraintSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteSizeConstraintSet"></a>

```typescript
public deleteSizeConstraintSet(input: WafRegionalDeleteSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetRequest)

---

##### `deleteSqlInjectionMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteSqlInjectionMatchSet"></a>

```typescript
public deleteSqlInjectionMatchSet(input: WafRegionalDeleteSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest)

---

##### `deleteWebAcl` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteWebAcl"></a>

```typescript
public deleteWebAcl(input: WafRegionalDeleteWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclRequest)

---

##### `deleteXssMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.deleteXssMatchSet"></a>

```typescript
public deleteXssMatchSet(input: WafRegionalDeleteXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetRequest)

---

##### `disassociateWebAcl` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.disassociateWebAcl"></a>

```typescript
public disassociateWebAcl(input: WafRegionalDisassociateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDisassociateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalDisassociateWebAclRequest)

---

##### `fetchByteMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchByteMatchSet"></a>

```typescript
public fetchByteMatchSet(input: WafRegionalGetByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest)

---

##### `fetchChangeToken` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchChangeToken"></a>

```typescript
public fetchChangeToken()
```

##### `fetchChangeTokenStatus` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchChangeTokenStatus"></a>

```typescript
public fetchChangeTokenStatus(input: WafRegionalGetChangeTokenStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusRequest)

---

##### `fetchGeoMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchGeoMatchSet"></a>

```typescript
public fetchGeoMatchSet(input: WafRegionalGetGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest)

---

##### `fetchIpSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchIpSet"></a>

```typescript
public fetchIpSet(input: WafRegionalGetIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest)

---

##### `fetchLoggingConfiguration` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchLoggingConfiguration"></a>

```typescript
public fetchLoggingConfiguration(input: WafRegionalGetLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest)

---

##### `fetchPermissionPolicy` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchPermissionPolicy"></a>

```typescript
public fetchPermissionPolicy(input: WafRegionalGetPermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyRequest)

---

##### `fetchRateBasedRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchRateBasedRule"></a>

```typescript
public fetchRateBasedRule(input: WafRegionalGetRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest)

---

##### `fetchRateBasedRuleManagedKeys` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchRateBasedRuleManagedKeys"></a>

```typescript
public fetchRateBasedRuleManagedKeys(input: WafRegionalGetRateBasedRuleManagedKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest)

---

##### `fetchRegexMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchRegexMatchSet"></a>

```typescript
public fetchRegexMatchSet(input: WafRegionalGetRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest)

---

##### `fetchRegexPatternSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchRegexPatternSet"></a>

```typescript
public fetchRegexPatternSet(input: WafRegionalGetRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest)

---

##### `fetchRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchRule"></a>

```typescript
public fetchRule(input: WafRegionalGetRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest)

---

##### `fetchRuleGroup` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchRuleGroup"></a>

```typescript
public fetchRuleGroup(input: WafRegionalGetRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest)

---

##### `fetchSampledRequests` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchSampledRequests"></a>

```typescript
public fetchSampledRequests(input: WafRegionalGetSampledRequestsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest)

---

##### `fetchSizeConstraintSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchSizeConstraintSet"></a>

```typescript
public fetchSizeConstraintSet(input: WafRegionalGetSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest)

---

##### `fetchSqlInjectionMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchSqlInjectionMatchSet"></a>

```typescript
public fetchSqlInjectionMatchSet(input: WafRegionalGetSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest)

---

##### `fetchWebAcl` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchWebAcl"></a>

```typescript
public fetchWebAcl(input: WafRegionalGetWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest)

---

##### `fetchWebAclForResource` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchWebAclForResource"></a>

```typescript
public fetchWebAclForResource(input: WafRegionalGetWebAclForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest)

---

##### `fetchXssMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.fetchXssMatchSet"></a>

```typescript
public fetchXssMatchSet(input: WafRegionalGetXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest)

---

##### `listActivatedRulesInRuleGroup` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listActivatedRulesInRuleGroup"></a>

```typescript
public listActivatedRulesInRuleGroup(input: WafRegionalListActivatedRulesInRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest)

---

##### `listByteMatchSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listByteMatchSets"></a>

```typescript
public listByteMatchSets(input: WafRegionalListByteMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsRequest)

---

##### `listGeoMatchSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listGeoMatchSets"></a>

```typescript
public listGeoMatchSets(input: WafRegionalListGeoMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsRequest)

---

##### `listIpSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listIpSets"></a>

```typescript
public listIpSets(input: WafRegionalListIpSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListIpSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListIpSetsRequest)

---

##### `listLoggingConfigurations` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listLoggingConfigurations"></a>

```typescript
public listLoggingConfigurations(input: WafRegionalListLoggingConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsRequest)

---

##### `listRateBasedRules` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listRateBasedRules"></a>

```typescript
public listRateBasedRules(input: WafRegionalListRateBasedRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesRequest)

---

##### `listRegexMatchSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listRegexMatchSets"></a>

```typescript
public listRegexMatchSets(input: WafRegionalListRegexMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsRequest)

---

##### `listRegexPatternSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listRegexPatternSets"></a>

```typescript
public listRegexPatternSets(input: WafRegionalListRegexPatternSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsRequest)

---

##### `listResourcesForWebAcl` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listResourcesForWebAcl"></a>

```typescript
public listResourcesForWebAcl(input: WafRegionalListResourcesForWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclRequest)

---

##### `listRuleGroups` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listRuleGroups"></a>

```typescript
public listRuleGroups(input: WafRegionalListRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsRequest)

---

##### `listRules` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listRules"></a>

```typescript
public listRules(input: WafRegionalListRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRulesRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRulesRequest)

---

##### `listSizeConstraintSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listSizeConstraintSets"></a>

```typescript
public listSizeConstraintSets(input: WafRegionalListSizeConstraintSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsRequest)

---

##### `listSqlInjectionMatchSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listSqlInjectionMatchSets"></a>

```typescript
public listSqlInjectionMatchSets(input: WafRegionalListSqlInjectionMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsRequest)

---

##### `listSubscribedRuleGroups` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listSubscribedRuleGroups"></a>

```typescript
public listSubscribedRuleGroups(input: WafRegionalListSubscribedRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: WafRegionalListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest)

---

##### `listWebAcLs` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listWebAcLs"></a>

```typescript
public listWebAcLs(input: WafRegionalListWebAcLsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListWebAcLsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListWebAcLsRequest)

---

##### `listXssMatchSets` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.listXssMatchSets"></a>

```typescript
public listXssMatchSets(input: WafRegionalListXssMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsRequest)

---

##### `putLoggingConfiguration` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(input: WafRegionalPutLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest`](#aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest)

---

##### `putPermissionPolicy` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.putPermissionPolicy"></a>

```typescript
public putPermissionPolicy(input: WafRegionalPutPermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPutPermissionPolicyRequest`](#aws-cdk-sdk.wafregional.WafRegionalPutPermissionPolicyRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.tagResource"></a>

```typescript
public tagResource(input: WafRegionalTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTagResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.untagResource"></a>

```typescript
public untagResource(input: WafRegionalUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUntagResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalUntagResourceRequest)

---

##### `updateByteMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateByteMatchSet"></a>

```typescript
public updateByteMatchSet(input: WafRegionalUpdateByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest)

---

##### `updateGeoMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateGeoMatchSet"></a>

```typescript
public updateGeoMatchSet(input: WafRegionalUpdateGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest)

---

##### `updateIpSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateIpSet"></a>

```typescript
public updateIpSet(input: WafRegionalUpdateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest)

---

##### `updateRateBasedRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateRateBasedRule"></a>

```typescript
public updateRateBasedRule(input: WafRegionalUpdateRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest)

---

##### `updateRegexMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateRegexMatchSet"></a>

```typescript
public updateRegexMatchSet(input: WafRegionalUpdateRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest)

---

##### `updateRegexPatternSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateRegexPatternSet"></a>

```typescript
public updateRegexPatternSet(input: WafRegionalUpdateRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest)

---

##### `updateRule` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateRule"></a>

```typescript
public updateRule(input: WafRegionalUpdateRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest)

---

##### `updateRuleGroup` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateRuleGroup"></a>

```typescript
public updateRuleGroup(input: WafRegionalUpdateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest)

---

##### `updateSizeConstraintSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateSizeConstraintSet"></a>

```typescript
public updateSizeConstraintSet(input: WafRegionalUpdateSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest)

---

##### `updateSqlInjectionMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateSqlInjectionMatchSet"></a>

```typescript
public updateSqlInjectionMatchSet(input: WafRegionalUpdateSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest)

---

##### `updateWebAcl` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateWebAcl"></a>

```typescript
public updateWebAcl(input: WafRegionalUpdateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest)

---

##### `updateXssMatchSet` <a name="aws-cdk-sdk.wafregional.WafRegionalClient.updateXssMatchSet"></a>

```typescript
public updateXssMatchSet(input: WafRegionalUpdateXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest)

---




## Structs <a name="Structs"></a>

### WafRegionalActivatedRule <a name="aws-cdk-sdk.wafregional.WafRegionalActivatedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalActivatedRule: wafregional.WafRegionalActivatedRule = { ... }
```

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalActivatedRule.property.priority"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalActivatedRule.property.ruleId"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalActivatedRule.property.action"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWafAction`](#aws-cdk-sdk.wafregional.WafRegionalWafAction)

---

##### `excludedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalActivatedRule.property.excludedRules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalExcludedRule`](#aws-cdk-sdk.wafregional.WafRegionalExcludedRule)[]

---

##### `overrideAction`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalActivatedRule.property.overrideAction"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWafOverrideAction`](#aws-cdk-sdk.wafregional.WafRegionalWafOverrideAction)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalActivatedRule.property.type"></a>

- *Type:* `string`

---

### WafRegionalAssociateWebAclRequest <a name="aws-cdk-sdk.wafregional.WafRegionalAssociateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalAssociateWebAclRequest: wafregional.WafRegionalAssociateWebAclRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalAssociateWebAclRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalAssociateWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafRegionalAssociateWebAclResponse <a name="aws-cdk-sdk.wafregional.WafRegionalAssociateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalAssociateWebAclResponse: wafregional.WafRegionalAssociateWebAclResponse = { ... }
```

### WafRegionalByteMatchSet <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalByteMatchSet: wafregional.WafRegionalByteMatchSet = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSet.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `byteMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSet.property.byteMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSet.property.name"></a>

- *Type:* `string`

---

### WafRegionalByteMatchSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalByteMatchSetSummary: wafregional.WafRegionalByteMatchSetSummary = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSetSummary.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSetSummary.property.name"></a>

- *Type:* `string`

---

### WafRegionalByteMatchSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalByteMatchSetUpdate: wafregional.WafRegionalByteMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `byteMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchSetUpdate.property.byteMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple)

---

### WafRegionalByteMatchTuple <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalByteMatchTuple: wafregional.WafRegionalByteMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)

---

##### `positionalConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple.property.positionalConstraint"></a>

- *Type:* `string`

---

##### `targetString`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple.property.targetString"></a>

- *Type:* `any`

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

### WafRegionalCreateByteMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateByteMatchSetRequest: wafregional.WafRegionalCreateByteMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateByteMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateByteMatchSetResponse: wafregional.WafRegionalCreateByteMatchSetResponse = { ... }
```

##### `byteMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetResponse.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchSet)

---

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalCreateGeoMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateGeoMatchSetRequest: wafregional.WafRegionalCreateGeoMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateGeoMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateGeoMatchSetResponse: wafregional.WafRegionalCreateGeoMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetResponse.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet)

---

### WafRegionalCreateIpSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateIpSetRequest: wafregional.WafRegionalCreateIpSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateIpSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateIpSetResponse: wafregional.WafRegionalCreateIpSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateIpSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateIpSetResponse.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSet`](#aws-cdk-sdk.wafregional.WafRegionalIpSet)

---

### WafRegionalCreateRateBasedRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRateBasedRuleRequest: wafregional.WafRegionalCreateRateBasedRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest.property.rateLimit"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTag`](#aws-cdk-sdk.wafregional.WafRegionalTag)[]

---

### WafRegionalCreateRateBasedRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRateBasedRuleResponse: wafregional.WafRegionalCreateRateBasedRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRateBasedRule`](#aws-cdk-sdk.wafregional.WafRegionalRateBasedRule)

---

### WafRegionalCreateRegexMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRegexMatchSetRequest: wafregional.WafRegionalCreateRegexMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateRegexMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRegexMatchSetResponse: wafregional.WafRegionalCreateRegexMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetResponse.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet)

---

### WafRegionalCreateRegexPatternSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRegexPatternSetRequest: wafregional.WafRegionalCreateRegexPatternSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateRegexPatternSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRegexPatternSetResponse: wafregional.WafRegionalCreateRegexPatternSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetResponse.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet`](#aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet)

---

### WafRegionalCreateRuleGroupRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRuleGroupRequest: wafregional.WafRegionalCreateRuleGroupRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTag`](#aws-cdk-sdk.wafregional.WafRegionalTag)[]

---

### WafRegionalCreateRuleGroupResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRuleGroupResponse: wafregional.WafRegionalCreateRuleGroupResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupResponse.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleGroup`](#aws-cdk-sdk.wafregional.WafRegionalRuleGroup)

---

### WafRegionalCreateRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRuleRequest: wafregional.WafRegionalCreateRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTag`](#aws-cdk-sdk.wafregional.WafRegionalTag)[]

---

### WafRegionalCreateRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateRuleResponse: wafregional.WafRegionalCreateRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRule`](#aws-cdk-sdk.wafregional.WafRegionalRule)

---

### WafRegionalCreateSizeConstraintSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateSizeConstraintSetRequest: wafregional.WafRegionalCreateSizeConstraintSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateSizeConstraintSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateSizeConstraintSetResponse: wafregional.WafRegionalCreateSizeConstraintSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetResponse.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet)

---

### WafRegionalCreateSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateSqlInjectionMatchSetRequest: wafregional.WafRegionalCreateSqlInjectionMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateSqlInjectionMatchSetResponse: wafregional.WafRegionalCreateSqlInjectionMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetResponse.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet)

---

### WafRegionalCreateWebAclMigrationStackRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateWebAclMigrationStackRequest: wafregional.WafRegionalCreateWebAclMigrationStackRequest = { ... }
```

##### `ignoreUnsupportedType`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest.property.ignoreUnsupportedType"></a>

- *Type:* `boolean`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest.property.s3BucketName"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafRegionalCreateWebAclMigrationStackResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateWebAclMigrationStackResponse: wafregional.WafRegionalCreateWebAclMigrationStackResponse = { ... }
```

##### `s3ObjectUrl`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackResponse.property.s3ObjectUrl"></a>

- *Type:* `string`

---

### WafRegionalCreateWebAclRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateWebAclRequest: wafregional.WafRegionalCreateWebAclRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWafAction`](#aws-cdk-sdk.wafregional.WafRegionalWafAction)

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTag`](#aws-cdk-sdk.wafregional.WafRegionalTag)[]

---

### WafRegionalCreateWebAclResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateWebAclResponse: wafregional.WafRegionalCreateWebAclResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `webAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateWebAclResponse.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWebAcl`](#aws-cdk-sdk.wafregional.WafRegionalWebAcl)

---

### WafRegionalCreateXssMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateXssMatchSetRequest: wafregional.WafRegionalCreateXssMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafRegionalCreateXssMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalCreateXssMatchSetResponse: wafregional.WafRegionalCreateXssMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `xssMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetResponse.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchSet)

---

### WafRegionalDeleteByteMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteByteMatchSetRequest: wafregional.WafRegionalDeleteByteMatchSetRequest = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetRequest.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteByteMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteByteMatchSetResponse: wafregional.WafRegionalDeleteByteMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteGeoMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteGeoMatchSetRequest: wafregional.WafRegionalDeleteGeoMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetRequest.property.geoMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalDeleteGeoMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteGeoMatchSetResponse: wafregional.WafRegionalDeleteGeoMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteIpSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteIpSetRequest: wafregional.WafRegionalDeleteIpSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

### WafRegionalDeleteIpSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteIpSetResponse: wafregional.WafRegionalDeleteIpSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteLoggingConfigurationRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteLoggingConfigurationRequest: wafregional.WafRegionalDeleteLoggingConfigurationRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteLoggingConfigurationRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafRegionalDeleteLoggingConfigurationResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteLoggingConfigurationResponse: wafregional.WafRegionalDeleteLoggingConfigurationResponse = { ... }
```

### WafRegionalDeletePermissionPolicyRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeletePermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeletePermissionPolicyRequest: wafregional.WafRegionalDeletePermissionPolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeletePermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafRegionalDeletePermissionPolicyResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeletePermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeletePermissionPolicyResponse: wafregional.WafRegionalDeletePermissionPolicyResponse = { ... }
```

### WafRegionalDeleteRateBasedRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRateBasedRuleRequest: wafregional.WafRegionalDeleteRateBasedRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafRegionalDeleteRateBasedRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRateBasedRuleResponse: wafregional.WafRegionalDeleteRateBasedRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteRegexMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRegexMatchSetRequest: wafregional.WafRegionalDeleteRegexMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetRequest.property.regexMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalDeleteRegexMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRegexMatchSetResponse: wafregional.WafRegionalDeleteRegexMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteRegexPatternSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRegexPatternSetRequest: wafregional.WafRegionalDeleteRegexPatternSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetRequest.property.regexPatternSetId"></a>

- *Type:* `string`

---

### WafRegionalDeleteRegexPatternSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRegexPatternSetResponse: wafregional.WafRegionalDeleteRegexPatternSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteRuleGroupRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRuleGroupRequest: wafregional.WafRegionalDeleteRuleGroupRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafRegionalDeleteRuleGroupResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRuleGroupResponse: wafregional.WafRegionalDeleteRuleGroupResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRuleRequest: wafregional.WafRegionalDeleteRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafRegionalDeleteRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteRuleResponse: wafregional.WafRegionalDeleteRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteSizeConstraintSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteSizeConstraintSetRequest: wafregional.WafRegionalDeleteSizeConstraintSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetRequest.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

### WafRegionalDeleteSizeConstraintSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteSizeConstraintSetResponse: wafregional.WafRegionalDeleteSizeConstraintSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteSqlInjectionMatchSetRequest: wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalDeleteSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteSqlInjectionMatchSetResponse: wafregional.WafRegionalDeleteSqlInjectionMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteWebAclRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteWebAclRequest: wafregional.WafRegionalDeleteWebAclRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafRegionalDeleteWebAclResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteWebAclResponse: wafregional.WafRegionalDeleteWebAclResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDeleteXssMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteXssMatchSetRequest: wafregional.WafRegionalDeleteXssMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetRequest.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalDeleteXssMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDeleteXssMatchSetResponse: wafregional.WafRegionalDeleteXssMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalDisassociateWebAclRequest <a name="aws-cdk-sdk.wafregional.WafRegionalDisassociateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDisassociateWebAclRequest: wafregional.WafRegionalDisassociateWebAclRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalDisassociateWebAclRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafRegionalDisassociateWebAclResponse <a name="aws-cdk-sdk.wafregional.WafRegionalDisassociateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalDisassociateWebAclResponse: wafregional.WafRegionalDisassociateWebAclResponse = { ... }
```

### WafRegionalExcludedRule <a name="aws-cdk-sdk.wafregional.WafRegionalExcludedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalExcludedRule: wafregional.WafRegionalExcludedRule = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalExcludedRule.property.ruleId"></a>

- *Type:* `string`

---

### WafRegionalFieldToMatch <a name="aws-cdk-sdk.wafregional.WafRegionalFieldToMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalFieldToMatch: wafregional.WafRegionalFieldToMatch = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalFieldToMatch.property.type"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalFieldToMatch.property.data"></a>

- *Type:* `string`

---

### WafRegionalGeoMatchConstraint <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGeoMatchConstraint: wafregional.WafRegionalGeoMatchConstraint = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint.property.value"></a>

- *Type:* `string`

---

### WafRegionalGeoMatchSet <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGeoMatchSet: wafregional.WafRegionalGeoMatchSet = { ... }
```

##### `geoMatchConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet.property.geoMatchConstraints"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint)[]

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet.property.name"></a>

- *Type:* `string`

---

### WafRegionalGeoMatchSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGeoMatchSetSummary: wafregional.WafRegionalGeoMatchSetSummary = { ... }
```

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetSummary.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetSummary.property.name"></a>

- *Type:* `string`

---

### WafRegionalGeoMatchSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGeoMatchSetUpdate: wafregional.WafRegionalGeoMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `geoMatchConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetUpdate.property.geoMatchConstraint"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint)

---

### WafRegionalGetByteMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetByteMatchSetRequest: wafregional.WafRegionalGetByteMatchSetRequest = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest.property.byteMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalGetByteMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetByteMatchSetResponse: wafregional.WafRegionalGetByteMatchSetResponse = { ... }
```

##### `byteMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetResponse.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchSet)

---

### WafRegionalGetChangeTokenRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetChangeTokenRequest: wafregional.WafRegionalGetChangeTokenRequest = { ... }
```

### WafRegionalGetChangeTokenResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetChangeTokenResponse: wafregional.WafRegionalGetChangeTokenResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalGetChangeTokenStatusRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetChangeTokenStatusRequest: wafregional.WafRegionalGetChangeTokenStatusRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusRequest.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalGetChangeTokenStatusResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetChangeTokenStatusResponse: wafregional.WafRegionalGetChangeTokenStatusResponse = { ... }
```

##### `changeTokenStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusResponse.property.changeTokenStatus"></a>

- *Type:* `string`

---

### WafRegionalGetGeoMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetGeoMatchSetRequest: wafregional.WafRegionalGetGeoMatchSetRequest = { ... }
```

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest.property.geoMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalGetGeoMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetGeoMatchSetResponse: wafregional.WafRegionalGetGeoMatchSetResponse = { ... }
```

##### `geoMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetResponse.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchSet)

---

### WafRegionalGetIpSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetIpSetRequest: wafregional.WafRegionalGetIpSetRequest = { ... }
```

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

### WafRegionalGetIpSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetIpSetResponse: wafregional.WafRegionalGetIpSetResponse = { ... }
```

##### `ipSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetIpSetResponse.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSet`](#aws-cdk-sdk.wafregional.WafRegionalIpSet)

---

### WafRegionalGetLoggingConfigurationRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetLoggingConfigurationRequest: wafregional.WafRegionalGetLoggingConfigurationRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafRegionalGetLoggingConfigurationResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetLoggingConfigurationResponse: wafregional.WafRegionalGetLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration`](#aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration)

---

### WafRegionalGetPermissionPolicyRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetPermissionPolicyRequest: wafregional.WafRegionalGetPermissionPolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafRegionalGetPermissionPolicyResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetPermissionPolicyResponse: wafregional.WafRegionalGetPermissionPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyResponse.property.policy"></a>

- *Type:* `string`

---

### WafRegionalGetRateBasedRuleManagedKeysRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRateBasedRuleManagedKeysRequest: wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalGetRateBasedRuleManagedKeysResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRateBasedRuleManagedKeysResponse: wafregional.WafRegionalGetRateBasedRuleManagedKeysResponse = { ... }
```

##### `managedKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysResponse.property.managedKeys"></a>

- *Type:* `string`[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalGetRateBasedRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRateBasedRuleRequest: wafregional.WafRegionalGetRateBasedRuleRequest = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafRegionalGetRateBasedRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRateBasedRuleResponse: wafregional.WafRegionalGetRateBasedRuleResponse = { ... }
```

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRateBasedRule`](#aws-cdk-sdk.wafregional.WafRegionalRateBasedRule)

---

### WafRegionalGetRegexMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRegexMatchSetRequest: wafregional.WafRegionalGetRegexMatchSetRequest = { ... }
```

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest.property.regexMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalGetRegexMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRegexMatchSetResponse: wafregional.WafRegionalGetRegexMatchSetResponse = { ... }
```

##### `regexMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetResponse.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet)

---

### WafRegionalGetRegexPatternSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRegexPatternSetRequest: wafregional.WafRegionalGetRegexPatternSetRequest = { ... }
```

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest.property.regexPatternSetId"></a>

- *Type:* `string`

---

### WafRegionalGetRegexPatternSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRegexPatternSetResponse: wafregional.WafRegionalGetRegexPatternSetResponse = { ... }
```

##### `regexPatternSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetResponse.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet`](#aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet)

---

### WafRegionalGetRuleGroupRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRuleGroupRequest: wafregional.WafRegionalGetRuleGroupRequest = { ... }
```

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafRegionalGetRuleGroupResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRuleGroupResponse: wafregional.WafRegionalGetRuleGroupResponse = { ... }
```

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupResponse.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleGroup`](#aws-cdk-sdk.wafregional.WafRegionalRuleGroup)

---

### WafRegionalGetRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRuleRequest: wafregional.WafRegionalGetRuleRequest = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafRegionalGetRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetRuleResponse: wafregional.WafRegionalGetRuleResponse = { ... }
```

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRule`](#aws-cdk-sdk.wafregional.WafRegionalRule)

---

### WafRegionalGetSampledRequestsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetSampledRequestsRequest: wafregional.WafRegionalGetSampledRequestsRequest = { ... }
```

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `timeWindow`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTimeWindow`](#aws-cdk-sdk.wafregional.WafRegionalTimeWindow)

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafRegionalGetSampledRequestsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetSampledRequestsResponse: wafregional.WafRegionalGetSampledRequestsResponse = { ... }
```

##### `populationSize`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsResponse.property.populationSize"></a>

- *Type:* `number`

---

##### `sampledRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsResponse.property.sampledRequests"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest`](#aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest)[]

---

##### `timeWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsResponse.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTimeWindow`](#aws-cdk-sdk.wafregional.WafRegionalTimeWindow)

---

### WafRegionalGetSizeConstraintSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetSizeConstraintSetRequest: wafregional.WafRegionalGetSizeConstraintSetRequest = { ... }
```

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

### WafRegionalGetSizeConstraintSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetSizeConstraintSetResponse: wafregional.WafRegionalGetSizeConstraintSetResponse = { ... }
```

##### `sizeConstraintSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetResponse.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet)

---

### WafRegionalGetSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetSqlInjectionMatchSetRequest: wafregional.WafRegionalGetSqlInjectionMatchSetRequest = { ... }
```

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalGetSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetSqlInjectionMatchSetResponse: wafregional.WafRegionalGetSqlInjectionMatchSetResponse = { ... }
```

##### `sqlInjectionMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetResponse.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet)

---

### WafRegionalGetWebAclForResourceRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetWebAclForResourceRequest: wafregional.WafRegionalGetWebAclForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafRegionalGetWebAclForResourceResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetWebAclForResourceResponse: wafregional.WafRegionalGetWebAclForResourceResponse = { ... }
```

##### `webAclSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceResponse.property.webAclSummary"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWebAclSummary`](#aws-cdk-sdk.wafregional.WafRegionalWebAclSummary)

---

### WafRegionalGetWebAclRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetWebAclRequest: wafregional.WafRegionalGetWebAclRequest = { ... }
```

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafRegionalGetWebAclResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetWebAclResponse: wafregional.WafRegionalGetWebAclResponse = { ... }
```

##### `webAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetWebAclResponse.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWebAcl`](#aws-cdk-sdk.wafregional.WafRegionalWebAcl)

---

### WafRegionalGetXssMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetXssMatchSetRequest: wafregional.WafRegionalGetXssMatchSetRequest = { ... }
```

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalGetXssMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalGetXssMatchSetResponse: wafregional.WafRegionalGetXssMatchSetResponse = { ... }
```

##### `xssMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetResponse.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchSet`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchSet)

---

### WafRegionalHttpHeader <a name="aws-cdk-sdk.wafregional.WafRegionalHttpHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalHttpHeader: wafregional.WafRegionalHttpHeader = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpHeader.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpHeader.property.value"></a>

- *Type:* `string`

---

### WafRegionalHttpRequest <a name="aws-cdk-sdk.wafregional.WafRegionalHttpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalHttpRequest: wafregional.WafRegionalHttpRequest = { ... }
```

##### `clientIp`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpRequest.property.clientIp"></a>

- *Type:* `string`

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpRequest.property.country"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpRequest.property.headers"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalHttpHeader`](#aws-cdk-sdk.wafregional.WafRegionalHttpHeader)[]

---

##### `httpVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpRequest.property.httpVersion"></a>

- *Type:* `string`

---

##### `method`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpRequest.property.method"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalHttpRequest.property.uri"></a>

- *Type:* `string`

---

### WafRegionalIpSet <a name="aws-cdk-sdk.wafregional.WafRegionalIpSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalIpSet: wafregional.WafRegionalIpSet = { ... }
```

##### `ipSetDescriptors`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSet.property.ipSetDescriptors"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor`](#aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor)[]

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSet.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSet.property.name"></a>

- *Type:* `string`

---

### WafRegionalIpSetDescriptor <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalIpSetDescriptor: wafregional.WafRegionalIpSetDescriptor = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor.property.value"></a>

- *Type:* `string`

---

### WafRegionalIpSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalIpSetSummary: wafregional.WafRegionalIpSetSummary = { ... }
```

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetSummary.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetSummary.property.name"></a>

- *Type:* `string`

---

### WafRegionalIpSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalIpSetUpdate: wafregional.WafRegionalIpSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `ipSetDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalIpSetUpdate.property.ipSetDescriptor"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor`](#aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor)

---

### WafRegionalListActivatedRulesInRuleGroupRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListActivatedRulesInRuleGroupRequest: wafregional.WafRegionalListActivatedRulesInRuleGroupRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafRegionalListActivatedRulesInRuleGroupResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListActivatedRulesInRuleGroupResponse: wafregional.WafRegionalListActivatedRulesInRuleGroupResponse = { ... }
```

##### `activatedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupResponse.property.activatedRules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalActivatedRule`](#aws-cdk-sdk.wafregional.WafRegionalActivatedRule)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListByteMatchSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListByteMatchSetsRequest: wafregional.WafRegionalListByteMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListByteMatchSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListByteMatchSetsResponse: wafregional.WafRegionalListByteMatchSetsResponse = { ... }
```

##### `byteMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsResponse.property.byteMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchSetSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListGeoMatchSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListGeoMatchSetsRequest: wafregional.WafRegionalListGeoMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListGeoMatchSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListGeoMatchSetsResponse: wafregional.WafRegionalListGeoMatchSetsResponse = { ... }
```

##### `geoMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsResponse.property.geoMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListIpSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListIpSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListIpSetsRequest: wafregional.WafRegionalListIpSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListIpSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListIpSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListIpSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListIpSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListIpSetsResponse: wafregional.WafRegionalListIpSetsResponse = { ... }
```

##### `ipSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListIpSetsResponse.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalIpSetSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListIpSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListLoggingConfigurationsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListLoggingConfigurationsRequest: wafregional.WafRegionalListLoggingConfigurationsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListLoggingConfigurationsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListLoggingConfigurationsResponse: wafregional.WafRegionalListLoggingConfigurationsResponse = { ... }
```

##### `loggingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsResponse.property.loggingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration`](#aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListRateBasedRulesRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRateBasedRulesRequest: wafregional.WafRegionalListRateBasedRulesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListRateBasedRulesResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRateBasedRulesResponse: wafregional.WafRegionalListRateBasedRulesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleSummary`](#aws-cdk-sdk.wafregional.WafRegionalRuleSummary)[]

---

### WafRegionalListRegexMatchSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRegexMatchSetsRequest: wafregional.WafRegionalListRegexMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListRegexMatchSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRegexMatchSetsResponse: wafregional.WafRegionalListRegexMatchSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsResponse.property.regexMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetSummary)[]

---

### WafRegionalListRegexPatternSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRegexPatternSetsRequest: wafregional.WafRegionalListRegexPatternSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListRegexPatternSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRegexPatternSetsResponse: wafregional.WafRegionalListRegexPatternSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexPatternSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsResponse.property.regexPatternSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetSummary)[]

---

### WafRegionalListResourcesForWebAclRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListResourcesForWebAclRequest: wafregional.WafRegionalListResourcesForWebAclRequest = { ... }
```

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclRequest.property.resourceType"></a>

- *Type:* `string`

---

### WafRegionalListResourcesForWebAclResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListResourcesForWebAclResponse: wafregional.WafRegionalListResourcesForWebAclResponse = { ... }
```

##### `resourceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclResponse.property.resourceArns"></a>

- *Type:* `string`[]

---

### WafRegionalListRuleGroupsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRuleGroupsRequest: wafregional.WafRegionalListRuleGroupsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListRuleGroupsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRuleGroupsResponse: wafregional.WafRegionalListRuleGroupsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsResponse.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleGroupSummary`](#aws-cdk-sdk.wafregional.WafRegionalRuleGroupSummary)[]

---

### WafRegionalListRulesRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRulesRequest: wafregional.WafRegionalListRulesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRulesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRulesRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListRulesResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListRulesResponse: wafregional.WafRegionalListRulesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRulesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListRulesResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleSummary`](#aws-cdk-sdk.wafregional.WafRegionalRuleSummary)[]

---

### WafRegionalListSizeConstraintSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListSizeConstraintSetsRequest: wafregional.WafRegionalListSizeConstraintSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListSizeConstraintSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListSizeConstraintSetsResponse: wafregional.WafRegionalListSizeConstraintSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `sizeConstraintSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsResponse.property.sizeConstraintSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetSummary)[]

---

### WafRegionalListSqlInjectionMatchSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListSqlInjectionMatchSetsRequest: wafregional.WafRegionalListSqlInjectionMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListSqlInjectionMatchSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListSqlInjectionMatchSetsResponse: wafregional.WafRegionalListSqlInjectionMatchSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsResponse.property.sqlInjectionMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetSummary)[]

---

### WafRegionalListSubscribedRuleGroupsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListSubscribedRuleGroupsRequest: wafregional.WafRegionalListSubscribedRuleGroupsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListSubscribedRuleGroupsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListSubscribedRuleGroupsResponse: wafregional.WafRegionalListSubscribedRuleGroupsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsResponse.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary`](#aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary)[]

---

### WafRegionalListTagsForResourceRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListTagsForResourceRequest: wafregional.WafRegionalListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListTagsForResourceResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListTagsForResourceResponse: wafregional.WafRegionalListTagsForResourceResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `tagInfoForResource`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceResponse.property.tagInfoForResource"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTagInfoForResource`](#aws-cdk-sdk.wafregional.WafRegionalTagInfoForResource)

---

### WafRegionalListWebAcLsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListWebAcLsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListWebAcLsRequest: wafregional.WafRegionalListWebAcLsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListWebAcLsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListWebAcLsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListWebAcLsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListWebAcLsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListWebAcLsResponse: wafregional.WafRegionalListWebAcLsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListWebAcLsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `webAcLs`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListWebAcLsResponse.property.webAcLs"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWebAclSummary`](#aws-cdk-sdk.wafregional.WafRegionalWebAclSummary)[]

---

### WafRegionalListXssMatchSetsRequest <a name="aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListXssMatchSetsRequest: wafregional.WafRegionalListXssMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafRegionalListXssMatchSetsResponse <a name="aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalListXssMatchSetsResponse: wafregional.WafRegionalListXssMatchSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `xssMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsResponse.property.xssMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchSetSummary)[]

---

### WafRegionalLoggingConfiguration <a name="aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalLoggingConfiguration: wafregional.WafRegionalLoggingConfiguration = { ... }
```

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---

##### `redactedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)[]

---

### WafRegionalPredicate <a name="aws-cdk-sdk.wafregional.WafRegionalPredicate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalPredicate: wafregional.WafRegionalPredicate = { ... }
```

##### `dataId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalPredicate.property.dataId"></a>

- *Type:* `string`

---

##### `negated`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalPredicate.property.negated"></a>

- *Type:* `boolean`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalPredicate.property.type"></a>

- *Type:* `string`

---

### WafRegionalPutLoggingConfigurationRequest <a name="aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalPutLoggingConfigurationRequest: wafregional.WafRegionalPutLoggingConfigurationRequest = { ... }
```

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration`](#aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration)

---

### WafRegionalPutLoggingConfigurationResponse <a name="aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalPutLoggingConfigurationResponse: wafregional.WafRegionalPutLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration`](#aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration)

---

### WafRegionalPutPermissionPolicyRequest <a name="aws-cdk-sdk.wafregional.WafRegionalPutPermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalPutPermissionPolicyRequest: wafregional.WafRegionalPutPermissionPolicyRequest = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalPutPermissionPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalPutPermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafRegionalPutPermissionPolicyResponse <a name="aws-cdk-sdk.wafregional.WafRegionalPutPermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalPutPermissionPolicyResponse: wafregional.WafRegionalPutPermissionPolicyResponse = { ... }
```

### WafRegionalRateBasedRule <a name="aws-cdk-sdk.wafregional.WafRegionalRateBasedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRateBasedRule: wafregional.WafRegionalRateBasedRule = { ... }
```

##### `matchPredicates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRateBasedRule.property.matchPredicates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPredicate`](#aws-cdk-sdk.wafregional.WafRegionalPredicate)[]

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRateBasedRule.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRateBasedRule.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRateBasedRule.property.ruleId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRateBasedRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRateBasedRule.property.name"></a>

- *Type:* `string`

---

### WafRegionalRegexMatchSet <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRegexMatchSet: wafregional.WafRegionalRegexMatchSet = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `regexMatchTuples`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSet.property.regexMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple)[]

---

### WafRegionalRegexMatchSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRegexMatchSetSummary: wafregional.WafRegionalRegexMatchSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetSummary.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetSummary.property.regexMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalRegexMatchSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRegexMatchSetUpdate: wafregional.WafRegionalRegexMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `regexMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetUpdate.property.regexMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple)

---

### WafRegionalRegexMatchTuple <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRegexMatchTuple: wafregional.WafRegionalRegexMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

### WafRegionalRegexPatternSet <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRegexPatternSet: wafregional.WafRegionalRegexPatternSet = { ... }
```

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `regexPatternStrings`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet.property.regexPatternStrings"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSet.property.name"></a>

- *Type:* `string`

---

### WafRegionalRegexPatternSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRegexPatternSetSummary: wafregional.WafRegionalRegexPatternSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetSummary.property.name"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetSummary.property.regexPatternSetId"></a>

- *Type:* `string`

---

### WafRegionalRegexPatternSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRegexPatternSetUpdate: wafregional.WafRegionalRegexPatternSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `regexPatternString`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetUpdate.property.regexPatternString"></a>

- *Type:* `string`

---

### WafRegionalRule <a name="aws-cdk-sdk.wafregional.WafRegionalRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRule: wafregional.WafRegionalRule = { ... }
```

##### `predicates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRule.property.predicates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPredicate`](#aws-cdk-sdk.wafregional.WafRegionalPredicate)[]

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRule.property.ruleId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRule.property.name"></a>

- *Type:* `string`

---

### WafRegionalRuleGroup <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRuleGroup: wafregional.WafRegionalRuleGroup = { ... }
```

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroup.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroup.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroup.property.name"></a>

- *Type:* `string`

---

### WafRegionalRuleGroupSummary <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRuleGroupSummary: wafregional.WafRegionalRuleGroupSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroupSummary.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroupSummary.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafRegionalRuleGroupUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroupUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRuleGroupUpdate: wafregional.WafRegionalRuleGroupUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroupUpdate.property.action"></a>

- *Type:* `string`

---

##### `activatedRule`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleGroupUpdate.property.activatedRule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalActivatedRule`](#aws-cdk-sdk.wafregional.WafRegionalActivatedRule)

---

### WafRegionalRuleSummary <a name="aws-cdk-sdk.wafregional.WafRegionalRuleSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRuleSummary: wafregional.WafRegionalRuleSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleSummary.property.name"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleSummary.property.ruleId"></a>

- *Type:* `string`

---

### WafRegionalRuleUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalRuleUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalRuleUpdate: wafregional.WafRegionalRuleUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleUpdate.property.action"></a>

- *Type:* `string`

---

##### `predicate`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalRuleUpdate.property.predicate"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPredicate`](#aws-cdk-sdk.wafregional.WafRegionalPredicate)

---

### WafRegionalSampledHttpRequest <a name="aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSampledHttpRequest: wafregional.WafRegionalSampledHttpRequest = { ... }
```

##### `request`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest.property.request"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalHttpRequest`](#aws-cdk-sdk.wafregional.WafRegionalHttpRequest)

---

##### `weight`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest.property.weight"></a>

- *Type:* `number`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest.property.action"></a>

- *Type:* `string`

---

##### `ruleWithinRuleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest.property.ruleWithinRuleGroup"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest.property.timestamp"></a>

- *Type:* `string`

---

### WafRegionalSizeConstraint <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSizeConstraint: wafregional.WafRegionalSizeConstraint = { ... }
```

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraint.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraint.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraint.property.size"></a>

- *Type:* `number`

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraint.property.textTransformation"></a>

- *Type:* `string`

---

### WafRegionalSizeConstraintSet <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSizeConstraintSet: wafregional.WafRegionalSizeConstraintSet = { ... }
```

##### `sizeConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet.property.sizeConstraints"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraint`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraint)[]

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSet.property.name"></a>

- *Type:* `string`

---

### WafRegionalSizeConstraintSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSizeConstraintSetSummary: wafregional.WafRegionalSizeConstraintSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetSummary.property.name"></a>

- *Type:* `string`

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetSummary.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

### WafRegionalSizeConstraintSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSizeConstraintSetUpdate: wafregional.WafRegionalSizeConstraintSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `sizeConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetUpdate.property.sizeConstraint"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraint`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraint)

---

### WafRegionalSqlInjectionMatchSet <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSqlInjectionMatchSet: wafregional.WafRegionalSqlInjectionMatchSet = { ... }
```

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSet.property.name"></a>

- *Type:* `string`

---

### WafRegionalSqlInjectionMatchSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSqlInjectionMatchSetSummary: wafregional.WafRegionalSqlInjectionMatchSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetSummary.property.name"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetSummary.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalSqlInjectionMatchSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSqlInjectionMatchSetUpdate: wafregional.WafRegionalSqlInjectionMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetUpdate.property.sqlInjectionMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple)

---

### WafRegionalSqlInjectionMatchTuple <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSqlInjectionMatchTuple: wafregional.WafRegionalSqlInjectionMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

### WafRegionalSubscribedRuleGroupSummary <a name="aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalSubscribedRuleGroupSummary: wafregional.WafRegionalSubscribedRuleGroupSummary = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafRegionalTag <a name="aws-cdk-sdk.wafregional.WafRegionalTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalTag: wafregional.WafRegionalTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTag.property.value"></a>

- *Type:* `string`

---

### WafRegionalTagInfoForResource <a name="aws-cdk-sdk.wafregional.WafRegionalTagInfoForResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalTagInfoForResource: wafregional.WafRegionalTagInfoForResource = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTagInfoForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTagInfoForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTag`](#aws-cdk-sdk.wafregional.WafRegionalTag)[]

---

### WafRegionalTagResourceRequest <a name="aws-cdk-sdk.wafregional.WafRegionalTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalTagResourceRequest: wafregional.WafRegionalTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTag`](#aws-cdk-sdk.wafregional.WafRegionalTag)[]

---

### WafRegionalTagResourceResponse <a name="aws-cdk-sdk.wafregional.WafRegionalTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalTagResourceResponse: wafregional.WafRegionalTagResourceResponse = { ... }
```

### WafRegionalTimeWindow <a name="aws-cdk-sdk.wafregional.WafRegionalTimeWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalTimeWindow: wafregional.WafRegionalTimeWindow = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTimeWindow.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalTimeWindow.property.startTime"></a>

- *Type:* `string`

---

### WafRegionalUntagResourceRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUntagResourceRequest: wafregional.WafRegionalUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### WafRegionalUntagResourceResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUntagResourceResponse: wafregional.WafRegionalUntagResourceResponse = { ... }
```

### WafRegionalUpdateByteMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateByteMatchSetRequest: wafregional.WafRegionalUpdateByteMatchSetRequest = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchSetUpdate)[]

---

### WafRegionalUpdateByteMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateByteMatchSetResponse: wafregional.WafRegionalUpdateByteMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateGeoMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateGeoMatchSetRequest: wafregional.WafRegionalUpdateGeoMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetUpdate)[]

---

### WafRegionalUpdateGeoMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateGeoMatchSetResponse: wafregional.WafRegionalUpdateGeoMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateIpSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateIpSetRequest: wafregional.WafRegionalUpdateIpSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalIpSetUpdate)[]

---

### WafRegionalUpdateIpSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateIpSetResponse: wafregional.WafRegionalUpdateIpSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateRateBasedRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRateBasedRuleRequest: wafregional.WafRegionalUpdateRateBasedRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleUpdate`](#aws-cdk-sdk.wafregional.WafRegionalRuleUpdate)[]

---

### WafRegionalUpdateRateBasedRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRateBasedRuleResponse: wafregional.WafRegionalUpdateRateBasedRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateRegexMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRegexMatchSetRequest: wafregional.WafRegionalUpdateRegexMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetUpdate)[]

---

### WafRegionalUpdateRegexMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRegexMatchSetResponse: wafregional.WafRegionalUpdateRegexMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateRegexPatternSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRegexPatternSetRequest: wafregional.WafRegionalUpdateRegexPatternSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetUpdate)[]

---

### WafRegionalUpdateRegexPatternSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRegexPatternSetResponse: wafregional.WafRegionalUpdateRegexPatternSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateRuleGroupRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRuleGroupRequest: wafregional.WafRegionalUpdateRuleGroupRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleGroupUpdate`](#aws-cdk-sdk.wafregional.WafRegionalRuleGroupUpdate)[]

---

### WafRegionalUpdateRuleGroupResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRuleGroupResponse: wafregional.WafRegionalUpdateRuleGroupResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateRuleRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRuleRequest: wafregional.WafRegionalUpdateRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleUpdate`](#aws-cdk-sdk.wafregional.WafRegionalRuleUpdate)[]

---

### WafRegionalUpdateRuleResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateRuleResponse: wafregional.WafRegionalUpdateRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateSizeConstraintSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateSizeConstraintSetRequest: wafregional.WafRegionalUpdateSizeConstraintSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetUpdate)[]

---

### WafRegionalUpdateSizeConstraintSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateSizeConstraintSetResponse: wafregional.WafRegionalUpdateSizeConstraintSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateSqlInjectionMatchSetRequest: wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetUpdate)[]

---

### WafRegionalUpdateSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateSqlInjectionMatchSetResponse: wafregional.WafRegionalUpdateSqlInjectionMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateWebAclRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateWebAclRequest: wafregional.WafRegionalUpdateWebAclRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWafAction`](#aws-cdk-sdk.wafregional.WafRegionalWafAction)

---

##### `updates`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWebAclUpdate`](#aws-cdk-sdk.wafregional.WafRegionalWebAclUpdate)[]

---

### WafRegionalUpdateWebAclResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateWebAclResponse: wafregional.WafRegionalUpdateWebAclResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalUpdateXssMatchSetRequest <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateXssMatchSetRequest: wafregional.WafRegionalUpdateXssMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchSetUpdate`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchSetUpdate)[]

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalUpdateXssMatchSetResponse <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalUpdateXssMatchSetResponse: wafregional.WafRegionalUpdateXssMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafRegionalWafAction <a name="aws-cdk-sdk.wafregional.WafRegionalWafAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalWafAction: wafregional.WafRegionalWafAction = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWafAction.property.type"></a>

- *Type:* `string`

---

### WafRegionalWafOverrideAction <a name="aws-cdk-sdk.wafregional.WafRegionalWafOverrideAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalWafOverrideAction: wafregional.WafRegionalWafOverrideAction = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWafOverrideAction.property.type"></a>

- *Type:* `string`

---

### WafRegionalWebAcl <a name="aws-cdk-sdk.wafregional.WafRegionalWebAcl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalWebAcl: wafregional.WafRegionalWebAcl = { ... }
```

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWafAction`](#aws-cdk-sdk.wafregional.WafRegionalWafAction)

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalActivatedRule`](#aws-cdk-sdk.wafregional.WafRegionalActivatedRule)[]

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAcl.property.webAclId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAcl.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAcl.property.name"></a>

- *Type:* `string`

---

##### `webAclArn`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAcl.property.webAclArn"></a>

- *Type:* `string`

---

### WafRegionalWebAclSummary <a name="aws-cdk-sdk.wafregional.WafRegionalWebAclSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalWebAclSummary: wafregional.WafRegionalWebAclSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAclSummary.property.name"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAclSummary.property.webAclId"></a>

- *Type:* `string`

---

### WafRegionalWebAclUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalWebAclUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalWebAclUpdate: wafregional.WafRegionalWebAclUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAclUpdate.property.action"></a>

- *Type:* `string`

---

##### `activatedRule`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalWebAclUpdate.property.activatedRule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalActivatedRule`](#aws-cdk-sdk.wafregional.WafRegionalActivatedRule)

---

### WafRegionalXssMatchSet <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalXssMatchSet: wafregional.WafRegionalXssMatchSet = { ... }
```

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSet.property.xssMatchSetId"></a>

- *Type:* `string`

---

##### `xssMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSet.property.xssMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSet.property.name"></a>

- *Type:* `string`

---

### WafRegionalXssMatchSetSummary <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalXssMatchSetSummary: wafregional.WafRegionalXssMatchSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSetSummary.property.name"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSetSummary.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafRegionalXssMatchSetUpdate <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalXssMatchSetUpdate: wafregional.WafRegionalXssMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `xssMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchSetUpdate.property.xssMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple)

---

### WafRegionalXssMatchTuple <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

const wafRegionalXssMatchTuple: wafregional.WafRegionalXssMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### WAFRegionalResponsesCreateByteMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateByteMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSet.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet)

---

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateByteMatchSetByteMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `byteMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet.property.byteMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateByteMatchSetByteMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateGeoMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateGeoMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSet.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet)

---


### WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet.property.geoMatchConstraints"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint)[]

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateGeoMatchSetGeoMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateIpSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateIpSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSet.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSet.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet)

---


### WAFRegionalResponsesCreateIpSetIpSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateIpSetIpSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSetDescriptors`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet.property.ipSetDescriptors"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor`](#aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor)[]

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateIpSetIpSet.property.name"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateRateBasedRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRateBasedRule(__scope: Construct, __resources: string[], __input: WafRegionalCreateRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRule.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule)

---


### WAFRegionalResponsesCreateRateBasedRuleRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRateBasedRuleRule(__scope: Construct, __resources: string[], __input: WafRegionalCreateRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `matchPredicates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.property.matchPredicates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPredicate`](#aws-cdk-sdk.wafregional.WafRegionalPredicate)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.property.name"></a>

- *Type:* `string`

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRateBasedRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateRegexMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRegexMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSet.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet)

---


### WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `regexMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexMatchSetRegexMatchSet.property.regexMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple)[]

---


### WAFRegionalResponsesCreateRegexPatternSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRegexPatternSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSet.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSet.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet)

---


### WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet.property.name"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `regexPatternStrings`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRegexPatternSetRegexPatternSet.property.regexPatternStrings"></a>

- *Type:* `string`[]

---


### WAFRegionalResponsesCreateRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRule(__scope: Construct, __resources: string[], __input: WafRegionalCreateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRule.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule)

---


### WAFRegionalResponsesCreateRuleGroup <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroup.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRuleGroup(__scope: Construct, __resources: string[], __input: WafRegionalCreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroup.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroup`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroup.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup)

---


### WAFRegionalResponsesCreateRuleGroupRuleGroup <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup(__scope: Construct, __resources: string[], __input: WafRegionalCreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleGroupRuleGroup.property.ruleGroupId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateRuleRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateRuleRule(__scope: Construct, __resources: string[], __input: WafRegionalCreateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.property.name"></a>

- *Type:* `string`

---

##### `predicates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.property.predicates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPredicate`](#aws-cdk-sdk.wafregional.WafRegionalPredicate)[]

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateSizeConstraintSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSet.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSet.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet)

---


### WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet.property.name"></a>

- *Type:* `string`

---

##### `sizeConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet.property.sizeConstraints"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraint`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraint)[]

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSizeConstraintSetSizeConstraintSet.property.sizeConstraintSetId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateSqlInjectionMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSet.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet)

---


### WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.property.name"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple)[]

---


### WAFRegionalResponsesCreateWebAcl <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAcl.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateWebAcl(__scope: Construct, __resources: string[], __input: WafRegionalCreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAcl.property.changeToken"></a>

- *Type:* `string`

---

##### `webAcl`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAcl.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl)

---


### WAFRegionalResponsesCreateWebAclMigrationStack <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclMigrationStack"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclMigrationStack.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateWebAclMigrationStack(__scope: Construct, __resources: string[], __input: WafRegionalCreateWebAclMigrationStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclMigrationStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclMigrationStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclMigrationStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateWebAclMigrationStackRequest)

---



#### Properties <a name="Properties"></a>

##### `s3ObjectUrl`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclMigrationStack.property.s3ObjectUrl"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateWebAclWebAcl <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateWebAclWebAcl(__scope: Construct, __resources: string[], __input: WafRegionalCreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction)

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalActivatedRule`](#aws-cdk-sdk.wafregional.WafRegionalActivatedRule)[]

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.property.webAclArn"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAcl.property.webAclId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateWebAclWebAclDefaultAction <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction(__scope: Construct, __resources: string[], __input: WafRegionalCreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateWebAclWebAclDefaultAction.property.type"></a>

- *Type:* `string`

---


### WAFRegionalResponsesCreateXssMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateXssMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `xssMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSet.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet)

---


### WAFRegionalResponsesCreateXssMatchSetXssMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalCreateXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalCreateXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet.property.name"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet.property.xssMatchSetId"></a>

- *Type:* `string`

---

##### `xssMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesCreateXssMatchSetXssMatchSet.property.xssMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple)[]

---


### WAFRegionalResponsesDeleteByteMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteByteMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteByteMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteByteMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteGeoMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteGeoMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteGeoMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteGeoMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteIpSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteIpSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteIpSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteIpSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteRateBasedRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRateBasedRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteRateBasedRule(__scope: Construct, __resources: string[], __input: WafRegionalDeleteRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRateBasedRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteRegexMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteRegexMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteRegexPatternSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexPatternSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteRegexPatternSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRegexPatternSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteRule(__scope: Construct, __resources: string[], __input: WafRegionalDeleteRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteRuleGroup <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRuleGroup.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteRuleGroup(__scope: Construct, __resources: string[], __input: WafRegionalDeleteRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteRuleGroup.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteSizeConstraintSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSizeConstraintSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSizeConstraintSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteSqlInjectionMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteSqlInjectionMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteWebAcl <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteWebAcl.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteWebAcl(__scope: Construct, __resources: string[], __input: WafRegionalDeleteWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteWebAcl.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesDeleteXssMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteXssMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesDeleteXssMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalDeleteXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalDeleteXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesDeleteXssMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchByteMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchByteMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSet.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet)

---


### WAFRegionalResponsesFetchByteMatchSetByteMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `byteMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet.property.byteMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchTuple)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchByteMatchSetByteMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchChangeToken <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeToken"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeToken.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchChangeToken(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeToken.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeToken.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchChangeTokenStatus <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeTokenStatus"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeTokenStatus.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchChangeTokenStatus(__scope: Construct, __resources: string[], __input: WafRegionalGetChangeTokenStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeTokenStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeTokenStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeTokenStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetChangeTokenStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `changeTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchChangeTokenStatus.property.changeTokenStatus"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchGeoMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchGeoMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSet.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet)

---


### WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet.property.geoMatchConstraints"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchConstraint)[]

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchGeoMatchSetGeoMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchIpSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchIpSet(__scope: Construct, __resources: string[], __input: WafRegionalGetIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSet.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet)

---


### WAFRegionalResponsesFetchIpSetIpSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchIpSetIpSet(__scope: Construct, __resources: string[], __input: WafRegionalGetIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSetDescriptors`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet.property.ipSetDescriptors"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor`](#aws-cdk-sdk.wafregional.WafRegionalIpSetDescriptor)[]

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchIpSetIpSet.property.name"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchLoggingConfiguration <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfiguration.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafRegionalGetLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration)

---


### WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafRegionalGetLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `redactedFields`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchLoggingConfigurationLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchPermissionPolicy <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchPermissionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchPermissionPolicy.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchPermissionPolicy(__scope: Construct, __resources: string[], __input: WafRegionalGetPermissionPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchPermissionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchPermissionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchPermissionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetPermissionPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchPermissionPolicy.property.policy"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchRateBasedRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRateBasedRule(__scope: Construct, __resources: string[], __input: WafRegionalGetRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule)

---


### WAFRegionalResponsesFetchRateBasedRuleManagedKeys <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys(__scope: Construct, __resources: string[], __input: WafRegionalGetRateBasedRuleManagedKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleManagedKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `managedKeys`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys.property.managedKeys"></a>

- *Type:* `string`[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleManagedKeys.property.nextMarker"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchRateBasedRuleRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRateBasedRuleRule(__scope: Construct, __resources: string[], __input: WafRegionalGetRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `matchPredicates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.property.matchPredicates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPredicate`](#aws-cdk-sdk.wafregional.WafRegionalPredicate)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.property.name"></a>

- *Type:* `string`

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRateBasedRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchRegexMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRegexMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `regexMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSet.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet)

---


### WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `regexMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexMatchSetRegexMatchSet.property.regexMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchTuple)[]

---


### WAFRegionalResponsesFetchRegexPatternSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRegexPatternSet(__scope: Construct, __resources: string[], __input: WafRegionalGetRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `regexPatternSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSet.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet)

---


### WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet(__scope: Construct, __resources: string[], __input: WafRegionalGetRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet.property.name"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `regexPatternStrings`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRegexPatternSetRegexPatternSet.property.regexPatternStrings"></a>

- *Type:* `string`[]

---


### WAFRegionalResponsesFetchRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRule(__scope: Construct, __resources: string[], __input: WafRegionalGetRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule)

---


### WAFRegionalResponsesFetchRuleGroup <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroup.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRuleGroup(__scope: Construct, __resources: string[], __input: WafRegionalGetRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ruleGroup`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroup.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup)

---


### WAFRegionalResponsesFetchRuleGroupRuleGroup <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup(__scope: Construct, __resources: string[], __input: WafRegionalGetRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleGroupRuleGroup.property.ruleGroupId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchRuleRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchRuleRule(__scope: Construct, __resources: string[], __input: WafRegionalGetRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.property.name"></a>

- *Type:* `string`

---

##### `predicates`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.property.predicates"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPredicate`](#aws-cdk-sdk.wafregional.WafRegionalPredicate)[]

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchSampledRequests <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchSampledRequests(__scope: Construct, __resources: string[], __input: WafRegionalGetSampledRequestsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest)

---



#### Properties <a name="Properties"></a>

##### `populationSize`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests.property.populationSize"></a>

- *Type:* `number`

---

##### `sampledRequests`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests.property.sampledRequests"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest`](#aws-cdk-sdk.wafregional.WafRegionalSampledHttpRequest)[]

---

##### `timeWindow`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequests.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow)

---


### WAFRegionalResponsesFetchSampledRequestsTimeWindow <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow(__scope: Construct, __resources: string[], __input: WafRegionalGetSampledRequestsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSampledRequestsRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSampledRequestsTimeWindow.property.startTime"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchSizeConstraintSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafRegionalGetSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sizeConstraintSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSet.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet)

---


### WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafRegionalGetSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet.property.name"></a>

- *Type:* `string`

---

##### `sizeConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet.property.sizeConstraints"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraint`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraint)[]

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSizeConstraintSetSizeConstraintSet.property.sizeConstraintSetId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchSqlInjectionMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sqlInjectionMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSet.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet)

---


### WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.property.name"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchTuple)[]

---


### WAFRegionalResponsesFetchWebAcl <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAcl.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchWebAcl(__scope: Construct, __resources: string[], __input: WafRegionalGetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `webAcl`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAcl.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl)

---


### WAFRegionalResponsesFetchWebAclForResource <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResource"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResource.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchWebAclForResource(__scope: Construct, __resources: string[], __input: WafRegionalGetWebAclForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `webAclSummary`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResource.property.webAclSummary"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary)

---


### WAFRegionalResponsesFetchWebAclForResourceWebAclSummary <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary(__scope: Construct, __resources: string[], __input: WafRegionalGetWebAclForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetWebAclForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary.property.name"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclForResourceWebAclSummary.property.webAclId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchWebAclWebAcl <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchWebAclWebAcl(__scope: Construct, __resources: string[], __input: WafRegionalGetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction)

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalActivatedRule`](#aws-cdk-sdk.wafregional.WafRegionalActivatedRule)[]

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.property.webAclArn"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAcl.property.webAclId"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchWebAclWebAclDefaultAction <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction(__scope: Construct, __resources: string[], __input: WafRegionalGetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchWebAclWebAclDefaultAction.property.type"></a>

- *Type:* `string`

---


### WAFRegionalResponsesFetchXssMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchXssMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `xssMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSet.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet)

---


### WAFRegionalResponsesFetchXssMatchSetXssMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalGetXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalGetXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet.property.name"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet.property.xssMatchSetId"></a>

- *Type:* `string`

---

##### `xssMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesFetchXssMatchSetXssMatchSet.property.xssMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchTuple)[]

---


### WAFRegionalResponsesListActivatedRulesInRuleGroup <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup(__scope: Construct, __resources: string[], __input: WafRegionalListActivatedRulesInRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalListActivatedRulesInRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `activatedRules`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup.property.activatedRules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalActivatedRule`](#aws-cdk-sdk.wafregional.WafRegionalActivatedRule)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListActivatedRulesInRuleGroup.property.nextMarker"></a>

- *Type:* `string`

---


### WAFRegionalResponsesListByteMatchSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListByteMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListByteMatchSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListByteMatchSets(__scope: Construct, __resources: string[], __input: WafRegionalListByteMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListByteMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListByteMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListByteMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListByteMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListByteMatchSets.property.byteMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalByteMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalByteMatchSetSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListByteMatchSets.property.nextMarker"></a>

- *Type:* `string`

---


### WAFRegionalResponsesListGeoMatchSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListGeoMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListGeoMatchSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListGeoMatchSets(__scope: Construct, __resources: string[], __input: WafRegionalListGeoMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListGeoMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListGeoMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListGeoMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListGeoMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListGeoMatchSets.property.geoMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalGeoMatchSetSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListGeoMatchSets.property.nextMarker"></a>

- *Type:* `string`

---


### WAFRegionalResponsesListIpSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListIpSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListIpSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListIpSets(__scope: Construct, __resources: string[], __input: WafRegionalListIpSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListIpSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListIpSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListIpSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListIpSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListIpSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListIpSets.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalIpSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalIpSetSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListIpSets.property.nextMarker"></a>

- *Type:* `string`

---


### WAFRegionalResponsesListLoggingConfigurations <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListLoggingConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListLoggingConfigurations.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListLoggingConfigurations(__scope: Construct, __resources: string[], __input: WafRegionalListLoggingConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListLoggingConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListLoggingConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListLoggingConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListLoggingConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListLoggingConfigurations.property.loggingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration`](#aws-cdk-sdk.wafregional.WafRegionalLoggingConfiguration)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListLoggingConfigurations.property.nextMarker"></a>

- *Type:* `string`

---


### WAFRegionalResponsesListRateBasedRules <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRateBasedRules"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRateBasedRules.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListRateBasedRules(__scope: Construct, __resources: string[], __input: WafRegionalListRateBasedRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRateBasedRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRateBasedRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRateBasedRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRateBasedRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRateBasedRules.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRateBasedRules.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleSummary`](#aws-cdk-sdk.wafregional.WafRegionalRuleSummary)[]

---


### WAFRegionalResponsesListRegexMatchSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexMatchSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListRegexMatchSets(__scope: Construct, __resources: string[], __input: WafRegionalListRegexMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRegexMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexMatchSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexMatchSets.property.regexMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalRegexMatchSetSummary)[]

---


### WAFRegionalResponsesListRegexPatternSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexPatternSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexPatternSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListRegexPatternSets(__scope: Construct, __resources: string[], __input: WafRegionalListRegexPatternSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexPatternSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexPatternSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexPatternSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRegexPatternSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexPatternSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexPatternSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRegexPatternSets.property.regexPatternSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalRegexPatternSetSummary)[]

---


### WAFRegionalResponsesListResourcesForWebAcl <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListResourcesForWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListResourcesForWebAcl.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListResourcesForWebAcl(__scope: Construct, __resources: string[], __input: WafRegionalListResourcesForWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListResourcesForWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListResourcesForWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListResourcesForWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalListResourcesForWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceArns`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListResourcesForWebAcl.property.resourceArns"></a>

- *Type:* `string`[]

---


### WAFRegionalResponsesListRuleGroups <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRuleGroups.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListRuleGroups(__scope: Construct, __resources: string[], __input: WafRegionalListRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRuleGroups.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRuleGroups.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleGroupSummary`](#aws-cdk-sdk.wafregional.WafRegionalRuleGroupSummary)[]

---


### WAFRegionalResponsesListRules <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRules"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRules.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListRules(__scope: Construct, __resources: string[], __input: WafRegionalListRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListRulesRequest`](#aws-cdk-sdk.wafregional.WafRegionalListRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRules.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListRules.property.rules"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalRuleSummary`](#aws-cdk-sdk.wafregional.WafRegionalRuleSummary)[]

---


### WAFRegionalResponsesListSizeConstraintSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSizeConstraintSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSizeConstraintSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListSizeConstraintSets(__scope: Construct, __resources: string[], __input: WafRegionalListSizeConstraintSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSizeConstraintSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSizeConstraintSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSizeConstraintSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListSizeConstraintSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSizeConstraintSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `sizeConstraintSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSizeConstraintSets.property.sizeConstraintSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalSizeConstraintSetSummary)[]

---


### WAFRegionalResponsesListSqlInjectionMatchSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSqlInjectionMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSqlInjectionMatchSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListSqlInjectionMatchSets(__scope: Construct, __resources: string[], __input: WafRegionalListSqlInjectionMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSqlInjectionMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSqlInjectionMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSqlInjectionMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListSqlInjectionMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSqlInjectionMatchSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSqlInjectionMatchSets.property.sqlInjectionMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalSqlInjectionMatchSetSummary)[]

---


### WAFRegionalResponsesListSubscribedRuleGroups <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSubscribedRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSubscribedRuleGroups.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListSubscribedRuleGroups(__scope: Construct, __resources: string[], __input: WafRegionalListSubscribedRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSubscribedRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSubscribedRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSubscribedRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListSubscribedRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSubscribedRuleGroups.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListSubscribedRuleGroups.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary`](#aws-cdk-sdk.wafregional.WafRegionalSubscribedRuleGroupSummary)[]

---


### WAFRegionalResponsesListTagsForResource <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResource.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: WafRegionalListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResource.property.nextMarker"></a>

- *Type:* `string`

---

##### `tagInfoForResource`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResource.property.tagInfoForResource"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource)

---


### WAFRegionalResponsesListTagsForResourceTagInfoForResource <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource(__scope: Construct, __resources: string[], __input: WafRegionalListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest`](#aws-cdk-sdk.wafregional.WafRegionalListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListTagsForResourceTagInfoForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalTag`](#aws-cdk-sdk.wafregional.WafRegionalTag)[]

---


### WAFRegionalResponsesListWebAcLs <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListWebAcLs"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListWebAcLs.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListWebAcLs(__scope: Construct, __resources: string[], __input: WafRegionalListWebAcLsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListWebAcLs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListWebAcLs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListWebAcLs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListWebAcLsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListWebAcLsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListWebAcLs.property.nextMarker"></a>

- *Type:* `string`

---

##### `webAcLs`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListWebAcLs.property.webAcLs"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalWebAclSummary`](#aws-cdk-sdk.wafregional.WafRegionalWebAclSummary)[]

---


### WAFRegionalResponsesListXssMatchSets <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListXssMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListXssMatchSets.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesListXssMatchSets(__scope: Construct, __resources: string[], __input: WafRegionalListXssMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListXssMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListXssMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListXssMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsRequest`](#aws-cdk-sdk.wafregional.WafRegionalListXssMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListXssMatchSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `xssMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesListXssMatchSets.property.xssMatchSets"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalXssMatchSetSummary`](#aws-cdk-sdk.wafregional.WafRegionalXssMatchSetSummary)[]

---


### WAFRegionalResponsesPutLoggingConfiguration <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfiguration.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesPutLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafRegionalPutLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest`](#aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration)

---


### WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafRegionalPutLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest`](#aws-cdk-sdk.wafregional.WafRegionalPutLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `redactedFields`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalFieldToMatch`](#aws-cdk-sdk.wafregional.WafRegionalFieldToMatch)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesPutLoggingConfigurationLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateByteMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateByteMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateByteMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateByteMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateGeoMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateGeoMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateGeoMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateGeoMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateIpSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateIpSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateIpSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateIpSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateRateBasedRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRateBasedRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateRateBasedRule(__scope: Construct, __resources: string[], __input: WafRegionalUpdateRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRateBasedRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateRegexMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateRegexMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateRegexPatternSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexPatternSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateRegexPatternSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRegexPatternSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateRule <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRule"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRule.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateRule(__scope: Construct, __resources: string[], __input: WafRegionalUpdateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateRuleGroup <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRuleGroup.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateRuleGroup(__scope: Construct, __resources: string[], __input: WafRegionalUpdateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateRuleGroup.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateSizeConstraintSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSizeConstraintSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSizeConstraintSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateSqlInjectionMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateSqlInjectionMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateWebAcl <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateWebAcl.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateWebAcl(__scope: Construct, __resources: string[], __input: WafRegionalUpdateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateWebAcl.property.changeToken"></a>

- *Type:* `string`

---


### WAFRegionalResponsesUpdateXssMatchSet <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateXssMatchSet.Initializer"></a>

```typescript
import { wafregional } from 'aws-cdk-sdk'

new wafregional.WAFRegionalResponsesUpdateXssMatchSet(__scope: Construct, __resources: string[], __input: WafRegionalUpdateXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest`](#aws-cdk-sdk.wafregional.WafRegionalUpdateXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.wafregional.WAFRegionalResponsesUpdateXssMatchSet.property.changeToken"></a>

- *Type:* `string`

---



