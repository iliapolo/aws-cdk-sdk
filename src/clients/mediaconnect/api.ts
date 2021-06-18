import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaConnectClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addFlowOutputs(input: shapes.MediaConnectAddFlowOutputsRequest): MediaConnectAddFlowOutputs {
    return new MediaConnectAddFlowOutputs(this, 'AddFlowOutputs', this.__resources, input);
  }

  public addFlowSources(input: shapes.MediaConnectAddFlowSourcesRequest): MediaConnectAddFlowSources {
    return new MediaConnectAddFlowSources(this, 'AddFlowSources', this.__resources, input);
  }

  public addFlowVpcInterfaces(input: shapes.MediaConnectAddFlowVpcInterfacesRequest): MediaConnectAddFlowVpcInterfaces {
    return new MediaConnectAddFlowVpcInterfaces(this, 'AddFlowVpcInterfaces', this.__resources, input);
  }

  public createFlow(input: shapes.MediaConnectCreateFlowRequest): MediaConnectCreateFlow {
    return new MediaConnectCreateFlow(this, 'CreateFlow', this.__resources, input);
  }

  public deleteFlow(input: shapes.MediaConnectDeleteFlowRequest): MediaConnectDeleteFlow {
    return new MediaConnectDeleteFlow(this, 'DeleteFlow', this.__resources, input);
  }

  public describeFlow(input: shapes.MediaConnectDescribeFlowRequest): MediaConnectDescribeFlow {
    return new MediaConnectDescribeFlow(this, 'DescribeFlow', this.__resources, input);
  }

  public describeOffering(input: shapes.MediaConnectDescribeOfferingRequest): MediaConnectDescribeOffering {
    return new MediaConnectDescribeOffering(this, 'DescribeOffering', this.__resources, input);
  }

  public describeReservation(input: shapes.MediaConnectDescribeReservationRequest): MediaConnectDescribeReservation {
    return new MediaConnectDescribeReservation(this, 'DescribeReservation', this.__resources, input);
  }

  public grantFlowEntitlements(input: shapes.MediaConnectGrantFlowEntitlementsRequest): MediaConnectGrantFlowEntitlements {
    return new MediaConnectGrantFlowEntitlements(this, 'GrantFlowEntitlements', this.__resources, input);
  }

  public listEntitlements(input: shapes.MediaConnectListEntitlementsRequest): MediaConnectListEntitlements {
    return new MediaConnectListEntitlements(this, 'ListEntitlements', this.__resources, input);
  }

  public listFlows(input: shapes.MediaConnectListFlowsRequest): MediaConnectListFlows {
    return new MediaConnectListFlows(this, 'ListFlows', this.__resources, input);
  }

  public listOfferings(input: shapes.MediaConnectListOfferingsRequest): MediaConnectListOfferings {
    return new MediaConnectListOfferings(this, 'ListOfferings', this.__resources, input);
  }

  public listReservations(input: shapes.MediaConnectListReservationsRequest): MediaConnectListReservations {
    return new MediaConnectListReservations(this, 'ListReservations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaConnectListTagsForResourceRequest): MediaConnectListTagsForResource {
    return new MediaConnectListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public purchaseOffering(input: shapes.MediaConnectPurchaseOfferingRequest): MediaConnectPurchaseOffering {
    return new MediaConnectPurchaseOffering(this, 'PurchaseOffering', this.__resources, input);
  }

  public removeFlowOutput(input: shapes.MediaConnectRemoveFlowOutputRequest): MediaConnectRemoveFlowOutput {
    return new MediaConnectRemoveFlowOutput(this, 'RemoveFlowOutput', this.__resources, input);
  }

  public removeFlowSource(input: shapes.MediaConnectRemoveFlowSourceRequest): MediaConnectRemoveFlowSource {
    return new MediaConnectRemoveFlowSource(this, 'RemoveFlowSource', this.__resources, input);
  }

  public removeFlowVpcInterface(input: shapes.MediaConnectRemoveFlowVpcInterfaceRequest): MediaConnectRemoveFlowVpcInterface {
    return new MediaConnectRemoveFlowVpcInterface(this, 'RemoveFlowVpcInterface', this.__resources, input);
  }

  public revokeFlowEntitlement(input: shapes.MediaConnectRevokeFlowEntitlementRequest): MediaConnectRevokeFlowEntitlement {
    return new MediaConnectRevokeFlowEntitlement(this, 'RevokeFlowEntitlement', this.__resources, input);
  }

  public startFlow(input: shapes.MediaConnectStartFlowRequest): MediaConnectStartFlow {
    return new MediaConnectStartFlow(this, 'StartFlow', this.__resources, input);
  }

  public stopFlow(input: shapes.MediaConnectStopFlowRequest): MediaConnectStopFlow {
    return new MediaConnectStopFlow(this, 'StopFlow', this.__resources, input);
  }

  public tagResource(input: shapes.MediaConnectTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.MediaConnectUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateFlow(input: shapes.MediaConnectUpdateFlowRequest): MediaConnectUpdateFlow {
    return new MediaConnectUpdateFlow(this, 'UpdateFlow', this.__resources, input);
  }

  public updateFlowEntitlement(input: shapes.MediaConnectUpdateFlowEntitlementRequest): MediaConnectUpdateFlowEntitlement {
    return new MediaConnectUpdateFlowEntitlement(this, 'UpdateFlowEntitlement', this.__resources, input);
  }

  public updateFlowOutput(input: shapes.MediaConnectUpdateFlowOutputRequest): MediaConnectUpdateFlowOutput {
    return new MediaConnectUpdateFlowOutput(this, 'UpdateFlowOutput', this.__resources, input);
  }

  public updateFlowSource(input: shapes.MediaConnectUpdateFlowSourceRequest): MediaConnectUpdateFlowSource {
    return new MediaConnectUpdateFlowSource(this, 'UpdateFlowSource', this.__resources, input);
  }

}

export class MediaConnectAddFlowOutputs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectAddFlowOutputsRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addFlowOutputs',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.AddFlowOutputs.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
          Outputs: this.input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddFlowOutputs.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get outputs(): shapes.MediaConnectOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addFlowOutputs',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.AddFlowOutputs.Outputs'),
        outputPath: 'Outputs',
        parameters: {
          FlowArn: this.input.flowArn,
          Outputs: this.input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddFlowOutputs.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.MediaConnectOutput[];
  }

}

export class MediaConnectAddFlowSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectAddFlowSourcesRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addFlowSources',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.AddFlowSources.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
          Sources: this.input.sources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddFlowSources.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get sources(): shapes.MediaConnectSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addFlowSources',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.AddFlowSources.Sources'),
        outputPath: 'Sources',
        parameters: {
          FlowArn: this.input.flowArn,
          Sources: this.input.sources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddFlowSources.Sources', props);
    return resource.getResponseField('Sources') as unknown as shapes.MediaConnectSource[];
  }

}

export class MediaConnectAddFlowVpcInterfaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectAddFlowVpcInterfacesRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addFlowVpcInterfaces',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.AddFlowVpcInterfaces.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddFlowVpcInterfaces.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get vpcInterfaces(): shapes.MediaConnectVpcInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addFlowVpcInterfaces',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.AddFlowVpcInterfaces.VpcInterfaces'),
        outputPath: 'VpcInterfaces',
        parameters: {
          FlowArn: this.input.flowArn,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddFlowVpcInterfaces.VpcInterfaces', props);
    return resource.getResponseField('VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectCreateFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectCreateFlowRequest) {
    super(scope, id);
  }

  public get flow(): MediaConnectCreateFlowFlow {
    return new MediaConnectCreateFlowFlow(this, 'Flow', this.__resources, this.input);
  }

}

export class MediaConnectCreateFlowFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectCreateFlowRequest) {
    super(scope, id);
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.AvailabilityZone'),
        outputPath: 'Flow.AvailabilityZone',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.AvailabilityZone', props);
    return resource.getResponseField('Flow.AvailabilityZone') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Description'),
        outputPath: 'Flow.Description',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Description', props);
    return resource.getResponseField('Flow.Description') as unknown as string;
  }

  public get egressIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.EgressIp'),
        outputPath: 'Flow.EgressIp',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.EgressIp', props);
    return resource.getResponseField('Flow.EgressIp') as unknown as string;
  }

  public get entitlements(): shapes.MediaConnectEntitlement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Entitlements'),
        outputPath: 'Flow.Entitlements',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Entitlements', props);
    return resource.getResponseField('Flow.Entitlements') as unknown as shapes.MediaConnectEntitlement[];
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.FlowArn'),
        outputPath: 'Flow.FlowArn',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.FlowArn', props);
    return resource.getResponseField('Flow.FlowArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Name'),
        outputPath: 'Flow.Name',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Name', props);
    return resource.getResponseField('Flow.Name') as unknown as string;
  }

  public get outputs(): shapes.MediaConnectOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Outputs'),
        outputPath: 'Flow.Outputs',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Outputs', props);
    return resource.getResponseField('Flow.Outputs') as unknown as shapes.MediaConnectOutput[];
  }

  public get source(): MediaConnectCreateFlowFlowSource {
    return new MediaConnectCreateFlowFlowSource(this, 'Source', this.__resources, this.input);
  }

  public get sourceFailoverConfig(): MediaConnectCreateFlowFlowSourceFailoverConfig {
    return new MediaConnectCreateFlowFlowSourceFailoverConfig(this, 'SourceFailoverConfig', this.__resources, this.input);
  }

  public get sources(): shapes.MediaConnectSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Sources'),
        outputPath: 'Flow.Sources',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Sources', props);
    return resource.getResponseField('Flow.Sources') as unknown as shapes.MediaConnectSource[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Status'),
        outputPath: 'Flow.Status',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Status', props);
    return resource.getResponseField('Flow.Status') as unknown as string;
  }

  public get vpcInterfaces(): shapes.MediaConnectVpcInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.VpcInterfaces'),
        outputPath: 'Flow.VpcInterfaces',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.VpcInterfaces', props);
    return resource.getResponseField('Flow.VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectCreateFlowFlowSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectCreateFlowRequest) {
    super(scope, id);
  }

  public get dataTransferSubscriberFeePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.DataTransferSubscriberFeePercent'),
        outputPath: 'Flow.Source.DataTransferSubscriberFeePercent',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Flow.Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectCreateFlowFlowSourceDecryption {
    return new MediaConnectCreateFlowFlowSourceDecryption(this, 'Decryption', this.__resources, this.input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Description'),
        outputPath: 'Flow.Source.Description',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Description', props);
    return resource.getResponseField('Flow.Source.Description') as unknown as string;
  }

  public get entitlementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.EntitlementArn'),
        outputPath: 'Flow.Source.EntitlementArn',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.EntitlementArn', props);
    return resource.getResponseField('Flow.Source.EntitlementArn') as unknown as string;
  }

  public get ingestIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.IngestIp'),
        outputPath: 'Flow.Source.IngestIp',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.IngestIp', props);
    return resource.getResponseField('Flow.Source.IngestIp') as unknown as string;
  }

  public get ingestPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.IngestPort'),
        outputPath: 'Flow.Source.IngestPort',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.IngestPort', props);
    return resource.getResponseField('Flow.Source.IngestPort') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Name'),
        outputPath: 'Flow.Source.Name',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Name', props);
    return resource.getResponseField('Flow.Source.Name') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.SourceArn'),
        outputPath: 'Flow.Source.SourceArn',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.SourceArn', props);
    return resource.getResponseField('Flow.Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectCreateFlowFlowSourceTransport {
    return new MediaConnectCreateFlowFlowSourceTransport(this, 'Transport', this.__resources, this.input);
  }

  public get vpcInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.VpcInterfaceName'),
        outputPath: 'Flow.Source.VpcInterfaceName',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.VpcInterfaceName', props);
    return resource.getResponseField('Flow.Source.VpcInterfaceName') as unknown as string;
  }

  public get whitelistCidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.WhitelistCidr'),
        outputPath: 'Flow.Source.WhitelistCidr',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.WhitelistCidr', props);
    return resource.getResponseField('Flow.Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectCreateFlowFlowSourceDecryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectCreateFlowRequest) {
    super(scope, id);
  }

  public get algorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.Algorithm'),
        outputPath: 'Flow.Source.Decryption.Algorithm',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.Algorithm', props);
    return resource.getResponseField('Flow.Source.Decryption.Algorithm') as unknown as string;
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.ConstantInitializationVector'),
        outputPath: 'Flow.Source.Decryption.ConstantInitializationVector',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.ConstantInitializationVector', props);
    return resource.getResponseField('Flow.Source.Decryption.ConstantInitializationVector') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.DeviceId'),
        outputPath: 'Flow.Source.Decryption.DeviceId',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.DeviceId', props);
    return resource.getResponseField('Flow.Source.Decryption.DeviceId') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.KeyType'),
        outputPath: 'Flow.Source.Decryption.KeyType',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.KeyType', props);
    return resource.getResponseField('Flow.Source.Decryption.KeyType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.Region'),
        outputPath: 'Flow.Source.Decryption.Region',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.Region', props);
    return resource.getResponseField('Flow.Source.Decryption.Region') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.ResourceId'),
        outputPath: 'Flow.Source.Decryption.ResourceId',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.ResourceId', props);
    return resource.getResponseField('Flow.Source.Decryption.ResourceId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.RoleArn'),
        outputPath: 'Flow.Source.Decryption.RoleArn',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.RoleArn', props);
    return resource.getResponseField('Flow.Source.Decryption.RoleArn') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.SecretArn'),
        outputPath: 'Flow.Source.Decryption.SecretArn',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.SecretArn', props);
    return resource.getResponseField('Flow.Source.Decryption.SecretArn') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Decryption.Url'),
        outputPath: 'Flow.Source.Decryption.Url',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Decryption.Url', props);
    return resource.getResponseField('Flow.Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectCreateFlowFlowSourceTransport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectCreateFlowRequest) {
    super(scope, id);
  }

  public get cidrAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Transport.CidrAllowList'),
        outputPath: 'Flow.Source.Transport.CidrAllowList',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Transport.CidrAllowList', props);
    return resource.getResponseField('Flow.Source.Transport.CidrAllowList') as unknown as string[];
  }

  public get maxBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Transport.MaxBitrate'),
        outputPath: 'Flow.Source.Transport.MaxBitrate',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Transport.MaxBitrate', props);
    return resource.getResponseField('Flow.Source.Transport.MaxBitrate') as unknown as number;
  }

  public get maxLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Transport.MaxLatency'),
        outputPath: 'Flow.Source.Transport.MaxLatency',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Transport.MaxLatency', props);
    return resource.getResponseField('Flow.Source.Transport.MaxLatency') as unknown as number;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Transport.Protocol'),
        outputPath: 'Flow.Source.Transport.Protocol',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Transport.Protocol', props);
    return resource.getResponseField('Flow.Source.Transport.Protocol') as unknown as string;
  }

  public get remoteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Transport.RemoteId'),
        outputPath: 'Flow.Source.Transport.RemoteId',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Transport.RemoteId', props);
    return resource.getResponseField('Flow.Source.Transport.RemoteId') as unknown as string;
  }

  public get smoothingLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Transport.SmoothingLatency'),
        outputPath: 'Flow.Source.Transport.SmoothingLatency',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Transport.SmoothingLatency', props);
    return resource.getResponseField('Flow.Source.Transport.SmoothingLatency') as unknown as number;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.Source.Transport.StreamId'),
        outputPath: 'Flow.Source.Transport.StreamId',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.Source.Transport.StreamId', props);
    return resource.getResponseField('Flow.Source.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectCreateFlowFlowSourceFailoverConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectCreateFlowRequest) {
    super(scope, id);
  }

  public get recoveryWindow(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.SourceFailoverConfig.RecoveryWindow'),
        outputPath: 'Flow.SourceFailoverConfig.RecoveryWindow',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.SourceFailoverConfig.RecoveryWindow', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.RecoveryWindow') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.CreateFlow.Flow.SourceFailoverConfig.State'),
        outputPath: 'Flow.SourceFailoverConfig.State',
        parameters: {
          AvailabilityZone: this.input.availabilityZone,
          Entitlements: this.input.entitlements,
          Name: this.input.name,
          Outputs: this.input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.input.source?.decryption?.constantInitializationVector,
              DeviceId: this.input.source?.decryption?.deviceId,
              KeyType: this.input.source?.decryption?.keyType,
              Region: this.input.source?.decryption?.region,
              ResourceId: this.input.source?.decryption?.resourceId,
              RoleArn: this.input.source?.decryption?.roleArn,
              SecretArn: this.input.source?.decryption?.secretArn,
              Url: this.input.source?.decryption?.url,
            },
            Description: this.input.source?.description,
            EntitlementArn: this.input.source?.entitlementArn,
            IngestPort: this.input.source?.ingestPort,
            MaxBitrate: this.input.source?.maxBitrate,
            MaxLatency: this.input.source?.maxLatency,
            Name: this.input.source?.name,
            Protocol: this.input.source?.protocol,
            StreamId: this.input.source?.streamId,
            VpcInterfaceName: this.input.source?.vpcInterfaceName,
            WhitelistCidr: this.input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
          Sources: this.input.sources,
          VpcInterfaces: this.input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlow.Flow.SourceFailoverConfig.State', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.State') as unknown as string;
  }

}

