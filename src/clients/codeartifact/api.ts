import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeArtifactClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateExternalConnection(input: shapes.CodeArtifactAssociateExternalConnectionRequest): CodeArtifactResponsesAssociateExternalConnection {
    return new CodeArtifactResponsesAssociateExternalConnection(this, this.__resources, input);
  }

  public copyPackageVersions(input: shapes.CodeArtifactCopyPackageVersionsRequest): CodeArtifactResponsesCopyPackageVersions {
    return new CodeArtifactResponsesCopyPackageVersions(this, this.__resources, input);
  }

  public createDomain(input: shapes.CodeArtifactCreateDomainRequest): CodeArtifactResponsesCreateDomain {
    return new CodeArtifactResponsesCreateDomain(this, this.__resources, input);
  }

  public createRepository(input: shapes.CodeArtifactCreateRepositoryRequest): CodeArtifactResponsesCreateRepository {
    return new CodeArtifactResponsesCreateRepository(this, this.__resources, input);
  }

  public deleteDomain(input: shapes.CodeArtifactDeleteDomainRequest): CodeArtifactResponsesDeleteDomain {
    return new CodeArtifactResponsesDeleteDomain(this, this.__resources, input);
  }

  public deleteDomainPermissionsPolicy(input: shapes.CodeArtifactDeleteDomainPermissionsPolicyRequest): CodeArtifactResponsesDeleteDomainPermissionsPolicy {
    return new CodeArtifactResponsesDeleteDomainPermissionsPolicy(this, this.__resources, input);
  }

  public deletePackageVersions(input: shapes.CodeArtifactDeletePackageVersionsRequest): CodeArtifactResponsesDeletePackageVersions {
    return new CodeArtifactResponsesDeletePackageVersions(this, this.__resources, input);
  }

  public deleteRepository(input: shapes.CodeArtifactDeleteRepositoryRequest): CodeArtifactResponsesDeleteRepository {
    return new CodeArtifactResponsesDeleteRepository(this, this.__resources, input);
  }

  public deleteRepositoryPermissionsPolicy(input: shapes.CodeArtifactDeleteRepositoryPermissionsPolicyRequest): CodeArtifactResponsesDeleteRepositoryPermissionsPolicy {
    return new CodeArtifactResponsesDeleteRepositoryPermissionsPolicy(this, this.__resources, input);
  }

  public describeDomain(input: shapes.CodeArtifactDescribeDomainRequest): CodeArtifactResponsesDescribeDomain {
    return new CodeArtifactResponsesDescribeDomain(this, this.__resources, input);
  }

  public describePackageVersion(input: shapes.CodeArtifactDescribePackageVersionRequest): CodeArtifactResponsesDescribePackageVersion {
    return new CodeArtifactResponsesDescribePackageVersion(this, this.__resources, input);
  }

  public describeRepository(input: shapes.CodeArtifactDescribeRepositoryRequest): CodeArtifactResponsesDescribeRepository {
    return new CodeArtifactResponsesDescribeRepository(this, this.__resources, input);
  }

  public disassociateExternalConnection(input: shapes.CodeArtifactDisassociateExternalConnectionRequest): CodeArtifactResponsesDisassociateExternalConnection {
    return new CodeArtifactResponsesDisassociateExternalConnection(this, this.__resources, input);
  }

  public disposePackageVersions(input: shapes.CodeArtifactDisposePackageVersionsRequest): CodeArtifactResponsesDisposePackageVersions {
    return new CodeArtifactResponsesDisposePackageVersions(this, this.__resources, input);
  }

  public fetchAuthorizationToken(input: shapes.CodeArtifactGetAuthorizationTokenRequest): CodeArtifactResponsesFetchAuthorizationToken {
    return new CodeArtifactResponsesFetchAuthorizationToken(this, this.__resources, input);
  }

  public fetchDomainPermissionsPolicy(input: shapes.CodeArtifactGetDomainPermissionsPolicyRequest): CodeArtifactResponsesFetchDomainPermissionsPolicy {
    return new CodeArtifactResponsesFetchDomainPermissionsPolicy(this, this.__resources, input);
  }

  public fetchPackageVersionAsset(input: shapes.CodeArtifactGetPackageVersionAssetRequest): CodeArtifactResponsesFetchPackageVersionAsset {
    return new CodeArtifactResponsesFetchPackageVersionAsset(this, this.__resources, input);
  }

  public fetchPackageVersionReadme(input: shapes.CodeArtifactGetPackageVersionReadmeRequest): CodeArtifactResponsesFetchPackageVersionReadme {
    return new CodeArtifactResponsesFetchPackageVersionReadme(this, this.__resources, input);
  }

  public fetchRepositoryEndpoint(input: shapes.CodeArtifactGetRepositoryEndpointRequest): CodeArtifactResponsesFetchRepositoryEndpoint {
    return new CodeArtifactResponsesFetchRepositoryEndpoint(this, this.__resources, input);
  }

  public fetchRepositoryPermissionsPolicy(input: shapes.CodeArtifactGetRepositoryPermissionsPolicyRequest): CodeArtifactResponsesFetchRepositoryPermissionsPolicy {
    return new CodeArtifactResponsesFetchRepositoryPermissionsPolicy(this, this.__resources, input);
  }

  public listDomains(input: shapes.CodeArtifactListDomainsRequest): CodeArtifactResponsesListDomains {
    return new CodeArtifactResponsesListDomains(this, this.__resources, input);
  }

  public listPackageVersionAssets(input: shapes.CodeArtifactListPackageVersionAssetsRequest): CodeArtifactResponsesListPackageVersionAssets {
    return new CodeArtifactResponsesListPackageVersionAssets(this, this.__resources, input);
  }

  public listPackageVersionDependencies(input: shapes.CodeArtifactListPackageVersionDependenciesRequest): CodeArtifactResponsesListPackageVersionDependencies {
    return new CodeArtifactResponsesListPackageVersionDependencies(this, this.__resources, input);
  }

  public listPackageVersions(input: shapes.CodeArtifactListPackageVersionsRequest): CodeArtifactResponsesListPackageVersions {
    return new CodeArtifactResponsesListPackageVersions(this, this.__resources, input);
  }

  public listPackages(input: shapes.CodeArtifactListPackagesRequest): CodeArtifactResponsesListPackages {
    return new CodeArtifactResponsesListPackages(this, this.__resources, input);
  }

  public listRepositories(input: shapes.CodeArtifactListRepositoriesRequest): CodeArtifactResponsesListRepositories {
    return new CodeArtifactResponsesListRepositories(this, this.__resources, input);
  }

  public listRepositoriesInDomain(input: shapes.CodeArtifactListRepositoriesInDomainRequest): CodeArtifactResponsesListRepositoriesInDomain {
    return new CodeArtifactResponsesListRepositoriesInDomain(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeArtifactListTagsForResourceRequest): CodeArtifactResponsesListTagsForResource {
    return new CodeArtifactResponsesListTagsForResource(this, this.__resources, input);
  }

  public putDomainPermissionsPolicy(input: shapes.CodeArtifactPutDomainPermissionsPolicyRequest): CodeArtifactResponsesPutDomainPermissionsPolicy {
    return new CodeArtifactResponsesPutDomainPermissionsPolicy(this, this.__resources, input);
  }

  public putRepositoryPermissionsPolicy(input: shapes.CodeArtifactPutRepositoryPermissionsPolicyRequest): CodeArtifactResponsesPutRepositoryPermissionsPolicy {
    return new CodeArtifactResponsesPutRepositoryPermissionsPolicy(this, this.__resources, input);
  }

  public tagResource(input: shapes.CodeArtifactTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CodeArtifactUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updatePackageVersionsStatus(input: shapes.CodeArtifactUpdatePackageVersionsStatusRequest): CodeArtifactResponsesUpdatePackageVersionsStatus {
    return new CodeArtifactResponsesUpdatePackageVersionsStatus(this, this.__resources, input);
  }

  public updateRepository(input: shapes.CodeArtifactUpdateRepositoryRequest): CodeArtifactResponsesUpdateRepository {
    return new CodeArtifactResponsesUpdateRepository(this, this.__resources, input);
  }

}

export class CodeArtifactResponsesAssociateExternalConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactAssociateExternalConnectionRequest) {
  }

  public get repository(): CodeArtifactResponsesAssociateExternalConnectionRepository {
    return new CodeArtifactResponsesAssociateExternalConnectionRepository(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesAssociateExternalConnectionRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactAssociateExternalConnectionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.name'),
        outputPath: 'repository.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.name', props);
    return resource.getResponseField('repository.name') as unknown as string;
  }

  public get administratorAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.administratorAccount'),
        outputPath: 'repository.administratorAccount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.administratorAccount', props);
    return resource.getResponseField('repository.administratorAccount') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.domainName'),
        outputPath: 'repository.domainName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.domainName', props);
    return resource.getResponseField('repository.domainName') as unknown as string;
  }

  public get domainOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.domainOwner'),
        outputPath: 'repository.domainOwner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.domainOwner', props);
    return resource.getResponseField('repository.domainOwner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.arn'),
        outputPath: 'repository.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.arn', props);
    return resource.getResponseField('repository.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.description'),
        outputPath: 'repository.description',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.description', props);
    return resource.getResponseField('repository.description') as unknown as string;
  }

  public get upstreams(): shapes.CodeArtifactUpstreamRepositoryInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.upstreams'),
        outputPath: 'repository.upstreams',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.upstreams', props);
    return resource.getResponseField('repository.upstreams') as unknown as shapes.CodeArtifactUpstreamRepositoryInfo[];
  }

  public get externalConnections(): shapes.CodeArtifactRepositoryExternalConnectionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.AssociateExternalConnection.repository.externalConnections'),
        outputPath: 'repository.externalConnections',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateExternalConnection.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactResponsesCopyPackageVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactCopyPackageVersionsRequest) {
  }

  public get successfulVersions(): Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CopyPackageVersions.successfulVersions'),
        outputPath: 'successfulVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          sourceRepository: this.__input.sourceRepository,
          destinationRepository: this.__input.destinationRepository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          versionRevisions: this.__input.versionRevisions,
          allowOverwrite: this.__input.allowOverwrite,
          includeFromUpstream: this.__input.includeFromUpstream,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyPackageVersions.successfulVersions', props);
    return resource.getResponseField('successfulVersions') as unknown as Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo>;
  }

  public get failedVersions(): Record<string, shapes.CodeArtifactPackageVersionError> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CopyPackageVersions.failedVersions'),
        outputPath: 'failedVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          sourceRepository: this.__input.sourceRepository,
          destinationRepository: this.__input.destinationRepository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          versionRevisions: this.__input.versionRevisions,
          allowOverwrite: this.__input.allowOverwrite,
          includeFromUpstream: this.__input.includeFromUpstream,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyPackageVersions.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactResponsesCreateDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactCreateDomainRequest) {
  }

  public get domain(): CodeArtifactResponsesCreateDomainDomain {
    return new CodeArtifactResponsesCreateDomainDomain(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesCreateDomainDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactCreateDomainRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.name'),
        outputPath: 'domain.name',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.name', props);
    return resource.getResponseField('domain.name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.owner'),
        outputPath: 'domain.owner',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.owner', props);
    return resource.getResponseField('domain.owner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.arn'),
        outputPath: 'domain.arn',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.arn', props);
    return resource.getResponseField('domain.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.status'),
        outputPath: 'domain.status',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.status', props);
    return resource.getResponseField('domain.status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.createdTime'),
        outputPath: 'domain.createdTime',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.createdTime', props);
    return resource.getResponseField('domain.createdTime') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.encryptionKey'),
        outputPath: 'domain.encryptionKey',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.encryptionKey', props);
    return resource.getResponseField('domain.encryptionKey') as unknown as string;
  }

  public get repositoryCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.repositoryCount'),
        outputPath: 'domain.repositoryCount',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.repositoryCount', props);
    return resource.getResponseField('domain.repositoryCount') as unknown as number;
  }

  public get assetSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.assetSizeBytes'),
        outputPath: 'domain.assetSizeBytes',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.assetSizeBytes', props);
    return resource.getResponseField('domain.assetSizeBytes') as unknown as number;
  }

  public get s3BucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateDomain.domain.s3BucketArn'),
        outputPath: 'domain.s3BucketArn',
        parameters: {
          domain: this.__input.domain,
          encryptionKey: this.__input.encryptionKey,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.domain.s3BucketArn', props);
    return resource.getResponseField('domain.s3BucketArn') as unknown as string;
  }

}

export class CodeArtifactResponsesCreateRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactCreateRepositoryRequest) {
  }

  public get repository(): CodeArtifactResponsesCreateRepositoryRepository {
    return new CodeArtifactResponsesCreateRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesCreateRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactCreateRepositoryRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.name'),
        outputPath: 'repository.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.name', props);
    return resource.getResponseField('repository.name') as unknown as string;
  }

  public get administratorAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.administratorAccount'),
        outputPath: 'repository.administratorAccount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.administratorAccount', props);
    return resource.getResponseField('repository.administratorAccount') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.domainName'),
        outputPath: 'repository.domainName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.domainName', props);
    return resource.getResponseField('repository.domainName') as unknown as string;
  }

  public get domainOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.domainOwner'),
        outputPath: 'repository.domainOwner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.domainOwner', props);
    return resource.getResponseField('repository.domainOwner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.arn'),
        outputPath: 'repository.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.arn', props);
    return resource.getResponseField('repository.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.description'),
        outputPath: 'repository.description',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.description', props);
    return resource.getResponseField('repository.description') as unknown as string;
  }

  public get upstreams(): shapes.CodeArtifactUpstreamRepositoryInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.upstreams'),
        outputPath: 'repository.upstreams',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.upstreams', props);
    return resource.getResponseField('repository.upstreams') as unknown as shapes.CodeArtifactUpstreamRepositoryInfo[];
  }

  public get externalConnections(): shapes.CodeArtifactRepositoryExternalConnectionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.CreateRepository.repository.externalConnections'),
        outputPath: 'repository.externalConnections',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactResponsesDeleteDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteDomainRequest) {
  }

  public get domain(): CodeArtifactResponsesDeleteDomainDomain {
    return new CodeArtifactResponsesDeleteDomainDomain(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDeleteDomainDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteDomainRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.name'),
        outputPath: 'domain.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.name', props);
    return resource.getResponseField('domain.name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.owner'),
        outputPath: 'domain.owner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.owner', props);
    return resource.getResponseField('domain.owner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.arn'),
        outputPath: 'domain.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.arn', props);
    return resource.getResponseField('domain.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.status'),
        outputPath: 'domain.status',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.status', props);
    return resource.getResponseField('domain.status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.createdTime'),
        outputPath: 'domain.createdTime',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.createdTime', props);
    return resource.getResponseField('domain.createdTime') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.encryptionKey'),
        outputPath: 'domain.encryptionKey',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.encryptionKey', props);
    return resource.getResponseField('domain.encryptionKey') as unknown as string;
  }

  public get repositoryCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.repositoryCount'),
        outputPath: 'domain.repositoryCount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.repositoryCount', props);
    return resource.getResponseField('domain.repositoryCount') as unknown as number;
  }

  public get assetSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.assetSizeBytes'),
        outputPath: 'domain.assetSizeBytes',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.assetSizeBytes', props);
    return resource.getResponseField('domain.assetSizeBytes') as unknown as number;
  }

  public get s3BucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomain.domain.s3BucketArn'),
        outputPath: 'domain.s3BucketArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.domain.s3BucketArn', props);
    return resource.getResponseField('domain.s3BucketArn') as unknown as string;
  }

}

