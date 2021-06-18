import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class NetworkManagerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateCustomerGateway(input: shapes.NetworkManagerAssociateCustomerGatewayRequest): NetworkManagerAssociateCustomerGateway {
    return new NetworkManagerAssociateCustomerGateway(this, 'AssociateCustomerGateway', this.__resources, input);
  }

  public associateLink(input: shapes.NetworkManagerAssociateLinkRequest): NetworkManagerAssociateLink {
    return new NetworkManagerAssociateLink(this, 'AssociateLink', this.__resources, input);
  }

  public createDevice(input: shapes.NetworkManagerCreateDeviceRequest): NetworkManagerCreateDevice {
    return new NetworkManagerCreateDevice(this, 'CreateDevice', this.__resources, input);
  }

  public createGlobalNetwork(input: shapes.NetworkManagerCreateGlobalNetworkRequest): NetworkManagerCreateGlobalNetwork {
    return new NetworkManagerCreateGlobalNetwork(this, 'CreateGlobalNetwork', this.__resources, input);
  }

  public createLink(input: shapes.NetworkManagerCreateLinkRequest): NetworkManagerCreateLink {
    return new NetworkManagerCreateLink(this, 'CreateLink', this.__resources, input);
  }

  public createSite(input: shapes.NetworkManagerCreateSiteRequest): NetworkManagerCreateSite {
    return new NetworkManagerCreateSite(this, 'CreateSite', this.__resources, input);
  }

  public deleteDevice(input: shapes.NetworkManagerDeleteDeviceRequest): NetworkManagerDeleteDevice {
    return new NetworkManagerDeleteDevice(this, 'DeleteDevice', this.__resources, input);
  }

  public deleteGlobalNetwork(input: shapes.NetworkManagerDeleteGlobalNetworkRequest): NetworkManagerDeleteGlobalNetwork {
    return new NetworkManagerDeleteGlobalNetwork(this, 'DeleteGlobalNetwork', this.__resources, input);
  }

  public deleteLink(input: shapes.NetworkManagerDeleteLinkRequest): NetworkManagerDeleteLink {
    return new NetworkManagerDeleteLink(this, 'DeleteLink', this.__resources, input);
  }

  public deleteSite(input: shapes.NetworkManagerDeleteSiteRequest): NetworkManagerDeleteSite {
    return new NetworkManagerDeleteSite(this, 'DeleteSite', this.__resources, input);
  }

  public deregisterTransitGateway(input: shapes.NetworkManagerDeregisterTransitGatewayRequest): NetworkManagerDeregisterTransitGateway {
    return new NetworkManagerDeregisterTransitGateway(this, 'DeregisterTransitGateway', this.__resources, input);
  }

  public describeGlobalNetworks(input: shapes.NetworkManagerDescribeGlobalNetworksRequest): NetworkManagerDescribeGlobalNetworks {
    return new NetworkManagerDescribeGlobalNetworks(this, 'DescribeGlobalNetworks', this.__resources, input);
  }

  public disassociateCustomerGateway(input: shapes.NetworkManagerDisassociateCustomerGatewayRequest): NetworkManagerDisassociateCustomerGateway {
    return new NetworkManagerDisassociateCustomerGateway(this, 'DisassociateCustomerGateway', this.__resources, input);
  }

  public disassociateLink(input: shapes.NetworkManagerDisassociateLinkRequest): NetworkManagerDisassociateLink {
    return new NetworkManagerDisassociateLink(this, 'DisassociateLink', this.__resources, input);
  }

  public fetchCustomerGatewayAssociations(input: shapes.NetworkManagerGetCustomerGatewayAssociationsRequest): NetworkManagerFetchCustomerGatewayAssociations {
    return new NetworkManagerFetchCustomerGatewayAssociations(this, 'FetchCustomerGatewayAssociations', this.__resources, input);
  }

  public fetchDevices(input: shapes.NetworkManagerGetDevicesRequest): NetworkManagerFetchDevices {
    return new NetworkManagerFetchDevices(this, 'FetchDevices', this.__resources, input);
  }

  public fetchLinkAssociations(input: shapes.NetworkManagerGetLinkAssociationsRequest): NetworkManagerFetchLinkAssociations {
    return new NetworkManagerFetchLinkAssociations(this, 'FetchLinkAssociations', this.__resources, input);
  }

  public fetchLinks(input: shapes.NetworkManagerGetLinksRequest): NetworkManagerFetchLinks {
    return new NetworkManagerFetchLinks(this, 'FetchLinks', this.__resources, input);
  }

  public fetchSites(input: shapes.NetworkManagerGetSitesRequest): NetworkManagerFetchSites {
    return new NetworkManagerFetchSites(this, 'FetchSites', this.__resources, input);
  }

  public fetchTransitGatewayRegistrations(input: shapes.NetworkManagerGetTransitGatewayRegistrationsRequest): NetworkManagerFetchTransitGatewayRegistrations {
    return new NetworkManagerFetchTransitGatewayRegistrations(this, 'FetchTransitGatewayRegistrations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.NetworkManagerListTagsForResourceRequest): NetworkManagerListTagsForResource {
    return new NetworkManagerListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public registerTransitGateway(input: shapes.NetworkManagerRegisterTransitGatewayRequest): NetworkManagerRegisterTransitGateway {
    return new NetworkManagerRegisterTransitGateway(this, 'RegisterTransitGateway', this.__resources, input);
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

  public updateDevice(input: shapes.NetworkManagerUpdateDeviceRequest): NetworkManagerUpdateDevice {
    return new NetworkManagerUpdateDevice(this, 'UpdateDevice', this.__resources, input);
  }

  public updateGlobalNetwork(input: shapes.NetworkManagerUpdateGlobalNetworkRequest): NetworkManagerUpdateGlobalNetwork {
    return new NetworkManagerUpdateGlobalNetwork(this, 'UpdateGlobalNetwork', this.__resources, input);
  }

  public updateLink(input: shapes.NetworkManagerUpdateLinkRequest): NetworkManagerUpdateLink {
    return new NetworkManagerUpdateLink(this, 'UpdateLink', this.__resources, input);
  }

  public updateSite(input: shapes.NetworkManagerUpdateSiteRequest): NetworkManagerUpdateSite {
    return new NetworkManagerUpdateSite(this, 'UpdateSite', this.__resources, input);
  }

}

export class NetworkManagerAssociateCustomerGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerAssociateCustomerGatewayRequest) {
    super(scope, id);
  }

  public get customerGatewayAssociation(): NetworkManagerAssociateCustomerGatewayCustomerGatewayAssociation {
    return new NetworkManagerAssociateCustomerGatewayCustomerGatewayAssociation(this, 'CustomerGatewayAssociation', this.__resources, this.input);
  }

}

