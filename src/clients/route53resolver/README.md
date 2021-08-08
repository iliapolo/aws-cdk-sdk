# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Route53ResolverClient <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateResolverEndpointIpAddress` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.associateResolverEndpointIpAddress"></a>

```typescript
public associateResolverEndpointIpAddress(input: Route53ResolverAssociateResolverEndpointIpAddressRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest)

---

##### `associateResolverQueryLogConfig` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.associateResolverQueryLogConfig"></a>

```typescript
public associateResolverQueryLogConfig(input: Route53ResolverAssociateResolverQueryLogConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest)

---

##### `associateResolverRule` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.associateResolverRule"></a>

```typescript
public associateResolverRule(input: Route53ResolverAssociateResolverRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest)

---

##### `createResolverEndpoint` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.createResolverEndpoint"></a>

```typescript
public createResolverEndpoint(input: Route53ResolverCreateResolverEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest)

---

##### `createResolverQueryLogConfig` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.createResolverQueryLogConfig"></a>

```typescript
public createResolverQueryLogConfig(input: Route53ResolverCreateResolverQueryLogConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest)

---

##### `createResolverRule` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.createResolverRule"></a>

```typescript
public createResolverRule(input: Route53ResolverCreateResolverRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest)

---

##### `deleteResolverEndpoint` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.deleteResolverEndpoint"></a>

```typescript
public deleteResolverEndpoint(input: Route53ResolverDeleteResolverEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest)

---

##### `deleteResolverQueryLogConfig` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.deleteResolverQueryLogConfig"></a>

```typescript
public deleteResolverQueryLogConfig(input: Route53ResolverDeleteResolverQueryLogConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest)

---

##### `deleteResolverRule` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.deleteResolverRule"></a>

```typescript
public deleteResolverRule(input: Route53ResolverDeleteResolverRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest)

---

##### `disassociateResolverEndpointIpAddress` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.disassociateResolverEndpointIpAddress"></a>

```typescript
public disassociateResolverEndpointIpAddress(input: Route53ResolverDisassociateResolverEndpointIpAddressRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest)

---

##### `disassociateResolverQueryLogConfig` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.disassociateResolverQueryLogConfig"></a>

```typescript
public disassociateResolverQueryLogConfig(input: Route53ResolverDisassociateResolverQueryLogConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest)

---

##### `disassociateResolverRule` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.disassociateResolverRule"></a>

```typescript
public disassociateResolverRule(input: Route53ResolverDisassociateResolverRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest)

---

##### `fetchResolverEndpoint` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.fetchResolverEndpoint"></a>

```typescript
public fetchResolverEndpoint(input: Route53ResolverGetResolverEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest)

---

##### `fetchResolverQueryLogConfig` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.fetchResolverQueryLogConfig"></a>

```typescript
public fetchResolverQueryLogConfig(input: Route53ResolverGetResolverQueryLogConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest)

---

##### `fetchResolverQueryLogConfigAssociation` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.fetchResolverQueryLogConfigAssociation"></a>

```typescript
public fetchResolverQueryLogConfigAssociation(input: Route53ResolverGetResolverQueryLogConfigAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest)

---

##### `fetchResolverQueryLogConfigPolicy` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.fetchResolverQueryLogConfigPolicy"></a>

```typescript
public fetchResolverQueryLogConfigPolicy(input: Route53ResolverGetResolverQueryLogConfigPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyRequest)

---

##### `fetchResolverRule` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.fetchResolverRule"></a>

```typescript
public fetchResolverRule(input: Route53ResolverGetResolverRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest)

---

##### `fetchResolverRuleAssociation` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.fetchResolverRuleAssociation"></a>

```typescript
public fetchResolverRuleAssociation(input: Route53ResolverGetResolverRuleAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest)

---

##### `fetchResolverRulePolicy` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.fetchResolverRulePolicy"></a>

```typescript
public fetchResolverRulePolicy(input: Route53ResolverGetResolverRulePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyRequest)

---

##### `listResolverEndpointIpAddresses` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.listResolverEndpointIpAddresses"></a>

```typescript
public listResolverEndpointIpAddresses(input: Route53ResolverListResolverEndpointIpAddressesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest)

---

##### `listResolverEndpoints` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.listResolverEndpoints"></a>

```typescript
public listResolverEndpoints(input: Route53ResolverListResolverEndpointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest)

---

##### `listResolverQueryLogConfigAssociations` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.listResolverQueryLogConfigAssociations"></a>

```typescript
public listResolverQueryLogConfigAssociations(input: Route53ResolverListResolverQueryLogConfigAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest)

---

##### `listResolverQueryLogConfigs` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.listResolverQueryLogConfigs"></a>

```typescript
public listResolverQueryLogConfigs(input: Route53ResolverListResolverQueryLogConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest)

---

##### `listResolverRuleAssociations` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.listResolverRuleAssociations"></a>

```typescript
public listResolverRuleAssociations(input: Route53ResolverListResolverRuleAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest)