export class MediaConnectDeleteFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDeleteFlowRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DeleteFlow.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFlow.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DeleteFlow.Status'),
        outputPath: 'Status',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFlow.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class MediaConnectDescribeFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeFlowRequest) {
    super(scope, id);
  }

  public get flow(): MediaConnectDescribeFlowFlow {
    return new MediaConnectDescribeFlowFlow(this, 'Flow', this.__resources, this.input);
  }

  public get messages(): MediaConnectDescribeFlowMessages {
    return new MediaConnectDescribeFlowMessages(this, 'Messages', this.__resources, this.input);
  }

}

export class MediaConnectDescribeFlowFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeFlowRequest) {
    super(scope, id);
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.AvailabilityZone'),
        outputPath: 'Flow.AvailabilityZone',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.AvailabilityZone', props);
    return resource.getResponseField('Flow.AvailabilityZone') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Description'),
        outputPath: 'Flow.Description',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Description', props);
    return resource.getResponseField('Flow.Description') as unknown as string;
  }

  public get egressIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.EgressIp'),
        outputPath: 'Flow.EgressIp',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.EgressIp', props);
    return resource.getResponseField('Flow.EgressIp') as unknown as string;
  }

  public get entitlements(): shapes.MediaConnectEntitlement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Entitlements'),
        outputPath: 'Flow.Entitlements',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Entitlements', props);
    return resource.getResponseField('Flow.Entitlements') as unknown as shapes.MediaConnectEntitlement[];
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.FlowArn'),
        outputPath: 'Flow.FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.FlowArn', props);
    return resource.getResponseField('Flow.FlowArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Name'),
        outputPath: 'Flow.Name',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Name', props);
    return resource.getResponseField('Flow.Name') as unknown as string;
  }

  public get outputs(): shapes.MediaConnectOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Outputs'),
        outputPath: 'Flow.Outputs',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Outputs', props);
    return resource.getResponseField('Flow.Outputs') as unknown as shapes.MediaConnectOutput[];
  }

  public get source(): MediaConnectDescribeFlowFlowSource {
    return new MediaConnectDescribeFlowFlowSource(this, 'Source', this.__resources, this.input);
  }

  public get sourceFailoverConfig(): MediaConnectDescribeFlowFlowSourceFailoverConfig {
    return new MediaConnectDescribeFlowFlowSourceFailoverConfig(this, 'SourceFailoverConfig', this.__resources, this.input);
  }

  public get sources(): shapes.MediaConnectSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Sources'),
        outputPath: 'Flow.Sources',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Sources', props);
    return resource.getResponseField('Flow.Sources') as unknown as shapes.MediaConnectSource[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Status'),
        outputPath: 'Flow.Status',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Status', props);
    return resource.getResponseField('Flow.Status') as unknown as string;
  }

  public get vpcInterfaces(): shapes.MediaConnectVpcInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.VpcInterfaces'),
        outputPath: 'Flow.VpcInterfaces',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.VpcInterfaces', props);
    return resource.getResponseField('Flow.VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectDescribeFlowFlowSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeFlowRequest) {
    super(scope, id);
  }

  public get dataTransferSubscriberFeePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.DataTransferSubscriberFeePercent'),
        outputPath: 'Flow.Source.DataTransferSubscriberFeePercent',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Flow.Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectDescribeFlowFlowSourceDecryption {
    return new MediaConnectDescribeFlowFlowSourceDecryption(this, 'Decryption', this.__resources, this.input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Description'),
        outputPath: 'Flow.Source.Description',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Description', props);
    return resource.getResponseField('Flow.Source.Description') as unknown as string;
  }

  public get entitlementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.EntitlementArn'),
        outputPath: 'Flow.Source.EntitlementArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.EntitlementArn', props);
    return resource.getResponseField('Flow.Source.EntitlementArn') as unknown as string;
  }

  public get ingestIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.IngestIp'),
        outputPath: 'Flow.Source.IngestIp',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.IngestIp', props);
    return resource.getResponseField('Flow.Source.IngestIp') as unknown as string;
  }

  public get ingestPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.IngestPort'),
        outputPath: 'Flow.Source.IngestPort',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.IngestPort', props);
    return resource.getResponseField('Flow.Source.IngestPort') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Name'),
        outputPath: 'Flow.Source.Name',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Name', props);
    return resource.getResponseField('Flow.Source.Name') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.SourceArn'),
        outputPath: 'Flow.Source.SourceArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.SourceArn', props);
    return resource.getResponseField('Flow.Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectDescribeFlowFlowSourceTransport {
    return new MediaConnectDescribeFlowFlowSourceTransport(this, 'Transport', this.__resources, this.input);
  }

  public get vpcInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.VpcInterfaceName'),
        outputPath: 'Flow.Source.VpcInterfaceName',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.VpcInterfaceName', props);
    return resource.getResponseField('Flow.Source.VpcInterfaceName') as unknown as string;
  }

  public get whitelistCidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.WhitelistCidr'),
        outputPath: 'Flow.Source.WhitelistCidr',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.WhitelistCidr', props);
    return resource.getResponseField('Flow.Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectDescribeFlowFlowSourceDecryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeFlowRequest) {
    super(scope, id);
  }

  public get algorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.Algorithm'),
        outputPath: 'Flow.Source.Decryption.Algorithm',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.Algorithm', props);
    return resource.getResponseField('Flow.Source.Decryption.Algorithm') as unknown as string;
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.ConstantInitializationVector'),
        outputPath: 'Flow.Source.Decryption.ConstantInitializationVector',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.ConstantInitializationVector', props);
    return resource.getResponseField('Flow.Source.Decryption.ConstantInitializationVector') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.DeviceId'),
        outputPath: 'Flow.Source.Decryption.DeviceId',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.DeviceId', props);
    return resource.getResponseField('Flow.Source.Decryption.DeviceId') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.KeyType'),
        outputPath: 'Flow.Source.Decryption.KeyType',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.KeyType', props);
    return resource.getResponseField('Flow.Source.Decryption.KeyType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.Region'),
        outputPath: 'Flow.Source.Decryption.Region',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.Region', props);
    return resource.getResponseField('Flow.Source.Decryption.Region') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.ResourceId'),
        outputPath: 'Flow.Source.Decryption.ResourceId',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.ResourceId', props);
    return resource.getResponseField('Flow.Source.Decryption.ResourceId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.RoleArn'),
        outputPath: 'Flow.Source.Decryption.RoleArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.RoleArn', props);
    return resource.getResponseField('Flow.Source.Decryption.RoleArn') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.SecretArn'),
        outputPath: 'Flow.Source.Decryption.SecretArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.SecretArn', props);
    return resource.getResponseField('Flow.Source.Decryption.SecretArn') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Decryption.Url'),
        outputPath: 'Flow.Source.Decryption.Url',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Decryption.Url', props);
    return resource.getResponseField('Flow.Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectDescribeFlowFlowSourceTransport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeFlowRequest) {
    super(scope, id);
  }

  public get cidrAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Transport.CidrAllowList'),
        outputPath: 'Flow.Source.Transport.CidrAllowList',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Transport.CidrAllowList', props);
    return resource.getResponseField('Flow.Source.Transport.CidrAllowList') as unknown as string[];
  }

  public get maxBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Transport.MaxBitrate'),
        outputPath: 'Flow.Source.Transport.MaxBitrate',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Transport.MaxBitrate', props);
    return resource.getResponseField('Flow.Source.Transport.MaxBitrate') as unknown as number;
  }

  public get maxLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Transport.MaxLatency'),
        outputPath: 'Flow.Source.Transport.MaxLatency',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Transport.MaxLatency', props);
    return resource.getResponseField('Flow.Source.Transport.MaxLatency') as unknown as number;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Transport.Protocol'),
        outputPath: 'Flow.Source.Transport.Protocol',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Transport.Protocol', props);
    return resource.getResponseField('Flow.Source.Transport.Protocol') as unknown as string;
  }

  public get remoteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Transport.RemoteId'),
        outputPath: 'Flow.Source.Transport.RemoteId',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Transport.RemoteId', props);
    return resource.getResponseField('Flow.Source.Transport.RemoteId') as unknown as string;
  }

  public get smoothingLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Transport.SmoothingLatency'),
        outputPath: 'Flow.Source.Transport.SmoothingLatency',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Transport.SmoothingLatency', props);
    return resource.getResponseField('Flow.Source.Transport.SmoothingLatency') as unknown as number;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.Source.Transport.StreamId'),
        outputPath: 'Flow.Source.Transport.StreamId',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.Source.Transport.StreamId', props);
    return resource.getResponseField('Flow.Source.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectDescribeFlowFlowSourceFailoverConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeFlowRequest) {
    super(scope, id);
  }

  public get recoveryWindow(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.SourceFailoverConfig.RecoveryWindow'),
        outputPath: 'Flow.SourceFailoverConfig.RecoveryWindow',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.SourceFailoverConfig.RecoveryWindow', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.RecoveryWindow') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Flow.SourceFailoverConfig.State'),
        outputPath: 'Flow.SourceFailoverConfig.State',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Flow.SourceFailoverConfig.State', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.State') as unknown as string;
  }

}

