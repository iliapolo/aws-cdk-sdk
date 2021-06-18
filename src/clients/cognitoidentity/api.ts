import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CognitoIdentityClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createIdentityPool(input: shapes.CognitoIdentityCreateIdentityPoolInput): CognitoIdentityCreateIdentityPool {
    return new CognitoIdentityCreateIdentityPool(this, 'CreateIdentityPool', this.__resources, input);
  }

  public deleteIdentities(input: shapes.CognitoIdentityDeleteIdentitiesInput): CognitoIdentityDeleteIdentities {
    return new CognitoIdentityDeleteIdentities(this, 'DeleteIdentities', this.__resources, input);
  }

  public deleteIdentityPool(input: shapes.CognitoIdentityDeleteIdentityPoolInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DeleteIdentityPool'),
        parameters: {
          IdentityPoolId: input.identityPoolId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIdentityPool', props);
  }

  public describeIdentity(input: shapes.CognitoIdentityDescribeIdentityInput): CognitoIdentityDescribeIdentity {
    return new CognitoIdentityDescribeIdentity(this, 'DescribeIdentity', this.__resources, input);
  }

  public describeIdentityPool(input: shapes.CognitoIdentityDescribeIdentityPoolInput): CognitoIdentityDescribeIdentityPool {
    return new CognitoIdentityDescribeIdentityPool(this, 'DescribeIdentityPool', this.__resources, input);
  }

  public fetchCredentialsForIdentity(input: shapes.CognitoIdentityGetCredentialsForIdentityInput): CognitoIdentityFetchCredentialsForIdentity {
    return new CognitoIdentityFetchCredentialsForIdentity(this, 'FetchCredentialsForIdentity', this.__resources, input);
  }

  public fetchId(input: shapes.CognitoIdentityGetIdInput): CognitoIdentityFetchId {
    return new CognitoIdentityFetchId(this, 'FetchId', this.__resources, input);
  }

  public fetchIdentityPoolRoles(input: shapes.CognitoIdentityGetIdentityPoolRolesInput): CognitoIdentityFetchIdentityPoolRoles {
    return new CognitoIdentityFetchIdentityPoolRoles(this, 'FetchIdentityPoolRoles', this.__resources, input);
  }

  public fetchOpenIdToken(input: shapes.CognitoIdentityGetOpenIdTokenInput): CognitoIdentityFetchOpenIdToken {
    return new CognitoIdentityFetchOpenIdToken(this, 'FetchOpenIdToken', this.__resources, input);
  }

  public fetchOpenIdTokenForDeveloperIdentity(input: shapes.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput): CognitoIdentityFetchOpenIdTokenForDeveloperIdentity {
    return new CognitoIdentityFetchOpenIdTokenForDeveloperIdentity(this, 'FetchOpenIdTokenForDeveloperIdentity', this.__resources, input);
  }

  public listIdentities(input: shapes.CognitoIdentityListIdentitiesInput): CognitoIdentityListIdentities {
    return new CognitoIdentityListIdentities(this, 'ListIdentities', this.__resources, input);
  }

  public listIdentityPools(input: shapes.CognitoIdentityListIdentityPoolsInput): CognitoIdentityListIdentityPools {
    return new CognitoIdentityListIdentityPools(this, 'ListIdentityPools', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CognitoIdentityListTagsForResourceInput): CognitoIdentityListTagsForResource {
    return new CognitoIdentityListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public lookupDeveloperIdentity(input: shapes.CognitoIdentityLookupDeveloperIdentityInput): CognitoIdentityLookupDeveloperIdentity {
    return new CognitoIdentityLookupDeveloperIdentity(this, 'LookupDeveloperIdentity', this.__resources, input);
  }

  public mergeDeveloperIdentities(input: shapes.CognitoIdentityMergeDeveloperIdentitiesInput): CognitoIdentityMergeDeveloperIdentities {
    return new CognitoIdentityMergeDeveloperIdentities(this, 'MergeDeveloperIdentities', this.__resources, input);
  }

  public setIdentityPoolRoles(input: shapes.CognitoIdentitySetIdentityPoolRolesInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIdentityPoolRoles',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.SetIdentityPoolRoles'),
        parameters: {
          IdentityPoolId: input.identityPoolId,
          Roles: input.roles,
          RoleMappings: input.roleMappings,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetIdentityPoolRoles', props);
  }

  public tagResource(input: shapes.CognitoIdentityTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public unlinkDeveloperIdentity(input: shapes.CognitoIdentityUnlinkDeveloperIdentityInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unlinkDeveloperIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UnlinkDeveloperIdentity'),
        parameters: {
          IdentityId: input.identityId,
          IdentityPoolId: input.identityPoolId,
          DeveloperProviderName: input.developerProviderName,
          DeveloperUserIdentifier: input.developerUserIdentifier,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UnlinkDeveloperIdentity', props);
  }

  public unlinkIdentity(input: shapes.CognitoIdentityUnlinkIdentityInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unlinkIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UnlinkIdentity'),
        parameters: {
          IdentityId: input.identityId,
          Logins: input.logins,
          LoginsToRemove: input.loginsToRemove,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UnlinkIdentity', props);
  }

  public untagResource(input: shapes.CognitoIdentityUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateIdentityPool(input: shapes.CognitoIdentityIdentityPool): CognitoIdentityUpdateIdentityPool {
    return new CognitoIdentityUpdateIdentityPool(this, 'UpdateIdentityPool', this.__resources, input);
  }

}

export class CognitoIdentityCreateIdentityPool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityCreateIdentityPoolInput) {
    super(scope, id);
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get identityPoolName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.IdentityPoolName'),
        outputPath: 'IdentityPoolName',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.IdentityPoolName', props);
    return resource.getResponseField('IdentityPoolName') as unknown as string;
  }

  public get allowUnauthenticatedIdentities(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.AllowUnauthenticatedIdentities'),
        outputPath: 'AllowUnauthenticatedIdentities',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.AllowUnauthenticatedIdentities', props);
    return resource.getResponseField('AllowUnauthenticatedIdentities') as unknown as boolean;
  }

  public get allowClassicFlow(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.AllowClassicFlow'),
        outputPath: 'AllowClassicFlow',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.AllowClassicFlow', props);
    return resource.getResponseField('AllowClassicFlow') as unknown as boolean;
  }

  public get supportedLoginProviders(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.SupportedLoginProviders'),
        outputPath: 'SupportedLoginProviders',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.SupportedLoginProviders', props);
    return resource.getResponseField('SupportedLoginProviders') as unknown as Record<string, string>;
  }

  public get developerProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.DeveloperProviderName'),
        outputPath: 'DeveloperProviderName',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.DeveloperProviderName', props);
    return resource.getResponseField('DeveloperProviderName') as unknown as string;
  }

  public get openIdConnectProviderArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.OpenIdConnectProviderARNs'),
        outputPath: 'OpenIdConnectProviderARNs',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.OpenIdConnectProviderARNs', props);
    return resource.getResponseField('OpenIdConnectProviderARNs') as unknown as string[];
  }

  public get cognitoIdentityProviders(): shapes.CognitoIdentityCognitoIdentityProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.CognitoIdentityProviders'),
        outputPath: 'CognitoIdentityProviders',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.CognitoIdentityProviders', props);
    return resource.getResponseField('CognitoIdentityProviders') as unknown as shapes.CognitoIdentityCognitoIdentityProvider[];
  }

  public get samlProviderArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.SamlProviderARNs'),
        outputPath: 'SamlProviderARNs',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.SamlProviderARNs', props);
    return resource.getResponseField('SamlProviderARNs') as unknown as string[];
  }

  public get identityPoolTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.CreateIdentityPool.IdentityPoolTags'),
        outputPath: 'IdentityPoolTags',
        parameters: {
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIdentityPool.IdentityPoolTags', props);
    return resource.getResponseField('IdentityPoolTags') as unknown as Record<string, string>;
  }

}

