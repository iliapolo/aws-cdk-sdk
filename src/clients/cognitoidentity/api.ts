import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CognitoIdentityClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createIdentityPool(input: shapes.CognitoIdentityCreateIdentityPoolInput): CognitoIdentityResponsesCreateIdentityPool {
    return new CognitoIdentityResponsesCreateIdentityPool(this, this.__resources, input);
  }

  public deleteIdentities(input: shapes.CognitoIdentityDeleteIdentitiesInput): CognitoIdentityResponsesDeleteIdentities {
    return new CognitoIdentityResponsesDeleteIdentities(this, this.__resources, input);
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

  public describeIdentity(input: shapes.CognitoIdentityDescribeIdentityInput): CognitoIdentityResponsesDescribeIdentity {
    return new CognitoIdentityResponsesDescribeIdentity(this, this.__resources, input);
  }

  public describeIdentityPool(input: shapes.CognitoIdentityDescribeIdentityPoolInput): CognitoIdentityResponsesDescribeIdentityPool {
    return new CognitoIdentityResponsesDescribeIdentityPool(this, this.__resources, input);
  }

  public fetchCredentialsForIdentity(input: shapes.CognitoIdentityGetCredentialsForIdentityInput): CognitoIdentityResponsesFetchCredentialsForIdentity {
    return new CognitoIdentityResponsesFetchCredentialsForIdentity(this, this.__resources, input);
  }

  public fetchId(input: shapes.CognitoIdentityGetIdInput): CognitoIdentityResponsesFetchId {
    return new CognitoIdentityResponsesFetchId(this, this.__resources, input);
  }

  public fetchIdentityPoolRoles(input: shapes.CognitoIdentityGetIdentityPoolRolesInput): CognitoIdentityResponsesFetchIdentityPoolRoles {
    return new CognitoIdentityResponsesFetchIdentityPoolRoles(this, this.__resources, input);
  }

  public fetchOpenIdToken(input: shapes.CognitoIdentityGetOpenIdTokenInput): CognitoIdentityResponsesFetchOpenIdToken {
    return new CognitoIdentityResponsesFetchOpenIdToken(this, this.__resources, input);
  }

  public fetchOpenIdTokenForDeveloperIdentity(input: shapes.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput): CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity {
    return new CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity(this, this.__resources, input);
  }

  public fetchPrincipalTagAttributeMap(input: shapes.CognitoIdentityGetPrincipalTagAttributeMapInput): CognitoIdentityResponsesFetchPrincipalTagAttributeMap {
    return new CognitoIdentityResponsesFetchPrincipalTagAttributeMap(this, this.__resources, input);
  }

  public listIdentities(input: shapes.CognitoIdentityListIdentitiesInput): CognitoIdentityResponsesListIdentities {
    return new CognitoIdentityResponsesListIdentities(this, this.__resources, input);
  }

  public listIdentityPools(input: shapes.CognitoIdentityListIdentityPoolsInput): CognitoIdentityResponsesListIdentityPools {
    return new CognitoIdentityResponsesListIdentityPools(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CognitoIdentityListTagsForResourceInput): CognitoIdentityResponsesListTagsForResource {
    return new CognitoIdentityResponsesListTagsForResource(this, this.__resources, input);
  }

  public lookupDeveloperIdentity(input: shapes.CognitoIdentityLookupDeveloperIdentityInput): CognitoIdentityResponsesLookupDeveloperIdentity {
    return new CognitoIdentityResponsesLookupDeveloperIdentity(this, this.__resources, input);
  }

  public mergeDeveloperIdentities(input: shapes.CognitoIdentityMergeDeveloperIdentitiesInput): CognitoIdentityResponsesMergeDeveloperIdentities {
    return new CognitoIdentityResponsesMergeDeveloperIdentities(this, this.__resources, input);
  }

  public putIdentityPoolRoles(input: shapes.CognitoIdentitySetIdentityPoolRolesInput): void {
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

  public putPrincipalTagAttributeMap(input: shapes.CognitoIdentitySetPrincipalTagAttributeMapInput): CognitoIdentityResponsesPutPrincipalTagAttributeMap {
    return new CognitoIdentityResponsesPutPrincipalTagAttributeMap(this, this.__resources, input);
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

  public updateIdentityPool(input: shapes.CognitoIdentityIdentityPool): CognitoIdentityResponsesUpdateIdentityPool {
    return new CognitoIdentityResponsesUpdateIdentityPool(this, this.__resources, input);
  }

}

export class CognitoIdentityResponsesCreateIdentityPool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityCreateIdentityPoolInput) {
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.IdentityPoolId', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.IdentityPoolName', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.AllowUnauthenticatedIdentities', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.AllowClassicFlow', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.SupportedLoginProviders', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.DeveloperProviderName', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.OpenIdConnectProviderARNs', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.CognitoIdentityProviders', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.SamlProviderARNs', props);
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
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIdentityPool.IdentityPoolTags', props);
    return resource.getResponseField('IdentityPoolTags') as unknown as Record<string, string>;
  }

}

export class CognitoIdentityResponsesDeleteIdentities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityDeleteIdentitiesInput) {
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
          IdentityIdsToDelete: this.__input.identityIdsToDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIdentities.UnprocessedIdentityIds', props);
    return resource.getResponseField('UnprocessedIdentityIds') as unknown as shapes.CognitoIdentityUnprocessedIdentityId[];
  }

}

export class CognitoIdentityResponsesDescribeIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityDescribeIdentityInput) {
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
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentity.IdentityId', props);
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
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentity.Logins', props);
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
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentity.CreationDate', props);
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
          IdentityId: this.__input.identityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentity.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

}

export class CognitoIdentityResponsesDescribeIdentityPool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityDescribeIdentityPoolInput) {
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.IdentityPoolId', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.IdentityPoolName', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.AllowUnauthenticatedIdentities', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.AllowClassicFlow', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.SupportedLoginProviders', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.DeveloperProviderName', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.OpenIdConnectProviderARNs', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.CognitoIdentityProviders', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.SamlProviderARNs', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityPool.IdentityPoolTags', props);
    return resource.getResponseField('IdentityPoolTags') as unknown as Record<string, string>;
  }

}

export class CognitoIdentityResponsesFetchCredentialsForIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityGetCredentialsForIdentityInput) {
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
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
          CustomRoleArn: this.__input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialsForIdentity.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

  public get credentials(): CognitoIdentityResponsesFetchCredentialsForIdentityCredentials {
    return new CognitoIdentityResponsesFetchCredentialsForIdentityCredentials(this.__scope, this.__resources, this.__input);
  }

}

export class CognitoIdentityResponsesFetchCredentialsForIdentityCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityGetCredentialsForIdentityInput) {
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
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
          CustomRoleArn: this.__input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialsForIdentity.Credentials.AccessKeyId', props);
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
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
          CustomRoleArn: this.__input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialsForIdentity.Credentials.SecretKey', props);
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
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
          CustomRoleArn: this.__input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialsForIdentity.Credentials.SessionToken', props);
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
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
          CustomRoleArn: this.__input.customRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCredentialsForIdentity.Credentials.Expiration', props);
    return resource.getResponseField('Credentials.Expiration') as unknown as string;
  }

}

export class CognitoIdentityResponsesFetchId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityGetIdInput) {
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
          AccountId: this.__input.accountId,
          IdentityPoolId: this.__input.identityPoolId,
          Logins: this.__input.logins,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetId.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

}

export class CognitoIdentityResponsesFetchIdentityPoolRoles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityGetIdentityPoolRolesInput) {
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolRoles.IdentityPoolId', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolRoles.Roles', props);
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
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetIdentityPoolRoles.RoleMappings', props);
    return resource.getResponseField('RoleMappings') as unknown as Record<string, shapes.CognitoIdentityRoleMapping>;
  }

}

export class CognitoIdentityResponsesFetchOpenIdToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityGetOpenIdTokenInput) {
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
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIdToken.IdentityId', props);
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
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIdToken.Token', props);
    return resource.getResponseField('Token') as unknown as string;
  }

}

export class CognitoIdentityResponsesFetchOpenIdTokenForDeveloperIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityGetOpenIdTokenForDeveloperIdentityInput) {
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
          PrincipalTags: this.__input.principalTags,
          TokenDuration: this.__input.tokenDuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIdTokenForDeveloperIdentity.IdentityId', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          Logins: this.__input.logins,
          PrincipalTags: this.__input.principalTags,
          TokenDuration: this.__input.tokenDuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpenIdTokenForDeveloperIdentity.Token', props);
    return resource.getResponseField('Token') as unknown as string;
  }

}

export class CognitoIdentityResponsesFetchPrincipalTagAttributeMap {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityGetPrincipalTagAttributeMapInput) {
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetPrincipalTagAttributeMap.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPrincipalTagAttributeMap.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get identityProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetPrincipalTagAttributeMap.IdentityProviderName'),
        outputPath: 'IdentityProviderName',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPrincipalTagAttributeMap.IdentityProviderName', props);
    return resource.getResponseField('IdentityProviderName') as unknown as string;
  }

  public get useDefaults(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetPrincipalTagAttributeMap.UseDefaults'),
        outputPath: 'UseDefaults',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPrincipalTagAttributeMap.UseDefaults', props);
    return resource.getResponseField('UseDefaults') as unknown as boolean;
  }

  public get principalTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.GetPrincipalTagAttributeMap.PrincipalTags'),
        outputPath: 'PrincipalTags',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPrincipalTagAttributeMap.PrincipalTags', props);
    return resource.getResponseField('PrincipalTags') as unknown as Record<string, string>;
  }

}

