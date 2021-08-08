# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### NetworkManagerClient <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateCustomerGateway` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.associateCustomerGateway"></a>

```typescript
public associateCustomerGateway(input: NetworkManagerAssociateCustomerGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest)

---

##### `associateLink` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.associateLink"></a>

```typescript
public associateLink(input: NetworkManagerAssociateLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest)

---

##### `createDevice` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.createDevice"></a>

```typescript
public createDevice(input: NetworkManagerCreateDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest)

---

##### `createGlobalNetwork` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.createGlobalNetwork"></a>

```typescript
public createGlobalNetwork(input: NetworkManagerCreateGlobalNetworkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest)

---

##### `createLink` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.createLink"></a>

```typescript
public createLink(input: NetworkManagerCreateLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest)

---

##### `createSite` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.createSite"></a>

```typescript
public createSite(input: NetworkManagerCreateSiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest)

---

##### `deleteDevice` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.deleteDevice"></a>

```typescript
public deleteDevice(input: NetworkManagerDeleteDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest)

---

##### `deleteGlobalNetwork` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.deleteGlobalNetwork"></a>

```typescript
public deleteGlobalNetwork(input: NetworkManagerDeleteGlobalNetworkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest)

---

##### `deleteLink` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.deleteLink"></a>

```typescript
public deleteLink(input: NetworkManagerDeleteLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest)

---

##### `deleteSite` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.deleteSite"></a>

```typescript
public deleteSite(input: NetworkManagerDeleteSiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest)

---

##### `deregisterTransitGateway` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.deregisterTransitGateway"></a>

```typescript
public deregisterTransitGateway(input: NetworkManagerDeregisterTransitGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest)

---

##### `describeGlobalNetworks` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.describeGlobalNetworks"></a>

```typescript
public describeGlobalNetworks(input: NetworkManagerDescribeGlobalNetworksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest)

---

##### `disassociateCustomerGateway` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.disassociateCustomerGateway"></a>

```typescript
public disassociateCustomerGateway(input: NetworkManagerDisassociateCustomerGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest)

---

##### `disassociateLink` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.disassociateLink"></a>

```typescript
public disassociateLink(input: NetworkManagerDisassociateLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest)

---

##### `fetchCustomerGatewayAssociations` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.fetchCustomerGatewayAssociations"></a>

```typescript
public fetchCustomerGatewayAssociations(input: NetworkManagerGetCustomerGatewayAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest)

---

##### `fetchDevices` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.fetchDevices"></a>

```typescript
public fetchDevices(input: NetworkManagerGetDevicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest)

---

##### `fetchLinkAssociations` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.fetchLinkAssociations"></a>

```typescript
public fetchLinkAssociations(input: NetworkManagerGetLinkAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest)

---

##### `fetchLinks` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.fetchLinks"></a>

```typescript
public fetchLinks(input: NetworkManagerGetLinksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest)

---

##### `fetchSites` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.fetchSites"></a>

```typescript
public fetchSites(input: NetworkManagerGetSitesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest)

---

##### `fetchTransitGatewayRegistrations` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.fetchTransitGatewayRegistrations"></a>

```typescript
public fetchTransitGatewayRegistrations(input: NetworkManagerGetTransitGatewayRegistrationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: NetworkManagerListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceRequest)

---

##### `registerTransitGateway` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.registerTransitGateway"></a>

```typescript
public registerTransitGateway(input: NetworkManagerRegisterTransitGatewayRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.tagResource"></a>

```typescript
public tagResource(input: NetworkManagerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTagResourceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.untagResource"></a>

```typescript
public untagResource(input: NetworkManagerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUntagResourceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUntagResourceRequest)

---

##### `updateDevice` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.updateDevice"></a>

```typescript
public updateDevice(input: NetworkManagerUpdateDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest)

---

##### `updateGlobalNetwork` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.updateGlobalNetwork"></a>

```typescript
public updateGlobalNetwork(input: NetworkManagerUpdateGlobalNetworkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest)

---

##### `updateLink` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.updateLink"></a>

```typescript
public updateLink(input: NetworkManagerUpdateLinkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest)

---

##### `updateSite` <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.updateSite"></a>

```typescript
public updateSite(input: NetworkManagerUpdateSiteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest)

---




## Structs <a name="Structs"></a>

### NetworkManagerAssociateCustomerGatewayRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerAssociateCustomerGatewayRequest: networkmanager.NetworkManagerAssociateCustomerGatewayRequest = { ... }
```

##### `customerGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest.property.customerGatewayArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest.property.linkId"></a>

- *Type:* `string`

---

### NetworkManagerAssociateCustomerGatewayResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerAssociateCustomerGatewayResponse: networkmanager.NetworkManagerAssociateCustomerGatewayResponse = { ... }
```

##### `customerGatewayAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayResponse.property.customerGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation)

