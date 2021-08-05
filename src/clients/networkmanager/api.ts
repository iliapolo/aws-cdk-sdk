import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class NetworkManagerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateCustomerGateway(input: shapes.NetworkManagerAssociateCustomerGatewayRequest): NetworkManagerResponsesAssociateCustomerGateway {
    return new NetworkManagerResponsesAssociateCustomerGateway(this, this.__resources, input);
  }

  public associateLink(input: shapes.NetworkManagerAssociateLinkRequest): NetworkManagerResponsesAssociateLink {
    return new NetworkManagerResponsesAssociateLink(this, this.__resources, input);
  }

  public createDevice(input: shapes.NetworkManagerCreateDeviceRequest): NetworkManagerResponsesCreateDevice {
    return new NetworkManagerResponsesCreateDevice(this, this.__resources, input);
  }

  public createGlobalNetwork(input: shapes.NetworkManagerCreateGlobalNetworkRequest): NetworkManagerResponsesCreateGlobalNetwork {
    return new NetworkManagerResponsesCreateGlobalNetwork(this, this.__resources, input);
  }

  public createLink(input: shapes.NetworkManagerCreateLinkRequest): NetworkManagerResponsesCreateLink {
    return new NetworkManagerResponsesCreateLink(this, this.__resources, input);
  }

  public createSite(input: shapes.NetworkManagerCreateSiteRequest): NetworkManagerResponsesCreateSite {
    return new NetworkManagerResponsesCreateSite(this, this.__resources, input);
  }

  public deleteDevice(input: shapes.NetworkManagerDeleteDeviceRequest): NetworkManagerResponsesDeleteDevice {
    return new NetworkManagerResponsesDeleteDevice(this, this.__resources, input);
  }

  public deleteGlobalNetwork(input: shapes.NetworkManagerDeleteGlobalNetworkRequest): NetworkManagerResponsesDeleteGlobalNetwork {
    return new NetworkManagerResponsesDeleteGlobalNetwork(this, this.__resources, input);
  }

  public deleteLink(input: shapes.NetworkManagerDeleteLinkRequest): NetworkManagerResponsesDeleteLink {
    return new NetworkManagerResponsesDeleteLink(this, this.__resources, input);
  }

  public deleteSite(input: shapes.NetworkManagerDeleteSiteRequest): NetworkManagerResponsesDeleteSite {
    return new NetworkManagerResponsesDeleteSite(this, this.__resources, input);
  }

  public deregisterTransitGateway(input: shapes.NetworkManagerDeregisterTransitGatewayRequest): NetworkManagerResponsesDeregisterTransitGateway {
    return new NetworkManagerResponsesDeregisterTransitGateway(this, this.__resources, input);
  }

  public describeGlobalNetworks(input: shapes.NetworkManagerDescribeGlobalNetworksRequest): NetworkManagerResponsesDescribeGlobalNetworks {
    return new NetworkManagerResponsesDescribeGlobalNetworks(this, this.__resources, input);
  }

  public disassociateCustomerGateway(input: shapes.NetworkManagerDisassociateCustomerGatewayRequest): NetworkManagerResponsesDisassociateCustomerGateway {
    return new NetworkManagerResponsesDisassociateCustomerGateway(this, this.__resources, input);
  }

  public disassociateLink(input: shapes.NetworkManagerDisassociateLinkRequest): NetworkManagerResponsesDisassociateLink {
    return new NetworkManagerResponsesDisassociateLink(this, this.__resources, input);
  }

  public fetchCustomerGatewayAssociations(input: shapes.NetworkManagerGetCustomerGatewayAssociationsRequest): NetworkManagerResponsesFetchCustomerGatewayAssociations {
    return new NetworkManagerResponsesFetchCustomerGatewayAssociations(this, this.__resources, input);
  }

  public fetchDevices(input: shapes.NetworkManagerGetDevicesRequest): NetworkManagerResponsesFetchDevices {
    return new NetworkManagerResponsesFetchDevices(this, this.__resources, input);
  }

  public fetchLinkAssociations(input: shapes.NetworkManagerGetLinkAssociationsRequest): NetworkManagerResponsesFetchLinkAssociations {
    return new NetworkManagerResponsesFetchLinkAssociations(this, this.__resources, input);
  }

  public fetchLinks(input: shapes.NetworkManagerGetLinksRequest): NetworkManagerResponsesFetchLinks {
    return new NetworkManagerResponsesFetchLinks(this, this.__resources, input);
  }

  public fetchSites(input: shapes.NetworkManagerGetSitesRequest): NetworkManagerResponsesFetchSites {
    return new NetworkManagerResponsesFetchSites(this, this.__resources, input);
  }

  public fetchTransitGatewayRegistrations(input: shapes.NetworkManagerGetTransitGatewayRegistrationsRequest): NetworkManagerResponsesFetchTransitGatewayRegistrations {
    return new NetworkManagerResponsesFetchTransitGatewayRegistrations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.NetworkManagerListTagsForResourceRequest): NetworkManagerResponsesListTagsForResource {
    return new NetworkManagerResponsesListTagsForResource(this, this.__resources, input);
  }

  public registerTransitGateway(input: shapes.NetworkManagerRegisterTransitGatewayRequest): NetworkManagerResponsesRegisterTransitGateway {
    return new NetworkManagerResponsesRegisterTransitGateway(this, this.__resources, input);
  }

  public tagResource(input: shapes.NetworkManagerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.NetworkManagerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDevice(input: shapes.NetworkManagerUpdateDeviceRequest): NetworkManagerResponsesUpdateDevice {
    return new NetworkManagerResponsesUpdateDevice(this, this.__resources, input);
  }

  public updateGlobalNetwork(input: shapes.NetworkManagerUpdateGlobalNetworkRequest): NetworkManagerResponsesUpdateGlobalNetwork {
    return new NetworkManagerResponsesUpdateGlobalNetwork(this, this.__resources, input);
  }

  public updateLink(input: shapes.NetworkManagerUpdateLinkRequest): NetworkManagerResponsesUpdateLink {
    return new NetworkManagerResponsesUpdateLink(this, this.__resources, input);
  }

  public updateSite(input: shapes.NetworkManagerUpdateSiteRequest): NetworkManagerResponsesUpdateSite {
    return new NetworkManagerResponsesUpdateSite(this, this.__resources, input);
  }

}