export class CodeArtifactResponsesDeleteDomainPermissionsPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteDomainPermissionsPolicyRequest) {
  }

  public get policy(): CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy {
    return new CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDeleteDomainPermissionsPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteDomainPermissionsPolicyRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomainPermissionsPolicy.policy.resourceArn'),
        outputPath: 'policy.resourceArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          policyRevision: this.__input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainPermissionsPolicy.policy.resourceArn', props);
    return resource.getResponseField('policy.resourceArn') as unknown as string;
  }

  public get revision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomainPermissionsPolicy.policy.revision'),
        outputPath: 'policy.revision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          policyRevision: this.__input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainPermissionsPolicy.policy.revision', props);
    return resource.getResponseField('policy.revision') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteDomainPermissionsPolicy.policy.document'),
        outputPath: 'policy.document',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          policyRevision: this.__input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactResponsesDeletePackageVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeletePackageVersionsRequest) {
  }

  public get successfulVersions(): Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeletePackageVersions.successfulVersions'),
        outputPath: 'successfulVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          expectedStatus: this.__input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePackageVersions.successfulVersions', props);
    return resource.getResponseField('successfulVersions') as unknown as Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo>;
  }

  public get failedVersions(): Record<string, shapes.CodeArtifactPackageVersionError> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeletePackageVersions.failedVersions'),
        outputPath: 'failedVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          expectedStatus: this.__input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePackageVersions.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactResponsesDeleteRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteRepositoryRequest) {
  }

  public get repository(): CodeArtifactResponsesDeleteRepositoryRepository {
    return new CodeArtifactResponsesDeleteRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDeleteRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteRepositoryRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.name'),
        outputPath: 'repository.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.name', props);
    return resource.getResponseField('repository.name') as unknown as string;
  }

  public get administratorAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.administratorAccount'),
        outputPath: 'repository.administratorAccount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.administratorAccount', props);
    return resource.getResponseField('repository.administratorAccount') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.domainName'),
        outputPath: 'repository.domainName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.domainName', props);
    return resource.getResponseField('repository.domainName') as unknown as string;
  }

  public get domainOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.domainOwner'),
        outputPath: 'repository.domainOwner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.domainOwner', props);
    return resource.getResponseField('repository.domainOwner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.arn'),
        outputPath: 'repository.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.arn', props);
    return resource.getResponseField('repository.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.description'),
        outputPath: 'repository.description',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.description', props);
    return resource.getResponseField('repository.description') as unknown as string;
  }

  public get upstreams(): shapes.CodeArtifactUpstreamRepositoryInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.upstreams'),
        outputPath: 'repository.upstreams',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.upstreams', props);
    return resource.getResponseField('repository.upstreams') as unknown as shapes.CodeArtifactUpstreamRepositoryInfo[];
  }

  public get externalConnections(): shapes.CodeArtifactRepositoryExternalConnectionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepository.repository.externalConnections'),
        outputPath: 'repository.externalConnections',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactResponsesDeleteRepositoryPermissionsPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteRepositoryPermissionsPolicyRequest) {
  }

  public get policy(): CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy {
    return new CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDeleteRepositoryPermissionsPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDeleteRepositoryPermissionsPolicyRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepositoryPermissionsPolicy.policy.resourceArn'),
        outputPath: 'policy.resourceArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          policyRevision: this.__input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepositoryPermissionsPolicy.policy.resourceArn', props);
    return resource.getResponseField('policy.resourceArn') as unknown as string;
  }

  public get revision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepositoryPermissionsPolicy.policy.revision'),
        outputPath: 'policy.revision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          policyRevision: this.__input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepositoryPermissionsPolicy.policy.revision', props);
    return resource.getResponseField('policy.revision') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DeleteRepositoryPermissionsPolicy.policy.document'),
        outputPath: 'policy.document',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          policyRevision: this.__input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepositoryPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactResponsesDescribeDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDescribeDomainRequest) {
  }

  public get domain(): CodeArtifactResponsesDescribeDomainDomain {
    return new CodeArtifactResponsesDescribeDomainDomain(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDescribeDomainDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDescribeDomainRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.name'),
        outputPath: 'domain.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.name', props);
    return resource.getResponseField('domain.name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.owner'),
        outputPath: 'domain.owner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.owner', props);
    return resource.getResponseField('domain.owner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.arn'),
        outputPath: 'domain.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.arn', props);
    return resource.getResponseField('domain.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.status'),
        outputPath: 'domain.status',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.status', props);
    return resource.getResponseField('domain.status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.createdTime'),
        outputPath: 'domain.createdTime',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.createdTime', props);
    return resource.getResponseField('domain.createdTime') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.encryptionKey'),
        outputPath: 'domain.encryptionKey',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.encryptionKey', props);
    return resource.getResponseField('domain.encryptionKey') as unknown as string;
  }

  public get repositoryCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.repositoryCount'),
        outputPath: 'domain.repositoryCount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.repositoryCount', props);
    return resource.getResponseField('domain.repositoryCount') as unknown as number;
  }

  public get assetSizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.assetSizeBytes'),
        outputPath: 'domain.assetSizeBytes',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.assetSizeBytes', props);
    return resource.getResponseField('domain.assetSizeBytes') as unknown as number;
  }

  public get s3BucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeDomain.domain.s3BucketArn'),
        outputPath: 'domain.s3BucketArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.domain.s3BucketArn', props);
    return resource.getResponseField('domain.s3BucketArn') as unknown as string;
  }

}

export class CodeArtifactResponsesDescribePackageVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDescribePackageVersionRequest) {
  }

  public get packageVersion(): CodeArtifactResponsesDescribePackageVersionPackageVersion {
    return new CodeArtifactResponsesDescribePackageVersionPackageVersion(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDescribePackageVersionPackageVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDescribePackageVersionRequest) {
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.format'),
        outputPath: 'packageVersion.format',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.format', props);
    return resource.getResponseField('packageVersion.format') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.namespace'),
        outputPath: 'packageVersion.namespace',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.namespace', props);
    return resource.getResponseField('packageVersion.namespace') as unknown as string;
  }

  public get packageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.packageName'),
        outputPath: 'packageVersion.packageName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.packageName', props);
    return resource.getResponseField('packageVersion.packageName') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.displayName'),
        outputPath: 'packageVersion.displayName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.displayName', props);
    return resource.getResponseField('packageVersion.displayName') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.version'),
        outputPath: 'packageVersion.version',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.version', props);
    return resource.getResponseField('packageVersion.version') as unknown as string;
  }

  public get summary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.summary'),
        outputPath: 'packageVersion.summary',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.summary', props);
    return resource.getResponseField('packageVersion.summary') as unknown as string;
  }

  public get homePage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.homePage'),
        outputPath: 'packageVersion.homePage',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.homePage', props);
    return resource.getResponseField('packageVersion.homePage') as unknown as string;
  }

  public get sourceCodeRepository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.sourceCodeRepository'),
        outputPath: 'packageVersion.sourceCodeRepository',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.sourceCodeRepository', props);
    return resource.getResponseField('packageVersion.sourceCodeRepository') as unknown as string;
  }

  public get publishedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.publishedTime'),
        outputPath: 'packageVersion.publishedTime',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.publishedTime', props);
    return resource.getResponseField('packageVersion.publishedTime') as unknown as string;
  }

  public get licenses(): shapes.CodeArtifactLicenseInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.licenses'),
        outputPath: 'packageVersion.licenses',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.licenses', props);
    return resource.getResponseField('packageVersion.licenses') as unknown as shapes.CodeArtifactLicenseInfo[];
  }

  public get revision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.revision'),
        outputPath: 'packageVersion.revision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.revision', props);
    return resource.getResponseField('packageVersion.revision') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePackageVersion',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribePackageVersion.packageVersion.status'),
        outputPath: 'packageVersion.status',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePackageVersion.packageVersion.status', props);
    return resource.getResponseField('packageVersion.status') as unknown as string;
  }

}

export class CodeArtifactResponsesDescribeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDescribeRepositoryRequest) {
  }

  public get repository(): CodeArtifactResponsesDescribeRepositoryRepository {
    return new CodeArtifactResponsesDescribeRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDescribeRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDescribeRepositoryRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.name'),
        outputPath: 'repository.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.name', props);
    return resource.getResponseField('repository.name') as unknown as string;
  }

  public get administratorAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.administratorAccount'),
        outputPath: 'repository.administratorAccount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.administratorAccount', props);
    return resource.getResponseField('repository.administratorAccount') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.domainName'),
        outputPath: 'repository.domainName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.domainName', props);
    return resource.getResponseField('repository.domainName') as unknown as string;
  }

  public get domainOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.domainOwner'),
        outputPath: 'repository.domainOwner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.domainOwner', props);
    return resource.getResponseField('repository.domainOwner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.arn'),
        outputPath: 'repository.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.arn', props);
    return resource.getResponseField('repository.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.description'),
        outputPath: 'repository.description',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.description', props);
    return resource.getResponseField('repository.description') as unknown as string;
  }

  public get upstreams(): shapes.CodeArtifactUpstreamRepositoryInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.upstreams'),
        outputPath: 'repository.upstreams',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.upstreams', props);
    return resource.getResponseField('repository.upstreams') as unknown as shapes.CodeArtifactUpstreamRepositoryInfo[];
  }

  public get externalConnections(): shapes.CodeArtifactRepositoryExternalConnectionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DescribeRepository.repository.externalConnections'),
        outputPath: 'repository.externalConnections',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactResponsesDisassociateExternalConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDisassociateExternalConnectionRequest) {
  }

  public get repository(): CodeArtifactResponsesDisassociateExternalConnectionRepository {
    return new CodeArtifactResponsesDisassociateExternalConnectionRepository(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesDisassociateExternalConnectionRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDisassociateExternalConnectionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.name'),
        outputPath: 'repository.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.name', props);
    return resource.getResponseField('repository.name') as unknown as string;
  }

  public get administratorAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.administratorAccount'),
        outputPath: 'repository.administratorAccount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.administratorAccount', props);
    return resource.getResponseField('repository.administratorAccount') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.domainName'),
        outputPath: 'repository.domainName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.domainName', props);
    return resource.getResponseField('repository.domainName') as unknown as string;
  }

  public get domainOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.domainOwner'),
        outputPath: 'repository.domainOwner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.domainOwner', props);
    return resource.getResponseField('repository.domainOwner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.arn'),
        outputPath: 'repository.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.arn', props);
    return resource.getResponseField('repository.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.description'),
        outputPath: 'repository.description',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.description', props);
    return resource.getResponseField('repository.description') as unknown as string;
  }

  public get upstreams(): shapes.CodeArtifactUpstreamRepositoryInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.upstreams'),
        outputPath: 'repository.upstreams',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.upstreams', props);
    return resource.getResponseField('repository.upstreams') as unknown as shapes.CodeArtifactUpstreamRepositoryInfo[];
  }

  public get externalConnections(): shapes.CodeArtifactRepositoryExternalConnectionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateExternalConnection',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisassociateExternalConnection.repository.externalConnections'),
        outputPath: 'repository.externalConnections',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          externalConnection: this.__input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateExternalConnection.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactResponsesDisposePackageVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactDisposePackageVersionsRequest) {
  }

  public get successfulVersions(): Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disposePackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisposePackageVersions.successfulVersions'),
        outputPath: 'successfulVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          versionRevisions: this.__input.versionRevisions,
          expectedStatus: this.__input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisposePackageVersions.successfulVersions', props);
    return resource.getResponseField('successfulVersions') as unknown as Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo>;
  }

  public get failedVersions(): Record<string, shapes.CodeArtifactPackageVersionError> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disposePackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.DisposePackageVersions.failedVersions'),
        outputPath: 'failedVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          versionRevisions: this.__input.versionRevisions,
          expectedStatus: this.__input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisposePackageVersions.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactResponsesFetchAuthorizationToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetAuthorizationTokenRequest) {
  }

  public get authorizationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizationToken',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetAuthorizationToken.authorizationToken'),
        outputPath: 'authorizationToken',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          durationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizationToken.authorizationToken', props);
    return resource.getResponseField('authorizationToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizationToken',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetAuthorizationToken.expiration'),
        outputPath: 'expiration',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          durationSeconds: this.__input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizationToken.expiration', props);
    return resource.getResponseField('expiration') as unknown as string;
  }

}