export class CognitoIdentityDeleteIdentities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityDeleteIdentitiesInput) {
    super(scope, id);
  }

  public get unprocessedIdentityIds(): shapes.CognitoIdentityUnprocessedIdentityId[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIdentities',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DeleteIdentities.UnprocessedIdentityIds'),
        outputPath: 'UnprocessedIdentityIds',
        parameters: {
          IdentityIdsToDelete: this.input.identityIdsToDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIdentities.UnprocessedIdentityIds', props);
    return resource.getResponseField('UnprocessedIdentityIds') as unknown as shapes.CognitoIdentityUnprocessedIdentityId[];
  }

}

export class CognitoIdentityDescribeIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityDescribeIdentityInput) {
    super(scope, id);
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentity.IdentityId'),
        outputPath: 'IdentityId',
        parameters: {
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentity.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

  public get logins(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentity.Logins'),
        outputPath: 'Logins',
        parameters: {
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentity.Logins', props);
    return resource.getResponseField('Logins') as unknown as string[];
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentity.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentity.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentity.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          IdentityId: this.input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentity.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

}

export class CognitoIdentityDescribeIdentityPool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityDescribeIdentityPoolInput) {
    super(scope, id);
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get identityPoolName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.IdentityPoolName'),
        outputPath: 'IdentityPoolName',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.IdentityPoolName', props);
    return resource.getResponseField('IdentityPoolName') as unknown as string;
  }

  public get allowUnauthenticatedIdentities(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.AllowUnauthenticatedIdentities'),
        outputPath: 'AllowUnauthenticatedIdentities',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.AllowUnauthenticatedIdentities', props);
    return resource.getResponseField('AllowUnauthenticatedIdentities') as unknown as boolean;
  }

  public get allowClassicFlow(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.AllowClassicFlow'),
        outputPath: 'AllowClassicFlow',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.AllowClassicFlow', props);
    return resource.getResponseField('AllowClassicFlow') as unknown as boolean;
  }

  public get supportedLoginProviders(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.SupportedLoginProviders'),
        outputPath: 'SupportedLoginProviders',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.SupportedLoginProviders', props);
    return resource.getResponseField('SupportedLoginProviders') as unknown as Record<string, string>;
  }

  public get developerProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.DeveloperProviderName'),
        outputPath: 'DeveloperProviderName',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.DeveloperProviderName', props);
    return resource.getResponseField('DeveloperProviderName') as unknown as string;
  }

