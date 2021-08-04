import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KmsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelKeyDeletion(input: shapes.KmsCancelKeyDeletionRequest): KMSResponsesCancelKeyDeletion {
    return new KMSResponsesCancelKeyDeletion(this, this.__resources, input);
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

  public createCustomKeyStore(input: shapes.KmsCreateCustomKeyStoreRequest): KMSResponsesCreateCustomKeyStore {
    return new KMSResponsesCreateCustomKeyStore(this, this.__resources, input);
  }

  public createGrant(input: shapes.KmsCreateGrantRequest): KMSResponsesCreateGrant {
    return new KMSResponsesCreateGrant(this, this.__resources, input);
  }

  public createKey(input: shapes.KmsCreateKeyRequest): KMSResponsesCreateKey {
    return new KMSResponsesCreateKey(this, this.__resources, input);
  }

  public decrypt(input: shapes.KmsDecryptRequest): KMSResponsesDecrypt {
    return new KMSResponsesDecrypt(this, this.__resources, input);
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

  public describeCustomKeyStores(input: shapes.KmsDescribeCustomKeyStoresRequest): KMSResponsesDescribeCustomKeyStores {
    return new KMSResponsesDescribeCustomKeyStores(this, this.__resources, input);
  }

  public describeKey(input: shapes.KmsDescribeKeyRequest): KMSResponsesDescribeKey {
    return new KMSResponsesDescribeKey(this, this.__resources, input);
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

  public encrypt(input: shapes.KmsEncryptRequest): KMSResponsesEncrypt {
    return new KMSResponsesEncrypt(this, this.__resources, input);
  }

  public generateDataKey(input: shapes.KmsGenerateDataKeyRequest): KMSResponsesGenerateDataKey {
    return new KMSResponsesGenerateDataKey(this, this.__resources, input);
  }

  public generateDataKeyPair(input: shapes.KmsGenerateDataKeyPairRequest): KMSResponsesGenerateDataKeyPair {
    return new KMSResponsesGenerateDataKeyPair(this, this.__resources, input);
  }

  public generateDataKeyPairWithoutPlaintext(input: shapes.KmsGenerateDataKeyPairWithoutPlaintextRequest): KMSResponsesGenerateDataKeyPairWithoutPlaintext {
    return new KMSResponsesGenerateDataKeyPairWithoutPlaintext(this, this.__resources, input);
  }

  public generateDataKeyWithoutPlaintext(input: shapes.KmsGenerateDataKeyWithoutPlaintextRequest): KMSResponsesGenerateDataKeyWithoutPlaintext {
    return new KMSResponsesGenerateDataKeyWithoutPlaintext(this, this.__resources, input);
  }

  public generateRandom(input: shapes.KmsGenerateRandomRequest): KMSResponsesGenerateRandom {
    return new KMSResponsesGenerateRandom(this, this.__resources, input);
  }

  public fetchKeyPolicy(input: shapes.KmsGetKeyPolicyRequest): KMSResponsesFetchKeyPolicy {
    return new KMSResponsesFetchKeyPolicy(this, this.__resources, input);
  }

  public fetchKeyRotationStatus(input: shapes.KmsGetKeyRotationStatusRequest): KMSResponsesFetchKeyRotationStatus {
    return new KMSResponsesFetchKeyRotationStatus(this, this.__resources, input);
  }

  public fetchParametersForImport(input: shapes.KmsGetParametersForImportRequest): KMSResponsesFetchParametersForImport {
    return new KMSResponsesFetchParametersForImport(this, this.__resources, input);
  }

  public fetchPublicKey(input: shapes.KmsGetPublicKeyRequest): KMSResponsesFetchPublicKey {
    return new KMSResponsesFetchPublicKey(this, this.__resources, input);
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

  public listAliases(input: shapes.KmsListAliasesRequest): KMSResponsesListAliases {
    return new KMSResponsesListAliases(this, this.__resources, input);
  }

  public listGrants(input: shapes.KmsListGrantsRequest): KMSResponsesListGrants {
    return new KMSResponsesListGrants(this, this.__resources, input);
  }

  public listKeyPolicies(input: shapes.KmsListKeyPoliciesRequest): KMSResponsesListKeyPolicies {
    return new KMSResponsesListKeyPolicies(this, this.__resources, input);
  }

  public listKeys(input: shapes.KmsListKeysRequest): KMSResponsesListKeys {
    return new KMSResponsesListKeys(this, this.__resources, input);
  }

  public listResourceTags(input: shapes.KmsListResourceTagsRequest): KMSResponsesListResourceTags {
    return new KMSResponsesListResourceTags(this, this.__resources, input);
  }

  public listRetirableGrants(input: shapes.KmsListRetirableGrantsRequest): KMSResponsesListRetirableGrants {
    return new KMSResponsesListRetirableGrants(this, this.__resources, input);
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

  public reEncrypt(input: shapes.KmsReEncryptRequest): KMSResponsesReEncrypt {
    return new KMSResponsesReEncrypt(this, this.__resources, input);
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

  public scheduleKeyDeletion(input: shapes.KmsScheduleKeyDeletionRequest): KMSResponsesScheduleKeyDeletion {
    return new KMSResponsesScheduleKeyDeletion(this, this.__resources, input);
  }

  public sign(input: shapes.KmsSignRequest): KMSResponsesSign {
    return new KMSResponsesSign(this, this.__resources, input);
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

  public verify(input: shapes.KmsVerifyRequest): KMSResponsesVerify {
    return new KMSResponsesVerify(this, this.__resources, input);
  }

}

export class KMSResponsesCancelKeyDeletion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsCancelKeyDeletionRequest) {
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
          KeyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelKeyDeletion.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

}

export class KMSResponsesCreateCustomKeyStore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsCreateCustomKeyStoreRequest) {
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
          CustomKeyStoreName: this.__input.customKeyStoreName,
          CloudHsmClusterId: this.__input.cloudHsmClusterId,
          TrustAnchorCertificate: this.__input.trustAnchorCertificate,
          KeyStorePassword: this.__input.keyStorePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCustomKeyStore.CustomKeyStoreId', props);
    return resource.getResponseField('CustomKeyStoreId') as unknown as string;
  }

}

export class KMSResponsesCreateGrant {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsCreateGrantRequest) {
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
          KeyId: this.__input.keyId,
          GranteePrincipal: this.__input.granteePrincipal,
          RetiringPrincipal: this.__input.retiringPrincipal,
          Operations: this.__input.operations,
          Constraints: {
            EncryptionContextSubset: this.__input.constraints?.encryptionContextSubset,
            EncryptionContextEquals: this.__input.constraints?.encryptionContextEquals,
          },
          GrantTokens: this.__input.grantTokens,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrant.GrantToken', props);
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
          KeyId: this.__input.keyId,
          GranteePrincipal: this.__input.granteePrincipal,
          RetiringPrincipal: this.__input.retiringPrincipal,
          Operations: this.__input.operations,
          Constraints: {
            EncryptionContextSubset: this.__input.constraints?.encryptionContextSubset,
            EncryptionContextEquals: this.__input.constraints?.encryptionContextEquals,
          },
          GrantTokens: this.__input.grantTokens,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrant.GrantId', props);
    return resource.getResponseField('GrantId') as unknown as string;
  }

}

export class KMSResponsesCreateKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsCreateKeyRequest) {
  }

  public get keyMetadata(): KMSResponsesCreateKeyKeyMetadata {
    return new KMSResponsesCreateKeyKeyMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class KMSResponsesCreateKeyKeyMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsCreateKeyRequest) {
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.AWSAccountId', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.KeyId', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.Arn', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.CreationDate', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.Enabled', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.Description', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.KeyUsage', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.KeyState', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.DeletionDate', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.ValidTo', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.Origin', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.CustomKeyStoreId', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.CloudHsmClusterId', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.ExpirationModel', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.KeyManager', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.CustomerMasterKeySpec', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.EncryptionAlgorithms', props);
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
          Policy: this.__input.policy,
          Description: this.__input.description,
          KeyUsage: this.__input.keyUsage,
          CustomerMasterKeySpec: this.__input.customerMasterKeySpec,
          Origin: this.__input.origin,
          CustomKeyStoreId: this.__input.customKeyStoreId,
          BypassPolicyLockoutSafetyCheck: this.__input.bypassPolicyLockoutSafetyCheck,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKey.KeyMetadata.SigningAlgorithms', props);
    return resource.getResponseField('KeyMetadata.SigningAlgorithms') as unknown as string[];
  }

}

