import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KmsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelKeyDeletion(input: shapes.KmsCancelKeyDeletionRequest): KMSCancelKeyDeletion {
    return new KMSCancelKeyDeletion(this, 'CancelKeyDeletion', this.__resources, input);
  }

  public connectCustomKeyStore(input: shapes.KmsConnectCustomKeyStoreRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'connectCustomKeyStore',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ConnectCustomKeyStore'),
        parameters: {
          CustomKeyStoreId: input.customKeyStoreId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ConnectCustomKeyStore', props);
  }

  public createAlias(input: shapes.KmsCreateAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlias',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateAlias'),
        parameters: {
          AliasName: input.aliasName,
          TargetKeyId: input.targetKeyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateAlias', props);
  }

  public createCustomKeyStore(input: shapes.KmsCreateCustomKeyStoreRequest): KMSCreateCustomKeyStore {
    return new KMSCreateCustomKeyStore(this, 'CreateCustomKeyStore', this.__resources, input);
  }

  public createGrant(input: shapes.KmsCreateGrantRequest): KMSCreateGrant {
    return new KMSCreateGrant(this, 'CreateGrant', this.__resources, input);
  }

  public createKey(input: shapes.KmsCreateKeyRequest): KMSCreateKey {
    return new KMSCreateKey(this, 'CreateKey', this.__resources, input);
  }

  public decrypt(input: shapes.KmsDecryptRequest): KMSDecrypt {
    return new KMSDecrypt(this, 'Decrypt', this.__resources, input);
  }

  public deleteAlias(input: shapes.KmsDeleteAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlias',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DeleteAlias'),
        parameters: {
          AliasName: input.aliasName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAlias', props);
  }

  public deleteCustomKeyStore(input: shapes.KmsDeleteCustomKeyStoreRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCustomKeyStore',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DeleteCustomKeyStore'),
        parameters: {
          CustomKeyStoreId: input.customKeyStoreId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCustomKeyStore', props);
  }

  public deleteImportedKeyMaterial(input: shapes.KmsDeleteImportedKeyMaterialRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImportedKeyMaterial',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DeleteImportedKeyMaterial'),
        parameters: {
          KeyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteImportedKeyMaterial', props);
  }

  public describeCustomKeyStores(input: shapes.KmsDescribeCustomKeyStoresRequest): KMSDescribeCustomKeyStores {
    return new KMSDescribeCustomKeyStores(this, 'DescribeCustomKeyStores', this.__resources, input);
  }

  public describeKey(input: shapes.KmsDescribeKeyRequest): KMSDescribeKey {
    return new KMSDescribeKey(this, 'DescribeKey', this.__resources, input);
  }

  public disableKey(input: shapes.KmsDisableKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DisableKey'),
        parameters: {
          KeyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableKey', props);
  }

  public disableKeyRotation(input: shapes.KmsDisableKeyRotationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableKeyRotation',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DisableKeyRotation'),
        parameters: {
          KeyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableKeyRotation', props);
  }

  public disconnectCustomKeyStore(input: shapes.KmsDisconnectCustomKeyStoreRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectCustomKeyStore',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DisconnectCustomKeyStore'),
        parameters: {
          CustomKeyStoreId: input.customKeyStoreId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisconnectCustomKeyStore', props);
  }

  public enableKey(input: shapes.KmsEnableKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.EnableKey'),
        parameters: {
          KeyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableKey', props);
  }

  public enableKeyRotation(input: shapes.KmsEnableKeyRotationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableKeyRotation',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.EnableKeyRotation'),
        parameters: {
          KeyId: input.keyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableKeyRotation', props);
  }

  public encrypt(input: shapes.KmsEncryptRequest): KMSEncrypt {
    return new KMSEncrypt(this, 'Encrypt', this.__resources, input);
  }

  public generateDataKey(input: shapes.KmsGenerateDataKeyRequest): KMSGenerateDataKey {
    return new KMSGenerateDataKey(this, 'GenerateDataKey', this.__resources, input);
  }

  public generateDataKeyPair(input: shapes.KmsGenerateDataKeyPairRequest): KMSGenerateDataKeyPair {
    return new KMSGenerateDataKeyPair(this, 'GenerateDataKeyPair', this.__resources, input);
  }

  public generateDataKeyPairWithoutPlaintext(input: shapes.KmsGenerateDataKeyPairWithoutPlaintextRequest): KMSGenerateDataKeyPairWithoutPlaintext {
    return new KMSGenerateDataKeyPairWithoutPlaintext(this, 'GenerateDataKeyPairWithoutPlaintext', this.__resources, input);
  }

  public generateDataKeyWithoutPlaintext(input: shapes.KmsGenerateDataKeyWithoutPlaintextRequest): KMSGenerateDataKeyWithoutPlaintext {
    return new KMSGenerateDataKeyWithoutPlaintext(this, 'GenerateDataKeyWithoutPlaintext', this.__resources, input);
  }

  public generateRandom(input: shapes.KmsGenerateRandomRequest): KMSGenerateRandom {
    return new KMSGenerateRandom(this, 'GenerateRandom', this.__resources, input);
  }

  public fetchKeyPolicy(input: shapes.KmsGetKeyPolicyRequest): KMSFetchKeyPolicy {
    return new KMSFetchKeyPolicy(this, 'FetchKeyPolicy', this.__resources, input);
  }

  public fetchKeyRotationStatus(input: shapes.KmsGetKeyRotationStatusRequest): KMSFetchKeyRotationStatus {
    return new KMSFetchKeyRotationStatus(this, 'FetchKeyRotationStatus', this.__resources, input);
  }

  public fetchParametersForImport(input: shapes.KmsGetParametersForImportRequest): KMSFetchParametersForImport {
    return new KMSFetchParametersForImport(this, 'FetchParametersForImport', this.__resources, input);
  }

  public fetchPublicKey(input: shapes.KmsGetPublicKeyRequest): KMSFetchPublicKey {
    return new KMSFetchPublicKey(this, 'FetchPublicKey', this.__resources, input);
  }

  public importKeyMaterial(input: shapes.KmsImportKeyMaterialRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyMaterial',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ImportKeyMaterial'),
        parameters: {
          KeyId: input.keyId,
          ImportToken: {
          },
          EncryptedKeyMaterial: {
          },
          ValidTo: input.validTo,
          ExpirationModel: input.expirationModel,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ImportKeyMaterial', props);
  }

  public listAliases(input: shapes.KmsListAliasesRequest): KMSListAliases {
    return new KMSListAliases(this, 'ListAliases', this.__resources, input);
  }

  public listGrants(input: shapes.KmsListGrantsRequest): KMSListGrants {
    return new KMSListGrants(this, 'ListGrants', this.__resources, input);
  }

  public listKeyPolicies(input: shapes.KmsListKeyPoliciesRequest): KMSListKeyPolicies {
    return new KMSListKeyPolicies(this, 'ListKeyPolicies', this.__resources, input);
  }

  public listKeys(input: shapes.KmsListKeysRequest): KMSListKeys {
    return new KMSListKeys(this, 'ListKeys', this.__resources, input);
  }

  public listResourceTags(input: shapes.KmsListResourceTagsRequest): KMSListResourceTags {
    return new KMSListResourceTags(this, 'ListResourceTags', this.__resources, input);
  }

  public listRetirableGrants(input: shapes.KmsListRetirableGrantsRequest): KMSListRetirableGrants {
    return new KMSListRetirableGrants(this, 'ListRetirableGrants', this.__resources, input);
  }

  public putKeyPolicy(input: shapes.KmsPutKeyPolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putKeyPolicy',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.PutKeyPolicy'),
        parameters: {
          KeyId: input.keyId,
          PolicyName: input.policyName,
          Policy: input.policy,
          BypassPolicyLockoutSafetyCheck: input.bypassPolicyLockoutSafetyCheck,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutKeyPolicy', props);
  }

  public reEncrypt(input: shapes.KmsReEncryptRequest): KMSReEncrypt {
    return new KMSReEncrypt(this, 'ReEncrypt', this.__resources, input);
  }

  public retireGrant(input: shapes.KmsRetireGrantRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retireGrant',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.RetireGrant'),
        parameters: {
          GrantToken: input.grantToken,
          KeyId: input.keyId,
          GrantId: input.grantId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RetireGrant', props);
  }

  public revokeGrant(input: shapes.KmsRevokeGrantRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeGrant',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.RevokeGrant'),
        parameters: {
          KeyId: input.keyId,
          GrantId: input.grantId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokeGrant', props);
  }

  public scheduleKeyDeletion(input: shapes.KmsScheduleKeyDeletionRequest): KMSScheduleKeyDeletion {
    return new KMSScheduleKeyDeletion(this, 'ScheduleKeyDeletion', this.__resources, input);
  }

  public sign(input: shapes.KmsSignRequest): KMSSign {
    return new KMSSign(this, 'Sign', this.__resources, input);
  }

  public tagResource(input: shapes.KmsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.TagResource'),
        parameters: {
          KeyId: input.keyId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.KmsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.UntagResource'),
        parameters: {
          KeyId: input.keyId,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAlias(input: shapes.KmsUpdateAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAlias',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.UpdateAlias'),
        parameters: {
          AliasName: input.aliasName,
          TargetKeyId: input.targetKeyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAlias', props);
  }

  public updateCustomKeyStore(input: shapes.KmsUpdateCustomKeyStoreRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCustomKeyStore',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.UpdateCustomKeyStore'),
        parameters: {
          CustomKeyStoreId: input.customKeyStoreId,
          NewCustomKeyStoreName: input.newCustomKeyStoreName,
          KeyStorePassword: input.keyStorePassword,
          CloudHsmClusterId: input.cloudHsmClusterId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCustomKeyStore', props);
  }

  public updateKeyDescription(input: shapes.KmsUpdateKeyDescriptionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateKeyDescription',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.UpdateKeyDescription'),
        parameters: {
          KeyId: input.keyId,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateKeyDescription', props);
  }

  public verify(input: shapes.KmsVerifyRequest): KMSVerify {
    return new KMSVerify(this, 'Verify', this.__resources, input);
  }

}

export class KMSCancelKeyDeletion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsCancelKeyDeletionRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelKeyDeletion',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CancelKeyDeletion.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelKeyDeletion.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

}

export class KMSCreateCustomKeyStore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsCreateCustomKeyStoreRequest) {
    super(scope, id);
  }

  public get customKeyStoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCustomKeyStore',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateCustomKeyStore.CustomKeyStoreId'),
        outputPath: 'CustomKeyStoreId',
        parameters: {
          CustomKeyStoreName: this.input.customKeyStoreName,
          CloudHsmClusterId: this.input.cloudHsmClusterId,
          TrustAnchorCertificate: this.input.trustAnchorCertificate,
          KeyStorePassword: this.input.keyStorePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCustomKeyStore.CustomKeyStoreId', props);
    return resource.getResponseField('CustomKeyStoreId') as unknown as string;
  }

}

export class KMSCreateGrant extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsCreateGrantRequest) {
    super(scope, id);
  }

  public get grantToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrant',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateGrant.GrantToken'),
        outputPath: 'GrantToken',
        parameters: {
          KeyId: this.input.keyId,
          GranteePrincipal: this.input.granteePrincipal,
          RetiringPrincipal: this.input.retiringPrincipal,
          Operations: this.input.operations,
          Constraints: {
            EncryptionContextSubset: this.input.constraints?.encryptionContextSubset,
            EncryptionContextEquals: this.input.constraints?.encryptionContextEquals,
          },
          GrantTokens: this.input.grantTokens,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGrant.GrantToken', props);
    return resource.getResponseField('GrantToken') as unknown as string;
  }

  public get grantId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrant',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateGrant.GrantId'),
        outputPath: 'GrantId',
        parameters: {
          KeyId: this.input.keyId,
          GranteePrincipal: this.input.granteePrincipal,
          RetiringPrincipal: this.input.retiringPrincipal,
          Operations: this.input.operations,
          Constraints: {
            EncryptionContextSubset: this.input.constraints?.encryptionContextSubset,
            EncryptionContextEquals: this.input.constraints?.encryptionContextEquals,
          },
          GrantTokens: this.input.grantTokens,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGrant.GrantId', props);
    return resource.getResponseField('GrantId') as unknown as string;
  }

}