  public get openIdConnectProviderArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.OpenIdConnectProviderARNs'),
        outputPath: 'OpenIdConnectProviderARNs',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.OpenIdConnectProviderARNs', props);
    return resource.getResponseField('OpenIdConnectProviderARNs') as unknown as string[];
  }

  public get cognitoIdentityProviders(): shapes.CognitoIdentityCognitoIdentityProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.CognitoIdentityProviders'),
        outputPath: 'CognitoIdentityProviders',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.CognitoIdentityProviders', props);
    return resource.getResponseField('CognitoIdentityProviders') as unknown as shapes.CognitoIdentityCognitoIdentityProvider[];
  }

  public get samlProviderArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.SamlProviderARNs'),
        outputPath: 'SamlProviderARNs',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.SamlProviderARNs', props);
    return resource.getResponseField('SamlProviderARNs') as unknown as string[];
  }

  public get identityPoolTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.DescribeIdentityPool.IdentityPoolTags'),
        outputPath: 'IdentityPoolTags',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityPool.IdentityPoolTags', props);
    return resource.getResponseField('IdentityPoolTags') as unknown as Record<string, string>;
  }

}

export class CognitoIdentityFetchCredentialsForIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityGetCredentialsForIdentityInput) {
    super(scope, id);
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialsForIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetCredentialsForIdentity.IdentityId'),
        outputPath: 'IdentityId',
        parameters: {
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
          CustomRoleArn: this.input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialsForIdentity.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

  public get credentials(): CognitoIdentityFetchCredentialsForIdentityCredentials {
    return new CognitoIdentityFetchCredentialsForIdentityCredentials(this, 'Credentials', this.__resources, this.input);
  }

}

export class CognitoIdentityFetchCredentialsForIdentityCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityGetCredentialsForIdentityInput) {
    super(scope, id);
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialsForIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetCredentialsForIdentity.Credentials.AccessKeyId'),
        outputPath: 'Credentials.AccessKeyId',
        parameters: {
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
          CustomRoleArn: this.input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialsForIdentity.Credentials.AccessKeyId', props);
    return resource.getResponseField('Credentials.AccessKeyId') as unknown as string;
  }