export class KMSResponsesDecrypt {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsDecryptRequest) {
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
          EncryptionContext: this.__input.encryptionContext,
          GrantTokens: this.__input.grantTokens,
          KeyId: this.__input.keyId,
          EncryptionAlgorithm: this.__input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Decrypt.KeyId', props);
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
          EncryptionContext: this.__input.encryptionContext,
          GrantTokens: this.__input.grantTokens,
          KeyId: this.__input.keyId,
          EncryptionAlgorithm: this.__input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Decrypt.Plaintext', props);
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
          EncryptionContext: this.__input.encryptionContext,
          GrantTokens: this.__input.grantTokens,
          KeyId: this.__input.keyId,
          EncryptionAlgorithm: this.__input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Decrypt.EncryptionAlgorithm', props);
    return resource.getResponseField('EncryptionAlgorithm') as unknown as string;
  }

}

export class KMSResponsesDescribeCustomKeyStores {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsDescribeCustomKeyStoresRequest) {
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
          CustomKeyStoreId: this.__input.customKeyStoreId,
          CustomKeyStoreName: this.__input.customKeyStoreName,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCustomKeyStores.CustomKeyStores', props);
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
          CustomKeyStoreId: this.__input.customKeyStoreId,
          CustomKeyStoreName: this.__input.customKeyStoreName,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCustomKeyStores.NextMarker', props);
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
          CustomKeyStoreId: this.__input.customKeyStoreId,
          CustomKeyStoreName: this.__input.customKeyStoreName,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCustomKeyStores.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSResponsesDescribeKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsDescribeKeyRequest) {
  }

  public get keyMetadata(): KMSResponsesDescribeKeyKeyMetadata {
    return new KMSResponsesDescribeKeyKeyMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class KMSResponsesDescribeKeyKeyMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsDescribeKeyRequest) {
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.AWSAccountId', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.KeyId', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.Arn', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.CreationDate', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.Enabled', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.Description', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.KeyUsage', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.KeyState', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.DeletionDate', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.ValidTo', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.Origin', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.CustomKeyStoreId', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.CloudHsmClusterId', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.ExpirationModel', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.KeyManager', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.CustomerMasterKeySpec', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.EncryptionAlgorithms', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeKey.KeyMetadata.SigningAlgorithms', props);
    return resource.getResponseField('KeyMetadata.SigningAlgorithms') as unknown as string[];
  }

}