export class KMSCreateKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsCreateKeyRequest) {
    super(scope, id);
  }

  public get keyMetadata(): KMSCreateKeyKeyMetadata {
    return new KMSCreateKeyKeyMetadata(this, 'KeyMetadata', this.__resources, this.input);
  }

}

export class KMSCreateKeyKeyMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsCreateKeyRequest) {
    super(scope, id);
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.AWSAccountId'),
        outputPath: 'KeyMetadata.AWSAccountId',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.AWSAccountId', props);
    return resource.getResponseField('KeyMetadata.AWSAccountId') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.KeyId'),
        outputPath: 'KeyMetadata.KeyId',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.KeyId', props);
    return resource.getResponseField('KeyMetadata.KeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.Arn'),
        outputPath: 'KeyMetadata.Arn',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.Arn', props);
    return resource.getResponseField('KeyMetadata.Arn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.CreationDate'),
        outputPath: 'KeyMetadata.CreationDate',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.CreationDate', props);
    return resource.getResponseField('KeyMetadata.CreationDate') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.Enabled'),
        outputPath: 'KeyMetadata.Enabled',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.Enabled', props);
    return resource.getResponseField('KeyMetadata.Enabled') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.Description'),
        outputPath: 'KeyMetadata.Description',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.Description', props);
    return resource.getResponseField('KeyMetadata.Description') as unknown as string;
  }

  public get keyUsage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.KeyUsage'),
        outputPath: 'KeyMetadata.KeyUsage',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.KeyUsage', props);
    return resource.getResponseField('KeyMetadata.KeyUsage') as unknown as string;
  }

  public get keyState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.KeyState'),
        outputPath: 'KeyMetadata.KeyState',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.KeyState', props);
    return resource.getResponseField('KeyMetadata.KeyState') as unknown as string;
  }

  public get deletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.DeletionDate'),
        outputPath: 'KeyMetadata.DeletionDate',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.DeletionDate', props);
    return resource.getResponseField('KeyMetadata.DeletionDate') as unknown as string;
  }

  public get validTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.ValidTo'),
        outputPath: 'KeyMetadata.ValidTo',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.ValidTo', props);
    return resource.getResponseField('KeyMetadata.ValidTo') as unknown as string;
  }

  public get origin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.Origin'),
        outputPath: 'KeyMetadata.Origin',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.Origin', props);
    return resource.getResponseField('KeyMetadata.Origin') as unknown as string;
  }

  public get customKeyStoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.CustomKeyStoreId'),
        outputPath: 'KeyMetadata.CustomKeyStoreId',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.CustomKeyStoreId', props);
    return resource.getResponseField('KeyMetadata.CustomKeyStoreId') as unknown as string;
  }

  public get cloudHsmClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.CloudHsmClusterId'),
        outputPath: 'KeyMetadata.CloudHsmClusterId',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.CloudHsmClusterId', props);
    return resource.getResponseField('KeyMetadata.CloudHsmClusterId') as unknown as string;
  }

  public get expirationModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.ExpirationModel'),
        outputPath: 'KeyMetadata.ExpirationModel',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.ExpirationModel', props);
    return resource.getResponseField('KeyMetadata.ExpirationModel') as unknown as string;
  }

  public get keyManager(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.KeyManager'),
        outputPath: 'KeyMetadata.KeyManager',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.KeyManager', props);
    return resource.getResponseField('KeyMetadata.KeyManager') as unknown as string;
  }

  public get customerMasterKeySpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.CustomerMasterKeySpec'),
        outputPath: 'KeyMetadata.CustomerMasterKeySpec',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.CustomerMasterKeySpec', props);
    return resource.getResponseField('KeyMetadata.CustomerMasterKeySpec') as unknown as string;
  }

  public get encryptionAlgorithms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.EncryptionAlgorithms'),
        outputPath: 'KeyMetadata.EncryptionAlgorithms',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.EncryptionAlgorithms', props);
    return resource.getResponseField('KeyMetadata.EncryptionAlgorithms') as unknown as string[];
  }

  public get signingAlgorithms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.CreateKey.KeyMetadata.SigningAlgorithms'),
        outputPath: 'KeyMetadata.SigningAlgorithms',
        parameters: {
          Policy: this.input.policy,
          Description: this.input.description,
          KeyUsage: this.input.keyUsage,
          CustomerMasterKeySpec: this.input.customerMasterKeySpec,
          Origin: this.input.origin,
          CustomKeyStoreId: this.input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.input.bypassPolicyLockoutSafetyCheck,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKey.KeyMetadata.SigningAlgorithms', props);
    return resource.getResponseField('KeyMetadata.SigningAlgorithms') as unknown as string[];
  }

}