export class NetworkManagerAssociateCustomerGatewayCustomerGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerAssociateCustomerGatewayRequest) {
    super(scope, id);
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
          CustomerGatewayArn: this.input.customerGatewayArn,
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateCustomerGateway.CustomerGatewayAssociation.CustomerGatewayArn', props);
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
          CustomerGatewayArn: this.input.customerGatewayArn,
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateCustomerGateway.CustomerGatewayAssociation.GlobalNetworkId', props);
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
          CustomerGatewayArn: this.input.customerGatewayArn,
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateCustomerGateway.CustomerGatewayAssociation.DeviceId', props);
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
          CustomerGatewayArn: this.input.customerGatewayArn,
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateCustomerGateway.CustomerGatewayAssociation.LinkId', props);
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
          CustomerGatewayArn: this.input.customerGatewayArn,
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateCustomerGateway.CustomerGatewayAssociation.State', props);
    return resource.getResponseField('CustomerGatewayAssociation.State') as unknown as string;
  }

}

export class NetworkManagerAssociateLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerAssociateLinkRequest) {
    super(scope, id);
  }

  public get linkAssociation(): NetworkManagerAssociateLinkLinkAssociation {
    return new NetworkManagerAssociateLinkLinkAssociation(this, 'LinkAssociation', this.__resources, this.input);
  }

}

export class NetworkManagerAssociateLinkLinkAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerAssociateLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateLink.LinkAssociation.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateLink.LinkAssociation.DeviceId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateLink.LinkAssociation.LinkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateLink.LinkAssociation.LinkAssociationState', props);
    return resource.getResponseField('LinkAssociation.LinkAssociationState') as unknown as string;
  }

}

export class NetworkManagerCreateDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateDeviceRequest) {
    super(scope, id);
  }

  public get device(): NetworkManagerCreateDeviceDevice {
    return new NetworkManagerCreateDeviceDevice(this, 'Device', this.__resources, this.input);
  }

}

export class NetworkManagerCreateDeviceDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateDeviceRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.DeviceId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.DeviceArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Type', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Vendor', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Model', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.SerialNumber', props);
    return resource.getResponseField('Device.SerialNumber') as unknown as string;
  }

  public get location(): NetworkManagerCreateDeviceDeviceLocation {
    return new NetworkManagerCreateDeviceDeviceLocation(this, 'Location', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Tags', props);
    return resource.getResponseField('Device.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerCreateDeviceDeviceLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateDeviceRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Location.Address', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Location.Latitude', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevice.Device.Location.Longitude', props);
    return resource.getResponseField('Device.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerCreateGlobalNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateGlobalNetworkRequest) {
    super(scope, id);
  }

  public get globalNetwork(): NetworkManagerCreateGlobalNetworkGlobalNetwork {
    return new NetworkManagerCreateGlobalNetworkGlobalNetwork(this, 'GlobalNetwork', this.__resources, this.input);
  }

}

export class NetworkManagerCreateGlobalNetworkGlobalNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateGlobalNetworkRequest) {
    super(scope, id);
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
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalNetwork.GlobalNetwork.GlobalNetworkId', props);
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
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalNetwork.GlobalNetwork.GlobalNetworkArn', props);
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
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalNetwork.GlobalNetwork.Description', props);
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
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalNetwork.GlobalNetwork.CreatedAt', props);
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
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalNetwork.GlobalNetwork.State', props);
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
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalNetwork.GlobalNetwork.Tags', props);
    return resource.getResponseField('GlobalNetwork.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerCreateLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateLinkRequest) {
    super(scope, id);
  }

  public get link(): NetworkManagerCreateLinkLink {
    return new NetworkManagerCreateLinkLink(this, 'Link', this.__resources, this.input);
  }

}

export class NetworkManagerCreateLinkLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.LinkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.LinkArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.Type', props);
    return resource.getResponseField('Link.Type') as unknown as string;
  }

  public get bandwidth(): NetworkManagerCreateLinkLinkBandwidth {
    return new NetworkManagerCreateLinkLinkBandwidth(this, 'Bandwidth', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.Provider', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.Tags', props);
    return resource.getResponseField('Link.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerCreateLinkLinkBandwidth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.Bandwidth.UploadSpeed', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth.uploadSpeed,
            DownloadSpeed: this.input.bandwidth.downloadSpeed,
          },
          Provider: this.input.provider,
          SiteId: this.input.siteId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLink.Link.Bandwidth.DownloadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.DownloadSpeed') as unknown as number;
  }

}

export class NetworkManagerCreateSite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateSiteRequest) {
    super(scope, id);
  }

  public get site(): NetworkManagerCreateSiteSite {
    return new NetworkManagerCreateSiteSite(this, 'Site', this.__resources, this.input);
  }

}

export class NetworkManagerCreateSiteSite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateSiteRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.SiteArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.Description', props);
    return resource.getResponseField('Site.Description') as unknown as string;
  }

  public get location(): NetworkManagerCreateSiteSiteLocation {
    return new NetworkManagerCreateSiteSiteLocation(this, 'Location', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.Tags', props);
    return resource.getResponseField('Site.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerCreateSiteSiteLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerCreateSiteRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.Location.Address', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.Location.Latitude', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSite.Site.Location.Longitude', props);
    return resource.getResponseField('Site.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerDeleteDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteDeviceRequest) {
    super(scope, id);
  }

  public get device(): NetworkManagerDeleteDeviceDevice {
    return new NetworkManagerDeleteDeviceDevice(this, 'Device', this.__resources, this.input);
  }

}

export class NetworkManagerDeleteDeviceDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteDeviceRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.DeviceId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.DeviceArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Type', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Vendor', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Model', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.SerialNumber', props);
    return resource.getResponseField('Device.SerialNumber') as unknown as string;
  }

  public get location(): NetworkManagerDeleteDeviceDeviceLocation {
    return new NetworkManagerDeleteDeviceDeviceLocation(this, 'Location', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Tags', props);
    return resource.getResponseField('Device.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerDeleteDeviceDeviceLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteDeviceRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Location.Address', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Location.Latitude', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDevice.Device.Location.Longitude', props);
    return resource.getResponseField('Device.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerDeleteGlobalNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteGlobalNetworkRequest) {
    super(scope, id);
  }

  public get globalNetwork(): NetworkManagerDeleteGlobalNetworkGlobalNetwork {
    return new NetworkManagerDeleteGlobalNetworkGlobalNetwork(this, 'GlobalNetwork', this.__resources, this.input);
  }

}

export class NetworkManagerDeleteGlobalNetworkGlobalNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteGlobalNetworkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalNetwork.GlobalNetwork.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalNetwork.GlobalNetwork.GlobalNetworkArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalNetwork.GlobalNetwork.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalNetwork.GlobalNetwork.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalNetwork.GlobalNetwork.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalNetwork.GlobalNetwork.Tags', props);
    return resource.getResponseField('GlobalNetwork.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerDeleteLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteLinkRequest) {
    super(scope, id);
  }

  public get link(): NetworkManagerDeleteLinkLink {
    return new NetworkManagerDeleteLinkLink(this, 'Link', this.__resources, this.input);
  }

}

export class NetworkManagerDeleteLinkLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.LinkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.LinkArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.Type', props);
    return resource.getResponseField('Link.Type') as unknown as string;
  }

  public get bandwidth(): NetworkManagerDeleteLinkLinkBandwidth {
    return new NetworkManagerDeleteLinkLinkBandwidth(this, 'Bandwidth', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.Provider', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.Tags', props);
    return resource.getResponseField('Link.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerDeleteLinkLinkBandwidth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.Bandwidth.UploadSpeed', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLink.Link.Bandwidth.DownloadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.DownloadSpeed') as unknown as number;
  }

}

export class NetworkManagerDeleteSite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteSiteRequest) {
    super(scope, id);
  }

  public get site(): NetworkManagerDeleteSiteSite {
    return new NetworkManagerDeleteSiteSite(this, 'Site', this.__resources, this.input);
  }

}

export class NetworkManagerDeleteSiteSite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteSiteRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.SiteArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.Description', props);
    return resource.getResponseField('Site.Description') as unknown as string;
  }

  public get location(): NetworkManagerDeleteSiteSiteLocation {
    return new NetworkManagerDeleteSiteSiteLocation(this, 'Location', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.Tags', props);
    return resource.getResponseField('Site.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerDeleteSiteSiteLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeleteSiteRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.Location.Address', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.Location.Latitude', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSite.Site.Location.Longitude', props);
    return resource.getResponseField('Site.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerDeregisterTransitGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeregisterTransitGatewayRequest) {
    super(scope, id);
  }

  public get transitGatewayRegistration(): NetworkManagerDeregisterTransitGatewayTransitGatewayRegistration {
    return new NetworkManagerDeregisterTransitGatewayTransitGatewayRegistration(this, 'TransitGatewayRegistration', this.__resources, this.input);
  }

}

export class NetworkManagerDeregisterTransitGatewayTransitGatewayRegistration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeregisterTransitGatewayRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTransitGateway.TransitGatewayRegistration.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTransitGateway.TransitGatewayRegistration.TransitGatewayArn', props);
    return resource.getResponseField('TransitGatewayRegistration.TransitGatewayArn') as unknown as string;
  }

  public get state(): NetworkManagerDeregisterTransitGatewayTransitGatewayRegistrationState {
    return new NetworkManagerDeregisterTransitGatewayTransitGatewayRegistrationState(this, 'State', this.__resources, this.input);
  }

}

export class NetworkManagerDeregisterTransitGatewayTransitGatewayRegistrationState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDeregisterTransitGatewayRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTransitGateway.TransitGatewayRegistration.State.Code', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTransitGateway.TransitGatewayRegistration.State.Message', props);
    return resource.getResponseField('TransitGatewayRegistration.State.Message') as unknown as string;
  }

}

export class NetworkManagerDescribeGlobalNetworks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDescribeGlobalNetworksRequest) {
    super(scope, id);
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
          GlobalNetworkIds: this.input.globalNetworkIds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalNetworks.GlobalNetworks', props);
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
          GlobalNetworkIds: this.input.globalNetworkIds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalNetworks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerDisassociateCustomerGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDisassociateCustomerGatewayRequest) {
    super(scope, id);
  }

  public get customerGatewayAssociation(): NetworkManagerDisassociateCustomerGatewayCustomerGatewayAssociation {
    return new NetworkManagerDisassociateCustomerGatewayCustomerGatewayAssociation(this, 'CustomerGatewayAssociation', this.__resources, this.input);
  }

}