export class MediaConnectDescribeFlowMessages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeFlowRequest) {
    super(scope, id);
  }

  public get errors(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeFlow.Messages.Errors'),
        outputPath: 'Messages.Errors',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlow.Messages.Errors', props);
    return resource.getResponseField('Messages.Errors') as unknown as string[];
  }

}

export class MediaConnectDescribeOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeOfferingRequest) {
    super(scope, id);
  }

  public get offering(): MediaConnectDescribeOfferingOffering {
    return new MediaConnectDescribeOfferingOffering(this, 'Offering', this.__resources, this.input);
  }

}

export class MediaConnectDescribeOfferingOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeOfferingRequest) {
    super(scope, id);
  }

  public get currencyCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.CurrencyCode'),
        outputPath: 'Offering.CurrencyCode',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.CurrencyCode', props);
    return resource.getResponseField('Offering.CurrencyCode') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.Duration'),
        outputPath: 'Offering.Duration',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.Duration', props);
    return resource.getResponseField('Offering.Duration') as unknown as number;
  }

  public get durationUnits(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.DurationUnits'),
        outputPath: 'Offering.DurationUnits',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.DurationUnits', props);
    return resource.getResponseField('Offering.DurationUnits') as unknown as string;
  }

  public get offeringArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.OfferingArn'),
        outputPath: 'Offering.OfferingArn',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.OfferingArn', props);
    return resource.getResponseField('Offering.OfferingArn') as unknown as string;
  }

  public get offeringDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.OfferingDescription'),
        outputPath: 'Offering.OfferingDescription',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.OfferingDescription', props);
    return resource.getResponseField('Offering.OfferingDescription') as unknown as string;
  }

  public get pricePerUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.PricePerUnit'),
        outputPath: 'Offering.PricePerUnit',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.PricePerUnit', props);
    return resource.getResponseField('Offering.PricePerUnit') as unknown as string;
  }

  public get priceUnits(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.PriceUnits'),
        outputPath: 'Offering.PriceUnits',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.PriceUnits', props);
    return resource.getResponseField('Offering.PriceUnits') as unknown as string;
  }

  public get resourceSpecification(): MediaConnectDescribeOfferingOfferingResourceSpecification {
    return new MediaConnectDescribeOfferingOfferingResourceSpecification(this, 'ResourceSpecification', this.__resources, this.input);
  }

}

export class MediaConnectDescribeOfferingOfferingResourceSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeOfferingRequest) {
    super(scope, id);
  }

  public get reservedBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.ResourceSpecification.ReservedBitrate'),
        outputPath: 'Offering.ResourceSpecification.ReservedBitrate',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.ResourceSpecification.ReservedBitrate', props);
    return resource.getResponseField('Offering.ResourceSpecification.ReservedBitrate') as unknown as number;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeOffering.Offering.ResourceSpecification.ResourceType'),
        outputPath: 'Offering.ResourceSpecification.ResourceType',
        parameters: {
          OfferingArn: this.input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOffering.Offering.ResourceSpecification.ResourceType', props);
    return resource.getResponseField('Offering.ResourceSpecification.ResourceType') as unknown as string;
  }

}

export class MediaConnectDescribeReservation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeReservationRequest) {
    super(scope, id);
  }

  public get reservation(): MediaConnectDescribeReservationReservation {
    return new MediaConnectDescribeReservationReservation(this, 'Reservation', this.__resources, this.input);
  }

}

export class MediaConnectDescribeReservationReservation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeReservationRequest) {
    super(scope, id);
  }

  public get currencyCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.CurrencyCode'),
        outputPath: 'Reservation.CurrencyCode',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.CurrencyCode', props);
    return resource.getResponseField('Reservation.CurrencyCode') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.Duration'),
        outputPath: 'Reservation.Duration',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.Duration', props);
    return resource.getResponseField('Reservation.Duration') as unknown as number;
  }

  public get durationUnits(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.DurationUnits'),
        outputPath: 'Reservation.DurationUnits',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.DurationUnits', props);
    return resource.getResponseField('Reservation.DurationUnits') as unknown as string;
  }

  public get end(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.End'),
        outputPath: 'Reservation.End',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.End', props);
    return resource.getResponseField('Reservation.End') as unknown as string;
  }

  public get offeringArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.OfferingArn'),
        outputPath: 'Reservation.OfferingArn',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.OfferingArn', props);
    return resource.getResponseField('Reservation.OfferingArn') as unknown as string;
  }

  public get offeringDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.OfferingDescription'),
        outputPath: 'Reservation.OfferingDescription',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.OfferingDescription', props);
    return resource.getResponseField('Reservation.OfferingDescription') as unknown as string;
  }

  public get pricePerUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.PricePerUnit'),
        outputPath: 'Reservation.PricePerUnit',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.PricePerUnit', props);
    return resource.getResponseField('Reservation.PricePerUnit') as unknown as string;
  }

  public get priceUnits(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.PriceUnits'),
        outputPath: 'Reservation.PriceUnits',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.PriceUnits', props);
    return resource.getResponseField('Reservation.PriceUnits') as unknown as string;
  }

  public get reservationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.ReservationArn'),
        outputPath: 'Reservation.ReservationArn',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.ReservationArn', props);
    return resource.getResponseField('Reservation.ReservationArn') as unknown as string;
  }

  public get reservationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.ReservationName'),
        outputPath: 'Reservation.ReservationName',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.ReservationName', props);
    return resource.getResponseField('Reservation.ReservationName') as unknown as string;
  }

  public get reservationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.ReservationState'),
        outputPath: 'Reservation.ReservationState',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.ReservationState', props);
    return resource.getResponseField('Reservation.ReservationState') as unknown as string;
  }

  public get resourceSpecification(): MediaConnectDescribeReservationReservationResourceSpecification {
    return new MediaConnectDescribeReservationReservationResourceSpecification(this, 'ResourceSpecification', this.__resources, this.input);
  }

  public get start(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.Start'),
        outputPath: 'Reservation.Start',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.Start', props);
    return resource.getResponseField('Reservation.Start') as unknown as string;
  }

}

export class MediaConnectDescribeReservationReservationResourceSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectDescribeReservationRequest) {
    super(scope, id);
  }

  public get reservedBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.ResourceSpecification.ReservedBitrate'),
        outputPath: 'Reservation.ResourceSpecification.ReservedBitrate',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.ResourceSpecification.ReservedBitrate', props);
    return resource.getResponseField('Reservation.ResourceSpecification.ReservedBitrate') as unknown as number;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservation',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.DescribeReservation.Reservation.ResourceSpecification.ResourceType'),
        outputPath: 'Reservation.ResourceSpecification.ResourceType',
        parameters: {
          ReservationArn: this.input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservation.Reservation.ResourceSpecification.ResourceType', props);
    return resource.getResponseField('Reservation.ResourceSpecification.ResourceType') as unknown as string;
  }

}

export class MediaConnectGrantFlowEntitlements extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectGrantFlowEntitlementsRequest) {
    super(scope, id);
  }

  public get entitlements(): shapes.MediaConnectEntitlement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantFlowEntitlements',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.GrantFlowEntitlements.Entitlements'),
        outputPath: 'Entitlements',
        parameters: {
          Entitlements: this.input.entitlements,
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GrantFlowEntitlements.Entitlements', props);
    return resource.getResponseField('Entitlements') as unknown as shapes.MediaConnectEntitlement[];
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantFlowEntitlements',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.GrantFlowEntitlements.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          Entitlements: this.input.entitlements,
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GrantFlowEntitlements.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

}