export class KMSDecrypt extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsDecryptRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Decrypt.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          CiphertextBlob: {
          },
          EncryptionContext: this.input.encryptionContext,
          GrantTokens: this.input.grantTokens,
          KeyId: this.input.keyId,
          EncryptionAlgorithm: this.input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Decrypt.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get plaintext(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Decrypt.Plaintext'),
        outputPath: 'Plaintext',
        parameters: {
          CiphertextBlob: {
          },
          EncryptionContext: this.input.encryptionContext,
          GrantTokens: this.input.grantTokens,
          KeyId: this.input.keyId,
          EncryptionAlgorithm: this.input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Decrypt.Plaintext', props);
    return resource.getResponseField('Plaintext') as unknown as any;
  }

  public get encryptionAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Decrypt.EncryptionAlgorithm'),
        outputPath: 'EncryptionAlgorithm',
        parameters: {
          CiphertextBlob: {
          },
          EncryptionContext: this.input.encryptionContext,
          GrantTokens: this.input.grantTokens,
          KeyId: this.input.keyId,
          EncryptionAlgorithm: this.input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Decrypt.EncryptionAlgorithm', props);
    return resource.getResponseField('EncryptionAlgorithm') as unknown as string;
  }

}

export class KMSDescribeCustomKeyStores extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsDescribeCustomKeyStoresRequest) {
    super(scope, id);
  }

  public get customKeyStores(): shapes.KmsCustomKeyStoresListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCustomKeyStores',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeCustomKeyStores.CustomKeyStores'),
        outputPath: 'CustomKeyStores',
        parameters: {
          CustomKeyStoreId: this.input.customKeyStoreId,
          CustomKeyStoreName: this.input.customKeyStoreName,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCustomKeyStores.CustomKeyStores', props);
    return resource.getResponseField('CustomKeyStores') as unknown as shapes.KmsCustomKeyStoresListEntry[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCustomKeyStores',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeCustomKeyStores.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          CustomKeyStoreId: this.input.customKeyStoreId,
          CustomKeyStoreName: this.input.customKeyStoreName,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCustomKeyStores.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCustomKeyStores',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeCustomKeyStores.Truncated'),
        outputPath: 'Truncated',
        parameters: {
          CustomKeyStoreId: this.input.customKeyStoreId,
          CustomKeyStoreName: this.input.customKeyStoreName,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCustomKeyStores.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSDescribeKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsDescribeKeyRequest) {
    super(scope, id);
  }

  public get keyMetadata(): KMSDescribeKeyKeyMetadata {
    return new KMSDescribeKeyKeyMetadata(this, 'KeyMetadata', this.__resources, this.input);
  }

}

export class KMSDescribeKeyKeyMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsDescribeKeyRequest) {
    super(scope, id);
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.AWSAccountId'),
        outputPath: 'KeyMetadata.AWSAccountId',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.AWSAccountId', props);
    return resource.getResponseField('KeyMetadata.AWSAccountId') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.KeyId'),
        outputPath: 'KeyMetadata.KeyId',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.KeyId', props);
    return resource.getResponseField('KeyMetadata.KeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.Arn'),
        outputPath: 'KeyMetadata.Arn',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.Arn', props);
    return resource.getResponseField('KeyMetadata.Arn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.CreationDate'),
        outputPath: 'KeyMetadata.CreationDate',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.CreationDate', props);
    return resource.getResponseField('KeyMetadata.CreationDate') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.Enabled'),
        outputPath: 'KeyMetadata.Enabled',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.Enabled', props);
    return resource.getResponseField('KeyMetadata.Enabled') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.Description'),
        outputPath: 'KeyMetadata.Description',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.Description', props);
    return resource.getResponseField('KeyMetadata.Description') as unknown as string;
  }

  public get keyUsage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.KeyUsage'),
        outputPath: 'KeyMetadata.KeyUsage',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.KeyUsage', props);
    return resource.getResponseField('KeyMetadata.KeyUsage') as unknown as string;
  }

  public get keyState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.KeyState'),
        outputPath: 'KeyMetadata.KeyState',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.KeyState', props);
    return resource.getResponseField('KeyMetadata.KeyState') as unknown as string;
  }

  public get deletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.DeletionDate'),
        outputPath: 'KeyMetadata.DeletionDate',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.DeletionDate', props);
    return resource.getResponseField('KeyMetadata.DeletionDate') as unknown as string;
  }

  public get validTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.ValidTo'),
        outputPath: 'KeyMetadata.ValidTo',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.ValidTo', props);
    return resource.getResponseField('KeyMetadata.ValidTo') as unknown as string;
  }

  public get origin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.Origin'),
        outputPath: 'KeyMetadata.Origin',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.Origin', props);
    return resource.getResponseField('KeyMetadata.Origin') as unknown as string;
  }

  public get customKeyStoreId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.CustomKeyStoreId'),
        outputPath: 'KeyMetadata.CustomKeyStoreId',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.CustomKeyStoreId', props);
    return resource.getResponseField('KeyMetadata.CustomKeyStoreId') as unknown as string;
  }

  public get cloudHsmClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.CloudHsmClusterId'),
        outputPath: 'KeyMetadata.CloudHsmClusterId',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.CloudHsmClusterId', props);
    return resource.getResponseField('KeyMetadata.CloudHsmClusterId') as unknown as string;
  }

  public get expirationModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.ExpirationModel'),
        outputPath: 'KeyMetadata.ExpirationModel',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.ExpirationModel', props);
    return resource.getResponseField('KeyMetadata.ExpirationModel') as unknown as string;
  }

  public get keyManager(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.KeyManager'),
        outputPath: 'KeyMetadata.KeyManager',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.KeyManager', props);
    return resource.getResponseField('KeyMetadata.KeyManager') as unknown as string;
  }

  public get customerMasterKeySpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.CustomerMasterKeySpec'),
        outputPath: 'KeyMetadata.CustomerMasterKeySpec',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.CustomerMasterKeySpec', props);
    return resource.getResponseField('KeyMetadata.CustomerMasterKeySpec') as unknown as string;
  }

  public get encryptionAlgorithms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.EncryptionAlgorithms'),
        outputPath: 'KeyMetadata.EncryptionAlgorithms',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.EncryptionAlgorithms', props);
    return resource.getResponseField('KeyMetadata.EncryptionAlgorithms') as unknown as string[];
  }

  public get signingAlgorithms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.DescribeKey.KeyMetadata.SigningAlgorithms'),
        outputPath: 'KeyMetadata.SigningAlgorithms',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeKey.KeyMetadata.SigningAlgorithms', props);
    return resource.getResponseField('KeyMetadata.SigningAlgorithms') as unknown as string[];
  }

}

