import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaConnectClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addFlowOutputs(input: shapes.MediaConnectAddFlowOutputsRequest): MediaConnectResponsesAddFlowOutputs {
    return new MediaConnectResponsesAddFlowOutputs(this, this.__resources, input);
  }

  public addFlowSources(input: shapes.MediaConnectAddFlowSourcesRequest): MediaConnectResponsesAddFlowSources {
    return new MediaConnectResponsesAddFlowSources(this, this.__resources, input);
  }

  public addFlowVpcInterfaces(input: shapes.MediaConnectAddFlowVpcInterfacesRequest): MediaConnectResponsesAddFlowVpcInterfaces {
    return new MediaConnectResponsesAddFlowVpcInterfaces(this, this.__resources, input);
  }

  public createFlow(input: shapes.MediaConnectCreateFlowRequest): MediaConnectResponsesCreateFlow {
    return new MediaConnectResponsesCreateFlow(this, this.__resources, input);
  }

  public deleteFlow(input: shapes.MediaConnectDeleteFlowRequest): MediaConnectResponsesDeleteFlow {
    return new MediaConnectResponsesDeleteFlow(this, this.__resources, input);
  }

  public describeFlow(input: shapes.MediaConnectDescribeFlowRequest): MediaConnectResponsesDescribeFlow {
    return new MediaConnectResponsesDescribeFlow(this, this.__resources, input);
  }

  public describeOffering(input: shapes.MediaConnectDescribeOfferingRequest): MediaConnectResponsesDescribeOffering {
    return new MediaConnectResponsesDescribeOffering(this, this.__resources, input);
  }

  public describeReservation(input: shapes.MediaConnectDescribeReservationRequest): MediaConnectResponsesDescribeReservation {
    return new MediaConnectResponsesDescribeReservation(this, this.__resources, input);
  }

  public grantFlowEntitlements(input: shapes.MediaConnectGrantFlowEntitlementsRequest): MediaConnectResponsesGrantFlowEntitlements {
    return new MediaConnectResponsesGrantFlowEntitlements(this, this.__resources, input);
  }

  public listEntitlements(input: shapes.MediaConnectListEntitlementsRequest): MediaConnectResponsesListEntitlements {
    return new MediaConnectResponsesListEntitlements(this, this.__resources, input);
  }

  public listFlows(input: shapes.MediaConnectListFlowsRequest): MediaConnectResponsesListFlows {
    return new MediaConnectResponsesListFlows(this, this.__resources, input);
  }

  public listOfferings(input: shapes.MediaConnectListOfferingsRequest): MediaConnectResponsesListOfferings {
    return new MediaConnectResponsesListOfferings(this, this.__resources, input);
  }

  public listReservations(input: shapes.MediaConnectListReservationsRequest): MediaConnectResponsesListReservations {
    return new MediaConnectResponsesListReservations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.MediaConnectListTagsForResourceRequest): MediaConnectResponsesListTagsForResource {
    return new MediaConnectResponsesListTagsForResource(this, this.__resources, input);
  }

  public purchaseOffering(input: shapes.MediaConnectPurchaseOfferingRequest): MediaConnectResponsesPurchaseOffering {
    return new MediaConnectResponsesPurchaseOffering(this, this.__resources, input);
  }

  public removeFlowOutput(input: shapes.MediaConnectRemoveFlowOutputRequest): MediaConnectResponsesRemoveFlowOutput {
    return new MediaConnectResponsesRemoveFlowOutput(this, this.__resources, input);
  }

  public removeFlowSource(input: shapes.MediaConnectRemoveFlowSourceRequest): MediaConnectResponsesRemoveFlowSource {
    return new MediaConnectResponsesRemoveFlowSource(this, this.__resources, input);
  }

  public removeFlowVpcInterface(input: shapes.MediaConnectRemoveFlowVpcInterfaceRequest): MediaConnectResponsesRemoveFlowVpcInterface {
    return new MediaConnectResponsesRemoveFlowVpcInterface(this, this.__resources, input);
  }

  public revokeFlowEntitlement(input: shapes.MediaConnectRevokeFlowEntitlementRequest): MediaConnectResponsesRevokeFlowEntitlement {
    return new MediaConnectResponsesRevokeFlowEntitlement(this, this.__resources, input);
  }

  public startFlow(input: shapes.MediaConnectStartFlowRequest): MediaConnectResponsesStartFlow {
    return new MediaConnectResponsesStartFlow(this, this.__resources, input);
  }

  public stopFlow(input: shapes.MediaConnectStopFlowRequest): MediaConnectResponsesStopFlow {
    return new MediaConnectResponsesStopFlow(this, this.__resources, input);
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

  public updateFlow(input: shapes.MediaConnectUpdateFlowRequest): MediaConnectResponsesUpdateFlow {
    return new MediaConnectResponsesUpdateFlow(this, this.__resources, input);
  }

  public updateFlowEntitlement(input: shapes.MediaConnectUpdateFlowEntitlementRequest): MediaConnectResponsesUpdateFlowEntitlement {
    return new MediaConnectResponsesUpdateFlowEntitlement(this, this.__resources, input);
  }

  public updateFlowOutput(input: shapes.MediaConnectUpdateFlowOutputRequest): MediaConnectResponsesUpdateFlowOutput {
    return new MediaConnectResponsesUpdateFlowOutput(this, this.__resources, input);
  }

  public updateFlowSource(input: shapes.MediaConnectUpdateFlowSourceRequest): MediaConnectResponsesUpdateFlowSource {
    return new MediaConnectResponsesUpdateFlowSource(this, this.__resources, input);
  }

}