export class MediaConnectListEntitlements extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectListEntitlementsRequest) {
    super(scope, id);
  }

  public get entitlements(): shapes.MediaConnectListedEntitlement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitlements',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListEntitlements.Entitlements'),
        outputPath: 'Entitlements',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitlements.Entitlements', props);
    return resource.getResponseField('Entitlements') as unknown as shapes.MediaConnectListedEntitlement[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntitlements',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListEntitlements.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntitlements.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaConnectListFlows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectListFlowsRequest) {
    super(scope, id);
  }

  public get flows(): shapes.MediaConnectListedFlow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlows',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListFlows.Flows'),
        outputPath: 'Flows',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlows.Flows', props);
    return resource.getResponseField('Flows') as unknown as shapes.MediaConnectListedFlow[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlows',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListFlows.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaConnectListOfferings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectListOfferingsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferings',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListOfferings.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferings.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get offerings(): shapes.MediaConnectOffering[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferings',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListOfferings.Offerings'),
        outputPath: 'Offerings',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferings.Offerings', props);
    return resource.getResponseField('Offerings') as unknown as shapes.MediaConnectOffering[];
  }

}

export class MediaConnectListReservations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectListReservationsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReservations',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListReservations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReservations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get reservations(): shapes.MediaConnectReservation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReservations',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListReservations.Reservations'),
        outputPath: 'Reservations',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListReservations.Reservations', props);
    return resource.getResponseField('Reservations') as unknown as shapes.MediaConnectReservation[];
  }

}

export class MediaConnectListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaConnectPurchaseOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get reservation(): MediaConnectPurchaseOfferingReservation {
    return new MediaConnectPurchaseOfferingReservation(this, 'Reservation', this.__resources, this.input);
  }

}

export class MediaConnectPurchaseOfferingReservation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get currencyCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.CurrencyCode'),
        outputPath: 'Reservation.CurrencyCode',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.CurrencyCode', props);
    return resource.getResponseField('Reservation.CurrencyCode') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.Duration'),
        outputPath: 'Reservation.Duration',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.Duration', props);
    return resource.getResponseField('Reservation.Duration') as unknown as number;
  }

  public get durationUnits(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.DurationUnits'),
        outputPath: 'Reservation.DurationUnits',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.DurationUnits', props);
    return resource.getResponseField('Reservation.DurationUnits') as unknown as string;
  }

  public get end(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.End'),
        outputPath: 'Reservation.End',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.End', props);
    return resource.getResponseField('Reservation.End') as unknown as string;
  }

  public get offeringArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.OfferingArn'),
        outputPath: 'Reservation.OfferingArn',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.OfferingArn', props);
    return resource.getResponseField('Reservation.OfferingArn') as unknown as string;
  }

  public get offeringDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.OfferingDescription'),
        outputPath: 'Reservation.OfferingDescription',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.OfferingDescription', props);
    return resource.getResponseField('Reservation.OfferingDescription') as unknown as string;
  }

  public get pricePerUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.PricePerUnit'),
        outputPath: 'Reservation.PricePerUnit',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.PricePerUnit', props);
    return resource.getResponseField('Reservation.PricePerUnit') as unknown as string;
  }

  public get priceUnits(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.PriceUnits'),
        outputPath: 'Reservation.PriceUnits',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.PriceUnits', props);
    return resource.getResponseField('Reservation.PriceUnits') as unknown as string;
  }

  public get reservationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.ReservationArn'),
        outputPath: 'Reservation.ReservationArn',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.ReservationArn', props);
    return resource.getResponseField('Reservation.ReservationArn') as unknown as string;
  }

  public get reservationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.ReservationName'),
        outputPath: 'Reservation.ReservationName',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.ReservationName', props);
    return resource.getResponseField('Reservation.ReservationName') as unknown as string;
  }

  public get reservationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.ReservationState'),
        outputPath: 'Reservation.ReservationState',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.ReservationState', props);
    return resource.getResponseField('Reservation.ReservationState') as unknown as string;
  }

  public get resourceSpecification(): MediaConnectPurchaseOfferingReservationResourceSpecification {
    return new MediaConnectPurchaseOfferingReservationResourceSpecification(this, 'ResourceSpecification', this.__resources, this.input);
  }

  public get start(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.Start'),
        outputPath: 'Reservation.Start',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.Start', props);
    return resource.getResponseField('Reservation.Start') as unknown as string;
  }

}

export class MediaConnectPurchaseOfferingReservationResourceSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get reservedBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.ResourceSpecification.ReservedBitrate'),
        outputPath: 'Reservation.ResourceSpecification.ReservedBitrate',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.ResourceSpecification.ReservedBitrate', props);
    return resource.getResponseField('Reservation.ResourceSpecification.ReservedBitrate') as unknown as number;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.PurchaseOffering.Reservation.ResourceSpecification.ResourceType'),
        outputPath: 'Reservation.ResourceSpecification.ResourceType',
        parameters: {
          OfferingArn: this.input.offeringArn,
          ReservationName: this.input.reservationName,
          Start: this.input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.Reservation.ResourceSpecification.ResourceType', props);
    return resource.getResponseField('Reservation.ResourceSpecification.ResourceType') as unknown as string;
  }

}

export class MediaConnectRemoveFlowOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectRemoveFlowOutputRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RemoveFlowOutput.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
          OutputArn: this.input.outputArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveFlowOutput.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get outputArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RemoveFlowOutput.OutputArn'),
        outputPath: 'OutputArn',
        parameters: {
          FlowArn: this.input.flowArn,
          OutputArn: this.input.outputArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveFlowOutput.OutputArn', props);
    return resource.getResponseField('OutputArn') as unknown as string;
  }

}

export class MediaConnectRemoveFlowSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectRemoveFlowSourceRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RemoveFlowSource.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceArn: this.input.sourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveFlowSource.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RemoveFlowSource.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceArn: this.input.sourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveFlowSource.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

}

export class MediaConnectRemoveFlowVpcInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectRemoveFlowVpcInterfaceRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFlowVpcInterface',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RemoveFlowVpcInterface.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
          VpcInterfaceName: this.input.vpcInterfaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveFlowVpcInterface.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get nonDeletedNetworkInterfaceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFlowVpcInterface',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RemoveFlowVpcInterface.NonDeletedNetworkInterfaceIds'),
        outputPath: 'NonDeletedNetworkInterfaceIds',
        parameters: {
          FlowArn: this.input.flowArn,
          VpcInterfaceName: this.input.vpcInterfaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveFlowVpcInterface.NonDeletedNetworkInterfaceIds', props);
    return resource.getResponseField('NonDeletedNetworkInterfaceIds') as unknown as string[];
  }

  public get vpcInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeFlowVpcInterface',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RemoveFlowVpcInterface.VpcInterfaceName'),
        outputPath: 'VpcInterfaceName',
        parameters: {
          FlowArn: this.input.flowArn,
          VpcInterfaceName: this.input.vpcInterfaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveFlowVpcInterface.VpcInterfaceName', props);
    return resource.getResponseField('VpcInterfaceName') as unknown as string;
  }

}

export class MediaConnectRevokeFlowEntitlement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectRevokeFlowEntitlementRequest) {
    super(scope, id);
  }

  public get entitlementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RevokeFlowEntitlement.EntitlementArn'),
        outputPath: 'EntitlementArn',
        parameters: {
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RevokeFlowEntitlement.EntitlementArn', props);
    return resource.getResponseField('EntitlementArn') as unknown as string;
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.RevokeFlowEntitlement.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RevokeFlowEntitlement.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

}

export class MediaConnectStartFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectStartFlowRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.StartFlow.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartFlow.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.StartFlow.Status'),
        outputPath: 'Status',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartFlow.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class MediaConnectStopFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectStopFlowRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.StopFlow.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopFlow.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.StopFlow.Status'),
        outputPath: 'Status',
        parameters: {
          FlowArn: this.input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopFlow.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class MediaConnectUpdateFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowRequest) {
    super(scope, id);
  }

  public get flow(): MediaConnectUpdateFlowFlow {
    return new MediaConnectUpdateFlowFlow(this, 'Flow', this.__resources, this.input);
  }

}