export class KMSEncrypt extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsEncryptRequest) {
    super(scope, id);
  }

  public get ciphertextBlob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'encrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Encrypt.CiphertextBlob'),
        outputPath: 'CiphertextBlob',
        parameters: {
          KeyId: this.input.keyId,
          Plaintext: {
          },
          EncryptionContext: this.input.encryptionContext,
          GrantTokens: this.input.grantTokens,
          EncryptionAlgorithm: this.input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Encrypt.CiphertextBlob', props);
    return resource.getResponseField('CiphertextBlob') as unknown as any;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'encrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Encrypt.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          Plaintext: {
          },
          EncryptionContext: this.input.encryptionContext,
          GrantTokens: this.input.grantTokens,
          EncryptionAlgorithm: this.input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Encrypt.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get encryptionAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'encrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Encrypt.EncryptionAlgorithm'),
        outputPath: 'EncryptionAlgorithm',
        parameters: {
          KeyId: this.input.keyId,
          Plaintext: {
          },
          EncryptionContext: this.input.encryptionContext,
          GrantTokens: this.input.grantTokens,
          EncryptionAlgorithm: this.input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Encrypt.EncryptionAlgorithm', props);
    return resource.getResponseField('EncryptionAlgorithm') as unknown as string;
  }

}

export class KMSGenerateDataKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGenerateDataKeyRequest) {
    super(scope, id);
  }

  public get ciphertextBlob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKey.CiphertextBlob'),
        outputPath: 'CiphertextBlob',
        parameters: {
          KeyId: this.input.keyId,
          EncryptionContext: this.input.encryptionContext,
          NumberOfBytes: this.input.numberOfBytes,
          KeySpec: this.input.keySpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKey.CiphertextBlob', props);
    return resource.getResponseField('CiphertextBlob') as unknown as any;
  }

  public get plaintext(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKey.Plaintext'),
        outputPath: 'Plaintext',
        parameters: {
          KeyId: this.input.keyId,
          EncryptionContext: this.input.encryptionContext,
          NumberOfBytes: this.input.numberOfBytes,
          KeySpec: this.input.keySpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKey.Plaintext', props);
    return resource.getResponseField('Plaintext') as unknown as any;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKey.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          EncryptionContext: this.input.encryptionContext,
          NumberOfBytes: this.input.numberOfBytes,
          KeySpec: this.input.keySpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKey.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

}

export class KMSGenerateDataKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGenerateDataKeyPairRequest) {
    super(scope, id);
  }

  public get privateKeyCiphertextBlob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPair',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPair.PrivateKeyCiphertextBlob'),
        outputPath: 'PrivateKeyCiphertextBlob',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPair.PrivateKeyCiphertextBlob', props);
    return resource.getResponseField('PrivateKeyCiphertextBlob') as unknown as any;
  }

  public get privateKeyPlaintext(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPair',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPair.PrivateKeyPlaintext'),
        outputPath: 'PrivateKeyPlaintext',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPair.PrivateKeyPlaintext', props);
    return resource.getResponseField('PrivateKeyPlaintext') as unknown as any;
  }

  public get publicKey(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPair',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPair.PublicKey'),
        outputPath: 'PublicKey',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPair.PublicKey', props);
    return resource.getResponseField('PublicKey') as unknown as any;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPair',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPair.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPair.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get keyPairSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPair',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPair.KeyPairSpec'),
        outputPath: 'KeyPairSpec',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPair.KeyPairSpec', props);
    return resource.getResponseField('KeyPairSpec') as unknown as string;
  }

}

