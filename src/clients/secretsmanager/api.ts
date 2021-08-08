import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SecretsManagerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelRotateSecret(input: shapes.SecretsManagerCancelRotateSecretRequest): SecretsManagerResponsesCancelRotateSecret {
    return new SecretsManagerResponsesCancelRotateSecret(this, this.__resources, input);
  }

  public createSecret(input: shapes.SecretsManagerCreateSecretRequest): SecretsManagerResponsesCreateSecret {
    return new SecretsManagerResponsesCreateSecret(this, this.__resources, input);
  }

  public deleteResourcePolicy(input: shapes.SecretsManagerDeleteResourcePolicyRequest): SecretsManagerResponsesDeleteResourcePolicy {
    return new SecretsManagerResponsesDeleteResourcePolicy(this, this.__resources, input);
  }

  public deleteSecret(input: shapes.SecretsManagerDeleteSecretRequest): SecretsManagerResponsesDeleteSecret {
    return new SecretsManagerResponsesDeleteSecret(this, this.__resources, input);
  }

  public describeSecret(input: shapes.SecretsManagerDescribeSecretRequest): SecretsManagerResponsesDescribeSecret {
    return new SecretsManagerResponsesDescribeSecret(this, this.__resources, input);
  }

  public fetchRandomPassword(input: shapes.SecretsManagerGetRandomPasswordRequest): SecretsManagerResponsesFetchRandomPassword {
    return new SecretsManagerResponsesFetchRandomPassword(this, this.__resources, input);
  }

  public fetchResourcePolicy(input: shapes.SecretsManagerGetResourcePolicyRequest): SecretsManagerResponsesFetchResourcePolicy {
    return new SecretsManagerResponsesFetchResourcePolicy(this, this.__resources, input);
  }

  public fetchSecretValue(input: shapes.SecretsManagerGetSecretValueRequest): SecretsManagerResponsesFetchSecretValue {
    return new SecretsManagerResponsesFetchSecretValue(this, this.__resources, input);
  }

  public listSecretVersionIds(input: shapes.SecretsManagerListSecretVersionIdsRequest): SecretsManagerResponsesListSecretVersionIds {
    return new SecretsManagerResponsesListSecretVersionIds(this, this.__resources, input);
  }

  public listSecrets(input: shapes.SecretsManagerListSecretsRequest): SecretsManagerResponsesListSecrets {
    return new SecretsManagerResponsesListSecrets(this, this.__resources, input);
  }

  public putResourcePolicy(input: shapes.SecretsManagerPutResourcePolicyRequest): SecretsManagerResponsesPutResourcePolicy {
    return new SecretsManagerResponsesPutResourcePolicy(this, this.__resources, input);
  }

  public putSecretValue(input: shapes.SecretsManagerPutSecretValueRequest): SecretsManagerResponsesPutSecretValue {
    return new SecretsManagerResponsesPutSecretValue(this, this.__resources, input);
  }

  public removeRegionsFromReplication(input: shapes.SecretsManagerRemoveRegionsFromReplicationRequest): SecretsManagerResponsesRemoveRegionsFromReplication {
    return new SecretsManagerResponsesRemoveRegionsFromReplication(this, this.__resources, input);
  }

  public replicateSecretToRegions(input: shapes.SecretsManagerReplicateSecretToRegionsRequest): SecretsManagerResponsesReplicateSecretToRegions {
    return new SecretsManagerResponsesReplicateSecretToRegions(this, this.__resources, input);
  }

  public restoreSecret(input: shapes.SecretsManagerRestoreSecretRequest): SecretsManagerResponsesRestoreSecret {
    return new SecretsManagerResponsesRestoreSecret(this, this.__resources, input);
  }

  public rotateSecret(input: shapes.SecretsManagerRotateSecretRequest): SecretsManagerResponsesRotateSecret {
    return new SecretsManagerResponsesRotateSecret(this, this.__resources, input);
  }

  public stopReplicationToReplica(input: shapes.SecretsManagerStopReplicationToReplicaRequest): SecretsManagerResponsesStopReplicationToReplica {
    return new SecretsManagerResponsesStopReplicationToReplica(this, this.__resources, input);
  }

  public tagResource(input: shapes.SecretsManagerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.TagResource'),
        parameters: {
          SecretId: input.secretId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SecretsManagerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.UntagResource'),
        parameters: {
          SecretId: input.secretId,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateSecret(input: shapes.SecretsManagerUpdateSecretRequest): SecretsManagerResponsesUpdateSecret {
    return new SecretsManagerResponsesUpdateSecret(this, this.__resources, input);
  }

  public updateSecretVersionStage(input: shapes.SecretsManagerUpdateSecretVersionStageRequest): SecretsManagerResponsesUpdateSecretVersionStage {
    return new SecretsManagerResponsesUpdateSecretVersionStage(this, this.__resources, input);
  }

  public validateResourcePolicy(input: shapes.SecretsManagerValidateResourcePolicyRequest): SecretsManagerResponsesValidateResourcePolicy {
    return new SecretsManagerResponsesValidateResourcePolicy(this, this.__resources, input);
  }

}

export class SecretsManagerResponsesCancelRotateSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerCancelRotateSecretRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelRotateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.CancelRotateSecret.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelRotateSecret.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelRotateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.CancelRotateSecret.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelRotateSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelRotateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.CancelRotateSecret.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelRotateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class SecretsManagerResponsesCreateSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerCreateSecretRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.CreateSecret.ARN'),
        outputPath: 'ARN',
        parameters: {
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          Tags: this.__input.tags,
          AddReplicaRegions: this.__input.addReplicaRegions,
          ForceOverwriteReplicaSecret: this.__input.forceOverwriteReplicaSecret,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecret.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.CreateSecret.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          Tags: this.__input.tags,
          AddReplicaRegions: this.__input.addReplicaRegions,
          ForceOverwriteReplicaSecret: this.__input.forceOverwriteReplicaSecret,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.CreateSecret.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          Tags: this.__input.tags,
          AddReplicaRegions: this.__input.addReplicaRegions,
          ForceOverwriteReplicaSecret: this.__input.forceOverwriteReplicaSecret,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get replicationStatus(): shapes.SecretsManagerReplicationStatusType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.CreateSecret.ReplicationStatus'),
        outputPath: 'ReplicationStatus',
        parameters: {
          Name: this.__input.name,
          ClientRequestToken: this.__input.clientRequestToken,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          Tags: this.__input.tags,
          AddReplicaRegions: this.__input.addReplicaRegions,
          ForceOverwriteReplicaSecret: this.__input.forceOverwriteReplicaSecret,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecret.ReplicationStatus', props);
    return resource.getResponseField('ReplicationStatus') as unknown as shapes.SecretsManagerReplicationStatusType[];
  }

}

export class SecretsManagerResponsesDeleteResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerDeleteResourcePolicyRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DeleteResourcePolicy.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResourcePolicy.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DeleteResourcePolicy.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteResourcePolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerResponsesDeleteSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerDeleteSecretRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DeleteSecret.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSecret.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DeleteSecret.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get deletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DeleteSecret.DeletionDate'),
        outputPath: 'DeletionDate',
        parameters: {
          SecretId: this.__input.secretId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSecret.DeletionDate', props);
    return resource.getResponseField('DeletionDate') as unknown as string;
  }

}

export class SecretsManagerResponsesDescribeSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerDescribeSecretRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.Description'),
        outputPath: 'Description',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

  public get rotationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.RotationEnabled'),
        outputPath: 'RotationEnabled',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.RotationEnabled', props);
    return resource.getResponseField('RotationEnabled') as unknown as boolean;
  }

  public get rotationLambdaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.RotationLambdaARN'),
        outputPath: 'RotationLambdaARN',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.RotationLambdaARN', props);
    return resource.getResponseField('RotationLambdaARN') as unknown as string;
  }

  public get rotationRules(): SecretsManagerResponsesDescribeSecretRotationRules {
    return new SecretsManagerResponsesDescribeSecretRotationRules(this.__scope, this.__resources, this.__input);
  }

  public get lastRotatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.LastRotatedDate'),
        outputPath: 'LastRotatedDate',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.LastRotatedDate', props);
    return resource.getResponseField('LastRotatedDate') as unknown as string;
  }

  public get lastChangedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.LastChangedDate'),
        outputPath: 'LastChangedDate',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.LastChangedDate', props);
    return resource.getResponseField('LastChangedDate') as unknown as string;
  }

  public get lastAccessedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.LastAccessedDate'),
        outputPath: 'LastAccessedDate',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.LastAccessedDate', props);
    return resource.getResponseField('LastAccessedDate') as unknown as string;
  }

  public get deletedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.DeletedDate'),
        outputPath: 'DeletedDate',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.DeletedDate', props);
    return resource.getResponseField('DeletedDate') as unknown as string;
  }

  public get tags(): shapes.SecretsManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.Tags'),
        outputPath: 'Tags',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SecretsManagerTag[];
  }

  public get versionIdsToStages(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.VersionIdsToStages'),
        outputPath: 'VersionIdsToStages',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.VersionIdsToStages', props);
    return resource.getResponseField('VersionIdsToStages') as unknown as Record<string, string[]>;
  }

  public get owningService(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.OwningService'),
        outputPath: 'OwningService',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.OwningService', props);
    return resource.getResponseField('OwningService') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get primaryRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.PrimaryRegion'),
        outputPath: 'PrimaryRegion',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.PrimaryRegion', props);
    return resource.getResponseField('PrimaryRegion') as unknown as string;
  }

  public get replicationStatus(): shapes.SecretsManagerReplicationStatusType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.ReplicationStatus'),
        outputPath: 'ReplicationStatus',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.ReplicationStatus', props);
    return resource.getResponseField('ReplicationStatus') as unknown as shapes.SecretsManagerReplicationStatusType[];
  }

}

