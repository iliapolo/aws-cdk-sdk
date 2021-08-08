# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### WafClient <a name="aws-cdk-sdk.waf.WafClient"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WafClient.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WafClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createByteMatchSet` <a name="aws-cdk-sdk.waf.WafClient.createByteMatchSet"></a>

```typescript
public createByteMatchSet(input: WafCreateByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateByteMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateByteMatchSetRequest)

---

##### `createGeoMatchSet` <a name="aws-cdk-sdk.waf.WafClient.createGeoMatchSet"></a>

```typescript
public createGeoMatchSet(input: WafCreateGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest)

---

##### `createIpSet` <a name="aws-cdk-sdk.waf.WafClient.createIpSet"></a>

```typescript
public createIpSet(input: WafCreateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateIpSetRequest`](#aws-cdk-sdk.waf.WafCreateIpSetRequest)

---

##### `createRateBasedRule` <a name="aws-cdk-sdk.waf.WafClient.createRateBasedRule"></a>

```typescript
public createRateBasedRule(input: WafCreateRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest)

---

##### `createRegexMatchSet` <a name="aws-cdk-sdk.waf.WafClient.createRegexMatchSet"></a>

```typescript
public createRegexMatchSet(input: WafCreateRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest)

---

##### `createRegexPatternSet` <a name="aws-cdk-sdk.waf.WafClient.createRegexPatternSet"></a>

```typescript
public createRegexPatternSet(input: WafCreateRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest)

---

##### `createRule` <a name="aws-cdk-sdk.waf.WafClient.createRule"></a>

```typescript
public createRule(input: WafCreateRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRuleRequest`](#aws-cdk-sdk.waf.WafCreateRuleRequest)

---

##### `createRuleGroup` <a name="aws-cdk-sdk.waf.WafClient.createRuleGroup"></a>

```typescript
public createRuleGroup(input: WafCreateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRuleGroupRequest`](#aws-cdk-sdk.waf.WafCreateRuleGroupRequest)

---

##### `createSizeConstraintSet` <a name="aws-cdk-sdk.waf.WafClient.createSizeConstraintSet"></a>

```typescript
public createSizeConstraintSet(input: WafCreateSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest)

---

##### `createSqlInjectionMatchSet` <a name="aws-cdk-sdk.waf.WafClient.createSqlInjectionMatchSet"></a>

```typescript
public createSqlInjectionMatchSet(input: WafCreateSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest)

---

##### `createWebAcl` <a name="aws-cdk-sdk.waf.WafClient.createWebAcl"></a>

```typescript
public createWebAcl(input: WafCreateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateWebAclRequest`](#aws-cdk-sdk.waf.WafCreateWebAclRequest)

---

##### `createWebAclMigrationStack` <a name="aws-cdk-sdk.waf.WafClient.createWebAclMigrationStack"></a>

```typescript
public createWebAclMigrationStack(input: WafCreateWebAclMigrationStackRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest`](#aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest)

---

##### `createXssMatchSet` <a name="aws-cdk-sdk.waf.WafClient.createXssMatchSet"></a>

```typescript
public createXssMatchSet(input: WafCreateXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateXssMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateXssMatchSetRequest)

---

##### `deleteByteMatchSet` <a name="aws-cdk-sdk.waf.WafClient.deleteByteMatchSet"></a>

```typescript
public deleteByteMatchSet(input: WafDeleteByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteByteMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteByteMatchSetRequest)

---

##### `deleteGeoMatchSet` <a name="aws-cdk-sdk.waf.WafClient.deleteGeoMatchSet"></a>

```typescript
public deleteGeoMatchSet(input: WafDeleteGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteGeoMatchSetRequest)

---

##### `deleteIpSet` <a name="aws-cdk-sdk.waf.WafClient.deleteIpSet"></a>

```typescript
public deleteIpSet(input: WafDeleteIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteIpSetRequest`](#aws-cdk-sdk.waf.WafDeleteIpSetRequest)

---

##### `deleteLoggingConfiguration` <a name="aws-cdk-sdk.waf.WafClient.deleteLoggingConfiguration"></a>

```typescript
public deleteLoggingConfiguration(input: WafDeleteLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteLoggingConfigurationRequest`](#aws-cdk-sdk.waf.WafDeleteLoggingConfigurationRequest)

---

##### `deletePermissionPolicy` <a name="aws-cdk-sdk.waf.WafClient.deletePermissionPolicy"></a>

```typescript
public deletePermissionPolicy(input: WafDeletePermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeletePermissionPolicyRequest`](#aws-cdk-sdk.waf.WafDeletePermissionPolicyRequest)

---

##### `deleteRateBasedRule` <a name="aws-cdk-sdk.waf.WafClient.deleteRateBasedRule"></a>

```typescript
public deleteRateBasedRule(input: WafDeleteRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafDeleteRateBasedRuleRequest)

---

##### `deleteRegexMatchSet` <a name="aws-cdk-sdk.waf.WafClient.deleteRegexMatchSet"></a>

```typescript
public deleteRegexMatchSet(input: WafDeleteRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteRegexMatchSetRequest)

---

##### `deleteRegexPatternSet` <a name="aws-cdk-sdk.waf.WafClient.deleteRegexPatternSet"></a>

```typescript
public deleteRegexPatternSet(input: WafDeleteRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafDeleteRegexPatternSetRequest)

---

##### `deleteRule` <a name="aws-cdk-sdk.waf.WafClient.deleteRule"></a>

```typescript
public deleteRule(input: WafDeleteRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRuleRequest`](#aws-cdk-sdk.waf.WafDeleteRuleRequest)

---

##### `deleteRuleGroup` <a name="aws-cdk-sdk.waf.WafClient.deleteRuleGroup"></a>

```typescript
public deleteRuleGroup(input: WafDeleteRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRuleGroupRequest`](#aws-cdk-sdk.waf.WafDeleteRuleGroupRequest)

---

##### `deleteSizeConstraintSet` <a name="aws-cdk-sdk.waf.WafClient.deleteSizeConstraintSet"></a>

```typescript
public deleteSizeConstraintSet(input: WafDeleteSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafDeleteSizeConstraintSetRequest)

---

##### `deleteSqlInjectionMatchSet` <a name="aws-cdk-sdk.waf.WafClient.deleteSqlInjectionMatchSet"></a>

```typescript
public deleteSqlInjectionMatchSet(input: WafDeleteSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetRequest)

---

##### `deleteWebAcl` <a name="aws-cdk-sdk.waf.WafClient.deleteWebAcl"></a>

```typescript
public deleteWebAcl(input: WafDeleteWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteWebAclRequest`](#aws-cdk-sdk.waf.WafDeleteWebAclRequest)

---

##### `deleteXssMatchSet` <a name="aws-cdk-sdk.waf.WafClient.deleteXssMatchSet"></a>

```typescript
public deleteXssMatchSet(input: WafDeleteXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteXssMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteXssMatchSetRequest)

---

##### `fetchByteMatchSet` <a name="aws-cdk-sdk.waf.WafClient.fetchByteMatchSet"></a>

```typescript
public fetchByteMatchSet(input: WafGetByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetByteMatchSetRequest`](#aws-cdk-sdk.waf.WafGetByteMatchSetRequest)

---

##### `fetchChangeToken` <a name="aws-cdk-sdk.waf.WafClient.fetchChangeToken"></a>

```typescript
public fetchChangeToken()
```

##### `fetchChangeTokenStatus` <a name="aws-cdk-sdk.waf.WafClient.fetchChangeTokenStatus"></a>

```typescript
public fetchChangeTokenStatus(input: WafGetChangeTokenStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetChangeTokenStatusRequest`](#aws-cdk-sdk.waf.WafGetChangeTokenStatusRequest)

---

##### `fetchGeoMatchSet` <a name="aws-cdk-sdk.waf.WafClient.fetchGeoMatchSet"></a>

```typescript
public fetchGeoMatchSet(input: WafGetGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafGetGeoMatchSetRequest)

---

##### `fetchIpSet` <a name="aws-cdk-sdk.waf.WafClient.fetchIpSet"></a>

```typescript
public fetchIpSet(input: WafGetIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetIpSetRequest`](#aws-cdk-sdk.waf.WafGetIpSetRequest)

---

##### `fetchLoggingConfiguration` <a name="aws-cdk-sdk.waf.WafClient.fetchLoggingConfiguration"></a>

```typescript
public fetchLoggingConfiguration(input: WafGetLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest`](#aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest)

---

##### `fetchPermissionPolicy` <a name="aws-cdk-sdk.waf.WafClient.fetchPermissionPolicy"></a>

```typescript
public fetchPermissionPolicy(input: WafGetPermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetPermissionPolicyRequest`](#aws-cdk-sdk.waf.WafGetPermissionPolicyRequest)

---

##### `fetchRateBasedRule` <a name="aws-cdk-sdk.waf.WafClient.fetchRateBasedRule"></a>

```typescript
public fetchRateBasedRule(input: WafGetRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafGetRateBasedRuleRequest)

---

##### `fetchRateBasedRuleManagedKeys` <a name="aws-cdk-sdk.waf.WafClient.fetchRateBasedRuleManagedKeys"></a>

```typescript
public fetchRateBasedRuleManagedKeys(input: WafGetRateBasedRuleManagedKeysRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysRequest`](#aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysRequest)

---

##### `fetchRegexMatchSet` <a name="aws-cdk-sdk.waf.WafClient.fetchRegexMatchSet"></a>

```typescript
public fetchRegexMatchSet(input: WafGetRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafGetRegexMatchSetRequest)

---

##### `fetchRegexPatternSet` <a name="aws-cdk-sdk.waf.WafClient.fetchRegexPatternSet"></a>

```typescript
public fetchRegexPatternSet(input: WafGetRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafGetRegexPatternSetRequest)

---

##### `fetchRule` <a name="aws-cdk-sdk.waf.WafClient.fetchRule"></a>

```typescript
public fetchRule(input: WafGetRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRuleRequest`](#aws-cdk-sdk.waf.WafGetRuleRequest)

---

##### `fetchRuleGroup` <a name="aws-cdk-sdk.waf.WafClient.fetchRuleGroup"></a>

```typescript
public fetchRuleGroup(input: WafGetRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRuleGroupRequest`](#aws-cdk-sdk.waf.WafGetRuleGroupRequest)

---

##### `fetchSampledRequests` <a name="aws-cdk-sdk.waf.WafClient.fetchSampledRequests"></a>

```typescript
public fetchSampledRequests(input: WafGetSampledRequestsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSampledRequestsRequest`](#aws-cdk-sdk.waf.WafGetSampledRequestsRequest)

---

##### `fetchSizeConstraintSet` <a name="aws-cdk-sdk.waf.WafClient.fetchSizeConstraintSet"></a>

```typescript
public fetchSizeConstraintSet(input: WafGetSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest)

---

##### `fetchSqlInjectionMatchSet` <a name="aws-cdk-sdk.waf.WafClient.fetchSqlInjectionMatchSet"></a>

```typescript
public fetchSqlInjectionMatchSet(input: WafGetSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest)

---

##### `fetchWebAcl` <a name="aws-cdk-sdk.waf.WafClient.fetchWebAcl"></a>

```typescript
public fetchWebAcl(input: WafGetWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetWebAclRequest`](#aws-cdk-sdk.waf.WafGetWebAclRequest)

---

##### `fetchXssMatchSet` <a name="aws-cdk-sdk.waf.WafClient.fetchXssMatchSet"></a>

```typescript
public fetchXssMatchSet(input: WafGetXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetXssMatchSetRequest`](#aws-cdk-sdk.waf.WafGetXssMatchSetRequest)

---

##### `listActivatedRulesInRuleGroup` <a name="aws-cdk-sdk.waf.WafClient.listActivatedRulesInRuleGroup"></a>

```typescript
public listActivatedRulesInRuleGroup(input: WafListActivatedRulesInRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest`](#aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest)

---

##### `listByteMatchSets` <a name="aws-cdk-sdk.waf.WafClient.listByteMatchSets"></a>

```typescript
public listByteMatchSets(input: WafListByteMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListByteMatchSetsRequest`](#aws-cdk-sdk.waf.WafListByteMatchSetsRequest)

---

##### `listGeoMatchSets` <a name="aws-cdk-sdk.waf.WafClient.listGeoMatchSets"></a>

```typescript
public listGeoMatchSets(input: WafListGeoMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListGeoMatchSetsRequest`](#aws-cdk-sdk.waf.WafListGeoMatchSetsRequest)

---

##### `listIpSets` <a name="aws-cdk-sdk.waf.WafClient.listIpSets"></a>

```typescript
public listIpSets(input: WafListIpSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListIpSetsRequest`](#aws-cdk-sdk.waf.WafListIpSetsRequest)

---

##### `listLoggingConfigurations` <a name="aws-cdk-sdk.waf.WafClient.listLoggingConfigurations"></a>

```typescript
public listLoggingConfigurations(input: WafListLoggingConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListLoggingConfigurationsRequest`](#aws-cdk-sdk.waf.WafListLoggingConfigurationsRequest)

---

##### `listRateBasedRules` <a name="aws-cdk-sdk.waf.WafClient.listRateBasedRules"></a>

```typescript
public listRateBasedRules(input: WafListRateBasedRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRateBasedRulesRequest`](#aws-cdk-sdk.waf.WafListRateBasedRulesRequest)

---

##### `listRegexMatchSets` <a name="aws-cdk-sdk.waf.WafClient.listRegexMatchSets"></a>

```typescript
public listRegexMatchSets(input: WafListRegexMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRegexMatchSetsRequest`](#aws-cdk-sdk.waf.WafListRegexMatchSetsRequest)

---

##### `listRegexPatternSets` <a name="aws-cdk-sdk.waf.WafClient.listRegexPatternSets"></a>

```typescript
public listRegexPatternSets(input: WafListRegexPatternSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRegexPatternSetsRequest`](#aws-cdk-sdk.waf.WafListRegexPatternSetsRequest)

---

##### `listRuleGroups` <a name="aws-cdk-sdk.waf.WafClient.listRuleGroups"></a>

```typescript
public listRuleGroups(input: WafListRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRuleGroupsRequest`](#aws-cdk-sdk.waf.WafListRuleGroupsRequest)

---

##### `listRules` <a name="aws-cdk-sdk.waf.WafClient.listRules"></a>

```typescript
public listRules(input: WafListRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRulesRequest`](#aws-cdk-sdk.waf.WafListRulesRequest)

---

##### `listSizeConstraintSets` <a name="aws-cdk-sdk.waf.WafClient.listSizeConstraintSets"></a>

```typescript
public listSizeConstraintSets(input: WafListSizeConstraintSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListSizeConstraintSetsRequest`](#aws-cdk-sdk.waf.WafListSizeConstraintSetsRequest)

---

##### `listSqlInjectionMatchSets` <a name="aws-cdk-sdk.waf.WafClient.listSqlInjectionMatchSets"></a>

```typescript
public listSqlInjectionMatchSets(input: WafListSqlInjectionMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsRequest`](#aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsRequest)

---

##### `listSubscribedRuleGroups` <a name="aws-cdk-sdk.waf.WafClient.listSubscribedRuleGroups"></a>

```typescript
public listSubscribedRuleGroups(input: WafListSubscribedRuleGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListSubscribedRuleGroupsRequest`](#aws-cdk-sdk.waf.WafListSubscribedRuleGroupsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.waf.WafClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: WafListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListTagsForResourceRequest`](#aws-cdk-sdk.waf.WafListTagsForResourceRequest)

---

##### `listWebAcLs` <a name="aws-cdk-sdk.waf.WafClient.listWebAcLs"></a>

```typescript
public listWebAcLs(input: WafListWebAcLsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListWebAcLsRequest`](#aws-cdk-sdk.waf.WafListWebAcLsRequest)

---

##### `listXssMatchSets` <a name="aws-cdk-sdk.waf.WafClient.listXssMatchSets"></a>

```typescript
public listXssMatchSets(input: WafListXssMatchSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListXssMatchSetsRequest`](#aws-cdk-sdk.waf.WafListXssMatchSetsRequest)

---

##### `putLoggingConfiguration` <a name="aws-cdk-sdk.waf.WafClient.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(input: WafPutLoggingConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest`](#aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest)

---

##### `putPermissionPolicy` <a name="aws-cdk-sdk.waf.WafClient.putPermissionPolicy"></a>

```typescript
public putPermissionPolicy(input: WafPutPermissionPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPutPermissionPolicyRequest`](#aws-cdk-sdk.waf.WafPutPermissionPolicyRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.waf.WafClient.tagResource"></a>

```typescript
public tagResource(input: WafTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTagResourceRequest`](#aws-cdk-sdk.waf.WafTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.waf.WafClient.untagResource"></a>

```typescript
public untagResource(input: WafUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUntagResourceRequest`](#aws-cdk-sdk.waf.WafUntagResourceRequest)

---

##### `updateByteMatchSet` <a name="aws-cdk-sdk.waf.WafClient.updateByteMatchSet"></a>

```typescript
public updateByteMatchSet(input: WafUpdateByteMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest)

---

##### `updateGeoMatchSet` <a name="aws-cdk-sdk.waf.WafClient.updateGeoMatchSet"></a>

```typescript
public updateGeoMatchSet(input: WafUpdateGeoMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest)

---

##### `updateIpSet` <a name="aws-cdk-sdk.waf.WafClient.updateIpSet"></a>

```typescript
public updateIpSet(input: WafUpdateIpSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateIpSetRequest`](#aws-cdk-sdk.waf.WafUpdateIpSetRequest)

---

##### `updateRateBasedRule` <a name="aws-cdk-sdk.waf.WafClient.updateRateBasedRule"></a>

```typescript
public updateRateBasedRule(input: WafUpdateRateBasedRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest)

---

##### `updateRegexMatchSet` <a name="aws-cdk-sdk.waf.WafClient.updateRegexMatchSet"></a>

```typescript
public updateRegexMatchSet(input: WafUpdateRegexMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest)

---

##### `updateRegexPatternSet` <a name="aws-cdk-sdk.waf.WafClient.updateRegexPatternSet"></a>

```typescript
public updateRegexPatternSet(input: WafUpdateRegexPatternSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest)

---

##### `updateRule` <a name="aws-cdk-sdk.waf.WafClient.updateRule"></a>

```typescript
public updateRule(input: WafUpdateRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRuleRequest`](#aws-cdk-sdk.waf.WafUpdateRuleRequest)

---

##### `updateRuleGroup` <a name="aws-cdk-sdk.waf.WafClient.updateRuleGroup"></a>

```typescript
public updateRuleGroup(input: WafUpdateRuleGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRuleGroupRequest`](#aws-cdk-sdk.waf.WafUpdateRuleGroupRequest)

---

##### `updateSizeConstraintSet` <a name="aws-cdk-sdk.waf.WafClient.updateSizeConstraintSet"></a>

```typescript
public updateSizeConstraintSet(input: WafUpdateSizeConstraintSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest)

---

##### `updateSqlInjectionMatchSet` <a name="aws-cdk-sdk.waf.WafClient.updateSqlInjectionMatchSet"></a>

```typescript
public updateSqlInjectionMatchSet(input: WafUpdateSqlInjectionMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest)

---

##### `updateWebAcl` <a name="aws-cdk-sdk.waf.WafClient.updateWebAcl"></a>

```typescript
public updateWebAcl(input: WafUpdateWebAclRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateWebAclRequest`](#aws-cdk-sdk.waf.WafUpdateWebAclRequest)

---

##### `updateXssMatchSet` <a name="aws-cdk-sdk.waf.WafClient.updateXssMatchSet"></a>

```typescript
public updateXssMatchSet(input: WafUpdateXssMatchSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest)

---




## Structs <a name="Structs"></a>

### WafActivatedRule <a name="aws-cdk-sdk.waf.WafActivatedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafActivatedRule: waf.WafActivatedRule = { ... }
```

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafActivatedRule.property.priority"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafActivatedRule.property.ruleId"></a>

- *Type:* `string`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafActivatedRule.property.action"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWafAction`](#aws-cdk-sdk.waf.WafWafAction)

---

##### `excludedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafActivatedRule.property.excludedRules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafExcludedRule`](#aws-cdk-sdk.waf.WafExcludedRule)[]

---

##### `overrideAction`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafActivatedRule.property.overrideAction"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWafOverrideAction`](#aws-cdk-sdk.waf.WafWafOverrideAction)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafActivatedRule.property.type"></a>

- *Type:* `string`

---

### WafByteMatchSet <a name="aws-cdk-sdk.waf.WafByteMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafByteMatchSet: waf.WafByteMatchSet = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchSet.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `byteMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchSet.property.byteMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchTuple`](#aws-cdk-sdk.waf.WafByteMatchTuple)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafByteMatchSet.property.name"></a>

- *Type:* `string`

---

### WafByteMatchSetSummary <a name="aws-cdk-sdk.waf.WafByteMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafByteMatchSetSummary: waf.WafByteMatchSetSummary = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchSetSummary.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchSetSummary.property.name"></a>

- *Type:* `string`

---

### WafByteMatchSetUpdate <a name="aws-cdk-sdk.waf.WafByteMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafByteMatchSetUpdate: waf.WafByteMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `byteMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchSetUpdate.property.byteMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchTuple`](#aws-cdk-sdk.waf.WafByteMatchTuple)

---

### WafByteMatchTuple <a name="aws-cdk-sdk.waf.WafByteMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafByteMatchTuple: waf.WafByteMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)

---

##### `positionalConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchTuple.property.positionalConstraint"></a>

- *Type:* `string`

---

##### `targetString`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchTuple.property.targetString"></a>

- *Type:* `any`

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafByteMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

### WafCreateByteMatchSetRequest <a name="aws-cdk-sdk.waf.WafCreateByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateByteMatchSetRequest: waf.WafCreateByteMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateByteMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateByteMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateByteMatchSetResponse <a name="aws-cdk-sdk.waf.WafCreateByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateByteMatchSetResponse: waf.WafCreateByteMatchSetResponse = { ... }
```

##### `byteMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateByteMatchSetResponse.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchSet`](#aws-cdk-sdk.waf.WafByteMatchSet)

---

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateByteMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafCreateGeoMatchSetRequest <a name="aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateGeoMatchSetRequest: waf.WafCreateGeoMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateGeoMatchSetResponse <a name="aws-cdk-sdk.waf.WafCreateGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateGeoMatchSetResponse: waf.WafCreateGeoMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateGeoMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateGeoMatchSetResponse.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchSet`](#aws-cdk-sdk.waf.WafGeoMatchSet)

---

### WafCreateIpSetRequest <a name="aws-cdk-sdk.waf.WafCreateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateIpSetRequest: waf.WafCreateIpSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateIpSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateIpSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateIpSetResponse <a name="aws-cdk-sdk.waf.WafCreateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateIpSetResponse: waf.WafCreateIpSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateIpSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateIpSetResponse.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSet`](#aws-cdk-sdk.waf.WafipSet)

---

### WafCreateRateBasedRuleRequest <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRateBasedRuleRequest: waf.WafCreateRateBasedRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest.property.rateLimit"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTag`](#aws-cdk-sdk.waf.WafTag)[]

---

### WafCreateRateBasedRuleResponse <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRateBasedRuleResponse: waf.WafCreateRateBasedRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRateBasedRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRateBasedRule`](#aws-cdk-sdk.waf.WafRateBasedRule)

---

### WafCreateRegexMatchSetRequest <a name="aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRegexMatchSetRequest: waf.WafCreateRegexMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateRegexMatchSetResponse <a name="aws-cdk-sdk.waf.WafCreateRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRegexMatchSetResponse: waf.WafCreateRegexMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexMatchSetResponse.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchSet`](#aws-cdk-sdk.waf.WafRegexMatchSet)

---

### WafCreateRegexPatternSetRequest <a name="aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRegexPatternSetRequest: waf.WafCreateRegexPatternSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateRegexPatternSetResponse <a name="aws-cdk-sdk.waf.WafCreateRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRegexPatternSetResponse: waf.WafCreateRegexPatternSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexPatternSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRegexPatternSetResponse.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexPatternSet`](#aws-cdk-sdk.waf.WafRegexPatternSet)

---

### WafCreateRuleGroupRequest <a name="aws-cdk-sdk.waf.WafCreateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRuleGroupRequest: waf.WafCreateRuleGroupRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleGroupRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleGroupRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleGroupRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTag`](#aws-cdk-sdk.waf.WafTag)[]

---

### WafCreateRuleGroupResponse <a name="aws-cdk-sdk.waf.WafCreateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRuleGroupResponse: waf.WafCreateRuleGroupResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleGroupResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleGroupResponse.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleGroup`](#aws-cdk-sdk.waf.WafRuleGroup)

---

### WafCreateRuleRequest <a name="aws-cdk-sdk.waf.WafCreateRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRuleRequest: waf.WafCreateRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTag`](#aws-cdk-sdk.waf.WafTag)[]

---

### WafCreateRuleResponse <a name="aws-cdk-sdk.waf.WafCreateRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateRuleResponse: waf.WafCreateRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRule`](#aws-cdk-sdk.waf.WafRule)

---

### WafCreateSizeConstraintSetRequest <a name="aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateSizeConstraintSetRequest: waf.WafCreateSizeConstraintSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateSizeConstraintSetResponse <a name="aws-cdk-sdk.waf.WafCreateSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateSizeConstraintSetResponse: waf.WafCreateSizeConstraintSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateSizeConstraintSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateSizeConstraintSetResponse.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraintSet`](#aws-cdk-sdk.waf.WafSizeConstraintSet)

---

### WafCreateSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateSqlInjectionMatchSetRequest: waf.WafCreateSqlInjectionMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateSqlInjectionMatchSetResponse: waf.WafCreateSqlInjectionMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetResponse.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchSet`](#aws-cdk-sdk.waf.WafSqlInjectionMatchSet)

---

### WafCreateWebAclMigrationStackRequest <a name="aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateWebAclMigrationStackRequest: waf.WafCreateWebAclMigrationStackRequest = { ... }
```

##### `ignoreUnsupportedType`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest.property.ignoreUnsupportedType"></a>

- *Type:* `boolean`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest.property.s3BucketName"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafCreateWebAclMigrationStackResponse <a name="aws-cdk-sdk.waf.WafCreateWebAclMigrationStackResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateWebAclMigrationStackResponse: waf.WafCreateWebAclMigrationStackResponse = { ... }
```

##### `s3ObjectUrl`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclMigrationStackResponse.property.s3ObjectUrl"></a>

- *Type:* `string`

---

### WafCreateWebAclRequest <a name="aws-cdk-sdk.waf.WafCreateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateWebAclRequest: waf.WafCreateWebAclRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclRequest.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWafAction`](#aws-cdk-sdk.waf.WafWafAction)

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclRequest.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTag`](#aws-cdk-sdk.waf.WafTag)[]

---

### WafCreateWebAclResponse <a name="aws-cdk-sdk.waf.WafCreateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateWebAclResponse: waf.WafCreateWebAclResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `webAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateWebAclResponse.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWebAcl`](#aws-cdk-sdk.waf.WafWebAcl)

---

### WafCreateXssMatchSetRequest <a name="aws-cdk-sdk.waf.WafCreateXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateXssMatchSetRequest: waf.WafCreateXssMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateXssMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafCreateXssMatchSetRequest.property.name"></a>

- *Type:* `string`

---

### WafCreateXssMatchSetResponse <a name="aws-cdk-sdk.waf.WafCreateXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafCreateXssMatchSetResponse: waf.WafCreateXssMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateXssMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

##### `xssMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafCreateXssMatchSetResponse.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchSet`](#aws-cdk-sdk.waf.WafXssMatchSet)

---

### WafDeleteByteMatchSetRequest <a name="aws-cdk-sdk.waf.WafDeleteByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteByteMatchSetRequest: waf.WafDeleteByteMatchSetRequest = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteByteMatchSetRequest.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteByteMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteByteMatchSetResponse <a name="aws-cdk-sdk.waf.WafDeleteByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteByteMatchSetResponse: waf.WafDeleteByteMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteByteMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteGeoMatchSetRequest <a name="aws-cdk-sdk.waf.WafDeleteGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteGeoMatchSetRequest: waf.WafDeleteGeoMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteGeoMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteGeoMatchSetRequest.property.geoMatchSetId"></a>

- *Type:* `string`

---

### WafDeleteGeoMatchSetResponse <a name="aws-cdk-sdk.waf.WafDeleteGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteGeoMatchSetResponse: waf.WafDeleteGeoMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteGeoMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteIpSetRequest <a name="aws-cdk-sdk.waf.WafDeleteIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteIpSetRequest: waf.WafDeleteIpSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteIpSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

### WafDeleteIpSetResponse <a name="aws-cdk-sdk.waf.WafDeleteIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteIpSetResponse: waf.WafDeleteIpSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteIpSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteLoggingConfigurationRequest <a name="aws-cdk-sdk.waf.WafDeleteLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteLoggingConfigurationRequest: waf.WafDeleteLoggingConfigurationRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteLoggingConfigurationRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafDeleteLoggingConfigurationResponse <a name="aws-cdk-sdk.waf.WafDeleteLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteLoggingConfigurationResponse: waf.WafDeleteLoggingConfigurationResponse = { ... }
```

### WafDeletePermissionPolicyRequest <a name="aws-cdk-sdk.waf.WafDeletePermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeletePermissionPolicyRequest: waf.WafDeletePermissionPolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeletePermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafDeletePermissionPolicyResponse <a name="aws-cdk-sdk.waf.WafDeletePermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeletePermissionPolicyResponse: waf.WafDeletePermissionPolicyResponse = { ... }
```

### WafDeleteRateBasedRuleRequest <a name="aws-cdk-sdk.waf.WafDeleteRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRateBasedRuleRequest: waf.WafDeleteRateBasedRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRateBasedRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRateBasedRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafDeleteRateBasedRuleResponse <a name="aws-cdk-sdk.waf.WafDeleteRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRateBasedRuleResponse: waf.WafDeleteRateBasedRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteRateBasedRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteRegexMatchSetRequest <a name="aws-cdk-sdk.waf.WafDeleteRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRegexMatchSetRequest: waf.WafDeleteRegexMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRegexMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRegexMatchSetRequest.property.regexMatchSetId"></a>

- *Type:* `string`

---

### WafDeleteRegexMatchSetResponse <a name="aws-cdk-sdk.waf.WafDeleteRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRegexMatchSetResponse: waf.WafDeleteRegexMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteRegexMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteRegexPatternSetRequest <a name="aws-cdk-sdk.waf.WafDeleteRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRegexPatternSetRequest: waf.WafDeleteRegexPatternSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRegexPatternSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRegexPatternSetRequest.property.regexPatternSetId"></a>

- *Type:* `string`

---

### WafDeleteRegexPatternSetResponse <a name="aws-cdk-sdk.waf.WafDeleteRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRegexPatternSetResponse: waf.WafDeleteRegexPatternSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteRegexPatternSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteRuleGroupRequest <a name="aws-cdk-sdk.waf.WafDeleteRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRuleGroupRequest: waf.WafDeleteRuleGroupRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRuleGroupRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafDeleteRuleGroupResponse <a name="aws-cdk-sdk.waf.WafDeleteRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRuleGroupResponse: waf.WafDeleteRuleGroupResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteRuleGroupResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteRuleRequest <a name="aws-cdk-sdk.waf.WafDeleteRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRuleRequest: waf.WafDeleteRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafDeleteRuleResponse <a name="aws-cdk-sdk.waf.WafDeleteRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteRuleResponse: waf.WafDeleteRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteSizeConstraintSetRequest <a name="aws-cdk-sdk.waf.WafDeleteSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteSizeConstraintSetRequest: waf.WafDeleteSizeConstraintSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteSizeConstraintSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteSizeConstraintSetRequest.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

### WafDeleteSizeConstraintSetResponse <a name="aws-cdk-sdk.waf.WafDeleteSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteSizeConstraintSetResponse: waf.WafDeleteSizeConstraintSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteSizeConstraintSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteSqlInjectionMatchSetRequest: waf.WafDeleteSqlInjectionMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetRequest.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

### WafDeleteSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteSqlInjectionMatchSetResponse: waf.WafDeleteSqlInjectionMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteWebAclRequest <a name="aws-cdk-sdk.waf.WafDeleteWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteWebAclRequest: waf.WafDeleteWebAclRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteWebAclRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafDeleteWebAclResponse <a name="aws-cdk-sdk.waf.WafDeleteWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteWebAclResponse: waf.WafDeleteWebAclResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteWebAclResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafDeleteXssMatchSetRequest <a name="aws-cdk-sdk.waf.WafDeleteXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteXssMatchSetRequest: waf.WafDeleteXssMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteXssMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafDeleteXssMatchSetRequest.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafDeleteXssMatchSetResponse <a name="aws-cdk-sdk.waf.WafDeleteXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafDeleteXssMatchSetResponse: waf.WafDeleteXssMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafDeleteXssMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafExcludedRule <a name="aws-cdk-sdk.waf.WafExcludedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafExcludedRule: waf.WafExcludedRule = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafExcludedRule.property.ruleId"></a>

- *Type:* `string`

---

### WafFieldToMatch <a name="aws-cdk-sdk.waf.WafFieldToMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafFieldToMatch: waf.WafFieldToMatch = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafFieldToMatch.property.type"></a>

- *Type:* `string`

---

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafFieldToMatch.property.data"></a>

- *Type:* `string`

---

### WafGeoMatchConstraint <a name="aws-cdk-sdk.waf.WafGeoMatchConstraint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGeoMatchConstraint: waf.WafGeoMatchConstraint = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchConstraint.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchConstraint.property.value"></a>

- *Type:* `string`

---

### WafGeoMatchSet <a name="aws-cdk-sdk.waf.WafGeoMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGeoMatchSet: waf.WafGeoMatchSet = { ... }
```

##### `geoMatchConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchSet.property.geoMatchConstraints"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchConstraint`](#aws-cdk-sdk.waf.WafGeoMatchConstraint)[]

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchSet.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchSet.property.name"></a>

- *Type:* `string`

---

### WafGeoMatchSetSummary <a name="aws-cdk-sdk.waf.WafGeoMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGeoMatchSetSummary: waf.WafGeoMatchSetSummary = { ... }
```

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchSetSummary.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchSetSummary.property.name"></a>

- *Type:* `string`

---

### WafGeoMatchSetUpdate <a name="aws-cdk-sdk.waf.WafGeoMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGeoMatchSetUpdate: waf.WafGeoMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `geoMatchConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGeoMatchSetUpdate.property.geoMatchConstraint"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchConstraint`](#aws-cdk-sdk.waf.WafGeoMatchConstraint)

---

### WafGetByteMatchSetRequest <a name="aws-cdk-sdk.waf.WafGetByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetByteMatchSetRequest: waf.WafGetByteMatchSetRequest = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetByteMatchSetRequest.property.byteMatchSetId"></a>

- *Type:* `string`

---

### WafGetByteMatchSetResponse <a name="aws-cdk-sdk.waf.WafGetByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetByteMatchSetResponse: waf.WafGetByteMatchSetResponse = { ... }
```

##### `byteMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetByteMatchSetResponse.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchSet`](#aws-cdk-sdk.waf.WafByteMatchSet)

---

### WafGetChangeTokenRequest <a name="aws-cdk-sdk.waf.WafGetChangeTokenRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetChangeTokenRequest: waf.WafGetChangeTokenRequest = { ... }
```

### WafGetChangeTokenResponse <a name="aws-cdk-sdk.waf.WafGetChangeTokenResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetChangeTokenResponse: waf.WafGetChangeTokenResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetChangeTokenResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafGetChangeTokenStatusRequest <a name="aws-cdk-sdk.waf.WafGetChangeTokenStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetChangeTokenStatusRequest: waf.WafGetChangeTokenStatusRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetChangeTokenStatusRequest.property.changeToken"></a>

- *Type:* `string`

---

### WafGetChangeTokenStatusResponse <a name="aws-cdk-sdk.waf.WafGetChangeTokenStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetChangeTokenStatusResponse: waf.WafGetChangeTokenStatusResponse = { ... }
```

##### `changeTokenStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetChangeTokenStatusResponse.property.changeTokenStatus"></a>

- *Type:* `string`

---

### WafGetGeoMatchSetRequest <a name="aws-cdk-sdk.waf.WafGetGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetGeoMatchSetRequest: waf.WafGetGeoMatchSetRequest = { ... }
```

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetGeoMatchSetRequest.property.geoMatchSetId"></a>

- *Type:* `string`

---

### WafGetGeoMatchSetResponse <a name="aws-cdk-sdk.waf.WafGetGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetGeoMatchSetResponse: waf.WafGetGeoMatchSetResponse = { ... }
```

##### `geoMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetGeoMatchSetResponse.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchSet`](#aws-cdk-sdk.waf.WafGeoMatchSet)

---

### WafGetIpSetRequest <a name="aws-cdk-sdk.waf.WafGetIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetIpSetRequest: waf.WafGetIpSetRequest = { ... }
```

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

### WafGetIpSetResponse <a name="aws-cdk-sdk.waf.WafGetIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetIpSetResponse: waf.WafGetIpSetResponse = { ... }
```

##### `ipSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetIpSetResponse.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSet`](#aws-cdk-sdk.waf.WafipSet)

---

### WafGetLoggingConfigurationRequest <a name="aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetLoggingConfigurationRequest: waf.WafGetLoggingConfigurationRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafGetLoggingConfigurationResponse <a name="aws-cdk-sdk.waf.WafGetLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetLoggingConfigurationResponse: waf.WafGetLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.waf.WafLoggingConfiguration`](#aws-cdk-sdk.waf.WafLoggingConfiguration)

---

### WafGetPermissionPolicyRequest <a name="aws-cdk-sdk.waf.WafGetPermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetPermissionPolicyRequest: waf.WafGetPermissionPolicyRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetPermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafGetPermissionPolicyResponse <a name="aws-cdk-sdk.waf.WafGetPermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetPermissionPolicyResponse: waf.WafGetPermissionPolicyResponse = { ... }
```

##### `policy`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetPermissionPolicyResponse.property.policy"></a>

- *Type:* `string`

---

### WafGetRateBasedRuleManagedKeysRequest <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRateBasedRuleManagedKeysRequest: waf.WafGetRateBasedRuleManagedKeysRequest = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafGetRateBasedRuleManagedKeysResponse <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRateBasedRuleManagedKeysResponse: waf.WafGetRateBasedRuleManagedKeysResponse = { ... }
```

##### `managedKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysResponse.property.managedKeys"></a>

- *Type:* `string`[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafGetRateBasedRuleRequest <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRateBasedRuleRequest: waf.WafGetRateBasedRuleRequest = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafGetRateBasedRuleResponse <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRateBasedRuleResponse: waf.WafGetRateBasedRuleResponse = { ... }
```

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRateBasedRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRateBasedRule`](#aws-cdk-sdk.waf.WafRateBasedRule)

---

### WafGetRegexMatchSetRequest <a name="aws-cdk-sdk.waf.WafGetRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRegexMatchSetRequest: waf.WafGetRegexMatchSetRequest = { ... }
```

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetRegexMatchSetRequest.property.regexMatchSetId"></a>

- *Type:* `string`

---

### WafGetRegexMatchSetResponse <a name="aws-cdk-sdk.waf.WafGetRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRegexMatchSetResponse: waf.WafGetRegexMatchSetResponse = { ... }
```

##### `regexMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRegexMatchSetResponse.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchSet`](#aws-cdk-sdk.waf.WafRegexMatchSet)

---

### WafGetRegexPatternSetRequest <a name="aws-cdk-sdk.waf.WafGetRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRegexPatternSetRequest: waf.WafGetRegexPatternSetRequest = { ... }
```

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetRegexPatternSetRequest.property.regexPatternSetId"></a>

- *Type:* `string`

---

### WafGetRegexPatternSetResponse <a name="aws-cdk-sdk.waf.WafGetRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRegexPatternSetResponse: waf.WafGetRegexPatternSetResponse = { ... }
```

##### `regexPatternSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRegexPatternSetResponse.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexPatternSet`](#aws-cdk-sdk.waf.WafRegexPatternSet)

---

### WafGetRuleGroupRequest <a name="aws-cdk-sdk.waf.WafGetRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRuleGroupRequest: waf.WafGetRuleGroupRequest = { ... }
```

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafGetRuleGroupResponse <a name="aws-cdk-sdk.waf.WafGetRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRuleGroupResponse: waf.WafGetRuleGroupResponse = { ... }
```

##### `ruleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRuleGroupResponse.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleGroup`](#aws-cdk-sdk.waf.WafRuleGroup)

---

### WafGetRuleRequest <a name="aws-cdk-sdk.waf.WafGetRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRuleRequest: waf.WafGetRuleRequest = { ... }
```

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

### WafGetRuleResponse <a name="aws-cdk-sdk.waf.WafGetRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetRuleResponse: waf.WafGetRuleResponse = { ... }
```

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetRuleResponse.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRule`](#aws-cdk-sdk.waf.WafRule)

---

### WafGetSampledRequestsRequest <a name="aws-cdk-sdk.waf.WafGetSampledRequestsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetSampledRequestsRequest: waf.WafGetSampledRequestsRequest = { ... }
```

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetSampledRequestsRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetSampledRequestsRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `timeWindow`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetSampledRequestsRequest.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTimeWindow`](#aws-cdk-sdk.waf.WafTimeWindow)

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetSampledRequestsRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafGetSampledRequestsResponse <a name="aws-cdk-sdk.waf.WafGetSampledRequestsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetSampledRequestsResponse: waf.WafGetSampledRequestsResponse = { ... }
```

##### `populationSize`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetSampledRequestsResponse.property.populationSize"></a>

- *Type:* `number`

---

##### `sampledRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetSampledRequestsResponse.property.sampledRequests"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSampledHttpRequest`](#aws-cdk-sdk.waf.WafSampledHttpRequest)[]

---

##### `timeWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetSampledRequestsResponse.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTimeWindow`](#aws-cdk-sdk.waf.WafTimeWindow)

---

### WafGetSizeConstraintSetRequest <a name="aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetSizeConstraintSetRequest: waf.WafGetSizeConstraintSetRequest = { ... }
```

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

### WafGetSizeConstraintSetResponse <a name="aws-cdk-sdk.waf.WafGetSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetSizeConstraintSetResponse: waf.WafGetSizeConstraintSetResponse = { ... }
```

##### `sizeConstraintSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetSizeConstraintSetResponse.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraintSet`](#aws-cdk-sdk.waf.WafSizeConstraintSet)

---

### WafGetSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetSqlInjectionMatchSetRequest: waf.WafGetSqlInjectionMatchSetRequest = { ... }
```

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

### WafGetSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetSqlInjectionMatchSetResponse: waf.WafGetSqlInjectionMatchSetResponse = { ... }
```

##### `sqlInjectionMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetResponse.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchSet`](#aws-cdk-sdk.waf.WafSqlInjectionMatchSet)

---

### WafGetWebAclRequest <a name="aws-cdk-sdk.waf.WafGetWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetWebAclRequest: waf.WafGetWebAclRequest = { ... }
```

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

### WafGetWebAclResponse <a name="aws-cdk-sdk.waf.WafGetWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetWebAclResponse: waf.WafGetWebAclResponse = { ... }
```

##### `webAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetWebAclResponse.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWebAcl`](#aws-cdk-sdk.waf.WafWebAcl)

---

### WafGetXssMatchSetRequest <a name="aws-cdk-sdk.waf.WafGetXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetXssMatchSetRequest: waf.WafGetXssMatchSetRequest = { ... }
```

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafGetXssMatchSetRequest.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafGetXssMatchSetResponse <a name="aws-cdk-sdk.waf.WafGetXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafGetXssMatchSetResponse: waf.WafGetXssMatchSetResponse = { ... }
```

##### `xssMatchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafGetXssMatchSetResponse.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchSet`](#aws-cdk-sdk.waf.WafXssMatchSet)

---

### WafhttpHeader <a name="aws-cdk-sdk.waf.WafhttpHeader"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafhttpHeader: waf.WafhttpHeader = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpHeader.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpHeader.property.value"></a>

- *Type:* `string`

---

### WafhttpRequest <a name="aws-cdk-sdk.waf.WafhttpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafhttpRequest: waf.WafhttpRequest = { ... }
```

##### `clientIp`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpRequest.property.clientIp"></a>

- *Type:* `string`

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpRequest.property.country"></a>

- *Type:* `string`

---

##### `headers`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpRequest.property.headers"></a>

- *Type:* [`aws-cdk-sdk.waf.WafhttpHeader`](#aws-cdk-sdk.waf.WafhttpHeader)[]

---

##### `httpVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpRequest.property.httpVersion"></a>

- *Type:* `string`

---

##### `method`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpRequest.property.method"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafhttpRequest.property.uri"></a>

- *Type:* `string`

---

### WafipSet <a name="aws-cdk-sdk.waf.WafipSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafipSet: waf.WafipSet = { ... }
```

##### `ipSetDescriptors`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSet.property.ipSetDescriptors"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSetDescriptor`](#aws-cdk-sdk.waf.WafipSetDescriptor)[]

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSet.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafipSet.property.name"></a>

- *Type:* `string`

---

### WafipSetDescriptor <a name="aws-cdk-sdk.waf.WafipSetDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafipSetDescriptor: waf.WafipSetDescriptor = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSetDescriptor.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSetDescriptor.property.value"></a>

- *Type:* `string`

---

### WafipSetSummary <a name="aws-cdk-sdk.waf.WafipSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafipSetSummary: waf.WafipSetSummary = { ... }
```

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSetSummary.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSetSummary.property.name"></a>

- *Type:* `string`

---

### WafipSetUpdate <a name="aws-cdk-sdk.waf.WafipSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafipSetUpdate: waf.WafipSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `ipSetDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafipSetUpdate.property.ipSetDescriptor"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSetDescriptor`](#aws-cdk-sdk.waf.WafipSetDescriptor)

---

### WafListActivatedRulesInRuleGroupRequest <a name="aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListActivatedRulesInRuleGroupRequest: waf.WafListActivatedRulesInRuleGroupRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafListActivatedRulesInRuleGroupResponse <a name="aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListActivatedRulesInRuleGroupResponse: waf.WafListActivatedRulesInRuleGroupResponse = { ... }
```

##### `activatedRules`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupResponse.property.activatedRules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafActivatedRule`](#aws-cdk-sdk.waf.WafActivatedRule)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafListByteMatchSetsRequest <a name="aws-cdk-sdk.waf.WafListByteMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListByteMatchSetsRequest: waf.WafListByteMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListByteMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListByteMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListByteMatchSetsResponse <a name="aws-cdk-sdk.waf.WafListByteMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListByteMatchSetsResponse: waf.WafListByteMatchSetsResponse = { ... }
```

##### `byteMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListByteMatchSetsResponse.property.byteMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchSetSummary`](#aws-cdk-sdk.waf.WafByteMatchSetSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListByteMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafListGeoMatchSetsRequest <a name="aws-cdk-sdk.waf.WafListGeoMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListGeoMatchSetsRequest: waf.WafListGeoMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListGeoMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListGeoMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListGeoMatchSetsResponse <a name="aws-cdk-sdk.waf.WafListGeoMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListGeoMatchSetsResponse: waf.WafListGeoMatchSetsResponse = { ... }
```

##### `geoMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListGeoMatchSetsResponse.property.geoMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchSetSummary`](#aws-cdk-sdk.waf.WafGeoMatchSetSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListGeoMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafListIpSetsRequest <a name="aws-cdk-sdk.waf.WafListIpSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListIpSetsRequest: waf.WafListIpSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListIpSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListIpSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListIpSetsResponse <a name="aws-cdk-sdk.waf.WafListIpSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListIpSetsResponse: waf.WafListIpSetsResponse = { ... }
```

##### `ipSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListIpSetsResponse.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSetSummary`](#aws-cdk-sdk.waf.WafipSetSummary)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListIpSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafListLoggingConfigurationsRequest <a name="aws-cdk-sdk.waf.WafListLoggingConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListLoggingConfigurationsRequest: waf.WafListLoggingConfigurationsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListLoggingConfigurationsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListLoggingConfigurationsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListLoggingConfigurationsResponse <a name="aws-cdk-sdk.waf.WafListLoggingConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListLoggingConfigurationsResponse: waf.WafListLoggingConfigurationsResponse = { ... }
```

##### `loggingConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListLoggingConfigurationsResponse.property.loggingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.waf.WafLoggingConfiguration`](#aws-cdk-sdk.waf.WafLoggingConfiguration)[]

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListLoggingConfigurationsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### WafListRateBasedRulesRequest <a name="aws-cdk-sdk.waf.WafListRateBasedRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRateBasedRulesRequest: waf.WafListRateBasedRulesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRateBasedRulesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRateBasedRulesRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListRateBasedRulesResponse <a name="aws-cdk-sdk.waf.WafListRateBasedRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRateBasedRulesResponse: waf.WafListRateBasedRulesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRateBasedRulesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRateBasedRulesResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleSummary`](#aws-cdk-sdk.waf.WafRuleSummary)[]

---

### WafListRegexMatchSetsRequest <a name="aws-cdk-sdk.waf.WafListRegexMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRegexMatchSetsRequest: waf.WafListRegexMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListRegexMatchSetsResponse <a name="aws-cdk-sdk.waf.WafListRegexMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRegexMatchSetsResponse: waf.WafListRegexMatchSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexMatchSetsResponse.property.regexMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchSetSummary`](#aws-cdk-sdk.waf.WafRegexMatchSetSummary)[]

---

### WafListRegexPatternSetsRequest <a name="aws-cdk-sdk.waf.WafListRegexPatternSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRegexPatternSetsRequest: waf.WafListRegexPatternSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexPatternSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexPatternSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListRegexPatternSetsResponse <a name="aws-cdk-sdk.waf.WafListRegexPatternSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRegexPatternSetsResponse: waf.WafListRegexPatternSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexPatternSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexPatternSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRegexPatternSetsResponse.property.regexPatternSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexPatternSetSummary`](#aws-cdk-sdk.waf.WafRegexPatternSetSummary)[]

---

### WafListRuleGroupsRequest <a name="aws-cdk-sdk.waf.WafListRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRuleGroupsRequest: waf.WafListRuleGroupsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRuleGroupsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRuleGroupsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListRuleGroupsResponse <a name="aws-cdk-sdk.waf.WafListRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRuleGroupsResponse: waf.WafListRuleGroupsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRuleGroupsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRuleGroupsResponse.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleGroupSummary`](#aws-cdk-sdk.waf.WafRuleGroupSummary)[]

---

### WafListRulesRequest <a name="aws-cdk-sdk.waf.WafListRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRulesRequest: waf.WafListRulesRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRulesRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRulesRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListRulesResponse <a name="aws-cdk-sdk.waf.WafListRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListRulesResponse: waf.WafListRulesResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRulesResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListRulesResponse.property.rules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleSummary`](#aws-cdk-sdk.waf.WafRuleSummary)[]

---

### WafListSizeConstraintSetsRequest <a name="aws-cdk-sdk.waf.WafListSizeConstraintSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListSizeConstraintSetsRequest: waf.WafListSizeConstraintSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSizeConstraintSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSizeConstraintSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListSizeConstraintSetsResponse <a name="aws-cdk-sdk.waf.WafListSizeConstraintSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListSizeConstraintSetsResponse: waf.WafListSizeConstraintSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSizeConstraintSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `sizeConstraintSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSizeConstraintSetsResponse.property.sizeConstraintSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraintSetSummary`](#aws-cdk-sdk.waf.WafSizeConstraintSetSummary)[]

---

### WafListSqlInjectionMatchSetsRequest <a name="aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListSqlInjectionMatchSetsRequest: waf.WafListSqlInjectionMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListSqlInjectionMatchSetsResponse <a name="aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListSqlInjectionMatchSetsResponse: waf.WafListSqlInjectionMatchSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsResponse.property.sqlInjectionMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchSetSummary`](#aws-cdk-sdk.waf.WafSqlInjectionMatchSetSummary)[]

---

### WafListSubscribedRuleGroupsRequest <a name="aws-cdk-sdk.waf.WafListSubscribedRuleGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListSubscribedRuleGroupsRequest: waf.WafListSubscribedRuleGroupsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSubscribedRuleGroupsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSubscribedRuleGroupsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListSubscribedRuleGroupsResponse <a name="aws-cdk-sdk.waf.WafListSubscribedRuleGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListSubscribedRuleGroupsResponse: waf.WafListSubscribedRuleGroupsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSubscribedRuleGroupsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListSubscribedRuleGroupsResponse.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary`](#aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary)[]

---

### WafListTagsForResourceRequest <a name="aws-cdk-sdk.waf.WafListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListTagsForResourceRequest: waf.WafListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListTagsForResourceRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListTagsForResourceRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListTagsForResourceResponse <a name="aws-cdk-sdk.waf.WafListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListTagsForResourceResponse: waf.WafListTagsForResourceResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListTagsForResourceResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `tagInfoForResource`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListTagsForResourceResponse.property.tagInfoForResource"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTagInfoForResource`](#aws-cdk-sdk.waf.WafTagInfoForResource)

---

### WafListWebAcLsRequest <a name="aws-cdk-sdk.waf.WafListWebAcLsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListWebAcLsRequest: waf.WafListWebAcLsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListWebAcLsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListWebAcLsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListWebAcLsResponse <a name="aws-cdk-sdk.waf.WafListWebAcLsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListWebAcLsResponse: waf.WafListWebAcLsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListWebAcLsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `webAcLs`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListWebAcLsResponse.property.webAcLs"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWebAclSummary`](#aws-cdk-sdk.waf.WafWebAclSummary)[]

---

### WafListXssMatchSetsRequest <a name="aws-cdk-sdk.waf.WafListXssMatchSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListXssMatchSetsRequest: waf.WafListXssMatchSetsRequest = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListXssMatchSetsRequest.property.limit"></a>

- *Type:* `number`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListXssMatchSetsRequest.property.nextMarker"></a>

- *Type:* `string`

---

### WafListXssMatchSetsResponse <a name="aws-cdk-sdk.waf.WafListXssMatchSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafListXssMatchSetsResponse: waf.WafListXssMatchSetsResponse = { ... }
```

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListXssMatchSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

##### `xssMatchSets`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafListXssMatchSetsResponse.property.xssMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchSetSummary`](#aws-cdk-sdk.waf.WafXssMatchSetSummary)[]

---

### WafLoggingConfiguration <a name="aws-cdk-sdk.waf.WafLoggingConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafLoggingConfiguration: waf.WafLoggingConfiguration = { ... }
```

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---

##### `redactedFields`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)[]

---

### WafPredicate <a name="aws-cdk-sdk.waf.WafPredicate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafPredicate: waf.WafPredicate = { ... }
```

##### `dataId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafPredicate.property.dataId"></a>

- *Type:* `string`

---

##### `negated`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafPredicate.property.negated"></a>

- *Type:* `boolean`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafPredicate.property.type"></a>

- *Type:* `string`

---

### WafPutLoggingConfigurationRequest <a name="aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafPutLoggingConfigurationRequest: waf.WafPutLoggingConfigurationRequest = { ... }
```

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.waf.WafLoggingConfiguration`](#aws-cdk-sdk.waf.WafLoggingConfiguration)

---

### WafPutLoggingConfigurationResponse <a name="aws-cdk-sdk.waf.WafPutLoggingConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafPutLoggingConfigurationResponse: waf.WafPutLoggingConfigurationResponse = { ... }
```

##### `loggingConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafPutLoggingConfigurationResponse.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.waf.WafLoggingConfiguration`](#aws-cdk-sdk.waf.WafLoggingConfiguration)

---

### WafPutPermissionPolicyRequest <a name="aws-cdk-sdk.waf.WafPutPermissionPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafPutPermissionPolicyRequest: waf.WafPutPermissionPolicyRequest = { ... }
```

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafPutPermissionPolicyRequest.property.policy"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafPutPermissionPolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WafPutPermissionPolicyResponse <a name="aws-cdk-sdk.waf.WafPutPermissionPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafPutPermissionPolicyResponse: waf.WafPutPermissionPolicyResponse = { ... }
```

### WafRateBasedRule <a name="aws-cdk-sdk.waf.WafRateBasedRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRateBasedRule: waf.WafRateBasedRule = { ... }
```

##### `matchPredicates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRateBasedRule.property.matchPredicates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPredicate`](#aws-cdk-sdk.waf.WafPredicate)[]

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRateBasedRule.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRateBasedRule.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRateBasedRule.property.ruleId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRateBasedRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRateBasedRule.property.name"></a>

- *Type:* `string`

---

### WafRegexMatchSet <a name="aws-cdk-sdk.waf.WafRegexMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRegexMatchSet: waf.WafRegexMatchSet = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchSet.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchSet.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `regexMatchTuples`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchSet.property.regexMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchTuple`](#aws-cdk-sdk.waf.WafRegexMatchTuple)[]

---

### WafRegexMatchSetSummary <a name="aws-cdk-sdk.waf.WafRegexMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRegexMatchSetSummary: waf.WafRegexMatchSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchSetSummary.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchSetSummary.property.regexMatchSetId"></a>

- *Type:* `string`

---

### WafRegexMatchSetUpdate <a name="aws-cdk-sdk.waf.WafRegexMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRegexMatchSetUpdate: waf.WafRegexMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `regexMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchSetUpdate.property.regexMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchTuple`](#aws-cdk-sdk.waf.WafRegexMatchTuple)

---

### WafRegexMatchTuple <a name="aws-cdk-sdk.waf.WafRegexMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRegexMatchTuple: waf.WafRegexMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchTuple.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

### WafRegexPatternSet <a name="aws-cdk-sdk.waf.WafRegexPatternSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRegexPatternSet: waf.WafRegexPatternSet = { ... }
```

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexPatternSet.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `regexPatternStrings`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexPatternSet.property.regexPatternStrings"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRegexPatternSet.property.name"></a>

- *Type:* `string`

---

### WafRegexPatternSetSummary <a name="aws-cdk-sdk.waf.WafRegexPatternSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRegexPatternSetSummary: waf.WafRegexPatternSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexPatternSetSummary.property.name"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexPatternSetSummary.property.regexPatternSetId"></a>

- *Type:* `string`

---

### WafRegexPatternSetUpdate <a name="aws-cdk-sdk.waf.WafRegexPatternSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRegexPatternSetUpdate: waf.WafRegexPatternSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexPatternSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `regexPatternString`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRegexPatternSetUpdate.property.regexPatternString"></a>

- *Type:* `string`

---

### WafRule <a name="aws-cdk-sdk.waf.WafRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRule: waf.WafRule = { ... }
```

##### `predicates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRule.property.predicates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPredicate`](#aws-cdk-sdk.waf.WafPredicate)[]

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRule.property.ruleId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRule.property.name"></a>

- *Type:* `string`

---

### WafRuleGroup <a name="aws-cdk-sdk.waf.WafRuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRuleGroup: waf.WafRuleGroup = { ... }
```

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleGroup.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRuleGroup.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafRuleGroup.property.name"></a>

- *Type:* `string`

---

### WafRuleGroupSummary <a name="aws-cdk-sdk.waf.WafRuleGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRuleGroupSummary: waf.WafRuleGroupSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleGroupSummary.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleGroupSummary.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafRuleGroupUpdate <a name="aws-cdk-sdk.waf.WafRuleGroupUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRuleGroupUpdate: waf.WafRuleGroupUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleGroupUpdate.property.action"></a>

- *Type:* `string`

---

##### `activatedRule`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleGroupUpdate.property.activatedRule"></a>

- *Type:* [`aws-cdk-sdk.waf.WafActivatedRule`](#aws-cdk-sdk.waf.WafActivatedRule)

---

### WafRuleSummary <a name="aws-cdk-sdk.waf.WafRuleSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRuleSummary: waf.WafRuleSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleSummary.property.name"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleSummary.property.ruleId"></a>

- *Type:* `string`

---

### WafRuleUpdate <a name="aws-cdk-sdk.waf.WafRuleUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafRuleUpdate: waf.WafRuleUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleUpdate.property.action"></a>

- *Type:* `string`

---

##### `predicate`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafRuleUpdate.property.predicate"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPredicate`](#aws-cdk-sdk.waf.WafPredicate)

---

### WafSampledHttpRequest <a name="aws-cdk-sdk.waf.WafSampledHttpRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSampledHttpRequest: waf.WafSampledHttpRequest = { ... }
```

##### `request`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSampledHttpRequest.property.request"></a>

- *Type:* [`aws-cdk-sdk.waf.WafhttpRequest`](#aws-cdk-sdk.waf.WafhttpRequest)

---

##### `weight`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSampledHttpRequest.property.weight"></a>

- *Type:* `number`

---

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafSampledHttpRequest.property.action"></a>

- *Type:* `string`

---

##### `ruleWithinRuleGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafSampledHttpRequest.property.ruleWithinRuleGroup"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafSampledHttpRequest.property.timestamp"></a>

- *Type:* `string`

---

### WafSizeConstraint <a name="aws-cdk-sdk.waf.WafSizeConstraint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSizeConstraint: waf.WafSizeConstraint = { ... }
```

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraint.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraint.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraint.property.size"></a>

- *Type:* `number`

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraint.property.textTransformation"></a>

- *Type:* `string`

---

### WafSizeConstraintSet <a name="aws-cdk-sdk.waf.WafSizeConstraintSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSizeConstraintSet: waf.WafSizeConstraintSet = { ... }
```

##### `sizeConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraintSet.property.sizeConstraints"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraint`](#aws-cdk-sdk.waf.WafSizeConstraint)[]

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraintSet.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraintSet.property.name"></a>

- *Type:* `string`

---

### WafSizeConstraintSetSummary <a name="aws-cdk-sdk.waf.WafSizeConstraintSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSizeConstraintSetSummary: waf.WafSizeConstraintSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraintSetSummary.property.name"></a>

- *Type:* `string`

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraintSetSummary.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

### WafSizeConstraintSetUpdate <a name="aws-cdk-sdk.waf.WafSizeConstraintSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSizeConstraintSetUpdate: waf.WafSizeConstraintSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraintSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `sizeConstraint`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSizeConstraintSetUpdate.property.sizeConstraint"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraint`](#aws-cdk-sdk.waf.WafSizeConstraint)

---

### WafSqlInjectionMatchSet <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSqlInjectionMatchSet: waf.WafSqlInjectionMatchSet = { ... }
```

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSet.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchTuple`](#aws-cdk-sdk.waf.WafSqlInjectionMatchTuple)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSet.property.name"></a>

- *Type:* `string`

---

### WafSqlInjectionMatchSetSummary <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSqlInjectionMatchSetSummary: waf.WafSqlInjectionMatchSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSetSummary.property.name"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSetSummary.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

### WafSqlInjectionMatchSetUpdate <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSqlInjectionMatchSetUpdate: waf.WafSqlInjectionMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchSetUpdate.property.sqlInjectionMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchTuple`](#aws-cdk-sdk.waf.WafSqlInjectionMatchTuple)

---

### WafSqlInjectionMatchTuple <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSqlInjectionMatchTuple: waf.WafSqlInjectionMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSqlInjectionMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

### WafSubscribedRuleGroupSummary <a name="aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafSubscribedRuleGroupSummary: waf.WafSubscribedRuleGroupSummary = { ... }
```

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary.property.ruleGroupId"></a>

- *Type:* `string`

---

### WafTag <a name="aws-cdk-sdk.waf.WafTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafTag: waf.WafTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafTag.property.value"></a>

- *Type:* `string`

---

### WafTagInfoForResource <a name="aws-cdk-sdk.waf.WafTagInfoForResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafTagInfoForResource: waf.WafTagInfoForResource = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafTagInfoForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafTagInfoForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTag`](#aws-cdk-sdk.waf.WafTag)[]

---

### WafTagResourceRequest <a name="aws-cdk-sdk.waf.WafTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafTagResourceRequest: waf.WafTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTag`](#aws-cdk-sdk.waf.WafTag)[]

---

### WafTagResourceResponse <a name="aws-cdk-sdk.waf.WafTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafTagResourceResponse: waf.WafTagResourceResponse = { ... }
```

### WafTimeWindow <a name="aws-cdk-sdk.waf.WafTimeWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafTimeWindow: waf.WafTimeWindow = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafTimeWindow.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafTimeWindow.property.startTime"></a>

- *Type:* `string`

---

### WafUntagResourceRequest <a name="aws-cdk-sdk.waf.WafUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUntagResourceRequest: waf.WafUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### WafUntagResourceResponse <a name="aws-cdk-sdk.waf.WafUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUntagResourceResponse: waf.WafUntagResourceResponse = { ... }
```

### WafUpdateByteMatchSetRequest <a name="aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateByteMatchSetRequest: waf.WafUpdateByteMatchSetRequest = { ... }
```

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchSetUpdate`](#aws-cdk-sdk.waf.WafByteMatchSetUpdate)[]

---

### WafUpdateByteMatchSetResponse <a name="aws-cdk-sdk.waf.WafUpdateByteMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateByteMatchSetResponse: waf.WafUpdateByteMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateByteMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateGeoMatchSetRequest <a name="aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateGeoMatchSetRequest: waf.WafUpdateGeoMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchSetUpdate`](#aws-cdk-sdk.waf.WafGeoMatchSetUpdate)[]

---

### WafUpdateGeoMatchSetResponse <a name="aws-cdk-sdk.waf.WafUpdateGeoMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateGeoMatchSetResponse: waf.WafUpdateGeoMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateGeoMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateIpSetRequest <a name="aws-cdk-sdk.waf.WafUpdateIpSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateIpSetRequest: waf.WafUpdateIpSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateIpSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateIpSetRequest.property.ipSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateIpSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSetUpdate`](#aws-cdk-sdk.waf.WafipSetUpdate)[]

---

### WafUpdateIpSetResponse <a name="aws-cdk-sdk.waf.WafUpdateIpSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateIpSetResponse: waf.WafUpdateIpSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateIpSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateRateBasedRuleRequest <a name="aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRateBasedRuleRequest: waf.WafUpdateRateBasedRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleUpdate`](#aws-cdk-sdk.waf.WafRuleUpdate)[]

---

### WafUpdateRateBasedRuleResponse <a name="aws-cdk-sdk.waf.WafUpdateRateBasedRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRateBasedRuleResponse: waf.WafUpdateRateBasedRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateRateBasedRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateRegexMatchSetRequest <a name="aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRegexMatchSetRequest: waf.WafUpdateRegexMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchSetUpdate`](#aws-cdk-sdk.waf.WafRegexMatchSetUpdate)[]

---

### WafUpdateRegexMatchSetResponse <a name="aws-cdk-sdk.waf.WafUpdateRegexMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRegexMatchSetResponse: waf.WafUpdateRegexMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateRegexPatternSetRequest <a name="aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRegexPatternSetRequest: waf.WafUpdateRegexPatternSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexPatternSetUpdate`](#aws-cdk-sdk.waf.WafRegexPatternSetUpdate)[]

---

### WafUpdateRegexPatternSetResponse <a name="aws-cdk-sdk.waf.WafUpdateRegexPatternSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRegexPatternSetResponse: waf.WafUpdateRegexPatternSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateRegexPatternSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateRuleGroupRequest <a name="aws-cdk-sdk.waf.WafUpdateRuleGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRuleGroupRequest: waf.WafUpdateRuleGroupRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleGroupRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleGroupRequest.property.ruleGroupId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleGroupRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleGroupUpdate`](#aws-cdk-sdk.waf.WafRuleGroupUpdate)[]

---

### WafUpdateRuleGroupResponse <a name="aws-cdk-sdk.waf.WafUpdateRuleGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRuleGroupResponse: waf.WafUpdateRuleGroupResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleGroupResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateRuleRequest <a name="aws-cdk-sdk.waf.WafUpdateRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRuleRequest: waf.WafUpdateRuleRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleUpdate`](#aws-cdk-sdk.waf.WafRuleUpdate)[]

---

### WafUpdateRuleResponse <a name="aws-cdk-sdk.waf.WafUpdateRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateRuleResponse: waf.WafUpdateRuleResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateRuleResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateSizeConstraintSetRequest <a name="aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateSizeConstraintSetRequest: waf.WafUpdateSizeConstraintSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest.property.sizeConstraintSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraintSetUpdate`](#aws-cdk-sdk.waf.WafSizeConstraintSetUpdate)[]

---

### WafUpdateSizeConstraintSetResponse <a name="aws-cdk-sdk.waf.WafUpdateSizeConstraintSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateSizeConstraintSetResponse: waf.WafUpdateSizeConstraintSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateSizeConstraintSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateSqlInjectionMatchSetRequest <a name="aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateSqlInjectionMatchSetRequest: waf.WafUpdateSqlInjectionMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchSetUpdate`](#aws-cdk-sdk.waf.WafSqlInjectionMatchSetUpdate)[]

---

### WafUpdateSqlInjectionMatchSetResponse <a name="aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateSqlInjectionMatchSetResponse: waf.WafUpdateSqlInjectionMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateWebAclRequest <a name="aws-cdk-sdk.waf.WafUpdateWebAclRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateWebAclRequest: waf.WafUpdateWebAclRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateWebAclRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateWebAclRequest.property.webAclId"></a>

- *Type:* `string`

---

##### `defaultAction`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateWebAclRequest.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWafAction`](#aws-cdk-sdk.waf.WafWafAction)

---

##### `updates`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateWebAclRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWebAclUpdate`](#aws-cdk-sdk.waf.WafWebAclUpdate)[]

---

### WafUpdateWebAclResponse <a name="aws-cdk-sdk.waf.WafUpdateWebAclResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateWebAclResponse: waf.WafUpdateWebAclResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateWebAclResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafUpdateXssMatchSetRequest <a name="aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateXssMatchSetRequest: waf.WafUpdateXssMatchSetRequest = { ... }
```

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest.property.changeToken"></a>

- *Type:* `string`

---

##### `updates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest.property.updates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchSetUpdate`](#aws-cdk-sdk.waf.WafXssMatchSetUpdate)[]

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafUpdateXssMatchSetResponse <a name="aws-cdk-sdk.waf.WafUpdateXssMatchSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafUpdateXssMatchSetResponse: waf.WafUpdateXssMatchSetResponse = { ... }
```

##### `changeToken`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafUpdateXssMatchSetResponse.property.changeToken"></a>

- *Type:* `string`

---

### WafWafAction <a name="aws-cdk-sdk.waf.WafWafAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafWafAction: waf.WafWafAction = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWafAction.property.type"></a>

- *Type:* `string`

---

### WafWafOverrideAction <a name="aws-cdk-sdk.waf.WafWafOverrideAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafWafOverrideAction: waf.WafWafOverrideAction = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWafOverrideAction.property.type"></a>

- *Type:* `string`

---

### WafWebAcl <a name="aws-cdk-sdk.waf.WafWebAcl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafWebAcl: waf.WafWebAcl = { ... }
```

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWafAction`](#aws-cdk-sdk.waf.WafWafAction)

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafActivatedRule`](#aws-cdk-sdk.waf.WafActivatedRule)[]

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWebAcl.property.webAclId"></a>

- *Type:* `string`

---

##### `metricName`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafWebAcl.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafWebAcl.property.name"></a>

- *Type:* `string`

---

##### `webAclArn`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafWebAcl.property.webAclArn"></a>

- *Type:* `string`

---

### WafWebAclSummary <a name="aws-cdk-sdk.waf.WafWebAclSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafWebAclSummary: waf.WafWebAclSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWebAclSummary.property.name"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWebAclSummary.property.webAclId"></a>

- *Type:* `string`

---

### WafWebAclUpdate <a name="aws-cdk-sdk.waf.WafWebAclUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafWebAclUpdate: waf.WafWebAclUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWebAclUpdate.property.action"></a>

- *Type:* `string`

---

##### `activatedRule`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafWebAclUpdate.property.activatedRule"></a>

- *Type:* [`aws-cdk-sdk.waf.WafActivatedRule`](#aws-cdk-sdk.waf.WafActivatedRule)

---

### WafXssMatchSet <a name="aws-cdk-sdk.waf.WafXssMatchSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafXssMatchSet: waf.WafXssMatchSet = { ... }
```

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchSet.property.xssMatchSetId"></a>

- *Type:* `string`

---

##### `xssMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchSet.property.xssMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchTuple`](#aws-cdk-sdk.waf.WafXssMatchTuple)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.waf.WafXssMatchSet.property.name"></a>

- *Type:* `string`

---

### WafXssMatchSetSummary <a name="aws-cdk-sdk.waf.WafXssMatchSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafXssMatchSetSummary: waf.WafXssMatchSetSummary = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchSetSummary.property.name"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchSetSummary.property.xssMatchSetId"></a>

- *Type:* `string`

---

### WafXssMatchSetUpdate <a name="aws-cdk-sdk.waf.WafXssMatchSetUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafXssMatchSetUpdate: waf.WafXssMatchSetUpdate = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchSetUpdate.property.action"></a>

- *Type:* `string`

---

##### `xssMatchTuple`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchSetUpdate.property.xssMatchTuple"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchTuple`](#aws-cdk-sdk.waf.WafXssMatchTuple)

---

### WafXssMatchTuple <a name="aws-cdk-sdk.waf.WafXssMatchTuple"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

const wafXssMatchTuple: waf.WafXssMatchTuple = { ... }
```

##### `fieldToMatch`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchTuple.property.fieldToMatch"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)

---

##### `textTransformation`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WafXssMatchTuple.property.textTransformation"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### WAFResponsesCreateByteMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateByteMatchSet(__scope: Construct, __resources: string[], __input: WafCreateByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateByteMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSet.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet`](#aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet)

---

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesCreateByteMatchSetByteMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateByteMatchSetByteMatchSet(__scope: Construct, __resources: string[], __input: WafCreateByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateByteMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `byteMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet.property.byteMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchTuple`](#aws-cdk-sdk.waf.WafByteMatchTuple)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateByteMatchSetByteMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFResponsesCreateGeoMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateGeoMatchSet(__scope: Construct, __resources: string[], __input: WafCreateGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `geoMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSet.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet`](#aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet)

---


### WAFResponsesCreateGeoMatchSetGeoMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateGeoMatchSetGeoMatchSet(__scope: Construct, __resources: string[], __input: WafCreateGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet.property.geoMatchConstraints"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchConstraint`](#aws-cdk-sdk.waf.WafGeoMatchConstraint)[]

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateGeoMatchSetGeoMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFResponsesCreateIpSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateIpSet(__scope: Construct, __resources: string[], __input: WafCreateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateIpSetRequest`](#aws-cdk-sdk.waf.WafCreateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSet.property.changeToken"></a>

- *Type:* `string`

---

##### `ipSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSet.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet`](#aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet)

---


### WAFResponsesCreateIpSetIpSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateIpSetIpSet(__scope: Construct, __resources: string[], __input: WafCreateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateIpSetRequest`](#aws-cdk-sdk.waf.WafCreateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSetDescriptors`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet.property.ipSetDescriptors"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSetDescriptor`](#aws-cdk-sdk.waf.WafipSetDescriptor)[]

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateIpSetIpSet.property.name"></a>

- *Type:* `string`

---


### WAFResponsesCreateRateBasedRule <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRateBasedRule(__scope: Construct, __resources: string[], __input: WafCreateRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRule.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule`](#aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule)

---


### WAFResponsesCreateRateBasedRuleRule <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRateBasedRuleRule(__scope: Construct, __resources: string[], __input: WafCreateRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafCreateRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `matchPredicates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.property.matchPredicates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPredicate`](#aws-cdk-sdk.waf.WafPredicate)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.property.name"></a>

- *Type:* `string`

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRateBasedRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFResponsesCreateRegexMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRegexMatchSet(__scope: Construct, __resources: string[], __input: WafCreateRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `regexMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSet.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet`](#aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet)

---


### WAFResponsesCreateRegexMatchSetRegexMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRegexMatchSetRegexMatchSet(__scope: Construct, __resources: string[], __input: WafCreateRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `regexMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexMatchSetRegexMatchSet.property.regexMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchTuple`](#aws-cdk-sdk.waf.WafRegexMatchTuple)[]

---


### WAFResponsesCreateRegexPatternSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRegexPatternSet(__scope: Construct, __resources: string[], __input: WafCreateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSet.property.changeToken"></a>

- *Type:* `string`

---

##### `regexPatternSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSet.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet`](#aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet)

---


### WAFResponsesCreateRegexPatternSetRegexPatternSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRegexPatternSetRegexPatternSet(__scope: Construct, __resources: string[], __input: WafCreateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafCreateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet.property.name"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `regexPatternStrings`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRegexPatternSetRegexPatternSet.property.regexPatternStrings"></a>

- *Type:* `string`[]

---


### WAFResponsesCreateRule <a name="aws-cdk-sdk.waf.WAFResponsesCreateRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRule(__scope: Construct, __resources: string[], __input: WafCreateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRuleRequest`](#aws-cdk-sdk.waf.WafCreateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRule.property.changeToken"></a>

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateRuleRule`](#aws-cdk-sdk.waf.WAFResponsesCreateRuleRule)

---


### WAFResponsesCreateRuleGroup <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroup.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRuleGroup(__scope: Construct, __resources: string[], __input: WafCreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRuleGroupRequest`](#aws-cdk-sdk.waf.WafCreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroup.property.changeToken"></a>

- *Type:* `string`

---

##### `ruleGroup`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroup.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup`](#aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup)

---


### WAFResponsesCreateRuleGroupRuleGroup <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRuleGroupRuleGroup(__scope: Construct, __resources: string[], __input: WafCreateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRuleGroupRequest`](#aws-cdk-sdk.waf.WafCreateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleGroupRuleGroup.property.ruleGroupId"></a>

- *Type:* `string`

---


### WAFResponsesCreateRuleRule <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateRuleRule(__scope: Construct, __resources: string[], __input: WafCreateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateRuleRequest`](#aws-cdk-sdk.waf.WafCreateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.property.name"></a>

- *Type:* `string`

---

##### `predicates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.property.predicates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPredicate`](#aws-cdk-sdk.waf.WafPredicate)[]

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFResponsesCreateSizeConstraintSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafCreateSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSet.property.changeToken"></a>

- *Type:* `string`

---

##### `sizeConstraintSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSet.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet`](#aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet)

---


### WAFResponsesCreateSizeConstraintSetSizeConstraintSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafCreateSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafCreateSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet.property.name"></a>

- *Type:* `string`

---

##### `sizeConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet.property.sizeConstraints"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraint`](#aws-cdk-sdk.waf.WafSizeConstraint)[]

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSizeConstraintSetSizeConstraintSet.property.sizeConstraintSetId"></a>

- *Type:* `string`

---


### WAFResponsesCreateSqlInjectionMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafCreateSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSet.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet`](#aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet)

---


### WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafCreateSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.property.name"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchTuple`](#aws-cdk-sdk.waf.WafSqlInjectionMatchTuple)[]

---


### WAFResponsesCreateWebAcl <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAcl.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateWebAcl(__scope: Construct, __resources: string[], __input: WafCreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateWebAclRequest`](#aws-cdk-sdk.waf.WafCreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAcl.property.changeToken"></a>

- *Type:* `string`

---

##### `webAcl`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAcl.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl`](#aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl)

---


### WAFResponsesCreateWebAclMigrationStack <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclMigrationStack"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclMigrationStack.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateWebAclMigrationStack(__scope: Construct, __resources: string[], __input: WafCreateWebAclMigrationStackRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclMigrationStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclMigrationStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclMigrationStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest`](#aws-cdk-sdk.waf.WafCreateWebAclMigrationStackRequest)

---



#### Properties <a name="Properties"></a>

##### `s3ObjectUrl`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclMigrationStack.property.s3ObjectUrl"></a>

- *Type:* `string`

---


### WAFResponsesCreateWebAclWebAcl <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateWebAclWebAcl(__scope: Construct, __resources: string[], __input: WafCreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateWebAclRequest`](#aws-cdk-sdk.waf.WafCreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction`](#aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction)

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafActivatedRule`](#aws-cdk-sdk.waf.WafActivatedRule)[]

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.property.webAclArn"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAcl.property.webAclId"></a>

- *Type:* `string`

---


### WAFResponsesCreateWebAclWebAclDefaultAction <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateWebAclWebAclDefaultAction(__scope: Construct, __resources: string[], __input: WafCreateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateWebAclRequest`](#aws-cdk-sdk.waf.WafCreateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateWebAclWebAclDefaultAction.property.type"></a>

- *Type:* `string`

---


### WAFResponsesCreateXssMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateXssMatchSet(__scope: Construct, __resources: string[], __input: WafCreateXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateXssMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSet.property.changeToken"></a>

- *Type:* `string`

---

##### `xssMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSet.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet`](#aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet)

---


### WAFResponsesCreateXssMatchSetXssMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesCreateXssMatchSetXssMatchSet(__scope: Construct, __resources: string[], __input: WafCreateXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafCreateXssMatchSetRequest`](#aws-cdk-sdk.waf.WafCreateXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet.property.name"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet.property.xssMatchSetId"></a>

- *Type:* `string`

---

##### `xssMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesCreateXssMatchSetXssMatchSet.property.xssMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchTuple`](#aws-cdk-sdk.waf.WafXssMatchTuple)[]

---


### WAFResponsesDeleteByteMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteByteMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteByteMatchSet(__scope: Construct, __resources: string[], __input: WafDeleteByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteByteMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteByteMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteGeoMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteGeoMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteGeoMatchSet(__scope: Construct, __resources: string[], __input: WafDeleteGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteGeoMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteIpSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteIpSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteIpSet(__scope: Construct, __resources: string[], __input: WafDeleteIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteIpSetRequest`](#aws-cdk-sdk.waf.WafDeleteIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteIpSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteRateBasedRule <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRateBasedRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteRateBasedRule(__scope: Construct, __resources: string[], __input: WafDeleteRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafDeleteRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRateBasedRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteRegexMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteRegexMatchSet(__scope: Construct, __resources: string[], __input: WafDeleteRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteRegexPatternSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexPatternSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteRegexPatternSet(__scope: Construct, __resources: string[], __input: WafDeleteRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafDeleteRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRegexPatternSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteRule <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteRule(__scope: Construct, __resources: string[], __input: WafDeleteRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRuleRequest`](#aws-cdk-sdk.waf.WafDeleteRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteRuleGroup <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRuleGroup.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteRuleGroup(__scope: Construct, __resources: string[], __input: WafDeleteRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteRuleGroupRequest`](#aws-cdk-sdk.waf.WafDeleteRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteRuleGroup.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteSizeConstraintSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSizeConstraintSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafDeleteSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafDeleteSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSizeConstraintSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteSqlInjectionMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSqlInjectionMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafDeleteSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteSqlInjectionMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteWebAcl <a name="aws-cdk-sdk.waf.WAFResponsesDeleteWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteWebAcl.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteWebAcl(__scope: Construct, __resources: string[], __input: WafDeleteWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteWebAclRequest`](#aws-cdk-sdk.waf.WafDeleteWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteWebAcl.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesDeleteXssMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesDeleteXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesDeleteXssMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesDeleteXssMatchSet(__scope: Construct, __resources: string[], __input: WafDeleteXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafDeleteXssMatchSetRequest`](#aws-cdk-sdk.waf.WafDeleteXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesDeleteXssMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesFetchByteMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchByteMatchSet(__scope: Construct, __resources: string[], __input: WafGetByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetByteMatchSetRequest`](#aws-cdk-sdk.waf.WafGetByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSet.property.byteMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet`](#aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet)

---


### WAFResponsesFetchByteMatchSetByteMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchByteMatchSetByteMatchSet(__scope: Construct, __resources: string[], __input: WafGetByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetByteMatchSetRequest`](#aws-cdk-sdk.waf.WafGetByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet.property.byteMatchSetId"></a>

- *Type:* `string`

---

##### `byteMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet.property.byteMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchTuple`](#aws-cdk-sdk.waf.WafByteMatchTuple)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchByteMatchSetByteMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFResponsesFetchChangeToken <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeToken"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeToken.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchChangeToken(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeToken.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeToken.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesFetchChangeTokenStatus <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeTokenStatus"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeTokenStatus.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchChangeTokenStatus(__scope: Construct, __resources: string[], __input: WafGetChangeTokenStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeTokenStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeTokenStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeTokenStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetChangeTokenStatusRequest`](#aws-cdk-sdk.waf.WafGetChangeTokenStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `changeTokenStatus`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchChangeTokenStatus.property.changeTokenStatus"></a>

- *Type:* `string`

---


### WAFResponsesFetchGeoMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchGeoMatchSet(__scope: Construct, __resources: string[], __input: WafGetGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafGetGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSet.property.geoMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet`](#aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet)

---


### WAFResponsesFetchGeoMatchSetGeoMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchGeoMatchSetGeoMatchSet(__scope: Construct, __resources: string[], __input: WafGetGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafGetGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet.property.geoMatchConstraints"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchConstraint`](#aws-cdk-sdk.waf.WafGeoMatchConstraint)[]

---

##### `geoMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet.property.geoMatchSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchGeoMatchSetGeoMatchSet.property.name"></a>

- *Type:* `string`

---


### WAFResponsesFetchIpSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchIpSet(__scope: Construct, __resources: string[], __input: WafGetIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetIpSetRequest`](#aws-cdk-sdk.waf.WafGetIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSet.property.ipSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet`](#aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet)

---


### WAFResponsesFetchIpSetIpSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchIpSetIpSet(__scope: Construct, __resources: string[], __input: WafGetIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetIpSetRequest`](#aws-cdk-sdk.waf.WafGetIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSetDescriptors`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet.property.ipSetDescriptors"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSetDescriptor`](#aws-cdk-sdk.waf.WafipSetDescriptor)[]

---

##### `ipSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet.property.ipSetId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchIpSetIpSet.property.name"></a>

- *Type:* `string`

---


### WAFResponsesFetchLoggingConfiguration <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfiguration.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafGetLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest`](#aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration)

---


### WAFResponsesFetchLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafGetLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest`](#aws-cdk-sdk.waf.WafGetLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `redactedFields`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchLoggingConfigurationLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---


### WAFResponsesFetchPermissionPolicy <a name="aws-cdk-sdk.waf.WAFResponsesFetchPermissionPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchPermissionPolicy.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchPermissionPolicy(__scope: Construct, __resources: string[], __input: WafGetPermissionPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchPermissionPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchPermissionPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchPermissionPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetPermissionPolicyRequest`](#aws-cdk-sdk.waf.WafGetPermissionPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchPermissionPolicy.property.policy"></a>

- *Type:* `string`

---


### WAFResponsesFetchRateBasedRule <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRateBasedRule(__scope: Construct, __resources: string[], __input: WafGetRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafGetRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule`](#aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule)

---


### WAFResponsesFetchRateBasedRuleManagedKeys <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleManagedKeys"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleManagedKeys.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRateBasedRuleManagedKeys(__scope: Construct, __resources: string[], __input: WafGetRateBasedRuleManagedKeysRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleManagedKeys.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleManagedKeys.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleManagedKeys.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysRequest`](#aws-cdk-sdk.waf.WafGetRateBasedRuleManagedKeysRequest)

---



#### Properties <a name="Properties"></a>

##### `managedKeys`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleManagedKeys.property.managedKeys"></a>

- *Type:* `string`[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleManagedKeys.property.nextMarker"></a>

- *Type:* `string`

---


### WAFResponsesFetchRateBasedRuleRule <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRateBasedRuleRule(__scope: Construct, __resources: string[], __input: WafGetRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafGetRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `matchPredicates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.property.matchPredicates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPredicate`](#aws-cdk-sdk.waf.WafPredicate)[]

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.property.name"></a>

- *Type:* `string`

---

##### `rateKey`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.property.rateKey"></a>

- *Type:* `string`

---

##### `rateLimit`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.property.rateLimit"></a>

- *Type:* `number`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRateBasedRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFResponsesFetchRegexMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRegexMatchSet(__scope: Construct, __resources: string[], __input: WafGetRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafGetRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `regexMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSet.property.regexMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet`](#aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet)

---


### WAFResponsesFetchRegexMatchSetRegexMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRegexMatchSetRegexMatchSet(__scope: Construct, __resources: string[], __input: WafGetRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafGetRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet.property.name"></a>

- *Type:* `string`

---

##### `regexMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet.property.regexMatchSetId"></a>

- *Type:* `string`

---

##### `regexMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexMatchSetRegexMatchSet.property.regexMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchTuple`](#aws-cdk-sdk.waf.WafRegexMatchTuple)[]

---


### WAFResponsesFetchRegexPatternSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRegexPatternSet(__scope: Construct, __resources: string[], __input: WafGetRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafGetRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `regexPatternSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSet.property.regexPatternSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet`](#aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet)

---


### WAFResponsesFetchRegexPatternSetRegexPatternSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRegexPatternSetRegexPatternSet(__scope: Construct, __resources: string[], __input: WafGetRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafGetRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet.property.name"></a>

- *Type:* `string`

---

##### `regexPatternSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet.property.regexPatternSetId"></a>

- *Type:* `string`

---

##### `regexPatternStrings`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRegexPatternSetRegexPatternSet.property.regexPatternStrings"></a>

- *Type:* `string`[]

---


### WAFResponsesFetchRule <a name="aws-cdk-sdk.waf.WAFResponsesFetchRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRule(__scope: Construct, __resources: string[], __input: WafGetRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRuleRequest`](#aws-cdk-sdk.waf.WafGetRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchRuleRule`](#aws-cdk-sdk.waf.WAFResponsesFetchRuleRule)

---


### WAFResponsesFetchRuleGroup <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroup.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRuleGroup(__scope: Construct, __resources: string[], __input: WafGetRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRuleGroupRequest`](#aws-cdk-sdk.waf.WafGetRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `ruleGroup`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroup.property.ruleGroup"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup`](#aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup)

---


### WAFResponsesFetchRuleGroupRuleGroup <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRuleGroupRuleGroup(__scope: Construct, __resources: string[], __input: WafGetRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRuleGroupRequest`](#aws-cdk-sdk.waf.WafGetRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup.property.name"></a>

- *Type:* `string`

---

##### `ruleGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleGroupRuleGroup.property.ruleGroupId"></a>

- *Type:* `string`

---


### WAFResponsesFetchRuleRule <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchRuleRule(__scope: Construct, __resources: string[], __input: WafGetRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetRuleRequest`](#aws-cdk-sdk.waf.WafGetRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.property.name"></a>

- *Type:* `string`

---

##### `predicates`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.property.predicates"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPredicate`](#aws-cdk-sdk.waf.WafPredicate)[]

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchRuleRule.property.ruleId"></a>

- *Type:* `string`

---


### WAFResponsesFetchSampledRequests <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchSampledRequests(__scope: Construct, __resources: string[], __input: WafGetSampledRequestsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSampledRequestsRequest`](#aws-cdk-sdk.waf.WafGetSampledRequestsRequest)

---



#### Properties <a name="Properties"></a>

##### `populationSize`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests.property.populationSize"></a>

- *Type:* `number`

---

##### `sampledRequests`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests.property.sampledRequests"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSampledHttpRequest`](#aws-cdk-sdk.waf.WafSampledHttpRequest)[]

---

##### `timeWindow`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequests.property.timeWindow"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow`](#aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow)

---


### WAFResponsesFetchSampledRequestsTimeWindow <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchSampledRequestsTimeWindow(__scope: Construct, __resources: string[], __input: WafGetSampledRequestsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSampledRequestsRequest`](#aws-cdk-sdk.waf.WafGetSampledRequestsRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSampledRequestsTimeWindow.property.startTime"></a>

- *Type:* `string`

---


### WAFResponsesFetchSizeConstraintSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafGetSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sizeConstraintSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSet.property.sizeConstraintSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet`](#aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet)

---


### WAFResponsesFetchSizeConstraintSetSizeConstraintSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafGetSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafGetSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet.property.name"></a>

- *Type:* `string`

---

##### `sizeConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet.property.sizeConstraints"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraint`](#aws-cdk-sdk.waf.WafSizeConstraint)[]

---

##### `sizeConstraintSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSizeConstraintSetSizeConstraintSet.property.sizeConstraintSetId"></a>

- *Type:* `string`

---


### WAFResponsesFetchSqlInjectionMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafGetSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `sqlInjectionMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSet.property.sqlInjectionMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet`](#aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet)

---


### WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafGetSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafGetSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.property.name"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchSetId"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchSqlInjectionMatchSetSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchTuple`](#aws-cdk-sdk.waf.WafSqlInjectionMatchTuple)[]

---


### WAFResponsesFetchWebAcl <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAcl.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchWebAcl(__scope: Construct, __resources: string[], __input: WafGetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetWebAclRequest`](#aws-cdk-sdk.waf.WafGetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `webAcl`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAcl.property.webAcl"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl`](#aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl)

---


### WAFResponsesFetchWebAclWebAcl <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchWebAclWebAcl(__scope: Construct, __resources: string[], __input: WafGetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetWebAclRequest`](#aws-cdk-sdk.waf.WafGetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultAction`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.property.defaultAction"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction`](#aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction)

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.property.metricName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.property.name"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.property.rules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafActivatedRule`](#aws-cdk-sdk.waf.WafActivatedRule)[]

---

##### `webAclArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.property.webAclArn"></a>

- *Type:* `string`

---

##### `webAclId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAcl.property.webAclId"></a>

- *Type:* `string`

---


### WAFResponsesFetchWebAclWebAclDefaultAction <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchWebAclWebAclDefaultAction(__scope: Construct, __resources: string[], __input: WafGetWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetWebAclRequest`](#aws-cdk-sdk.waf.WafGetWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchWebAclWebAclDefaultAction.property.type"></a>

- *Type:* `string`

---


### WAFResponsesFetchXssMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchXssMatchSet(__scope: Construct, __resources: string[], __input: WafGetXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetXssMatchSetRequest`](#aws-cdk-sdk.waf.WafGetXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `xssMatchSet`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSet.property.xssMatchSet"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet`](#aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet)

---


### WAFResponsesFetchXssMatchSetXssMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesFetchXssMatchSetXssMatchSet(__scope: Construct, __resources: string[], __input: WafGetXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGetXssMatchSetRequest`](#aws-cdk-sdk.waf.WafGetXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet.property.name"></a>

- *Type:* `string`

---

##### `xssMatchSetId`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet.property.xssMatchSetId"></a>

- *Type:* `string`

---

##### `xssMatchTuples`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesFetchXssMatchSetXssMatchSet.property.xssMatchTuples"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchTuple`](#aws-cdk-sdk.waf.WafXssMatchTuple)[]

---


### WAFResponsesListActivatedRulesInRuleGroup <a name="aws-cdk-sdk.waf.WAFResponsesListActivatedRulesInRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListActivatedRulesInRuleGroup.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListActivatedRulesInRuleGroup(__scope: Construct, __resources: string[], __input: WafListActivatedRulesInRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListActivatedRulesInRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListActivatedRulesInRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListActivatedRulesInRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest`](#aws-cdk-sdk.waf.WafListActivatedRulesInRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `activatedRules`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListActivatedRulesInRuleGroup.property.activatedRules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafActivatedRule`](#aws-cdk-sdk.waf.WafActivatedRule)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListActivatedRulesInRuleGroup.property.nextMarker"></a>

- *Type:* `string`

---


### WAFResponsesListByteMatchSets <a name="aws-cdk-sdk.waf.WAFResponsesListByteMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListByteMatchSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListByteMatchSets(__scope: Construct, __resources: string[], __input: WafListByteMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListByteMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListByteMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListByteMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListByteMatchSetsRequest`](#aws-cdk-sdk.waf.WafListByteMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `byteMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListByteMatchSets.property.byteMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafByteMatchSetSummary`](#aws-cdk-sdk.waf.WafByteMatchSetSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListByteMatchSets.property.nextMarker"></a>

- *Type:* `string`

---


### WAFResponsesListGeoMatchSets <a name="aws-cdk-sdk.waf.WAFResponsesListGeoMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListGeoMatchSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListGeoMatchSets(__scope: Construct, __resources: string[], __input: WafListGeoMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListGeoMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListGeoMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListGeoMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListGeoMatchSetsRequest`](#aws-cdk-sdk.waf.WafListGeoMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `geoMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListGeoMatchSets.property.geoMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafGeoMatchSetSummary`](#aws-cdk-sdk.waf.WafGeoMatchSetSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListGeoMatchSets.property.nextMarker"></a>

- *Type:* `string`

---


### WAFResponsesListIpSets <a name="aws-cdk-sdk.waf.WAFResponsesListIpSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListIpSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListIpSets(__scope: Construct, __resources: string[], __input: WafListIpSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListIpSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListIpSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListIpSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListIpSetsRequest`](#aws-cdk-sdk.waf.WafListIpSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `ipSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListIpSets.property.ipSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafipSetSummary`](#aws-cdk-sdk.waf.WafipSetSummary)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListIpSets.property.nextMarker"></a>

- *Type:* `string`

---


### WAFResponsesListLoggingConfigurations <a name="aws-cdk-sdk.waf.WAFResponsesListLoggingConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListLoggingConfigurations.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListLoggingConfigurations(__scope: Construct, __resources: string[], __input: WafListLoggingConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListLoggingConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListLoggingConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListLoggingConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListLoggingConfigurationsRequest`](#aws-cdk-sdk.waf.WafListLoggingConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListLoggingConfigurations.property.loggingConfigurations"></a>

- *Type:* [`aws-cdk-sdk.waf.WafLoggingConfiguration`](#aws-cdk-sdk.waf.WafLoggingConfiguration)[]

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListLoggingConfigurations.property.nextMarker"></a>

- *Type:* `string`

---


### WAFResponsesListRateBasedRules <a name="aws-cdk-sdk.waf.WAFResponsesListRateBasedRules"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListRateBasedRules.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListRateBasedRules(__scope: Construct, __resources: string[], __input: WafListRateBasedRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRateBasedRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRateBasedRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRateBasedRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRateBasedRulesRequest`](#aws-cdk-sdk.waf.WafListRateBasedRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRateBasedRules.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRateBasedRules.property.rules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleSummary`](#aws-cdk-sdk.waf.WafRuleSummary)[]

---


### WAFResponsesListRegexMatchSets <a name="aws-cdk-sdk.waf.WAFResponsesListRegexMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListRegexMatchSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListRegexMatchSets(__scope: Construct, __resources: string[], __input: WafListRegexMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRegexMatchSetsRequest`](#aws-cdk-sdk.waf.WafListRegexMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexMatchSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexMatchSets.property.regexMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexMatchSetSummary`](#aws-cdk-sdk.waf.WafRegexMatchSetSummary)[]

---


### WAFResponsesListRegexPatternSets <a name="aws-cdk-sdk.waf.WAFResponsesListRegexPatternSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListRegexPatternSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListRegexPatternSets(__scope: Construct, __resources: string[], __input: WafListRegexPatternSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexPatternSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexPatternSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexPatternSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRegexPatternSetsRequest`](#aws-cdk-sdk.waf.WafListRegexPatternSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexPatternSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `regexPatternSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRegexPatternSets.property.regexPatternSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRegexPatternSetSummary`](#aws-cdk-sdk.waf.WafRegexPatternSetSummary)[]

---


### WAFResponsesListRuleGroups <a name="aws-cdk-sdk.waf.WAFResponsesListRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListRuleGroups.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListRuleGroups(__scope: Construct, __resources: string[], __input: WafListRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRuleGroupsRequest`](#aws-cdk-sdk.waf.WafListRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRuleGroups.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRuleGroups.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleGroupSummary`](#aws-cdk-sdk.waf.WafRuleGroupSummary)[]

---


### WAFResponsesListRules <a name="aws-cdk-sdk.waf.WAFResponsesListRules"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListRules.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListRules(__scope: Construct, __resources: string[], __input: WafListRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListRulesRequest`](#aws-cdk-sdk.waf.WafListRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRules.property.nextMarker"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListRules.property.rules"></a>

- *Type:* [`aws-cdk-sdk.waf.WafRuleSummary`](#aws-cdk-sdk.waf.WafRuleSummary)[]

---


### WAFResponsesListSizeConstraintSets <a name="aws-cdk-sdk.waf.WAFResponsesListSizeConstraintSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListSizeConstraintSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListSizeConstraintSets(__scope: Construct, __resources: string[], __input: WafListSizeConstraintSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSizeConstraintSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSizeConstraintSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSizeConstraintSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListSizeConstraintSetsRequest`](#aws-cdk-sdk.waf.WafListSizeConstraintSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSizeConstraintSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `sizeConstraintSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSizeConstraintSets.property.sizeConstraintSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSizeConstraintSetSummary`](#aws-cdk-sdk.waf.WafSizeConstraintSetSummary)[]

---


### WAFResponsesListSqlInjectionMatchSets <a name="aws-cdk-sdk.waf.WAFResponsesListSqlInjectionMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListSqlInjectionMatchSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListSqlInjectionMatchSets(__scope: Construct, __resources: string[], __input: WafListSqlInjectionMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSqlInjectionMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSqlInjectionMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSqlInjectionMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsRequest`](#aws-cdk-sdk.waf.WafListSqlInjectionMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSqlInjectionMatchSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `sqlInjectionMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSqlInjectionMatchSets.property.sqlInjectionMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSqlInjectionMatchSetSummary`](#aws-cdk-sdk.waf.WafSqlInjectionMatchSetSummary)[]

---


### WAFResponsesListSubscribedRuleGroups <a name="aws-cdk-sdk.waf.WAFResponsesListSubscribedRuleGroups"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListSubscribedRuleGroups.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListSubscribedRuleGroups(__scope: Construct, __resources: string[], __input: WafListSubscribedRuleGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSubscribedRuleGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSubscribedRuleGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSubscribedRuleGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListSubscribedRuleGroupsRequest`](#aws-cdk-sdk.waf.WafListSubscribedRuleGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSubscribedRuleGroups.property.nextMarker"></a>

- *Type:* `string`

---

##### `ruleGroups`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListSubscribedRuleGroups.property.ruleGroups"></a>

- *Type:* [`aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary`](#aws-cdk-sdk.waf.WafSubscribedRuleGroupSummary)[]

---


### WAFResponsesListTagsForResource <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResource.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: WafListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListTagsForResourceRequest`](#aws-cdk-sdk.waf.WafListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResource.property.nextMarker"></a>

- *Type:* `string`

---

##### `tagInfoForResource`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResource.property.tagInfoForResource"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource`](#aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource)

---


### WAFResponsesListTagsForResourceTagInfoForResource <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListTagsForResourceTagInfoForResource(__scope: Construct, __resources: string[], __input: WafListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListTagsForResourceRequest`](#aws-cdk-sdk.waf.WafListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListTagsForResourceTagInfoForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.waf.WafTag`](#aws-cdk-sdk.waf.WafTag)[]

---


### WAFResponsesListWebAcLs <a name="aws-cdk-sdk.waf.WAFResponsesListWebAcLs"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListWebAcLs.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListWebAcLs(__scope: Construct, __resources: string[], __input: WafListWebAcLsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListWebAcLs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListWebAcLs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListWebAcLs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListWebAcLsRequest`](#aws-cdk-sdk.waf.WafListWebAcLsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListWebAcLs.property.nextMarker"></a>

- *Type:* `string`

---

##### `webAcLs`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListWebAcLs.property.webAcLs"></a>

- *Type:* [`aws-cdk-sdk.waf.WafWebAclSummary`](#aws-cdk-sdk.waf.WafWebAclSummary)[]

---


### WAFResponsesListXssMatchSets <a name="aws-cdk-sdk.waf.WAFResponsesListXssMatchSets"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesListXssMatchSets.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesListXssMatchSets(__scope: Construct, __resources: string[], __input: WafListXssMatchSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListXssMatchSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListXssMatchSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListXssMatchSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafListXssMatchSetsRequest`](#aws-cdk-sdk.waf.WafListXssMatchSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListXssMatchSets.property.nextMarker"></a>

- *Type:* `string`

---

##### `xssMatchSets`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesListXssMatchSets.property.xssMatchSets"></a>

- *Type:* [`aws-cdk-sdk.waf.WafXssMatchSetSummary`](#aws-cdk-sdk.waf.WafXssMatchSetSummary)[]

---


### WAFResponsesPutLoggingConfiguration <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfiguration.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesPutLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafPutLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest`](#aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `loggingConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfiguration.property.loggingConfiguration"></a>

- *Type:* [`aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration`](#aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration)

---


### WAFResponsesPutLoggingConfigurationLoggingConfiguration <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration(__scope: Construct, __resources: string[], __input: WafPutLoggingConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest`](#aws-cdk-sdk.waf.WafPutLoggingConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `logDestinationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

- *Type:* `string`[]

---

##### `redactedFields`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration.property.redactedFields"></a>

- *Type:* [`aws-cdk-sdk.waf.WafFieldToMatch`](#aws-cdk-sdk.waf.WafFieldToMatch)[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesPutLoggingConfigurationLoggingConfiguration.property.resourceArn"></a>

- *Type:* `string`

---


### WAFResponsesUpdateByteMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateByteMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateByteMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateByteMatchSet(__scope: Construct, __resources: string[], __input: WafUpdateByteMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateByteMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateByteMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateByteMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateByteMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateByteMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateGeoMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateGeoMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateGeoMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateGeoMatchSet(__scope: Construct, __resources: string[], __input: WafUpdateGeoMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateGeoMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateGeoMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateGeoMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateGeoMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateGeoMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateIpSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateIpSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateIpSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateIpSet(__scope: Construct, __resources: string[], __input: WafUpdateIpSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateIpSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateIpSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateIpSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateIpSetRequest`](#aws-cdk-sdk.waf.WafUpdateIpSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateIpSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateRateBasedRule <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRateBasedRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRateBasedRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateRateBasedRule(__scope: Construct, __resources: string[], __input: WafUpdateRateBasedRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRateBasedRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRateBasedRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRateBasedRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest`](#aws-cdk-sdk.waf.WafUpdateRateBasedRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRateBasedRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateRegexMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateRegexMatchSet(__scope: Construct, __resources: string[], __input: WafUpdateRegexMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateRegexMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateRegexPatternSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexPatternSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexPatternSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateRegexPatternSet(__scope: Construct, __resources: string[], __input: WafUpdateRegexPatternSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexPatternSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexPatternSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexPatternSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest`](#aws-cdk-sdk.waf.WafUpdateRegexPatternSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRegexPatternSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateRule <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRule"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRule.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateRule(__scope: Construct, __resources: string[], __input: WafUpdateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRuleRequest`](#aws-cdk-sdk.waf.WafUpdateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRule.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateRuleGroup <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRuleGroup"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRuleGroup.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateRuleGroup(__scope: Construct, __resources: string[], __input: WafUpdateRuleGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRuleGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRuleGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRuleGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateRuleGroupRequest`](#aws-cdk-sdk.waf.WafUpdateRuleGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateRuleGroup.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateSizeConstraintSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSizeConstraintSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSizeConstraintSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateSizeConstraintSet(__scope: Construct, __resources: string[], __input: WafUpdateSizeConstraintSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSizeConstraintSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSizeConstraintSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSizeConstraintSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest`](#aws-cdk-sdk.waf.WafUpdateSizeConstraintSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSizeConstraintSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateSqlInjectionMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSqlInjectionMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSqlInjectionMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateSqlInjectionMatchSet(__scope: Construct, __resources: string[], __input: WafUpdateSqlInjectionMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSqlInjectionMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSqlInjectionMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSqlInjectionMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateSqlInjectionMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateSqlInjectionMatchSet.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateWebAcl <a name="aws-cdk-sdk.waf.WAFResponsesUpdateWebAcl"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateWebAcl.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateWebAcl(__scope: Construct, __resources: string[], __input: WafUpdateWebAclRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateWebAcl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateWebAcl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateWebAcl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateWebAclRequest`](#aws-cdk-sdk.waf.WafUpdateWebAclRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateWebAcl.property.changeToken"></a>

- *Type:* `string`

---


### WAFResponsesUpdateXssMatchSet <a name="aws-cdk-sdk.waf.WAFResponsesUpdateXssMatchSet"></a>

#### Initializer <a name="aws-cdk-sdk.waf.WAFResponsesUpdateXssMatchSet.Initializer"></a>

```typescript
import { waf } from 'aws-cdk-sdk'

new waf.WAFResponsesUpdateXssMatchSet(__scope: Construct, __resources: string[], __input: WafUpdateXssMatchSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateXssMatchSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateXssMatchSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateXssMatchSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest`](#aws-cdk-sdk.waf.WafUpdateXssMatchSetRequest)

---



#### Properties <a name="Properties"></a>

##### `changeToken`<sup>Required</sup> <a name="aws-cdk-sdk.waf.WAFResponsesUpdateXssMatchSet.property.changeToken"></a>

- *Type:* `string`

---