export class KMSGenerateDataKeyPairWithoutPlaintext extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGenerateDataKeyPairWithoutPlaintextRequest) {
    super(scope, id);
  }

  public get privateKeyCiphertextBlob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPairWithoutPlaintext',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPairWithoutPlaintext.PrivateKeyCiphertextBlob'),
        outputPath: 'PrivateKeyCiphertextBlob',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPairWithoutPlaintext.PrivateKeyCiphertextBlob', props);
    return resource.getResponseField('PrivateKeyCiphertextBlob') as unknown as any;
  }

  public get publicKey(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPairWithoutPlaintext',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPairWithoutPlaintext.PublicKey'),
        outputPath: 'PublicKey',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPairWithoutPlaintext.PublicKey', props);
    return resource.getResponseField('PublicKey') as unknown as any;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPairWithoutPlaintext',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPairWithoutPlaintext.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPairWithoutPlaintext.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get keyPairSpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyPairWithoutPlaintext',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyPairWithoutPlaintext.KeyPairSpec'),
        outputPath: 'KeyPairSpec',
        parameters: {
          EncryptionContext: this.input.encryptionContext,
          KeyId: this.input.keyId,
          KeyPairSpec: this.input.keyPairSpec,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyPairWithoutPlaintext.KeyPairSpec', props);
    return resource.getResponseField('KeyPairSpec') as unknown as string;
  }

}

export class KMSGenerateDataKeyWithoutPlaintext extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGenerateDataKeyWithoutPlaintextRequest) {
    super(scope, id);
  }

  public get ciphertextBlob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyWithoutPlaintext',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyWithoutPlaintext.CiphertextBlob'),
        outputPath: 'CiphertextBlob',
        parameters: {
          KeyId: this.input.keyId,
          EncryptionContext: this.input.encryptionContext,
          KeySpec: this.input.keySpec,
          NumberOfBytes: this.input.numberOfBytes,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyWithoutPlaintext.CiphertextBlob', props);
    return resource.getResponseField('CiphertextBlob') as unknown as any;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataKeyWithoutPlaintext',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateDataKeyWithoutPlaintext.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          EncryptionContext: this.input.encryptionContext,
          KeySpec: this.input.keySpec,
          NumberOfBytes: this.input.numberOfBytes,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataKeyWithoutPlaintext.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

}

export class KMSGenerateRandom extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGenerateRandomRequest) {
    super(scope, id);
  }

  public get plaintext(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateRandom',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GenerateRandom.Plaintext'),
        outputPath: 'Plaintext',
        parameters: {
          NumberOfBytes: this.input.numberOfBytes,
          CustomKeyStoreId: this.input.customKeyStoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateRandom.Plaintext', props);
    return resource.getResponseField('Plaintext') as unknown as any;
  }

}

export class KMSFetchKeyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGetKeyPolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPolicy',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetKeyPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          KeyId: this.input.keyId,
          PolicyName: this.input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class KMSFetchKeyRotationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGetKeyRotationStatusRequest) {
    super(scope, id);
  }

  public get keyRotationEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyRotationStatus',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetKeyRotationStatus.KeyRotationEnabled'),
        outputPath: 'KeyRotationEnabled',
        parameters: {
          KeyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyRotationStatus.KeyRotationEnabled', props);
    return resource.getResponseField('KeyRotationEnabled') as unknown as boolean;
  }

}

export class KMSFetchParametersForImport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGetParametersForImportRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParametersForImport',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetParametersForImport.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          WrappingAlgorithm: this.input.wrappingAlgorithm,
          WrappingKeySpec: this.input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParametersForImport.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get importToken(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParametersForImport',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetParametersForImport.ImportToken'),
        outputPath: 'ImportToken',
        parameters: {
          KeyId: this.input.keyId,
          WrappingAlgorithm: this.input.wrappingAlgorithm,
          WrappingKeySpec: this.input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParametersForImport.ImportToken', props);
    return resource.getResponseField('ImportToken') as unknown as any;
  }

  public get publicKey(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParametersForImport',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetParametersForImport.PublicKey'),
        outputPath: 'PublicKey',
        parameters: {
          KeyId: this.input.keyId,
          WrappingAlgorithm: this.input.wrappingAlgorithm,
          WrappingKeySpec: this.input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParametersForImport.PublicKey', props);
    return resource.getResponseField('PublicKey') as unknown as any;
  }

  public get parametersValidTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParametersForImport',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetParametersForImport.ParametersValidTo'),
        outputPath: 'ParametersValidTo',
        parameters: {
          KeyId: this.input.keyId,
          WrappingAlgorithm: this.input.wrappingAlgorithm,
          WrappingKeySpec: this.input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParametersForImport.ParametersValidTo', props);
    return resource.getResponseField('ParametersValidTo') as unknown as string;
  }

}