export class NetworkManagerResponsesAssociateCustomerGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerAssociateCustomerGatewayRequest) {
  }

  public get customerGatewayAssociation(): NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation {
    return new NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesAssociateCustomerGatewayCustomerGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerAssociateCustomerGatewayRequest) {
  }

  public get customerGatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateCustomerGateway.CustomerGatewayAssociation.CustomerGatewayArn'),
        outputPath: 'CustomerGatewayAssociation.CustomerGatewayArn',
        parameters: {
          CustomerGatewayArn: this.__input.customerGatewayArn,
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomerGateway.CustomerGatewayAssociation.CustomerGatewayArn', props);
    return resource.getResponseField('CustomerGatewayAssociation.CustomerGatewayArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateCustomerGateway.CustomerGatewayAssociation.GlobalNetworkId'),
        outputPath: 'CustomerGatewayAssociation.GlobalNetworkId',
        parameters: {
          CustomerGatewayArn: this.__input.customerGatewayArn,
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomerGateway.CustomerGatewayAssociation.GlobalNetworkId', props);
    return resource.getResponseField('CustomerGatewayAssociation.GlobalNetworkId') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateCustomerGateway.CustomerGatewayAssociation.DeviceId'),
        outputPath: 'CustomerGatewayAssociation.DeviceId',
        parameters: {
          CustomerGatewayArn: this.__input.customerGatewayArn,
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomerGateway.CustomerGatewayAssociation.DeviceId', props);
    return resource.getResponseField('CustomerGatewayAssociation.DeviceId') as unknown as string;
  }

  public get linkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateCustomerGateway.CustomerGatewayAssociation.LinkId'),
        outputPath: 'CustomerGatewayAssociation.LinkId',
        parameters: {
          CustomerGatewayArn: this.__input.customerGatewayArn,
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomerGateway.CustomerGatewayAssociation.LinkId', props);
    return resource.getResponseField('CustomerGatewayAssociation.LinkId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateCustomerGateway.CustomerGatewayAssociation.State'),
        outputPath: 'CustomerGatewayAssociation.State',
        parameters: {
          CustomerGatewayArn: this.__input.customerGatewayArn,
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomerGateway.CustomerGatewayAssociation.State', props);
    return resource.getResponseField('CustomerGatewayAssociation.State') as unknown as string;
  }

}

export class NetworkManagerResponsesAssociateLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerAssociateLinkRequest) {
  }

  public get linkAssociation(): NetworkManagerResponsesAssociateLinkLinkAssociation {
    return new NetworkManagerResponsesAssociateLinkLinkAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesAssociateLinkLinkAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerAssociateLinkRequest) {
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateLink.LinkAssociation.GlobalNetworkId'),
        outputPath: 'LinkAssociation.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateLink.LinkAssociation.GlobalNetworkId', props);
    return resource.getResponseField('LinkAssociation.GlobalNetworkId') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateLink.LinkAssociation.DeviceId'),
        outputPath: 'LinkAssociation.DeviceId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateLink.LinkAssociation.DeviceId', props);
    return resource.getResponseField('LinkAssociation.DeviceId') as unknown as string;
  }

  public get linkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateLink.LinkAssociation.LinkId'),
        outputPath: 'LinkAssociation.LinkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateLink.LinkAssociation.LinkId', props);
    return resource.getResponseField('LinkAssociation.LinkId') as unknown as string;
  }

  public get linkAssociationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.AssociateLink.LinkAssociation.LinkAssociationState'),
        outputPath: 'LinkAssociation.LinkAssociationState',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateLink.LinkAssociation.LinkAssociationState', props);
    return resource.getResponseField('LinkAssociation.LinkAssociationState') as unknown as string;
  }

}

export class NetworkManagerResponsesCreateDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateDeviceRequest) {
  }

  public get device(): NetworkManagerResponsesCreateDeviceDevice {
    return new NetworkManagerResponsesCreateDeviceDevice(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesCreateDeviceDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateDeviceRequest) {
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.DeviceId'),
        outputPath: 'Device.DeviceId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.DeviceId', props);
    return resource.getResponseField('Device.DeviceId') as unknown as string;
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.DeviceArn'),
        outputPath: 'Device.DeviceArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.DeviceArn', props);
    return resource.getResponseField('Device.DeviceArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.GlobalNetworkId'),
        outputPath: 'Device.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.GlobalNetworkId', props);
    return resource.getResponseField('Device.GlobalNetworkId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Description'),
        outputPath: 'Device.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Description', props);
    return resource.getResponseField('Device.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Type'),
        outputPath: 'Device.Type',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Type', props);
    return resource.getResponseField('Device.Type') as unknown as string;
  }

  public get vendor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Vendor'),
        outputPath: 'Device.Vendor',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Vendor', props);
    return resource.getResponseField('Device.Vendor') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Model'),
        outputPath: 'Device.Model',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Model', props);
    return resource.getResponseField('Device.Model') as unknown as string;
  }

  public get serialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.SerialNumber'),
        outputPath: 'Device.SerialNumber',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.SerialNumber', props);
    return resource.getResponseField('Device.SerialNumber') as unknown as string;
  }

  public get location(): NetworkManagerResponsesCreateDeviceDeviceLocation {
    return new NetworkManagerResponsesCreateDeviceDeviceLocation(this.__scope, this.__resources, this.__input);
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.SiteId'),
        outputPath: 'Device.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.SiteId', props);
    return resource.getResponseField('Device.SiteId') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.CreatedAt'),
        outputPath: 'Device.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.CreatedAt', props);
    return resource.getResponseField('Device.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.State'),
        outputPath: 'Device.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.State', props);
    return resource.getResponseField('Device.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Tags'),
        outputPath: 'Device.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Tags', props);
    return resource.getResponseField('Device.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesCreateDeviceDeviceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateDeviceRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Location.Address'),
        outputPath: 'Device.Location.Address',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Location.Address', props);
    return resource.getResponseField('Device.Location.Address') as unknown as string;
  }

  public get latitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Location.Latitude'),
        outputPath: 'Device.Location.Latitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Location.Latitude', props);
    return resource.getResponseField('Device.Location.Latitude') as unknown as string;
  }

  public get longitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateDevice.Device.Location.Longitude'),
        outputPath: 'Device.Location.Longitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevice.Device.Location.Longitude', props);
    return resource.getResponseField('Device.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerResponsesCreateGlobalNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateGlobalNetworkRequest) {
  }

  public get globalNetwork(): NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork {
    return new NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesCreateGlobalNetworkGlobalNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateGlobalNetworkRequest) {
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateGlobalNetwork.GlobalNetwork.GlobalNetworkId'),
        outputPath: 'GlobalNetwork.GlobalNetworkId',
        parameters: {
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalNetwork.GlobalNetwork.GlobalNetworkId', props);
    return resource.getResponseField('GlobalNetwork.GlobalNetworkId') as unknown as string;
  }

  public get globalNetworkArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateGlobalNetwork.GlobalNetwork.GlobalNetworkArn'),
        outputPath: 'GlobalNetwork.GlobalNetworkArn',
        parameters: {
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalNetwork.GlobalNetwork.GlobalNetworkArn', props);
    return resource.getResponseField('GlobalNetwork.GlobalNetworkArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateGlobalNetwork.GlobalNetwork.Description'),
        outputPath: 'GlobalNetwork.Description',
        parameters: {
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalNetwork.GlobalNetwork.Description', props);
    return resource.getResponseField('GlobalNetwork.Description') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateGlobalNetwork.GlobalNetwork.CreatedAt'),
        outputPath: 'GlobalNetwork.CreatedAt',
        parameters: {
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalNetwork.GlobalNetwork.CreatedAt', props);
    return resource.getResponseField('GlobalNetwork.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateGlobalNetwork.GlobalNetwork.State'),
        outputPath: 'GlobalNetwork.State',
        parameters: {
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalNetwork.GlobalNetwork.State', props);
    return resource.getResponseField('GlobalNetwork.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateGlobalNetwork.GlobalNetwork.Tags'),
        outputPath: 'GlobalNetwork.Tags',
        parameters: {
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalNetwork.GlobalNetwork.Tags', props);
    return resource.getResponseField('GlobalNetwork.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesCreateLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateLinkRequest) {
  }

  public get link(): NetworkManagerResponsesCreateLinkLink {
    return new NetworkManagerResponsesCreateLinkLink(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesCreateLinkLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateLinkRequest) {
  }

  public get linkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.LinkId'),
        outputPath: 'Link.LinkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.LinkId', props);
    return resource.getResponseField('Link.LinkId') as unknown as string;
  }

  public get linkArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.LinkArn'),
        outputPath: 'Link.LinkArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.LinkArn', props);
    return resource.getResponseField('Link.LinkArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.GlobalNetworkId'),
        outputPath: 'Link.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.GlobalNetworkId', props);
    return resource.getResponseField('Link.GlobalNetworkId') as unknown as string;
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.SiteId'),
        outputPath: 'Link.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.SiteId', props);
    return resource.getResponseField('Link.SiteId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.Description'),
        outputPath: 'Link.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.Description', props);
    return resource.getResponseField('Link.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.Type'),
        outputPath: 'Link.Type',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.Type', props);
    return resource.getResponseField('Link.Type') as unknown as string;
  }

  public get bandwidth(): NetworkManagerResponsesCreateLinkLinkBandwidth {
    return new NetworkManagerResponsesCreateLinkLinkBandwidth(this.__scope, this.__resources, this.__input);
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.Provider'),
        outputPath: 'Link.Provider',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.Provider', props);
    return resource.getResponseField('Link.Provider') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.CreatedAt'),
        outputPath: 'Link.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.CreatedAt', props);
    return resource.getResponseField('Link.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.State'),
        outputPath: 'Link.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.State', props);
    return resource.getResponseField('Link.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.Tags'),
        outputPath: 'Link.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.Tags', props);
    return resource.getResponseField('Link.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesCreateLinkLinkBandwidth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateLinkRequest) {
  }

  public get uploadSpeed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.Bandwidth.UploadSpeed'),
        outputPath: 'Link.Bandwidth.UploadSpeed',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.Bandwidth.UploadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.UploadSpeed') as unknown as number;
  }

  public get downloadSpeed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateLink.Link.Bandwidth.DownloadSpeed'),
        outputPath: 'Link.Bandwidth.DownloadSpeed',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth.downloadSpeed,
          },
          Provider: this.__input.provider,
          SiteId: this.__input.siteId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLink.Link.Bandwidth.DownloadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.DownloadSpeed') as unknown as number;
  }

}