export class MediaConnectUpdateFlowFlow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowRequest) {
    super(scope, id);
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.AvailabilityZone'),
        outputPath: 'Flow.AvailabilityZone',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.AvailabilityZone', props);
    return resource.getResponseField('Flow.AvailabilityZone') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Description'),
        outputPath: 'Flow.Description',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Description', props);
    return resource.getResponseField('Flow.Description') as unknown as string;
  }

  public get egressIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.EgressIp'),
        outputPath: 'Flow.EgressIp',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.EgressIp', props);
    return resource.getResponseField('Flow.EgressIp') as unknown as string;
  }

  public get entitlements(): shapes.MediaConnectEntitlement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Entitlements'),
        outputPath: 'Flow.Entitlements',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Entitlements', props);
    return resource.getResponseField('Flow.Entitlements') as unknown as shapes.MediaConnectEntitlement[];
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.FlowArn'),
        outputPath: 'Flow.FlowArn',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.FlowArn', props);
    return resource.getResponseField('Flow.FlowArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Name'),
        outputPath: 'Flow.Name',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Name', props);
    return resource.getResponseField('Flow.Name') as unknown as string;
  }

  public get outputs(): shapes.MediaConnectOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Outputs'),
        outputPath: 'Flow.Outputs',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Outputs', props);
    return resource.getResponseField('Flow.Outputs') as unknown as shapes.MediaConnectOutput[];
  }

  public get source(): MediaConnectUpdateFlowFlowSource {
    return new MediaConnectUpdateFlowFlowSource(this, 'Source', this.__resources, this.input);
  }

  public get sourceFailoverConfig(): MediaConnectUpdateFlowFlowSourceFailoverConfig {
    return new MediaConnectUpdateFlowFlowSourceFailoverConfig(this, 'SourceFailoverConfig', this.__resources, this.input);
  }

  public get sources(): shapes.MediaConnectSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Sources'),
        outputPath: 'Flow.Sources',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Sources', props);
    return resource.getResponseField('Flow.Sources') as unknown as shapes.MediaConnectSource[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Status'),
        outputPath: 'Flow.Status',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Status', props);
    return resource.getResponseField('Flow.Status') as unknown as string;
  }

  public get vpcInterfaces(): shapes.MediaConnectVpcInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.VpcInterfaces'),
        outputPath: 'Flow.VpcInterfaces',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.VpcInterfaces', props);
    return resource.getResponseField('Flow.VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectUpdateFlowFlowSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowRequest) {
    super(scope, id);
  }

  public get dataTransferSubscriberFeePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.DataTransferSubscriberFeePercent'),
        outputPath: 'Flow.Source.DataTransferSubscriberFeePercent',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Flow.Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectUpdateFlowFlowSourceDecryption {
    return new MediaConnectUpdateFlowFlowSourceDecryption(this, 'Decryption', this.__resources, this.input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Description'),
        outputPath: 'Flow.Source.Description',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Description', props);
    return resource.getResponseField('Flow.Source.Description') as unknown as string;
  }

  public get entitlementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.EntitlementArn'),
        outputPath: 'Flow.Source.EntitlementArn',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.EntitlementArn', props);
    return resource.getResponseField('Flow.Source.EntitlementArn') as unknown as string;
  }

  public get ingestIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.IngestIp'),
        outputPath: 'Flow.Source.IngestIp',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.IngestIp', props);
    return resource.getResponseField('Flow.Source.IngestIp') as unknown as string;
  }

  public get ingestPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.IngestPort'),
        outputPath: 'Flow.Source.IngestPort',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.IngestPort', props);
    return resource.getResponseField('Flow.Source.IngestPort') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Name'),
        outputPath: 'Flow.Source.Name',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Name', props);
    return resource.getResponseField('Flow.Source.Name') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.SourceArn'),
        outputPath: 'Flow.Source.SourceArn',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.SourceArn', props);
    return resource.getResponseField('Flow.Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectUpdateFlowFlowSourceTransport {
    return new MediaConnectUpdateFlowFlowSourceTransport(this, 'Transport', this.__resources, this.input);
  }

  public get vpcInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.VpcInterfaceName'),
        outputPath: 'Flow.Source.VpcInterfaceName',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.VpcInterfaceName', props);
    return resource.getResponseField('Flow.Source.VpcInterfaceName') as unknown as string;
  }

  public get whitelistCidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.WhitelistCidr'),
        outputPath: 'Flow.Source.WhitelistCidr',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.WhitelistCidr', props);
    return resource.getResponseField('Flow.Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectUpdateFlowFlowSourceDecryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowRequest) {
    super(scope, id);
  }

  public get algorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.Algorithm'),
        outputPath: 'Flow.Source.Decryption.Algorithm',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.Algorithm', props);
    return resource.getResponseField('Flow.Source.Decryption.Algorithm') as unknown as string;
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.ConstantInitializationVector'),
        outputPath: 'Flow.Source.Decryption.ConstantInitializationVector',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.ConstantInitializationVector', props);
    return resource.getResponseField('Flow.Source.Decryption.ConstantInitializationVector') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.DeviceId'),
        outputPath: 'Flow.Source.Decryption.DeviceId',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.DeviceId', props);
    return resource.getResponseField('Flow.Source.Decryption.DeviceId') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.KeyType'),
        outputPath: 'Flow.Source.Decryption.KeyType',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.KeyType', props);
    return resource.getResponseField('Flow.Source.Decryption.KeyType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.Region'),
        outputPath: 'Flow.Source.Decryption.Region',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.Region', props);
    return resource.getResponseField('Flow.Source.Decryption.Region') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.ResourceId'),
        outputPath: 'Flow.Source.Decryption.ResourceId',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.ResourceId', props);
    return resource.getResponseField('Flow.Source.Decryption.ResourceId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.RoleArn'),
        outputPath: 'Flow.Source.Decryption.RoleArn',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.RoleArn', props);
    return resource.getResponseField('Flow.Source.Decryption.RoleArn') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.SecretArn'),
        outputPath: 'Flow.Source.Decryption.SecretArn',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.SecretArn', props);
    return resource.getResponseField('Flow.Source.Decryption.SecretArn') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Decryption.Url'),
        outputPath: 'Flow.Source.Decryption.Url',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Decryption.Url', props);
    return resource.getResponseField('Flow.Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectUpdateFlowFlowSourceTransport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowRequest) {
    super(scope, id);
  }

  public get cidrAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Transport.CidrAllowList'),
        outputPath: 'Flow.Source.Transport.CidrAllowList',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Transport.CidrAllowList', props);
    return resource.getResponseField('Flow.Source.Transport.CidrAllowList') as unknown as string[];
  }

  public get maxBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Transport.MaxBitrate'),
        outputPath: 'Flow.Source.Transport.MaxBitrate',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Transport.MaxBitrate', props);
    return resource.getResponseField('Flow.Source.Transport.MaxBitrate') as unknown as number;
  }

  public get maxLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Transport.MaxLatency'),
        outputPath: 'Flow.Source.Transport.MaxLatency',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Transport.MaxLatency', props);
    return resource.getResponseField('Flow.Source.Transport.MaxLatency') as unknown as number;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Transport.Protocol'),
        outputPath: 'Flow.Source.Transport.Protocol',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Transport.Protocol', props);
    return resource.getResponseField('Flow.Source.Transport.Protocol') as unknown as string;
  }

  public get remoteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Transport.RemoteId'),
        outputPath: 'Flow.Source.Transport.RemoteId',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Transport.RemoteId', props);
    return resource.getResponseField('Flow.Source.Transport.RemoteId') as unknown as string;
  }

  public get smoothingLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Transport.SmoothingLatency'),
        outputPath: 'Flow.Source.Transport.SmoothingLatency',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Transport.SmoothingLatency', props);
    return resource.getResponseField('Flow.Source.Transport.SmoothingLatency') as unknown as number;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.Source.Transport.StreamId'),
        outputPath: 'Flow.Source.Transport.StreamId',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.Source.Transport.StreamId', props);
    return resource.getResponseField('Flow.Source.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectUpdateFlowFlowSourceFailoverConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowRequest) {
    super(scope, id);
  }

  public get recoveryWindow(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.SourceFailoverConfig.RecoveryWindow'),
        outputPath: 'Flow.SourceFailoverConfig.RecoveryWindow',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.SourceFailoverConfig.RecoveryWindow', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.RecoveryWindow') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlow',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlow.Flow.SourceFailoverConfig.State'),
        outputPath: 'Flow.SourceFailoverConfig.State',
        parameters: {
          FlowArn: this.input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.input.sourceFailoverConfig?.recoveryWindow,
            State: this.input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlow.Flow.SourceFailoverConfig.State', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.State') as unknown as string;
  }

}

export class MediaConnectUpdateFlowEntitlement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowEntitlementRequest) {
    super(scope, id);
  }

  public get entitlement(): MediaConnectUpdateFlowEntitlementEntitlement {
    return new MediaConnectUpdateFlowEntitlementEntitlement(this, 'Entitlement', this.__resources, this.input);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

}

