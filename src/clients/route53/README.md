# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Route53Client <a name="aws-cdk-sdk.route53.Route53Client"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53Client.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53Client(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateVpcWithHostedZone` <a name="aws-cdk-sdk.route53.Route53Client.associateVpcWithHostedZone"></a>

```typescript
public associateVpcWithHostedZone(input: Route53AssociateVpcWithHostedZoneRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest`](#aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest)

---

##### `changeResourceRecordSets` <a name="aws-cdk-sdk.route53.Route53Client.changeResourceRecordSets"></a>

```typescript
public changeResourceRecordSets(input: Route53ChangeResourceRecordSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest`](#aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest)

---

##### `changeTagsForResource` <a name="aws-cdk-sdk.route53.Route53Client.changeTagsForResource"></a>

```typescript
public changeTagsForResource(input: Route53ChangeTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeTagsForResourceRequest`](#aws-cdk-sdk.route53.Route53ChangeTagsForResourceRequest)

---

##### `createHealthCheck` <a name="aws-cdk-sdk.route53.Route53Client.createHealthCheck"></a>

```typescript
public createHealthCheck(input: Route53CreateHealthCheckRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53CreateHealthCheckRequest)

---

##### `createHostedZone` <a name="aws-cdk-sdk.route53.Route53Client.createHostedZone"></a>

```typescript
public createHostedZone(input: Route53CreateHostedZoneRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---

##### `createQueryLoggingConfig` <a name="aws-cdk-sdk.route53.Route53Client.createQueryLoggingConfig"></a>

```typescript
public createQueryLoggingConfig(input: Route53CreateQueryLoggingConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest`](#aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest)

---

##### `createReusableDelegationSet` <a name="aws-cdk-sdk.route53.Route53Client.createReusableDelegationSet"></a>

```typescript
public createReusableDelegationSet(input: Route53CreateReusableDelegationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest`](#aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest)

---

##### `createTrafficPolicy` <a name="aws-cdk-sdk.route53.Route53Client.createTrafficPolicy"></a>

```typescript
public createTrafficPolicy(input: Route53CreateTrafficPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest)

---

##### `createTrafficPolicyInstance` <a name="aws-cdk-sdk.route53.Route53Client.createTrafficPolicyInstance"></a>

```typescript
public createTrafficPolicyInstance(input: Route53CreateTrafficPolicyInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest)

---

##### `createTrafficPolicyVersion` <a name="aws-cdk-sdk.route53.Route53Client.createTrafficPolicyVersion"></a>

```typescript
public createTrafficPolicyVersion(input: Route53CreateTrafficPolicyVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest)

---

##### `createVpcAssociationAuthorization` <a name="aws-cdk-sdk.route53.Route53Client.createVpcAssociationAuthorization"></a>

```typescript
public createVpcAssociationAuthorization(input: Route53CreateVpcAssociationAuthorizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest`](#aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest)

---

##### `deleteHealthCheck` <a name="aws-cdk-sdk.route53.Route53Client.deleteHealthCheck"></a>

```typescript
public deleteHealthCheck(input: Route53DeleteHealthCheckRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteHealthCheckRequest`](#aws-cdk-sdk.route53.Route53DeleteHealthCheckRequest)

---

##### `deleteHostedZone` <a name="aws-cdk-sdk.route53.Route53Client.deleteHostedZone"></a>

```typescript
public deleteHostedZone(input: Route53DeleteHostedZoneRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest`](#aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest)

---

##### `deleteQueryLoggingConfig` <a name="aws-cdk-sdk.route53.Route53Client.deleteQueryLoggingConfig"></a>

```typescript
public deleteQueryLoggingConfig(input: Route53DeleteQueryLoggingConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteQueryLoggingConfigRequest`](#aws-cdk-sdk.route53.Route53DeleteQueryLoggingConfigRequest)

---

##### `deleteReusableDelegationSet` <a name="aws-cdk-sdk.route53.Route53Client.deleteReusableDelegationSet"></a>

```typescript
public deleteReusableDelegationSet(input: Route53DeleteReusableDelegationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteReusableDelegationSetRequest`](#aws-cdk-sdk.route53.Route53DeleteReusableDelegationSetRequest)

---

##### `deleteTrafficPolicy` <a name="aws-cdk-sdk.route53.Route53Client.deleteTrafficPolicy"></a>

```typescript
public deleteTrafficPolicy(input: Route53DeleteTrafficPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteTrafficPolicyRequest`](#aws-cdk-sdk.route53.Route53DeleteTrafficPolicyRequest)

---

##### `deleteTrafficPolicyInstance` <a name="aws-cdk-sdk.route53.Route53Client.deleteTrafficPolicyInstance"></a>

```typescript
public deleteTrafficPolicyInstance(input: Route53DeleteTrafficPolicyInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53DeleteTrafficPolicyInstanceRequest)

---

##### `deleteVpcAssociationAuthorization` <a name="aws-cdk-sdk.route53.Route53Client.deleteVpcAssociationAuthorization"></a>

```typescript
public deleteVpcAssociationAuthorization(input: Route53DeleteVpcAssociationAuthorizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteVpcAssociationAuthorizationRequest`](#aws-cdk-sdk.route53.Route53DeleteVpcAssociationAuthorizationRequest)

---

##### `disassociateVpcFromHostedZone` <a name="aws-cdk-sdk.route53.Route53Client.disassociateVpcFromHostedZone"></a>

```typescript
public disassociateVpcFromHostedZone(input: Route53DisassociateVpcFromHostedZoneRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest`](#aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest)

---

##### `fetchAccountLimit` <a name="aws-cdk-sdk.route53.Route53Client.fetchAccountLimit"></a>

```typescript
public fetchAccountLimit(input: Route53GetAccountLimitRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetAccountLimitRequest`](#aws-cdk-sdk.route53.Route53GetAccountLimitRequest)

---

##### `fetchChange` <a name="aws-cdk-sdk.route53.Route53Client.fetchChange"></a>

```typescript
public fetchChange(input: Route53GetChangeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetChangeRequest`](#aws-cdk-sdk.route53.Route53GetChangeRequest)

---

##### `fetchCheckerIpRanges` <a name="aws-cdk-sdk.route53.Route53Client.fetchCheckerIpRanges"></a>

```typescript
public fetchCheckerIpRanges()
```

##### `fetchGeoLocation` <a name="aws-cdk-sdk.route53.Route53Client.fetchGeoLocation"></a>

```typescript
public fetchGeoLocation(input: Route53GetGeoLocationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetGeoLocationRequest`](#aws-cdk-sdk.route53.Route53GetGeoLocationRequest)

---

##### `fetchHealthCheck` <a name="aws-cdk-sdk.route53.Route53Client.fetchHealthCheck"></a>

```typescript
public fetchHealthCheck(input: Route53GetHealthCheckRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckRequest)

---

##### `fetchHealthCheckCount` <a name="aws-cdk-sdk.route53.Route53Client.fetchHealthCheckCount"></a>

```typescript
public fetchHealthCheckCount()
```

##### `fetchHealthCheckLastFailureReason` <a name="aws-cdk-sdk.route53.Route53Client.fetchHealthCheckLastFailureReason"></a>

```typescript
public fetchHealthCheckLastFailureReason(input: Route53GetHealthCheckLastFailureReasonRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonRequest)

---

##### `fetchHealthCheckStatus` <a name="aws-cdk-sdk.route53.Route53Client.fetchHealthCheckStatus"></a>

```typescript
public fetchHealthCheckStatus(input: Route53GetHealthCheckStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckStatusRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckStatusRequest)

---

##### `fetchHostedZone` <a name="aws-cdk-sdk.route53.Route53Client.fetchHostedZone"></a>

```typescript
public fetchHostedZone(input: Route53GetHostedZoneRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneRequest)

---

##### `fetchHostedZoneCount` <a name="aws-cdk-sdk.route53.Route53Client.fetchHostedZoneCount"></a>

```typescript
public fetchHostedZoneCount()
```

##### `fetchHostedZoneLimit` <a name="aws-cdk-sdk.route53.Route53Client.fetchHostedZoneLimit"></a>

```typescript
public fetchHostedZoneLimit(input: Route53GetHostedZoneLimitRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest)

---

##### `fetchQueryLoggingConfig` <a name="aws-cdk-sdk.route53.Route53Client.fetchQueryLoggingConfig"></a>

```typescript
public fetchQueryLoggingConfig(input: Route53GetQueryLoggingConfigRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest`](#aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest)

---

##### `fetchReusableDelegationSet` <a name="aws-cdk-sdk.route53.Route53Client.fetchReusableDelegationSet"></a>

```typescript
public fetchReusableDelegationSet(input: Route53GetReusableDelegationSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest`](#aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest)

---

##### `fetchReusableDelegationSetLimit` <a name="aws-cdk-sdk.route53.Route53Client.fetchReusableDelegationSetLimit"></a>

```typescript
public fetchReusableDelegationSetLimit(input: Route53GetReusableDelegationSetLimitRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest`](#aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest)

---

##### `fetchTrafficPolicy` <a name="aws-cdk-sdk.route53.Route53Client.fetchTrafficPolicy"></a>

```typescript
public fetchTrafficPolicy(input: Route53GetTrafficPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest`](#aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest)

---

##### `fetchTrafficPolicyInstance` <a name="aws-cdk-sdk.route53.Route53Client.fetchTrafficPolicyInstance"></a>

```typescript
public fetchTrafficPolicyInstance(input: Route53GetTrafficPolicyInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest)

---

##### `fetchTrafficPolicyInstanceCount` <a name="aws-cdk-sdk.route53.Route53Client.fetchTrafficPolicyInstanceCount"></a>

```typescript
public fetchTrafficPolicyInstanceCount()
```

##### `listGeoLocations` <a name="aws-cdk-sdk.route53.Route53Client.listGeoLocations"></a>

```typescript
public listGeoLocations(input: Route53ListGeoLocationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListGeoLocationsRequest`](#aws-cdk-sdk.route53.Route53ListGeoLocationsRequest)

---

##### `listHealthChecks` <a name="aws-cdk-sdk.route53.Route53Client.listHealthChecks"></a>

```typescript
public listHealthChecks(input: Route53ListHealthChecksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHealthChecksRequest`](#aws-cdk-sdk.route53.Route53ListHealthChecksRequest)

---

##### `listHostedZones` <a name="aws-cdk-sdk.route53.Route53Client.listHostedZones"></a>

```typescript
public listHostedZones(input: Route53ListHostedZonesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHostedZonesRequest`](#aws-cdk-sdk.route53.Route53ListHostedZonesRequest)

---

##### `listHostedZonesByName` <a name="aws-cdk-sdk.route53.Route53Client.listHostedZonesByName"></a>

```typescript
public listHostedZonesByName(input: Route53ListHostedZonesByNameRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest`](#aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest)

---

##### `listHostedZonesByVpc` <a name="aws-cdk-sdk.route53.Route53Client.listHostedZonesByVpc"></a>

```typescript
public listHostedZonesByVpc(input: Route53ListHostedZonesByVpcRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest`](#aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest)

---

##### `listQueryLoggingConfigs` <a name="aws-cdk-sdk.route53.Route53Client.listQueryLoggingConfigs"></a>

```typescript
public listQueryLoggingConfigs(input: Route53ListQueryLoggingConfigsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest`](#aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest)

---

##### `listResourceRecordSets` <a name="aws-cdk-sdk.route53.Route53Client.listResourceRecordSets"></a>

```typescript
public listResourceRecordSets(input: Route53ListResourceRecordSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest`](#aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest)

---

##### `listReusableDelegationSets` <a name="aws-cdk-sdk.route53.Route53Client.listReusableDelegationSets"></a>

```typescript
public listReusableDelegationSets(input: Route53ListReusableDelegationSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListReusableDelegationSetsRequest`](#aws-cdk-sdk.route53.Route53ListReusableDelegationSetsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.route53.Route53Client.listTagsForResource"></a>

```typescript
public listTagsForResource(input: Route53ListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTagsForResourceRequest`](#aws-cdk-sdk.route53.Route53ListTagsForResourceRequest)

---

##### `listTagsForResources` <a name="aws-cdk-sdk.route53.Route53Client.listTagsForResources"></a>

```typescript
public listTagsForResources(input: Route53ListTagsForResourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTagsForResourcesRequest`](#aws-cdk-sdk.route53.Route53ListTagsForResourcesRequest)

---

##### `listTrafficPolicies` <a name="aws-cdk-sdk.route53.Route53Client.listTrafficPolicies"></a>

```typescript
public listTrafficPolicies(input: Route53ListTrafficPoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPoliciesRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPoliciesRequest)

---

##### `listTrafficPolicyInstances` <a name="aws-cdk-sdk.route53.Route53Client.listTrafficPolicyInstances"></a>

```typescript
public listTrafficPolicyInstances(input: Route53ListTrafficPolicyInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest)

---

##### `listTrafficPolicyInstancesByHostedZone` <a name="aws-cdk-sdk.route53.Route53Client.listTrafficPolicyInstancesByHostedZone"></a>

```typescript
public listTrafficPolicyInstancesByHostedZone(input: Route53ListTrafficPolicyInstancesByHostedZoneRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest)

---

##### `listTrafficPolicyInstancesByPolicy` <a name="aws-cdk-sdk.route53.Route53Client.listTrafficPolicyInstancesByPolicy"></a>

```typescript
public listTrafficPolicyInstancesByPolicy(input: Route53ListTrafficPolicyInstancesByPolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest)

---

##### `listTrafficPolicyVersions` <a name="aws-cdk-sdk.route53.Route53Client.listTrafficPolicyVersions"></a>

```typescript
public listTrafficPolicyVersions(input: Route53ListTrafficPolicyVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest)

---

##### `listVpcAssociationAuthorizations` <a name="aws-cdk-sdk.route53.Route53Client.listVpcAssociationAuthorizations"></a>

```typescript
public listVpcAssociationAuthorizations(input: Route53ListVpcAssociationAuthorizationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest`](#aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest)

---

##### `testDnsAnswer` <a name="aws-cdk-sdk.route53.Route53Client.testDnsAnswer"></a>

```typescript
public testDnsAnswer(input: Route53TestDnsAnswerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TestDnsAnswerRequest`](#aws-cdk-sdk.route53.Route53TestDnsAnswerRequest)

---

##### `updateHealthCheck` <a name="aws-cdk-sdk.route53.Route53Client.updateHealthCheck"></a>

```typescript
public updateHealthCheck(input: Route53UpdateHealthCheckRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest)

---

##### `updateHostedZoneComment` <a name="aws-cdk-sdk.route53.Route53Client.updateHostedZoneComment"></a>

```typescript
public updateHostedZoneComment(input: Route53UpdateHostedZoneCommentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest)

---

##### `updateTrafficPolicyComment` <a name="aws-cdk-sdk.route53.Route53Client.updateTrafficPolicyComment"></a>

```typescript
public updateTrafficPolicyComment(input: Route53UpdateTrafficPolicyCommentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest)

---

##### `updateTrafficPolicyInstance` <a name="aws-cdk-sdk.route53.Route53Client.updateTrafficPolicyInstance"></a>

```typescript
public updateTrafficPolicyInstance(input: Route53UpdateTrafficPolicyInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Client.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest)

---




## Structs <a name="Structs"></a>

### Route53AccountLimit <a name="aws-cdk-sdk.route53.Route53AccountLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53AccountLimit: route53.Route53AccountLimit = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AccountLimit.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AccountLimit.property.value"></a>

- *Type:* `number`

---

### Route53AlarmIdentifier <a name="aws-cdk-sdk.route53.Route53AlarmIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53AlarmIdentifier: route53.Route53AlarmIdentifier = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AlarmIdentifier.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AlarmIdentifier.property.region"></a>

- *Type:* `string`

---

### Route53AliasTarget <a name="aws-cdk-sdk.route53.Route53AliasTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53AliasTarget: route53.Route53AliasTarget = { ... }
```

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AliasTarget.property.dnsName"></a>

- *Type:* `string`

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AliasTarget.property.evaluateTargetHealth"></a>

- *Type:* `boolean`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AliasTarget.property.hostedZoneId"></a>

- *Type:* `string`

---

### Route53AssociateVpcWithHostedZoneRequest <a name="aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53AssociateVpcWithHostedZoneRequest: route53.Route53AssociateVpcWithHostedZoneRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest.property.comment"></a>

- *Type:* `string`

---

### Route53AssociateVpcWithHostedZoneResponse <a name="aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53AssociateVpcWithHostedZoneResponse: route53.Route53AssociateVpcWithHostedZoneResponse = { ... }
```

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneResponse.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeInfo`](#aws-cdk-sdk.route53.Route53ChangeInfo)

---

### Route53Change <a name="aws-cdk-sdk.route53.Route53Change"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53Change: route53.Route53Change = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Change.property.action"></a>

- *Type:* `string`

---

##### `resourceRecordSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Change.property.resourceRecordSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResourceRecordSet`](#aws-cdk-sdk.route53.Route53ResourceRecordSet)

---

### Route53ChangeBatch <a name="aws-cdk-sdk.route53.Route53ChangeBatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ChangeBatch: route53.Route53ChangeBatch = { ... }
```

##### `changes`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeBatch.property.changes"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Change`](#aws-cdk-sdk.route53.Route53Change)[]

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ChangeBatch.property.comment"></a>

- *Type:* `string`

---

### Route53ChangeInfo <a name="aws-cdk-sdk.route53.Route53ChangeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ChangeInfo: route53.Route53ChangeInfo = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeInfo.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeInfo.property.status"></a>

- *Type:* `string`

---

##### `submittedAt`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeInfo.property.submittedAt"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ChangeInfo.property.comment"></a>

- *Type:* `string`

---

### Route53ChangeResourceRecordSetsRequest <a name="aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ChangeResourceRecordSetsRequest: route53.Route53ChangeResourceRecordSetsRequest = { ... }
```

##### `changeBatch`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest.property.changeBatch"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeBatch`](#aws-cdk-sdk.route53.Route53ChangeBatch)

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

### Route53ChangeResourceRecordSetsResponse <a name="aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ChangeResourceRecordSetsResponse: route53.Route53ChangeResourceRecordSetsResponse = { ... }
```

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsResponse.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeInfo`](#aws-cdk-sdk.route53.Route53ChangeInfo)

---

### Route53ChangeTagsForResourceRequest <a name="aws-cdk-sdk.route53.Route53ChangeTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ChangeTagsForResourceRequest: route53.Route53ChangeTagsForResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeTagsForResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ChangeTagsForResourceRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `addTags`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ChangeTagsForResourceRequest.property.addTags"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Tag`](#aws-cdk-sdk.route53.Route53Tag)[]

---

##### `removeTagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ChangeTagsForResourceRequest.property.removeTagKeys"></a>

- *Type:* `string`[]

---

### Route53ChangeTagsForResourceResponse <a name="aws-cdk-sdk.route53.Route53ChangeTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ChangeTagsForResourceResponse: route53.Route53ChangeTagsForResourceResponse = { ... }
```

### Route53CloudWatchAlarmConfiguration <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CloudWatchAlarmConfiguration: route53.Route53CloudWatchAlarmConfiguration = { ... }
```

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `evaluationPeriods`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.namespace"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.period"></a>

- *Type:* `number`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.statistic"></a>

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.threshold"></a>

- *Type:* `number`

---

##### `dimensions`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Dimension`](#aws-cdk-sdk.route53.Route53Dimension)[]

---

### Route53CreateHealthCheckRequest <a name="aws-cdk-sdk.route53.Route53CreateHealthCheckRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateHealthCheckRequest: route53.Route53CreateHealthCheckRequest = { ... }
```

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHealthCheckRequest.property.callerReference"></a>

- *Type:* `string`

---

##### `healthCheckConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHealthCheckRequest.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheckConfig`](#aws-cdk-sdk.route53.Route53HealthCheckConfig)

---

### Route53CreateHealthCheckResponse <a name="aws-cdk-sdk.route53.Route53CreateHealthCheckResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateHealthCheckResponse: route53.Route53CreateHealthCheckResponse = { ... }
```

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHealthCheckResponse.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheck`](#aws-cdk-sdk.route53.Route53HealthCheck)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHealthCheckResponse.property.location"></a>

- *Type:* `string`

---

### Route53CreateHostedZoneRequest <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateHostedZoneRequest: route53.Route53CreateHostedZoneRequest = { ... }
```

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneRequest.property.callerReference"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneRequest.property.name"></a>

- *Type:* `string`

---

##### `delegationSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneRequest.property.delegationSetId"></a>

- *Type:* `string`

---

##### `hostedZoneConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneRequest.property.hostedZoneConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZoneConfig`](#aws-cdk-sdk.route53.Route53HostedZoneConfig)

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneRequest.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)

---

### Route53CreateHostedZoneResponse <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateHostedZoneResponse: route53.Route53CreateHostedZoneResponse = { ... }
```

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneResponse.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeInfo`](#aws-cdk-sdk.route53.Route53ChangeInfo)

---

##### `delegationSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneResponse.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DelegationSet`](#aws-cdk-sdk.route53.Route53DelegationSet)

---

##### `hostedZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneResponse.property.hostedZone"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZone`](#aws-cdk-sdk.route53.Route53HostedZone)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneResponse.property.location"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CreateHostedZoneResponse.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)

---

### Route53CreateQueryLoggingConfigRequest <a name="aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateQueryLoggingConfigRequest: route53.Route53CreateQueryLoggingConfigRequest = { ... }
```

##### `cloudWatchLogsLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

### Route53CreateQueryLoggingConfigResponse <a name="aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateQueryLoggingConfigResponse: route53.Route53CreateQueryLoggingConfigResponse = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigResponse.property.location"></a>

- *Type:* `string`

---

##### `queryLoggingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigResponse.property.queryLoggingConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53QueryLoggingConfig`](#aws-cdk-sdk.route53.Route53QueryLoggingConfig)

---

### Route53CreateReusableDelegationSetRequest <a name="aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateReusableDelegationSetRequest: route53.Route53CreateReusableDelegationSetRequest = { ... }
```

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest.property.callerReference"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

### Route53CreateReusableDelegationSetResponse <a name="aws-cdk-sdk.route53.Route53CreateReusableDelegationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateReusableDelegationSetResponse: route53.Route53CreateReusableDelegationSetResponse = { ... }
```

##### `delegationSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateReusableDelegationSetResponse.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DelegationSet`](#aws-cdk-sdk.route53.Route53DelegationSet)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateReusableDelegationSetResponse.property.location"></a>

- *Type:* `string`

---

### Route53CreateTrafficPolicyInstanceRequest <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateTrafficPolicyInstanceRequest: route53.Route53CreateTrafficPolicyInstanceRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest.property.name"></a>

- *Type:* `string`

---

##### `trafficPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest.property.trafficPolicyId"></a>

- *Type:* `string`

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest.property.trafficPolicyVersion"></a>

- *Type:* `number`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest.property.ttl"></a>

- *Type:* `number`

---

### Route53CreateTrafficPolicyInstanceResponse <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateTrafficPolicyInstanceResponse: route53.Route53CreateTrafficPolicyInstanceResponse = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceResponse.property.location"></a>

- *Type:* `string`

---

##### `trafficPolicyInstance`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceResponse.property.trafficPolicyInstance"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)

---

### Route53CreateTrafficPolicyRequest <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateTrafficPolicyRequest: route53.Route53CreateTrafficPolicyRequest = { ... }
```

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest.property.document"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest.property.name"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest.property.comment"></a>

- *Type:* `string`

---

### Route53CreateTrafficPolicyResponse <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateTrafficPolicyResponse: route53.Route53CreateTrafficPolicyResponse = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyResponse.property.location"></a>

- *Type:* `string`

---

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyResponse.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicy`](#aws-cdk-sdk.route53.Route53TrafficPolicy)

---

### Route53CreateTrafficPolicyVersionRequest <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateTrafficPolicyVersionRequest: route53.Route53CreateTrafficPolicyVersionRequest = { ... }
```

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest.property.document"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest.property.id"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest.property.comment"></a>

- *Type:* `string`

---

### Route53CreateTrafficPolicyVersionResponse <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateTrafficPolicyVersionResponse: route53.Route53CreateTrafficPolicyVersionResponse = { ... }
```

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionResponse.property.location"></a>

- *Type:* `string`

---

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionResponse.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicy`](#aws-cdk-sdk.route53.Route53TrafficPolicy)

---

### Route53CreateVpcAssociationAuthorizationRequest <a name="aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateVpcAssociationAuthorizationRequest: route53.Route53CreateVpcAssociationAuthorizationRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)

---

### Route53CreateVpcAssociationAuthorizationResponse <a name="aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53CreateVpcAssociationAuthorizationResponse: route53.Route53CreateVpcAssociationAuthorizationResponse = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationResponse.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationResponse.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)

---

### Route53DelegationSet <a name="aws-cdk-sdk.route53.Route53DelegationSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DelegationSet: route53.Route53DelegationSet = { ... }
```

##### `nameServers`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DelegationSet.property.nameServers"></a>

- *Type:* `string`[]

---

##### `callerReference`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53DelegationSet.property.callerReference"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53DelegationSet.property.id"></a>

- *Type:* `string`

---

### Route53DeleteHealthCheckRequest <a name="aws-cdk-sdk.route53.Route53DeleteHealthCheckRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteHealthCheckRequest: route53.Route53DeleteHealthCheckRequest = { ... }
```

##### `healthCheckId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteHealthCheckRequest.property.healthCheckId"></a>

- *Type:* `string`

---

### Route53DeleteHealthCheckResponse <a name="aws-cdk-sdk.route53.Route53DeleteHealthCheckResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteHealthCheckResponse: route53.Route53DeleteHealthCheckResponse = { ... }
```

### Route53DeleteHostedZoneRequest <a name="aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteHostedZoneRequest: route53.Route53DeleteHostedZoneRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest.property.id"></a>

- *Type:* `string`

---

### Route53DeleteHostedZoneResponse <a name="aws-cdk-sdk.route53.Route53DeleteHostedZoneResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteHostedZoneResponse: route53.Route53DeleteHostedZoneResponse = { ... }
```

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteHostedZoneResponse.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeInfo`](#aws-cdk-sdk.route53.Route53ChangeInfo)

---

### Route53DeleteQueryLoggingConfigRequest <a name="aws-cdk-sdk.route53.Route53DeleteQueryLoggingConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteQueryLoggingConfigRequest: route53.Route53DeleteQueryLoggingConfigRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteQueryLoggingConfigRequest.property.id"></a>

- *Type:* `string`

---

### Route53DeleteQueryLoggingConfigResponse <a name="aws-cdk-sdk.route53.Route53DeleteQueryLoggingConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteQueryLoggingConfigResponse: route53.Route53DeleteQueryLoggingConfigResponse = { ... }
```

### Route53DeleteReusableDelegationSetRequest <a name="aws-cdk-sdk.route53.Route53DeleteReusableDelegationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteReusableDelegationSetRequest: route53.Route53DeleteReusableDelegationSetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteReusableDelegationSetRequest.property.id"></a>

- *Type:* `string`

---

### Route53DeleteReusableDelegationSetResponse <a name="aws-cdk-sdk.route53.Route53DeleteReusableDelegationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteReusableDelegationSetResponse: route53.Route53DeleteReusableDelegationSetResponse = { ... }
```

### Route53DeleteTrafficPolicyInstanceRequest <a name="aws-cdk-sdk.route53.Route53DeleteTrafficPolicyInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteTrafficPolicyInstanceRequest: route53.Route53DeleteTrafficPolicyInstanceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteTrafficPolicyInstanceRequest.property.id"></a>

- *Type:* `string`

---

### Route53DeleteTrafficPolicyInstanceResponse <a name="aws-cdk-sdk.route53.Route53DeleteTrafficPolicyInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteTrafficPolicyInstanceResponse: route53.Route53DeleteTrafficPolicyInstanceResponse = { ... }
```

### Route53DeleteTrafficPolicyRequest <a name="aws-cdk-sdk.route53.Route53DeleteTrafficPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteTrafficPolicyRequest: route53.Route53DeleteTrafficPolicyRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteTrafficPolicyRequest.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteTrafficPolicyRequest.property.version"></a>

- *Type:* `number`

---

### Route53DeleteTrafficPolicyResponse <a name="aws-cdk-sdk.route53.Route53DeleteTrafficPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteTrafficPolicyResponse: route53.Route53DeleteTrafficPolicyResponse = { ... }
```

### Route53DeleteVpcAssociationAuthorizationRequest <a name="aws-cdk-sdk.route53.Route53DeleteVpcAssociationAuthorizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteVpcAssociationAuthorizationRequest: route53.Route53DeleteVpcAssociationAuthorizationRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteVpcAssociationAuthorizationRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DeleteVpcAssociationAuthorizationRequest.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)

---

### Route53DeleteVpcAssociationAuthorizationResponse <a name="aws-cdk-sdk.route53.Route53DeleteVpcAssociationAuthorizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DeleteVpcAssociationAuthorizationResponse: route53.Route53DeleteVpcAssociationAuthorizationResponse = { ... }
```

### Route53Dimension <a name="aws-cdk-sdk.route53.Route53Dimension"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53Dimension: route53.Route53Dimension = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Dimension.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53Dimension.property.value"></a>

- *Type:* `string`

---

### Route53DisassociateVpcFromHostedZoneRequest <a name="aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DisassociateVpcFromHostedZoneRequest: route53.Route53DisassociateVpcFromHostedZoneRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest.property.comment"></a>

- *Type:* `string`

---

### Route53DisassociateVpcFromHostedZoneResponse <a name="aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53DisassociateVpcFromHostedZoneResponse: route53.Route53DisassociateVpcFromHostedZoneResponse = { ... }
```

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneResponse.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeInfo`](#aws-cdk-sdk.route53.Route53ChangeInfo)

---

### Route53GeoLocation <a name="aws-cdk-sdk.route53.Route53GeoLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GeoLocation: route53.Route53GeoLocation = { ... }
```

##### `continentCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocation.property.continentCode"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocation.property.countryCode"></a>

- *Type:* `string`

---

##### `subdivisionCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocation.property.subdivisionCode"></a>

- *Type:* `string`

---

### Route53GeoLocationDetails <a name="aws-cdk-sdk.route53.Route53GeoLocationDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GeoLocationDetails: route53.Route53GeoLocationDetails = { ... }
```

##### `continentCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocationDetails.property.continentCode"></a>

- *Type:* `string`

---

##### `continentName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocationDetails.property.continentName"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocationDetails.property.countryCode"></a>

- *Type:* `string`

---

##### `countryName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocationDetails.property.countryName"></a>

- *Type:* `string`

---

##### `subdivisionCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocationDetails.property.subdivisionCode"></a>

- *Type:* `string`

---

##### `subdivisionName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GeoLocationDetails.property.subdivisionName"></a>

- *Type:* `string`

---

### Route53GetAccountLimitRequest <a name="aws-cdk-sdk.route53.Route53GetAccountLimitRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetAccountLimitRequest: route53.Route53GetAccountLimitRequest = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetAccountLimitRequest.property.type"></a>

- *Type:* `string`

---

### Route53GetAccountLimitResponse <a name="aws-cdk-sdk.route53.Route53GetAccountLimitResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetAccountLimitResponse: route53.Route53GetAccountLimitResponse = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetAccountLimitResponse.property.count"></a>

- *Type:* `number`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetAccountLimitResponse.property.limit"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53AccountLimit`](#aws-cdk-sdk.route53.Route53AccountLimit)

---

### Route53GetChangeRequest <a name="aws-cdk-sdk.route53.Route53GetChangeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetChangeRequest: route53.Route53GetChangeRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetChangeRequest.property.id"></a>

- *Type:* `string`

---

### Route53GetChangeResponse <a name="aws-cdk-sdk.route53.Route53GetChangeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetChangeResponse: route53.Route53GetChangeResponse = { ... }
```

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetChangeResponse.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeInfo`](#aws-cdk-sdk.route53.Route53ChangeInfo)

---

### Route53GetCheckerIpRangesRequest <a name="aws-cdk-sdk.route53.Route53GetCheckerIpRangesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetCheckerIpRangesRequest: route53.Route53GetCheckerIpRangesRequest = { ... }
```

### Route53GetCheckerIpRangesResponse <a name="aws-cdk-sdk.route53.Route53GetCheckerIpRangesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetCheckerIpRangesResponse: route53.Route53GetCheckerIpRangesResponse = { ... }
```

##### `checkerIpRanges`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetCheckerIpRangesResponse.property.checkerIpRanges"></a>

- *Type:* `string`[]

---

### Route53GetGeoLocationRequest <a name="aws-cdk-sdk.route53.Route53GetGeoLocationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetGeoLocationRequest: route53.Route53GetGeoLocationRequest = { ... }
```

##### `continentCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GetGeoLocationRequest.property.continentCode"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GetGeoLocationRequest.property.countryCode"></a>

- *Type:* `string`

---

##### `subdivisionCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GetGeoLocationRequest.property.subdivisionCode"></a>

- *Type:* `string`

---

### Route53GetGeoLocationResponse <a name="aws-cdk-sdk.route53.Route53GetGeoLocationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetGeoLocationResponse: route53.Route53GetGeoLocationResponse = { ... }
```

##### `geoLocationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetGeoLocationResponse.property.geoLocationDetails"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GeoLocationDetails`](#aws-cdk-sdk.route53.Route53GeoLocationDetails)

---

### Route53GetHealthCheckCountRequest <a name="aws-cdk-sdk.route53.Route53GetHealthCheckCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckCountRequest: route53.Route53GetHealthCheckCountRequest = { ... }
```

### Route53GetHealthCheckCountResponse <a name="aws-cdk-sdk.route53.Route53GetHealthCheckCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckCountResponse: route53.Route53GetHealthCheckCountResponse = { ... }
```

##### `healthCheckCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHealthCheckCountResponse.property.healthCheckCount"></a>

- *Type:* `number`

---

### Route53GetHealthCheckLastFailureReasonRequest <a name="aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckLastFailureReasonRequest: route53.Route53GetHealthCheckLastFailureReasonRequest = { ... }
```

##### `healthCheckId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonRequest.property.healthCheckId"></a>

- *Type:* `string`

---

### Route53GetHealthCheckLastFailureReasonResponse <a name="aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckLastFailureReasonResponse: route53.Route53GetHealthCheckLastFailureReasonResponse = { ... }
```

##### `healthCheckObservations`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonResponse.property.healthCheckObservations"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheckObservation`](#aws-cdk-sdk.route53.Route53HealthCheckObservation)[]

---

### Route53GetHealthCheckRequest <a name="aws-cdk-sdk.route53.Route53GetHealthCheckRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckRequest: route53.Route53GetHealthCheckRequest = { ... }
```

##### `healthCheckId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHealthCheckRequest.property.healthCheckId"></a>

- *Type:* `string`

---

### Route53GetHealthCheckResponse <a name="aws-cdk-sdk.route53.Route53GetHealthCheckResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckResponse: route53.Route53GetHealthCheckResponse = { ... }
```

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHealthCheckResponse.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheck`](#aws-cdk-sdk.route53.Route53HealthCheck)

---

### Route53GetHealthCheckStatusRequest <a name="aws-cdk-sdk.route53.Route53GetHealthCheckStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckStatusRequest: route53.Route53GetHealthCheckStatusRequest = { ... }
```

##### `healthCheckId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHealthCheckStatusRequest.property.healthCheckId"></a>

- *Type:* `string`

---

### Route53GetHealthCheckStatusResponse <a name="aws-cdk-sdk.route53.Route53GetHealthCheckStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHealthCheckStatusResponse: route53.Route53GetHealthCheckStatusResponse = { ... }
```

##### `healthCheckObservations`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHealthCheckStatusResponse.property.healthCheckObservations"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheckObservation`](#aws-cdk-sdk.route53.Route53HealthCheckObservation)[]

---

### Route53GetHostedZoneCountRequest <a name="aws-cdk-sdk.route53.Route53GetHostedZoneCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHostedZoneCountRequest: route53.Route53GetHostedZoneCountRequest = { ... }
```

### Route53GetHostedZoneCountResponse <a name="aws-cdk-sdk.route53.Route53GetHostedZoneCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHostedZoneCountResponse: route53.Route53GetHostedZoneCountResponse = { ... }
```

##### `hostedZoneCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneCountResponse.property.hostedZoneCount"></a>

- *Type:* `number`

---

### Route53GetHostedZoneLimitRequest <a name="aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHostedZoneLimitRequest: route53.Route53GetHostedZoneLimitRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest.property.type"></a>

- *Type:* `string`

---

### Route53GetHostedZoneLimitResponse <a name="aws-cdk-sdk.route53.Route53GetHostedZoneLimitResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHostedZoneLimitResponse: route53.Route53GetHostedZoneLimitResponse = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneLimitResponse.property.count"></a>

- *Type:* `number`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneLimitResponse.property.limit"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZoneLimit`](#aws-cdk-sdk.route53.Route53HostedZoneLimit)

---

### Route53GetHostedZoneRequest <a name="aws-cdk-sdk.route53.Route53GetHostedZoneRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHostedZoneRequest: route53.Route53GetHostedZoneRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneRequest.property.id"></a>

- *Type:* `string`

---

### Route53GetHostedZoneResponse <a name="aws-cdk-sdk.route53.Route53GetHostedZoneResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetHostedZoneResponse: route53.Route53GetHostedZoneResponse = { ... }
```

##### `hostedZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneResponse.property.hostedZone"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZone`](#aws-cdk-sdk.route53.Route53HostedZone)

---

##### `delegationSet`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneResponse.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DelegationSet`](#aws-cdk-sdk.route53.Route53DelegationSet)

---

##### `vpCs`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53GetHostedZoneResponse.property.vpCs"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)[]

---

### Route53GetQueryLoggingConfigRequest <a name="aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetQueryLoggingConfigRequest: route53.Route53GetQueryLoggingConfigRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest.property.id"></a>

- *Type:* `string`

---

### Route53GetQueryLoggingConfigResponse <a name="aws-cdk-sdk.route53.Route53GetQueryLoggingConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetQueryLoggingConfigResponse: route53.Route53GetQueryLoggingConfigResponse = { ... }
```

##### `queryLoggingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetQueryLoggingConfigResponse.property.queryLoggingConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53QueryLoggingConfig`](#aws-cdk-sdk.route53.Route53QueryLoggingConfig)

---

### Route53GetReusableDelegationSetLimitRequest <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetReusableDelegationSetLimitRequest: route53.Route53GetReusableDelegationSetLimitRequest = { ... }
```

##### `delegationSetId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest.property.delegationSetId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest.property.type"></a>

- *Type:* `string`

---

### Route53GetReusableDelegationSetLimitResponse <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetReusableDelegationSetLimitResponse: route53.Route53GetReusableDelegationSetLimitResponse = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitResponse.property.count"></a>

- *Type:* `number`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitResponse.property.limit"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ReusableDelegationSetLimit`](#aws-cdk-sdk.route53.Route53ReusableDelegationSetLimit)

---

### Route53GetReusableDelegationSetRequest <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetReusableDelegationSetRequest: route53.Route53GetReusableDelegationSetRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest.property.id"></a>

- *Type:* `string`

---

### Route53GetReusableDelegationSetResponse <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetReusableDelegationSetResponse: route53.Route53GetReusableDelegationSetResponse = { ... }
```

##### `delegationSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetReusableDelegationSetResponse.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DelegationSet`](#aws-cdk-sdk.route53.Route53DelegationSet)

---

### Route53GetTrafficPolicyInstanceCountRequest <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetTrafficPolicyInstanceCountRequest: route53.Route53GetTrafficPolicyInstanceCountRequest = { ... }
```

### Route53GetTrafficPolicyInstanceCountResponse <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetTrafficPolicyInstanceCountResponse: route53.Route53GetTrafficPolicyInstanceCountResponse = { ... }
```

##### `trafficPolicyInstanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceCountResponse.property.trafficPolicyInstanceCount"></a>

- *Type:* `number`

---

### Route53GetTrafficPolicyInstanceRequest <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetTrafficPolicyInstanceRequest: route53.Route53GetTrafficPolicyInstanceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest.property.id"></a>

- *Type:* `string`

---

### Route53GetTrafficPolicyInstanceResponse <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetTrafficPolicyInstanceResponse: route53.Route53GetTrafficPolicyInstanceResponse = { ... }
```

##### `trafficPolicyInstance`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceResponse.property.trafficPolicyInstance"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)

---

### Route53GetTrafficPolicyRequest <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetTrafficPolicyRequest: route53.Route53GetTrafficPolicyRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest.property.version"></a>

- *Type:* `number`

---

### Route53GetTrafficPolicyResponse <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53GetTrafficPolicyResponse: route53.Route53GetTrafficPolicyResponse = { ... }
```

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53GetTrafficPolicyResponse.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicy`](#aws-cdk-sdk.route53.Route53TrafficPolicy)

---

### Route53HealthCheck <a name="aws-cdk-sdk.route53.Route53HealthCheck"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HealthCheck: route53.Route53HealthCheck = { ... }
```

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheck.property.callerReference"></a>

- *Type:* `string`

---

##### `healthCheckConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheck.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheckConfig`](#aws-cdk-sdk.route53.Route53HealthCheckConfig)

---

##### `healthCheckVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheck.property.healthCheckVersion"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheck.property.id"></a>

- *Type:* `string`

---

##### `cloudWatchAlarmConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheck.property.cloudWatchAlarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration`](#aws-cdk-sdk.route53.Route53CloudWatchAlarmConfiguration)

---

##### `linkedService`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheck.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53LinkedService`](#aws-cdk-sdk.route53.Route53LinkedService)

---

### Route53HealthCheckConfig <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HealthCheckConfig: route53.Route53HealthCheckConfig = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.type"></a>

- *Type:* `string`

---

##### `alarmIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.alarmIdentifier"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53AlarmIdentifier`](#aws-cdk-sdk.route53.Route53AlarmIdentifier)

---

##### `childHealthChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.childHealthChecks"></a>

- *Type:* `string`[]

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.disabled"></a>

- *Type:* `boolean`

---

##### `enableSni`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.enableSni"></a>

- *Type:* `boolean`

---

##### `failureThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.failureThreshold"></a>

- *Type:* `number`

---

##### `fullyQualifiedDomainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.fullyQualifiedDomainName"></a>

- *Type:* `string`

---

##### `healthThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.healthThreshold"></a>

- *Type:* `number`

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.insufficientDataHealthStatus"></a>

- *Type:* `string`

---

##### `inverted`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.inverted"></a>

- *Type:* `boolean`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.ipAddress"></a>

- *Type:* `string`

---

##### `measureLatency`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.measureLatency"></a>

- *Type:* `boolean`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.port"></a>

- *Type:* `number`

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.regions"></a>

- *Type:* `string`[]

---

##### `requestInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.requestInterval"></a>

- *Type:* `number`

---

##### `resourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.resourcePath"></a>

- *Type:* `string`

---

##### `searchString`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckConfig.property.searchString"></a>

- *Type:* `string`

---

### Route53HealthCheckObservation <a name="aws-cdk-sdk.route53.Route53HealthCheckObservation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HealthCheckObservation: route53.Route53HealthCheckObservation = { ... }
```

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckObservation.property.ipAddress"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckObservation.property.region"></a>

- *Type:* `string`

---

##### `statusReport`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HealthCheckObservation.property.statusReport"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53StatusReport`](#aws-cdk-sdk.route53.Route53StatusReport)

---

### Route53HostedZone <a name="aws-cdk-sdk.route53.Route53HostedZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HostedZone: route53.Route53HostedZone = { ... }
```

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZone.property.callerReference"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZone.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZone.property.name"></a>

- *Type:* `string`

---

##### `config`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HostedZone.property.config"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZoneConfig`](#aws-cdk-sdk.route53.Route53HostedZoneConfig)

---

##### `linkedService`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HostedZone.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53LinkedService`](#aws-cdk-sdk.route53.Route53LinkedService)

---

##### `resourceRecordSetCount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HostedZone.property.resourceRecordSetCount"></a>

- *Type:* `number`

---

### Route53HostedZoneConfig <a name="aws-cdk-sdk.route53.Route53HostedZoneConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HostedZoneConfig: route53.Route53HostedZoneConfig = { ... }
```

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneConfig.property.comment"></a>

- *Type:* `string`

---

##### `privateZone`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneConfig.property.privateZone"></a>

- *Type:* `boolean`

---

### Route53HostedZoneLimit <a name="aws-cdk-sdk.route53.Route53HostedZoneLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HostedZoneLimit: route53.Route53HostedZoneLimit = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneLimit.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneLimit.property.value"></a>

- *Type:* `number`

---

### Route53HostedZoneOwner <a name="aws-cdk-sdk.route53.Route53HostedZoneOwner"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HostedZoneOwner: route53.Route53HostedZoneOwner = { ... }
```

##### `owningAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneOwner.property.owningAccount"></a>

- *Type:* `string`

---

##### `owningService`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneOwner.property.owningService"></a>

- *Type:* `string`

---

### Route53HostedZoneSummary <a name="aws-cdk-sdk.route53.Route53HostedZoneSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53HostedZoneSummary: route53.Route53HostedZoneSummary = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneSummary.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53HostedZoneSummary.property.owner"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZoneOwner`](#aws-cdk-sdk.route53.Route53HostedZoneOwner)

---

### Route53LinkedService <a name="aws-cdk-sdk.route53.Route53LinkedService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53LinkedService: route53.Route53LinkedService = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53LinkedService.property.description"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53LinkedService.property.servicePrincipal"></a>

- *Type:* `string`

---

### Route53ListGeoLocationsRequest <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListGeoLocationsRequest: route53.Route53ListGeoLocationsRequest = { ... }
```

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `startContinentCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsRequest.property.startContinentCode"></a>

- *Type:* `string`

---

##### `startCountryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsRequest.property.startCountryCode"></a>

- *Type:* `string`

---

##### `startSubdivisionCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsRequest.property.startSubdivisionCode"></a>

- *Type:* `string`

---

### Route53ListGeoLocationsResponse <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListGeoLocationsResponse: route53.Route53ListGeoLocationsResponse = { ... }
```

##### `geoLocationDetailsList`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsResponse.property.geoLocationDetailsList"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GeoLocationDetails`](#aws-cdk-sdk.route53.Route53GeoLocationDetails)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `nextContinentCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsResponse.property.nextContinentCode"></a>

- *Type:* `string`

---

##### `nextCountryCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsResponse.property.nextCountryCode"></a>

- *Type:* `string`

---

##### `nextSubdivisionCode`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListGeoLocationsResponse.property.nextSubdivisionCode"></a>

- *Type:* `string`

---

### Route53ListHealthChecksRequest <a name="aws-cdk-sdk.route53.Route53ListHealthChecksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHealthChecksRequest: route53.Route53ListHealthChecksRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHealthChecksRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHealthChecksRequest.property.maxItems"></a>

- *Type:* `string`

---

### Route53ListHealthChecksResponse <a name="aws-cdk-sdk.route53.Route53ListHealthChecksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHealthChecksResponse: route53.Route53ListHealthChecksResponse = { ... }
```

##### `healthChecks`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHealthChecksResponse.property.healthChecks"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheck`](#aws-cdk-sdk.route53.Route53HealthCheck)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHealthChecksResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHealthChecksResponse.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHealthChecksResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHealthChecksResponse.property.nextMarker"></a>

- *Type:* `string`

---

### Route53ListHostedZonesByNameRequest <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHostedZonesByNameRequest: route53.Route53ListHostedZonesByNameRequest = { ... }
```

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest.property.dnsName"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest.property.maxItems"></a>

- *Type:* `string`

---

### Route53ListHostedZonesByNameResponse <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHostedZonesByNameResponse: route53.Route53ListHostedZonesByNameResponse = { ... }
```

##### `hostedZones`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse.property.hostedZones"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZone`](#aws-cdk-sdk.route53.Route53HostedZone)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `dnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse.property.dnsName"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `nextDnsName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse.property.nextDnsName"></a>

- *Type:* `string`

---

##### `nextHostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByNameResponse.property.nextHostedZoneId"></a>

- *Type:* `string`

---

### Route53ListHostedZonesByVpcRequest <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHostedZonesByVpcRequest: route53.Route53ListHostedZonesByVpcRequest = { ... }
```

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcRegion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest.property.vpcRegion"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ListHostedZonesByVpcResponse <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHostedZonesByVpcResponse: route53.Route53ListHostedZonesByVpcResponse = { ... }
```

##### `hostedZoneSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcResponse.property.hostedZoneSummaries"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZoneSummary`](#aws-cdk-sdk.route53.Route53HostedZoneSummary)[]

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesByVpcResponse.property.nextToken"></a>

- *Type:* `string`

---

### Route53ListHostedZonesRequest <a name="aws-cdk-sdk.route53.Route53ListHostedZonesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHostedZonesRequest: route53.Route53ListHostedZonesRequest = { ... }
```

##### `delegationSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesRequest.property.delegationSetId"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesRequest.property.maxItems"></a>

- *Type:* `string`

---

### Route53ListHostedZonesResponse <a name="aws-cdk-sdk.route53.Route53ListHostedZonesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListHostedZonesResponse: route53.Route53ListHostedZonesResponse = { ... }
```

##### `hostedZones`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesResponse.property.hostedZones"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZone`](#aws-cdk-sdk.route53.Route53HostedZone)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesResponse.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListHostedZonesResponse.property.nextMarker"></a>

- *Type:* `string`

---

### Route53ListQueryLoggingConfigsRequest <a name="aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListQueryLoggingConfigsRequest: route53.Route53ListQueryLoggingConfigsRequest = { ... }
```

##### `hostedZoneId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ListQueryLoggingConfigsResponse <a name="aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListQueryLoggingConfigsResponse: route53.Route53ListQueryLoggingConfigsResponse = { ... }
```

##### `queryLoggingConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsResponse.property.queryLoggingConfigs"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53QueryLoggingConfig`](#aws-cdk-sdk.route53.Route53QueryLoggingConfig)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Route53ListResourceRecordSetsRequest <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListResourceRecordSetsRequest: route53.Route53ListResourceRecordSetsRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `startRecordIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest.property.startRecordIdentifier"></a>

- *Type:* `string`

---

##### `startRecordName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest.property.startRecordName"></a>

- *Type:* `string`

---

##### `startRecordType`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest.property.startRecordType"></a>

- *Type:* `string`

---

### Route53ListResourceRecordSetsResponse <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListResourceRecordSetsResponse: route53.Route53ListResourceRecordSetsResponse = { ... }
```

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `resourceRecordSets`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsResponse.property.resourceRecordSets"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResourceRecordSet`](#aws-cdk-sdk.route53.Route53ResourceRecordSet)[]

---

##### `nextRecordIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsResponse.property.nextRecordIdentifier"></a>

- *Type:* `string`

---

##### `nextRecordName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsResponse.property.nextRecordName"></a>

- *Type:* `string`

---

##### `nextRecordType`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListResourceRecordSetsResponse.property.nextRecordType"></a>

- *Type:* `string`

---

### Route53ListReusableDelegationSetsRequest <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListReusableDelegationSetsRequest: route53.Route53ListReusableDelegationSetsRequest = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsRequest.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsRequest.property.maxItems"></a>

- *Type:* `string`

---

### Route53ListReusableDelegationSetsResponse <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListReusableDelegationSetsResponse: route53.Route53ListReusableDelegationSetsResponse = { ... }
```

##### `delegationSets`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsResponse.property.delegationSets"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DelegationSet`](#aws-cdk-sdk.route53.Route53DelegationSet)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsResponse.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListReusableDelegationSetsResponse.property.nextMarker"></a>

- *Type:* `string`

---

### Route53ListTagsForResourceRequest <a name="aws-cdk-sdk.route53.Route53ListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTagsForResourceRequest: route53.Route53ListTagsForResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTagsForResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTagsForResourceRequest.property.resourceType"></a>

- *Type:* `string`

---

### Route53ListTagsForResourceResponse <a name="aws-cdk-sdk.route53.Route53ListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTagsForResourceResponse: route53.Route53ListTagsForResourceResponse = { ... }
```

##### `resourceTagSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTagsForResourceResponse.property.resourceTagSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResourceTagSet`](#aws-cdk-sdk.route53.Route53ResourceTagSet)

---

### Route53ListTagsForResourcesRequest <a name="aws-cdk-sdk.route53.Route53ListTagsForResourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTagsForResourcesRequest: route53.Route53ListTagsForResourcesRequest = { ... }
```

##### `resourceIds`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTagsForResourcesRequest.property.resourceIds"></a>

- *Type:* `string`[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTagsForResourcesRequest.property.resourceType"></a>

- *Type:* `string`

---

### Route53ListTagsForResourcesResponse <a name="aws-cdk-sdk.route53.Route53ListTagsForResourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTagsForResourcesResponse: route53.Route53ListTagsForResourcesResponse = { ... }
```

##### `resourceTagSets`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTagsForResourcesResponse.property.resourceTagSets"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResourceTagSet`](#aws-cdk-sdk.route53.Route53ResourceTagSet)[]

---

### Route53ListTrafficPoliciesRequest <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPoliciesRequest: route53.Route53ListTrafficPoliciesRequest = { ... }
```

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesRequest.property.trafficPolicyIdMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPoliciesResponse <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPoliciesResponse: route53.Route53ListTrafficPoliciesResponse = { ... }
```

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesResponse.property.trafficPolicyIdMarker"></a>

- *Type:* `string`

---

##### `trafficPolicySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPoliciesResponse.property.trafficPolicySummaries"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicySummary`](#aws-cdk-sdk.route53.Route53TrafficPolicySummary)[]

---

### Route53ListTrafficPolicyInstancesByHostedZoneRequest <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyInstancesByHostedZoneRequest: route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceTypeMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPolicyInstancesByHostedZoneResponse <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyInstancesByHostedZoneResponse: route53.Route53ListTrafficPolicyInstancesByHostedZoneResponse = { ... }
```

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstances`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneResponse.property.trafficPolicyInstances"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)[]

---

##### `trafficPolicyInstanceNameMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneResponse.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceTypeMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneResponse.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPolicyInstancesByPolicyRequest <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyInstancesByPolicyRequest: route53.Route53ListTrafficPolicyInstancesByPolicyRequest = { ... }
```

##### `trafficPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest.property.trafficPolicyId"></a>

- *Type:* `string`

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest.property.trafficPolicyVersion"></a>

- *Type:* `number`

---

##### `hostedZoneIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest.property.hostedZoneIdMarker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceTypeMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPolicyInstancesByPolicyResponse <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyInstancesByPolicyResponse: route53.Route53ListTrafficPolicyInstancesByPolicyResponse = { ... }
```

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstances`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyResponse.property.trafficPolicyInstances"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)[]

---

##### `hostedZoneIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyResponse.property.hostedZoneIdMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyResponse.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceTypeMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyResponse.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPolicyInstancesRequest <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyInstancesRequest: route53.Route53ListTrafficPolicyInstancesRequest = { ... }
```

##### `hostedZoneIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest.property.hostedZoneIdMarker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceTypeMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPolicyInstancesResponse <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyInstancesResponse: route53.Route53ListTrafficPolicyInstancesResponse = { ... }
```

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstances`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesResponse.property.trafficPolicyInstances"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)[]

---

##### `hostedZoneIdMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesResponse.property.hostedZoneIdMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesResponse.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceTypeMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesResponse.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPolicyVersionsRequest <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyVersionsRequest: route53.Route53ListTrafficPolicyVersionsRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest.property.id"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyVersionMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest.property.trafficPolicyVersionMarker"></a>

- *Type:* `string`

---

### Route53ListTrafficPolicyVersionsResponse <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListTrafficPolicyVersionsResponse: route53.Route53ListTrafficPolicyVersionsResponse = { ... }
```

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsResponse.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsResponse.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsResponse.property.trafficPolicies"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicy`](#aws-cdk-sdk.route53.Route53TrafficPolicy)[]

---

##### `trafficPolicyVersionMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsResponse.property.trafficPolicyVersionMarker"></a>

- *Type:* `string`

---

### Route53ListVpcAssociationAuthorizationsRequest <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListVpcAssociationAuthorizationsRequest: route53.Route53ListVpcAssociationAuthorizationsRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### Route53ListVpcAssociationAuthorizationsResponse <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ListVpcAssociationAuthorizationsResponse: route53.Route53ListVpcAssociationAuthorizationsResponse = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsResponse.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `vpCs`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsResponse.property.vpCs"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### Route53QueryLoggingConfig <a name="aws-cdk-sdk.route53.Route53QueryLoggingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53QueryLoggingConfig: route53.Route53QueryLoggingConfig = { ... }
```

##### `cloudWatchLogsLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53QueryLoggingConfig.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53QueryLoggingConfig.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53QueryLoggingConfig.property.id"></a>

- *Type:* `string`

---

### Route53ResourceRecord <a name="aws-cdk-sdk.route53.Route53ResourceRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ResourceRecord: route53.Route53ResourceRecord = { ... }
```

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecord.property.value"></a>

- *Type:* `string`

---

### Route53ResourceRecordSet <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ResourceRecordSet: route53.Route53ResourceRecordSet = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.type"></a>

- *Type:* `string`

---

##### `aliasTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.aliasTarget"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53AliasTarget`](#aws-cdk-sdk.route53.Route53AliasTarget)

---

##### `failover`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.failover"></a>

- *Type:* `string`

---

##### `geoLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.geoLocation"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GeoLocation`](#aws-cdk-sdk.route53.Route53GeoLocation)

---

##### `healthCheckId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.healthCheckId"></a>

- *Type:* `string`

---

##### `multiValueAnswer`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.multiValueAnswer"></a>

- *Type:* `boolean`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.region"></a>

- *Type:* `string`

---

##### `resourceRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.resourceRecords"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResourceRecord`](#aws-cdk-sdk.route53.Route53ResourceRecord)[]

---

##### `setIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.setIdentifier"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.trafficPolicyInstanceId"></a>

- *Type:* `string`

---

##### `ttl`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.ttl"></a>

- *Type:* `number`

---

##### `weight`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceRecordSet.property.weight"></a>

- *Type:* `number`

---

### Route53ResourceTagSet <a name="aws-cdk-sdk.route53.Route53ResourceTagSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ResourceTagSet: route53.Route53ResourceTagSet = { ... }
```

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceTagSet.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceTagSet.property.resourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53ResourceTagSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Tag`](#aws-cdk-sdk.route53.Route53Tag)[]

---

### Route53ReusableDelegationSetLimit <a name="aws-cdk-sdk.route53.Route53ReusableDelegationSetLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53ReusableDelegationSetLimit: route53.Route53ReusableDelegationSetLimit = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ReusableDelegationSetLimit.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ReusableDelegationSetLimit.property.value"></a>

- *Type:* `number`

---

### Route53StatusReport <a name="aws-cdk-sdk.route53.Route53StatusReport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53StatusReport: route53.Route53StatusReport = { ... }
```

##### `checkedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53StatusReport.property.checkedTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53StatusReport.property.status"></a>

- *Type:* `string`

---

### Route53Tag <a name="aws-cdk-sdk.route53.Route53Tag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53Tag: route53.Route53Tag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53Tag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53Tag.property.value"></a>

- *Type:* `string`

---

### Route53TestDnsAnswerRequest <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53TestDnsAnswerRequest: route53.Route53TestDnsAnswerRequest = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerRequest.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `recordName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerRequest.property.recordName"></a>

- *Type:* `string`

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerRequest.property.recordType"></a>

- *Type:* `string`

---

##### `edns0ClientSubnetIp`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerRequest.property.edns0ClientSubnetIp"></a>

- *Type:* `string`

---

##### `edns0ClientSubnetMask`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerRequest.property.edns0ClientSubnetMask"></a>

- *Type:* `string`

---

##### `resolverIp`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerRequest.property.resolverIp"></a>

- *Type:* `string`

---

### Route53TestDnsAnswerResponse <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53TestDnsAnswerResponse: route53.Route53TestDnsAnswerResponse = { ... }
```

##### `nameserver`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerResponse.property.nameserver"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerResponse.property.protocol"></a>

- *Type:* `string`

---

##### `recordData`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerResponse.property.recordData"></a>

- *Type:* `string`[]

---

##### `recordName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerResponse.property.recordName"></a>

- *Type:* `string`

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerResponse.property.recordType"></a>

- *Type:* `string`

---

##### `responseCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TestDnsAnswerResponse.property.responseCode"></a>

- *Type:* `string`

---

### Route53TrafficPolicy <a name="aws-cdk-sdk.route53.Route53TrafficPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53TrafficPolicy: route53.Route53TrafficPolicy = { ... }
```

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicy.property.document"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicy.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicy.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicy.property.version"></a>

- *Type:* `number`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicy.property.comment"></a>

- *Type:* `string`

---

### Route53TrafficPolicyInstance <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53TrafficPolicyInstance: route53.Route53TrafficPolicyInstance = { ... }
```

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.state"></a>

- *Type:* `string`

---

##### `trafficPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.trafficPolicyId"></a>

- *Type:* `string`

---

##### `trafficPolicyType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.trafficPolicyType"></a>

- *Type:* `string`

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.trafficPolicyVersion"></a>

- *Type:* `number`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicyInstance.property.ttl"></a>

- *Type:* `number`

---

### Route53TrafficPolicySummary <a name="aws-cdk-sdk.route53.Route53TrafficPolicySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53TrafficPolicySummary: route53.Route53TrafficPolicySummary = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicySummary.property.id"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicySummary.property.latestVersion"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicySummary.property.name"></a>

- *Type:* `string`

---

##### `trafficPolicyCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicySummary.property.trafficPolicyCount"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53TrafficPolicySummary.property.type"></a>

- *Type:* `string`

---

### Route53UpdateHealthCheckRequest <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateHealthCheckRequest: route53.Route53UpdateHealthCheckRequest = { ... }
```

##### `healthCheckId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.healthCheckId"></a>

- *Type:* `string`

---

##### `alarmIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.alarmIdentifier"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53AlarmIdentifier`](#aws-cdk-sdk.route53.Route53AlarmIdentifier)

---

##### `childHealthChecks`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.childHealthChecks"></a>

- *Type:* `string`[]

---

##### `disabled`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.disabled"></a>

- *Type:* `boolean`

---

##### `enableSni`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.enableSni"></a>

- *Type:* `boolean`

---

##### `failureThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.failureThreshold"></a>

- *Type:* `number`

---

##### `fullyQualifiedDomainName`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.fullyQualifiedDomainName"></a>

- *Type:* `string`

---

##### `healthCheckVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.healthCheckVersion"></a>

- *Type:* `number`

---

##### `healthThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.healthThreshold"></a>

- *Type:* `number`

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.insufficientDataHealthStatus"></a>

- *Type:* `string`

---

##### `inverted`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.inverted"></a>

- *Type:* `boolean`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.ipAddress"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.port"></a>

- *Type:* `number`

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.regions"></a>

- *Type:* `string`[]

---

##### `resetElements`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.resetElements"></a>

- *Type:* `string`[]

---

##### `resourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.resourcePath"></a>

- *Type:* `string`

---

##### `searchString`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest.property.searchString"></a>

- *Type:* `string`

---

### Route53UpdateHealthCheckResponse <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateHealthCheckResponse: route53.Route53UpdateHealthCheckResponse = { ... }
```

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHealthCheckResponse.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheck`](#aws-cdk-sdk.route53.Route53HealthCheck)

---

### Route53UpdateHostedZoneCommentRequest <a name="aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateHostedZoneCommentRequest: route53.Route53UpdateHostedZoneCommentRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest.property.id"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest.property.comment"></a>

- *Type:* `string`

---

### Route53UpdateHostedZoneCommentResponse <a name="aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateHostedZoneCommentResponse: route53.Route53UpdateHostedZoneCommentResponse = { ... }
```

##### `hostedZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentResponse.property.hostedZone"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZone`](#aws-cdk-sdk.route53.Route53HostedZone)

---

### Route53UpdateTrafficPolicyCommentRequest <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateTrafficPolicyCommentRequest: route53.Route53UpdateTrafficPolicyCommentRequest = { ... }
```

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest.property.comment"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest.property.version"></a>

- *Type:* `number`

---

### Route53UpdateTrafficPolicyCommentResponse <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateTrafficPolicyCommentResponse: route53.Route53UpdateTrafficPolicyCommentResponse = { ... }
```

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentResponse.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicy`](#aws-cdk-sdk.route53.Route53TrafficPolicy)

---

### Route53UpdateTrafficPolicyInstanceRequest <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateTrafficPolicyInstanceRequest: route53.Route53UpdateTrafficPolicyInstanceRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest.property.id"></a>

- *Type:* `string`

---

##### `trafficPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest.property.trafficPolicyId"></a>

- *Type:* `string`

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest.property.trafficPolicyVersion"></a>

- *Type:* `number`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest.property.ttl"></a>

- *Type:* `number`

---

### Route53UpdateTrafficPolicyInstanceResponse <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53UpdateTrafficPolicyInstanceResponse: route53.Route53UpdateTrafficPolicyInstanceResponse = { ... }
```

##### `trafficPolicyInstance`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceResponse.property.trafficPolicyInstance"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)

---

### Route53Vpc <a name="aws-cdk-sdk.route53.Route53Vpc"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

const route53Vpc: route53.Route53Vpc = { ... }
```

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53Vpc.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.route53.Route53Vpc.property.vpcRegion"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### Route53ResponsesAssociateVpcWithHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesAssociateVpcWithHostedZone(__scope: Construct, __resources: string[], __input: Route53AssociateVpcWithHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest`](#aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZone.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo`](#aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo)

---


### Route53ResponsesAssociateVpcWithHostedZoneChangeInfo <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo(__scope: Construct, __resources: string[], __input: Route53AssociateVpcWithHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest`](#aws-cdk-sdk.route53.Route53AssociateVpcWithHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.property.comment"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.property.status"></a>

- *Type:* `string`

---

##### `submittedAt`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesAssociateVpcWithHostedZoneChangeInfo.property.submittedAt"></a>

- *Type:* `string`

---


### Route53ResponsesChangeResourceRecordSets <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSets"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSets.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesChangeResourceRecordSets(__scope: Construct, __resources: string[], __input: Route53ChangeResourceRecordSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest`](#aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSets.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo`](#aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo)

---


### Route53ResponsesChangeResourceRecordSetsChangeInfo <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesChangeResourceRecordSetsChangeInfo(__scope: Construct, __resources: string[], __input: Route53ChangeResourceRecordSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest`](#aws-cdk-sdk.route53.Route53ChangeResourceRecordSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.property.comment"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.property.status"></a>

- *Type:* `string`

---

##### `submittedAt`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesChangeResourceRecordSetsChangeInfo.property.submittedAt"></a>

- *Type:* `string`

---


### Route53ResponsesCreateHealthCheck <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheck.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHealthCheck(__scope: Construct, __resources: string[], __input: Route53CreateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53CreateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheck.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck`](#aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheck.property.location"></a>

- *Type:* `string`

---


### Route53ResponsesCreateHealthCheckHealthCheck <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHealthCheckHealthCheck(__scope: Construct, __resources: string[], __input: Route53CreateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53CreateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.property.callerReference"></a>

- *Type:* `string`

---

##### `cloudWatchAlarmConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.property.cloudWatchAlarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration`](#aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration)

---

##### `healthCheckConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig`](#aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig)

---

##### `healthCheckVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.property.healthCheckVersion"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.property.id"></a>

- *Type:* `string`

---

##### `linkedService`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheck.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService`](#aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService)

---


### Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration(__scope: Construct, __resources: string[], __input: Route53CreateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53CreateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Dimension`](#aws-cdk-sdk.route53.Route53Dimension)[]

---

##### `evaluationPeriods`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.namespace"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.period"></a>

- *Type:* `number`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.statistic"></a>

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.threshold"></a>

- *Type:* `number`

---


### Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig(__scope: Construct, __resources: string[], __input: Route53CreateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53CreateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `alarmIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier`](#aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier)

---

##### `childHealthChecks`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.childHealthChecks"></a>

- *Type:* `string`[]

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.disabled"></a>

- *Type:* `boolean`

---

##### `enableSni`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.enableSni"></a>

- *Type:* `boolean`

---

##### `failureThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.failureThreshold"></a>

- *Type:* `number`

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

- *Type:* `string`

---

##### `healthThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.healthThreshold"></a>

- *Type:* `number`

---

##### `insufficientDataHealthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

- *Type:* `string`

---

##### `inverted`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.inverted"></a>

- *Type:* `boolean`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.ipAddress"></a>

- *Type:* `string`

---

##### `measureLatency`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.measureLatency"></a>

- *Type:* `boolean`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.port"></a>

- *Type:* `number`

---

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.regions"></a>

- *Type:* `string`[]

---

##### `requestInterval`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.requestInterval"></a>

- *Type:* `number`

---

##### `resourcePath`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.resourcePath"></a>

- *Type:* `string`

---

##### `searchString`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.searchString"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfig.property.type"></a>

- *Type:* `string`

---


### Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(__scope: Construct, __resources: string[], __input: Route53CreateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53CreateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

- *Type:* `string`

---


### Route53ResponsesCreateHealthCheckHealthCheckLinkedService <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService(__scope: Construct, __resources: string[], __input: Route53CreateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53CreateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService.property.description"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHealthCheckHealthCheckLinkedService.property.servicePrincipal"></a>

- *Type:* `string`

---


### Route53ResponsesCreateHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHostedZone(__scope: Construct, __resources: string[], __input: Route53CreateHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo`](#aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo)

---

##### `delegationSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet`](#aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet)

---

##### `hostedZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.property.hostedZone"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone`](#aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.property.location"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZone.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc`](#aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc)

---


### Route53ResponsesCreateHostedZoneChangeInfo <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHostedZoneChangeInfo(__scope: Construct, __resources: string[], __input: Route53CreateHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.property.comment"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.property.status"></a>

- *Type:* `string`

---

##### `submittedAt`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneChangeInfo.property.submittedAt"></a>

- *Type:* `string`

---


### Route53ResponsesCreateHostedZoneDelegationSet <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHostedZoneDelegationSet(__scope: Construct, __resources: string[], __input: Route53CreateHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet.property.callerReference"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet.property.id"></a>

- *Type:* `string`

---

##### `nameServers`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneDelegationSet.property.nameServers"></a>

- *Type:* `string`[]

---


### Route53ResponsesCreateHostedZoneHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHostedZoneHostedZone(__scope: Construct, __resources: string[], __input: Route53CreateHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.property.callerReference"></a>

- *Type:* `string`

---

##### `config`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.property.config"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig`](#aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.property.id"></a>

- *Type:* `string`

---

##### `linkedService`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService`](#aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.property.name"></a>

- *Type:* `string`

---

##### `resourceRecordSetCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZone.property.resourceRecordSetCount"></a>

- *Type:* `number`

---


### Route53ResponsesCreateHostedZoneHostedZoneConfig <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHostedZoneHostedZoneConfig(__scope: Construct, __resources: string[], __input: Route53CreateHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig.property.comment"></a>

- *Type:* `string`

---

##### `privateZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneConfig.property.privateZone"></a>

- *Type:* `boolean`

---


### Route53ResponsesCreateHostedZoneHostedZoneLinkedService <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService(__scope: Construct, __resources: string[], __input: Route53CreateHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService.property.description"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneHostedZoneLinkedService.property.servicePrincipal"></a>

- *Type:* `string`

---


### Route53ResponsesCreateHostedZoneVpc <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateHostedZoneVpc(__scope: Construct, __resources: string[], __input: Route53CreateHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateHostedZoneRequest`](#aws-cdk-sdk.route53.Route53CreateHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcRegion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateHostedZoneVpc.property.vpcRegion"></a>

- *Type:* `string`

---


### Route53ResponsesCreateQueryLoggingConfig <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateQueryLoggingConfig(__scope: Construct, __resources: string[], __input: Route53CreateQueryLoggingConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest`](#aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfig.property.location"></a>

- *Type:* `string`

---

##### `queryLoggingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfig.property.queryLoggingConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig`](#aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig)

---


### Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig(__scope: Construct, __resources: string[], __input: Route53CreateQueryLoggingConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest`](#aws-cdk-sdk.route53.Route53CreateQueryLoggingConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateQueryLoggingConfigQueryLoggingConfig.property.id"></a>

- *Type:* `string`

---


### Route53ResponsesCreateReusableDelegationSet <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSet"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSet.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateReusableDelegationSet(__scope: Construct, __resources: string[], __input: Route53CreateReusableDelegationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest`](#aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `delegationSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSet.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet`](#aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet)

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSet.property.location"></a>

- *Type:* `string`

---


### Route53ResponsesCreateReusableDelegationSetDelegationSet <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateReusableDelegationSetDelegationSet(__scope: Construct, __resources: string[], __input: Route53CreateReusableDelegationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest`](#aws-cdk-sdk.route53.Route53CreateReusableDelegationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet.property.callerReference"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet.property.id"></a>

- *Type:* `string`

---

##### `nameServers`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateReusableDelegationSetDelegationSet.property.nameServers"></a>

- *Type:* `string`[]

---


### Route53ResponsesCreateTrafficPolicy <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicy.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateTrafficPolicy(__scope: Construct, __resources: string[], __input: Route53CreateTrafficPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicy.property.location"></a>

- *Type:* `string`

---

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicy.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy`](#aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy)

---


### Route53ResponsesCreateTrafficPolicyInstance <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstance"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstance.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateTrafficPolicyInstance(__scope: Construct, __resources: string[], __input: Route53CreateTrafficPolicyInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstance.property.location"></a>

- *Type:* `string`

---

##### `trafficPolicyInstance`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstance.property.trafficPolicyInstance"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance)

---


### Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance(__scope: Construct, __resources: string[], __input: Route53CreateTrafficPolicyInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.state"></a>

- *Type:* `string`

---

##### `trafficPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyId"></a>

- *Type:* `string`

---

##### `trafficPolicyType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyType"></a>

- *Type:* `string`

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyVersion"></a>

- *Type:* `number`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyInstanceTrafficPolicyInstance.property.ttl"></a>

- *Type:* `number`

---


### Route53ResponsesCreateTrafficPolicyTrafficPolicy <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy(__scope: Construct, __resources: string[], __input: Route53CreateTrafficPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.property.comment"></a>

- *Type:* `string`

---

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.property.document"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyTrafficPolicy.property.version"></a>

- *Type:* `number`

---


### Route53ResponsesCreateTrafficPolicyVersion <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersion"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersion.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateTrafficPolicyVersion(__scope: Construct, __resources: string[], __input: Route53CreateTrafficPolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersion.property.location"></a>

- *Type:* `string`

---

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersion.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy`](#aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy)

---


### Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy(__scope: Construct, __resources: string[], __input: Route53CreateTrafficPolicyVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest`](#aws-cdk-sdk.route53.Route53CreateTrafficPolicyVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.property.comment"></a>

- *Type:* `string`

---

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.property.document"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateTrafficPolicyVersionTrafficPolicy.property.version"></a>

- *Type:* `number`

---


### Route53ResponsesCreateVpcAssociationAuthorization <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorization"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorization.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateVpcAssociationAuthorization(__scope: Construct, __resources: string[], __input: Route53CreateVpcAssociationAuthorizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest`](#aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorization.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorization.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc`](#aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc)

---


### Route53ResponsesCreateVpcAssociationAuthorizationVpc <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc(__scope: Construct, __resources: string[], __input: Route53CreateVpcAssociationAuthorizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest`](#aws-cdk-sdk.route53.Route53CreateVpcAssociationAuthorizationRequest)

---



#### Properties <a name="Properties"></a>

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcRegion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesCreateVpcAssociationAuthorizationVpc.property.vpcRegion"></a>

- *Type:* `string`

---


### Route53ResponsesDeleteHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesDeleteHostedZone(__scope: Construct, __resources: string[], __input: Route53DeleteHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest`](#aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZone.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo`](#aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo)

---


### Route53ResponsesDeleteHostedZoneChangeInfo <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesDeleteHostedZoneChangeInfo(__scope: Construct, __resources: string[], __input: Route53DeleteHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest`](#aws-cdk-sdk.route53.Route53DeleteHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.property.comment"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.property.status"></a>

- *Type:* `string`

---

##### `submittedAt`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDeleteHostedZoneChangeInfo.property.submittedAt"></a>

- *Type:* `string`

---


### Route53ResponsesDisassociateVpcFromHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesDisassociateVpcFromHostedZone(__scope: Construct, __resources: string[], __input: Route53DisassociateVpcFromHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest`](#aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZone.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo`](#aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo)

---


### Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo(__scope: Construct, __resources: string[], __input: Route53DisassociateVpcFromHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest`](#aws-cdk-sdk.route53.Route53DisassociateVpcFromHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.property.comment"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.property.status"></a>

- *Type:* `string`

---

##### `submittedAt`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesDisassociateVpcFromHostedZoneChangeInfo.property.submittedAt"></a>

- *Type:* `string`

---


### Route53ResponsesFetchAccountLimit <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimit"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimit.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchAccountLimit(__scope: Construct, __resources: string[], __input: Route53GetAccountLimitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetAccountLimitRequest`](#aws-cdk-sdk.route53.Route53GetAccountLimitRequest)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimit.property.count"></a>

- *Type:* `number`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimit.property.limit"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit`](#aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit)

---


### Route53ResponsesFetchAccountLimitLimit <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchAccountLimitLimit(__scope: Construct, __resources: string[], __input: Route53GetAccountLimitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetAccountLimitRequest`](#aws-cdk-sdk.route53.Route53GetAccountLimitRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchAccountLimitLimit.property.value"></a>

- *Type:* `number`

---


### Route53ResponsesFetchChange <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChange"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChange.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchChange(__scope: Construct, __resources: string[], __input: Route53GetChangeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChange.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChange.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChange.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetChangeRequest`](#aws-cdk-sdk.route53.Route53GetChangeRequest)

---



#### Properties <a name="Properties"></a>

##### `changeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChange.property.changeInfo"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo`](#aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo)

---


### Route53ResponsesFetchChangeChangeInfo <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchChangeChangeInfo(__scope: Construct, __resources: string[], __input: Route53GetChangeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetChangeRequest`](#aws-cdk-sdk.route53.Route53GetChangeRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.property.comment"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.property.status"></a>

- *Type:* `string`

---

##### `submittedAt`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchChangeChangeInfo.property.submittedAt"></a>

- *Type:* `string`

---


### Route53ResponsesFetchCheckerIpRanges <a name="aws-cdk-sdk.route53.Route53ResponsesFetchCheckerIpRanges"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchCheckerIpRanges.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchCheckerIpRanges(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchCheckerIpRanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchCheckerIpRanges.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `checkerIpRanges`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchCheckerIpRanges.property.checkerIpRanges"></a>

- *Type:* `string`[]

---


### Route53ResponsesFetchGeoLocation <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocation"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocation.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchGeoLocation(__scope: Construct, __resources: string[], __input: Route53GetGeoLocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetGeoLocationRequest`](#aws-cdk-sdk.route53.Route53GetGeoLocationRequest)

---



#### Properties <a name="Properties"></a>

##### `geoLocationDetails`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocation.property.geoLocationDetails"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails`](#aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails)

---


### Route53ResponsesFetchGeoLocationGeoLocationDetails <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchGeoLocationGeoLocationDetails(__scope: Construct, __resources: string[], __input: Route53GetGeoLocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetGeoLocationRequest`](#aws-cdk-sdk.route53.Route53GetGeoLocationRequest)

---



#### Properties <a name="Properties"></a>

##### `continentCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.property.continentCode"></a>

- *Type:* `string`

---

##### `continentName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.property.continentName"></a>

- *Type:* `string`

---

##### `countryCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.property.countryCode"></a>

- *Type:* `string`

---

##### `countryName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.property.countryName"></a>

- *Type:* `string`

---

##### `subdivisionCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.property.subdivisionCode"></a>

- *Type:* `string`

---

##### `subdivisionName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchGeoLocationGeoLocationDetails.property.subdivisionName"></a>

- *Type:* `string`

---


### Route53ResponsesFetchHealthCheck <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheck.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheck(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheck.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck`](#aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck)

---


### Route53ResponsesFetchHealthCheckCount <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckCount"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckCount.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckCount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckCount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `healthCheckCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckCount.property.healthCheckCount"></a>

- *Type:* `number`

---


### Route53ResponsesFetchHealthCheckHealthCheck <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckHealthCheck(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.property.callerReference"></a>

- *Type:* `string`

---

##### `cloudWatchAlarmConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.property.cloudWatchAlarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration`](#aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration)

---

##### `healthCheckConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig`](#aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig)

---

##### `healthCheckVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.property.healthCheckVersion"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.property.id"></a>

- *Type:* `string`

---

##### `linkedService`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheck.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService`](#aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService)

---


### Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Dimension`](#aws-cdk-sdk.route53.Route53Dimension)[]

---

##### `evaluationPeriods`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.namespace"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.period"></a>

- *Type:* `number`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.statistic"></a>

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.threshold"></a>

- *Type:* `number`

---


### Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `alarmIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier`](#aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier)

---

##### `childHealthChecks`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.childHealthChecks"></a>

- *Type:* `string`[]

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.disabled"></a>

- *Type:* `boolean`

---

##### `enableSni`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.enableSni"></a>

- *Type:* `boolean`

---

##### `failureThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.failureThreshold"></a>

- *Type:* `number`

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

- *Type:* `string`

---

##### `healthThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.healthThreshold"></a>

- *Type:* `number`

---

##### `insufficientDataHealthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

- *Type:* `string`

---

##### `inverted`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.inverted"></a>

- *Type:* `boolean`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.ipAddress"></a>

- *Type:* `string`

---

##### `measureLatency`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.measureLatency"></a>

- *Type:* `boolean`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.port"></a>

- *Type:* `number`

---

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.regions"></a>

- *Type:* `string`[]

---

##### `requestInterval`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.requestInterval"></a>

- *Type:* `number`

---

##### `resourcePath`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.resourcePath"></a>

- *Type:* `string`

---

##### `searchString`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.searchString"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfig.property.type"></a>

- *Type:* `string`

---


### Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

- *Type:* `string`

---


### Route53ResponsesFetchHealthCheckHealthCheckLinkedService <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService.property.description"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckHealthCheckLinkedService.property.servicePrincipal"></a>

- *Type:* `string`

---


### Route53ResponsesFetchHealthCheckLastFailureReason <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckLastFailureReason"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckLastFailureReason.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckLastFailureReason(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckLastFailureReasonRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckLastFailureReason.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckLastFailureReason.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckLastFailureReason.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckLastFailureReasonRequest)

---



#### Properties <a name="Properties"></a>

##### `healthCheckObservations`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckLastFailureReason.property.healthCheckObservations"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheckObservation`](#aws-cdk-sdk.route53.Route53HealthCheckObservation)[]

---


### Route53ResponsesFetchHealthCheckStatus <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckStatus"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckStatus.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHealthCheckStatus(__scope: Construct, __resources: string[], __input: Route53GetHealthCheckStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHealthCheckStatusRequest`](#aws-cdk-sdk.route53.Route53GetHealthCheckStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `healthCheckObservations`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHealthCheckStatus.property.healthCheckObservations"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheckObservation`](#aws-cdk-sdk.route53.Route53HealthCheckObservation)[]

---


### Route53ResponsesFetchHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZone(__scope: Construct, __resources: string[], __input: Route53GetHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `delegationSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet`](#aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet)

---

##### `hostedZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone.property.hostedZone"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone`](#aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone)

---

##### `vpCs`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZone.property.vpCs"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)[]

---


### Route53ResponsesFetchHostedZoneCount <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneCount"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneCount.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZoneCount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneCount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `hostedZoneCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneCount.property.hostedZoneCount"></a>

- *Type:* `number`

---


### Route53ResponsesFetchHostedZoneDelegationSet <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZoneDelegationSet(__scope: Construct, __resources: string[], __input: Route53GetHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet.property.callerReference"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet.property.id"></a>

- *Type:* `string`

---

##### `nameServers`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneDelegationSet.property.nameServers"></a>

- *Type:* `string`[]

---


### Route53ResponsesFetchHostedZoneHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZoneHostedZone(__scope: Construct, __resources: string[], __input: Route53GetHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.property.callerReference"></a>

- *Type:* `string`

---

##### `config`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.property.config"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig`](#aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.property.id"></a>

- *Type:* `string`

---

##### `linkedService`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService`](#aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.property.name"></a>

- *Type:* `string`

---

##### `resourceRecordSetCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZone.property.resourceRecordSetCount"></a>

- *Type:* `number`

---


### Route53ResponsesFetchHostedZoneHostedZoneConfig <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZoneHostedZoneConfig(__scope: Construct, __resources: string[], __input: Route53GetHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig.property.comment"></a>

- *Type:* `string`

---

##### `privateZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneConfig.property.privateZone"></a>

- *Type:* `boolean`

---


### Route53ResponsesFetchHostedZoneHostedZoneLinkedService <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService(__scope: Construct, __resources: string[], __input: Route53GetHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService.property.description"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneHostedZoneLinkedService.property.servicePrincipal"></a>

- *Type:* `string`

---


### Route53ResponsesFetchHostedZoneLimit <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimit"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimit.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZoneLimit(__scope: Construct, __resources: string[], __input: Route53GetHostedZoneLimitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimit.property.count"></a>

- *Type:* `number`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimit.property.limit"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit`](#aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit)

---


### Route53ResponsesFetchHostedZoneLimitLimit <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchHostedZoneLimitLimit(__scope: Construct, __resources: string[], __input: Route53GetHostedZoneLimitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest`](#aws-cdk-sdk.route53.Route53GetHostedZoneLimitRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchHostedZoneLimitLimit.property.value"></a>

- *Type:* `number`

---


### Route53ResponsesFetchQueryLoggingConfig <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchQueryLoggingConfig(__scope: Construct, __resources: string[], __input: Route53GetQueryLoggingConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest`](#aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `queryLoggingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfig.property.queryLoggingConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig`](#aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig)

---


### Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig(__scope: Construct, __resources: string[], __input: Route53GetQueryLoggingConfigRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest`](#aws-cdk-sdk.route53.Route53GetQueryLoggingConfigRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogsLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig.property.cloudWatchLogsLogGroupArn"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchQueryLoggingConfigQueryLoggingConfig.property.id"></a>

- *Type:* `string`

---


### Route53ResponsesFetchReusableDelegationSet <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSet"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSet.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchReusableDelegationSet(__scope: Construct, __resources: string[], __input: Route53GetReusableDelegationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest`](#aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `delegationSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSet.property.delegationSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet`](#aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet)

---


### Route53ResponsesFetchReusableDelegationSetDelegationSet <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchReusableDelegationSetDelegationSet(__scope: Construct, __resources: string[], __input: Route53GetReusableDelegationSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest`](#aws-cdk-sdk.route53.Route53GetReusableDelegationSetRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet.property.callerReference"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet.property.id"></a>

- *Type:* `string`

---

##### `nameServers`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetDelegationSet.property.nameServers"></a>

- *Type:* `string`[]

---


### Route53ResponsesFetchReusableDelegationSetLimit <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimit"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimit.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchReusableDelegationSetLimit(__scope: Construct, __resources: string[], __input: Route53GetReusableDelegationSetLimitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest`](#aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimit.property.count"></a>

- *Type:* `number`

---

##### `limit`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimit.property.limit"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit`](#aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit)

---


### Route53ResponsesFetchReusableDelegationSetLimitLimit <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchReusableDelegationSetLimitLimit(__scope: Construct, __resources: string[], __input: Route53GetReusableDelegationSetLimitRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest`](#aws-cdk-sdk.route53.Route53GetReusableDelegationSetLimitRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchReusableDelegationSetLimitLimit.property.value"></a>

- *Type:* `number`

---


### Route53ResponsesFetchTrafficPolicy <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicy.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchTrafficPolicy(__scope: Construct, __resources: string[], __input: Route53GetTrafficPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest`](#aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicy.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy`](#aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy)

---


### Route53ResponsesFetchTrafficPolicyInstance <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstance"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstance.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchTrafficPolicyInstance(__scope: Construct, __resources: string[], __input: Route53GetTrafficPolicyInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `trafficPolicyInstance`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstance.property.trafficPolicyInstance"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance)

---


### Route53ResponsesFetchTrafficPolicyInstanceCount <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceCount"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceCount.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchTrafficPolicyInstanceCount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceCount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `trafficPolicyInstanceCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceCount.property.trafficPolicyInstanceCount"></a>

- *Type:* `number`

---


### Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance(__scope: Construct, __resources: string[], __input: Route53GetTrafficPolicyInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53GetTrafficPolicyInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.state"></a>

- *Type:* `string`

---

##### `trafficPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyId"></a>

- *Type:* `string`

---

##### `trafficPolicyType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyType"></a>

- *Type:* `string`

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyVersion"></a>

- *Type:* `number`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyInstanceTrafficPolicyInstance.property.ttl"></a>

- *Type:* `number`

---


### Route53ResponsesFetchTrafficPolicyTrafficPolicy <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy(__scope: Construct, __resources: string[], __input: Route53GetTrafficPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest`](#aws-cdk-sdk.route53.Route53GetTrafficPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.property.comment"></a>

- *Type:* `string`

---

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.property.document"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesFetchTrafficPolicyTrafficPolicy.property.version"></a>

- *Type:* `number`

---


### Route53ResponsesListGeoLocations <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListGeoLocations(__scope: Construct, __resources: string[], __input: Route53ListGeoLocationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListGeoLocationsRequest`](#aws-cdk-sdk.route53.Route53ListGeoLocationsRequest)

---



#### Properties <a name="Properties"></a>

##### `geoLocationDetailsList`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.property.geoLocationDetailsList"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53GeoLocationDetails`](#aws-cdk-sdk.route53.Route53GeoLocationDetails)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.property.maxItems"></a>

- *Type:* `string`

---

##### `nextContinentCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.property.nextContinentCode"></a>

- *Type:* `string`

---

##### `nextCountryCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.property.nextCountryCode"></a>

- *Type:* `string`

---

##### `nextSubdivisionCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListGeoLocations.property.nextSubdivisionCode"></a>

- *Type:* `string`

---


### Route53ResponsesListHealthChecks <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListHealthChecks(__scope: Construct, __resources: string[], __input: Route53ListHealthChecksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHealthChecksRequest`](#aws-cdk-sdk.route53.Route53ListHealthChecksRequest)

---



#### Properties <a name="Properties"></a>

##### `healthChecks`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.property.healthChecks"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HealthCheck`](#aws-cdk-sdk.route53.Route53HealthCheck)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.property.maxItems"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHealthChecks.property.nextMarker"></a>

- *Type:* `string`

---


### Route53ResponsesListHostedZones <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListHostedZones(__scope: Construct, __resources: string[], __input: Route53ListHostedZonesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHostedZonesRequest`](#aws-cdk-sdk.route53.Route53ListHostedZonesRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZones`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.property.hostedZones"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZone`](#aws-cdk-sdk.route53.Route53HostedZone)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.property.maxItems"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZones.property.nextMarker"></a>

- *Type:* `string`

---


### Route53ResponsesListHostedZonesByName <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListHostedZonesByName(__scope: Construct, __resources: string[], __input: Route53ListHostedZonesByNameRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest`](#aws-cdk-sdk.route53.Route53ListHostedZonesByNameRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.property.dnsName"></a>

- *Type:* `string`

---

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `hostedZones`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.property.hostedZones"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZone`](#aws-cdk-sdk.route53.Route53HostedZone)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.property.maxItems"></a>

- *Type:* `string`

---

##### `nextDnsName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.property.nextDnsName"></a>

- *Type:* `string`

---

##### `nextHostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByName.property.nextHostedZoneId"></a>

- *Type:* `string`

---


### Route53ResponsesListHostedZonesByVpc <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListHostedZonesByVpc(__scope: Construct, __resources: string[], __input: Route53ListHostedZonesByVpcRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest`](#aws-cdk-sdk.route53.Route53ListHostedZonesByVpcRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc.property.hostedZoneSummaries"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53HostedZoneSummary`](#aws-cdk-sdk.route53.Route53HostedZoneSummary)[]

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc.property.maxItems"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListHostedZonesByVpc.property.nextToken"></a>

- *Type:* `string`

---


### Route53ResponsesListQueryLoggingConfigs <a name="aws-cdk-sdk.route53.Route53ResponsesListQueryLoggingConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListQueryLoggingConfigs.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListQueryLoggingConfigs(__scope: Construct, __resources: string[], __input: Route53ListQueryLoggingConfigsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListQueryLoggingConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListQueryLoggingConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListQueryLoggingConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest`](#aws-cdk-sdk.route53.Route53ListQueryLoggingConfigsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListQueryLoggingConfigs.property.nextToken"></a>

- *Type:* `string`

---

##### `queryLoggingConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListQueryLoggingConfigs.property.queryLoggingConfigs"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53QueryLoggingConfig`](#aws-cdk-sdk.route53.Route53QueryLoggingConfig)[]

---


### Route53ResponsesListResourceRecordSets <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListResourceRecordSets(__scope: Construct, __resources: string[], __input: Route53ListResourceRecordSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest`](#aws-cdk-sdk.route53.Route53ListResourceRecordSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.property.maxItems"></a>

- *Type:* `string`

---

##### `nextRecordIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.property.nextRecordIdentifier"></a>

- *Type:* `string`

---

##### `nextRecordName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.property.nextRecordName"></a>

- *Type:* `string`

---

##### `nextRecordType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.property.nextRecordType"></a>

- *Type:* `string`

---

##### `resourceRecordSets`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListResourceRecordSets.property.resourceRecordSets"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResourceRecordSet`](#aws-cdk-sdk.route53.Route53ResourceRecordSet)[]

---


### Route53ResponsesListReusableDelegationSets <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListReusableDelegationSets(__scope: Construct, __resources: string[], __input: Route53ListReusableDelegationSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListReusableDelegationSetsRequest`](#aws-cdk-sdk.route53.Route53ListReusableDelegationSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `delegationSets`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.property.delegationSets"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53DelegationSet`](#aws-cdk-sdk.route53.Route53DelegationSet)[]

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.property.marker"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.property.maxItems"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListReusableDelegationSets.property.nextMarker"></a>

- *Type:* `string`

---


### Route53ResponsesListTagsForResource <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResource.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: Route53ListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTagsForResourceRequest`](#aws-cdk-sdk.route53.Route53ListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceTagSet`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResource.property.resourceTagSet"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet`](#aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet)

---


### Route53ResponsesListTagsForResourceResourceTagSet <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTagsForResourceResourceTagSet(__scope: Construct, __resources: string[], __input: Route53ListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTagsForResourceRequest`](#aws-cdk-sdk.route53.Route53ListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet.property.resourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResourceResourceTagSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Tag`](#aws-cdk-sdk.route53.Route53Tag)[]

---


### Route53ResponsesListTagsForResources <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResources"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResources.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTagsForResources(__scope: Construct, __resources: string[], __input: Route53ListTagsForResourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTagsForResourcesRequest`](#aws-cdk-sdk.route53.Route53ListTagsForResourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `resourceTagSets`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTagsForResources.property.resourceTagSets"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResourceTagSet`](#aws-cdk-sdk.route53.Route53ResourceTagSet)[]

---


### Route53ResponsesListTrafficPolicies <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTrafficPolicies(__scope: Construct, __resources: string[], __input: Route53ListTrafficPoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPoliciesRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.property.trafficPolicyIdMarker"></a>

- *Type:* `string`

---

##### `trafficPolicySummaries`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicies.property.trafficPolicySummaries"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicySummary`](#aws-cdk-sdk.route53.Route53TrafficPolicySummary)[]

---


### Route53ResponsesListTrafficPolicyInstances <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTrafficPolicyInstances(__scope: Construct, __resources: string[], __input: Route53ListTrafficPolicyInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.property.hostedZoneIdMarker"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstances`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.property.trafficPolicyInstances"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)[]

---

##### `trafficPolicyInstanceTypeMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstances.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---


### Route53ResponsesListTrafficPolicyInstancesByHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone(__scope: Construct, __resources: string[], __input: Route53ListTrafficPolicyInstancesByHostedZoneRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByHostedZoneRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstances`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.property.trafficPolicyInstances"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)[]

---

##### `trafficPolicyInstanceTypeMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByHostedZone.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---


### Route53ResponsesListTrafficPolicyInstancesByPolicy <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTrafficPolicyInstancesByPolicy(__scope: Construct, __resources: string[], __input: Route53ListTrafficPolicyInstancesByPolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyInstancesByPolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneIdMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.property.hostedZoneIdMarker"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicyInstanceNameMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.property.trafficPolicyInstanceNameMarker"></a>

- *Type:* `string`

---

##### `trafficPolicyInstances`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.property.trafficPolicyInstances"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53TrafficPolicyInstance)[]

---

##### `trafficPolicyInstanceTypeMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyInstancesByPolicy.property.trafficPolicyInstanceTypeMarker"></a>

- *Type:* `string`

---


### Route53ResponsesListTrafficPolicyVersions <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListTrafficPolicyVersions(__scope: Construct, __resources: string[], __input: Route53ListTrafficPolicyVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest`](#aws-cdk-sdk.route53.Route53ListTrafficPolicyVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `isTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `maxItems`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.property.maxItems"></a>

- *Type:* `string`

---

##### `trafficPolicies`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.property.trafficPolicies"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TrafficPolicy`](#aws-cdk-sdk.route53.Route53TrafficPolicy)[]

---

##### `trafficPolicyVersionMarker`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListTrafficPolicyVersions.property.trafficPolicyVersionMarker"></a>

- *Type:* `string`

---


### Route53ResponsesListVpcAssociationAuthorizations <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesListVpcAssociationAuthorizations(__scope: Construct, __resources: string[], __input: Route53ListVpcAssociationAuthorizationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest`](#aws-cdk-sdk.route53.Route53ListVpcAssociationAuthorizationsRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations.property.nextToken"></a>

- *Type:* `string`

---

##### `vpCs`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesListVpcAssociationAuthorizations.property.vpCs"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Vpc`](#aws-cdk-sdk.route53.Route53Vpc)[]

---


### Route53ResponsesTestDnsAnswer <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesTestDnsAnswer(__scope: Construct, __resources: string[], __input: Route53TestDnsAnswerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53TestDnsAnswerRequest`](#aws-cdk-sdk.route53.Route53TestDnsAnswerRequest)

---



#### Properties <a name="Properties"></a>

##### `nameserver`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.property.nameserver"></a>

- *Type:* `string`

---

##### `protocol`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.property.protocol"></a>

- *Type:* `string`

---

##### `recordData`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.property.recordData"></a>

- *Type:* `string`[]

---

##### `recordName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.property.recordName"></a>

- *Type:* `string`

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.property.recordType"></a>

- *Type:* `string`

---

##### `responseCode`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesTestDnsAnswer.property.responseCode"></a>

- *Type:* `string`

---


### Route53ResponsesUpdateHealthCheck <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheck.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHealthCheck(__scope: Construct, __resources: string[], __input: Route53UpdateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `healthCheck`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheck.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck)

---


### Route53ResponsesUpdateHealthCheckHealthCheck <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHealthCheckHealthCheck(__scope: Construct, __resources: string[], __input: Route53UpdateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.property.callerReference"></a>

- *Type:* `string`

---

##### `cloudWatchAlarmConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.property.cloudWatchAlarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration)

---

##### `healthCheckConfig`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.property.healthCheckConfig"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig)

---

##### `healthCheckVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.property.healthCheckVersion"></a>

- *Type:* `number`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.property.id"></a>

- *Type:* `string`

---

##### `linkedService`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheck.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService)

---


### Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration(__scope: Construct, __resources: string[], __input: Route53UpdateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `comparisonOperator`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.comparisonOperator"></a>

- *Type:* `string`

---

##### `dimensions`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.dimensions"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53Dimension`](#aws-cdk-sdk.route53.Route53Dimension)[]

---

##### `evaluationPeriods`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.evaluationPeriods"></a>

- *Type:* `number`

---

##### `metricName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.metricName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.namespace"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.period"></a>

- *Type:* `number`

---

##### `statistic`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.statistic"></a>

- *Type:* `string`

---

##### `threshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckCloudWatchAlarmConfiguration.property.threshold"></a>

- *Type:* `number`

---


### Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig(__scope: Construct, __resources: string[], __input: Route53UpdateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `alarmIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier)

---

##### `childHealthChecks`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.childHealthChecks"></a>

- *Type:* `string`[]

---

##### `disabled`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.disabled"></a>

- *Type:* `boolean`

---

##### `enableSni`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.enableSni"></a>

- *Type:* `boolean`

---

##### `failureThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.failureThreshold"></a>

- *Type:* `number`

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

- *Type:* `string`

---

##### `healthThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.healthThreshold"></a>

- *Type:* `number`

---

##### `insufficientDataHealthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

- *Type:* `string`

---

##### `inverted`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.inverted"></a>

- *Type:* `boolean`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.ipAddress"></a>

- *Type:* `string`

---

##### `measureLatency`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.measureLatency"></a>

- *Type:* `boolean`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.port"></a>

- *Type:* `number`

---

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.regions"></a>

- *Type:* `string`[]

---

##### `requestInterval`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.requestInterval"></a>

- *Type:* `number`

---

##### `resourcePath`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.resourcePath"></a>

- *Type:* `string`

---

##### `searchString`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.searchString"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfig.property.type"></a>

- *Type:* `string`

---


### Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier(__scope: Construct, __resources: string[], __input: Route53UpdateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

- *Type:* `string`

---


### Route53ResponsesUpdateHealthCheckHealthCheckLinkedService <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService(__scope: Construct, __resources: string[], __input: Route53UpdateHealthCheckRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest`](#aws-cdk-sdk.route53.Route53UpdateHealthCheckRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService.property.description"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHealthCheckHealthCheckLinkedService.property.servicePrincipal"></a>

- *Type:* `string`

---


### Route53ResponsesUpdateHostedZoneComment <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneComment"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneComment.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHostedZoneComment(__scope: Construct, __resources: string[], __input: Route53UpdateHostedZoneCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneComment.property.hostedZone"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone)

---


### Route53ResponsesUpdateHostedZoneCommentHostedZone <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHostedZoneCommentHostedZone(__scope: Construct, __resources: string[], __input: Route53UpdateHostedZoneCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `callerReference`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.property.callerReference"></a>

- *Type:* `string`

---

##### `config`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.property.config"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.property.id"></a>

- *Type:* `string`

---

##### `linkedService`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.property.linkedService"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService`](#aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.property.name"></a>

- *Type:* `string`

---

##### `resourceRecordSetCount`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZone.property.resourceRecordSetCount"></a>

- *Type:* `number`

---


### Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig(__scope: Construct, __resources: string[], __input: Route53UpdateHostedZoneCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig.property.comment"></a>

- *Type:* `string`

---

##### `privateZone`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneConfig.property.privateZone"></a>

- *Type:* `boolean`

---


### Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService(__scope: Construct, __resources: string[], __input: Route53UpdateHostedZoneCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateHostedZoneCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService.property.description"></a>

- *Type:* `string`

---

##### `servicePrincipal`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateHostedZoneCommentHostedZoneLinkedService.property.servicePrincipal"></a>

- *Type:* `string`

---


### Route53ResponsesUpdateTrafficPolicyComment <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyComment"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyComment.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateTrafficPolicyComment(__scope: Construct, __resources: string[], __input: Route53UpdateTrafficPolicyCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyComment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyComment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyComment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `trafficPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyComment.property.trafficPolicy"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy`](#aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy)

---


### Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy(__scope: Construct, __resources: string[], __input: Route53UpdateTrafficPolicyCommentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest`](#aws-cdk-sdk.route53.Route53UpdateTrafficPolicyCommentRequest)

---



#### Properties <a name="Properties"></a>

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.property.comment"></a>

- *Type:* `string`

---

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.property.document"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyCommentTrafficPolicy.property.version"></a>

- *Type:* `number`

---


### Route53ResponsesUpdateTrafficPolicyInstance <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstance"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstance.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateTrafficPolicyInstance(__scope: Construct, __resources: string[], __input: Route53UpdateTrafficPolicyInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `trafficPolicyInstance`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstance.property.trafficPolicyInstance"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance`](#aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance)

---


### Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance"></a>

#### Initializer <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.Initializer"></a>

```typescript
import { route53 } from 'aws-cdk-sdk'

new route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance(__scope: Construct, __resources: string[], __input: Route53UpdateTrafficPolicyInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest`](#aws-cdk-sdk.route53.Route53UpdateTrafficPolicyInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.hostedZoneId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.state"></a>

- *Type:* `string`

---

##### `trafficPolicyId`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyId"></a>

- *Type:* `string`

---

##### `trafficPolicyType`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyType"></a>

- *Type:* `string`

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.trafficPolicyVersion"></a>

- *Type:* `number`

---

##### `ttl`<sup>Required</sup> <a name="aws-cdk-sdk.route53.Route53ResponsesUpdateTrafficPolicyInstanceTrafficPolicyInstance.property.ttl"></a>

- *Type:* `number`

---