---

##### `listResolverRules` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.listResolverRules"></a>

```typescript
public listResolverRules(input: Route53ResolverListResolverRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: Route53ResolverListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest)

---

##### `putResolverQueryLogConfigPolicy` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.putResolverQueryLogConfigPolicy"></a>

```typescript
public putResolverQueryLogConfigPolicy(input: Route53ResolverPutResolverQueryLogConfigPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest)

---

##### `putResolverRulePolicy` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.putResolverRulePolicy"></a>

```typescript
public putResolverRulePolicy(input: Route53ResolverPutResolverRulePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.tagResource"></a>

```typescript
public tagResource(input: Route53ResolverTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTagResourceRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.untagResource"></a>

```typescript
public untagResource(input: Route53ResolverUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverUntagResourceRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverUntagResourceRequest)

---

##### `updateResolverEndpoint` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.updateResolverEndpoint"></a>

```typescript
public updateResolverEndpoint(input: Route53ResolverUpdateResolverEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest)

---

##### `updateResolverRule` <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.updateResolverRule"></a>

```typescript
public updateResolverRule(input: Route53ResolverUpdateResolverRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest)

---




## Structs <a name="Structs"></a>

### Route53ResolverAssociateResolverEndpointIpAddressRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverAssociateResolverEndpointIpAddressRequest: route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest = { ... }
```

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest.property.ipAddress"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate`](#aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate)

---

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest.property.resolverEndpointId"></a>

- *Type:* `string`

---

### Route53ResolverAssociateResolverEndpointIpAddressResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverAssociateResolverEndpointIpAddressResponse: route53resolver.Route53ResolverAssociateResolverEndpointIpAddressResponse = { ... }
```

##### `resolverEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressResponse.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)

---

### Route53ResolverAssociateResolverQueryLogConfigRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverAssociateResolverQueryLogConfigRequest: route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest = { ... }
```

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest.property.resourceId"></a>

- *Type:* `string`

---

### Route53ResolverAssociateResolverQueryLogConfigResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverAssociateResolverQueryLogConfigResponse: route53resolver.Route53ResolverAssociateResolverQueryLogConfigResponse = { ... }
```

##### `resolverQueryLogConfigAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigResponse.property.resolverQueryLogConfigAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation)

---

### Route53ResolverAssociateResolverRuleRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverAssociateResolverRuleRequest: route53resolver.Route53ResolverAssociateResolverRuleRequest = { ... }
```

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest.property.resolverRuleId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest.property.vpcId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest.property.name"></a>

- *Type:* `string`

---

### Route53ResolverAssociateResolverRuleResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverAssociateResolverRuleResponse: route53resolver.Route53ResolverAssociateResolverRuleResponse = { ... }
```

##### `resolverRuleAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleResponse.property.resolverRuleAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation)

---

### Route53ResolverCreateResolverEndpointRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverCreateResolverEndpointRequest: route53resolver.Route53ResolverCreateResolverEndpointRequest = { ... }
```

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest.property.direction"></a>

- *Type:* `string`

---

##### `ipAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest.property.ipAddresses"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverIpAddressRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverIpAddressRequest)[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTag`](#aws-cdk-sdk.route53resolver.Route53ResolverTag)[]

---

### Route53ResolverCreateResolverEndpointResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverCreateResolverEndpointResponse: route53resolver.Route53ResolverCreateResolverEndpointResponse = { ... }
```

##### `resolverEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointResponse.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)

---

### Route53ResolverCreateResolverQueryLogConfigRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverCreateResolverQueryLogConfigRequest: route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest = { ... }
```

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest.property.destinationArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTag`](#aws-cdk-sdk.route53resolver.Route53ResolverTag)[]

---

### Route53ResolverCreateResolverQueryLogConfigResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverCreateResolverQueryLogConfigResponse: route53resolver.Route53ResolverCreateResolverQueryLogConfigResponse = { ... }
```

##### `resolverQueryLogConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigResponse.property.resolverQueryLogConfig"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig)

---

### Route53ResolverCreateResolverRuleRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverCreateResolverRuleRequest: route53resolver.Route53ResolverCreateResolverRuleRequest = { ... }
```

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest.property.domainName"></a>

- *Type:* `string`

---

##### `ruleType`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest.property.ruleType"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest.property.name"></a>

- *Type:* `string`

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTag`](#aws-cdk-sdk.route53resolver.Route53ResolverTag)[]

---

##### `targetIps`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest.property.targetIps"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress`](#aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress)[]

---

### Route53ResolverCreateResolverRuleResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverCreateResolverRuleResponse: route53resolver.Route53ResolverCreateResolverRuleResponse = { ... }
```

##### `resolverRule`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleResponse.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRule)

---

### Route53ResolverDeleteResolverEndpointRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDeleteResolverEndpointRequest: route53resolver.Route53ResolverDeleteResolverEndpointRequest = { ... }
```

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest.property.resolverEndpointId"></a>

- *Type:* `string`

---

### Route53ResolverDeleteResolverEndpointResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDeleteResolverEndpointResponse: route53resolver.Route53ResolverDeleteResolverEndpointResponse = { ... }
```

##### `resolverEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointResponse.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)