export class CodeArtifactResponsesFetchDomainPermissionsPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetDomainPermissionsPolicyRequest) {
  }

  public get policy(): CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy {
    return new CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesFetchDomainPermissionsPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetDomainPermissionsPolicyRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetDomainPermissionsPolicy.policy.resourceArn'),
        outputPath: 'policy.resourceArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainPermissionsPolicy.policy.resourceArn', props);
    return resource.getResponseField('policy.resourceArn') as unknown as string;
  }

  public get revision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetDomainPermissionsPolicy.policy.revision'),
        outputPath: 'policy.revision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainPermissionsPolicy.policy.revision', props);
    return resource.getResponseField('policy.revision') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetDomainPermissionsPolicy.policy.document'),
        outputPath: 'policy.document',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomainPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactResponsesFetchPackageVersionAsset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetPackageVersionAssetRequest) {
  }

  public get asset(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionAsset',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionAsset.asset'),
        outputPath: 'asset',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          asset: this.__input.asset,
          packageVersionRevision: this.__input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionAsset.asset', props);
    return resource.getResponseField('asset') as unknown as any;
  }

  public get assetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionAsset',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionAsset.assetName'),
        outputPath: 'assetName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          asset: this.__input.asset,
          packageVersionRevision: this.__input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionAsset.assetName', props);
    return resource.getResponseField('assetName') as unknown as string;
  }

  public get packageVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionAsset',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionAsset.packageVersion'),
        outputPath: 'packageVersion',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          asset: this.__input.asset,
          packageVersionRevision: this.__input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionAsset.packageVersion', props);
    return resource.getResponseField('packageVersion') as unknown as string;
  }

  public get packageVersionRevision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionAsset',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionAsset.packageVersionRevision'),
        outputPath: 'packageVersionRevision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          asset: this.__input.asset,
          packageVersionRevision: this.__input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionAsset.packageVersionRevision', props);
    return resource.getResponseField('packageVersionRevision') as unknown as string;
  }

}

export class CodeArtifactResponsesFetchPackageVersionReadme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetPackageVersionReadmeRequest) {
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionReadme',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionReadme.format'),
        outputPath: 'format',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionReadme.format', props);
    return resource.getResponseField('format') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionReadme',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionReadme.namespace'),
        outputPath: 'namespace',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionReadme.namespace', props);
    return resource.getResponseField('namespace') as unknown as string;
  }

  public get package(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionReadme',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionReadme.package'),
        outputPath: 'package',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionReadme.package', props);
    return resource.getResponseField('package') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionReadme',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionReadme.version'),
        outputPath: 'version',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionReadme.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get versionRevision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionReadme',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionReadme.versionRevision'),
        outputPath: 'versionRevision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionReadme.versionRevision', props);
    return resource.getResponseField('versionRevision') as unknown as string;
  }

  public get readme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPackageVersionReadme',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetPackageVersionReadme.readme'),
        outputPath: 'readme',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPackageVersionReadme.readme', props);
    return resource.getResponseField('readme') as unknown as string;
  }

}

export class CodeArtifactResponsesFetchRepositoryEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetRepositoryEndpointRequest) {
  }

  public get repositoryEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryEndpoint',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetRepositoryEndpoint.repositoryEndpoint'),
        outputPath: 'repositoryEndpoint',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryEndpoint.repositoryEndpoint', props);
    return resource.getResponseField('repositoryEndpoint') as unknown as string;
  }

}