export class KMSResponsesEncrypt {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsEncryptRequest) {
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
          KeyId: this.__input.keyId,
          Plaintext: {
          },
          EncryptionContext: this.__input.encryptionContext,
          GrantTokens: this.__input.grantTokens,
          EncryptionAlgorithm: this.__input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Encrypt.CiphertextBlob', props);
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
          KeyId: this.__input.keyId,
          Plaintext: {
          },
          EncryptionContext: this.__input.encryptionContext,
          GrantTokens: this.__input.grantTokens,
          EncryptionAlgorithm: this.__input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Encrypt.KeyId', props);
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
          KeyId: this.__input.keyId,
          Plaintext: {
          },
          EncryptionContext: this.__input.encryptionContext,
          GrantTokens: this.__input.grantTokens,
          EncryptionAlgorithm: this.__input.encryptionAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Encrypt.EncryptionAlgorithm', props);
    return resource.getResponseField('EncryptionAlgorithm') as unknown as string;
  }

}

export class KMSResponsesGenerateDataKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGenerateDataKeyRequest) {
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
          KeyId: this.__input.keyId,
          EncryptionContext: this.__input.encryptionContext,
          NumberOfBytes: this.__input.numberOfBytes,
          KeySpec: this.__input.keySpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKey.CiphertextBlob', props);
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
          KeyId: this.__input.keyId,
          EncryptionContext: this.__input.encryptionContext,
          NumberOfBytes: this.__input.numberOfBytes,
          KeySpec: this.__input.keySpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKey.Plaintext', props);
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
          KeyId: this.__input.keyId,
          EncryptionContext: this.__input.encryptionContext,
          NumberOfBytes: this.__input.numberOfBytes,
          KeySpec: this.__input.keySpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKey.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

}

export class KMSResponsesGenerateDataKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGenerateDataKeyPairRequest) {
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPair.PrivateKeyCiphertextBlob', props);
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPair.PrivateKeyPlaintext', props);
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPair.PublicKey', props);
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPair.KeyId', props);
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPair.KeyPairSpec', props);
    return resource.getResponseField('KeyPairSpec') as unknown as string;
  }

}