export class NetworkManagerResponsesCreateSite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateSiteRequest) {
  }

  public get site(): NetworkManagerResponsesCreateSiteSite {
    return new NetworkManagerResponsesCreateSiteSite(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesCreateSiteSite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateSiteRequest) {
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.SiteId'),
        outputPath: 'Site.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.SiteId', props);
    return resource.getResponseField('Site.SiteId') as unknown as string;
  }

  public get siteArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.SiteArn'),
        outputPath: 'Site.SiteArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.SiteArn', props);
    return resource.getResponseField('Site.SiteArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.GlobalNetworkId'),
        outputPath: 'Site.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.GlobalNetworkId', props);
    return resource.getResponseField('Site.GlobalNetworkId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.Description'),
        outputPath: 'Site.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.Description', props);
    return resource.getResponseField('Site.Description') as unknown as string;
  }

  public get location(): NetworkManagerResponsesCreateSiteSiteLocation {
    return new NetworkManagerResponsesCreateSiteSiteLocation(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.CreatedAt'),
        outputPath: 'Site.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.CreatedAt', props);
    return resource.getResponseField('Site.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.State'),
        outputPath: 'Site.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.State', props);
    return resource.getResponseField('Site.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.Tags'),
        outputPath: 'Site.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.Tags', props);
    return resource.getResponseField('Site.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesCreateSiteSiteLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerCreateSiteRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.Location.Address'),
        outputPath: 'Site.Location.Address',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.Location.Address', props);
    return resource.getResponseField('Site.Location.Address') as unknown as string;
  }

  public get latitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.Location.Latitude'),
        outputPath: 'Site.Location.Latitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.Location.Latitude', props);
    return resource.getResponseField('Site.Location.Latitude') as unknown as string;
  }

  public get longitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.CreateSite.Site.Location.Longitude'),
        outputPath: 'Site.Location.Longitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSite.Site.Location.Longitude', props);
    return resource.getResponseField('Site.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerResponsesDeleteDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteDeviceRequest) {
  }

  public get device(): NetworkManagerResponsesDeleteDeviceDevice {
    return new NetworkManagerResponsesDeleteDeviceDevice(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDeleteDeviceDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteDeviceRequest) {
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.DeviceId'),
        outputPath: 'Device.DeviceId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.DeviceId', props);
    return resource.getResponseField('Device.DeviceId') as unknown as string;
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.DeviceArn'),
        outputPath: 'Device.DeviceArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.DeviceArn', props);
    return resource.getResponseField('Device.DeviceArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.GlobalNetworkId'),
        outputPath: 'Device.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.GlobalNetworkId', props);
    return resource.getResponseField('Device.GlobalNetworkId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Description'),
        outputPath: 'Device.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Description', props);
    return resource.getResponseField('Device.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Type'),
        outputPath: 'Device.Type',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Type', props);
    return resource.getResponseField('Device.Type') as unknown as string;
  }

  public get vendor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Vendor'),
        outputPath: 'Device.Vendor',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Vendor', props);
    return resource.getResponseField('Device.Vendor') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Model'),
        outputPath: 'Device.Model',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Model', props);
    return resource.getResponseField('Device.Model') as unknown as string;
  }

  public get serialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.SerialNumber'),
        outputPath: 'Device.SerialNumber',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.SerialNumber', props);
    return resource.getResponseField('Device.SerialNumber') as unknown as string;
  }

  public get location(): NetworkManagerResponsesDeleteDeviceDeviceLocation {
    return new NetworkManagerResponsesDeleteDeviceDeviceLocation(this.__scope, this.__resources, this.__input);
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.SiteId'),
        outputPath: 'Device.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.SiteId', props);
    return resource.getResponseField('Device.SiteId') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.CreatedAt'),
        outputPath: 'Device.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.CreatedAt', props);
    return resource.getResponseField('Device.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.State'),
        outputPath: 'Device.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.State', props);
    return resource.getResponseField('Device.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Tags'),
        outputPath: 'Device.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Tags', props);
    return resource.getResponseField('Device.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesDeleteDeviceDeviceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteDeviceRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Location.Address'),
        outputPath: 'Device.Location.Address',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Location.Address', props);
    return resource.getResponseField('Device.Location.Address') as unknown as string;
  }

  public get latitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Location.Latitude'),
        outputPath: 'Device.Location.Latitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Location.Latitude', props);
    return resource.getResponseField('Device.Location.Latitude') as unknown as string;
  }

  public get longitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteDevice.Device.Location.Longitude'),
        outputPath: 'Device.Location.Longitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDevice.Device.Location.Longitude', props);
    return resource.getResponseField('Device.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerResponsesDeleteGlobalNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteGlobalNetworkRequest) {
  }

  public get globalNetwork(): NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork {
    return new NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDeleteGlobalNetworkGlobalNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteGlobalNetworkRequest) {
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteGlobalNetwork.GlobalNetwork.GlobalNetworkId'),
        outputPath: 'GlobalNetwork.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalNetwork.GlobalNetwork.GlobalNetworkId', props);
    return resource.getResponseField('GlobalNetwork.GlobalNetworkId') as unknown as string;
  }

  public get globalNetworkArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteGlobalNetwork.GlobalNetwork.GlobalNetworkArn'),
        outputPath: 'GlobalNetwork.GlobalNetworkArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalNetwork.GlobalNetwork.GlobalNetworkArn', props);
    return resource.getResponseField('GlobalNetwork.GlobalNetworkArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteGlobalNetwork.GlobalNetwork.Description'),
        outputPath: 'GlobalNetwork.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalNetwork.GlobalNetwork.Description', props);
    return resource.getResponseField('GlobalNetwork.Description') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteGlobalNetwork.GlobalNetwork.CreatedAt'),
        outputPath: 'GlobalNetwork.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalNetwork.GlobalNetwork.CreatedAt', props);
    return resource.getResponseField('GlobalNetwork.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteGlobalNetwork.GlobalNetwork.State'),
        outputPath: 'GlobalNetwork.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalNetwork.GlobalNetwork.State', props);
    return resource.getResponseField('GlobalNetwork.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteGlobalNetwork.GlobalNetwork.Tags'),
        outputPath: 'GlobalNetwork.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalNetwork.GlobalNetwork.Tags', props);
    return resource.getResponseField('GlobalNetwork.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesDeleteLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteLinkRequest) {
  }

  public get link(): NetworkManagerResponsesDeleteLinkLink {
    return new NetworkManagerResponsesDeleteLinkLink(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDeleteLinkLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteLinkRequest) {
  }

  public get linkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.LinkId'),
        outputPath: 'Link.LinkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.LinkId', props);
    return resource.getResponseField('Link.LinkId') as unknown as string;
  }

  public get linkArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.LinkArn'),
        outputPath: 'Link.LinkArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.LinkArn', props);
    return resource.getResponseField('Link.LinkArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.GlobalNetworkId'),
        outputPath: 'Link.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.GlobalNetworkId', props);
    return resource.getResponseField('Link.GlobalNetworkId') as unknown as string;
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.SiteId'),
        outputPath: 'Link.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.SiteId', props);
    return resource.getResponseField('Link.SiteId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.Description'),
        outputPath: 'Link.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.Description', props);
    return resource.getResponseField('Link.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.Type'),
        outputPath: 'Link.Type',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.Type', props);
    return resource.getResponseField('Link.Type') as unknown as string;
  }

  public get bandwidth(): NetworkManagerResponsesDeleteLinkLinkBandwidth {
    return new NetworkManagerResponsesDeleteLinkLinkBandwidth(this.__scope, this.__resources, this.__input);
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.Provider'),
        outputPath: 'Link.Provider',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.Provider', props);
    return resource.getResponseField('Link.Provider') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.CreatedAt'),
        outputPath: 'Link.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.CreatedAt', props);
    return resource.getResponseField('Link.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.State'),
        outputPath: 'Link.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.State', props);
    return resource.getResponseField('Link.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.Tags'),
        outputPath: 'Link.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.Tags', props);
    return resource.getResponseField('Link.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesDeleteLinkLinkBandwidth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteLinkRequest) {
  }

  public get uploadSpeed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.Bandwidth.UploadSpeed'),
        outputPath: 'Link.Bandwidth.UploadSpeed',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.Bandwidth.UploadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.UploadSpeed') as unknown as number;
  }

  public get downloadSpeed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteLink.Link.Bandwidth.DownloadSpeed'),
        outputPath: 'Link.Bandwidth.DownloadSpeed',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLink.Link.Bandwidth.DownloadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.DownloadSpeed') as unknown as number;
  }

}

