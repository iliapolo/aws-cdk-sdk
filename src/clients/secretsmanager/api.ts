import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SecretsManagerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelRotateSecret(input: shapes.SecretsManagerCancelRotateSecretRequest): SecretsManagerCancelRotateSecret {
    return new SecretsManagerCancelRotateSecret(this, 'CancelRotateSecret', this.__resources, input);
  }

  public createSecret(input: shapes.SecretsManagerCreateSecretRequest): SecretsManagerCreateSecret {
    return new SecretsManagerCreateSecret(this, 'CreateSecret', this.__resources, input);
  }

  public deleteResourcePolicy(input: shapes.SecretsManagerDeleteResourcePolicyRequest): SecretsManagerDeleteResourcePolicy {
    return new SecretsManagerDeleteResourcePolicy(this, 'DeleteResourcePolicy', this.__resources, input);
  }

  public deleteSecret(input: shapes.SecretsManagerDeleteSecretRequest): SecretsManagerDeleteSecret {
    return new SecretsManagerDeleteSecret(this, 'DeleteSecret', this.__resources, input);
  }

  public describeSecret(input: shapes.SecretsManagerDescribeSecretRequest): SecretsManagerDescribeSecret {
    return new SecretsManagerDescribeSecret(this, 'DescribeSecret', this.__resources, input);
  }

  public fetchRandomPassword(input: shapes.SecretsManagerGetRandomPasswordRequest): SecretsManagerFetchRandomPassword {
    return new SecretsManagerFetchRandomPassword(this, 'FetchRandomPassword', this.__resources, input);
  }

  public fetchResourcePolicy(input: shapes.SecretsManagerGetResourcePolicyRequest): SecretsManagerFetchResourcePolicy {
    return new SecretsManagerFetchResourcePolicy(this, 'FetchResourcePolicy', this.__resources, input);
  }

  public fetchSecretValue(input: shapes.SecretsManagerGetSecretValueRequest): SecretsManagerFetchSecretValue {
    return new SecretsManagerFetchSecretValue(this, 'FetchSecretValue', this.__resources, input);
  }

  public listSecretVersionIds(input: shapes.SecretsManagerListSecretVersionIdsRequest): SecretsManagerListSecretVersionIds {
    return new SecretsManagerListSecretVersionIds(this, 'ListSecretVersionIds', this.__resources, input);
  }

  public listSecrets(input: shapes.SecretsManagerListSecretsRequest): SecretsManagerListSecrets {
    return new SecretsManagerListSecrets(this, 'ListSecrets', this.__resources, input);
  }

  public putResourcePolicy(input: shapes.SecretsManagerPutResourcePolicyRequest): SecretsManagerPutResourcePolicy {
    return new SecretsManagerPutResourcePolicy(this, 'PutResourcePolicy', this.__resources, input);
  }

  public putSecretValue(input: shapes.SecretsManagerPutSecretValueRequest): SecretsManagerPutSecretValue {
    return new SecretsManagerPutSecretValue(this, 'PutSecretValue', this.__resources, input);
  }

  public restoreSecret(input: shapes.SecretsManagerRestoreSecretRequest): SecretsManagerRestoreSecret {
    return new SecretsManagerRestoreSecret(this, 'RestoreSecret', this.__resources, input);
  }

  public rotateSecret(input: shapes.SecretsManagerRotateSecretRequest): SecretsManagerRotateSecret {
    return new SecretsManagerRotateSecret(this, 'RotateSecret', this.__resources, input);
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

  public updateSecret(input: shapes.SecretsManagerUpdateSecretRequest): SecretsManagerUpdateSecret {
    return new SecretsManagerUpdateSecret(this, 'UpdateSecret', this.__resources, input);
  }

  public updateSecretVersionStage(input: shapes.SecretsManagerUpdateSecretVersionStageRequest): SecretsManagerUpdateSecretVersionStage {
    return new SecretsManagerUpdateSecretVersionStage(this, 'UpdateSecretVersionStage', this.__resources, input);
  }

  public validateResourcePolicy(input: shapes.SecretsManagerValidateResourcePolicyRequest): SecretsManagerValidateResourcePolicy {
    return new SecretsManagerValidateResourcePolicy(this, 'ValidateResourcePolicy', this.__resources, input);
  }

}

export class SecretsManagerCancelRotateSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerCancelRotateSecretRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelRotateSecret.ARN', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelRotateSecret.Name', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelRotateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class SecretsManagerCreateSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerCreateSecretRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
          Description: this.input.description,
          KmsKeyId: this.input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSecret.ARN', props);
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
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
          Description: this.input.description,
          KmsKeyId: this.input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSecret.Name', props);
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
          Name: this.input.name,
          ClientRequestToken: this.input.clientRequestToken,
          Description: this.input.description,
          KmsKeyId: this.input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class SecretsManagerDeleteResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerDeleteResourcePolicyRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResourcePolicy.ARN', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteResourcePolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerDeleteSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerDeleteSecretRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSecret.ARN', props);
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
          SecretId: this.input.secretId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSecret.Name', props);
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
          SecretId: this.input.secretId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSecret.DeletionDate', props);
    return resource.getResponseField('DeletionDate') as unknown as string;
  }

}

export class SecretsManagerDescribeSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerDescribeSecretRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.ARN', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.Name', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.Description', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.KmsKeyId', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.RotationEnabled', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.RotationLambdaARN', props);
    return resource.getResponseField('RotationLambdaARN') as unknown as string;
  }

  public get rotationRules(): SecretsManagerDescribeSecretRotationRules {
    return new SecretsManagerDescribeSecretRotationRules(this, 'RotationRules', this.__resources, this.input);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.LastRotatedDate', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.LastChangedDate', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.LastAccessedDate', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.DeletedDate', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.Tags', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.VersionIdsToStages', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.OwningService', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

}

export class SecretsManagerDescribeSecretRotationRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerDescribeSecretRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecret.RotationRules.AutomaticallyAfterDays', props);
    return resource.getResponseField('RotationRules.AutomaticallyAfterDays') as unknown as number;
  }

}

export class SecretsManagerFetchRandomPassword extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerGetRandomPasswordRequest) {
    super(scope, id);
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
          PasswordLength: this.input.passwordLength,
          ExcludeCharacters: this.input.excludeCharacters,
          ExcludeNumbers: this.input.excludeNumbers,
          ExcludePunctuation: this.input.excludePunctuation,
          ExcludeUppercase: this.input.excludeUppercase,
          ExcludeLowercase: this.input.excludeLowercase,
          IncludeSpace: this.input.includeSpace,
          RequireEachIncludedType: this.input.requireEachIncludedType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRandomPassword.RandomPassword', props);
    return resource.getResponseField('RandomPassword') as unknown as string;
  }

}

export class SecretsManagerFetchResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerGetResourcePolicyRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.ARN', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.Name', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.ResourcePolicy', props);
    return resource.getResponseField('ResourcePolicy') as unknown as string;
  }

}

export class SecretsManagerFetchSecretValue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerGetSecretValueRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          VersionId: this.input.versionId,
          VersionStage: this.input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecretValue.ARN', props);
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
          SecretId: this.input.secretId,
          VersionId: this.input.versionId,
          VersionStage: this.input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecretValue.Name', props);
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
          SecretId: this.input.secretId,
          VersionId: this.input.versionId,
          VersionStage: this.input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecretValue.VersionId', props);
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
          SecretId: this.input.secretId,
          VersionId: this.input.versionId,
          VersionStage: this.input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecretValue.SecretBinary', props);
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
          SecretId: this.input.secretId,
          VersionId: this.input.versionId,
          VersionStage: this.input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecretValue.SecretString', props);
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
          SecretId: this.input.secretId,
          VersionId: this.input.versionId,
          VersionStage: this.input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecretValue.VersionStages', props);
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
          SecretId: this.input.secretId,
          VersionId: this.input.versionId,
          VersionStage: this.input.versionStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecretValue.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

}