---

### NetworkManagerAssociateLinkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerAssociateLinkRequest: networkmanager.NetworkManagerAssociateLinkRequest = { ... }
```

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest.property.linkId"></a>

- *Type:* `string`

---

### NetworkManagerAssociateLinkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerAssociateLinkResponse: networkmanager.NetworkManagerAssociateLinkResponse = { ... }
```

##### `linkAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkResponse.property.linkAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation)

---

### NetworkManagerBandwidth <a name="aws-cdk-sdk.networkmanager.NetworkManagerBandwidth"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerBandwidth: networkmanager.NetworkManagerBandwidth = { ... }
```

##### `downloadSpeed`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerBandwidth.property.downloadSpeed"></a>

- *Type:* `number`

---

##### `uploadSpeed`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerBandwidth.property.uploadSpeed"></a>

- *Type:* `number`

---

### NetworkManagerCreateDeviceRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateDeviceRequest: networkmanager.NetworkManagerCreateDeviceRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.description"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerLocation)

---

##### `model`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.model"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.serialNumber"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.siteId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.type"></a>

- *Type:* `string`

---

##### `vendor`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest.property.vendor"></a>

- *Type:* `string`

---

### NetworkManagerCreateDeviceResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateDeviceResponse: networkmanager.NetworkManagerCreateDeviceResponse = { ... }
```

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceResponse.property.device"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerDevice)

---

### NetworkManagerCreateGlobalNetworkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateGlobalNetworkRequest: networkmanager.NetworkManagerCreateGlobalNetworkRequest = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

### NetworkManagerCreateGlobalNetworkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateGlobalNetworkResponse: networkmanager.NetworkManagerCreateGlobalNetworkResponse = { ... }
```

##### `globalNetwork`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkResponse.property.globalNetwork"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork)

---

### NetworkManagerCreateLinkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateLinkRequest: networkmanager.NetworkManagerCreateLinkRequest = { ... }
```

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerBandwidth`](#aws-cdk-sdk.networkmanager.NetworkManagerBandwidth)

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest.property.siteId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest.property.description"></a>

- *Type:* `string`

---

##### `provider`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest.property.provider"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest.property.type"></a>

- *Type:* `string`

---

### NetworkManagerCreateLinkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateLinkResponse: networkmanager.NetworkManagerCreateLinkResponse = { ... }
```

##### `link`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkResponse.property.link"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLink`](#aws-cdk-sdk.networkmanager.NetworkManagerLink)

---

### NetworkManagerCreateSiteRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateSiteRequest: networkmanager.NetworkManagerCreateSiteRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest.property.description"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerLocation)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

### NetworkManagerCreateSiteResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCreateSiteResponse: networkmanager.NetworkManagerCreateSiteResponse = { ... }
```

##### `site`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteResponse.property.site"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerSite`](#aws-cdk-sdk.networkmanager.NetworkManagerSite)

---

### NetworkManagerCustomerGatewayAssociation <a name="aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerCustomerGatewayAssociation: networkmanager.NetworkManagerCustomerGatewayAssociation = { ... }
```

##### `customerGatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation.property.customerGatewayArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation.property.linkId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation.property.state"></a>

- *Type:* `string`

---

### NetworkManagerDeleteDeviceRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteDeviceRequest: networkmanager.NetworkManagerDeleteDeviceRequest = { ... }
```

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

### NetworkManagerDeleteDeviceResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteDeviceResponse: networkmanager.NetworkManagerDeleteDeviceResponse = { ... }
```

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceResponse.property.device"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerDevice)

---

### NetworkManagerDeleteGlobalNetworkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteGlobalNetworkRequest: networkmanager.NetworkManagerDeleteGlobalNetworkRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

### NetworkManagerDeleteGlobalNetworkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteGlobalNetworkResponse: networkmanager.NetworkManagerDeleteGlobalNetworkResponse = { ... }
```

##### `globalNetwork`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkResponse.property.globalNetwork"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork)

---

### NetworkManagerDeleteLinkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteLinkRequest: networkmanager.NetworkManagerDeleteLinkRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest.property.linkId"></a>

- *Type:* `string`

---

### NetworkManagerDeleteLinkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteLinkResponse: networkmanager.NetworkManagerDeleteLinkResponse = { ... }
```

##### `link`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkResponse.property.link"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLink`](#aws-cdk-sdk.networkmanager.NetworkManagerLink)

---

### NetworkManagerDeleteSiteRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteSiteRequest: networkmanager.NetworkManagerDeleteSiteRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest.property.siteId"></a>

- *Type:* `string`

---

### NetworkManagerDeleteSiteResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeleteSiteResponse: networkmanager.NetworkManagerDeleteSiteResponse = { ... }
```

##### `site`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteResponse.property.site"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerSite`](#aws-cdk-sdk.networkmanager.NetworkManagerSite)

---

### NetworkManagerDeregisterTransitGatewayRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeregisterTransitGatewayRequest: networkmanager.NetworkManagerDeregisterTransitGatewayRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `transitGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest.property.transitGatewayArn"></a>

- *Type:* `string`

---

### NetworkManagerDeregisterTransitGatewayResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDeregisterTransitGatewayResponse: networkmanager.NetworkManagerDeregisterTransitGatewayResponse = { ... }
```

##### `transitGatewayRegistration`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayResponse.property.transitGatewayRegistration"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration`](#aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration)

---

### NetworkManagerDescribeGlobalNetworksRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDescribeGlobalNetworksRequest: networkmanager.NetworkManagerDescribeGlobalNetworksRequest = { ... }
```

##### `globalNetworkIds`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest.property.globalNetworkIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerDescribeGlobalNetworksResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDescribeGlobalNetworksResponse: networkmanager.NetworkManagerDescribeGlobalNetworksResponse = { ... }
```

##### `globalNetworks`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksResponse.property.globalNetworks"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksResponse.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerDevice <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDevice: networkmanager.NetworkManagerDevice = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.description"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerLocation)

---

##### `model`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.model"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.type"></a>

- *Type:* `string`

---

##### `vendor`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDevice.property.vendor"></a>

- *Type:* `string`

---

### NetworkManagerDisassociateCustomerGatewayRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDisassociateCustomerGatewayRequest: networkmanager.NetworkManagerDisassociateCustomerGatewayRequest = { ... }
```

##### `customerGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest.property.customerGatewayArn"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

### NetworkManagerDisassociateCustomerGatewayResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDisassociateCustomerGatewayResponse: networkmanager.NetworkManagerDisassociateCustomerGatewayResponse = { ... }
```

##### `customerGatewayAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayResponse.property.customerGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation)

---

### NetworkManagerDisassociateLinkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDisassociateLinkRequest: networkmanager.NetworkManagerDisassociateLinkRequest = { ... }
```

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest.property.linkId"></a>

- *Type:* `string`

---

### NetworkManagerDisassociateLinkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerDisassociateLinkResponse: networkmanager.NetworkManagerDisassociateLinkResponse = { ... }
```

##### `linkAssociation`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkResponse.property.linkAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation)

---

### NetworkManagerGetCustomerGatewayAssociationsRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetCustomerGatewayAssociationsRequest: networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `customerGatewayArns`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest.property.customerGatewayArns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerGetCustomerGatewayAssociationsResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetCustomerGatewayAssociationsResponse: networkmanager.NetworkManagerGetCustomerGatewayAssociationsResponse = { ... }
```

##### `customerGatewayAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsResponse.property.customerGatewayAssociations"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerGetDevicesRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetDevicesRequest: networkmanager.NetworkManagerGetDevicesRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `deviceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest.property.deviceIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest.property.siteId"></a>

- *Type:* `string`

---

### NetworkManagerGetDevicesResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetDevicesResponse: networkmanager.NetworkManagerGetDevicesResponse = { ... }
```

##### `devices`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesResponse.property.devices"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerDevice)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesResponse.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerGetLinkAssociationsRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetLinkAssociationsRequest: networkmanager.NetworkManagerGetLinkAssociationsRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest.property.linkId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerGetLinkAssociationsResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetLinkAssociationsResponse: networkmanager.NetworkManagerGetLinkAssociationsResponse = { ... }
```

##### `linkAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsResponse.property.linkAssociations"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerGetLinksRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetLinksRequest: networkmanager.NetworkManagerGetLinksRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkIds`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest.property.linkIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `provider`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest.property.provider"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest.property.siteId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest.property.type"></a>

- *Type:* `string`