export class NetworkManagerResponsesDeleteSite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteSiteRequest) {
  }

  public get site(): NetworkManagerResponsesDeleteSiteSite {
    return new NetworkManagerResponsesDeleteSiteSite(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDeleteSiteSite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteSiteRequest) {
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.SiteId'),
        outputPath: 'Site.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.SiteId', props);
    return resource.getResponseField('Site.SiteId') as unknown as string;
  }

  public get siteArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.SiteArn'),
        outputPath: 'Site.SiteArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.SiteArn', props);
    return resource.getResponseField('Site.SiteArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.GlobalNetworkId'),
        outputPath: 'Site.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.GlobalNetworkId', props);
    return resource.getResponseField('Site.GlobalNetworkId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.Description'),
        outputPath: 'Site.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.Description', props);
    return resource.getResponseField('Site.Description') as unknown as string;
  }

  public get location(): NetworkManagerResponsesDeleteSiteSiteLocation {
    return new NetworkManagerResponsesDeleteSiteSiteLocation(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.CreatedAt'),
        outputPath: 'Site.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.CreatedAt', props);
    return resource.getResponseField('Site.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.State'),
        outputPath: 'Site.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.State', props);
    return resource.getResponseField('Site.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.Tags'),
        outputPath: 'Site.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.Tags', props);
    return resource.getResponseField('Site.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesDeleteSiteSiteLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeleteSiteRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.Location.Address'),
        outputPath: 'Site.Location.Address',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.Location.Address', props);
    return resource.getResponseField('Site.Location.Address') as unknown as string;
  }

  public get latitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.Location.Latitude'),
        outputPath: 'Site.Location.Latitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.Location.Latitude', props);
    return resource.getResponseField('Site.Location.Latitude') as unknown as string;
  }

  public get longitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeleteSite.Site.Location.Longitude'),
        outputPath: 'Site.Location.Longitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSite.Site.Location.Longitude', props);
    return resource.getResponseField('Site.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerResponsesDeregisterTransitGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeregisterTransitGatewayRequest) {
  }

  public get transitGatewayRegistration(): NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration {
    return new NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeregisterTransitGatewayRequest) {
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeregisterTransitGateway.TransitGatewayRegistration.GlobalNetworkId'),
        outputPath: 'TransitGatewayRegistration.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTransitGateway.TransitGatewayRegistration.GlobalNetworkId', props);
    return resource.getResponseField('TransitGatewayRegistration.GlobalNetworkId') as unknown as string;
  }

  public get transitGatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeregisterTransitGateway.TransitGatewayRegistration.TransitGatewayArn'),
        outputPath: 'TransitGatewayRegistration.TransitGatewayArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTransitGateway.TransitGatewayRegistration.TransitGatewayArn', props);
    return resource.getResponseField('TransitGatewayRegistration.TransitGatewayArn') as unknown as string;
  }

  public get state(): NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState {
    return new NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDeregisterTransitGatewayTransitGatewayRegistrationState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDeregisterTransitGatewayRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeregisterTransitGateway.TransitGatewayRegistration.State.Code'),
        outputPath: 'TransitGatewayRegistration.State.Code',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTransitGateway.TransitGatewayRegistration.State.Code', props);
    return resource.getResponseField('TransitGatewayRegistration.State.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DeregisterTransitGateway.TransitGatewayRegistration.State.Message'),
        outputPath: 'TransitGatewayRegistration.State.Message',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTransitGateway.TransitGatewayRegistration.State.Message', props);
    return resource.getResponseField('TransitGatewayRegistration.State.Message') as unknown as string;
  }

}