export class MediaConnectResponsesAddFlowOutputs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectAddFlowOutputsRequest) {
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
          FlowArn: this.__input.flowArn,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddFlowOutputs.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
          Outputs: this.__input.outputs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddFlowOutputs.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.MediaConnectOutput[];
  }

}

export class MediaConnectResponsesAddFlowSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectAddFlowSourcesRequest) {
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
          FlowArn: this.__input.flowArn,
          Sources: this.__input.sources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddFlowSources.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
          Sources: this.__input.sources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddFlowSources.Sources', props);
    return resource.getResponseField('Sources') as unknown as shapes.MediaConnectSource[];
  }

}

export class MediaConnectResponsesAddFlowVpcInterfaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectAddFlowVpcInterfacesRequest) {
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
          FlowArn: this.__input.flowArn,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddFlowVpcInterfaces.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddFlowVpcInterfaces.VpcInterfaces', props);
    return resource.getResponseField('VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectResponsesCreateFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectCreateFlowRequest) {
  }

  public get flow(): MediaConnectResponsesCreateFlowFlow {
    return new MediaConnectResponsesCreateFlowFlow(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesCreateFlowFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectCreateFlowRequest) {
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.AvailabilityZone', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Description', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.EgressIp', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Entitlements', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.FlowArn', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Name', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Outputs', props);
    return resource.getResponseField('Flow.Outputs') as unknown as shapes.MediaConnectOutput[];
  }

  public get source(): MediaConnectResponsesCreateFlowFlowSource {
    return new MediaConnectResponsesCreateFlowFlowSource(this.__scope, this.__resources, this.__input);
  }

  public get sourceFailoverConfig(): MediaConnectResponsesCreateFlowFlowSourceFailoverConfig {
    return new MediaConnectResponsesCreateFlowFlowSourceFailoverConfig(this.__scope, this.__resources, this.__input);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Sources', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Status', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.VpcInterfaces', props);
    return resource.getResponseField('Flow.VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectResponsesCreateFlowFlowSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectCreateFlowRequest) {
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Flow.Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectResponsesCreateFlowFlowSourceDecryption {
    return new MediaConnectResponsesCreateFlowFlowSourceDecryption(this.__scope, this.__resources, this.__input);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Description', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.EntitlementArn', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.IngestIp', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.IngestPort', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Name', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.SourceArn', props);
    return resource.getResponseField('Flow.Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectResponsesCreateFlowFlowSourceTransport {
    return new MediaConnectResponsesCreateFlowFlowSourceTransport(this.__scope, this.__resources, this.__input);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.VpcInterfaceName', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.WhitelistCidr', props);
    return resource.getResponseField('Flow.Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectResponsesCreateFlowFlowSourceDecryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectCreateFlowRequest) {
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.Algorithm', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.ConstantInitializationVector', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.DeviceId', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.KeyType', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.Region', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.ResourceId', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.RoleArn', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.SecretArn', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Decryption.Url', props);
    return resource.getResponseField('Flow.Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectResponsesCreateFlowFlowSourceTransport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectCreateFlowRequest) {
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Transport.CidrAllowList', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Transport.MaxBitrate', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Transport.MaxLatency', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Transport.Protocol', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Transport.RemoteId', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Transport.SmoothingLatency', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.Source.Transport.StreamId', props);
    return resource.getResponseField('Flow.Source.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectResponsesCreateFlowFlowSourceFailoverConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectCreateFlowRequest) {
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.SourceFailoverConfig.RecoveryWindow', props);
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
          AvailabilityZone: this.__input.availabilityZone,
          Entitlements: this.__input.entitlements,
          Name: this.__input.name,
          Outputs: this.__input.outputs,
          Source: {
            Decryption: {
              Algorithm: this.__input.source?.decryption?.algorithm,
              ConstantInitializationVector: this.__input.source?.decryption?.constantInitializationVector,
              DeviceId: this.__input.source?.decryption?.deviceId,
              KeyType: this.__input.source?.decryption?.keyType,
              Region: this.__input.source?.decryption?.region,
              ResourceId: this.__input.source?.decryption?.resourceId,
              RoleArn: this.__input.source?.decryption?.roleArn,
              SecretArn: this.__input.source?.decryption?.secretArn,
              Url: this.__input.source?.decryption?.url,
            },
            Description: this.__input.source?.description,
            EntitlementArn: this.__input.source?.entitlementArn,
            IngestPort: this.__input.source?.ingestPort,
            MaxBitrate: this.__input.source?.maxBitrate,
            MaxLatency: this.__input.source?.maxLatency,
            Name: this.__input.source?.name,
            Protocol: this.__input.source?.protocol,
            StreamId: this.__input.source?.streamId,
            VpcInterfaceName: this.__input.source?.vpcInterfaceName,
            WhitelistCidr: this.__input.source?.whitelistCidr,
          },
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
          Sources: this.__input.sources,
          VpcInterfaces: this.__input.vpcInterfaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlow.Flow.SourceFailoverConfig.State', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.State') as unknown as string;
  }

}

export class MediaConnectResponsesDeleteFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDeleteFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFlow.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFlow.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class MediaConnectResponsesDescribeFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeFlowRequest) {
  }

  public get flow(): MediaConnectResponsesDescribeFlowFlow {
    return new MediaConnectResponsesDescribeFlowFlow(this.__scope, this.__resources, this.__input);
  }

  public get messages(): MediaConnectResponsesDescribeFlowMessages {
    return new MediaConnectResponsesDescribeFlowMessages(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesDescribeFlowFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.AvailabilityZone', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Description', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.EgressIp', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Entitlements', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Name', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Outputs', props);
    return resource.getResponseField('Flow.Outputs') as unknown as shapes.MediaConnectOutput[];
  }

  public get source(): MediaConnectResponsesDescribeFlowFlowSource {
    return new MediaConnectResponsesDescribeFlowFlowSource(this.__scope, this.__resources, this.__input);
  }

  public get sourceFailoverConfig(): MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig {
    return new MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig(this.__scope, this.__resources, this.__input);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Sources', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Status', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.VpcInterfaces', props);
    return resource.getResponseField('Flow.VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectResponsesDescribeFlowFlowSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Flow.Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectResponsesDescribeFlowFlowSourceDecryption {
    return new MediaConnectResponsesDescribeFlowFlowSourceDecryption(this.__scope, this.__resources, this.__input);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Description', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.EntitlementArn', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.IngestIp', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.IngestPort', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Name', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.SourceArn', props);
    return resource.getResponseField('Flow.Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectResponsesDescribeFlowFlowSourceTransport {
    return new MediaConnectResponsesDescribeFlowFlowSourceTransport(this.__scope, this.__resources, this.__input);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.VpcInterfaceName', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.WhitelistCidr', props);
    return resource.getResponseField('Flow.Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectResponsesDescribeFlowFlowSourceDecryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.Algorithm', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.ConstantInitializationVector', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.DeviceId', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.KeyType', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.Region', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.ResourceId', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.RoleArn', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.SecretArn', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Decryption.Url', props);
    return resource.getResponseField('Flow.Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectResponsesDescribeFlowFlowSourceTransport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Transport.CidrAllowList', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Transport.MaxBitrate', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Transport.MaxLatency', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Transport.Protocol', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Transport.RemoteId', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Transport.SmoothingLatency', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.Source.Transport.StreamId', props);
    return resource.getResponseField('Flow.Source.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectResponsesDescribeFlowFlowSourceFailoverConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.SourceFailoverConfig.RecoveryWindow', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Flow.SourceFailoverConfig.State', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.State') as unknown as string;
  }

}

export class MediaConnectResponsesDescribeFlowMessages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlow.Messages.Errors', props);
    return resource.getResponseField('Messages.Errors') as unknown as string[];
  }

}

export class MediaConnectResponsesDescribeOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeOfferingRequest) {
  }

  public get offering(): MediaConnectResponsesDescribeOfferingOffering {
    return new MediaConnectResponsesDescribeOfferingOffering(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesDescribeOfferingOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeOfferingRequest) {
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.CurrencyCode', props);
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.Duration', props);
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.DurationUnits', props);
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.OfferingArn', props);
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.OfferingDescription', props);
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.PricePerUnit', props);
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.PriceUnits', props);
    return resource.getResponseField('Offering.PriceUnits') as unknown as string;
  }

  public get resourceSpecification(): MediaConnectResponsesDescribeOfferingOfferingResourceSpecification {
    return new MediaConnectResponsesDescribeOfferingOfferingResourceSpecification(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesDescribeOfferingOfferingResourceSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeOfferingRequest) {
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.ResourceSpecification.ReservedBitrate', props);
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
          OfferingArn: this.__input.offeringArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOffering.Offering.ResourceSpecification.ResourceType', props);
    return resource.getResponseField('Offering.ResourceSpecification.ResourceType') as unknown as string;
  }

}

export class MediaConnectResponsesDescribeReservation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeReservationRequest) {
  }

  public get reservation(): MediaConnectResponsesDescribeReservationReservation {
    return new MediaConnectResponsesDescribeReservationReservation(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesDescribeReservationReservation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeReservationRequest) {
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.CurrencyCode', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.Duration', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.DurationUnits', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.End', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.OfferingArn', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.OfferingDescription', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.PricePerUnit', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.PriceUnits', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.ReservationArn', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.ReservationName', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.ReservationState', props);
    return resource.getResponseField('Reservation.ReservationState') as unknown as string;
  }

  public get resourceSpecification(): MediaConnectResponsesDescribeReservationReservationResourceSpecification {
    return new MediaConnectResponsesDescribeReservationReservationResourceSpecification(this.__scope, this.__resources, this.__input);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.Start', props);
    return resource.getResponseField('Reservation.Start') as unknown as string;
  }

}

