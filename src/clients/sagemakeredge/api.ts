import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SagemakerEdgeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchDeviceRegistration(input: shapes.SagemakerEdgeGetDeviceRegistrationRequest): SagemakerEdgeResponsesFetchDeviceRegistration {
    return new SagemakerEdgeResponsesFetchDeviceRegistration(this, this.__resources, input);
  }

  public sendHeartbeat(input: shapes.SagemakerEdgeSendHeartbeatRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendHeartbeat',
        service: 'SagemakerEdge',
        physicalResourceId: cr.PhysicalResourceId.of('SagemakerEdge.SendHeartbeat'),
        parameters: {
          AgentMetrics: input.agentMetrics,
          Models: input.models,
          AgentVersion: input.agentVersion,
          DeviceName: input.deviceName,
          DeviceFleetName: input.deviceFleetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SendHeartbeat', props);
  }

}

export class SagemakerEdgeResponsesFetchDeviceRegistration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SagemakerEdgeGetDeviceRegistrationRequest) {
  }

  public get deviceRegistration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceRegistration',
        service: 'SagemakerEdge',
        physicalResourceId: cr.PhysicalResourceId.of('SagemakerEdge.GetDeviceRegistration.DeviceRegistration'),
        outputPath: 'DeviceRegistration',
        parameters: {
          DeviceName: this.__input.deviceName,
          DeviceFleetName: this.__input.deviceFleetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceRegistration.DeviceRegistration', props);
    return resource.getResponseField('DeviceRegistration') as unknown as string;
  }

  public get cacheTtl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceRegistration',
        service: 'SagemakerEdge',
        physicalResourceId: cr.PhysicalResourceId.of('SagemakerEdge.GetDeviceRegistration.CacheTTL'),
        outputPath: 'CacheTTL',
        parameters: {
          DeviceName: this.__input.deviceName,
          DeviceFleetName: this.__input.deviceFleetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceRegistration.CacheTTL', props);
    return resource.getResponseField('CacheTTL') as unknown as string;
  }

}