export class SecretsManagerListSecretVersionIds extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerListSecretVersionIdsRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          IncludeDeprecated: this.input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecretVersionIds.Versions', props);
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
          SecretId: this.input.secretId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          IncludeDeprecated: this.input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecretVersionIds.NextToken', props);
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
          SecretId: this.input.secretId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          IncludeDeprecated: this.input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecretVersionIds.ARN', props);
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
          SecretId: this.input.secretId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          IncludeDeprecated: this.input.includeDeprecated,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecretVersionIds.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerListSecrets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerListSecretsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecrets.SecretList', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecrets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SecretsManagerPutResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerPutResourcePolicyRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          ResourcePolicy: this.input.resourcePolicy,
          BlockPublicPolicy: this.input.blockPublicPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutResourcePolicy.ARN', props);
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
          SecretId: this.input.secretId,
          ResourcePolicy: this.input.resourcePolicy,
          BlockPublicPolicy: this.input.blockPublicPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutResourcePolicy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerPutSecretValue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerPutSecretValueRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
          VersionStages: this.input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSecretValue.ARN', props);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
          VersionStages: this.input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSecretValue.Name', props);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
          VersionStages: this.input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSecretValue.VersionId', props);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
          VersionStages: this.input.versionStages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSecretValue.VersionStages', props);
    return resource.getResponseField('VersionStages') as unknown as string[];
  }

}

export class SecretsManagerRestoreSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerRestoreSecretRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreSecret.ARN', props);
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
          SecretId: this.input.secretId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreSecret.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerRotateSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerRotateSecretRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          RotationLambdaARN: this.input.rotationLambdaArn,
          RotationRules: {
            AutomaticallyAfterDays: this.input.rotationRules?.automaticallyAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RotateSecret.ARN', props);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          RotationLambdaARN: this.input.rotationLambdaArn,
          RotationRules: {
            AutomaticallyAfterDays: this.input.rotationRules?.automaticallyAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RotateSecret.Name', props);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          RotationLambdaARN: this.input.rotationLambdaArn,
          RotationRules: {
            AutomaticallyAfterDays: this.input.rotationRules?.automaticallyAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RotateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class SecretsManagerUpdateSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerUpdateSecretRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          Description: this.input.description,
          KmsKeyId: this.input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecret.ARN', props);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          Description: this.input.description,
          KmsKeyId: this.input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecret.Name', props);
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
          SecretId: this.input.secretId,
          ClientRequestToken: this.input.clientRequestToken,
          Description: this.input.description,
          KmsKeyId: this.input.kmsKeyId,
          SecretBinary: {
          },
          SecretString: this.input.secretString,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecret.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class SecretsManagerUpdateSecretVersionStage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerUpdateSecretVersionStageRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          VersionStage: this.input.versionStage,
          RemoveFromVersionId: this.input.removeFromVersionId,
          MoveToVersionId: this.input.moveToVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecretVersionStage.ARN', props);
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
          SecretId: this.input.secretId,
          VersionStage: this.input.versionStage,
          RemoveFromVersionId: this.input.removeFromVersionId,
          MoveToVersionId: this.input.moveToVersionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSecretVersionStage.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class SecretsManagerValidateResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SecretsManagerValidateResourcePolicyRequest) {
    super(scope, id);
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
          SecretId: this.input.secretId,
          ResourcePolicy: this.input.resourcePolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateResourcePolicy.PolicyValidationPassed', props);
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
          SecretId: this.input.secretId,
          ResourcePolicy: this.input.resourcePolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateResourcePolicy.ValidationErrors', props);
    return resource.getResponseField('ValidationErrors') as unknown as shapes.SecretsManagerValidationErrorsEntry[];
  }

}