export class MediaConnectResponsesDescribeReservationReservationResourceSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectDescribeReservationRequest) {
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.ResourceSpecification.ReservedBitrate', props);
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
          ReservationArn: this.__input.reservationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservation.Reservation.ResourceSpecification.ResourceType', props);
    return resource.getResponseField('Reservation.ResourceSpecification.ResourceType') as unknown as string;
  }

}

export class MediaConnectResponsesGrantFlowEntitlements {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectGrantFlowEntitlementsRequest) {
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
          Entitlements: this.__input.entitlements,
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GrantFlowEntitlements.Entitlements', props);
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
          Entitlements: this.__input.entitlements,
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GrantFlowEntitlements.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

}

export class MediaConnectResponsesListEntitlements {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectListEntitlementsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitlements.Entitlements', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntitlements.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaConnectResponsesListFlows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectListFlowsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlows.Flows', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaConnectResponsesListOfferings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectListOfferingsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferings.NextToken', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferings.Offerings', props);
    return resource.getResponseField('Offerings') as unknown as shapes.MediaConnectOffering[];
  }

}

export class MediaConnectResponsesListReservations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectListReservationsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReservations.NextToken', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReservations.Reservations', props);
    return resource.getResponseField('Reservations') as unknown as shapes.MediaConnectReservation[];
  }

}

export class MediaConnectResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MediaConnectResponsesPurchaseOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectPurchaseOfferingRequest) {
  }

  public get reservation(): MediaConnectResponsesPurchaseOfferingReservation {
    return new MediaConnectResponsesPurchaseOfferingReservation(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesPurchaseOfferingReservation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectPurchaseOfferingRequest) {
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.CurrencyCode', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.Duration', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.DurationUnits', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.End', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.OfferingArn', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.OfferingDescription', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.PricePerUnit', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.PriceUnits', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.ReservationArn', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.ReservationName', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.ReservationState', props);
    return resource.getResponseField('Reservation.ReservationState') as unknown as string;
  }

  public get resourceSpecification(): MediaConnectResponsesPurchaseOfferingReservationResourceSpecification {
    return new MediaConnectResponsesPurchaseOfferingReservationResourceSpecification(this.__scope, this.__resources, this.__input);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.Start', props);
    return resource.getResponseField('Reservation.Start') as unknown as string;
  }

}

