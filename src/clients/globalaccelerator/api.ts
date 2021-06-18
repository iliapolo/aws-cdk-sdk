import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GlobalAcceleratorClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public advertiseByoipCidr(input: shapes.GlobalAcceleratorAdvertiseByoipCidrRequest): GlobalAcceleratorAdvertiseByoipCidr {
    return new GlobalAcceleratorAdvertiseByoipCidr(this, 'AdvertiseByoipCidr', this.__resources, input);
  }

  public createAccelerator(input: shapes.GlobalAcceleratorCreateAcceleratorRequest): GlobalAcceleratorCreateAccelerator {
    return new GlobalAcceleratorCreateAccelerator(this, 'CreateAccelerator', this.__resources, input);
  }

  public createEndpointGroup(input: shapes.GlobalAcceleratorCreateEndpointGroupRequest): GlobalAcceleratorCreateEndpointGroup {
    return new GlobalAcceleratorCreateEndpointGroup(this, 'CreateEndpointGroup', this.__resources, input);
  }

  public createListener(input: shapes.GlobalAcceleratorCreateListenerRequest): GlobalAcceleratorCreateListener {
    return new GlobalAcceleratorCreateListener(this, 'CreateListener', this.__resources, input);
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

  public deprovisionByoipCidr(input: shapes.GlobalAcceleratorDeprovisionByoipCidrRequest): GlobalAcceleratorDeprovisionByoipCidr {
    return new GlobalAcceleratorDeprovisionByoipCidr(this, 'DeprovisionByoipCidr', this.__resources, input);
  }

  public describeAccelerator(input: shapes.GlobalAcceleratorDescribeAcceleratorRequest): GlobalAcceleratorDescribeAccelerator {
    return new GlobalAcceleratorDescribeAccelerator(this, 'DescribeAccelerator', this.__resources, input);
  }

  public describeAcceleratorAttributes(input: shapes.GlobalAcceleratorDescribeAcceleratorAttributesRequest): GlobalAcceleratorDescribeAcceleratorAttributes {
    return new GlobalAcceleratorDescribeAcceleratorAttributes(this, 'DescribeAcceleratorAttributes', this.__resources, input);
  }

  public describeEndpointGroup(input: shapes.GlobalAcceleratorDescribeEndpointGroupRequest): GlobalAcceleratorDescribeEndpointGroup {
    return new GlobalAcceleratorDescribeEndpointGroup(this, 'DescribeEndpointGroup', this.__resources, input);
  }

  public describeListener(input: shapes.GlobalAcceleratorDescribeListenerRequest): GlobalAcceleratorDescribeListener {
    return new GlobalAcceleratorDescribeListener(this, 'DescribeListener', this.__resources, input);
  }

  public listAccelerators(input: shapes.GlobalAcceleratorListAcceleratorsRequest): GlobalAcceleratorListAccelerators {
    return new GlobalAcceleratorListAccelerators(this, 'ListAccelerators', this.__resources, input);
  }

  public listByoipCidrs(input: shapes.GlobalAcceleratorListByoipCidrsRequest): GlobalAcceleratorListByoipCidrs {
    return new GlobalAcceleratorListByoipCidrs(this, 'ListByoipCidrs', this.__resources, input);
  }

  public listEndpointGroups(input: shapes.GlobalAcceleratorListEndpointGroupsRequest): GlobalAcceleratorListEndpointGroups {
    return new GlobalAcceleratorListEndpointGroups(this, 'ListEndpointGroups', this.__resources, input);
  }

  public listListeners(input: shapes.GlobalAcceleratorListListenersRequest): GlobalAcceleratorListListeners {
    return new GlobalAcceleratorListListeners(this, 'ListListeners', this.__resources, input);
  }

  public listTagsForResource(input: shapes.GlobalAcceleratorListTagsForResourceRequest): GlobalAcceleratorListTagsForResource {
    return new GlobalAcceleratorListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public provisionByoipCidr(input: shapes.GlobalAcceleratorProvisionByoipCidrRequest): GlobalAcceleratorProvisionByoipCidr {
    return new GlobalAcceleratorProvisionByoipCidr(this, 'ProvisionByoipCidr', this.__resources, input);
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

  public updateAccelerator(input: shapes.GlobalAcceleratorUpdateAcceleratorRequest): GlobalAcceleratorUpdateAccelerator {
    return new GlobalAcceleratorUpdateAccelerator(this, 'UpdateAccelerator', this.__resources, input);
  }

  public updateAcceleratorAttributes(input: shapes.GlobalAcceleratorUpdateAcceleratorAttributesRequest): GlobalAcceleratorUpdateAcceleratorAttributes {
    return new GlobalAcceleratorUpdateAcceleratorAttributes(this, 'UpdateAcceleratorAttributes', this.__resources, input);
  }

  public updateEndpointGroup(input: shapes.GlobalAcceleratorUpdateEndpointGroupRequest): GlobalAcceleratorUpdateEndpointGroup {
    return new GlobalAcceleratorUpdateEndpointGroup(this, 'UpdateEndpointGroup', this.__resources, input);
  }

  public updateListener(input: shapes.GlobalAcceleratorUpdateListenerRequest): GlobalAcceleratorUpdateListener {
    return new GlobalAcceleratorUpdateListener(this, 'UpdateListener', this.__resources, input);
  }

  public withdrawByoipCidr(input: shapes.GlobalAcceleratorWithdrawByoipCidrRequest): GlobalAcceleratorWithdrawByoipCidr {
    return new GlobalAcceleratorWithdrawByoipCidr(this, 'WithdrawByoipCidr', this.__resources, input);
  }

}

export class GlobalAcceleratorAdvertiseByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorAdvertiseByoipCidrRequest) {
    super(scope, id);
  }

  public get byoipCidr(): GlobalAcceleratorAdvertiseByoipCidrByoipCidr {
    return new GlobalAcceleratorAdvertiseByoipCidrByoipCidr(this, 'ByoipCidr', this.__resources, this.input);
  }

}