export class KMSResponsesGenerateDataKeyPairWithoutPlaintext {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGenerateDataKeyPairWithoutPlaintextRequest) {
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPairWithoutPlaintext.PrivateKeyCiphertextBlob', props);
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPairWithoutPlaintext.PublicKey', props);
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPairWithoutPlaintext.KeyId', props);
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
          EncryptionContext: this.__input.encryptionContext,
          KeyId: this.__input.keyId,
          KeyPairSpec: this.__input.keyPairSpec,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyPairWithoutPlaintext.KeyPairSpec', props);
    return resource.getResponseField('KeyPairSpec') as unknown as string;
  }

}

export class KMSResponsesGenerateDataKeyWithoutPlaintext {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGenerateDataKeyWithoutPlaintextRequest) {
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
          KeyId: this.__input.keyId,
          EncryptionContext: this.__input.encryptionContext,
          KeySpec: this.__input.keySpec,
          NumberOfBytes: this.__input.numberOfBytes,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyWithoutPlaintext.CiphertextBlob', props);
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
          KeyId: this.__input.keyId,
          EncryptionContext: this.__input.encryptionContext,
          KeySpec: this.__input.keySpec,
          NumberOfBytes: this.__input.numberOfBytes,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataKeyWithoutPlaintext.KeyId', props);
    return resource.getResponseField('KeyId') as unknown as string;
  }

}

export class KMSResponsesGenerateRandom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGenerateRandomRequest) {
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
          NumberOfBytes: this.__input.numberOfBytes,
          CustomKeyStoreId: this.__input.customKeyStoreId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateRandom.Plaintext', props);
    return resource.getResponseField('Plaintext') as unknown as any;
  }

}

export class KMSResponsesFetchKeyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGetKeyPolicyRequest) {
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
          KeyId: this.__input.keyId,
          PolicyName: this.__input.policyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class KMSResponsesFetchKeyRotationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGetKeyRotationStatusRequest) {
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
          KeyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyRotationStatus.KeyRotationEnabled', props);
    return resource.getResponseField('KeyRotationEnabled') as unknown as boolean;
  }

}

export class KMSResponsesFetchParametersForImport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGetParametersForImportRequest) {
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
          KeyId: this.__input.keyId,
          WrappingAlgorithm: this.__input.wrappingAlgorithm,
          WrappingKeySpec: this.__input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParametersForImport.KeyId', props);
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
          KeyId: this.__input.keyId,
          WrappingAlgorithm: this.__input.wrappingAlgorithm,
          WrappingKeySpec: this.__input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParametersForImport.ImportToken', props);
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
          KeyId: this.__input.keyId,
          WrappingAlgorithm: this.__input.wrappingAlgorithm,
          WrappingKeySpec: this.__input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParametersForImport.PublicKey', props);
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
          KeyId: this.__input.keyId,
          WrappingAlgorithm: this.__input.wrappingAlgorithm,
          WrappingKeySpec: this.__input.wrappingKeySpec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParametersForImport.ParametersValidTo', props);
    return resource.getResponseField('ParametersValidTo') as unknown as string;
  }

}

export class KMSResponsesFetchPublicKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsGetPublicKeyRequest) {
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicKey.KeyId', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicKey.PublicKey', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicKey.CustomerMasterKeySpec', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicKey.KeyUsage', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicKey.EncryptionAlgorithms', props);
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
          KeyId: this.__input.keyId,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPublicKey.SigningAlgorithms', props);
    return resource.getResponseField('SigningAlgorithms') as unknown as string[];
  }

}

