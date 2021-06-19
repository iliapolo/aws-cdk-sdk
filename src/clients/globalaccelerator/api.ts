import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GlobalAcceleratorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public advertiseByoipCidr(input: shapes.GlobalAcceleratorAdvertiseByoipCidrRequest): GlobalAcceleratorResponsesAdvertiseByoipCidr {
    return new GlobalAcceleratorResponsesAdvertiseByoipCidr(this, this.__resources, input);
  }

  public createAccelerator(input: shapes.GlobalAcceleratorCreateAcceleratorRequest): GlobalAcceleratorResponsesCreateAccelerator {
    return new GlobalAcceleratorResponsesCreateAccelerator(this, this.__resources, input);
  }

  public createEndpointGroup(input: shapes.GlobalAcceleratorCreateEndpointGroupRequest): GlobalAcceleratorResponsesCreateEndpointGroup {
    return new GlobalAcceleratorResponsesCreateEndpointGroup(this, this.__resources, input);
  }

  public createListener(input: shapes.GlobalAcceleratorCreateListenerRequest): GlobalAcceleratorResponsesCreateListener {
    return new GlobalAcceleratorResponsesCreateListener(this, this.__resources, input);
  }

  public deleteAccelerator(input: shapes.GlobalAcceleratorDeleteAcceleratorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DeleteAccelerator'),
        parameters: {
          AcceleratorArn: input.acceleratorArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccelerator', props);
  }

  public deleteEndpointGroup(input: shapes.GlobalAcceleratorDeleteEndpointGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DeleteEndpointGroup'),
        parameters: {
          EndpointGroupArn: input.endpointGroupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEndpointGroup', props);
  }

  public deleteListener(input: shapes.GlobalAcceleratorDeleteListenerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DeleteListener'),
        parameters: {
          ListenerArn: input.listenerArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteListener', props);
  }

  public deprovisionByoipCidr(input: shapes.GlobalAcceleratorDeprovisionByoipCidrRequest): GlobalAcceleratorResponsesDeprovisionByoipCidr {
    return new GlobalAcceleratorResponsesDeprovisionByoipCidr(this, this.__resources, input);
  }

  public describeAccelerator(input: shapes.GlobalAcceleratorDescribeAcceleratorRequest): GlobalAcceleratorResponsesDescribeAccelerator {
    return new GlobalAcceleratorResponsesDescribeAccelerator(this, this.__resources, input);
  }

  public describeAcceleratorAttributes(input: shapes.GlobalAcceleratorDescribeAcceleratorAttributesRequest): GlobalAcceleratorResponsesDescribeAcceleratorAttributes {
    return new GlobalAcceleratorResponsesDescribeAcceleratorAttributes(this, this.__resources, input);
  }

  public describeEndpointGroup(input: shapes.GlobalAcceleratorDescribeEndpointGroupRequest): GlobalAcceleratorResponsesDescribeEndpointGroup {
    return new GlobalAcceleratorResponsesDescribeEndpointGroup(this, this.__resources, input);
  }

  public describeListener(input: shapes.GlobalAcceleratorDescribeListenerRequest): GlobalAcceleratorResponsesDescribeListener {
    return new GlobalAcceleratorResponsesDescribeListener(this, this.__resources, input);
  }

  public listAccelerators(input: shapes.GlobalAcceleratorListAcceleratorsRequest): GlobalAcceleratorResponsesListAccelerators {
    return new GlobalAcceleratorResponsesListAccelerators(this, this.__resources, input);
  }

  public listByoipCidrs(input: shapes.GlobalAcceleratorListByoipCidrsRequest): GlobalAcceleratorResponsesListByoipCidrs {
    return new GlobalAcceleratorResponsesListByoipCidrs(this, this.__resources, input);
  }

  public listEndpointGroups(input: shapes.GlobalAcceleratorListEndpointGroupsRequest): GlobalAcceleratorResponsesListEndpointGroups {
    return new GlobalAcceleratorResponsesListEndpointGroups(this, this.__resources, input);
  }

  public listListeners(input: shapes.GlobalAcceleratorListListenersRequest): GlobalAcceleratorResponsesListListeners {
    return new GlobalAcceleratorResponsesListListeners(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.GlobalAcceleratorListTagsForResourceRequest): GlobalAcceleratorResponsesListTagsForResource {
    return new GlobalAcceleratorResponsesListTagsForResource(this, this.__resources, input);
  }

  public provisionByoipCidr(input: shapes.GlobalAcceleratorProvisionByoipCidrRequest): GlobalAcceleratorResponsesProvisionByoipCidr {
    return new GlobalAcceleratorResponsesProvisionByoipCidr(this, this.__resources, input);
  }

  public tagResource(input: shapes.GlobalAcceleratorTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.GlobalAcceleratorUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAccelerator(input: shapes.GlobalAcceleratorUpdateAcceleratorRequest): GlobalAcceleratorResponsesUpdateAccelerator {
    return new GlobalAcceleratorResponsesUpdateAccelerator(this, this.__resources, input);
  }

  public updateAcceleratorAttributes(input: shapes.GlobalAcceleratorUpdateAcceleratorAttributesRequest): GlobalAcceleratorResponsesUpdateAcceleratorAttributes {
    return new GlobalAcceleratorResponsesUpdateAcceleratorAttributes(this, this.__resources, input);
  }

  public updateEndpointGroup(input: shapes.GlobalAcceleratorUpdateEndpointGroupRequest): GlobalAcceleratorResponsesUpdateEndpointGroup {
    return new GlobalAcceleratorResponsesUpdateEndpointGroup(this, this.__resources, input);
  }

  public updateListener(input: shapes.GlobalAcceleratorUpdateListenerRequest): GlobalAcceleratorResponsesUpdateListener {
    return new GlobalAcceleratorResponsesUpdateListener(this, this.__resources, input);
  }

  public withdrawByoipCidr(input: shapes.GlobalAcceleratorWithdrawByoipCidrRequest): GlobalAcceleratorResponsesWithdrawByoipCidr {
    return new GlobalAcceleratorResponsesWithdrawByoipCidr(this, this.__resources, input);
  }

}

export class GlobalAcceleratorResponsesAdvertiseByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorAdvertiseByoipCidrRequest) {
  }

  public get byoipCidr(): GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr {
    return new GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesAdvertiseByoipCidrByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorAdvertiseByoipCidrRequest) {
  }

  public get cidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'advertiseByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.AdvertiseByoipCidr.ByoipCidr.Cidr'),
        outputPath: 'ByoipCidr.Cidr',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AdvertiseByoipCidr.ByoipCidr.Cidr', props);
    return resource.getResponseField('ByoipCidr.Cidr') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'advertiseByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.AdvertiseByoipCidr.ByoipCidr.State'),
        outputPath: 'ByoipCidr.State',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AdvertiseByoipCidr.ByoipCidr.State', props);
    return resource.getResponseField('ByoipCidr.State') as unknown as string;
  }

  public get events(): shapes.GlobalAcceleratorByoipCidrEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'advertiseByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.AdvertiseByoipCidr.ByoipCidr.Events'),
        outputPath: 'ByoipCidr.Events',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AdvertiseByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

export class GlobalAcceleratorResponsesCreateAccelerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorCreateAcceleratorRequest) {
  }

  public get accelerator(): GlobalAcceleratorResponsesCreateAcceleratorAccelerator {
    return new GlobalAcceleratorResponsesCreateAcceleratorAccelerator(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesCreateAcceleratorAccelerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorCreateAcceleratorRequest) {
  }

  public get acceleratorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.AcceleratorArn'),
        outputPath: 'Accelerator.AcceleratorArn',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.AcceleratorArn', props);
    return resource.getResponseField('Accelerator.AcceleratorArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.Name'),
        outputPath: 'Accelerator.Name',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.Name', props);
    return resource.getResponseField('Accelerator.Name') as unknown as string;
  }

  public get ipAddressType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.IpAddressType'),
        outputPath: 'Accelerator.IpAddressType',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.IpAddressType', props);
    return resource.getResponseField('Accelerator.IpAddressType') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.Enabled'),
        outputPath: 'Accelerator.Enabled',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.Enabled', props);
    return resource.getResponseField('Accelerator.Enabled') as unknown as boolean;
  }

  public get ipSets(): shapes.GlobalAcceleratorIpSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.IpSets'),
        outputPath: 'Accelerator.IpSets',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.IpSets', props);
    return resource.getResponseField('Accelerator.IpSets') as unknown as shapes.GlobalAcceleratorIpSet[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.DnsName'),
        outputPath: 'Accelerator.DnsName',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.DnsName', props);
    return resource.getResponseField('Accelerator.DnsName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.Status'),
        outputPath: 'Accelerator.Status',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.Status', props);
    return resource.getResponseField('Accelerator.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.CreatedTime'),
        outputPath: 'Accelerator.CreatedTime',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.CreatedTime', props);
    return resource.getResponseField('Accelerator.CreatedTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateAccelerator.Accelerator.LastModifiedTime'),
        outputPath: 'Accelerator.LastModifiedTime',
        parameters: {
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          IpAddresses: this.__input.ipAddresses,
          Enabled: this.__input.enabled,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccelerator.Accelerator.LastModifiedTime', props);
    return resource.getResponseField('Accelerator.LastModifiedTime') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesCreateEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorCreateEndpointGroupRequest) {
  }

  public get endpointGroup(): GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup {
    return new GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesCreateEndpointGroupEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorCreateEndpointGroupRequest) {
  }

  public get endpointGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.EndpointGroupArn'),
        outputPath: 'EndpointGroup.EndpointGroupArn',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.EndpointGroupArn', props);
    return resource.getResponseField('EndpointGroup.EndpointGroupArn') as unknown as string;
  }

  public get endpointGroupRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.EndpointGroupRegion'),
        outputPath: 'EndpointGroup.EndpointGroupRegion',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.EndpointGroupRegion', props);
    return resource.getResponseField('EndpointGroup.EndpointGroupRegion') as unknown as string;
  }

  public get endpointDescriptions(): shapes.GlobalAcceleratorEndpointDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.EndpointDescriptions'),
        outputPath: 'EndpointGroup.EndpointDescriptions',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.EndpointDescriptions', props);
    return resource.getResponseField('EndpointGroup.EndpointDescriptions') as unknown as shapes.GlobalAcceleratorEndpointDescription[];
  }

  public get trafficDialPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.TrafficDialPercentage'),
        outputPath: 'EndpointGroup.TrafficDialPercentage',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.TrafficDialPercentage', props);
    return resource.getResponseField('EndpointGroup.TrafficDialPercentage') as unknown as number;
  }

  public get healthCheckPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.HealthCheckPort'),
        outputPath: 'EndpointGroup.HealthCheckPort',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.HealthCheckPort', props);
    return resource.getResponseField('EndpointGroup.HealthCheckPort') as unknown as number;
  }

  public get healthCheckProtocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.HealthCheckProtocol'),
        outputPath: 'EndpointGroup.HealthCheckProtocol',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.HealthCheckProtocol', props);
    return resource.getResponseField('EndpointGroup.HealthCheckProtocol') as unknown as string;
  }

  public get healthCheckPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.HealthCheckPath'),
        outputPath: 'EndpointGroup.HealthCheckPath',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.HealthCheckPath', props);
    return resource.getResponseField('EndpointGroup.HealthCheckPath') as unknown as string;
  }

  public get healthCheckIntervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds'),
        outputPath: 'EndpointGroup.HealthCheckIntervalSeconds',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds', props);
    return resource.getResponseField('EndpointGroup.HealthCheckIntervalSeconds') as unknown as number;
  }

  public get thresholdCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.ThresholdCount'),
        outputPath: 'EndpointGroup.ThresholdCount',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.ThresholdCount', props);
    return resource.getResponseField('EndpointGroup.ThresholdCount') as unknown as number;
  }

  public get portOverrides(): shapes.GlobalAcceleratorPortOverride[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateEndpointGroup.EndpointGroup.PortOverrides'),
        outputPath: 'EndpointGroup.PortOverrides',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          EndpointGroupRegion: this.__input.endpointGroupRegion,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          IdempotencyToken: this.__input.idempotencyToken,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointGroup.EndpointGroup.PortOverrides', props);
    return resource.getResponseField('EndpointGroup.PortOverrides') as unknown as shapes.GlobalAcceleratorPortOverride[];
  }

}