---

### Route53ResolverDeleteResolverQueryLogConfigRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDeleteResolverQueryLogConfigRequest: route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest = { ... }
```

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

### Route53ResolverDeleteResolverQueryLogConfigResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDeleteResolverQueryLogConfigResponse: route53resolver.Route53ResolverDeleteResolverQueryLogConfigResponse = { ... }
```

##### `resolverQueryLogConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigResponse.property.resolverQueryLogConfig"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig)

---

### Route53ResolverDeleteResolverRuleRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDeleteResolverRuleRequest: route53resolver.Route53ResolverDeleteResolverRuleRequest = { ... }
```

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest.property.resolverRuleId"></a>

- *Type:* `string`

---

### Route53ResolverDeleteResolverRuleResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDeleteResolverRuleResponse: route53resolver.Route53ResolverDeleteResolverRuleResponse = { ... }
```

##### `resolverRule`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleResponse.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRule)

---

### Route53ResolverDisassociateResolverEndpointIpAddressRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDisassociateResolverEndpointIpAddressRequest: route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest = { ... }
```

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest.property.ipAddress"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate`](#aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate)

---

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest.property.resolverEndpointId"></a>

- *Type:* `string`

---

### Route53ResolverDisassociateResolverEndpointIpAddressResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDisassociateResolverEndpointIpAddressResponse: route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressResponse = { ... }
```

##### `resolverEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressResponse.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)

---

### Route53ResolverDisassociateResolverQueryLogConfigRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDisassociateResolverQueryLogConfigRequest: route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest = { ... }
```

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest.property.resourceId"></a>

- *Type:* `string`

---

### Route53ResolverDisassociateResolverQueryLogConfigResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDisassociateResolverQueryLogConfigResponse: route53resolver.Route53ResolverDisassociateResolverQueryLogConfigResponse = { ... }
```

##### `resolverQueryLogConfigAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigResponse.property.resolverQueryLogConfigAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation)

---

### Route53ResolverDisassociateResolverRuleRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDisassociateResolverRuleRequest: route53resolver.Route53ResolverDisassociateResolverRuleRequest = { ... }
```

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest.property.resolverRuleId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest.property.vpcId"></a>

- *Type:* `string`

---

### Route53ResolverDisassociateResolverRuleResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverDisassociateResolverRuleResponse: route53resolver.Route53ResolverDisassociateResolverRuleResponse = { ... }
```

##### `resolverRuleAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleResponse.property.resolverRuleAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation)

---

### Route53ResolverFilter <a name="aws-cdk-sdk.route53resolver.Route53ResolverFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverFilter: route53resolver.Route53ResolverFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverFilter.property.values"></a>

- *Type:* `string`[]

---

### Route53ResolverGetResolverEndpointRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverEndpointRequest: route53resolver.Route53ResolverGetResolverEndpointRequest = { ... }
```

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest.property.resolverEndpointId"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverEndpointResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverEndpointResponse: route53resolver.Route53ResolverGetResolverEndpointResponse = { ... }
```

##### `resolverEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointResponse.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)

---

### Route53ResolverGetResolverQueryLogConfigAssociationRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverQueryLogConfigAssociationRequest: route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest = { ... }
```

##### `resolverQueryLogConfigAssociationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest.property.resolverQueryLogConfigAssociationId"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverQueryLogConfigAssociationResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverQueryLogConfigAssociationResponse: route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationResponse = { ... }
```

##### `resolverQueryLogConfigAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationResponse.property.resolverQueryLogConfigAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation)

---

### Route53ResolverGetResolverQueryLogConfigPolicyRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverQueryLogConfigPolicyRequest: route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyRequest.property.arn"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverQueryLogConfigPolicyResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverQueryLogConfigPolicyResponse: route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyResponse = { ... }
```

##### `resolverQueryLogConfigPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyResponse.property.resolverQueryLogConfigPolicy"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverQueryLogConfigRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverQueryLogConfigRequest: route53resolver.Route53ResolverGetResolverQueryLogConfigRequest = { ... }
```

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverQueryLogConfigResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverQueryLogConfigResponse: route53resolver.Route53ResolverGetResolverQueryLogConfigResponse = { ... }
```

##### `resolverQueryLogConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigResponse.property.resolverQueryLogConfig"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig)

---

### Route53ResolverGetResolverRuleAssociationRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverRuleAssociationRequest: route53resolver.Route53ResolverGetResolverRuleAssociationRequest = { ... }
```

##### `resolverRuleAssociationId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest.property.resolverRuleAssociationId"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverRuleAssociationResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverRuleAssociationResponse: route53resolver.Route53ResolverGetResolverRuleAssociationResponse = { ... }
```

##### `resolverRuleAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationResponse.property.resolverRuleAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation)

