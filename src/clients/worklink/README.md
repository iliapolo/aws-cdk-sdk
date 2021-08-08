# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### WorkLinkClient <a name="aws-cdk-sdk.worklink.WorkLinkClient"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkClient.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateDomain` <a name="aws-cdk-sdk.worklink.WorkLinkClient.associateDomain"></a>

```typescript
public associateDomain(input: WorkLinkAssociateDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkAssociateDomainRequest`](#aws-cdk-sdk.worklink.WorkLinkAssociateDomainRequest)

---

##### `associateWebsiteAuthorizationProvider` <a name="aws-cdk-sdk.worklink.WorkLinkClient.associateWebsiteAuthorizationProvider"></a>

```typescript
public associateWebsiteAuthorizationProvider(input: WorkLinkAssociateWebsiteAuthorizationProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest`](#aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest)

---

##### `associateWebsiteCertificateAuthority` <a name="aws-cdk-sdk.worklink.WorkLinkClient.associateWebsiteCertificateAuthority"></a>

```typescript
public associateWebsiteCertificateAuthority(input: WorkLinkAssociateWebsiteCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest`](#aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest)

---

##### `createFleet` <a name="aws-cdk-sdk.worklink.WorkLinkClient.createFleet"></a>

```typescript
public createFleet(input: WorkLinkCreateFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest`](#aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest)

---

##### `deleteFleet` <a name="aws-cdk-sdk.worklink.WorkLinkClient.deleteFleet"></a>

```typescript
public deleteFleet(input: WorkLinkDeleteFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDeleteFleetRequest`](#aws-cdk-sdk.worklink.WorkLinkDeleteFleetRequest)

---

##### `describeAuditStreamConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeAuditStreamConfiguration"></a>

```typescript
public describeAuditStreamConfiguration(input: WorkLinkDescribeAuditStreamConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationRequest)

---

##### `describeCompanyNetworkConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeCompanyNetworkConfiguration"></a>

```typescript
public describeCompanyNetworkConfiguration(input: WorkLinkDescribeCompanyNetworkConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationRequest)

---

##### `describeDevice` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeDevice"></a>

```typescript
public describeDevice(input: WorkLinkDescribeDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeDeviceRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeDeviceRequest)

---

##### `describeDevicePolicyConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeDevicePolicyConfiguration"></a>

```typescript
public describeDevicePolicyConfiguration(input: WorkLinkDescribeDevicePolicyConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationRequest)

---

##### `describeDomain` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeDomain"></a>

```typescript
public describeDomain(input: WorkLinkDescribeDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeDomainRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeDomainRequest)

---

##### `describeFleetMetadata` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeFleetMetadata"></a>

```typescript
public describeFleetMetadata(input: WorkLinkDescribeFleetMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataRequest)

---

##### `describeIdentityProviderConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeIdentityProviderConfiguration"></a>

```typescript
public describeIdentityProviderConfiguration(input: WorkLinkDescribeIdentityProviderConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationRequest)

---

##### `describeWebsiteCertificateAuthority` <a name="aws-cdk-sdk.worklink.WorkLinkClient.describeWebsiteCertificateAuthority"></a>

```typescript
public describeWebsiteCertificateAuthority(input: WorkLinkDescribeWebsiteCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest)

---

##### `disassociateDomain` <a name="aws-cdk-sdk.worklink.WorkLinkClient.disassociateDomain"></a>

```typescript
public disassociateDomain(input: WorkLinkDisassociateDomainRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDisassociateDomainRequest`](#aws-cdk-sdk.worklink.WorkLinkDisassociateDomainRequest)

---

##### `disassociateWebsiteAuthorizationProvider` <a name="aws-cdk-sdk.worklink.WorkLinkClient.disassociateWebsiteAuthorizationProvider"></a>

```typescript
public disassociateWebsiteAuthorizationProvider(input: WorkLinkDisassociateWebsiteAuthorizationProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteAuthorizationProviderRequest`](#aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteAuthorizationProviderRequest)

---

##### `disassociateWebsiteCertificateAuthority` <a name="aws-cdk-sdk.worklink.WorkLinkClient.disassociateWebsiteCertificateAuthority"></a>

```typescript
public disassociateWebsiteCertificateAuthority(input: WorkLinkDisassociateWebsiteCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteCertificateAuthorityRequest`](#aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteCertificateAuthorityRequest)

---

##### `listDevices` <a name="aws-cdk-sdk.worklink.WorkLinkClient.listDevices"></a>

```typescript
public listDevices(input: WorkLinkListDevicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListDevicesRequest`](#aws-cdk-sdk.worklink.WorkLinkListDevicesRequest)

---

##### `listDomains` <a name="aws-cdk-sdk.worklink.WorkLinkClient.listDomains"></a>

```typescript
public listDomains(input: WorkLinkListDomainsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListDomainsRequest`](#aws-cdk-sdk.worklink.WorkLinkListDomainsRequest)

---

##### `listFleets` <a name="aws-cdk-sdk.worklink.WorkLinkClient.listFleets"></a>

```typescript
public listFleets(input: WorkLinkListFleetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListFleetsRequest`](#aws-cdk-sdk.worklink.WorkLinkListFleetsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.worklink.WorkLinkClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: WorkLinkListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListTagsForResourceRequest`](#aws-cdk-sdk.worklink.WorkLinkListTagsForResourceRequest)

---

##### `listWebsiteAuthorizationProviders` <a name="aws-cdk-sdk.worklink.WorkLinkClient.listWebsiteAuthorizationProviders"></a>

```typescript
public listWebsiteAuthorizationProviders(input: WorkLinkListWebsiteAuthorizationProvidersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest`](#aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest)

---

##### `listWebsiteCertificateAuthorities` <a name="aws-cdk-sdk.worklink.WorkLinkClient.listWebsiteCertificateAuthorities"></a>

```typescript
public listWebsiteCertificateAuthorities(input: WorkLinkListWebsiteCertificateAuthoritiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest`](#aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest)

---

##### `restoreDomainAccess` <a name="aws-cdk-sdk.worklink.WorkLinkClient.restoreDomainAccess"></a>

```typescript
public restoreDomainAccess(input: WorkLinkRestoreDomainAccessRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkRestoreDomainAccessRequest`](#aws-cdk-sdk.worklink.WorkLinkRestoreDomainAccessRequest)

---

##### `revokeDomainAccess` <a name="aws-cdk-sdk.worklink.WorkLinkClient.revokeDomainAccess"></a>

```typescript
public revokeDomainAccess(input: WorkLinkRevokeDomainAccessRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkRevokeDomainAccessRequest`](#aws-cdk-sdk.worklink.WorkLinkRevokeDomainAccessRequest)

---

##### `signOutUser` <a name="aws-cdk-sdk.worklink.WorkLinkClient.signOutUser"></a>

```typescript
public signOutUser(input: WorkLinkSignOutUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkSignOutUserRequest`](#aws-cdk-sdk.worklink.WorkLinkSignOutUserRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.worklink.WorkLinkClient.tagResource"></a>

```typescript
public tagResource(input: WorkLinkTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkTagResourceRequest`](#aws-cdk-sdk.worklink.WorkLinkTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.worklink.WorkLinkClient.untagResource"></a>

```typescript
public untagResource(input: WorkLinkUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkUntagResourceRequest`](#aws-cdk-sdk.worklink.WorkLinkUntagResourceRequest)

---

##### `updateAuditStreamConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.updateAuditStreamConfiguration"></a>

```typescript
public updateAuditStreamConfiguration(input: WorkLinkUpdateAuditStreamConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkUpdateAuditStreamConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkUpdateAuditStreamConfigurationRequest)

---

##### `updateCompanyNetworkConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.updateCompanyNetworkConfiguration"></a>

```typescript
public updateCompanyNetworkConfiguration(input: WorkLinkUpdateCompanyNetworkConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest)

---

##### `updateDevicePolicyConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.updateDevicePolicyConfiguration"></a>

```typescript
public updateDevicePolicyConfiguration(input: WorkLinkUpdateDevicePolicyConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkUpdateDevicePolicyConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkUpdateDevicePolicyConfigurationRequest)

---

##### `updateDomainMetadata` <a name="aws-cdk-sdk.worklink.WorkLinkClient.updateDomainMetadata"></a>

```typescript
public updateDomainMetadata(input: WorkLinkUpdateDomainMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkUpdateDomainMetadataRequest`](#aws-cdk-sdk.worklink.WorkLinkUpdateDomainMetadataRequest)

---

##### `updateFleetMetadata` <a name="aws-cdk-sdk.worklink.WorkLinkClient.updateFleetMetadata"></a>

```typescript
public updateFleetMetadata(input: WorkLinkUpdateFleetMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkUpdateFleetMetadataRequest`](#aws-cdk-sdk.worklink.WorkLinkUpdateFleetMetadataRequest)

---

##### `updateIdentityProviderConfiguration` <a name="aws-cdk-sdk.worklink.WorkLinkClient.updateIdentityProviderConfiguration"></a>

```typescript
public updateIdentityProviderConfiguration(input: WorkLinkUpdateIdentityProviderConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkUpdateIdentityProviderConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkUpdateIdentityProviderConfigurationRequest)

---




## Structs <a name="Structs"></a>

### WorkLinkAssociateDomainRequest <a name="aws-cdk-sdk.worklink.WorkLinkAssociateDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkAssociateDomainRequest: worklink.WorkLinkAssociateDomainRequest = { ... }
```

##### `acmCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateDomainRequest.property.acmCertificateArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateDomainRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateDomainRequest.property.displayName"></a>

- *Type:* `string`

---

### WorkLinkAssociateDomainResponse <a name="aws-cdk-sdk.worklink.WorkLinkAssociateDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkAssociateDomainResponse: worklink.WorkLinkAssociateDomainResponse = { ... }
```

### WorkLinkAssociateWebsiteAuthorizationProviderRequest <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkAssociateWebsiteAuthorizationProviderRequest: worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest = { ... }
```

##### `authorizationProviderType`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest.property.authorizationProviderType"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest.property.domainName"></a>

- *Type:* `string`

---

### WorkLinkAssociateWebsiteAuthorizationProviderResponse <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkAssociateWebsiteAuthorizationProviderResponse: worklink.WorkLinkAssociateWebsiteAuthorizationProviderResponse = { ... }
```

##### `authorizationProviderId`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderResponse.property.authorizationProviderId"></a>

- *Type:* `string`

---

### WorkLinkAssociateWebsiteCertificateAuthorityRequest <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkAssociateWebsiteCertificateAuthorityRequest: worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest = { ... }
```

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest.property.certificate"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest.property.displayName"></a>

- *Type:* `string`

---

### WorkLinkAssociateWebsiteCertificateAuthorityResponse <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkAssociateWebsiteCertificateAuthorityResponse: worklink.WorkLinkAssociateWebsiteCertificateAuthorityResponse = { ... }
```

##### `websiteCaId`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityResponse.property.websiteCaId"></a>

- *Type:* `string`

---

### WorkLinkCreateFleetRequest <a name="aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkCreateFleetRequest: worklink.WorkLinkCreateFleetRequest = { ... }
```

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest.property.fleetName"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest.property.displayName"></a>

- *Type:* `string`

---

##### `optimizeForEndUserLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest.property.optimizeForEndUserLocation"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### WorkLinkCreateFleetResponse <a name="aws-cdk-sdk.worklink.WorkLinkCreateFleetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkCreateFleetResponse: worklink.WorkLinkCreateFleetResponse = { ... }
```

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkCreateFleetResponse.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDeleteFleetRequest <a name="aws-cdk-sdk.worklink.WorkLinkDeleteFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDeleteFleetRequest: worklink.WorkLinkDeleteFleetRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDeleteFleetRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDeleteFleetResponse <a name="aws-cdk-sdk.worklink.WorkLinkDeleteFleetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDeleteFleetResponse: worklink.WorkLinkDeleteFleetResponse = { ... }
```

### WorkLinkDescribeAuditStreamConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeAuditStreamConfigurationRequest: worklink.WorkLinkDescribeAuditStreamConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeAuditStreamConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeAuditStreamConfigurationResponse: worklink.WorkLinkDescribeAuditStreamConfigurationResponse = { ... }
```

##### `auditStreamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationResponse.property.auditStreamArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeCompanyNetworkConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeCompanyNetworkConfigurationRequest: worklink.WorkLinkDescribeCompanyNetworkConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeCompanyNetworkConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeCompanyNetworkConfigurationResponse: worklink.WorkLinkDescribeCompanyNetworkConfigurationResponse = { ... }
```

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationResponse.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationResponse.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationResponse.property.vpcId"></a>

- *Type:* `string`

---

### WorkLinkDescribeDevicePolicyConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeDevicePolicyConfigurationRequest: worklink.WorkLinkDescribeDevicePolicyConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeDevicePolicyConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeDevicePolicyConfigurationResponse: worklink.WorkLinkDescribeDevicePolicyConfigurationResponse = { ... }
```

##### `deviceCaCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationResponse.property.deviceCaCertificate"></a>

- *Type:* `string`

---

### WorkLinkDescribeDeviceRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeDeviceRequest: worklink.WorkLinkDescribeDeviceRequest = { ... }
```

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeDeviceResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeDeviceResponse: worklink.WorkLinkDescribeDeviceResponse = { ... }
```

##### `firstAccessedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.firstAccessedTime"></a>

- *Type:* `string`

---

##### `lastAccessedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.lastAccessedTime"></a>

- *Type:* `string`

---

##### `manufacturer`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.manufacturer"></a>

- *Type:* `string`

---

##### `model`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.model"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.operatingSystem"></a>

- *Type:* `string`

---

##### `operatingSystemVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.operatingSystemVersion"></a>

- *Type:* `string`

---

##### `patchLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.patchLevel"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.status"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDeviceResponse.property.username"></a>

- *Type:* `string`

---

### WorkLinkDescribeDomainRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeDomainRequest: worklink.WorkLinkDescribeDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeDomainResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeDomainResponse: worklink.WorkLinkDescribeDomainResponse = { ... }
```

##### `acmCertificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainResponse.property.acmCertificateArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainResponse.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainResponse.property.displayName"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainResponse.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeDomainResponse.property.domainStatus"></a>

- *Type:* `string`

---

### WorkLinkDescribeFleetMetadataRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeFleetMetadataRequest: worklink.WorkLinkDescribeFleetMetadataRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeFleetMetadataResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeFleetMetadataResponse: worklink.WorkLinkDescribeFleetMetadataResponse = { ... }
```

##### `companyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.companyCode"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.displayName"></a>

- *Type:* `string`

---

##### `fleetName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.fleetStatus"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `optimizeForEndUserLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.optimizeForEndUserLocation"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### WorkLinkDescribeIdentityProviderConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeIdentityProviderConfigurationRequest: worklink.WorkLinkDescribeIdentityProviderConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDescribeIdentityProviderConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeIdentityProviderConfigurationResponse: worklink.WorkLinkDescribeIdentityProviderConfigurationResponse = { ... }
```

##### `identityProviderSamlMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationResponse.property.identityProviderSamlMetadata"></a>

- *Type:* `string`

---

##### `identityProviderType`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationResponse.property.identityProviderType"></a>

- *Type:* `string`

---

##### `serviceProviderSamlMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationResponse.property.serviceProviderSamlMetadata"></a>

- *Type:* `string`

---

### WorkLinkDescribeWebsiteCertificateAuthorityRequest <a name="aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeWebsiteCertificateAuthorityRequest: worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `websiteCaId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest.property.websiteCaId"></a>

- *Type:* `string`

---

### WorkLinkDescribeWebsiteCertificateAuthorityResponse <a name="aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDescribeWebsiteCertificateAuthorityResponse: worklink.WorkLinkDescribeWebsiteCertificateAuthorityResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityResponse.property.certificate"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityResponse.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityResponse.property.displayName"></a>

- *Type:* `string`

---

### WorkLinkDeviceSummary <a name="aws-cdk-sdk.worklink.WorkLinkDeviceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDeviceSummary: worklink.WorkLinkDeviceSummary = { ... }
```

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDeviceSummary.property.deviceId"></a>

- *Type:* `string`

---

##### `deviceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDeviceSummary.property.deviceStatus"></a>

- *Type:* `string`

---

### WorkLinkDisassociateDomainRequest <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateDomainRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDisassociateDomainRequest: worklink.WorkLinkDisassociateDomainRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateDomainRequest.property.domainName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateDomainRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDisassociateDomainResponse <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateDomainResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDisassociateDomainResponse: worklink.WorkLinkDisassociateDomainResponse = { ... }
```

### WorkLinkDisassociateWebsiteAuthorizationProviderRequest <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteAuthorizationProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDisassociateWebsiteAuthorizationProviderRequest: worklink.WorkLinkDisassociateWebsiteAuthorizationProviderRequest = { ... }
```

##### `authorizationProviderId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteAuthorizationProviderRequest.property.authorizationProviderId"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteAuthorizationProviderRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkDisassociateWebsiteAuthorizationProviderResponse <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteAuthorizationProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDisassociateWebsiteAuthorizationProviderResponse: worklink.WorkLinkDisassociateWebsiteAuthorizationProviderResponse = { ... }
```

### WorkLinkDisassociateWebsiteCertificateAuthorityRequest <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDisassociateWebsiteCertificateAuthorityRequest: worklink.WorkLinkDisassociateWebsiteCertificateAuthorityRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteCertificateAuthorityRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `websiteCaId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteCertificateAuthorityRequest.property.websiteCaId"></a>

- *Type:* `string`

---

### WorkLinkDisassociateWebsiteCertificateAuthorityResponse <a name="aws-cdk-sdk.worklink.WorkLinkDisassociateWebsiteCertificateAuthorityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDisassociateWebsiteCertificateAuthorityResponse: worklink.WorkLinkDisassociateWebsiteCertificateAuthorityResponse = { ... }
```

### WorkLinkDomainSummary <a name="aws-cdk-sdk.worklink.WorkLinkDomainSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkDomainSummary: worklink.WorkLinkDomainSummary = { ... }
```

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDomainSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDomainSummary.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDomainSummary.property.domainStatus"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkDomainSummary.property.displayName"></a>

- *Type:* `string`

---

### WorkLinkFleetSummary <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkFleetSummary: worklink.WorkLinkFleetSummary = { ... }
```

##### `companyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.companyCode"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.displayName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.fleetArn"></a>

- *Type:* `string`

---

##### `fleetName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.fleetStatus"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkFleetSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### WorkLinkListDevicesRequest <a name="aws-cdk-sdk.worklink.WorkLinkListDevicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListDevicesRequest: worklink.WorkLinkListDevicesRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDevicesRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDevicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDevicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListDevicesResponse <a name="aws-cdk-sdk.worklink.WorkLinkListDevicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListDevicesResponse: worklink.WorkLinkListDevicesResponse = { ... }
```

##### `devices`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDevicesResponse.property.devices"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDeviceSummary`](#aws-cdk-sdk.worklink.WorkLinkDeviceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDevicesResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListDomainsRequest <a name="aws-cdk-sdk.worklink.WorkLinkListDomainsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListDomainsRequest: worklink.WorkLinkListDomainsRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDomainsRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDomainsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDomainsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListDomainsResponse <a name="aws-cdk-sdk.worklink.WorkLinkListDomainsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListDomainsResponse: worklink.WorkLinkListDomainsResponse = { ... }
```

##### `domains`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDomainsResponse.property.domains"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDomainSummary`](#aws-cdk-sdk.worklink.WorkLinkDomainSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListDomainsResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListFleetsRequest <a name="aws-cdk-sdk.worklink.WorkLinkListFleetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListFleetsRequest: worklink.WorkLinkListFleetsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListFleetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListFleetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListFleetsResponse <a name="aws-cdk-sdk.worklink.WorkLinkListFleetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListFleetsResponse: worklink.WorkLinkListFleetsResponse = { ... }
```

##### `fleetSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListFleetsResponse.property.fleetSummaryList"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkFleetSummary`](#aws-cdk-sdk.worklink.WorkLinkFleetSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListFleetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListTagsForResourceRequest <a name="aws-cdk-sdk.worklink.WorkLinkListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListTagsForResourceRequest: worklink.WorkLinkListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### WorkLinkListTagsForResourceResponse <a name="aws-cdk-sdk.worklink.WorkLinkListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListTagsForResourceResponse: worklink.WorkLinkListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### WorkLinkListWebsiteAuthorizationProvidersRequest <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListWebsiteAuthorizationProvidersRequest: worklink.WorkLinkListWebsiteAuthorizationProvidersRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListWebsiteAuthorizationProvidersResponse <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListWebsiteAuthorizationProvidersResponse: worklink.WorkLinkListWebsiteAuthorizationProvidersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `websiteAuthorizationProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersResponse.property.websiteAuthorizationProviders"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary`](#aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary)[]

---

### WorkLinkListWebsiteCertificateAuthoritiesRequest <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListWebsiteCertificateAuthoritiesRequest: worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest.property.nextToken"></a>

- *Type:* `string`

---

### WorkLinkListWebsiteCertificateAuthoritiesResponse <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkListWebsiteCertificateAuthoritiesResponse: worklink.WorkLinkListWebsiteCertificateAuthoritiesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `websiteCertificateAuthorities`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesResponse.property.websiteCertificateAuthorities"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary`](#aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary)[]

---

### WorkLinkRestoreDomainAccessRequest <a name="aws-cdk-sdk.worklink.WorkLinkRestoreDomainAccessRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkRestoreDomainAccessRequest: worklink.WorkLinkRestoreDomainAccessRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkRestoreDomainAccessRequest.property.domainName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkRestoreDomainAccessRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkRestoreDomainAccessResponse <a name="aws-cdk-sdk.worklink.WorkLinkRestoreDomainAccessResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkRestoreDomainAccessResponse: worklink.WorkLinkRestoreDomainAccessResponse = { ... }
```

### WorkLinkRevokeDomainAccessRequest <a name="aws-cdk-sdk.worklink.WorkLinkRevokeDomainAccessRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkRevokeDomainAccessRequest: worklink.WorkLinkRevokeDomainAccessRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkRevokeDomainAccessRequest.property.domainName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkRevokeDomainAccessRequest.property.fleetArn"></a>

- *Type:* `string`

---

### WorkLinkRevokeDomainAccessResponse <a name="aws-cdk-sdk.worklink.WorkLinkRevokeDomainAccessResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkRevokeDomainAccessResponse: worklink.WorkLinkRevokeDomainAccessResponse = { ... }
```

### WorkLinkSignOutUserRequest <a name="aws-cdk-sdk.worklink.WorkLinkSignOutUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkSignOutUserRequest: worklink.WorkLinkSignOutUserRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkSignOutUserRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkSignOutUserRequest.property.username"></a>

- *Type:* `string`

---

### WorkLinkSignOutUserResponse <a name="aws-cdk-sdk.worklink.WorkLinkSignOutUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkSignOutUserResponse: worklink.WorkLinkSignOutUserResponse = { ... }
```

### WorkLinkTagResourceRequest <a name="aws-cdk-sdk.worklink.WorkLinkTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkTagResourceRequest: worklink.WorkLinkTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### WorkLinkTagResourceResponse <a name="aws-cdk-sdk.worklink.WorkLinkTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkTagResourceResponse: worklink.WorkLinkTagResourceResponse = { ... }
```

### WorkLinkUntagResourceRequest <a name="aws-cdk-sdk.worklink.WorkLinkUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUntagResourceRequest: worklink.WorkLinkUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### WorkLinkUntagResourceResponse <a name="aws-cdk-sdk.worklink.WorkLinkUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUntagResourceResponse: worklink.WorkLinkUntagResourceResponse = { ... }
```

### WorkLinkUpdateAuditStreamConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkUpdateAuditStreamConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateAuditStreamConfigurationRequest: worklink.WorkLinkUpdateAuditStreamConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateAuditStreamConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `auditStreamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateAuditStreamConfigurationRequest.property.auditStreamArn"></a>

- *Type:* `string`

---

### WorkLinkUpdateAuditStreamConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkUpdateAuditStreamConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateAuditStreamConfigurationResponse: worklink.WorkLinkUpdateAuditStreamConfigurationResponse = { ... }
```

### WorkLinkUpdateCompanyNetworkConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateCompanyNetworkConfigurationRequest: worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationRequest.property.vpcId"></a>

- *Type:* `string`

---

### WorkLinkUpdateCompanyNetworkConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkUpdateCompanyNetworkConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateCompanyNetworkConfigurationResponse: worklink.WorkLinkUpdateCompanyNetworkConfigurationResponse = { ... }
```

### WorkLinkUpdateDevicePolicyConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDevicePolicyConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateDevicePolicyConfigurationRequest: worklink.WorkLinkUpdateDevicePolicyConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDevicePolicyConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `deviceCaCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDevicePolicyConfigurationRequest.property.deviceCaCertificate"></a>

- *Type:* `string`

---

### WorkLinkUpdateDevicePolicyConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDevicePolicyConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateDevicePolicyConfigurationResponse: worklink.WorkLinkUpdateDevicePolicyConfigurationResponse = { ... }
```

### WorkLinkUpdateDomainMetadataRequest <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDomainMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateDomainMetadataRequest: worklink.WorkLinkUpdateDomainMetadataRequest = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDomainMetadataRequest.property.domainName"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDomainMetadataRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDomainMetadataRequest.property.displayName"></a>

- *Type:* `string`

---

### WorkLinkUpdateDomainMetadataResponse <a name="aws-cdk-sdk.worklink.WorkLinkUpdateDomainMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateDomainMetadataResponse: worklink.WorkLinkUpdateDomainMetadataResponse = { ... }
```

### WorkLinkUpdateFleetMetadataRequest <a name="aws-cdk-sdk.worklink.WorkLinkUpdateFleetMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateFleetMetadataRequest: worklink.WorkLinkUpdateFleetMetadataRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateFleetMetadataRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateFleetMetadataRequest.property.displayName"></a>

- *Type:* `string`

---

##### `optimizeForEndUserLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateFleetMetadataRequest.property.optimizeForEndUserLocation"></a>

- *Type:* `boolean`

---

### WorkLinkUpdateFleetMetadataResponse <a name="aws-cdk-sdk.worklink.WorkLinkUpdateFleetMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateFleetMetadataResponse: worklink.WorkLinkUpdateFleetMetadataResponse = { ... }
```

### WorkLinkUpdateIdentityProviderConfigurationRequest <a name="aws-cdk-sdk.worklink.WorkLinkUpdateIdentityProviderConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateIdentityProviderConfigurationRequest: worklink.WorkLinkUpdateIdentityProviderConfigurationRequest = { ... }
```

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateIdentityProviderConfigurationRequest.property.fleetArn"></a>

- *Type:* `string`

---

##### `identityProviderType`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateIdentityProviderConfigurationRequest.property.identityProviderType"></a>

- *Type:* `string`

---

##### `identityProviderSamlMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkUpdateIdentityProviderConfigurationRequest.property.identityProviderSamlMetadata"></a>

- *Type:* `string`

---

### WorkLinkUpdateIdentityProviderConfigurationResponse <a name="aws-cdk-sdk.worklink.WorkLinkUpdateIdentityProviderConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkUpdateIdentityProviderConfigurationResponse: worklink.WorkLinkUpdateIdentityProviderConfigurationResponse = { ... }
```

### WorkLinkWebsiteAuthorizationProviderSummary <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkWebsiteAuthorizationProviderSummary: worklink.WorkLinkWebsiteAuthorizationProviderSummary = { ... }
```

##### `authorizationProviderType`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary.property.authorizationProviderType"></a>

- *Type:* `string`

---

##### `authorizationProviderId`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary.property.authorizationProviderId"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary.property.domainName"></a>

- *Type:* `string`

---

### WorkLinkWebsiteCaSummary <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

const workLinkWebsiteCaSummary: worklink.WorkLinkWebsiteCaSummary = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary.property.displayName"></a>

- *Type:* `string`

---

##### `websiteCaId`<sup>Optional</sup> <a name="aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary.property.websiteCaId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### WorkLinkResponsesAssociateWebsiteAuthorizationProvider <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteAuthorizationProvider"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteAuthorizationProvider.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesAssociateWebsiteAuthorizationProvider(__scope: Construct, __resources: string[], __input: WorkLinkAssociateWebsiteAuthorizationProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteAuthorizationProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteAuthorizationProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteAuthorizationProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest`](#aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteAuthorizationProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `authorizationProviderId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteAuthorizationProvider.property.authorizationProviderId"></a>

- *Type:* `string`

---


### WorkLinkResponsesAssociateWebsiteCertificateAuthority <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteCertificateAuthority.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesAssociateWebsiteCertificateAuthority(__scope: Construct, __resources: string[], __input: WorkLinkAssociateWebsiteCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest`](#aws-cdk-sdk.worklink.WorkLinkAssociateWebsiteCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `websiteCaId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesAssociateWebsiteCertificateAuthority.property.websiteCaId"></a>

- *Type:* `string`

---


### WorkLinkResponsesCreateFleet <a name="aws-cdk-sdk.worklink.WorkLinkResponsesCreateFleet"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesCreateFleet.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesCreateFleet(__scope: Construct, __resources: string[], __input: WorkLinkCreateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesCreateFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesCreateFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesCreateFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest`](#aws-cdk-sdk.worklink.WorkLinkCreateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesCreateFleet.property.fleetArn"></a>

- *Type:* `string`

---


### WorkLinkResponsesDescribeAuditStreamConfiguration <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeAuditStreamConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeAuditStreamConfiguration.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeAuditStreamConfiguration(__scope: Construct, __resources: string[], __input: WorkLinkDescribeAuditStreamConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeAuditStreamConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeAuditStreamConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeAuditStreamConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeAuditStreamConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `auditStreamArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeAuditStreamConfiguration.property.auditStreamArn"></a>

- *Type:* `string`

---


### WorkLinkResponsesDescribeCompanyNetworkConfiguration <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration(__scope: Construct, __resources: string[], __input: WorkLinkDescribeCompanyNetworkConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeCompanyNetworkConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeCompanyNetworkConfiguration.property.vpcId"></a>

- *Type:* `string`

---


### WorkLinkResponsesDescribeDevice <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeDevice(__scope: Construct, __resources: string[], __input: WorkLinkDescribeDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeDeviceRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `firstAccessedTime`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.firstAccessedTime"></a>

- *Type:* `string`

---

##### `lastAccessedTime`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.lastAccessedTime"></a>

- *Type:* `string`

---

##### `manufacturer`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.manufacturer"></a>

- *Type:* `string`

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.model"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.operatingSystem"></a>

- *Type:* `string`

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.operatingSystemVersion"></a>

- *Type:* `string`

---

##### `patchLevel`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.patchLevel"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.status"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevice.property.username"></a>

- *Type:* `string`

---


### WorkLinkResponsesDescribeDevicePolicyConfiguration <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevicePolicyConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevicePolicyConfiguration.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeDevicePolicyConfiguration(__scope: Construct, __resources: string[], __input: WorkLinkDescribeDevicePolicyConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevicePolicyConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevicePolicyConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevicePolicyConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeDevicePolicyConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceCaCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDevicePolicyConfiguration.property.deviceCaCertificate"></a>

- *Type:* `string`

---


### WorkLinkResponsesDescribeDomain <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeDomain(__scope: Construct, __resources: string[], __input: WorkLinkDescribeDomainRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeDomainRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeDomainRequest)

---



#### Properties <a name="Properties"></a>

##### `acmCertificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.property.acmCertificateArn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.property.displayName"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.property.domainName"></a>

- *Type:* `string`

---

##### `domainStatus`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeDomain.property.domainStatus"></a>

- *Type:* `string`

---


### WorkLinkResponsesDescribeFleetMetadata <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeFleetMetadata(__scope: Construct, __resources: string[], __input: WorkLinkDescribeFleetMetadataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeFleetMetadataRequest)

---



#### Properties <a name="Properties"></a>

##### `companyCode`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.companyCode"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.displayName"></a>

- *Type:* `string`

---

##### `fleetName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.fleetName"></a>

- *Type:* `string`

---

##### `fleetStatus`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.fleetStatus"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `optimizeForEndUserLocation`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.optimizeForEndUserLocation"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeFleetMetadata.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### WorkLinkResponsesDescribeIdentityProviderConfiguration <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration(__scope: Construct, __resources: string[], __input: WorkLinkDescribeIdentityProviderConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeIdentityProviderConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `identityProviderSamlMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration.property.identityProviderSamlMetadata"></a>

- *Type:* `string`

---

##### `identityProviderType`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration.property.identityProviderType"></a>

- *Type:* `string`

---

##### `serviceProviderSamlMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeIdentityProviderConfiguration.property.serviceProviderSamlMetadata"></a>

- *Type:* `string`

---


### WorkLinkResponsesDescribeWebsiteCertificateAuthority <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority(__scope: Construct, __resources: string[], __input: WorkLinkDescribeWebsiteCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest`](#aws-cdk-sdk.worklink.WorkLinkDescribeWebsiteCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority.property.certificate"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority.property.createdTime"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesDescribeWebsiteCertificateAuthority.property.displayName"></a>

- *Type:* `string`

---


### WorkLinkResponsesListDevices <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDevices"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDevices.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesListDevices(__scope: Construct, __resources: string[], __input: WorkLinkListDevicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListDevicesRequest`](#aws-cdk-sdk.worklink.WorkLinkListDevicesRequest)

---



#### Properties <a name="Properties"></a>

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDevices.property.devices"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDeviceSummary`](#aws-cdk-sdk.worklink.WorkLinkDeviceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDevices.property.nextToken"></a>

- *Type:* `string`

---


### WorkLinkResponsesListDomains <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDomains"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDomains.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesListDomains(__scope: Construct, __resources: string[], __input: WorkLinkListDomainsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDomains.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDomains.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDomains.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListDomainsRequest`](#aws-cdk-sdk.worklink.WorkLinkListDomainsRequest)

---



#### Properties <a name="Properties"></a>

##### `domains`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDomains.property.domains"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkDomainSummary`](#aws-cdk-sdk.worklink.WorkLinkDomainSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListDomains.property.nextToken"></a>

- *Type:* `string`

---


### WorkLinkResponsesListFleets <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListFleets"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListFleets.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesListFleets(__scope: Construct, __resources: string[], __input: WorkLinkListFleetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListFleets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListFleets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListFleets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListFleetsRequest`](#aws-cdk-sdk.worklink.WorkLinkListFleetsRequest)

---



#### Properties <a name="Properties"></a>

##### `fleetSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListFleets.property.fleetSummaryList"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkFleetSummary`](#aws-cdk-sdk.worklink.WorkLinkFleetSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListFleets.property.nextToken"></a>

- *Type:* `string`

---


### WorkLinkResponsesListTagsForResource <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListTagsForResource.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: WorkLinkListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListTagsForResourceRequest`](#aws-cdk-sdk.worklink.WorkLinkListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### WorkLinkResponsesListWebsiteAuthorizationProviders <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteAuthorizationProviders"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteAuthorizationProviders.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesListWebsiteAuthorizationProviders(__scope: Construct, __resources: string[], __input: WorkLinkListWebsiteAuthorizationProvidersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteAuthorizationProviders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteAuthorizationProviders.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteAuthorizationProviders.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest`](#aws-cdk-sdk.worklink.WorkLinkListWebsiteAuthorizationProvidersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteAuthorizationProviders.property.nextToken"></a>

- *Type:* `string`

---

##### `websiteAuthorizationProviders`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteAuthorizationProviders.property.websiteAuthorizationProviders"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary`](#aws-cdk-sdk.worklink.WorkLinkWebsiteAuthorizationProviderSummary)[]

---


### WorkLinkResponsesListWebsiteCertificateAuthorities <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteCertificateAuthorities"></a>

#### Initializer <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteCertificateAuthorities.Initializer"></a>

```typescript
import { worklink } from 'aws-cdk-sdk'

new worklink.WorkLinkResponsesListWebsiteCertificateAuthorities(__scope: Construct, __resources: string[], __input: WorkLinkListWebsiteCertificateAuthoritiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteCertificateAuthorities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteCertificateAuthorities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteCertificateAuthorities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest`](#aws-cdk-sdk.worklink.WorkLinkListWebsiteCertificateAuthoritiesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteCertificateAuthorities.property.nextToken"></a>

- *Type:* `string`

---

##### `websiteCertificateAuthorities`<sup>Required</sup> <a name="aws-cdk-sdk.worklink.WorkLinkResponsesListWebsiteCertificateAuthorities.property.websiteCertificateAuthorities"></a>

- *Type:* [`aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary`](#aws-cdk-sdk.worklink.WorkLinkWebsiteCaSummary)[]

---