export class SecretsManagerResponsesDescribeSecretRotationRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerDescribeSecretRequest) {
  }

  public get automaticallyAfterDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.DescribeSecret.RotationRules.AutomaticallyAfterDays'),
        outputPath: 'RotationRules.AutomaticallyAfterDays',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecret.RotationRules.AutomaticallyAfterDays', props);
    return resource.getResponseField('RotationRules.AutomaticallyAfterDays') as unknown as number;
  }

}

export class SecretsManagerResponsesFetchRandomPassword {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerGetRandomPasswordRequest) {
  }

  public get randomPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRandomPassword',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetRandomPassword.RandomPassword'),
        outputPath: 'RandomPassword',
        parameters: {
          PasswordLength: this.__input.passwordLength,
          ExcludeCharacters: this.__input.excludeCharacters,
          ExcludeNumbers: this.__input.excludeNumbers,
          ExcludePunctuation: this.__input.excludePunctuation,
          ExcludeUppercase: this.__input.excludeUppercase,
          ExcludeLowercase: this.__input.excludeLowercase,
          IncludeSpace: this.__input.includeSpace,
          RequireEachIncludedType: this.__input.requireEachIncludedType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRandomPassword.RandomPassword', props);
    return resource.getResponseField('RandomPassword') as unknown as string;
  }

}

export class SecretsManagerResponsesFetchResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerGetResourcePolicyRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetResourcePolicy.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetResourcePolicy.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get resourcePolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetResourcePolicy.ResourcePolicy'),
        outputPath: 'ResourcePolicy',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.ResourcePolicy', props);
    return resource.getResponseField('ResourcePolicy') as unknown as string;
  }

}

export class SecretsManagerResponsesFetchSecretValue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerGetSecretValueRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetSecretValue.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          VersionId: this.__input.versionId,
          VersionStage: this.__input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecretValue.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetSecretValue.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          VersionId: this.__input.versionId,
          VersionStage: this.__input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecretValue.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetSecretValue.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          SecretId: this.__input.secretId,
          VersionId: this.__input.versionId,
          VersionStage: this.__input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecretValue.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get secretBinary(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetSecretValue.SecretBinary'),
        outputPath: 'SecretBinary',
        parameters: {
          SecretId: this.__input.secretId,
          VersionId: this.__input.versionId,
          VersionStage: this.__input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecretValue.SecretBinary', props);
    return resource.getResponseField('SecretBinary') as unknown as any;
  }

  public get secretString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetSecretValue.SecretString'),
        outputPath: 'SecretString',
        parameters: {
          SecretId: this.__input.secretId,
          VersionId: this.__input.versionId,
          VersionStage: this.__input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecretValue.SecretString', props);
    return resource.getResponseField('SecretString') as unknown as string;
  }

  public get versionStages(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetSecretValue.VersionStages'),
        outputPath: 'VersionStages',
        parameters: {
          SecretId: this.__input.secretId,
          VersionId: this.__input.versionId,
          VersionStage: this.__input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecretValue.VersionStages', props);
    return resource.getResponseField('VersionStages') as unknown as string[];
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.GetSecretValue.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          SecretId: this.__input.secretId,
          VersionId: this.__input.versionId,
          VersionStage: this.__input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecretValue.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

}

export class SecretsManagerResponsesListSecretVersionIds {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerListSecretVersionIdsRequest) {
  }

  public get versions(): shapes.SecretsManagerSecretVersionsListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecretVersionIds',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ListSecretVersionIds.Versions'),
        outputPath: 'Versions',
        parameters: {
          SecretId: this.__input.secretId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          IncludeDeprecated: this.__input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecretVersionIds.Versions', props);
    return resource.getResponseField('Versions') as unknown as shapes.SecretsManagerSecretVersionsListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecretVersionIds',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ListSecretVersionIds.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SecretId: this.__input.secretId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          IncludeDeprecated: this.__input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecretVersionIds.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecretVersionIds',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ListSecretVersionIds.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          IncludeDeprecated: this.__input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecretVersionIds.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecretVersionIds',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ListSecretVersionIds.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          IncludeDeprecated: this.__input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecretVersionIds.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerResponsesListSecrets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerListSecretsRequest) {
  }

  public get secretList(): shapes.SecretsManagerSecretListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecrets',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ListSecrets.SecretList'),
        outputPath: 'SecretList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecrets.SecretList', props);
    return resource.getResponseField('SecretList') as unknown as shapes.SecretsManagerSecretListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecrets',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ListSecrets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecrets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecretsManagerResponsesPutResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerPutResourcePolicyRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.PutResourcePolicy.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          ResourcePolicy: this.__input.resourcePolicy,
          BlockPublicPolicy: this.__input.blockPublicPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResourcePolicy.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.PutResourcePolicy.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          ResourcePolicy: this.__input.resourcePolicy,
          BlockPublicPolicy: this.__input.blockPublicPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResourcePolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerResponsesPutSecretValue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerPutSecretValueRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.PutSecretValue.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          VersionStages: this.__input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSecretValue.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.PutSecretValue.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          VersionStages: this.__input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSecretValue.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.PutSecretValue.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          VersionStages: this.__input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSecretValue.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get versionStages(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSecretValue',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.PutSecretValue.VersionStages'),
        outputPath: 'VersionStages',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
          VersionStages: this.__input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSecretValue.VersionStages', props);
    return resource.getResponseField('VersionStages') as unknown as string[];
  }

}