export class GlobalAcceleratorAdvertiseByoipCidrByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorAdvertiseByoipCidrRequest) {
    super(scope, id);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AdvertiseByoipCidr.ByoipCidr.Cidr', props);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AdvertiseByoipCidr.ByoipCidr.State', props);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AdvertiseByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

export class GlobalAcceleratorCreateAccelerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorCreateAcceleratorRequest) {
    super(scope, id);
  }

  public get accelerator(): GlobalAcceleratorCreateAcceleratorAccelerator {
    return new GlobalAcceleratorCreateAcceleratorAccelerator(this, 'Accelerator', this.__resources, this.input);
  }

}

export class GlobalAcceleratorCreateAcceleratorAccelerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorCreateAcceleratorRequest) {
    super(scope, id);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.AcceleratorArn', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.Name', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.IpAddressType', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.Enabled', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.IpSets', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.DnsName', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.Status', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.CreatedTime', props);
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
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          IpAddresses: this.input.ipAddresses,
          Enabled: this.input.enabled,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccelerator.Accelerator.LastModifiedTime', props);
    return resource.getResponseField('Accelerator.LastModifiedTime') as unknown as string;
  }

}

export class GlobalAcceleratorCreateEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorCreateEndpointGroupRequest) {
    super(scope, id);
  }

  public get endpointGroup(): GlobalAcceleratorCreateEndpointGroupEndpointGroup {
    return new GlobalAcceleratorCreateEndpointGroupEndpointGroup(this, 'EndpointGroup', this.__resources, this.input);
  }

}

export class GlobalAcceleratorCreateEndpointGroupEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorCreateEndpointGroupRequest) {
    super(scope, id);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.EndpointGroupArn', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.EndpointGroupRegion', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.EndpointDescriptions', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.TrafficDialPercentage', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.HealthCheckPort', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.HealthCheckProtocol', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.HealthCheckPath', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.ThresholdCount', props);
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
          ListenerArn: this.input.listenerArn,
          EndpointGroupRegion: this.input.endpointGroupRegion,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          IdempotencyToken: this.input.idempotencyToken,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointGroup.EndpointGroup.PortOverrides', props);
    return resource.getResponseField('EndpointGroup.PortOverrides') as unknown as shapes.GlobalAcceleratorPortOverride[];
  }

}