export class CognitoIdentityResponsesListIdentities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityListIdentitiesInput) {
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
          IdentityPoolId: this.__input.identityPoolId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          HideDisabled: this.__input.hideDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentities.IdentityPoolId', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          HideDisabled: this.__input.hideDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentities.Identities', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          HideDisabled: this.__input.hideDisabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoIdentityResponsesListIdentityPools {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityListIdentityPoolsInput) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentityPools.IdentityPools', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIdentityPools.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoIdentityResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityListTagsForResourceInput) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CognitoIdentityResponsesLookupDeveloperIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityLookupDeveloperIdentityInput) {
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DeveloperUserIdentifier: this.__input.developerUserIdentifier,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LookupDeveloperIdentity.IdentityId', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DeveloperUserIdentifier: this.__input.developerUserIdentifier,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LookupDeveloperIdentity.DeveloperUserIdentifierList', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityId: this.__input.identityId,
          DeveloperUserIdentifier: this.__input.developerUserIdentifier,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LookupDeveloperIdentity.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CognitoIdentityResponsesMergeDeveloperIdentities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityMergeDeveloperIdentitiesInput) {
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
          SourceUserIdentifier: this.__input.sourceUserIdentifier,
          DestinationUserIdentifier: this.__input.destinationUserIdentifier,
          DeveloperProviderName: this.__input.developerProviderName,
          IdentityPoolId: this.__input.identityPoolId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MergeDeveloperIdentities.IdentityId', props);
    return resource.getResponseField('IdentityId') as unknown as string;
  }

}

export class CognitoIdentityResponsesPutPrincipalTagAttributeMap {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentitySetPrincipalTagAttributeMapInput) {
  }

  public get identityPoolId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.SetPrincipalTagAttributeMap.IdentityPoolId'),
        outputPath: 'IdentityPoolId',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
          UseDefaults: this.__input.useDefaults,
          PrincipalTags: this.__input.principalTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetPrincipalTagAttributeMap.IdentityPoolId', props);
    return resource.getResponseField('IdentityPoolId') as unknown as string;
  }

  public get identityProviderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.SetPrincipalTagAttributeMap.IdentityProviderName'),
        outputPath: 'IdentityProviderName',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
          UseDefaults: this.__input.useDefaults,
          PrincipalTags: this.__input.principalTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetPrincipalTagAttributeMap.IdentityProviderName', props);
    return resource.getResponseField('IdentityProviderName') as unknown as string;
  }

  public get useDefaults(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.SetPrincipalTagAttributeMap.UseDefaults'),
        outputPath: 'UseDefaults',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
          UseDefaults: this.__input.useDefaults,
          PrincipalTags: this.__input.principalTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetPrincipalTagAttributeMap.UseDefaults', props);
    return resource.getResponseField('UseDefaults') as unknown as boolean;
  }

  public get principalTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setPrincipalTagAttributeMap',
        service: 'CognitoIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('CognitoIdentity.SetPrincipalTagAttributeMap.PrincipalTags'),
        outputPath: 'PrincipalTags',
        parameters: {
          IdentityPoolId: this.__input.identityPoolId,
          IdentityProviderName: this.__input.identityProviderName,
          UseDefaults: this.__input.useDefaults,
          PrincipalTags: this.__input.principalTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetPrincipalTagAttributeMap.PrincipalTags', props);
    return resource.getResponseField('PrincipalTags') as unknown as Record<string, string>;
  }

}

export class CognitoIdentityResponsesUpdateIdentityPool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CognitoIdentityIdentityPool) {
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.IdentityPoolId', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.IdentityPoolName', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.AllowUnauthenticatedIdentities', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.AllowClassicFlow', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.SupportedLoginProviders', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.DeveloperProviderName', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.OpenIdConnectProviderARNs', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.CognitoIdentityProviders', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.SamlProviderARNs', props);
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
          IdentityPoolId: this.__input.identityPoolId,
          IdentityPoolName: this.__input.identityPoolName,
          AllowUnauthenticatedIdentities: this.__input.allowUnauthenticatedIdentities,
          AllowClassicFlow: this.__input.allowClassicFlow,
          SupportedLoginProviders: this.__input.supportedLoginProviders,
          DeveloperProviderName: this.__input.developerProviderName,
          OpenIdConnectProviderARNs: this.__input.openIdConnectProviderArNs,
          CognitoIdentityProviders: this.__input.cognitoIdentityProviders,
          SamlProviderARNs: this.__input.samlProviderArNs,
          IdentityPoolTags: this.__input.identityPoolTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIdentityPool.IdentityPoolTags', props);
    return resource.getResponseField('IdentityPoolTags') as unknown as Record<string, string>;
  }

}