export class NetworkManagerResponsesDescribeGlobalNetworks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDescribeGlobalNetworksRequest) {
  }

  public get globalNetworks(): shapes.NetworkManagerGlobalNetwork[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalNetworks',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DescribeGlobalNetworks.GlobalNetworks'),
        outputPath: 'GlobalNetworks',
        parameters: {
          GlobalNetworkIds: this.__input.globalNetworkIds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalNetworks.GlobalNetworks', props);
    return resource.getResponseField('GlobalNetworks') as unknown as shapes.NetworkManagerGlobalNetwork[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalNetworks',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DescribeGlobalNetworks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GlobalNetworkIds: this.__input.globalNetworkIds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalNetworks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerResponsesDisassociateCustomerGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDisassociateCustomerGatewayRequest) {
  }

  public get customerGatewayAssociation(): NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation {
    return new NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDisassociateCustomerGatewayCustomerGatewayAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDisassociateCustomerGatewayRequest) {
  }

  public get customerGatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateCustomerGateway.CustomerGatewayAssociation.CustomerGatewayArn'),
        outputPath: 'CustomerGatewayAssociation.CustomerGatewayArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          CustomerGatewayArn: this.__input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomerGateway.CustomerGatewayAssociation.CustomerGatewayArn', props);
    return resource.getResponseField('CustomerGatewayAssociation.CustomerGatewayArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateCustomerGateway.CustomerGatewayAssociation.GlobalNetworkId'),
        outputPath: 'CustomerGatewayAssociation.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          CustomerGatewayArn: this.__input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomerGateway.CustomerGatewayAssociation.GlobalNetworkId', props);
    return resource.getResponseField('CustomerGatewayAssociation.GlobalNetworkId') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateCustomerGateway.CustomerGatewayAssociation.DeviceId'),
        outputPath: 'CustomerGatewayAssociation.DeviceId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          CustomerGatewayArn: this.__input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomerGateway.CustomerGatewayAssociation.DeviceId', props);
    return resource.getResponseField('CustomerGatewayAssociation.DeviceId') as unknown as string;
  }

  public get linkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateCustomerGateway.CustomerGatewayAssociation.LinkId'),
        outputPath: 'CustomerGatewayAssociation.LinkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          CustomerGatewayArn: this.__input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomerGateway.CustomerGatewayAssociation.LinkId', props);
    return resource.getResponseField('CustomerGatewayAssociation.LinkId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomerGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateCustomerGateway.CustomerGatewayAssociation.State'),
        outputPath: 'CustomerGatewayAssociation.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          CustomerGatewayArn: this.__input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomerGateway.CustomerGatewayAssociation.State', props);
    return resource.getResponseField('CustomerGatewayAssociation.State') as unknown as string;
  }

}

export class NetworkManagerResponsesDisassociateLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDisassociateLinkRequest) {
  }

  public get linkAssociation(): NetworkManagerResponsesDisassociateLinkLinkAssociation {
    return new NetworkManagerResponsesDisassociateLinkLinkAssociation(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesDisassociateLinkLinkAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerDisassociateLinkRequest) {
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateLink.LinkAssociation.GlobalNetworkId'),
        outputPath: 'LinkAssociation.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateLink.LinkAssociation.GlobalNetworkId', props);
    return resource.getResponseField('LinkAssociation.GlobalNetworkId') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateLink.LinkAssociation.DeviceId'),
        outputPath: 'LinkAssociation.DeviceId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateLink.LinkAssociation.DeviceId', props);
    return resource.getResponseField('LinkAssociation.DeviceId') as unknown as string;
  }

  public get linkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateLink.LinkAssociation.LinkId'),
        outputPath: 'LinkAssociation.LinkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateLink.LinkAssociation.LinkId', props);
    return resource.getResponseField('LinkAssociation.LinkId') as unknown as string;
  }

  public get linkAssociationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.DisassociateLink.LinkAssociation.LinkAssociationState'),
        outputPath: 'LinkAssociation.LinkAssociationState',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateLink.LinkAssociation.LinkAssociationState', props);
    return resource.getResponseField('LinkAssociation.LinkAssociationState') as unknown as string;
  }

}

export class NetworkManagerResponsesFetchCustomerGatewayAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerGetCustomerGatewayAssociationsRequest) {
  }

  public get customerGatewayAssociations(): shapes.NetworkManagerCustomerGatewayAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomerGatewayAssociations',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetCustomerGatewayAssociations.CustomerGatewayAssociations'),
        outputPath: 'CustomerGatewayAssociations',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          CustomerGatewayArns: this.__input.customerGatewayArns,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomerGatewayAssociations.CustomerGatewayAssociations', props);
    return resource.getResponseField('CustomerGatewayAssociations') as unknown as shapes.NetworkManagerCustomerGatewayAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCustomerGatewayAssociations',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetCustomerGatewayAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          CustomerGatewayArns: this.__input.customerGatewayArns,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCustomerGatewayAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerResponsesFetchDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerGetDevicesRequest) {
  }

  public get devices(): shapes.NetworkManagerDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevices',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetDevices.Devices'),
        outputPath: 'Devices',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceIds: this.__input.deviceIds,
          SiteId: this.__input.siteId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevices.Devices', props);
    return resource.getResponseField('Devices') as unknown as shapes.NetworkManagerDevice[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevices',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetDevices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceIds: this.__input.deviceIds,
          SiteId: this.__input.siteId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerResponsesFetchLinkAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerGetLinkAssociationsRequest) {
  }

  public get linkAssociations(): shapes.NetworkManagerLinkAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLinkAssociations',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetLinkAssociations.LinkAssociations'),
        outputPath: 'LinkAssociations',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLinkAssociations.LinkAssociations', props);
    return resource.getResponseField('LinkAssociations') as unknown as shapes.NetworkManagerLinkAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLinkAssociations',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetLinkAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          LinkId: this.__input.linkId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLinkAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerResponsesFetchLinks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerGetLinksRequest) {
  }

  public get links(): shapes.NetworkManagerLink[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLinks',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetLinks.Links'),
        outputPath: 'Links',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkIds: this.__input.linkIds,
          SiteId: this.__input.siteId,
          Type: this.__input.type,
          Provider: this.__input.provider,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLinks.Links', props);
    return resource.getResponseField('Links') as unknown as shapes.NetworkManagerLink[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLinks',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetLinks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkIds: this.__input.linkIds,
          SiteId: this.__input.siteId,
          Type: this.__input.type,
          Provider: this.__input.provider,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerResponsesFetchSites {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerGetSitesRequest) {
  }

  public get sites(): shapes.NetworkManagerSite[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSites',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetSites.Sites'),
        outputPath: 'Sites',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteIds: this.__input.siteIds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSites.Sites', props);
    return resource.getResponseField('Sites') as unknown as shapes.NetworkManagerSite[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSites',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetSites.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteIds: this.__input.siteIds,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSites.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerResponsesFetchTransitGatewayRegistrations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerGetTransitGatewayRegistrationsRequest) {
  }

  public get transitGatewayRegistrations(): shapes.NetworkManagerTransitGatewayRegistration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTransitGatewayRegistrations',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetTransitGatewayRegistrations.TransitGatewayRegistrations'),
        outputPath: 'TransitGatewayRegistrations',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArns: this.__input.transitGatewayArns,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTransitGatewayRegistrations.TransitGatewayRegistrations', props);
    return resource.getResponseField('TransitGatewayRegistrations') as unknown as shapes.NetworkManagerTransitGatewayRegistration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTransitGatewayRegistrations',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.GetTransitGatewayRegistrations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArns: this.__input.transitGatewayArns,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTransitGatewayRegistrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerListTagsForResourceRequest) {
  }

  public get tagList(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.ListTagsForResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesRegisterTransitGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerRegisterTransitGatewayRequest) {
  }

  public get transitGatewayRegistration(): NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration {
    return new NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerRegisterTransitGatewayRequest) {
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.RegisterTransitGateway.TransitGatewayRegistration.GlobalNetworkId'),
        outputPath: 'TransitGatewayRegistration.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTransitGateway.TransitGatewayRegistration.GlobalNetworkId', props);
    return resource.getResponseField('TransitGatewayRegistration.GlobalNetworkId') as unknown as string;
  }

  public get transitGatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.RegisterTransitGateway.TransitGatewayRegistration.TransitGatewayArn'),
        outputPath: 'TransitGatewayRegistration.TransitGatewayArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTransitGateway.TransitGatewayRegistration.TransitGatewayArn', props);
    return resource.getResponseField('TransitGatewayRegistration.TransitGatewayArn') as unknown as string;
  }

  public get state(): NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState {
    return new NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesRegisterTransitGatewayTransitGatewayRegistrationState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerRegisterTransitGatewayRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.RegisterTransitGateway.TransitGatewayRegistration.State.Code'),
        outputPath: 'TransitGatewayRegistration.State.Code',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTransitGateway.TransitGatewayRegistration.State.Code', props);
    return resource.getResponseField('TransitGatewayRegistration.State.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTransitGateway',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.RegisterTransitGateway.TransitGatewayRegistration.State.Message'),
        outputPath: 'TransitGatewayRegistration.State.Message',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          TransitGatewayArn: this.__input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTransitGateway.TransitGatewayRegistration.State.Message', props);
    return resource.getResponseField('TransitGatewayRegistration.State.Message') as unknown as string;
  }

}

export class NetworkManagerResponsesUpdateDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateDeviceRequest) {
  }

  public get device(): NetworkManagerResponsesUpdateDeviceDevice {
    return new NetworkManagerResponsesUpdateDeviceDevice(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesUpdateDeviceDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateDeviceRequest) {
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.DeviceId'),
        outputPath: 'Device.DeviceId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.DeviceId', props);
    return resource.getResponseField('Device.DeviceId') as unknown as string;
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.DeviceArn'),
        outputPath: 'Device.DeviceArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.DeviceArn', props);
    return resource.getResponseField('Device.DeviceArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.GlobalNetworkId'),
        outputPath: 'Device.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.GlobalNetworkId', props);
    return resource.getResponseField('Device.GlobalNetworkId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Description'),
        outputPath: 'Device.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Description', props);
    return resource.getResponseField('Device.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Type'),
        outputPath: 'Device.Type',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Type', props);
    return resource.getResponseField('Device.Type') as unknown as string;
  }

  public get vendor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Vendor'),
        outputPath: 'Device.Vendor',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Vendor', props);
    return resource.getResponseField('Device.Vendor') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Model'),
        outputPath: 'Device.Model',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Model', props);
    return resource.getResponseField('Device.Model') as unknown as string;
  }

  public get serialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.SerialNumber'),
        outputPath: 'Device.SerialNumber',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.SerialNumber', props);
    return resource.getResponseField('Device.SerialNumber') as unknown as string;
  }

  public get location(): NetworkManagerResponsesUpdateDeviceDeviceLocation {
    return new NetworkManagerResponsesUpdateDeviceDeviceLocation(this.__scope, this.__resources, this.__input);
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.SiteId'),
        outputPath: 'Device.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.SiteId', props);
    return resource.getResponseField('Device.SiteId') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.CreatedAt'),
        outputPath: 'Device.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.CreatedAt', props);
    return resource.getResponseField('Device.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.State'),
        outputPath: 'Device.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.State', props);
    return resource.getResponseField('Device.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Tags'),
        outputPath: 'Device.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Tags', props);
    return resource.getResponseField('Device.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesUpdateDeviceDeviceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateDeviceRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Location.Address'),
        outputPath: 'Device.Location.Address',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Location.Address', props);
    return resource.getResponseField('Device.Location.Address') as unknown as string;
  }

  public get latitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Location.Latitude'),
        outputPath: 'Device.Location.Latitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Location.Latitude', props);
    return resource.getResponseField('Device.Location.Latitude') as unknown as string;
  }

  public get longitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateDevice.Device.Location.Longitude'),
        outputPath: 'Device.Location.Longitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          DeviceId: this.__input.deviceId,
          Description: this.__input.description,
          Type: this.__input.type,
          Vendor: this.__input.vendor,
          Model: this.__input.model,
          SerialNumber: this.__input.serialNumber,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
          SiteId: this.__input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevice.Device.Location.Longitude', props);
    return resource.getResponseField('Device.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerResponsesUpdateGlobalNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateGlobalNetworkRequest) {
  }

  public get globalNetwork(): NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork {
    return new NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesUpdateGlobalNetworkGlobalNetwork {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateGlobalNetworkRequest) {
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateGlobalNetwork.GlobalNetwork.GlobalNetworkId'),
        outputPath: 'GlobalNetwork.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalNetwork.GlobalNetwork.GlobalNetworkId', props);
    return resource.getResponseField('GlobalNetwork.GlobalNetworkId') as unknown as string;
  }

  public get globalNetworkArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateGlobalNetwork.GlobalNetwork.GlobalNetworkArn'),
        outputPath: 'GlobalNetwork.GlobalNetworkArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalNetwork.GlobalNetwork.GlobalNetworkArn', props);
    return resource.getResponseField('GlobalNetwork.GlobalNetworkArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateGlobalNetwork.GlobalNetwork.Description'),
        outputPath: 'GlobalNetwork.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalNetwork.GlobalNetwork.Description', props);
    return resource.getResponseField('GlobalNetwork.Description') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateGlobalNetwork.GlobalNetwork.CreatedAt'),
        outputPath: 'GlobalNetwork.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalNetwork.GlobalNetwork.CreatedAt', props);
    return resource.getResponseField('GlobalNetwork.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateGlobalNetwork.GlobalNetwork.State'),
        outputPath: 'GlobalNetwork.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalNetwork.GlobalNetwork.State', props);
    return resource.getResponseField('GlobalNetwork.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalNetwork',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateGlobalNetwork.GlobalNetwork.Tags'),
        outputPath: 'GlobalNetwork.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGlobalNetwork.GlobalNetwork.Tags', props);
    return resource.getResponseField('GlobalNetwork.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesUpdateLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateLinkRequest) {
  }

  public get link(): NetworkManagerResponsesUpdateLinkLink {
    return new NetworkManagerResponsesUpdateLinkLink(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesUpdateLinkLink {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateLinkRequest) {
  }

  public get linkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.LinkId'),
        outputPath: 'Link.LinkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.LinkId', props);
    return resource.getResponseField('Link.LinkId') as unknown as string;
  }

  public get linkArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.LinkArn'),
        outputPath: 'Link.LinkArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.LinkArn', props);
    return resource.getResponseField('Link.LinkArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.GlobalNetworkId'),
        outputPath: 'Link.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.GlobalNetworkId', props);
    return resource.getResponseField('Link.GlobalNetworkId') as unknown as string;
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.SiteId'),
        outputPath: 'Link.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.SiteId', props);
    return resource.getResponseField('Link.SiteId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.Description'),
        outputPath: 'Link.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.Description', props);
    return resource.getResponseField('Link.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.Type'),
        outputPath: 'Link.Type',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.Type', props);
    return resource.getResponseField('Link.Type') as unknown as string;
  }

  public get bandwidth(): NetworkManagerResponsesUpdateLinkLinkBandwidth {
    return new NetworkManagerResponsesUpdateLinkLinkBandwidth(this.__scope, this.__resources, this.__input);
  }

  public get provider(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.Provider'),
        outputPath: 'Link.Provider',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.Provider', props);
    return resource.getResponseField('Link.Provider') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.CreatedAt'),
        outputPath: 'Link.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.CreatedAt', props);
    return resource.getResponseField('Link.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.State'),
        outputPath: 'Link.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.State', props);
    return resource.getResponseField('Link.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.Tags'),
        outputPath: 'Link.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.Tags', props);
    return resource.getResponseField('Link.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesUpdateLinkLinkBandwidth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateLinkRequest) {
  }

  public get uploadSpeed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.Bandwidth.UploadSpeed'),
        outputPath: 'Link.Bandwidth.UploadSpeed',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.Bandwidth.UploadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.UploadSpeed') as unknown as number;
  }

  public get downloadSpeed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLink',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateLink.Link.Bandwidth.DownloadSpeed'),
        outputPath: 'Link.Bandwidth.DownloadSpeed',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          LinkId: this.__input.linkId,
          Description: this.__input.description,
          Type: this.__input.type,
          Bandwidth: {
            UploadSpeed: this.__input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.__input.bandwidth?.downloadSpeed,
          },
          Provider: this.__input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLink.Link.Bandwidth.DownloadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.DownloadSpeed') as unknown as number;
  }

}