export class GlobalAcceleratorResponsesCreateListener {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorCreateListenerRequest) {
  }

  public get listener(): GlobalAcceleratorResponsesCreateListenerListener {
    return new GlobalAcceleratorResponsesCreateListenerListener(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesCreateListenerListener {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorCreateListenerRequest) {
  }

  public get listenerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateListener.Listener.ListenerArn'),
        outputPath: 'Listener.ListenerArn',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateListener.Listener.ListenerArn', props);
    return resource.getResponseField('Listener.ListenerArn') as unknown as string;
  }

  public get portRanges(): shapes.GlobalAcceleratorPortRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateListener.Listener.PortRanges'),
        outputPath: 'Listener.PortRanges',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateListener.Listener.PortRanges', props);
    return resource.getResponseField('Listener.PortRanges') as unknown as shapes.GlobalAcceleratorPortRange[];
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateListener.Listener.Protocol'),
        outputPath: 'Listener.Protocol',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateListener.Listener.Protocol', props);
    return resource.getResponseField('Listener.Protocol') as unknown as string;
  }

  public get clientAffinity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.CreateListener.Listener.ClientAffinity'),
        outputPath: 'Listener.ClientAffinity',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateListener.Listener.ClientAffinity', props);
    return resource.getResponseField('Listener.ClientAffinity') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesDeprovisionByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDeprovisionByoipCidrRequest) {
  }

  public get byoipCidr(): GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr {
    return new GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesDeprovisionByoipCidrByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDeprovisionByoipCidrRequest) {
  }

  public get cidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprovisionByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DeprovisionByoipCidr.ByoipCidr.Cidr'),
        outputPath: 'ByoipCidr.Cidr',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeprovisionByoipCidr.ByoipCidr.Cidr', props);
    return resource.getResponseField('ByoipCidr.Cidr') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprovisionByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DeprovisionByoipCidr.ByoipCidr.State'),
        outputPath: 'ByoipCidr.State',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeprovisionByoipCidr.ByoipCidr.State', props);
    return resource.getResponseField('ByoipCidr.State') as unknown as string;
  }

  public get events(): shapes.GlobalAcceleratorByoipCidrEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deprovisionByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DeprovisionByoipCidr.ByoipCidr.Events'),
        outputPath: 'ByoipCidr.Events',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeprovisionByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

export class GlobalAcceleratorResponsesDescribeAccelerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeAcceleratorRequest) {
  }

  public get accelerator(): GlobalAcceleratorResponsesDescribeAcceleratorAccelerator {
    return new GlobalAcceleratorResponsesDescribeAcceleratorAccelerator(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesDescribeAcceleratorAccelerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeAcceleratorRequest) {
  }

  public get acceleratorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.AcceleratorArn'),
        outputPath: 'Accelerator.AcceleratorArn',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.AcceleratorArn', props);
    return resource.getResponseField('Accelerator.AcceleratorArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.Name'),
        outputPath: 'Accelerator.Name',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.Name', props);
    return resource.getResponseField('Accelerator.Name') as unknown as string;
  }

  public get ipAddressType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.IpAddressType'),
        outputPath: 'Accelerator.IpAddressType',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.IpAddressType', props);
    return resource.getResponseField('Accelerator.IpAddressType') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.Enabled'),
        outputPath: 'Accelerator.Enabled',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.Enabled', props);
    return resource.getResponseField('Accelerator.Enabled') as unknown as boolean;
  }

  public get ipSets(): shapes.GlobalAcceleratorIpSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.IpSets'),
        outputPath: 'Accelerator.IpSets',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.IpSets', props);
    return resource.getResponseField('Accelerator.IpSets') as unknown as shapes.GlobalAcceleratorIpSet[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.DnsName'),
        outputPath: 'Accelerator.DnsName',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.DnsName', props);
    return resource.getResponseField('Accelerator.DnsName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.Status'),
        outputPath: 'Accelerator.Status',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.Status', props);
    return resource.getResponseField('Accelerator.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.CreatedTime'),
        outputPath: 'Accelerator.CreatedTime',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.CreatedTime', props);
    return resource.getResponseField('Accelerator.CreatedTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAccelerator.Accelerator.LastModifiedTime'),
        outputPath: 'Accelerator.LastModifiedTime',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerator.Accelerator.LastModifiedTime', props);
    return resource.getResponseField('Accelerator.LastModifiedTime') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesDescribeAcceleratorAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeAcceleratorAttributesRequest) {
  }

  public get acceleratorAttributes(): GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes {
    return new GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesDescribeAcceleratorAttributesAcceleratorAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeAcceleratorAttributesRequest) {
  }

  public get flowLogsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAcceleratorAttributes',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsEnabled'),
        outputPath: 'AcceleratorAttributes.FlowLogsEnabled',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsEnabled', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsEnabled') as unknown as boolean;
  }

  public get flowLogsS3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAcceleratorAttributes',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Bucket'),
        outputPath: 'AcceleratorAttributes.FlowLogsS3Bucket',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Bucket', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsS3Bucket') as unknown as string;
  }

  public get flowLogsS3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAcceleratorAttributes',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Prefix'),
        outputPath: 'AcceleratorAttributes.FlowLogsS3Prefix',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Prefix', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsS3Prefix') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesDescribeEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeEndpointGroupRequest) {
  }

  public get endpointGroup(): GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup {
    return new GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesDescribeEndpointGroupEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeEndpointGroupRequest) {
  }

  public get endpointGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.EndpointGroupArn'),
        outputPath: 'EndpointGroup.EndpointGroupArn',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.EndpointGroupArn', props);
    return resource.getResponseField('EndpointGroup.EndpointGroupArn') as unknown as string;
  }

  public get endpointGroupRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.EndpointGroupRegion'),
        outputPath: 'EndpointGroup.EndpointGroupRegion',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.EndpointGroupRegion', props);
    return resource.getResponseField('EndpointGroup.EndpointGroupRegion') as unknown as string;
  }

  public get endpointDescriptions(): shapes.GlobalAcceleratorEndpointDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.EndpointDescriptions'),
        outputPath: 'EndpointGroup.EndpointDescriptions',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.EndpointDescriptions', props);
    return resource.getResponseField('EndpointGroup.EndpointDescriptions') as unknown as shapes.GlobalAcceleratorEndpointDescription[];
  }

  public get trafficDialPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.TrafficDialPercentage'),
        outputPath: 'EndpointGroup.TrafficDialPercentage',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.TrafficDialPercentage', props);
    return resource.getResponseField('EndpointGroup.TrafficDialPercentage') as unknown as number;
  }

  public get healthCheckPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.HealthCheckPort'),
        outputPath: 'EndpointGroup.HealthCheckPort',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.HealthCheckPort', props);
    return resource.getResponseField('EndpointGroup.HealthCheckPort') as unknown as number;
  }

  public get healthCheckProtocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.HealthCheckProtocol'),
        outputPath: 'EndpointGroup.HealthCheckProtocol',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.HealthCheckProtocol', props);
    return resource.getResponseField('EndpointGroup.HealthCheckProtocol') as unknown as string;
  }

  public get healthCheckPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.HealthCheckPath'),
        outputPath: 'EndpointGroup.HealthCheckPath',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.HealthCheckPath', props);
    return resource.getResponseField('EndpointGroup.HealthCheckPath') as unknown as string;
  }

  public get healthCheckIntervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds'),
        outputPath: 'EndpointGroup.HealthCheckIntervalSeconds',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds', props);
    return resource.getResponseField('EndpointGroup.HealthCheckIntervalSeconds') as unknown as number;
  }

  public get thresholdCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.ThresholdCount'),
        outputPath: 'EndpointGroup.ThresholdCount',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.ThresholdCount', props);
    return resource.getResponseField('EndpointGroup.ThresholdCount') as unknown as number;
  }

  public get portOverrides(): shapes.GlobalAcceleratorPortOverride[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeEndpointGroup.EndpointGroup.PortOverrides'),
        outputPath: 'EndpointGroup.PortOverrides',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointGroup.EndpointGroup.PortOverrides', props);
    return resource.getResponseField('EndpointGroup.PortOverrides') as unknown as shapes.GlobalAcceleratorPortOverride[];
  }

}