export class CodeArtifactResponsesFetchRepositoryPermissionsPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetRepositoryPermissionsPolicyRequest) {
  }

  public get policy(): CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy {
    return new CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesFetchRepositoryPermissionsPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactGetRepositoryPermissionsPolicyRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetRepositoryPermissionsPolicy.policy.resourceArn'),
        outputPath: 'policy.resourceArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryPermissionsPolicy.policy.resourceArn', props);
    return resource.getResponseField('policy.resourceArn') as unknown as string;
  }

  public get revision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetRepositoryPermissionsPolicy.policy.revision'),
        outputPath: 'policy.revision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryPermissionsPolicy.policy.revision', props);
    return resource.getResponseField('policy.revision') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.GetRepositoryPermissionsPolicy.policy.document'),
        outputPath: 'policy.document',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactResponsesListDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListDomainsRequest) {
  }

  public get domains(): shapes.CodeArtifactDomainSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListDomains.domains'),
        outputPath: 'domains',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.domains', props);
    return resource.getResponseField('domains') as unknown as shapes.CodeArtifactDomainSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListDomains.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactResponsesListPackageVersionAssets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListPackageVersionAssetsRequest) {
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionAssets',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionAssets.format'),
        outputPath: 'format',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionAssets.format', props);
    return resource.getResponseField('format') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionAssets',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionAssets.namespace'),
        outputPath: 'namespace',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionAssets.namespace', props);
    return resource.getResponseField('namespace') as unknown as string;
  }

  public get package(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionAssets',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionAssets.package'),
        outputPath: 'package',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionAssets.package', props);
    return resource.getResponseField('package') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionAssets',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionAssets.version'),
        outputPath: 'version',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionAssets.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get versionRevision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionAssets',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionAssets.versionRevision'),
        outputPath: 'versionRevision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionAssets.versionRevision', props);
    return resource.getResponseField('versionRevision') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionAssets',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionAssets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionAssets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get assets(): shapes.CodeArtifactAssetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionAssets',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionAssets.assets'),
        outputPath: 'assets',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionAssets.assets', props);
    return resource.getResponseField('assets') as unknown as shapes.CodeArtifactAssetSummary[];
  }

}

export class CodeArtifactResponsesListPackageVersionDependencies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListPackageVersionDependenciesRequest) {
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionDependencies',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionDependencies.format'),
        outputPath: 'format',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionDependencies.format', props);
    return resource.getResponseField('format') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionDependencies',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionDependencies.namespace'),
        outputPath: 'namespace',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionDependencies.namespace', props);
    return resource.getResponseField('namespace') as unknown as string;
  }

  public get package(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionDependencies',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionDependencies.package'),
        outputPath: 'package',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionDependencies.package', props);
    return resource.getResponseField('package') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionDependencies',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionDependencies.version'),
        outputPath: 'version',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionDependencies.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get versionRevision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionDependencies',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionDependencies.versionRevision'),
        outputPath: 'versionRevision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionDependencies.versionRevision', props);
    return resource.getResponseField('versionRevision') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionDependencies',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionDependencies.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionDependencies.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get dependencies(): shapes.CodeArtifactPackageDependency[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersionDependencies',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersionDependencies.dependencies'),
        outputPath: 'dependencies',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          packageVersion: this.__input.packageVersion,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersionDependencies.dependencies', props);
    return resource.getResponseField('dependencies') as unknown as shapes.CodeArtifactPackageDependency[];
  }

}

export class CodeArtifactResponsesListPackageVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListPackageVersionsRequest) {
  }

  public get defaultDisplayVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersions.defaultDisplayVersion'),
        outputPath: 'defaultDisplayVersion',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          status: this.__input.status,
          sortBy: this.__input.sortBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersions.defaultDisplayVersion', props);
    return resource.getResponseField('defaultDisplayVersion') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersions.format'),
        outputPath: 'format',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          status: this.__input.status,
          sortBy: this.__input.sortBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersions.format', props);
    return resource.getResponseField('format') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersions.namespace'),
        outputPath: 'namespace',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          status: this.__input.status,
          sortBy: this.__input.sortBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersions.namespace', props);
    return resource.getResponseField('namespace') as unknown as string;
  }

  public get package(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersions.package'),
        outputPath: 'package',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          status: this.__input.status,
          sortBy: this.__input.sortBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersions.package', props);
    return resource.getResponseField('package') as unknown as string;
  }

  public get versions(): shapes.CodeArtifactPackageVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersions.versions'),
        outputPath: 'versions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          status: this.__input.status,
          sortBy: this.__input.sortBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersions.versions', props);
    return resource.getResponseField('versions') as unknown as shapes.CodeArtifactPackageVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackageVersions',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackageVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          status: this.__input.status,
          sortBy: this.__input.sortBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackageVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactResponsesListPackages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListPackagesRequest) {
  }

  public get packages(): shapes.CodeArtifactPackageSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackages',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackages.packages'),
        outputPath: 'packages',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          packagePrefix: this.__input.packagePrefix,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackages.packages', props);
    return resource.getResponseField('packages') as unknown as shapes.CodeArtifactPackageSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPackages',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListPackages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          packagePrefix: this.__input.packagePrefix,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPackages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactResponsesListRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListRepositoriesRequest) {
  }

  public get repositories(): shapes.CodeArtifactRepositorySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositories',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListRepositories.repositories'),
        outputPath: 'repositories',
        parameters: {
          repositoryPrefix: this.__input.repositoryPrefix,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositories.repositories', props);
    return resource.getResponseField('repositories') as unknown as shapes.CodeArtifactRepositorySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositories',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListRepositories.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          repositoryPrefix: this.__input.repositoryPrefix,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositories.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactResponsesListRepositoriesInDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListRepositoriesInDomainRequest) {
  }

  public get repositories(): shapes.CodeArtifactRepositorySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositoriesInDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListRepositoriesInDomain.repositories'),
        outputPath: 'repositories',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          administratorAccount: this.__input.administratorAccount,
          repositoryPrefix: this.__input.repositoryPrefix,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositoriesInDomain.repositories', props);
    return resource.getResponseField('repositories') as unknown as shapes.CodeArtifactRepositorySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositoriesInDomain',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListRepositoriesInDomain.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          administratorAccount: this.__input.administratorAccount,
          repositoryPrefix: this.__input.repositoryPrefix,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositoriesInDomain.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactListTagsForResourceRequest) {
  }

  public get tags(): shapes.CodeArtifactTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.CodeArtifactTag[];
  }

}

