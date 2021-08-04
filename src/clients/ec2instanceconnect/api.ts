import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class Ec2InstanceConnectClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public sendSshPublicKey(input: shapes.Ec2InstanceConnectSendSshPublicKeyRequest): EC2InstanceConnectResponsesSendSshPublicKey {
    return new EC2InstanceConnectResponsesSendSshPublicKey(this, this.__resources, input);
  }

}

export class EC2InstanceConnectResponsesSendSshPublicKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.Ec2InstanceConnectSendSshPublicKeyRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendSshPublicKey',
        service: 'EC2InstanceConnect',
        physicalResourceId: cr.PhysicalResourceId.of('EC2InstanceConnect.SendSSHPublicKey.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          InstanceId: this.__input.instanceId,
          InstanceOSUser: this.__input.instanceOsUser,
          SSHPublicKey: this.__input.sshPublicKey,
          AvailabilityZone: this.__input.availabilityZone,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendSSHPublicKey.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get success(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendSshPublicKey',
        service: 'EC2InstanceConnect',
        physicalResourceId: cr.PhysicalResourceId.of('EC2InstanceConnect.SendSSHPublicKey.Success'),
        outputPath: 'Success',
        parameters: {
          InstanceId: this.__input.instanceId,
          InstanceOSUser: this.__input.instanceOsUser,
          SSHPublicKey: this.__input.sshPublicKey,
          AvailabilityZone: this.__input.availabilityZone,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendSSHPublicKey.Success', props);
    return resource.getResponseField('Success') as unknown as boolean;
  }

}