export class MediaConnectResponsesPurchaseOfferingReservationResourceSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectPurchaseOfferingRequest) {
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.ResourceSpecification.ReservedBitrate', props);
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
          OfferingArn: this.__input.offeringArn,
          ReservationName: this.__input.reservationName,
          Start: this.__input.start,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.Reservation.ResourceSpecification.ResourceType', props);
    return resource.getResponseField('Reservation.ResourceSpecification.ResourceType') as unknown as string;
  }

}

export class MediaConnectResponsesRemoveFlowOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectRemoveFlowOutputRequest) {
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
          FlowArn: this.__input.flowArn,
          OutputArn: this.__input.outputArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveFlowOutput.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
          OutputArn: this.__input.outputArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveFlowOutput.OutputArn', props);
    return resource.getResponseField('OutputArn') as unknown as string;
  }

}

export class MediaConnectResponsesRemoveFlowSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectRemoveFlowSourceRequest) {
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
          FlowArn: this.__input.flowArn,
          SourceArn: this.__input.sourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveFlowSource.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
          SourceArn: this.__input.sourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveFlowSource.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

}

export class MediaConnectResponsesRemoveFlowVpcInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectRemoveFlowVpcInterfaceRequest) {
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
          FlowArn: this.__input.flowArn,
          VpcInterfaceName: this.__input.vpcInterfaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveFlowVpcInterface.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
          VpcInterfaceName: this.__input.vpcInterfaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveFlowVpcInterface.NonDeletedNetworkInterfaceIds', props);
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
          FlowArn: this.__input.flowArn,
          VpcInterfaceName: this.__input.vpcInterfaceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveFlowVpcInterface.VpcInterfaceName', props);
    return resource.getResponseField('VpcInterfaceName') as unknown as string;
  }

}

export class MediaConnectResponsesRevokeFlowEntitlement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectRevokeFlowEntitlementRequest) {
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
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RevokeFlowEntitlement.EntitlementArn', props);
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
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RevokeFlowEntitlement.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

}

export class MediaConnectResponsesStartFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectStartFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFlow.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartFlow.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class MediaConnectResponsesStopFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectStopFlowRequest) {
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopFlow.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopFlow.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowRequest) {
  }

  public get flow(): MediaConnectResponsesUpdateFlowFlow {
    return new MediaConnectResponsesUpdateFlowFlow(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesUpdateFlowFlow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowRequest) {
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.AvailabilityZone', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Description', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.EgressIp', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Entitlements', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.FlowArn', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Name', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Outputs', props);
    return resource.getResponseField('Flow.Outputs') as unknown as shapes.MediaConnectOutput[];
  }

  public get source(): MediaConnectResponsesUpdateFlowFlowSource {
    return new MediaConnectResponsesUpdateFlowFlowSource(this.__scope, this.__resources, this.__input);
  }

  public get sourceFailoverConfig(): MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig {
    return new MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig(this.__scope, this.__resources, this.__input);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Sources', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Status', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.VpcInterfaces', props);
    return resource.getResponseField('Flow.VpcInterfaces') as unknown as shapes.MediaConnectVpcInterface[];
  }

}

export class MediaConnectResponsesUpdateFlowFlowSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowRequest) {
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Flow.Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectResponsesUpdateFlowFlowSourceDecryption {
    return new MediaConnectResponsesUpdateFlowFlowSourceDecryption(this.__scope, this.__resources, this.__input);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Description', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.EntitlementArn', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.IngestIp', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.IngestPort', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Name', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.SourceArn', props);
    return resource.getResponseField('Flow.Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectResponsesUpdateFlowFlowSourceTransport {
    return new MediaConnectResponsesUpdateFlowFlowSourceTransport(this.__scope, this.__resources, this.__input);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.VpcInterfaceName', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.WhitelistCidr', props);
    return resource.getResponseField('Flow.Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowFlowSourceDecryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowRequest) {
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.Algorithm', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.ConstantInitializationVector', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.DeviceId', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.KeyType', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.Region', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.ResourceId', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.RoleArn', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.SecretArn', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Decryption.Url', props);
    return resource.getResponseField('Flow.Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowFlowSourceTransport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowRequest) {
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Transport.CidrAllowList', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Transport.MaxBitrate', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Transport.MaxLatency', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Transport.Protocol', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Transport.RemoteId', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Transport.SmoothingLatency', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.Source.Transport.StreamId', props);
    return resource.getResponseField('Flow.Source.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowFlowSourceFailoverConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowRequest) {
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.SourceFailoverConfig.RecoveryWindow', props);
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
          FlowArn: this.__input.flowArn,
          SourceFailoverConfig: {
            RecoveryWindow: this.__input.sourceFailoverConfig?.recoveryWindow,
            State: this.__input.sourceFailoverConfig?.state,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlow.Flow.SourceFailoverConfig.State', props);
    return resource.getResponseField('Flow.SourceFailoverConfig.State') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowEntitlement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowEntitlementRequest) {
  }

  public get entitlement(): MediaConnectResponsesUpdateFlowEntitlementEntitlement {
    return new MediaConnectResponsesUpdateFlowEntitlementEntitlement(this.__scope, this.__resources, this.__input);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowEntitlementEntitlement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowEntitlementRequest) {
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.DataTransferSubscriberFeePercent', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Description', props);
    return resource.getResponseField('Entitlement.Description') as unknown as string;
  }

  public get encryption(): MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption {
    return new MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption(this.__scope, this.__resources, this.__input);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.EntitlementArn', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.EntitlementStatus', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Name', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Subscribers', props);
    return resource.getResponseField('Entitlement.Subscribers') as unknown as string[];
  }

}

export class MediaConnectResponsesUpdateFlowEntitlementEntitlementEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowEntitlementRequest) {
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.Algorithm', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.ConstantInitializationVector', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.DeviceId', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.KeyType', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.Region', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.ResourceId', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.RoleArn', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.SecretArn', props);
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
          Description: this.__input.description,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          EntitlementArn: this.__input.entitlementArn,
          EntitlementStatus: this.__input.entitlementStatus,
          FlowArn: this.__input.flowArn,
          Subscribers: this.__input.subscribers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowEntitlement.Entitlement.Encryption.Url', props);
    return resource.getResponseField('Entitlement.Encryption.Url') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowOutputRequest) {
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get output(): MediaConnectResponsesUpdateFlowOutputOutput {
    return new MediaConnectResponsesUpdateFlowOutputOutput(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesUpdateFlowOutputOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowOutputRequest) {
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.DataTransferSubscriberFeePercent', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Description', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Destination', props);
    return resource.getResponseField('Output.Destination') as unknown as string;
  }

  public get encryption(): MediaConnectResponsesUpdateFlowOutputOutputEncryption {
    return new MediaConnectResponsesUpdateFlowOutputOutputEncryption(this.__scope, this.__resources, this.__input);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.EntitlementArn', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.MediaLiveInputArn', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Name', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.OutputArn', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Port', props);
    return resource.getResponseField('Output.Port') as unknown as number;
  }

  public get transport(): MediaConnectResponsesUpdateFlowOutputOutputTransport {
    return new MediaConnectResponsesUpdateFlowOutputOutputTransport(this.__scope, this.__resources, this.__input);
  }

  public get vpcInterfaceAttachment(): MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment {
    return new MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesUpdateFlowOutputOutputEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowOutputRequest) {
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.Algorithm', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.ConstantInitializationVector', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.DeviceId', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.KeyType', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.Region', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.ResourceId', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.RoleArn', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.SecretArn', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Encryption.Url', props);
    return resource.getResponseField('Output.Encryption.Url') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowOutputOutputTransport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowOutputRequest) {
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Transport.CidrAllowList', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Transport.MaxBitrate', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Transport.MaxLatency', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Transport.Protocol', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Transport.RemoteId', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Transport.SmoothingLatency', props);
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.Transport.StreamId', props);
    return resource.getResponseField('Output.Transport.StreamId') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowOutputOutputVpcInterfaceAttachment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowOutputRequest) {
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
          CidrAllowList: this.__input.cidrAllowList,
          Description: this.__input.description,
          Destination: this.__input.destination,
          Encryption: {
            Algorithm: this.__input.encryption?.algorithm,
            ConstantInitializationVector: this.__input.encryption?.constantInitializationVector,
            DeviceId: this.__input.encryption?.deviceId,
            KeyType: this.__input.encryption?.keyType,
            Region: this.__input.encryption?.region,
            ResourceId: this.__input.encryption?.resourceId,
            RoleArn: this.__input.encryption?.roleArn,
            SecretArn: this.__input.encryption?.secretArn,
            Url: this.__input.encryption?.url,
          },
          FlowArn: this.__input.flowArn,
          MaxLatency: this.__input.maxLatency,
          OutputArn: this.__input.outputArn,
          Port: this.__input.port,
          Protocol: this.__input.protocol,
          RemoteId: this.__input.remoteId,
          SmoothingLatency: this.__input.smoothingLatency,
          StreamId: this.__input.streamId,
          VpcInterfaceAttachment: {
            VpcInterfaceName: this.__input.vpcInterfaceAttachment?.vpcInterfaceName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowOutput.Output.VpcInterfaceAttachment.VpcInterfaceName', props);
    return resource.getResponseField('Output.VpcInterfaceAttachment.VpcInterfaceName') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowSourceRequest) {
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.FlowArn', props);
    return resource.getResponseField('FlowArn') as unknown as string;
  }

  public get source(): MediaConnectResponsesUpdateFlowSourceSource {
    return new MediaConnectResponsesUpdateFlowSourceSource(this.__scope, this.__resources, this.__input);
  }

}

export class MediaConnectResponsesUpdateFlowSourceSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowSourceRequest) {
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.DataTransferSubscriberFeePercent', props);
    return resource.getResponseField('Source.DataTransferSubscriberFeePercent') as unknown as number;
  }

  public get decryption(): MediaConnectResponsesUpdateFlowSourceSourceDecryption {
    return new MediaConnectResponsesUpdateFlowSourceSourceDecryption(this.__scope, this.__resources, this.__input);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Description', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.EntitlementArn', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.IngestIp', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.IngestPort', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Name', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.SourceArn', props);
    return resource.getResponseField('Source.SourceArn') as unknown as string;
  }

  public get transport(): MediaConnectResponsesUpdateFlowSourceSourceTransport {
    return new MediaConnectResponsesUpdateFlowSourceSourceTransport(this.__scope, this.__resources, this.__input);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.VpcInterfaceName', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.WhitelistCidr', props);
    return resource.getResponseField('Source.WhitelistCidr') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowSourceSourceDecryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowSourceRequest) {
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.Algorithm', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.ConstantInitializationVector', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.DeviceId', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.KeyType', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.Region', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.ResourceId', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.RoleArn', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.SecretArn', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Decryption.Url', props);
    return resource.getResponseField('Source.Decryption.Url') as unknown as string;
  }

}