export class GlobalAcceleratorCreateListener extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorCreateListenerRequest) {
    super(scope, id);
  }

  public get listener(): GlobalAcceleratorCreateListenerListener {
    return new GlobalAcceleratorCreateListenerListener(this, 'Listener', this.__resources, this.input);
  }

}

export class GlobalAcceleratorCreateListenerListener extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorCreateListenerRequest) {
    super(scope, id);
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
          AcceleratorArn: this.input.acceleratorArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateListener.Listener.ListenerArn', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateListener.Listener.PortRanges', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateListener.Listener.Protocol', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateListener.Listener.ClientAffinity', props);
    return resource.getResponseField('Listener.ClientAffinity') as unknown as string;
  }

}

export class GlobalAcceleratorDeprovisionByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDeprovisionByoipCidrRequest) {
    super(scope, id);
  }

  public get byoipCidr(): GlobalAcceleratorDeprovisionByoipCidrByoipCidr {
    return new GlobalAcceleratorDeprovisionByoipCidrByoipCidr(this, 'ByoipCidr', this.__resources, this.input);
  }

}

export class GlobalAcceleratorDeprovisionByoipCidrByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDeprovisionByoipCidrRequest) {
    super(scope, id);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeprovisionByoipCidr.ByoipCidr.Cidr', props);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeprovisionByoipCidr.ByoipCidr.State', props);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeprovisionByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

export class GlobalAcceleratorDescribeAccelerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeAcceleratorRequest) {
    super(scope, id);
  }

  public get accelerator(): GlobalAcceleratorDescribeAcceleratorAccelerator {
    return new GlobalAcceleratorDescribeAcceleratorAccelerator(this, 'Accelerator', this.__resources, this.input);
  }

}

export class GlobalAcceleratorDescribeAcceleratorAccelerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeAcceleratorRequest) {
    super(scope, id);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.AcceleratorArn', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.Name', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.IpAddressType', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.Enabled', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.IpSets', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.DnsName', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.Status', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.CreatedTime', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerator.Accelerator.LastModifiedTime', props);
    return resource.getResponseField('Accelerator.LastModifiedTime') as unknown as string;
  }

}

export class GlobalAcceleratorDescribeAcceleratorAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeAcceleratorAttributesRequest) {
    super(scope, id);
  }

  public get acceleratorAttributes(): GlobalAcceleratorDescribeAcceleratorAttributesAcceleratorAttributes {
    return new GlobalAcceleratorDescribeAcceleratorAttributesAcceleratorAttributes(this, 'AcceleratorAttributes', this.__resources, this.input);
  }

}

export class GlobalAcceleratorDescribeAcceleratorAttributesAcceleratorAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeAcceleratorAttributesRequest) {
    super(scope, id);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsEnabled', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Bucket', props);
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
          AcceleratorArn: this.input.acceleratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Prefix', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsS3Prefix') as unknown as string;
  }

}

export class GlobalAcceleratorDescribeEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeEndpointGroupRequest) {
    super(scope, id);
  }

  public get endpointGroup(): GlobalAcceleratorDescribeEndpointGroupEndpointGroup {
    return new GlobalAcceleratorDescribeEndpointGroupEndpointGroup(this, 'EndpointGroup', this.__resources, this.input);
  }

}

export class GlobalAcceleratorDescribeEndpointGroupEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeEndpointGroupRequest) {
    super(scope, id);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.EndpointGroupArn', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.EndpointGroupRegion', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.EndpointDescriptions', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.TrafficDialPercentage', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.HealthCheckPort', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.HealthCheckProtocol', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.HealthCheckPath', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.ThresholdCount', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointGroup.EndpointGroup.PortOverrides', props);
    return resource.getResponseField('EndpointGroup.PortOverrides') as unknown as shapes.GlobalAcceleratorPortOverride[];
  }

}

export class GlobalAcceleratorDescribeListener extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeListenerRequest) {
    super(scope, id);
  }

  public get listener(): GlobalAcceleratorDescribeListenerListener {
    return new GlobalAcceleratorDescribeListenerListener(this, 'Listener', this.__resources, this.input);
  }

}