---

### Route53ResolverGetResolverRulePolicyRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverRulePolicyRequest: route53resolver.Route53ResolverGetResolverRulePolicyRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyRequest.property.arn"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverRulePolicyResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverRulePolicyResponse: route53resolver.Route53ResolverGetResolverRulePolicyResponse = { ... }
```

##### `resolverRulePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyResponse.property.resolverRulePolicy"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverRuleRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverRuleRequest: route53resolver.Route53ResolverGetResolverRuleRequest = { ... }
```

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest.property.resolverRuleId"></a>

- *Type:* `string`

---

### Route53ResolverGetResolverRuleResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverGetResolverRuleResponse: route53resolver.Route53ResolverGetResolverRuleResponse = { ... }
```

##### `resolverRule`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleResponse.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRule)

---

### Route53ResolverIpAddressRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverIpAddressRequest: route53resolver.Route53ResolverIpAddressRequest = { ... }
```

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressRequest.property.subnetId"></a>

- *Type:* `string`

---

##### `ip`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressRequest.property.ip"></a>

- *Type:* `string`

---

### Route53ResolverIpAddressResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverIpAddressResponse: route53resolver.Route53ResolverIpAddressResponse = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `ip`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse.property.ip"></a>

- *Type:* `string`

---

##### `ipId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse.property.ipId"></a>

- *Type:* `string`

---

##### `modificationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse.property.modificationTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse.property.subnetId"></a>

- *Type:* `string`

---

### Route53ResolverIpAddressUpdate <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverIpAddressUpdate: route53resolver.Route53ResolverIpAddressUpdate = { ... }
```

##### `ip`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate.property.ip"></a>

- *Type:* `string`

---

##### `ipId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate.property.ipId"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverIpAddressUpdate.property.subnetId"></a>

- *Type:* `string`

---

### Route53ResolverListResolverEndpointIpAddressesRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverEndpointIpAddressesRequest: route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest = { ... }
```

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ResolverListResolverEndpointIpAddressesResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverEndpointIpAddressesResponse: route53resolver.Route53ResolverListResolverEndpointIpAddressesResponse = { ... }
```

##### `ipAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesResponse.property.ipAddresses"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse`](#aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesResponse.property.nextToken"></a>

- *Type:* `string`

---

### Route53ResolverListResolverEndpointsRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverEndpointsRequest: route53resolver.Route53ResolverListResolverEndpointsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverFilter`](#aws-cdk-sdk.route53resolver.Route53ResolverFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ResolverListResolverEndpointsResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverEndpointsResponse: route53resolver.Route53ResolverListResolverEndpointsResponse = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsResponse.property.resolverEndpoints"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)[]

---

### Route53ResolverListResolverQueryLogConfigAssociationsRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverQueryLogConfigAssociationsRequest: route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverFilter`](#aws-cdk-sdk.route53resolver.Route53ResolverFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest.property.sortOrder"></a>

- *Type:* `string`

---

### Route53ResolverListResolverQueryLogConfigAssociationsResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverQueryLogConfigAssociationsResponse: route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsResponse.property.resolverQueryLogConfigAssociations"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation)[]

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsResponse.property.totalCount"></a>

- *Type:* `number`

---

##### `totalFilteredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsResponse.property.totalFilteredCount"></a>

- *Type:* `number`

---

### Route53ResolverListResolverQueryLogConfigsRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverQueryLogConfigsRequest: route53resolver.Route53ResolverListResolverQueryLogConfigsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverFilter`](#aws-cdk-sdk.route53resolver.Route53ResolverFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest.property.sortOrder"></a>

- *Type:* `string`

---

### Route53ResolverListResolverQueryLogConfigsResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverQueryLogConfigsResponse: route53resolver.Route53ResolverListResolverQueryLogConfigsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsResponse.property.resolverQueryLogConfigs"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig)[]

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsResponse.property.totalCount"></a>

- *Type:* `number`

---

##### `totalFilteredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsResponse.property.totalFilteredCount"></a>

- *Type:* `number`

---

### Route53ResolverListResolverRuleAssociationsRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverRuleAssociationsRequest: route53resolver.Route53ResolverListResolverRuleAssociationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverFilter`](#aws-cdk-sdk.route53resolver.Route53ResolverFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ResolverListResolverRuleAssociationsResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverRuleAssociationsResponse: route53resolver.Route53ResolverListResolverRuleAssociationsResponse = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverRuleAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsResponse.property.resolverRuleAssociations"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation)[]

---

### Route53ResolverListResolverRulesRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverRulesRequest: route53resolver.Route53ResolverListResolverRulesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverFilter`](#aws-cdk-sdk.route53resolver.Route53ResolverFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ResolverListResolverRulesResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListResolverRulesResponse: route53resolver.Route53ResolverListResolverRulesResponse = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverRules`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesResponse.property.resolverRules"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRule)[]