export class CodeArtifactResponsesPutDomainPermissionsPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactPutDomainPermissionsPolicyRequest) {
  }

  public get policy(): CodeArtifactResponsesPutDomainPermissionsPolicyPolicy {
    return new CodeArtifactResponsesPutDomainPermissionsPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesPutDomainPermissionsPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactPutDomainPermissionsPolicyRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.PutDomainPermissionsPolicy.policy.resourceArn'),
        outputPath: 'policy.resourceArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          policyRevision: this.__input.policyRevision,
          policyDocument: this.__input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDomainPermissionsPolicy.policy.resourceArn', props);
    return resource.getResponseField('policy.resourceArn') as unknown as string;
  }

  public get revision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.PutDomainPermissionsPolicy.policy.revision'),
        outputPath: 'policy.revision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          policyRevision: this.__input.policyRevision,
          policyDocument: this.__input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDomainPermissionsPolicy.policy.revision', props);
    return resource.getResponseField('policy.revision') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDomainPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.PutDomainPermissionsPolicy.policy.document'),
        outputPath: 'policy.document',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          policyRevision: this.__input.policyRevision,
          policyDocument: this.__input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutDomainPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactResponsesPutRepositoryPermissionsPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactPutRepositoryPermissionsPolicyRequest) {
  }

  public get policy(): CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy {
    return new CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesPutRepositoryPermissionsPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactPutRepositoryPermissionsPolicyRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.PutRepositoryPermissionsPolicy.policy.resourceArn'),
        outputPath: 'policy.resourceArn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          policyRevision: this.__input.policyRevision,
          policyDocument: this.__input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryPermissionsPolicy.policy.resourceArn', props);
    return resource.getResponseField('policy.resourceArn') as unknown as string;
  }

  public get revision(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.PutRepositoryPermissionsPolicy.policy.revision'),
        outputPath: 'policy.revision',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          policyRevision: this.__input.policyRevision,
          policyDocument: this.__input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryPermissionsPolicy.policy.revision', props);
    return resource.getResponseField('policy.revision') as unknown as string;
  }

  public get document(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryPermissionsPolicy',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.PutRepositoryPermissionsPolicy.policy.document'),
        outputPath: 'policy.document',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          policyRevision: this.__input.policyRevision,
          policyDocument: this.__input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactResponsesUpdatePackageVersionsStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactUpdatePackageVersionsStatusRequest) {
  }

  public get successfulVersions(): Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackageVersionsStatus',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdatePackageVersionsStatus.successfulVersions'),
        outputPath: 'successfulVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          versionRevisions: this.__input.versionRevisions,
          expectedStatus: this.__input.expectedStatus,
          targetStatus: this.__input.targetStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackageVersionsStatus.successfulVersions', props);
    return resource.getResponseField('successfulVersions') as unknown as Record<string, shapes.CodeArtifactSuccessfulPackageVersionInfo>;
  }

  public get failedVersions(): Record<string, shapes.CodeArtifactPackageVersionError> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePackageVersionsStatus',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdatePackageVersionsStatus.failedVersions'),
        outputPath: 'failedVersions',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          format: this.__input.format,
          namespace: this.__input.namespace,
          package: this.__input.package,
          versions: this.__input.versions,
          versionRevisions: this.__input.versionRevisions,
          expectedStatus: this.__input.expectedStatus,
          targetStatus: this.__input.targetStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePackageVersionsStatus.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactResponsesUpdateRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactUpdateRepositoryRequest) {
  }

  public get repository(): CodeArtifactResponsesUpdateRepositoryRepository {
    return new CodeArtifactResponsesUpdateRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

}

export class CodeArtifactResponsesUpdateRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeArtifactUpdateRepositoryRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.name'),
        outputPath: 'repository.name',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.name', props);
    return resource.getResponseField('repository.name') as unknown as string;
  }

  public get administratorAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.administratorAccount'),
        outputPath: 'repository.administratorAccount',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.administratorAccount', props);
    return resource.getResponseField('repository.administratorAccount') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.domainName'),
        outputPath: 'repository.domainName',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.domainName', props);
    return resource.getResponseField('repository.domainName') as unknown as string;
  }

  public get domainOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.domainOwner'),
        outputPath: 'repository.domainOwner',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.domainOwner', props);
    return resource.getResponseField('repository.domainOwner') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.arn'),
        outputPath: 'repository.arn',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.arn', props);
    return resource.getResponseField('repository.arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.description'),
        outputPath: 'repository.description',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.description', props);
    return resource.getResponseField('repository.description') as unknown as string;
  }

  public get upstreams(): shapes.CodeArtifactUpstreamRepositoryInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.upstreams'),
        outputPath: 'repository.upstreams',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.upstreams', props);
    return resource.getResponseField('repository.upstreams') as unknown as shapes.CodeArtifactUpstreamRepositoryInfo[];
  }

  public get externalConnections(): shapes.CodeArtifactRepositoryExternalConnectionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRepository',
        service: 'CodeArtifact',
        physicalResourceId: cr.PhysicalResourceId.of('CodeArtifact.UpdateRepository.repository.externalConnections'),
        outputPath: 'repository.externalConnections',
        parameters: {
          domain: this.__input.domain,
          domainOwner: this.__input.domainOwner,
          repository: this.__input.repository,
          description: this.__input.description,
          upstreams: this.__input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