export class MediaConnectUpdateFlowEntitlementEntitlement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowEntitlementRequest) {
    super(scope, id);
  }

  public get dataTransferSubscriberFeePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.DataTransferSubscriberFeePercent'),
        outputPath: 'Entitlement.DataTransferSubscriberFeePercent',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Entitlement.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Description'),
        outputPath: 'Entitlement.Description',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Description', props);
    return resource.getResponseField('Entitlement.Description') as unknown as string;
  }

  public get encryption(): MediaConnectUpdateFlowEntitlementEntitlementEncryption {
    return new MediaConnectUpdateFlowEntitlementEntitlementEncryption(this, 'Encryption', this.__resources, this.input);
  }

  public get entitlementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.EntitlementArn'),
        outputPath: 'Entitlement.EntitlementArn',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.EntitlementArn', props);
    return resource.getResponseField('Entitlement.EntitlementArn') as unknown as string;
  }

  public get entitlementStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.EntitlementStatus'),
        outputPath: 'Entitlement.EntitlementStatus',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.EntitlementStatus', props);
    return resource.getResponseField('Entitlement.EntitlementStatus') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Name'),
        outputPath: 'Entitlement.Name',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Name', props);
    return resource.getResponseField('Entitlement.Name') as unknown as string;
  }

  public get subscribers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Subscribers'),
        outputPath: 'Entitlement.Subscribers',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Subscribers', props);
    return resource.getResponseField('Entitlement.Subscribers') as unknown as string[];
  }

}

export class MediaConnectUpdateFlowEntitlementEntitlementEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowEntitlementRequest) {
    super(scope, id);
  }

  public get algorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.Algorithm'),
        outputPath: 'Entitlement.Encryption.Algorithm',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.Algorithm', props);
    return resource.getResponseField('Entitlement.Encryption.Algorithm') as unknown as string;
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.ConstantInitializationVector'),
        outputPath: 'Entitlement.Encryption.ConstantInitializationVector',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.ConstantInitializationVector', props);
    return resource.getResponseField('Entitlement.Encryption.ConstantInitializationVector') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.DeviceId'),
        outputPath: 'Entitlement.Encryption.DeviceId',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.DeviceId', props);
    return resource.getResponseField('Entitlement.Encryption.DeviceId') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.KeyType'),
        outputPath: 'Entitlement.Encryption.KeyType',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.KeyType', props);
    return resource.getResponseField('Entitlement.Encryption.KeyType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.Region'),
        outputPath: 'Entitlement.Encryption.Region',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.Region', props);
    return resource.getResponseField('Entitlement.Encryption.Region') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.ResourceId'),
        outputPath: 'Entitlement.Encryption.ResourceId',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.ResourceId', props);
    return resource.getResponseField('Entitlement.Encryption.ResourceId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.RoleArn'),
        outputPath: 'Entitlement.Encryption.RoleArn',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.RoleArn', props);
    return resource.getResponseField('Entitlement.Encryption.RoleArn') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.SecretArn'),
        outputPath: 'Entitlement.Encryption.SecretArn',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.SecretArn', props);
    return resource.getResponseField('Entitlement.Encryption.SecretArn') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowEntitlement',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowEntitlement.Entitlement.Encryption.Url'),
        outputPath: 'Entitlement.Encryption.Url',
        parameters: {
          Description: this.input.description,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          EntitlementArn: this.input.entitlementArn,
          EntitlementStatus: this.input.entitlementStatus,
          FlowArn: this.input.flowArn,
          Subscribers: this.input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowEntitlement.Entitlement.Encryption.Url', props);
    return resource.getResponseField('Entitlement.Encryption.Url') as unknown as string;
  }

}

export class MediaConnectUpdateFlowOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowOutputRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get output(): MediaConnectUpdateFlowOutputOutput {
    return new MediaConnectUpdateFlowOutputOutput(this, 'Output', this.__resources, this.input);
  }

}

export class MediaConnectUpdateFlowOutputOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowOutputRequest) {
    super(scope, id);
  }

  public get dataTransferSubscriberFeePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.DataTransferSubscriberFeePercent'),
        outputPath: 'Output.DataTransferSubscriberFeePercent',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Output.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Description'),
        outputPath: 'Output.Description',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Description', props);
    return resource.getResponseField('Output.Description') as unknown as string;
  }

  public get destination(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Destination'),
        outputPath: 'Output.Destination',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Destination', props);
    return resource.getResponseField('Output.Destination') as unknown as string;
  }

  public get encryption(): MediaConnectUpdateFlowOutputOutputEncryption {
    return new MediaConnectUpdateFlowOutputOutputEncryption(this, 'Encryption', this.__resources, this.input);
  }

  public get entitlementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.EntitlementArn'),
        outputPath: 'Output.EntitlementArn',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.EntitlementArn', props);
    return resource.getResponseField('Output.EntitlementArn') as unknown as string;
  }

  public get mediaLiveInputArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.MediaLiveInputArn'),
        outputPath: 'Output.MediaLiveInputArn',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.MediaLiveInputArn', props);
    return resource.getResponseField('Output.MediaLiveInputArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Name'),
        outputPath: 'Output.Name',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Name', props);
    return resource.getResponseField('Output.Name') as unknown as string;
  }

  public get outputArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.OutputArn'),
        outputPath: 'Output.OutputArn',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.OutputArn', props);
    return resource.getResponseField('Output.OutputArn') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Port'),
        outputPath: 'Output.Port',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Port', props);
    return resource.getResponseField('Output.Port') as unknown as number;
  }

  public get transport(): MediaConnectUpdateFlowOutputOutputTransport {
    return new MediaConnectUpdateFlowOutputOutputTransport(this, 'Transport', this.__resources, this.input);
  }

  public get vpcInterfaceAttachment(): MediaConnectUpdateFlowOutputOutputVpcInterfaceAttachment {
    return new MediaConnectUpdateFlowOutputOutputVpcInterfaceAttachment(this, 'VpcInterfaceAttachment', this.__resources, this.input);
  }

}

export class MediaConnectUpdateFlowOutputOutputEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowOutputRequest) {
    super(scope, id);
  }

  public get algorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.Algorithm'),
        outputPath: 'Output.Encryption.Algorithm',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.Algorithm', props);
    return resource.getResponseField('Output.Encryption.Algorithm') as unknown as string;
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.ConstantInitializationVector'),
        outputPath: 'Output.Encryption.ConstantInitializationVector',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.ConstantInitializationVector', props);
    return resource.getResponseField('Output.Encryption.ConstantInitializationVector') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.DeviceId'),
        outputPath: 'Output.Encryption.DeviceId',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.DeviceId', props);
    return resource.getResponseField('Output.Encryption.DeviceId') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.KeyType'),
        outputPath: 'Output.Encryption.KeyType',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.KeyType', props);
    return resource.getResponseField('Output.Encryption.KeyType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.Region'),
        outputPath: 'Output.Encryption.Region',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.Region', props);
    return resource.getResponseField('Output.Encryption.Region') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.ResourceId'),
        outputPath: 'Output.Encryption.ResourceId',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.ResourceId', props);
    return resource.getResponseField('Output.Encryption.ResourceId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.RoleArn'),
        outputPath: 'Output.Encryption.RoleArn',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.RoleArn', props);
    return resource.getResponseField('Output.Encryption.RoleArn') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.SecretArn'),
        outputPath: 'Output.Encryption.SecretArn',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.SecretArn', props);
    return resource.getResponseField('Output.Encryption.SecretArn') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Encryption.Url'),
        outputPath: 'Output.Encryption.Url',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Encryption.Url', props);
    return resource.getResponseField('Output.Encryption.Url') as unknown as string;
  }

}