export class GlobalAcceleratorDescribeListenerListener extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorDescribeListenerRequest) {
    super(scope, id);
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
          ListenerArn: this.input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeListener.Listener.ListenerArn', props);
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
          ListenerArn: this.input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeListener.Listener.PortRanges', props);
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
          ListenerArn: this.input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeListener.Listener.Protocol', props);
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
          ListenerArn: this.input.listenerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeListener.Listener.ClientAffinity', props);
    return resource.getResponseField('Listener.ClientAffinity') as unknown as string;
  }

}

export class GlobalAcceleratorListAccelerators extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorListAcceleratorsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccelerators.Accelerators', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAccelerators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorListByoipCidrs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorListByoipCidrsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListByoipCidrs.ByoipCidrs', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListByoipCidrs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorListEndpointGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorListEndpointGroupsRequest) {
    super(scope, id);
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
          ListenerArn: this.input.listenerArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpointGroups.EndpointGroups', props);
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
          ListenerArn: this.input.listenerArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpointGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorListListeners extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorListListenersRequest) {
    super(scope, id);
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
          AcceleratorArn: this.input.acceleratorArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListListeners.Listeners', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListListeners.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlobalAcceleratorListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.GlobalAcceleratorTag[];
  }

}

export class GlobalAcceleratorProvisionByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorProvisionByoipCidrRequest) {
    super(scope, id);
  }

  public get byoipCidr(): GlobalAcceleratorProvisionByoipCidrByoipCidr {
    return new GlobalAcceleratorProvisionByoipCidrByoipCidr(this, 'ByoipCidr', this.__resources, this.input);
  }

}

export class GlobalAcceleratorProvisionByoipCidrByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorProvisionByoipCidrRequest) {
    super(scope, id);
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
          Cidr: this.input.cidr,
          CidrAuthorizationContext: {
            Message: this.input.cidrAuthorizationContext.message,
            Signature: this.input.cidrAuthorizationContext.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionByoipCidr.ByoipCidr.Cidr', props);
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
          Cidr: this.input.cidr,
          CidrAuthorizationContext: {
            Message: this.input.cidrAuthorizationContext.message,
            Signature: this.input.cidrAuthorizationContext.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionByoipCidr.ByoipCidr.State', props);
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
          Cidr: this.input.cidr,
          CidrAuthorizationContext: {
            Message: this.input.cidrAuthorizationContext.message,
            Signature: this.input.cidrAuthorizationContext.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

export class GlobalAcceleratorUpdateAccelerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateAcceleratorRequest) {
    super(scope, id);
  }

  public get accelerator(): GlobalAcceleratorUpdateAcceleratorAccelerator {
    return new GlobalAcceleratorUpdateAcceleratorAccelerator(this, 'Accelerator', this.__resources, this.input);
  }

}

export class GlobalAcceleratorUpdateAcceleratorAccelerator extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateAcceleratorRequest) {
    super(scope, id);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.AcceleratorArn', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.Name', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.IpAddressType', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.Enabled', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.IpSets', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.DnsName', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.Status', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.CreatedTime', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          Name: this.input.name,
          IpAddressType: this.input.ipAddressType,
          Enabled: this.input.enabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccelerator.Accelerator.LastModifiedTime', props);
    return resource.getResponseField('Accelerator.LastModifiedTime') as unknown as string;
  }

}

export class GlobalAcceleratorUpdateAcceleratorAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateAcceleratorAttributesRequest) {
    super(scope, id);
  }

  public get acceleratorAttributes(): GlobalAcceleratorUpdateAcceleratorAttributesAcceleratorAttributes {
    return new GlobalAcceleratorUpdateAcceleratorAttributesAcceleratorAttributes(this, 'AcceleratorAttributes', this.__resources, this.input);
  }

}