export class GlobalAcceleratorResponsesDescribeListener {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeListenerRequest) {
  }

  public get listener(): GlobalAcceleratorResponsesDescribeListenerListener {
    return new GlobalAcceleratorResponsesDescribeListenerListener(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesDescribeListenerListener {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorDescribeListenerRequest) {
  }

  public get listenerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeListener.Listener.ListenerArn'),
        outputPath: 'Listener.ListenerArn',
        parameters: {
          ListenerArn: this.__input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeListener.Listener.ListenerArn', props);
    return resource.getResponseField('Listener.ListenerArn') as unknown as string;
  }

  public get portRanges(): shapes.GlobalAcceleratorPortRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeListener.Listener.PortRanges'),
        outputPath: 'Listener.PortRanges',
        parameters: {
          ListenerArn: this.__input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeListener.Listener.PortRanges', props);
    return resource.getResponseField('Listener.PortRanges') as unknown as shapes.GlobalAcceleratorPortRange[];
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeListener.Listener.Protocol'),
        outputPath: 'Listener.Protocol',
        parameters: {
          ListenerArn: this.__input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeListener.Listener.Protocol', props);
    return resource.getResponseField('Listener.Protocol') as unknown as string;
  }

  public get clientAffinity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.DescribeListener.Listener.ClientAffinity'),
        outputPath: 'Listener.ClientAffinity',
        parameters: {
          ListenerArn: this.__input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeListener.Listener.ClientAffinity', props);
    return resource.getResponseField('Listener.ClientAffinity') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesListAccelerators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorListAcceleratorsRequest) {
  }

  public get accelerators(): shapes.GlobalAcceleratorAccelerator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccelerators',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListAccelerators.Accelerators'),
        outputPath: 'Accelerators',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccelerators.Accelerators', props);
    return resource.getResponseField('Accelerators') as unknown as shapes.GlobalAcceleratorAccelerator[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccelerators',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListAccelerators.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccelerators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesListByoipCidrs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorListByoipCidrsRequest) {
  }

  public get byoipCidrs(): shapes.GlobalAcceleratorByoipCidr[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listByoipCidrs',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListByoipCidrs.ByoipCidrs'),
        outputPath: 'ByoipCidrs',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListByoipCidrs.ByoipCidrs', props);
    return resource.getResponseField('ByoipCidrs') as unknown as shapes.GlobalAcceleratorByoipCidr[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listByoipCidrs',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListByoipCidrs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListByoipCidrs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesListEndpointGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorListEndpointGroupsRequest) {
  }

  public get endpointGroups(): shapes.GlobalAcceleratorEndpointGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpointGroups',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListEndpointGroups.EndpointGroups'),
        outputPath: 'EndpointGroups',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpointGroups.EndpointGroups', props);
    return resource.getResponseField('EndpointGroups') as unknown as shapes.GlobalAcceleratorEndpointGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpointGroups',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListEndpointGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpointGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesListListeners {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorListListenersRequest) {
  }

  public get listeners(): shapes.GlobalAcceleratorListener[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listListeners',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListListeners.Listeners'),
        outputPath: 'Listeners',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListListeners.Listeners', props);
    return resource.getResponseField('Listeners') as unknown as shapes.GlobalAcceleratorListener[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listListeners',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListListeners.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListListeners.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorListTagsForResourceRequest) {
  }

  public get tags(): shapes.GlobalAcceleratorTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.GlobalAcceleratorTag[];
  }

}

export class GlobalAcceleratorResponsesProvisionByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorProvisionByoipCidrRequest) {
  }

  public get byoipCidr(): GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr {
    return new GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesProvisionByoipCidrByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorProvisionByoipCidrRequest) {
  }

  public get cidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ProvisionByoipCidr.ByoipCidr.Cidr'),
        outputPath: 'ByoipCidr.Cidr',
        parameters: {
          Cidr: this.__input.cidr,
          CidrAuthorizationContext: {
            Message: this.__input.cidrAuthorizationContext.message,
            Signature: this.__input.cidrAuthorizationContext.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionByoipCidr.ByoipCidr.Cidr', props);
    return resource.getResponseField('ByoipCidr.Cidr') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ProvisionByoipCidr.ByoipCidr.State'),
        outputPath: 'ByoipCidr.State',
        parameters: {
          Cidr: this.__input.cidr,
          CidrAuthorizationContext: {
            Message: this.__input.cidrAuthorizationContext.message,
            Signature: this.__input.cidrAuthorizationContext.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionByoipCidr.ByoipCidr.State', props);
    return resource.getResponseField('ByoipCidr.State') as unknown as string;
  }

  public get events(): shapes.GlobalAcceleratorByoipCidrEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.ProvisionByoipCidr.ByoipCidr.Events'),
        outputPath: 'ByoipCidr.Events',
        parameters: {
          Cidr: this.__input.cidr,
          CidrAuthorizationContext: {
            Message: this.__input.cidrAuthorizationContext.message,
            Signature: this.__input.cidrAuthorizationContext.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

export class GlobalAcceleratorResponsesUpdateAccelerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateAcceleratorRequest) {
  }

  public get accelerator(): GlobalAcceleratorResponsesUpdateAcceleratorAccelerator {
    return new GlobalAcceleratorResponsesUpdateAcceleratorAccelerator(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesUpdateAcceleratorAccelerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateAcceleratorRequest) {
  }

  public get acceleratorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.AcceleratorArn'),
        outputPath: 'Accelerator.AcceleratorArn',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.AcceleratorArn', props);
    return resource.getResponseField('Accelerator.AcceleratorArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.Name'),
        outputPath: 'Accelerator.Name',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.Name', props);
    return resource.getResponseField('Accelerator.Name') as unknown as string;
  }

  public get ipAddressType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.IpAddressType'),
        outputPath: 'Accelerator.IpAddressType',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.IpAddressType', props);
    return resource.getResponseField('Accelerator.IpAddressType') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.Enabled'),
        outputPath: 'Accelerator.Enabled',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.Enabled', props);
    return resource.getResponseField('Accelerator.Enabled') as unknown as boolean;
  }

  public get ipSets(): shapes.GlobalAcceleratorIpSet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.IpSets'),
        outputPath: 'Accelerator.IpSets',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.IpSets', props);
    return resource.getResponseField('Accelerator.IpSets') as unknown as shapes.GlobalAcceleratorIpSet[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.DnsName'),
        outputPath: 'Accelerator.DnsName',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.DnsName', props);
    return resource.getResponseField('Accelerator.DnsName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.Status'),
        outputPath: 'Accelerator.Status',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.Status', props);
    return resource.getResponseField('Accelerator.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.CreatedTime'),
        outputPath: 'Accelerator.CreatedTime',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.CreatedTime', props);
    return resource.getResponseField('Accelerator.CreatedTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccelerator',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAccelerator.Accelerator.LastModifiedTime'),
        outputPath: 'Accelerator.LastModifiedTime',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          Name: this.__input.name,
          IpAddressType: this.__input.ipAddressType,
          Enabled: this.__input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccelerator.Accelerator.LastModifiedTime', props);
    return resource.getResponseField('Accelerator.LastModifiedTime') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesUpdateAcceleratorAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateAcceleratorAttributesRequest) {
  }

  public get acceleratorAttributes(): GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes {
    return new GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesUpdateAcceleratorAttributesAcceleratorAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateAcceleratorAttributesRequest) {
  }

  public get flowLogsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAcceleratorAttributes',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsEnabled'),
        outputPath: 'AcceleratorAttributes.FlowLogsEnabled',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          FlowLogsEnabled: this.__input.flowLogsEnabled,
          FlowLogsS3Bucket: this.__input.flowLogsS3Bucket,
          FlowLogsS3Prefix: this.__input.flowLogsS3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsEnabled', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsEnabled') as unknown as boolean;
  }

  public get flowLogsS3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAcceleratorAttributes',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Bucket'),
        outputPath: 'AcceleratorAttributes.FlowLogsS3Bucket',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          FlowLogsEnabled: this.__input.flowLogsEnabled,
          FlowLogsS3Bucket: this.__input.flowLogsS3Bucket,
          FlowLogsS3Prefix: this.__input.flowLogsS3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Bucket', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsS3Bucket') as unknown as string;
  }

  public get flowLogsS3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAcceleratorAttributes',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Prefix'),
        outputPath: 'AcceleratorAttributes.FlowLogsS3Prefix',
        parameters: {
          AcceleratorArn: this.__input.acceleratorArn,
          FlowLogsEnabled: this.__input.flowLogsEnabled,
          FlowLogsS3Bucket: this.__input.flowLogsS3Bucket,
          FlowLogsS3Prefix: this.__input.flowLogsS3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Prefix', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsS3Prefix') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesUpdateEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateEndpointGroupRequest) {
  }

  public get endpointGroup(): GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup {
    return new GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesUpdateEndpointGroupEndpointGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateEndpointGroupRequest) {
  }

  public get endpointGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.EndpointGroupArn'),
        outputPath: 'EndpointGroup.EndpointGroupArn',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.EndpointGroupArn', props);
    return resource.getResponseField('EndpointGroup.EndpointGroupArn') as unknown as string;
  }

  public get endpointGroupRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.EndpointGroupRegion'),
        outputPath: 'EndpointGroup.EndpointGroupRegion',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.EndpointGroupRegion', props);
    return resource.getResponseField('EndpointGroup.EndpointGroupRegion') as unknown as string;
  }

  public get endpointDescriptions(): shapes.GlobalAcceleratorEndpointDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.EndpointDescriptions'),
        outputPath: 'EndpointGroup.EndpointDescriptions',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.EndpointDescriptions', props);
    return resource.getResponseField('EndpointGroup.EndpointDescriptions') as unknown as shapes.GlobalAcceleratorEndpointDescription[];
  }

  public get trafficDialPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.TrafficDialPercentage'),
        outputPath: 'EndpointGroup.TrafficDialPercentage',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.TrafficDialPercentage', props);
    return resource.getResponseField('EndpointGroup.TrafficDialPercentage') as unknown as number;
  }

  public get healthCheckPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.HealthCheckPort'),
        outputPath: 'EndpointGroup.HealthCheckPort',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.HealthCheckPort', props);
    return resource.getResponseField('EndpointGroup.HealthCheckPort') as unknown as number;
  }

  public get healthCheckProtocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.HealthCheckProtocol'),
        outputPath: 'EndpointGroup.HealthCheckProtocol',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.HealthCheckProtocol', props);
    return resource.getResponseField('EndpointGroup.HealthCheckProtocol') as unknown as string;
  }

  public get healthCheckPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.HealthCheckPath'),
        outputPath: 'EndpointGroup.HealthCheckPath',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.HealthCheckPath', props);
    return resource.getResponseField('EndpointGroup.HealthCheckPath') as unknown as string;
  }

  public get healthCheckIntervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds'),
        outputPath: 'EndpointGroup.HealthCheckIntervalSeconds',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds', props);
    return resource.getResponseField('EndpointGroup.HealthCheckIntervalSeconds') as unknown as number;
  }

  public get thresholdCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.ThresholdCount'),
        outputPath: 'EndpointGroup.ThresholdCount',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.ThresholdCount', props);
    return resource.getResponseField('EndpointGroup.ThresholdCount') as unknown as number;
  }

  public get portOverrides(): shapes.GlobalAcceleratorPortOverride[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointGroup',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateEndpointGroup.EndpointGroup.PortOverrides'),
        outputPath: 'EndpointGroup.PortOverrides',
        parameters: {
          EndpointGroupArn: this.__input.endpointGroupArn,
          EndpointConfigurations: this.__input.endpointConfigurations,
          TrafficDialPercentage: this.__input.trafficDialPercentage,
          HealthCheckPort: this.__input.healthCheckPort,
          HealthCheckProtocol: this.__input.healthCheckProtocol,
          HealthCheckPath: this.__input.healthCheckPath,
          HealthCheckIntervalSeconds: this.__input.healthCheckIntervalSeconds,
          ThresholdCount: this.__input.thresholdCount,
          PortOverrides: this.__input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointGroup.EndpointGroup.PortOverrides', props);
    return resource.getResponseField('EndpointGroup.PortOverrides') as unknown as shapes.GlobalAcceleratorPortOverride[];
  }

}