  public get secretKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialsForIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetCredentialsForIdentity.Credentials.SecretKey'),
        outputPath: 'Credentials.SecretKey',
        parameters: {
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
          CustomRoleArn: this.input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialsForIdentity.Credentials.SecretKey', props);
    return resource.getResponseField('Credentials.SecretKey') as unknown as string;
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialsForIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetCredentialsForIdentity.Credentials.SessionToken'),
        outputPath: 'Credentials.SessionToken',
        parameters: {
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
          CustomRoleArn: this.input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialsForIdentity.Credentials.SessionToken', props);
    return resource.getResponseField('Credentials.SessionToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCredentialsForIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetCredentialsForIdentity.Credentials.Expiration'),
        outputPath: 'Credentials.Expiration',
        parameters: {
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
          CustomRoleArn: this.input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCredentialsForIdentity.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class CognitoIdentityFetchId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityGetIdInput) {
    super(scope, id);
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getId',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetId.IdentityId'),
        outputPath: 'IdentityId',
        parameters: {
          AccountId: this.input.accountId,
          IdentityPoolId: this.input.identityPoolId,
          Logins: this.input.logins,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetId.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

}

export class CognitoIdentityFetchIdentityPoolRoles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityGetIdentityPoolRolesInput) {
    super(scope, id);
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolRoles',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetIdentityPoolRoles.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolRoles.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get roles(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolRoles',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetIdentityPoolRoles.Roles'),
        outputPath: 'Roles',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolRoles.Roles', props);
    return resource.getResponseField('Roles') as unknown as Record<string, string>;
  }

  public get roleMappings(): Record<string, shapes.CognitoIdentityRoleMapping> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getIdentityPoolRoles',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetIdentityPoolRoles.RoleMappings'),
        outputPath: 'RoleMappings',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetIdentityPoolRoles.RoleMappings', props);
    return resource.getResponseField('RoleMappings') as unknown as Record<string, shapes.CognitoIdentityRoleMapping>;
  }

}

export class CognitoIdentityFetchOpenIdToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityGetOpenIdTokenInput) {
    super(scope, id);
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdToken',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetOpenIdToken.IdentityId'),
        outputPath: 'IdentityId',
        parameters: {
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIdToken.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

  public get token(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdToken',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetOpenIdToken.Token'),
        outputPath: 'Token',
        parameters: {
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIdToken.Token', props);
    return resource.getResponseField('Token') as unknown as string;
  }

}

export class CognitoIdentityFetchOpenIdTokenForDeveloperIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput) {
    super(scope, id);
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdTokenForDeveloperIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetOpenIdTokenForDeveloperIdentity.IdentityId'),
        outputPath: 'IdentityId',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
          TokenDuration: this.input.tokenDuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIdTokenForDeveloperIdentity.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

  public get token(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpenIdTokenForDeveloperIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetOpenIdTokenForDeveloperIdentity.Token'),
        outputPath: 'Token',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          Logins: this.input.logins,
          TokenDuration: this.input.tokenDuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpenIdTokenForDeveloperIdentity.Token', props);
    return resource.getResponseField('Token') as unknown as string;
  }

}

export class CognitoIdentityListIdentities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityListIdentitiesInput) {
    super(scope, id);
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentities',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.ListIdentities.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          HideDisabled: this.input.hideDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentities.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get identities(): shapes.CognitoIdentityIdentityDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentities',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.ListIdentities.Identities'),
        outputPath: 'Identities',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          HideDisabled: this.input.hideDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentities.Identities', props);
    return resource.getResponseField('Identities') as unknown as shapes.CognitoIdentityIdentityDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentities',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.ListIdentities.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          HideDisabled: this.input.hideDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoIdentityListIdentityPools extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityListIdentityPoolsInput) {
    super(scope, id);
  }

  public get identityPools(): shapes.CognitoIdentityIdentityPoolShortDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentityPools',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.ListIdentityPools.IdentityPools'),
        outputPath: 'IdentityPools',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentityPools.IdentityPools', props);
    return resource.getResponseField('IdentityPools') as unknown as shapes.CognitoIdentityIdentityPoolShortDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIdentityPools',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.ListIdentityPools.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIdentityPools.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoIdentityListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityListTagsForResourceInput) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.ListTagsForResource.Tags'),
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

export class CognitoIdentityLookupDeveloperIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityLookupDeveloperIdentityInput) {
    super(scope, id);
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'lookupDeveloperIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.LookupDeveloperIdentity.IdentityId'),
        outputPath: 'IdentityId',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DeveloperUserIdentifier: this.input.developerUserIdentifier,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LookupDeveloperIdentity.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

  public get developerUserIdentifierList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'lookupDeveloperIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.LookupDeveloperIdentity.DeveloperUserIdentifierList'),
        outputPath: 'DeveloperUserIdentifierList',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DeveloperUserIdentifier: this.input.developerUserIdentifier,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LookupDeveloperIdentity.DeveloperUserIdentifierList', props);
    return resource.getResponseField('DeveloperUserIdentifierList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'lookupDeveloperIdentity',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.LookupDeveloperIdentity.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityId: this.input.identityId,
          DeveloperUserIdentifier: this.input.developerUserIdentifier,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LookupDeveloperIdentity.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoIdentityMergeDeveloperIdentities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityMergeDeveloperIdentitiesInput) {
    super(scope, id);
  }

  public get identityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'mergeDeveloperIdentities',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.MergeDeveloperIdentities.IdentityId'),
        outputPath: 'IdentityId',
        parameters: {
          SourceUserIdentifier: this.input.sourceUserIdentifier,
          DestinationUserIdentifier: this.input.destinationUserIdentifier,
          DeveloperProviderName: this.input.developerProviderName,
          IdentityPoolId: this.input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MergeDeveloperIdentities.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

}

export class CognitoIdentityUpdateIdentityPool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CognitoIdentityIdentityPool) {
    super(scope, id);
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get identityPoolName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.IdentityPoolName'),
        outputPath: 'IdentityPoolName',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.IdentityPoolName', props);
    return resource.getResponseField('IdentityPoolName') as unknown as string;
  }

  public get allowUnauthenticatedIdentities(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.AllowUnauthenticatedIdentities'),
        outputPath: 'AllowUnauthenticatedIdentities',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.AllowUnauthenticatedIdentities', props);
    return resource.getResponseField('AllowUnauthenticatedIdentities') as unknown as boolean;
  }

  public get allowClassicFlow(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.AllowClassicFlow'),
        outputPath: 'AllowClassicFlow',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.AllowClassicFlow', props);
    return resource.getResponseField('AllowClassicFlow') as unknown as boolean;
  }

  public get supportedLoginProviders(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.SupportedLoginProviders'),
        outputPath: 'SupportedLoginProviders',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.SupportedLoginProviders', props);
    return resource.getResponseField('SupportedLoginProviders') as unknown as Record<string, string>;
  }

  public get developerProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.DeveloperProviderName'),
        outputPath: 'DeveloperProviderName',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.DeveloperProviderName', props);
    return resource.getResponseField('DeveloperProviderName') as unknown as string;
  }

  public get openIdConnectProviderArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.OpenIdConnectProviderARNs'),
        outputPath: 'OpenIdConnectProviderARNs',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.OpenIdConnectProviderARNs', props);
    return resource.getResponseField('OpenIdConnectProviderARNs') as unknown as string[];
  }

  public get cognitoIdentityProviders(): shapes.CognitoIdentityCognitoIdentityProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.CognitoIdentityProviders'),
        outputPath: 'CognitoIdentityProviders',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.CognitoIdentityProviders', props);
    return resource.getResponseField('CognitoIdentityProviders') as unknown as shapes.CognitoIdentityCognitoIdentityProvider[];
  }

  public get samlProviderArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.SamlProviderARNs'),
        outputPath: 'SamlProviderARNs',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.SamlProviderARNs', props);
    return resource.getResponseField('SamlProviderARNs') as unknown as string[];
  }

  public get identityPoolTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityPool',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.UpdateIdentityPool.IdentityPoolTags'),
        outputPath: 'IdentityPoolTags',
        parameters: {
          IdentityPoolId: this.input.identityPoolId,
          IdentityPoolName: this.input.identityPoolName,
          AllowUnauthenticatedIdentities: this.input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.input.allowClassicFlow,
          SupportedLoginProviders: this.input.supportedLoginProviders,
          DeveloperProviderName: this.input.developerProviderName,
          OpenIdConnectProviderARNs: this.input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.input.cognitoIdentityProviders,
          SamlProviderARNs: this.input.samlProviderArNs,
          IdentityPoolTags: this.input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIdentityPool.IdentityPoolTags', props);
    return resource.getResponseField('IdentityPoolTags') as unknown as Record<string, string>;
  }

}