export class SecretsManagerResponsesRemoveRegionsFromReplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerRemoveRegionsFromReplicationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeRegionsFromReplication',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.RemoveRegionsFromReplication.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          RemoveReplicaRegions: this.__input.removeReplicaRegions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveRegionsFromReplication.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get replicationStatus(): shapes.SecretsManagerReplicationStatusType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeRegionsFromReplication',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.RemoveRegionsFromReplication.ReplicationStatus'),
        outputPath: 'ReplicationStatus',
        parameters: {
          SecretId: this.__input.secretId,
          RemoveReplicaRegions: this.__input.removeReplicaRegions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveRegionsFromReplication.ReplicationStatus', props);
    return resource.getResponseField('ReplicationStatus') as unknown as shapes.SecretsManagerReplicationStatusType[];
  }

}

export class SecretsManagerResponsesReplicateSecretToRegions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerReplicateSecretToRegionsRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'replicateSecretToRegions',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ReplicateSecretToRegions.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          AddReplicaRegions: this.__input.addReplicaRegions,
          ForceOverwriteReplicaSecret: this.__input.forceOverwriteReplicaSecret,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReplicateSecretToRegions.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get replicationStatus(): shapes.SecretsManagerReplicationStatusType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'replicateSecretToRegions',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ReplicateSecretToRegions.ReplicationStatus'),
        outputPath: 'ReplicationStatus',
        parameters: {
          SecretId: this.__input.secretId,
          AddReplicaRegions: this.__input.addReplicaRegions,
          ForceOverwriteReplicaSecret: this.__input.forceOverwriteReplicaSecret,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReplicateSecretToRegions.ReplicationStatus', props);
    return resource.getResponseField('ReplicationStatus') as unknown as shapes.SecretsManagerReplicationStatusType[];
  }

}

export class SecretsManagerResponsesRestoreSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerRestoreSecretRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.RestoreSecret.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreSecret.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.RestoreSecret.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerResponsesRotateSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerRotateSecretRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rotateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.RotateSecret.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          RotationLambdaARN: this.__input.rotationLambdaArn,
          RotationRules: {
            AutomaticallyAfterDays: this.__input.rotationRules?.automaticallyAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RotateSecret.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rotateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.RotateSecret.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          RotationLambdaARN: this.__input.rotationLambdaArn,
          RotationRules: {
            AutomaticallyAfterDays: this.__input.rotationRules?.automaticallyAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RotateSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rotateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.RotateSecret.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          RotationLambdaARN: this.__input.rotationLambdaArn,
          RotationRules: {
            AutomaticallyAfterDays: this.__input.rotationRules?.automaticallyAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RotateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class SecretsManagerResponsesStopReplicationToReplica {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerStopReplicationToReplicaRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopReplicationToReplica',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.StopReplicationToReplica.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopReplicationToReplica.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class SecretsManagerResponsesUpdateSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerUpdateSecretRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.UpdateSecret.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecret.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.UpdateSecret.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecret',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.UpdateSecret.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          SecretId: this.__input.secretId,
          ClientRequestToken: this.__input.clientRequestToken,
          Description: this.__input.description,
          KmsKeyId: this.__input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.__input.secretString,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class SecretsManagerResponsesUpdateSecretVersionStage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerUpdateSecretVersionStageRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecretVersionStage',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.UpdateSecretVersionStage.ARN'),
        outputPath: 'ARN',
        parameters: {
          SecretId: this.__input.secretId,
          VersionStage: this.__input.versionStage,
          RemoveFromVersionId: this.__input.removeFromVersionId,
          MoveToVersionId: this.__input.moveToVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecretVersionStage.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSecretVersionStage',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.UpdateSecretVersionStage.Name'),
        outputPath: 'Name',
        parameters: {
          SecretId: this.__input.secretId,
          VersionStage: this.__input.versionStage,
          RemoveFromVersionId: this.__input.removeFromVersionId,
          MoveToVersionId: this.__input.moveToVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSecretVersionStage.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerResponsesValidateResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SecretsManagerValidateResourcePolicyRequest) {
  }

  public get policyValidationPassed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ValidateResourcePolicy.PolicyValidationPassed'),
        outputPath: 'PolicyValidationPassed',
        parameters: {
          SecretId: this.__input.secretId,
          ResourcePolicy: this.__input.resourcePolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateResourcePolicy.PolicyValidationPassed', props);
    return resource.getResponseField('PolicyValidationPassed') as unknown as boolean;
  }

  public get validationErrors(): shapes.SecretsManagerValidationErrorsEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateResourcePolicy',
        service: 'SecretsManager',
        physicalResourceId: cr.PhysicalResourceId.of('SecretsManager.ValidateResourcePolicy.ValidationErrors'),
        outputPath: 'ValidationErrors',
        parameters: {
          SecretId: this.__input.secretId,
          ResourcePolicy: this.__input.resourcePolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateResourcePolicy.ValidationErrors', props);
    return resource.getResponseField('ValidationErrors') as unknown as shapes.SecretsManagerValidationErrorsEntry[];
  }

}