export class GlobalAcceleratorResponsesUpdateListener {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateListenerRequest) {
  }

  public get listener(): GlobalAcceleratorResponsesUpdateListenerListener {
    return new GlobalAcceleratorResponsesUpdateListenerListener(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesUpdateListenerListener {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorUpdateListenerRequest) {
  }

  public get listenerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateListener.Listener.ListenerArn'),
        outputPath: 'Listener.ListenerArn',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateListener.Listener.ListenerArn', props);
    return resource.getResponseField('Listener.ListenerArn') as unknown as string;
  }

  public get portRanges(): shapes.GlobalAcceleratorPortRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateListener.Listener.PortRanges'),
        outputPath: 'Listener.PortRanges',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateListener.Listener.PortRanges', props);
    return resource.getResponseField('Listener.PortRanges') as unknown as shapes.GlobalAcceleratorPortRange[];
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateListener.Listener.Protocol'),
        outputPath: 'Listener.Protocol',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateListener.Listener.Protocol', props);
    return resource.getResponseField('Listener.Protocol') as unknown as string;
  }

  public get clientAffinity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateListener',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.UpdateListener.Listener.ClientAffinity'),
        outputPath: 'Listener.ClientAffinity',
        parameters: {
          ListenerArn: this.__input.listenerArn,
          PortRanges: this.__input.portRanges,
          Protocol: this.__input.protocol,
          ClientAffinity: this.__input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateListener.Listener.ClientAffinity', props);
    return resource.getResponseField('Listener.ClientAffinity') as unknown as string;
  }

}

export class GlobalAcceleratorResponsesWithdrawByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorWithdrawByoipCidrRequest) {
  }

  public get byoipCidr(): GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr {
    return new GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr(this.__scope, this.__resources, this.__input);
  }

}

export class GlobalAcceleratorResponsesWithdrawByoipCidrByoipCidr {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlobalAcceleratorWithdrawByoipCidrRequest) {
  }

  public get cidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'withdrawByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.WithdrawByoipCidr.ByoipCidr.Cidr'),
        outputPath: 'ByoipCidr.Cidr',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'WithdrawByoipCidr.ByoipCidr.Cidr', props);
    return resource.getResponseField('ByoipCidr.Cidr') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'withdrawByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.WithdrawByoipCidr.ByoipCidr.State'),
        outputPath: 'ByoipCidr.State',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'WithdrawByoipCidr.ByoipCidr.State', props);
    return resource.getResponseField('ByoipCidr.State') as unknown as string;
  }

  public get events(): shapes.GlobalAcceleratorByoipCidrEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'withdrawByoipCidr',
        service: 'GlobalAccelerator',
        physicalResourceId: cr.PhysicalResourceId.of('GlobalAccelerator.WithdrawByoipCidr.ByoipCidr.Events'),
        outputPath: 'ByoipCidr.Events',
        parameters: {
          Cidr: this.__input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'WithdrawByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