export class GlobalAcceleratorUpdateAcceleratorAttributesAcceleratorAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateAcceleratorAttributesRequest) {
    super(scope, id);
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
          AcceleratorArn: this.input.acceleratorArn,
          FlowLogsEnabled: this.input.flowLogsEnabled,
          FlowLogsS3Bucket: this.input.flowLogsS3Bucket,
          FlowLogsS3Prefix: this.input.flowLogsS3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsEnabled', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          FlowLogsEnabled: this.input.flowLogsEnabled,
          FlowLogsS3Bucket: this.input.flowLogsS3Bucket,
          FlowLogsS3Prefix: this.input.flowLogsS3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Bucket', props);
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
          AcceleratorArn: this.input.acceleratorArn,
          FlowLogsEnabled: this.input.flowLogsEnabled,
          FlowLogsS3Bucket: this.input.flowLogsS3Bucket,
          FlowLogsS3Prefix: this.input.flowLogsS3Prefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAcceleratorAttributes.AcceleratorAttributes.FlowLogsS3Prefix', props);
    return resource.getResponseField('AcceleratorAttributes.FlowLogsS3Prefix') as unknown as string;
  }

}

export class GlobalAcceleratorUpdateEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateEndpointGroupRequest) {
    super(scope, id);
  }

  public get endpointGroup(): GlobalAcceleratorUpdateEndpointGroupEndpointGroup {
    return new GlobalAcceleratorUpdateEndpointGroupEndpointGroup(this, 'EndpointGroup', this.__resources, this.input);
  }

}

export class GlobalAcceleratorUpdateEndpointGroupEndpointGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateEndpointGroupRequest) {
    super(scope, id);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.EndpointGroupArn', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.EndpointGroupRegion', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.EndpointDescriptions', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.TrafficDialPercentage', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.HealthCheckPort', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.HealthCheckProtocol', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.HealthCheckPath', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.HealthCheckIntervalSeconds', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.ThresholdCount', props);
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
          EndpointGroupArn: this.input.endpointGroupArn,
          EndpointConfigurations: this.input.endpointConfigurations,
          TrafficDialPercentage: this.input.trafficDialPercentage,
          HealthCheckPort: this.input.healthCheckPort,
          HealthCheckProtocol: this.input.healthCheckProtocol,
          HealthCheckPath: this.input.healthCheckPath,
          HealthCheckIntervalSeconds: this.input.healthCheckIntervalSeconds,
          ThresholdCount: this.input.thresholdCount,
          PortOverrides: this.input.portOverrides,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointGroup.EndpointGroup.PortOverrides', props);
    return resource.getResponseField('EndpointGroup.PortOverrides') as unknown as shapes.GlobalAcceleratorPortOverride[];
  }

}

export class GlobalAcceleratorUpdateListener extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateListenerRequest) {
    super(scope, id);
  }

  public get listener(): GlobalAcceleratorUpdateListenerListener {
    return new GlobalAcceleratorUpdateListenerListener(this, 'Listener', this.__resources, this.input);
  }

}

export class GlobalAcceleratorUpdateListenerListener extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorUpdateListenerRequest) {
    super(scope, id);
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
          ListenerArn: this.input.listenerArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateListener.Listener.ListenerArn', props);
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
          ListenerArn: this.input.listenerArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateListener.Listener.PortRanges', props);
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
          ListenerArn: this.input.listenerArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateListener.Listener.Protocol', props);
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
          ListenerArn: this.input.listenerArn,
          PortRanges: this.input.portRanges,
          Protocol: this.input.protocol,
          ClientAffinity: this.input.clientAffinity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateListener.Listener.ClientAffinity', props);
    return resource.getResponseField('Listener.ClientAffinity') as unknown as string;
  }

}

export class GlobalAcceleratorWithdrawByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorWithdrawByoipCidrRequest) {
    super(scope, id);
  }

  public get byoipCidr(): GlobalAcceleratorWithdrawByoipCidrByoipCidr {
    return new GlobalAcceleratorWithdrawByoipCidrByoipCidr(this, 'ByoipCidr', this.__resources, this.input);
  }

}

export class GlobalAcceleratorWithdrawByoipCidrByoipCidr extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlobalAcceleratorWithdrawByoipCidrRequest) {
    super(scope, id);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'WithdrawByoipCidr.ByoipCidr.Cidr', props);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'WithdrawByoipCidr.ByoipCidr.State', props);
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
          Cidr: this.input.cidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'WithdrawByoipCidr.ByoipCidr.Events', props);
    return resource.getResponseField('ByoipCidr.Events') as unknown as shapes.GlobalAcceleratorByoipCidrEvent[];
  }

}