---

### Route53ResolverListTagsForResourceRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListTagsForResourceRequest: route53resolver.Route53ResolverListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ResolverListTagsForResourceResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverListTagsForResourceResponse: route53resolver.Route53ResolverListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTag`](#aws-cdk-sdk.route53resolver.Route53ResolverTag)[]

---

### Route53ResolverPutResolverQueryLogConfigPolicyRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverPutResolverQueryLogConfigPolicyRequest: route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest.property.arn"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest.property.resolverQueryLogConfigPolicy"></a>

- *Type:* `string`

---

### Route53ResolverPutResolverQueryLogConfigPolicyResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverPutResolverQueryLogConfigPolicyResponse: route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyResponse = { ... }
```

##### `returnValue`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyResponse.property.returnValue"></a>

- *Type:* `boolean`

---

### Route53ResolverPutResolverRulePolicyRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverPutResolverRulePolicyRequest: route53resolver.Route53ResolverPutResolverRulePolicyRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyRequest.property.arn"></a>

- *Type:* `string`

---

##### `resolverRulePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyRequest.property.resolverRulePolicy"></a>

- *Type:* `string`

---

### Route53ResolverPutResolverRulePolicyResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverPutResolverRulePolicyResponse: route53resolver.Route53ResolverPutResolverRulePolicyResponse = { ... }
```

##### `returnValue`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyResponse.property.returnValue"></a>

- *Type:* `boolean`

---

### Route53ResolverResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverResolverEndpoint: route53resolver.Route53ResolverResolverEndpoint = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.direction"></a>

- *Type:* `string`

---

##### `hostVpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.hostVpcId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.id"></a>

- *Type:* `string`

---

##### `ipAddressCount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.ipAddressCount"></a>

- *Type:* `number`

---

##### `modificationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint.property.statusMessage"></a>

- *Type:* `string`

---

### Route53ResolverResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverResolverQueryLogConfig: route53resolver.Route53ResolverResolverQueryLogConfig = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.arn"></a>

- *Type:* `string`

---

##### `associationCount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.associationCount"></a>

- *Type:* `number`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `destinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.destinationArn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.ownerId"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig.property.status"></a>

- *Type:* `string`

---

### Route53ResolverResolverQueryLogConfigAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverResolverQueryLogConfigAssociation: route53resolver.Route53ResolverResolverQueryLogConfigAssociation = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation.property.creationTime"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation.property.error"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation.property.errorMessage"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation.property.id"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation.property.resourceId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation.property.status"></a>

- *Type:* `string`

---

### Route53ResolverResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverResolverRule: route53resolver.Route53ResolverResolverRule = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.id"></a>

- *Type:* `string`

---

##### `modificationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.ownerId"></a>

- *Type:* `string`

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `ruleType`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.ruleType"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.statusMessage"></a>

- *Type:* `string`

---

##### `targetIps`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRule.property.targetIps"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress`](#aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress)[]

---

### Route53ResolverResolverRuleAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverResolverRuleAssociation: route53resolver.Route53ResolverResolverRuleAssociation = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation.property.name"></a>

- *Type:* `string`

---

##### `resolverRuleId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation.property.resolverRuleId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation.property.statusMessage"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation.property.vpcId"></a>

- *Type:* `string`

---

### Route53ResolverResolverRuleConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverResolverRuleConfig: route53resolver.Route53ResolverResolverRuleConfig = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleConfig.property.name"></a>

- *Type:* `string`

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleConfig.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `targetIps`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleConfig.property.targetIps"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress`](#aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress)[]

---

### Route53ResolverTag <a name="aws-cdk-sdk.route53resolver.Route53ResolverTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverTag: route53resolver.Route53ResolverTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverTag.property.value"></a>

- *Type:* `string`

---

### Route53ResolverTagResourceRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverTagResourceRequest: route53resolver.Route53ResolverTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTag`](#aws-cdk-sdk.route53resolver.Route53ResolverTag)[]

---

### Route53ResolverTagResourceResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverTagResourceResponse: route53resolver.Route53ResolverTagResourceResponse = { ... }
```

### Route53ResolverTargetAddress <a name="aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverTargetAddress: route53resolver.Route53ResolverTargetAddress = { ... }
```

##### `ip`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress.property.ip"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress.property.port"></a>

- *Type:* `number`

---

### Route53ResolverUntagResourceRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverUntagResourceRequest: route53resolver.Route53ResolverUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### Route53ResolverUntagResourceResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverUntagResourceResponse: route53resolver.Route53ResolverUntagResourceResponse = { ... }
```

### Route53ResolverUpdateResolverEndpointRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverUpdateResolverEndpointRequest: route53resolver.Route53ResolverUpdateResolverEndpointRequest = { ... }
```

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest.property.name"></a>

- *Type:* `string`

---

### Route53ResolverUpdateResolverEndpointResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverUpdateResolverEndpointResponse: route53resolver.Route53ResolverUpdateResolverEndpointResponse = { ... }
```

##### `resolverEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointResponse.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)

---

### Route53ResolverUpdateResolverRuleRequest <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverUpdateResolverRuleRequest: route53resolver.Route53ResolverUpdateResolverRuleRequest = { ... }
```

##### `config`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest.property.config"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleConfig)

---

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest.property.resolverRuleId"></a>

- *Type:* `string`

---

### Route53ResolverUpdateResolverRuleResponse <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

const route53ResolverUpdateResolverRuleResponse: route53resolver.Route53ResolverUpdateResolverRuleResponse = { ... }
```

##### `resolverRule`<sup>Optional</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleResponse.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRule)

---

## Classes <a name="Classes"></a>

### Route53ResolverResponsesAssociateResolverEndpointIpAddress <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddress"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddress.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddress(__scope: Construct, __resources: string[], __input: Route53ResolverAssociateResolverEndpointIpAddressRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddress.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint)

---


### Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverAssociateResolverEndpointIpAddressRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverEndpointIpAddressRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.direction"></a>

- *Type:* `string`

---

##### `hostVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.hostVpcId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.id"></a>

- *Type:* `string`

---

##### `ipAddressCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.ipAddressCount"></a>

- *Type:* `number`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverEndpointIpAddressResolverEndpoint.property.statusMessage"></a>

- *Type:* `string`

---


### Route53ResolverResponsesAssociateResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverAssociateResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverQueryLogConfigAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfig.property.resolverQueryLogConfigAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation)

---


### Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverAssociateResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.creationTime"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.error"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.errorMessage"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.id"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.resourceId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.status"></a>

- *Type:* `string`

---


### Route53ResolverResponsesAssociateResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesAssociateResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverAssociateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRuleAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRule.property.resolverRuleAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation)

---


### Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverAssociateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverAssociateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.property.name"></a>

- *Type:* `string`

---

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.property.resolverRuleId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.property.statusMessage"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesAssociateResolverRuleResolverRuleAssociation.property.vpcId"></a>

- *Type:* `string`

---


### Route53ResolverResponsesCreateResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesCreateResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverCreateResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpoint.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint)

---


### Route53ResolverResponsesCreateResolverEndpointResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverCreateResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.direction"></a>

- *Type:* `string`

---

##### `hostVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.hostVpcId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.id"></a>

- *Type:* `string`

---

##### `ipAddressCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.ipAddressCount"></a>

- *Type:* `number`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverEndpointResolverEndpoint.property.statusMessage"></a>

- *Type:* `string`

---


### Route53ResolverResponsesCreateResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverCreateResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverQueryLogConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfig.property.resolverQueryLogConfig"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig)

---


### Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverCreateResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.arn"></a>

- *Type:* `string`

---

##### `associationCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.associationCount"></a>

- *Type:* `number`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.destinationArn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.ownerId"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverQueryLogConfigResolverQueryLogConfig.property.status"></a>

- *Type:* `string`

---


### Route53ResolverResponsesCreateResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesCreateResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverCreateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRule`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRule.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule)

---


### Route53ResolverResponsesCreateResolverRuleResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverCreateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverCreateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.id"></a>

- *Type:* `string`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.ownerId"></a>

- *Type:* `string`

---

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `ruleType`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.ruleType"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.statusMessage"></a>

- *Type:* `string`

---

##### `targetIps`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesCreateResolverRuleResolverRule.property.targetIps"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress`](#aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress)[]

---


### Route53ResolverResponsesDeleteResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDeleteResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverDeleteResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpoint.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint)

---


### Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverDeleteResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.direction"></a>

- *Type:* `string`

---

##### `hostVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.hostVpcId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.id"></a>

- *Type:* `string`

---

##### `ipAddressCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.ipAddressCount"></a>

- *Type:* `number`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverEndpointResolverEndpoint.property.statusMessage"></a>

- *Type:* `string`

---


### Route53ResolverResponsesDeleteResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverDeleteResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverQueryLogConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfig.property.resolverQueryLogConfig"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig)

---


### Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverDeleteResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.arn"></a>

- *Type:* `string`

---

##### `associationCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.associationCount"></a>

- *Type:* `number`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.destinationArn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.ownerId"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverQueryLogConfigResolverQueryLogConfig.property.status"></a>

- *Type:* `string`

---


### Route53ResolverResponsesDeleteResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDeleteResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverDeleteResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRule`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRule.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule)

---


### Route53ResolverResponsesDeleteResolverRuleResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverDeleteResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDeleteResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.id"></a>

- *Type:* `string`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.ownerId"></a>

- *Type:* `string`

---

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `ruleType`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.ruleType"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.statusMessage"></a>

- *Type:* `string`

---