export class NetworkManagerDisassociateCustomerGatewayCustomerGatewayAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDisassociateCustomerGatewayRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          CustomerGatewayArn: this.input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateCustomerGateway.CustomerGatewayAssociation.CustomerGatewayArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          CustomerGatewayArn: this.input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateCustomerGateway.CustomerGatewayAssociation.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          CustomerGatewayArn: this.input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateCustomerGateway.CustomerGatewayAssociation.DeviceId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          CustomerGatewayArn: this.input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateCustomerGateway.CustomerGatewayAssociation.LinkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          CustomerGatewayArn: this.input.customerGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateCustomerGateway.CustomerGatewayAssociation.State', props);
    return resource.getResponseField('CustomerGatewayAssociation.State') as unknown as string;
  }

}

export class NetworkManagerDisassociateLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDisassociateLinkRequest) {
    super(scope, id);
  }

  public get linkAssociation(): NetworkManagerDisassociateLinkLinkAssociation {
    return new NetworkManagerDisassociateLinkLinkAssociation(this, 'LinkAssociation', this.__resources, this.input);
  }

}

export class NetworkManagerDisassociateLinkLinkAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerDisassociateLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateLink.LinkAssociation.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateLink.LinkAssociation.DeviceId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateLink.LinkAssociation.LinkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateLink.LinkAssociation.LinkAssociationState', props);
    return resource.getResponseField('LinkAssociation.LinkAssociationState') as unknown as string;
  }

}

export class NetworkManagerFetchCustomerGatewayAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerGetCustomerGatewayAssociationsRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          CustomerGatewayArns: this.input.customerGatewayArns,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomerGatewayAssociations.CustomerGatewayAssociations', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          CustomerGatewayArns: this.input.customerGatewayArns,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCustomerGatewayAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerFetchDevices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerGetDevicesRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceIds: this.input.deviceIds,
          SiteId: this.input.siteId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevices.Devices', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceIds: this.input.deviceIds,
          SiteId: this.input.siteId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerFetchLinkAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerGetLinkAssociationsRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLinkAssociations.LinkAssociations', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          LinkId: this.input.linkId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLinkAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerFetchLinks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerGetLinksRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkIds: this.input.linkIds,
          SiteId: this.input.siteId,
          Type: this.input.type,
          Provider: this.input.provider,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLinks.Links', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkIds: this.input.linkIds,
          SiteId: this.input.siteId,
          Type: this.input.type,
          Provider: this.input.provider,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLinks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerFetchSites extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerGetSitesRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteIds: this.input.siteIds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSites.Sites', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteIds: this.input.siteIds,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSites.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerFetchTransitGatewayRegistrations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerGetTransitGatewayRegistrationsRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArns: this.input.transitGatewayArns,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTransitGatewayRegistrations.TransitGatewayRegistrations', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArns: this.input.transitGatewayArns,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTransitGatewayRegistrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class NetworkManagerListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerRegisterTransitGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerRegisterTransitGatewayRequest) {
    super(scope, id);
  }

  public get transitGatewayRegistration(): NetworkManagerRegisterTransitGatewayTransitGatewayRegistration {
    return new NetworkManagerRegisterTransitGatewayTransitGatewayRegistration(this, 'TransitGatewayRegistration', this.__resources, this.input);
  }

}

export class NetworkManagerRegisterTransitGatewayTransitGatewayRegistration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerRegisterTransitGatewayRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTransitGateway.TransitGatewayRegistration.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTransitGateway.TransitGatewayRegistration.TransitGatewayArn', props);
    return resource.getResponseField('TransitGatewayRegistration.TransitGatewayArn') as unknown as string;
  }

  public get state(): NetworkManagerRegisterTransitGatewayTransitGatewayRegistrationState {
    return new NetworkManagerRegisterTransitGatewayTransitGatewayRegistrationState(this, 'State', this.__resources, this.input);
  }

}

export class NetworkManagerRegisterTransitGatewayTransitGatewayRegistrationState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerRegisterTransitGatewayRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTransitGateway.TransitGatewayRegistration.State.Code', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          TransitGatewayArn: this.input.transitGatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTransitGateway.TransitGatewayRegistration.State.Message', props);
    return resource.getResponseField('TransitGatewayRegistration.State.Message') as unknown as string;
  }

}

export class NetworkManagerUpdateDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateDeviceRequest) {
    super(scope, id);
  }

  public get device(): NetworkManagerUpdateDeviceDevice {
    return new NetworkManagerUpdateDeviceDevice(this, 'Device', this.__resources, this.input);
  }

}

export class NetworkManagerUpdateDeviceDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateDeviceRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.DeviceId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.DeviceArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Type', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Vendor', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Model', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.SerialNumber', props);
    return resource.getResponseField('Device.SerialNumber') as unknown as string;
  }

  public get location(): NetworkManagerUpdateDeviceDeviceLocation {
    return new NetworkManagerUpdateDeviceDeviceLocation(this, 'Location', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Tags', props);
    return resource.getResponseField('Device.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerUpdateDeviceDeviceLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateDeviceRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Location.Address', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Location.Latitude', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          DeviceId: this.input.deviceId,
          Description: this.input.description,
          Type: this.input.type,
          Vendor: this.input.vendor,
          Model: this.input.model,
          SerialNumber: this.input.serialNumber,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
          SiteId: this.input.siteId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevice.Device.Location.Longitude', props);
    return resource.getResponseField('Device.Location.Longitude') as unknown as string;
  }

}

export class NetworkManagerUpdateGlobalNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateGlobalNetworkRequest) {
    super(scope, id);
  }

  public get globalNetwork(): NetworkManagerUpdateGlobalNetworkGlobalNetwork {
    return new NetworkManagerUpdateGlobalNetworkGlobalNetwork(this, 'GlobalNetwork', this.__resources, this.input);
  }

}

export class NetworkManagerUpdateGlobalNetworkGlobalNetwork extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateGlobalNetworkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalNetwork.GlobalNetwork.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalNetwork.GlobalNetwork.GlobalNetworkArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalNetwork.GlobalNetwork.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalNetwork.GlobalNetwork.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalNetwork.GlobalNetwork.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGlobalNetwork.GlobalNetwork.Tags', props);
    return resource.getResponseField('GlobalNetwork.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerUpdateLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateLinkRequest) {
    super(scope, id);
  }

  public get link(): NetworkManagerUpdateLinkLink {
    return new NetworkManagerUpdateLinkLink(this, 'Link', this.__resources, this.input);
  }

}

export class NetworkManagerUpdateLinkLink extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.LinkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.LinkArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.Description', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.Type', props);
    return resource.getResponseField('Link.Type') as unknown as string;
  }

  public get bandwidth(): NetworkManagerUpdateLinkLinkBandwidth {
    return new NetworkManagerUpdateLinkLinkBandwidth(this, 'Bandwidth', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.Provider', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.Tags', props);
    return resource.getResponseField('Link.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerUpdateLinkLinkBandwidth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateLinkRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.Bandwidth.UploadSpeed', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          LinkId: this.input.linkId,
          Description: this.input.description,
          Type: this.input.type,
          Bandwidth: {
            UploadSpeed: this.input.bandwidth?.uploadSpeed,
            DownloadSpeed: this.input.bandwidth?.downloadSpeed,
          },
          Provider: this.input.provider,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLink.Link.Bandwidth.DownloadSpeed', props);
    return resource.getResponseField('Link.Bandwidth.DownloadSpeed') as unknown as number;
  }

}

export class NetworkManagerUpdateSite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateSiteRequest) {
    super(scope, id);
  }

  public get site(): NetworkManagerUpdateSiteSite {
    return new NetworkManagerUpdateSiteSite(this, 'Site', this.__resources, this.input);
  }

}

export class NetworkManagerUpdateSiteSite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateSiteRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.SiteId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.SiteArn', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.GlobalNetworkId', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.Description', props);
    return resource.getResponseField('Site.Description') as unknown as string;
  }

  public get location(): NetworkManagerUpdateSiteSiteLocation {
    return new NetworkManagerUpdateSiteSiteLocation(this, 'Location', this.__resources, this.input);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.CreatedAt', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.State', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.Tags', props);
    return resource.getResponseField('Site.Tags') as unknown as shapes.NetworkManagerTag[];
  }

}

export class NetworkManagerUpdateSiteSiteLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.NetworkManagerUpdateSiteRequest) {
    super(scope, id);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.Location.Address', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.Location.Latitude', props);
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
          GlobalNetworkId: this.input.globalNetworkId,
          SiteId: this.input.siteId,
          Description: this.input.description,
          Location: {
            Address: this.input.location?.address,
            Latitude: this.input.location?.latitude,
            Longitude: this.input.location?.longitude,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSite.Site.Location.Longitude', props);
    return resource.getResponseField('Site.Location.Longitude') as unknown as string;
  }

}