export class MediaConnectResponsesUpdateFlowSourceSourceTransport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaConnectUpdateFlowSourceRequest) {
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Transport.CidrAllowList', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Transport.MaxBitrate', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Transport.MaxLatency', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Transport.Protocol', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Transport.RemoteId', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Transport.SmoothingLatency', props);
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
            Algorithm: this.__input.decryption?.algorithm,
            ConstantInitializationVector: this.__input.decryption?.constantInitializationVector,
            DeviceId: this.__input.decryption?.deviceId,
            KeyType: this.__input.decryption?.keyType,
            Region: this.__input.decryption?.region,
            ResourceId: this.__input.decryption?.resourceId,
            RoleArn: this.__input.decryption?.roleArn,
            SecretArn: this.__input.decryption?.secretArn,
            Url: this.__input.decryption?.url,
          },
          Description: this.__input.description,
          EntitlementArn: this.__input.entitlementArn,
          FlowArn: this.__input.flowArn,
          IngestPort: this.__input.ingestPort,
          MaxBitrate: this.__input.maxBitrate,
          MaxLatency: this.__input.maxLatency,
          Protocol: this.__input.protocol,
          SourceArn: this.__input.sourceArn,
          StreamId: this.__input.streamId,
          VpcInterfaceName: this.__input.vpcInterfaceName,
          WhitelistCidr: this.__input.whitelistCidr,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFlowSource.Source.Transport.StreamId', props);
    return resource.getResponseField('Source.Transport.StreamId') as unknown as string;
  }

}