##### `targetIps`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDeleteResolverRuleResolverRule.property.targetIps"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress`](#aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress)[]

---


### Route53ResolverResponsesDisassociateResolverEndpointIpAddress <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddress"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddress.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddress(__scope: Construct, __resources: string[], __input: Route53ResolverDisassociateResolverEndpointIpAddressRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddress.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint)

---


### Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverDisassociateResolverEndpointIpAddressRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverEndpointIpAddressRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.direction"></a>

- *Type:* `string`

---

##### `hostVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.hostVpcId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.id"></a>

- *Type:* `string`

---

##### `ipAddressCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.ipAddressCount"></a>

- *Type:* `number`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverEndpointIpAddressResolverEndpoint.property.statusMessage"></a>

- *Type:* `string`

---


### Route53ResolverResponsesDisassociateResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverDisassociateResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverQueryLogConfigAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfig.property.resolverQueryLogConfigAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation)

---


### Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverDisassociateResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.creationTime"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.error"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.errorMessage"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.id"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.resourceId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverQueryLogConfigResolverQueryLogConfigAssociation.property.status"></a>

- *Type:* `string`

---


### Route53ResolverResponsesDisassociateResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDisassociateResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverDisassociateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRuleAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRule.property.resolverRuleAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation)

---


### Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverDisassociateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverDisassociateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.property.name"></a>

- *Type:* `string`

---

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.property.resolverRuleId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.property.statusMessage"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesDisassociateResolverRuleResolverRuleAssociation.property.vpcId"></a>

- *Type:* `string`

---


### Route53ResolverResponsesFetchResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpoint.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint)

---


### Route53ResolverResponsesFetchResolverEndpointResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.direction"></a>

- *Type:* `string`

---

##### `hostVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.hostVpcId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.id"></a>

- *Type:* `string`

---

##### `ipAddressCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.ipAddressCount"></a>

- *Type:* `number`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverEndpointResolverEndpoint.property.statusMessage"></a>

- *Type:* `string`

---


### Route53ResolverResponsesFetchResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverQueryLogConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfig.property.resolverQueryLogConfig"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig)

---


### Route53ResolverResponsesFetchResolverQueryLogConfigAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverQueryLogConfigAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverQueryLogConfigAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociation.property.resolverQueryLogConfigAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation)

---


### Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverQueryLogConfigAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.property.creationTime"></a>

- *Type:* `string`

---

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.property.error"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.property.errorMessage"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.property.id"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.property.resolverQueryLogConfigId"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.property.resourceId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigAssociationResolverQueryLogConfigAssociation.property.status"></a>

- *Type:* `string`

---


### Route53ResolverResponsesFetchResolverQueryLogConfigPolicy <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigPolicy.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigPolicy(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverQueryLogConfigPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverQueryLogConfigPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigPolicy.property.resolverQueryLogConfigPolicy"></a>

- *Type:* `string`

---


### Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverQueryLogConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverQueryLogConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.arn"></a>

- *Type:* `string`

---

##### `associationCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.associationCount"></a>

- *Type:* `number`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `destinationArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.destinationArn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.ownerId"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverQueryLogConfigResolverQueryLogConfig.property.status"></a>

- *Type:* `string`

---


### Route53ResolverResponsesFetchResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRule`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRule.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule)

---


### Route53ResolverResponsesFetchResolverRuleAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverRuleAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverRuleAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRuleAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociation.property.resolverRuleAssociation"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation)

---


### Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverRuleAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.property.name"></a>

- *Type:* `string`

---

##### `resolverRuleId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.property.resolverRuleId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.property.statusMessage"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleAssociationResolverRuleAssociation.property.vpcId"></a>

- *Type:* `string`

---


### Route53ResolverResponsesFetchResolverRulePolicy <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRulePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRulePolicy.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverRulePolicy(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverRulePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRulePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRulePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRulePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRulePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRulePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRulePolicy.property.resolverRulePolicy"></a>

- *Type:* `string`

---


### Route53ResolverResponsesFetchResolverRuleResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverGetResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverGetResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.id"></a>

- *Type:* `string`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.ownerId"></a>

- *Type:* `string`

---

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `ruleType`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.ruleType"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.statusMessage"></a>

- *Type:* `string`

---

##### `targetIps`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesFetchResolverRuleResolverRule.property.targetIps"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress`](#aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress)[]

---


### Route53ResolverResponsesListResolverEndpointIpAddresses <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses(__scope: Construct, __resources: string[], __input: Route53ResolverListResolverEndpointIpAddressesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointIpAddressesRequest)

---



#### Properties <a name="Properties"></a>

##### `ipAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses.property.ipAddresses"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse`](#aws-cdk-sdk.route53resolver.Route53ResolverIpAddressResponse)[]

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpointIpAddresses.property.nextToken"></a>

- *Type:* `string`

---