export class KMSFetchPublicKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsGetPublicKeyRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetPublicKey.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get publicKey(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetPublicKey.PublicKey'),
        outputPath: 'PublicKey',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.PublicKey', props);
    return resource.getResponseField('PublicKey') as unknown as any;
  }

  public get customerMasterKeySpec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetPublicKey.CustomerMasterKeySpec'),
        outputPath: 'CustomerMasterKeySpec',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.CustomerMasterKeySpec', props);
    return resource.getResponseField('CustomerMasterKeySpec') as unknown as string;
  }

  public get keyUsage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetPublicKey.KeyUsage'),
        outputPath: 'KeyUsage',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.KeyUsage', props);
    return resource.getResponseField('KeyUsage') as unknown as string;
  }

  public get encryptionAlgorithms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetPublicKey.EncryptionAlgorithms'),
        outputPath: 'EncryptionAlgorithms',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.EncryptionAlgorithms', props);
    return resource.getResponseField('EncryptionAlgorithms') as unknown as string[];
  }

  public get signingAlgorithms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPublicKey',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.GetPublicKey.SigningAlgorithms'),
        outputPath: 'SigningAlgorithms',
        parameters: {
          KeyId: this.input.keyId,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPublicKey.SigningAlgorithms', props);
    return resource.getResponseField('SigningAlgorithms') as unknown as string[];
  }

}

export class KMSListAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsListAliasesRequest) {
    super(scope, id);
  }

  public get aliases(): shapes.KmsAliasListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListAliases.Aliases'),
        outputPath: 'Aliases',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.Aliases', props);
    return resource.getResponseField('Aliases') as unknown as shapes.KmsAliasListEntry[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListAliases.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAliases',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListAliases.Truncated'),
        outputPath: 'Truncated',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAliases.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSListGrants extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsListGrantsRequest) {
    super(scope, id);
  }

  public get grants(): shapes.KmsGrantListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGrants',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListGrants.Grants'),
        outputPath: 'Grants',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
          KeyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGrants.Grants', props);
    return resource.getResponseField('Grants') as unknown as shapes.KmsGrantListEntry[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGrants',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListGrants.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
          KeyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGrants.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGrants',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListGrants.Truncated'),
        outputPath: 'Truncated',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
          KeyId: this.input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGrants.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSListKeyPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsListKeyPoliciesRequest) {
    super(scope, id);
  }

  public get policyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeyPolicies',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListKeyPolicies.PolicyNames'),
        outputPath: 'PolicyNames',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyPolicies.PolicyNames', props);
    return resource.getResponseField('PolicyNames') as unknown as string[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeyPolicies',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListKeyPolicies.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyPolicies.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeyPolicies',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListKeyPolicies.Truncated'),
        outputPath: 'Truncated',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeyPolicies.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSListKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsListKeysRequest) {
    super(scope, id);
  }

  public get keys(): shapes.KmsKeyListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeys',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListKeys.Keys'),
        outputPath: 'Keys',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeys.Keys', props);
    return resource.getResponseField('Keys') as unknown as shapes.KmsKeyListEntry[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeys',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListKeys.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeys.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKeys',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListKeys.Truncated'),
        outputPath: 'Truncated',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKeys.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSListResourceTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsListResourceTagsRequest) {
    super(scope, id);
  }

  public get tags(): shapes.KmsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceTags',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListResourceTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.KmsTag[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceTags',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListResourceTags.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceTags.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceTags',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListResourceTags.Truncated'),
        outputPath: 'Truncated',
        parameters: {
          KeyId: this.input.keyId,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceTags.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSListRetirableGrants extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsListRetirableGrantsRequest) {
    super(scope, id);
  }

  public get grants(): shapes.KmsGrantListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRetirableGrants',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListRetirableGrants.Grants'),
        outputPath: 'Grants',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
          RetiringPrincipal: this.input.retiringPrincipal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRetirableGrants.Grants', props);
    return resource.getResponseField('Grants') as unknown as shapes.KmsGrantListEntry[];
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRetirableGrants',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListRetirableGrants.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
          RetiringPrincipal: this.input.retiringPrincipal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRetirableGrants.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRetirableGrants',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ListRetirableGrants.Truncated'),
        outputPath: 'Truncated',
        parameters: {
          Limit: this.input.limit,
          Marker: this.input.marker,
          RetiringPrincipal: this.input.retiringPrincipal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRetirableGrants.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSReEncrypt extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsReEncryptRequest) {
    super(scope, id);
  }

  public get ciphertextBlob(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reEncrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ReEncrypt.CiphertextBlob'),
        outputPath: 'CiphertextBlob',
        parameters: {
          CiphertextBlob: {
          },
          SourceEncryptionContext: this.input.sourceEncryptionContext,
          SourceKeyId: this.input.sourceKeyId,
          DestinationKeyId: this.input.destinationKeyId,
          DestinationEncryptionContext: this.input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.input.destinationEncryptionAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReEncrypt.CiphertextBlob', props);
    return resource.getResponseField('CiphertextBlob') as unknown as any;
  }

  public get sourceKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reEncrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ReEncrypt.SourceKeyId'),
        outputPath: 'SourceKeyId',
        parameters: {
          CiphertextBlob: {
          },
          SourceEncryptionContext: this.input.sourceEncryptionContext,
          SourceKeyId: this.input.sourceKeyId,
          DestinationKeyId: this.input.destinationKeyId,
          DestinationEncryptionContext: this.input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.input.destinationEncryptionAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReEncrypt.SourceKeyId', props);
    return resource.getResponseField('SourceKeyId') as unknown as string;
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reEncrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ReEncrypt.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          CiphertextBlob: {
          },
          SourceEncryptionContext: this.input.sourceEncryptionContext,
          SourceKeyId: this.input.sourceKeyId,
          DestinationKeyId: this.input.destinationKeyId,
          DestinationEncryptionContext: this.input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.input.destinationEncryptionAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReEncrypt.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get sourceEncryptionAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reEncrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ReEncrypt.SourceEncryptionAlgorithm'),
        outputPath: 'SourceEncryptionAlgorithm',
        parameters: {
          CiphertextBlob: {
          },
          SourceEncryptionContext: this.input.sourceEncryptionContext,
          SourceKeyId: this.input.sourceKeyId,
          DestinationKeyId: this.input.destinationKeyId,
          DestinationEncryptionContext: this.input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.input.destinationEncryptionAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReEncrypt.SourceEncryptionAlgorithm', props);
    return resource.getResponseField('SourceEncryptionAlgorithm') as unknown as string;
  }

  public get destinationEncryptionAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'reEncrypt',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ReEncrypt.DestinationEncryptionAlgorithm'),
        outputPath: 'DestinationEncryptionAlgorithm',
        parameters: {
          CiphertextBlob: {
          },
          SourceEncryptionContext: this.input.sourceEncryptionContext,
          SourceKeyId: this.input.sourceKeyId,
          DestinationKeyId: this.input.destinationKeyId,
          DestinationEncryptionContext: this.input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.input.destinationEncryptionAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReEncrypt.DestinationEncryptionAlgorithm', props);
    return resource.getResponseField('DestinationEncryptionAlgorithm') as unknown as string;
  }

}

export class KMSScheduleKeyDeletion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsScheduleKeyDeletionRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleKeyDeletion',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ScheduleKeyDeletion.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          PendingWindowInDays: this.input.pendingWindowInDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleKeyDeletion.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get deletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleKeyDeletion',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.ScheduleKeyDeletion.DeletionDate'),
        outputPath: 'DeletionDate',
        parameters: {
          KeyId: this.input.keyId,
          PendingWindowInDays: this.input.pendingWindowInDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleKeyDeletion.DeletionDate', props);
    return resource.getResponseField('DeletionDate') as unknown as string;
  }

}