export class MediaConnectUpdateFlowOutputOutputTransport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowOutputRequest) {
    super(scope, id);
  }

  public get cidrAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Transport.CidrAllowList'),
        outputPath: 'Output.Transport.CidrAllowList',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Transport.CidrAllowList', props);
    return resource.getResponseField('Output.Transport.CidrAllowList') as unknown as string[];
  }

  public get maxBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Transport.MaxBitrate'),
        outputPath: 'Output.Transport.MaxBitrate',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Transport.MaxBitrate', props);
    return resource.getResponseField('Output.Transport.MaxBitrate') as unknown as number;
  }

  public get maxLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Transport.MaxLatency'),
        outputPath: 'Output.Transport.MaxLatency',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Transport.MaxLatency', props);
    return resource.getResponseField('Output.Transport.MaxLatency') as unknown as number;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Transport.Protocol'),
        outputPath: 'Output.Transport.Protocol',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Transport.Protocol', props);
    return resource.getResponseField('Output.Transport.Protocol') as unknown as string;
  }

  public get remoteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Transport.RemoteId'),
        outputPath: 'Output.Transport.RemoteId',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Transport.RemoteId', props);
    return resource.getResponseField('Output.Transport.RemoteId') as unknown as string;
  }

  public get smoothingLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Transport.SmoothingLatency'),
        outputPath: 'Output.Transport.SmoothingLatency',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Transport.SmoothingLatency', props);
    return resource.getResponseField('Output.Transport.SmoothingLatency') as unknown as number;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.Transport.StreamId'),
        outputPath: 'Output.Transport.StreamId',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.Transport.StreamId', props);
    return resource.getResponseField('Output.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectUpdateFlowOutputOutputVpcInterfaceAttachment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowOutputRequest) {
    super(scope, id);
  }

  public get vpcInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowOutput',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowOutput.Output.VpcInterfaceAttachment.VpcInterfaceName'),
        outputPath: 'Output.VpcInterfaceAttachment.VpcInterfaceName',
        parameters: {
          CidrAllowList: this.input.cidrAllowList,
          Description: this.input.description,
          Destination: this.input.destination,
          Encryption: {
            Algorithm: this.input.encryption?.algorithm,
            ConstantInitializationVector: this.input.encryption?.constantInitializationVector,
            DeviceId: this.input.encryption?.deviceId,
            KeyType: this.input.encryption?.keyType,
            Region: this.input.encryption?.region,
            ResourceId: this.input.encryption?.resourceId,
            RoleArn: this.input.encryption?.roleArn,
            SecretArn: this.input.encryption?.secretArn,
            Url: this.input.encryption?.url,
          },
          FlowArn: this.input.flowArn,
          MaxLatency: this.input.maxLatency,
          OutputArn: this.input.outputArn,
          Port: this.input.port,
          Protocol: this.input.protocol,
          RemoteId: this.input.remoteId,
          SmoothingLatency: this.input.smoothingLatency,
          StreamId: this.input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowOutput.Output.VpcInterfaceAttachment.VpcInterfaceName', props);
    return resource.getResponseField('Output.VpcInterfaceAttachment.VpcInterfaceName') as unknown as string;
  }

}

export class MediaConnectUpdateFlowSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowSourceRequest) {
    super(scope, id);
  }

  public get flowArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.FlowArn'),
        outputPath: 'FlowArn',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get source(): MediaConnectUpdateFlowSourceSource {
    return new MediaConnectUpdateFlowSourceSource(this, 'Source', this.__resources, this.input);
  }

}

export class MediaConnectUpdateFlowSourceSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowSourceRequest) {
    super(scope, id);
  }

  public get dataTransferSubscriberFeePercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.DataTransferSubscriberFeePercent'),
        outputPath: 'Source.DataTransferSubscriberFeePercent',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectUpdateFlowSourceSourceDecryption {
    return new MediaConnectUpdateFlowSourceSourceDecryption(this, 'Decryption', this.__resources, this.input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Description'),
        outputPath: 'Source.Description',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Description', props);
    return resource.getResponseField('Source.Description') as unknown as string;
  }

  public get entitlementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.EntitlementArn'),
        outputPath: 'Source.EntitlementArn',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.EntitlementArn', props);
    return resource.getResponseField('Source.EntitlementArn') as unknown as string;
  }

  public get ingestIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.IngestIp'),
        outputPath: 'Source.IngestIp',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.IngestIp', props);
    return resource.getResponseField('Source.IngestIp') as unknown as string;
  }

  public get ingestPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.IngestPort'),
        outputPath: 'Source.IngestPort',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.IngestPort', props);
    return resource.getResponseField('Source.IngestPort') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Name'),
        outputPath: 'Source.Name',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Name', props);
    return resource.getResponseField('Source.Name') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.SourceArn'),
        outputPath: 'Source.SourceArn',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.SourceArn', props);
    return resource.getResponseField('Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectUpdateFlowSourceSourceTransport {
    return new MediaConnectUpdateFlowSourceSourceTransport(this, 'Transport', this.__resources, this.input);
  }

  public get vpcInterfaceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.VpcInterfaceName'),
        outputPath: 'Source.VpcInterfaceName',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.VpcInterfaceName', props);
    return resource.getResponseField('Source.VpcInterfaceName') as unknown as string;
  }

  public get whitelistCidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.WhitelistCidr'),
        outputPath: 'Source.WhitelistCidr',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.WhitelistCidr', props);
    return resource.getResponseField('Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectUpdateFlowSourceSourceDecryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowSourceRequest) {
    super(scope, id);
  }

  public get algorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.Algorithm'),
        outputPath: 'Source.Decryption.Algorithm',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.Algorithm', props);
    return resource.getResponseField('Source.Decryption.Algorithm') as unknown as string;
  }

  public get constantInitializationVector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.ConstantInitializationVector'),
        outputPath: 'Source.Decryption.ConstantInitializationVector',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.ConstantInitializationVector', props);
    return resource.getResponseField('Source.Decryption.ConstantInitializationVector') as unknown as string;
  }

  public get deviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.DeviceId'),
        outputPath: 'Source.Decryption.DeviceId',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.DeviceId', props);
    return resource.getResponseField('Source.Decryption.DeviceId') as unknown as string;
  }

  public get keyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.KeyType'),
        outputPath: 'Source.Decryption.KeyType',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.KeyType', props);
    return resource.getResponseField('Source.Decryption.KeyType') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.Region'),
        outputPath: 'Source.Decryption.Region',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.Region', props);
    return resource.getResponseField('Source.Decryption.Region') as unknown as string;
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.ResourceId'),
        outputPath: 'Source.Decryption.ResourceId',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.ResourceId', props);
    return resource.getResponseField('Source.Decryption.ResourceId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.RoleArn'),
        outputPath: 'Source.Decryption.RoleArn',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.RoleArn', props);
    return resource.getResponseField('Source.Decryption.RoleArn') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.SecretArn'),
        outputPath: 'Source.Decryption.SecretArn',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.SecretArn', props);
    return resource.getResponseField('Source.Decryption.SecretArn') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Decryption.Url'),
        outputPath: 'Source.Decryption.Url',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Decryption.Url', props);
    return resource.getResponseField('Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectUpdateFlowSourceSourceTransport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaConnectUpdateFlowSourceRequest) {
    super(scope, id);
  }

  public get cidrAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Transport.CidrAllowList'),
        outputPath: 'Source.Transport.CidrAllowList',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Transport.CidrAllowList', props);
    return resource.getResponseField('Source.Transport.CidrAllowList') as unknown as string[];
  }

  public get maxBitrate(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Transport.MaxBitrate'),
        outputPath: 'Source.Transport.MaxBitrate',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Transport.MaxBitrate', props);
    return resource.getResponseField('Source.Transport.MaxBitrate') as unknown as number;
  }

  public get maxLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Transport.MaxLatency'),
        outputPath: 'Source.Transport.MaxLatency',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Transport.MaxLatency', props);
    return resource.getResponseField('Source.Transport.MaxLatency') as unknown as number;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Transport.Protocol'),
        outputPath: 'Source.Transport.Protocol',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Transport.Protocol', props);
    return resource.getResponseField('Source.Transport.Protocol') as unknown as string;
  }

  public get remoteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Transport.RemoteId'),
        outputPath: 'Source.Transport.RemoteId',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Transport.RemoteId', props);
    return resource.getResponseField('Source.Transport.RemoteId') as unknown as string;
  }

  public get smoothingLatency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Transport.SmoothingLatency'),
        outputPath: 'Source.Transport.SmoothingLatency',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Transport.SmoothingLatency', props);
    return resource.getResponseField('Source.Transport.SmoothingLatency') as unknown as number;
  }

  public get streamId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFlowSource',
        service: 'MediaConnect',
        physicalResourceId: cr.PhysicalResourceId.of('MediaConnect.UpdateFlowSource.Source.Transport.StreamId'),
        outputPath: 'Source.Transport.StreamId',
        parameters: {
          Decryption: {
            Algorithm: this.input.decryption?.algorithm,
            ConstantInitializationVector: this.input.decryption?.constantInitializationVector,
            DeviceId: this.input.decryption?.deviceId,
            KeyType: this.input.decryption?.keyType,
            Region: this.input.decryption?.region,
            ResourceId: this.input.decryption?.resourceId,
            RoleArn: this.input.decryption?.roleArn,
            SecretArn: this.input.decryption?.secretArn,
            Url: this.input.decryption?.url,
          },
          Description: this.input.description,
          EntitlementArn: this.input.entitlementArn,
          FlowArn: this.input.flowArn,
          IngestPort: this.input.ingestPort,
          MaxBitrate: this.input.maxBitrate,
          MaxLatency: this.input.maxLatency,
          Protocol: this.input.protocol,
          SourceArn: this.input.sourceArn,
          StreamId: this.input.streamId,
          VpcInterfaceName: this.input.vpcInterfaceName,
          WhitelistCidr: this.input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFlowSource.Source.Transport.StreamId', props);
    return resource.getResponseField('Source.Transport.StreamId') as unknown as string;
  }

}