export class NetworkManagerResponsesUpdateSite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateSiteRequest) {
  }

  public get site(): NetworkManagerResponsesUpdateSiteSite {
    return new NetworkManagerResponsesUpdateSiteSite(this.__scope, this.__resources, this.__input);
  }

}

export class NetworkManagerResponsesUpdateSiteSite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateSiteRequest) {
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.SiteId'),
        outputPath: 'Site.SiteId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.SiteId', props);
    return resource.getResponseField('Site.SiteId') as unknown as string;
  }

  public get siteArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.SiteArn'),
        outputPath: 'Site.SiteArn',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.SiteArn', props);
    return resource.getResponseField('Site.SiteArn') as unknown as string;
  }

  public get globalNetworkId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.GlobalNetworkId'),
        outputPath: 'Site.GlobalNetworkId',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.GlobalNetworkId', props);
    return resource.getResponseField('Site.GlobalNetworkId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.Description'),
        outputPath: 'Site.Description',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.Description', props);
    return resource.getResponseField('Site.Description') as unknown as string;
  }

  public get location(): NetworkManagerResponsesUpdateSiteSiteLocation {
    return new NetworkManagerResponsesUpdateSiteSiteLocation(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.CreatedAt'),
        outputPath: 'Site.CreatedAt',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.CreatedAt', props);
    return resource.getResponseField('Site.CreatedAt') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.State'),
        outputPath: 'Site.State',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.State', props);
    return resource.getResponseField('Site.State') as unknown as string;
  }

  public get tags(): shapes.NetworkManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.Tags'),
        outputPath: 'Site.Tags',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.Tags', props);
    return resource.getResponseField('Site.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerResponsesUpdateSiteSiteLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.NetworkManagerUpdateSiteRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.Location.Address'),
        outputPath: 'Site.Location.Address',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.Location.Address', props);
    return resource.getResponseField('Site.Location.Address') as unknown as string;
  }

  public get latitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.Location.Latitude'),
        outputPath: 'Site.Location.Latitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.Location.Latitude', props);
    return resource.getResponseField('Site.Location.Latitude') as unknown as string;
  }

  public get longitude(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSite',
        service: 'NetworkManager',
        physicalResourceId: cr.PhysicalResourceId.of('NetworkManager.UpdateSite.Site.Location.Longitude'),
        outputPath: 'Site.Location.Longitude',
        parameters: {
          GlobalNetworkId: this.__input.globalNetworkId,
          SiteId: this.__input.siteId,
          Description: this.__input.description,
          Location: {
            Address: this.__input.location?.address,
            Latitude: this.__input.location?.latitude,
            Longitude: this.__input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSite.Site.Location.Longitude', props);
    return resource.getResponseField('Site.Location.Longitude') as unknown as string;
  }

}