export class KMSResponsesListAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsListAliasesRequest) {
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.Aliases', props);
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.NextMarker', props);
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAliases.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSResponsesListGrants {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsListGrantsRequest) {
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          KeyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGrants.Grants', props);
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          KeyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGrants.NextMarker', props);
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          KeyId: this.__input.keyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGrants.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSResponsesListKeyPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsListKeyPoliciesRequest) {
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeyPolicies.PolicyNames', props);
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeyPolicies.NextMarker', props);
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeyPolicies.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSResponsesListKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsListKeysRequest) {
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeys.Keys', props);
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeys.NextMarker', props);
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKeys.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSResponsesListResourceTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsListResourceTagsRequest) {
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceTags.Tags', props);
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceTags.NextMarker', props);
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
          KeyId: this.__input.keyId,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceTags.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSResponsesListRetirableGrants {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsListRetirableGrantsRequest) {
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          RetiringPrincipal: this.__input.retiringPrincipal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRetirableGrants.Grants', props);
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          RetiringPrincipal: this.__input.retiringPrincipal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRetirableGrants.NextMarker', props);
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
          Limit: this.__input.limit,
          Marker: this.__input.marker,
          RetiringPrincipal: this.__input.retiringPrincipal,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRetirableGrants.Truncated', props);
    return resource.getResponseField('Truncated') as unknown as boolean;
  }

}

export class KMSResponsesReEncrypt {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsReEncryptRequest) {
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
          SourceEncryptionContext: this.__input.sourceEncryptionContext,
          SourceKeyId: this.__input.sourceKeyId,
          DestinationKeyId: this.__input.destinationKeyId,
          DestinationEncryptionContext: this.__input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.__input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.__input.destinationEncryptionAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReEncrypt.CiphertextBlob', props);
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
          SourceEncryptionContext: this.__input.sourceEncryptionContext,
          SourceKeyId: this.__input.sourceKeyId,
          DestinationKeyId: this.__input.destinationKeyId,
          DestinationEncryptionContext: this.__input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.__input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.__input.destinationEncryptionAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReEncrypt.SourceKeyId', props);
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
          SourceEncryptionContext: this.__input.sourceEncryptionContext,
          SourceKeyId: this.__input.sourceKeyId,
          DestinationKeyId: this.__input.destinationKeyId,
          DestinationEncryptionContext: this.__input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.__input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.__input.destinationEncryptionAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReEncrypt.KeyId', props);
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
          SourceEncryptionContext: this.__input.sourceEncryptionContext,
          SourceKeyId: this.__input.sourceKeyId,
          DestinationKeyId: this.__input.destinationKeyId,
          DestinationEncryptionContext: this.__input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.__input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.__input.destinationEncryptionAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReEncrypt.SourceEncryptionAlgorithm', props);
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
          SourceEncryptionContext: this.__input.sourceEncryptionContext,
          SourceKeyId: this.__input.sourceKeyId,
          DestinationKeyId: this.__input.destinationKeyId,
          DestinationEncryptionContext: this.__input.destinationEncryptionContext,
          SourceEncryptionAlgorithm: this.__input.sourceEncryptionAlgorithm,
          DestinationEncryptionAlgorithm: this.__input.destinationEncryptionAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReEncrypt.DestinationEncryptionAlgorithm', props);
    return resource.getResponseField('DestinationEncryptionAlgorithm') as unknown as string;
  }

}

export class KMSResponsesScheduleKeyDeletion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsScheduleKeyDeletionRequest) {
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
          KeyId: this.__input.keyId,
          PendingWindowInDays: this.__input.pendingWindowInDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleKeyDeletion.KeyId', props);
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
          KeyId: this.__input.keyId,
          PendingWindowInDays: this.__input.pendingWindowInDays,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleKeyDeletion.DeletionDate', props);
    return resource.getResponseField('DeletionDate') as unknown as string;
  }

}

export class KMSResponsesSign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsSignRequest) {
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
          KeyId: this.__input.keyId,
          Message: {
          },
          MessageType: this.__input.messageType,
          GrantTokens: this.__input.grantTokens,
          SigningAlgorithm: this.__input.signingAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Sign.KeyId', props);
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
          KeyId: this.__input.keyId,
          Message: {
          },
          MessageType: this.__input.messageType,
          GrantTokens: this.__input.grantTokens,
          SigningAlgorithm: this.__input.signingAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Sign.Signature', props);
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
          KeyId: this.__input.keyId,
          Message: {
          },
          MessageType: this.__input.messageType,
          GrantTokens: this.__input.grantTokens,
          SigningAlgorithm: this.__input.signingAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Sign.SigningAlgorithm', props);
    return resource.getResponseField('SigningAlgorithm') as unknown as string;
  }

}

export class KMSResponsesVerify {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KmsVerifyRequest) {
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
          KeyId: this.__input.keyId,
          Message: {
          },
          MessageType: this.__input.messageType,
          Signature: {
          },
          SigningAlgorithm: this.__input.signingAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Verify.KeyId', props);
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
          KeyId: this.__input.keyId,
          Message: {
          },
          MessageType: this.__input.messageType,
          Signature: {
          },
          SigningAlgorithm: this.__input.signingAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Verify.SignatureValid', props);
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
          KeyId: this.__input.keyId,
          Message: {
          },
          MessageType: this.__input.messageType,
          Signature: {
          },
          SigningAlgorithm: this.__input.signingAlgorithm,
          GrantTokens: this.__input.grantTokens,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Verify.SigningAlgorithm', props);
    return resource.getResponseField('SigningAlgorithm') as unknown as string;
  }

}