export class KMSSign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsSignRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sign',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Sign.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          Message: {
          },
          MessageType: this.input.messageType,
          GrantTokens: this.input.grantTokens,
          SigningAlgorithm: this.input.signingAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Sign.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get signature(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sign',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Sign.Signature'),
        outputPath: 'Signature',
        parameters: {
          KeyId: this.input.keyId,
          Message: {
          },
          MessageType: this.input.messageType,
          GrantTokens: this.input.grantTokens,
          SigningAlgorithm: this.input.signingAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Sign.Signature', props);
    return resource.getResponseField('Signature') as unknown as any;
  }

  public get signingAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sign',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Sign.SigningAlgorithm'),
        outputPath: 'SigningAlgorithm',
        parameters: {
          KeyId: this.input.keyId,
          Message: {
          },
          MessageType: this.input.messageType,
          GrantTokens: this.input.grantTokens,
          SigningAlgorithm: this.input.signingAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Sign.SigningAlgorithm', props);
    return resource.getResponseField('SigningAlgorithm') as unknown as string;
  }

}

export class KMSVerify extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KmsVerifyRequest) {
    super(scope, id);
  }

  public get keyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'verify',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Verify.KeyId'),
        outputPath: 'KeyId',
        parameters: {
          KeyId: this.input.keyId,
          Message: {
          },
          MessageType: this.input.messageType,
          Signature: {
          },
          SigningAlgorithm: this.input.signingAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Verify.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

  public get signatureValid(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'verify',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Verify.SignatureValid'),
        outputPath: 'SignatureValid',
        parameters: {
          KeyId: this.input.keyId,
          Message: {
          },
          MessageType: this.input.messageType,
          Signature: {
          },
          SigningAlgorithm: this.input.signingAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Verify.SignatureValid', props);
    return resource.getResponseField('SignatureValid') as unknown as boolean;
  }

  public get signingAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'verify',
        service: 'KMS',
        physicalResourceId: cr.PhysicalResourceId.of('KMS.Verify.SigningAlgorithm'),
        outputPath: 'SigningAlgorithm',
        parameters: {
          KeyId: this.input.keyId,
          Message: {
          },
          MessageType: this.input.messageType,
          Signature: {
          },
          SigningAlgorithm: this.input.signingAlgorithm,
          GrantTokens: this.input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Verify.SigningAlgorithm', props);
    return resource.getResponseField('SigningAlgorithm') as unknown as string;
  }

}