---

### NetworkManagerGetLinksResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetLinksResponse: networkmanager.NetworkManagerGetLinksResponse = { ... }
```

##### `links`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksResponse.property.links"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLink`](#aws-cdk-sdk.networkmanager.NetworkManagerLink)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetLinksResponse.property.nextToken"></a>

- *Type:* `string`

---

### NetworkManagerGetSitesRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetSitesRequest: networkmanager.NetworkManagerGetSitesRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `siteIds`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest.property.siteIds"></a>

- *Type:* `string`[]

---

### NetworkManagerGetSitesResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetSitesResponse: networkmanager.NetworkManagerGetSitesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `sites`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetSitesResponse.property.sites"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerSite`](#aws-cdk-sdk.networkmanager.NetworkManagerSite)[]

---

### NetworkManagerGetTransitGatewayRegistrationsRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetTransitGatewayRegistrationsRequest: networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `transitGatewayArns`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest.property.transitGatewayArns"></a>

- *Type:* `string`[]

---

### NetworkManagerGetTransitGatewayRegistrationsResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGetTransitGatewayRegistrationsResponse: networkmanager.NetworkManagerGetTransitGatewayRegistrationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `transitGatewayRegistrations`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsResponse.property.transitGatewayRegistrations"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration`](#aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration)[]

---

### NetworkManagerGlobalNetwork <a name="aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerGlobalNetwork: networkmanager.NetworkManagerGlobalNetwork = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork.property.globalNetworkArn"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

### NetworkManagerLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerLink: networkmanager.NetworkManagerLink = { ... }
```

##### `bandwidth`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerBandwidth`](#aws-cdk-sdk.networkmanager.NetworkManagerBandwidth)

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.linkArn"></a>

- *Type:* `string`

---

##### `linkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.linkId"></a>

- *Type:* `string`

---

##### `provider`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.provider"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLink.property.type"></a>

- *Type:* `string`

---

### NetworkManagerLinkAssociation <a name="aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerLinkAssociation: networkmanager.NetworkManagerLinkAssociation = { ... }
```

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkAssociationState`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation.property.linkAssociationState"></a>

- *Type:* `string`

---

##### `linkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation.property.linkId"></a>

- *Type:* `string`

---

### NetworkManagerListTagsForResourceRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerListTagsForResourceRequest: networkmanager.NetworkManagerListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### NetworkManagerListTagsForResourceResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerListTagsForResourceResponse: networkmanager.NetworkManagerListTagsForResourceResponse = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceResponse.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

### NetworkManagerLocation <a name="aws-cdk-sdk.networkmanager.NetworkManagerLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerLocation: networkmanager.NetworkManagerLocation = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLocation.property.address"></a>

- *Type:* `string`

---

##### `latitude`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLocation.property.latitude"></a>

- *Type:* `string`

---

##### `longitude`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerLocation.property.longitude"></a>

- *Type:* `string`

---

### NetworkManagerRegisterTransitGatewayRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerRegisterTransitGatewayRequest: networkmanager.NetworkManagerRegisterTransitGatewayRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `transitGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest.property.transitGatewayArn"></a>

- *Type:* `string`

---

### NetworkManagerRegisterTransitGatewayResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerRegisterTransitGatewayResponse: networkmanager.NetworkManagerRegisterTransitGatewayResponse = { ... }
```

##### `transitGatewayRegistration`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayResponse.property.transitGatewayRegistration"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration`](#aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration)

---

### NetworkManagerSite <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerSite: networkmanager.NetworkManagerSite = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerLocation)

---

##### `siteArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.siteArn"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerSite.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

### NetworkManagerTag <a name="aws-cdk-sdk.networkmanager.NetworkManagerTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerTag: networkmanager.NetworkManagerTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTag.property.value"></a>

- *Type:* `string`

---

### NetworkManagerTagResourceRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerTagResourceRequest: networkmanager.NetworkManagerTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

### NetworkManagerTagResourceResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerTagResourceResponse: networkmanager.NetworkManagerTagResourceResponse = { ... }
```

### NetworkManagerTransitGatewayRegistration <a name="aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerTransitGatewayRegistration: networkmanager.NetworkManagerTransitGatewayRegistration = { ... }
```

##### `globalNetworkId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration.property.state"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistrationStateReason`](#aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistrationStateReason)

---

##### `transitGatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration.property.transitGatewayArn"></a>

- *Type:* `string`

---

### NetworkManagerTransitGatewayRegistrationStateReason <a name="aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistrationStateReason"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerTransitGatewayRegistrationStateReason: networkmanager.NetworkManagerTransitGatewayRegistrationStateReason = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistrationStateReason.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistrationStateReason.property.message"></a>

- *Type:* `string`

---

### NetworkManagerUntagResourceRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUntagResourceRequest: networkmanager.NetworkManagerUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### NetworkManagerUntagResourceResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUntagResourceResponse: networkmanager.NetworkManagerUntagResourceResponse = { ... }
```

### NetworkManagerUpdateDeviceRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateDeviceRequest: networkmanager.NetworkManagerUpdateDeviceRequest = { ... }
```

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.description"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerLocation)

---

##### `model`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.model"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.serialNumber"></a>

- *Type:* `string`

---

##### `siteId`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.siteId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.type"></a>

- *Type:* `string`

---

##### `vendor`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest.property.vendor"></a>

- *Type:* `string`

---

### NetworkManagerUpdateDeviceResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateDeviceResponse: networkmanager.NetworkManagerUpdateDeviceResponse = { ... }
```

##### `device`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceResponse.property.device"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerDevice)

---

### NetworkManagerUpdateGlobalNetworkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateGlobalNetworkRequest: networkmanager.NetworkManagerUpdateGlobalNetworkRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest.property.description"></a>

- *Type:* `string`

---

### NetworkManagerUpdateGlobalNetworkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateGlobalNetworkResponse: networkmanager.NetworkManagerUpdateGlobalNetworkResponse = { ... }
```

##### `globalNetwork`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkResponse.property.globalNetwork"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork)

---

### NetworkManagerUpdateLinkRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateLinkRequest: networkmanager.NetworkManagerUpdateLinkRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest.property.linkId"></a>

- *Type:* `string`

---

##### `bandwidth`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerBandwidth`](#aws-cdk-sdk.networkmanager.NetworkManagerBandwidth)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest.property.description"></a>

- *Type:* `string`

---

##### `provider`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest.property.provider"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest.property.type"></a>

- *Type:* `string`

---

### NetworkManagerUpdateLinkResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateLinkResponse: networkmanager.NetworkManagerUpdateLinkResponse = { ... }
```

##### `link`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkResponse.property.link"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLink`](#aws-cdk-sdk.networkmanager.NetworkManagerLink)

---

### NetworkManagerUpdateSiteRequest <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateSiteRequest: networkmanager.NetworkManagerUpdateSiteRequest = { ... }
```

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest.property.siteId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest.property.description"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerLocation)

---

### NetworkManagerUpdateSiteResponse <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

const networkManagerUpdateSiteResponse: networkmanager.NetworkManagerUpdateSiteResponse = { ... }
```

##### `site`<sup>Optional</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteResponse.property.site"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerSite`](#aws-cdk-sdk.networkmanager.NetworkManagerSite)

---

## Classes <a name="Classes"></a>

### NetworkManagerResponsesAssociateCustomerGateway <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGateway"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGateway.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesAssociateCustomerGateway(__scope: Construct, __resources: string[], __input: NetworkManagerAssociateCustomerGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `customerGatewayAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGateway.property.customerGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation)

---


### NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation(__scope: Construct, __resources: string[], __input: NetworkManagerAssociateCustomerGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerAssociateCustomerGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `customerGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.property.customerGatewayArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.property.linkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation.property.state"></a>

- *Type:* `string`

---


### NetworkManagerResponsesAssociateLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesAssociateLink(__scope: Construct, __resources: string[], __input: NetworkManagerAssociateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `linkAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLink.property.linkAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation)

---


### NetworkManagerResponsesAssociateLinkLinkAssociation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation(__scope: Construct, __resources: string[], __input: NetworkManagerAssociateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerAssociateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkAssociationState`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.property.linkAssociationState"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesAssociateLinkLinkAssociation.property.linkId"></a>

- *Type:* `string`

---


### NetworkManagerResponsesCreateDevice <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDevice"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDevice.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateDevice(__scope: Construct, __resources: string[], __input: NetworkManagerCreateDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDevice.property.device"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice)

---


### NetworkManagerResponsesCreateDeviceDevice <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateDeviceDevice(__scope: Construct, __resources: string[], __input: NetworkManagerCreateDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.description"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation)

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.model"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.type"></a>

- *Type:* `string`

---

##### `vendor`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDevice.property.vendor"></a>

- *Type:* `string`

---


### NetworkManagerResponsesCreateDeviceDeviceLocation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation(__scope: Construct, __resources: string[], __input: NetworkManagerCreateDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation.property.address"></a>

- *Type:* `string`

---

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation.property.latitude"></a>

- *Type:* `string`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateDeviceDeviceLocation.property.longitude"></a>

- *Type:* `string`

---


### NetworkManagerResponsesCreateGlobalNetwork <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetwork.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateGlobalNetwork(__scope: Construct, __resources: string[], __input: NetworkManagerCreateGlobalNetworkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest)

---



#### Properties <a name="Properties"></a>

##### `globalNetwork`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetwork.property.globalNetwork"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork)

---


### NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork(__scope: Construct, __resources: string[], __input: NetworkManagerCreateGlobalNetworkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateGlobalNetworkRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.property.globalNetworkArn"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---


### NetworkManagerResponsesCreateLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateLink(__scope: Construct, __resources: string[], __input: NetworkManagerCreateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `link`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLink.property.link"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink)

---


### NetworkManagerResponsesCreateLinkLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateLinkLink(__scope: Construct, __resources: string[], __input: NetworkManagerCreateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth)

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.linkArn"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.linkId"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.provider"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLink.property.type"></a>

- *Type:* `string`

---


### NetworkManagerResponsesCreateLinkLinkBandwidth <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth(__scope: Construct, __resources: string[], __input: NetworkManagerCreateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `downloadSpeed`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth.property.downloadSpeed"></a>

- *Type:* `number`

---

##### `uploadSpeed`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateLinkLinkBandwidth.property.uploadSpeed"></a>

- *Type:* `number`

---


### NetworkManagerResponsesCreateSite <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSite"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSite.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateSite(__scope: Construct, __resources: string[], __input: NetworkManagerCreateSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `site`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSite.property.site"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite)

---


### NetworkManagerResponsesCreateSiteSite <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateSiteSite(__scope: Construct, __resources: string[], __input: NetworkManagerCreateSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation)

---

##### `siteArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.siteArn"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSite.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---


### NetworkManagerResponsesCreateSiteSiteLocation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesCreateSiteSiteLocation(__scope: Construct, __resources: string[], __input: NetworkManagerCreateSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerCreateSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation.property.address"></a>

- *Type:* `string`

---

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation.property.latitude"></a>

- *Type:* `string`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesCreateSiteSiteLocation.property.longitude"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDeleteDevice <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDevice"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDevice.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteDevice(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDevice.property.device"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice)

---


### NetworkManagerResponsesDeleteDeviceDevice <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteDeviceDevice(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.description"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation)

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.model"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.type"></a>

- *Type:* `string`

---

##### `vendor`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDevice.property.vendor"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDeleteDeviceDeviceLocation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation.property.address"></a>

- *Type:* `string`

---

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation.property.latitude"></a>

- *Type:* `string`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteDeviceDeviceLocation.property.longitude"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDeleteGlobalNetwork <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetwork.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteGlobalNetwork(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteGlobalNetworkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest)

---



#### Properties <a name="Properties"></a>

##### `globalNetwork`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetwork.property.globalNetwork"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork)

---


### NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteGlobalNetworkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteGlobalNetworkRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.property.globalNetworkArn"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---


### NetworkManagerResponsesDeleteLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteLink(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `link`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLink.property.link"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink)

---


### NetworkManagerResponsesDeleteLinkLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteLinkLink(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth)

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.linkArn"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.linkId"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.provider"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLink.property.type"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDeleteLinkLinkBandwidth <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `downloadSpeed`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth.property.downloadSpeed"></a>

- *Type:* `number`

---

##### `uploadSpeed`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteLinkLinkBandwidth.property.uploadSpeed"></a>

- *Type:* `number`

---


### NetworkManagerResponsesDeleteSite <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSite"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSite.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteSite(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `site`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSite.property.site"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite)

---


### NetworkManagerResponsesDeleteSiteSite <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteSiteSite(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation)

---

##### `siteArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.siteArn"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSite.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---


### NetworkManagerResponsesDeleteSiteSiteLocation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation(__scope: Construct, __resources: string[], __input: NetworkManagerDeleteSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeleteSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation.property.address"></a>

- *Type:* `string`

---

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation.property.latitude"></a>

- *Type:* `string`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeleteSiteSiteLocation.property.longitude"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDeregisterTransitGateway <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGateway"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGateway.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeregisterTransitGateway(__scope: Construct, __resources: string[], __input: NetworkManagerDeregisterTransitGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `transitGatewayRegistration`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGateway.property.transitGatewayRegistration"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration)

---


### NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration(__scope: Construct, __resources: string[], __input: NetworkManagerDeregisterTransitGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration.property.state"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState)

---

##### `transitGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration.property.transitGatewayArn"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState(__scope: Construct, __resources: string[], __input: NetworkManagerDeregisterTransitGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDeregisterTransitGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState.property.message"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDescribeGlobalNetworks <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDescribeGlobalNetworks"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDescribeGlobalNetworks.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDescribeGlobalNetworks(__scope: Construct, __resources: string[], __input: NetworkManagerDescribeGlobalNetworksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDescribeGlobalNetworks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDescribeGlobalNetworks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDescribeGlobalNetworks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDescribeGlobalNetworksRequest)

---



#### Properties <a name="Properties"></a>

##### `globalNetworks`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDescribeGlobalNetworks.property.globalNetworks"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerGlobalNetwork)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDescribeGlobalNetworks.property.nextToken"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDisassociateCustomerGateway <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGateway"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGateway.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDisassociateCustomerGateway(__scope: Construct, __resources: string[], __input: NetworkManagerDisassociateCustomerGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `customerGatewayAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGateway.property.customerGatewayAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation)

---


### NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation(__scope: Construct, __resources: string[], __input: NetworkManagerDisassociateCustomerGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDisassociateCustomerGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `customerGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.property.customerGatewayArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.property.linkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation.property.state"></a>

- *Type:* `string`

---


### NetworkManagerResponsesDisassociateLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDisassociateLink(__scope: Construct, __resources: string[], __input: NetworkManagerDisassociateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `linkAssociation`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLink.property.linkAssociation"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation)

---


### NetworkManagerResponsesDisassociateLinkLinkAssociation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation(__scope: Construct, __resources: string[], __input: NetworkManagerDisassociateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerDisassociateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkAssociationState`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.property.linkAssociationState"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesDisassociateLinkLinkAssociation.property.linkId"></a>

- *Type:* `string`

---


### NetworkManagerResponsesFetchCustomerGatewayAssociations <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations(__scope: Construct, __resources: string[], __input: NetworkManagerGetCustomerGatewayAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetCustomerGatewayAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `customerGatewayAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations.property.customerGatewayAssociations"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerCustomerGatewayAssociation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchCustomerGatewayAssociations.property.nextToken"></a>

- *Type:* `string`

---


### NetworkManagerResponsesFetchDevices <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchDevices"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchDevices.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesFetchDevices(__scope: Construct, __resources: string[], __input: NetworkManagerGetDevicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetDevicesRequest)

---



#### Properties <a name="Properties"></a>

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchDevices.property.devices"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerDevice)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchDevices.property.nextToken"></a>

- *Type:* `string`

---


### NetworkManagerResponsesFetchLinkAssociations <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinkAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinkAssociations.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesFetchLinkAssociations(__scope: Construct, __resources: string[], __input: NetworkManagerGetLinkAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinkAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinkAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinkAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetLinkAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `linkAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinkAssociations.property.linkAssociations"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation`](#aws-cdk-sdk.networkmanager.NetworkManagerLinkAssociation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinkAssociations.property.nextToken"></a>

- *Type:* `string`

---


### NetworkManagerResponsesFetchLinks <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinks"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinks.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesFetchLinks(__scope: Construct, __resources: string[], __input: NetworkManagerGetLinksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetLinksRequest)

---



#### Properties <a name="Properties"></a>

##### `links`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinks.property.links"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerLink`](#aws-cdk-sdk.networkmanager.NetworkManagerLink)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchLinks.property.nextToken"></a>

- *Type:* `string`

---


### NetworkManagerResponsesFetchSites <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchSites"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchSites.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesFetchSites(__scope: Construct, __resources: string[], __input: NetworkManagerGetSitesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchSites.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchSites.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchSites.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetSitesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchSites.property.nextToken"></a>

- *Type:* `string`

---

##### `sites`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchSites.property.sites"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerSite`](#aws-cdk-sdk.networkmanager.NetworkManagerSite)[]

---


### NetworkManagerResponsesFetchTransitGatewayRegistrations <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations(__scope: Construct, __resources: string[], __input: NetworkManagerGetTransitGatewayRegistrationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerGetTransitGatewayRegistrationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations.property.nextToken"></a>

- *Type:* `string`

---

##### `transitGatewayRegistrations`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesFetchTransitGatewayRegistrations.property.transitGatewayRegistrations"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration`](#aws-cdk-sdk.networkmanager.NetworkManagerTransitGatewayRegistration)[]

---


### NetworkManagerResponsesListTagsForResource <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesListTagsForResource.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: NetworkManagerListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---


### NetworkManagerResponsesRegisterTransitGateway <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGateway"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGateway.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesRegisterTransitGateway(__scope: Construct, __resources: string[], __input: NetworkManagerRegisterTransitGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `transitGatewayRegistration`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGateway.property.transitGatewayRegistration"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration)

---


### NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration(__scope: Construct, __resources: string[], __input: NetworkManagerRegisterTransitGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration.property.state"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState)

---

##### `transitGatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration.property.transitGatewayArn"></a>

- *Type:* `string`

---


### NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState(__scope: Construct, __resources: string[], __input: NetworkManagerRegisterTransitGatewayRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerRegisterTransitGatewayRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState.property.message"></a>

- *Type:* `string`

---


### NetworkManagerResponsesUpdateDevice <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDevice"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDevice.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateDevice(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `device`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDevice.property.device"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice)

---


### NetworkManagerResponsesUpdateDeviceDevice <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateDeviceDevice(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.description"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.deviceId"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation)

---

##### `model`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.model"></a>

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.type"></a>

- *Type:* `string`

---

##### `vendor`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDevice.property.vendor"></a>

- *Type:* `string`

---


### NetworkManagerResponsesUpdateDeviceDeviceLocation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation.property.address"></a>

- *Type:* `string`

---

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation.property.latitude"></a>

- *Type:* `string`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateDeviceDeviceLocation.property.longitude"></a>

- *Type:* `string`

---


### NetworkManagerResponsesUpdateGlobalNetwork <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetwork.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateGlobalNetwork(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateGlobalNetworkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest)

---



#### Properties <a name="Properties"></a>

##### `globalNetwork`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetwork.property.globalNetwork"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork)

---


### NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateGlobalNetworkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateGlobalNetworkRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.property.globalNetworkArn"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---


### NetworkManagerResponsesUpdateLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateLink(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `link`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLink.property.link"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink)

---


### NetworkManagerResponsesUpdateLinkLink <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateLinkLink(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `bandwidth`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.bandwidth"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth)

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `linkArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.linkArn"></a>

- *Type:* `string`

---

##### `linkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.linkId"></a>

- *Type:* `string`

---

##### `provider`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.provider"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLink.property.type"></a>

- *Type:* `string`

---


### NetworkManagerResponsesUpdateLinkLinkBandwidth <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateLinkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateLinkRequest)

---



#### Properties <a name="Properties"></a>

##### `downloadSpeed`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth.property.downloadSpeed"></a>

- *Type:* `number`

---

##### `uploadSpeed`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateLinkLinkBandwidth.property.uploadSpeed"></a>

- *Type:* `number`

---


### NetworkManagerResponsesUpdateSite <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSite"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSite.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateSite(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `site`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSite.property.site"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite)

---


### NetworkManagerResponsesUpdateSiteSite <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateSiteSite(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.createdAt"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.description"></a>

- *Type:* `string`

---

##### `globalNetworkId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.globalNetworkId"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.location"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation`](#aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation)

---

##### `siteArn`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.siteArn"></a>

- *Type:* `string`

---

##### `siteId`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.siteId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSite.property.tags"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerTag`](#aws-cdk-sdk.networkmanager.NetworkManagerTag)[]

---


### NetworkManagerResponsesUpdateSiteSiteLocation <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation"></a>

#### Initializer <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation.Initializer"></a>

```typescript
import { networkmanager } from 'aws-cdk-sdk'

new networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation(__scope: Construct, __resources: string[], __input: NetworkManagerUpdateSiteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest`](#aws-cdk-sdk.networkmanager.NetworkManagerUpdateSiteRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation.property.address"></a>

- *Type:* `string`

---

##### `latitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation.property.latitude"></a>

- *Type:* `string`

---

##### `longitude`<sup>Required</sup> <a name="aws-cdk-sdk.networkmanager.NetworkManagerResponsesUpdateSiteSiteLocation.property.longitude"></a>

- *Type:* `string`

---