### Route53ResolverResponsesListResolverEndpoints <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesListResolverEndpoints(__scope: Construct, __resources: string[], __input: Route53ResolverListResolverEndpointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverEndpointsRequest)

---



#### Properties <a name="Properties"></a>

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverEndpoints.property.resolverEndpoints"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverEndpoint)[]

---


### Route53ResolverResponsesListResolverQueryLogConfigAssociations <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations(__scope: Construct, __resources: string[], __input: Route53ResolverListResolverQueryLogConfigAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.property.resolverQueryLogConfigAssociations"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfigAssociation)[]

---

##### `totalCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.property.totalCount"></a>

- *Type:* `number`

---

##### `totalFilteredCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigAssociations.property.totalFilteredCount"></a>

- *Type:* `number`

---


### Route53ResolverResponsesListResolverQueryLogConfigs <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs(__scope: Construct, __resources: string[], __input: Route53ResolverListResolverQueryLogConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverQueryLogConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverQueryLogConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.property.resolverQueryLogConfigs"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverQueryLogConfig)[]

---

##### `totalCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.property.totalCount"></a>

- *Type:* `number`

---

##### `totalFilteredCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverQueryLogConfigs.property.totalFilteredCount"></a>

- *Type:* `number`

---


### Route53ResolverResponsesListResolverRuleAssociations <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesListResolverRuleAssociations(__scope: Construct, __resources: string[], __input: Route53ResolverListResolverRuleAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverRuleAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverRuleAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRuleAssociations.property.resolverRuleAssociations"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRuleAssociation)[]

---


### Route53ResolverResponsesListResolverRules <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesListResolverRules(__scope: Construct, __resources: string[], __input: Route53ResolverListResolverRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListResolverRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules.property.nextToken"></a>

- *Type:* `string`

---

##### `resolverRules`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListResolverRules.property.resolverRules"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResolverRule)[]

---


### Route53ResolverResponsesListTagsForResource <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListTagsForResource.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: Route53ResolverListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTag`](#aws-cdk-sdk.route53resolver.Route53ResolverTag)[]

---


### Route53ResolverResponsesPutResolverQueryLogConfigPolicy <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverQueryLogConfigPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverQueryLogConfigPolicy.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesPutResolverQueryLogConfigPolicy(__scope: Construct, __resources: string[], __input: Route53ResolverPutResolverQueryLogConfigPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverQueryLogConfigPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverQueryLogConfigPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverQueryLogConfigPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverPutResolverQueryLogConfigPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `returnValue`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverQueryLogConfigPolicy.property.returnValue"></a>

- *Type:* `boolean`

---


### Route53ResolverResponsesPutResolverRulePolicy <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverRulePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverRulePolicy.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesPutResolverRulePolicy(__scope: Construct, __resources: string[], __input: Route53ResolverPutResolverRulePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverRulePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverRulePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverRulePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverPutResolverRulePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `returnValue`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesPutResolverRulePolicy.property.returnValue"></a>

- *Type:* `boolean`

---


### Route53ResolverResponsesUpdateResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesUpdateResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverUpdateResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpoint.property.resolverEndpoint"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint)

---


### Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint(__scope: Construct, __resources: string[], __input: Route53ResolverUpdateResolverEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `direction`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.direction"></a>

- *Type:* `string`

---

##### `hostVpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.hostVpcId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.id"></a>

- *Type:* `string`

---

##### `ipAddressCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.ipAddressCount"></a>

- *Type:* `number`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.name"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverEndpointResolverEndpoint.property.statusMessage"></a>

- *Type:* `string`

---


### Route53ResolverResponsesUpdateResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesUpdateResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverUpdateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `resolverRule`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRule.property.resolverRule"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule`](#aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule)

---


### Route53ResolverResponsesUpdateResolverRuleResolverRule <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule"></a>

#### Initializer <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.Initializer"></a>

```typescript
import { route53resolver } from 'aws-cdk-sdk'

new route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule(__scope: Construct, __resources: string[], __input: Route53ResolverUpdateResolverRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest`](#aws-cdk-sdk.route53resolver.Route53ResolverUpdateResolverRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.creationTime"></a>

- *Type:* `string`

---

##### `creatorRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.creatorRequestId"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.domainName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.id"></a>

- *Type:* `string`

---

##### `modificationTime`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.modificationTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.name"></a>

- *Type:* `string`

---

##### `ownerId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.ownerId"></a>

- *Type:* `string`

---

##### `resolverEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.resolverEndpointId"></a>

- *Type:* `string`

---

##### `ruleType`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.ruleType"></a>

- *Type:* `string`

---

##### `shareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.shareStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.statusMessage"></a>

- *Type:* `string`

---

##### `targetIps`<sup>Required</sup> <a name="aws-cdk-sdk.route53resolver.Route53ResolverResponsesUpdateResolverRuleResolverRule.property.targetIps"></a>

- *Type:* [`aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress`](#aws-cdk-sdk.route53resolver.Route53ResolverTargetAddress)[]

---



