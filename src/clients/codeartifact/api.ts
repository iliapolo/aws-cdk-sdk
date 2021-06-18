import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeArtifactClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateExternalConnection(input: shapes.CodeArtifactAssociateExternalConnectionRequest): CodeArtifactAssociateExternalConnection {
    return new CodeArtifactAssociateExternalConnection(this, 'AssociateExternalConnection', this.__resources, input);
  }

  public copyPackageVersions(input: shapes.CodeArtifactCopyPackageVersionsRequest): CodeArtifactCopyPackageVersions {
    return new CodeArtifactCopyPackageVersions(this, 'CopyPackageVersions', this.__resources, input);
  }

  public createDomain(input: shapes.CodeArtifactCreateDomainRequest): CodeArtifactCreateDomain {
    return new CodeArtifactCreateDomain(this, 'CreateDomain', this.__resources, input);
  }

  public createRepository(input: shapes.CodeArtifactCreateRepositoryRequest): CodeArtifactCreateRepository {
    return new CodeArtifactCreateRepository(this, 'CreateRepository', this.__resources, input);
  }

  public deleteDomain(input: shapes.CodeArtifactDeleteDomainRequest): CodeArtifactDeleteDomain {
    return new CodeArtifactDeleteDomain(this, 'DeleteDomain', this.__resources, input);
  }

  public deleteDomainPermissionsPolicy(input: shapes.CodeArtifactDeleteDomainPermissionsPolicyRequest): CodeArtifactDeleteDomainPermissionsPolicy {
    return new CodeArtifactDeleteDomainPermissionsPolicy(this, 'DeleteDomainPermissionsPolicy', this.__resources, input);
  }

  public deletePackageVersions(input: shapes.CodeArtifactDeletePackageVersionsRequest): CodeArtifactDeletePackageVersions {
    return new CodeArtifactDeletePackageVersions(this, 'DeletePackageVersions', this.__resources, input);
  }

  public deleteRepository(input: shapes.CodeArtifactDeleteRepositoryRequest): CodeArtifactDeleteRepository {
    return new CodeArtifactDeleteRepository(this, 'DeleteRepository', this.__resources, input);
  }

  public deleteRepositoryPermissionsPolicy(input: shapes.CodeArtifactDeleteRepositoryPermissionsPolicyRequest): CodeArtifactDeleteRepositoryPermissionsPolicy {
    return new CodeArtifactDeleteRepositoryPermissionsPolicy(this, 'DeleteRepositoryPermissionsPolicy', this.__resources, input);
  }

  public describeDomain(input: shapes.CodeArtifactDescribeDomainRequest): CodeArtifactDescribeDomain {
    return new CodeArtifactDescribeDomain(this, 'DescribeDomain', this.__resources, input);
  }

  public describePackageVersion(input: shapes.CodeArtifactDescribePackageVersionRequest): CodeArtifactDescribePackageVersion {
    return new CodeArtifactDescribePackageVersion(this, 'DescribePackageVersion', this.__resources, input);
  }

  public describeRepository(input: shapes.CodeArtifactDescribeRepositoryRequest): CodeArtifactDescribeRepository {
    return new CodeArtifactDescribeRepository(this, 'DescribeRepository', this.__resources, input);
  }

  public disassociateExternalConnection(input: shapes.CodeArtifactDisassociateExternalConnectionRequest): CodeArtifactDisassociateExternalConnection {
    return new CodeArtifactDisassociateExternalConnection(this, 'DisassociateExternalConnection', this.__resources, input);
  }

  public disposePackageVersions(input: shapes.CodeArtifactDisposePackageVersionsRequest): CodeArtifactDisposePackageVersions {
    return new CodeArtifactDisposePackageVersions(this, 'DisposePackageVersions', this.__resources, input);
  }

  public fetchAuthorizationToken(input: shapes.CodeArtifactGetAuthorizationTokenRequest): CodeArtifactFetchAuthorizationToken {
    return new CodeArtifactFetchAuthorizationToken(this, 'FetchAuthorizationToken', this.__resources, input);
  }

  public fetchDomainPermissionsPolicy(input: shapes.CodeArtifactGetDomainPermissionsPolicyRequest): CodeArtifactFetchDomainPermissionsPolicy {
    return new CodeArtifactFetchDomainPermissionsPolicy(this, 'FetchDomainPermissionsPolicy', this.__resources, input);
  }

  public fetchPackageVersionAsset(input: shapes.CodeArtifactGetPackageVersionAssetRequest): CodeArtifactFetchPackageVersionAsset {
    return new CodeArtifactFetchPackageVersionAsset(this, 'FetchPackageVersionAsset', this.__resources, input);
  }

  public fetchPackageVersionReadme(input: shapes.CodeArtifactGetPackageVersionReadmeRequest): CodeArtifactFetchPackageVersionReadme {
    return new CodeArtifactFetchPackageVersionReadme(this, 'FetchPackageVersionReadme', this.__resources, input);
  }

  public fetchRepositoryEndpoint(input: shapes.CodeArtifactGetRepositoryEndpointRequest): CodeArtifactFetchRepositoryEndpoint {
    return new CodeArtifactFetchRepositoryEndpoint(this, 'FetchRepositoryEndpoint', this.__resources, input);
  }

  public fetchRepositoryPermissionsPolicy(input: shapes.CodeArtifactGetRepositoryPermissionsPolicyRequest): CodeArtifactFetchRepositoryPermissionsPolicy {
    return new CodeArtifactFetchRepositoryPermissionsPolicy(this, 'FetchRepositoryPermissionsPolicy', this.__resources, input);
  }

  public listDomains(input: shapes.CodeArtifactListDomainsRequest): CodeArtifactListDomains {
    return new CodeArtifactListDomains(this, 'ListDomains', this.__resources, input);
  }

  public listPackageVersionAssets(input: shapes.CodeArtifactListPackageVersionAssetsRequest): CodeArtifactListPackageVersionAssets {
    return new CodeArtifactListPackageVersionAssets(this, 'ListPackageVersionAssets', this.__resources, input);
  }

  public listPackageVersionDependencies(input: shapes.CodeArtifactListPackageVersionDependenciesRequest): CodeArtifactListPackageVersionDependencies {
    return new CodeArtifactListPackageVersionDependencies(this, 'ListPackageVersionDependencies', this.__resources, input);
  }

  public listPackageVersions(input: shapes.CodeArtifactListPackageVersionsRequest): CodeArtifactListPackageVersions {
    return new CodeArtifactListPackageVersions(this, 'ListPackageVersions', this.__resources, input);
  }

  public listPackages(input: shapes.CodeArtifactListPackagesRequest): CodeArtifactListPackages {
    return new CodeArtifactListPackages(this, 'ListPackages', this.__resources, input);
  }

  public listRepositories(input: shapes.CodeArtifactListRepositoriesRequest): CodeArtifactListRepositories {
    return new CodeArtifactListRepositories(this, 'ListRepositories', this.__resources, input);
  }

  public listRepositoriesInDomain(input: shapes.CodeArtifactListRepositoriesInDomainRequest): CodeArtifactListRepositoriesInDomain {
    return new CodeArtifactListRepositoriesInDomain(this, 'ListRepositoriesInDomain', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeArtifactListTagsForResourceRequest): CodeArtifactListTagsForResource {
    return new CodeArtifactListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putDomainPermissionsPolicy(input: shapes.CodeArtifactPutDomainPermissionsPolicyRequest): CodeArtifactPutDomainPermissionsPolicy {
    return new CodeArtifactPutDomainPermissionsPolicy(this, 'PutDomainPermissionsPolicy', this.__resources, input);
  }

  public putRepositoryPermissionsPolicy(input: shapes.CodeArtifactPutRepositoryPermissionsPolicyRequest): CodeArtifactPutRepositoryPermissionsPolicy {
    return new CodeArtifactPutRepositoryPermissionsPolicy(this, 'PutRepositoryPermissionsPolicy', this.__resources, input);
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

  public updatePackageVersionsStatus(input: shapes.CodeArtifactUpdatePackageVersionsStatusRequest): CodeArtifactUpdatePackageVersionsStatus {
    return new CodeArtifactUpdatePackageVersionsStatus(this, 'UpdatePackageVersionsStatus', this.__resources, input);
  }

  public updateRepository(input: shapes.CodeArtifactUpdateRepositoryRequest): CodeArtifactUpdateRepository {
    return new CodeArtifactUpdateRepository(this, 'UpdateRepository', this.__resources, input);
  }

}

export class CodeArtifactAssociateExternalConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactAssociateExternalConnectionRequest) {
    super(scope, id);
  }

  public get repository(): CodeArtifactAssociateExternalConnectionRepository {
    return new CodeArtifactAssociateExternalConnectionRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class CodeArtifactAssociateExternalConnectionRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactAssociateExternalConnectionRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.administratorAccount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.domainName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.domainOwner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.description', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.upstreams', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateExternalConnection.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactCopyPackageVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactCopyPackageVersionsRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          sourceRepository: this.input.sourceRepository,
          destinationRepository: this.input.destinationRepository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          versionRevisions: this.input.versionRevisions,
          allowOverwrite: this.input.allowOverwrite,
          includeFromUpstream: this.input.includeFromUpstream,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyPackageVersions.successfulVersions', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          sourceRepository: this.input.sourceRepository,
          destinationRepository: this.input.destinationRepository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          versionRevisions: this.input.versionRevisions,
          allowOverwrite: this.input.allowOverwrite,
          includeFromUpstream: this.input.includeFromUpstream,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyPackageVersions.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactCreateDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactCreateDomainRequest) {
    super(scope, id);
  }

  public get domain(): CodeArtifactCreateDomainDomain {
    return new CodeArtifactCreateDomainDomain(this, 'Domain', this.__resources, this.input);
  }

}

export class CodeArtifactCreateDomainDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactCreateDomainRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.name', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.owner', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.arn', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.status', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.createdTime', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.encryptionKey', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.repositoryCount', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.assetSizeBytes', props);
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
          domain: this.input.domain,
          encryptionKey: this.input.encryptionKey,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.domain.s3BucketArn', props);
    return resource.getResponseField('domain.s3BucketArn') as unknown as string;
  }

}

export class CodeArtifactCreateRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactCreateRepositoryRequest) {
    super(scope, id);
  }

  public get repository(): CodeArtifactCreateRepositoryRepository {
    return new CodeArtifactCreateRepositoryRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class CodeArtifactCreateRepositoryRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactCreateRepositoryRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.administratorAccount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.domainName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.domainOwner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.description', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.upstreams', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactDeleteDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteDomainRequest) {
    super(scope, id);
  }

  public get domain(): CodeArtifactDeleteDomainDomain {
    return new CodeArtifactDeleteDomainDomain(this, 'Domain', this.__resources, this.input);
  }

}

export class CodeArtifactDeleteDomainDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteDomainRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.owner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.status', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.createdTime', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.encryptionKey', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.repositoryCount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.assetSizeBytes', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.domain.s3BucketArn', props);
    return resource.getResponseField('domain.s3BucketArn') as unknown as string;
  }

}

export class CodeArtifactDeleteDomainPermissionsPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteDomainPermissionsPolicyRequest) {
    super(scope, id);
  }

  public get policy(): CodeArtifactDeleteDomainPermissionsPolicyPolicy {
    return new CodeArtifactDeleteDomainPermissionsPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class CodeArtifactDeleteDomainPermissionsPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteDomainPermissionsPolicyRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          policyRevision: this.input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainPermissionsPolicy.policy.resourceArn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          policyRevision: this.input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainPermissionsPolicy.policy.revision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          policyRevision: this.input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactDeletePackageVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeletePackageVersionsRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          expectedStatus: this.input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePackageVersions.successfulVersions', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          expectedStatus: this.input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePackageVersions.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactDeleteRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteRepositoryRequest) {
    super(scope, id);
  }

  public get repository(): CodeArtifactDeleteRepositoryRepository {
    return new CodeArtifactDeleteRepositoryRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class CodeArtifactDeleteRepositoryRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteRepositoryRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.administratorAccount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.domainName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.domainOwner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.description', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.upstreams', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactDeleteRepositoryPermissionsPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteRepositoryPermissionsPolicyRequest) {
    super(scope, id);
  }

  public get policy(): CodeArtifactDeleteRepositoryPermissionsPolicyPolicy {
    return new CodeArtifactDeleteRepositoryPermissionsPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class CodeArtifactDeleteRepositoryPermissionsPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDeleteRepositoryPermissionsPolicyRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          policyRevision: this.input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepositoryPermissionsPolicy.policy.resourceArn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          policyRevision: this.input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepositoryPermissionsPolicy.policy.revision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          policyRevision: this.input.policyRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepositoryPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactDescribeDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDescribeDomainRequest) {
    super(scope, id);
  }

  public get domain(): CodeArtifactDescribeDomainDomain {
    return new CodeArtifactDescribeDomainDomain(this, 'Domain', this.__resources, this.input);
  }

}

export class CodeArtifactDescribeDomainDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDescribeDomainRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.owner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.status', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.createdTime', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.encryptionKey', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.repositoryCount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.assetSizeBytes', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.domain.s3BucketArn', props);
    return resource.getResponseField('domain.s3BucketArn') as unknown as string;
  }

}

export class CodeArtifactDescribePackageVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDescribePackageVersionRequest) {
    super(scope, id);
  }

  public get packageVersion(): CodeArtifactDescribePackageVersionPackageVersion {
    return new CodeArtifactDescribePackageVersionPackageVersion(this, 'PackageVersion', this.__resources, this.input);
  }

}

export class CodeArtifactDescribePackageVersionPackageVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDescribePackageVersionRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.format', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.namespace', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.packageName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.displayName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.version', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.summary', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.homePage', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.sourceCodeRepository', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.publishedTime', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.licenses', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.revision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePackageVersion.packageVersion.status', props);
    return resource.getResponseField('packageVersion.status') as unknown as string;
  }

}

export class CodeArtifactDescribeRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDescribeRepositoryRequest) {
    super(scope, id);
  }

  public get repository(): CodeArtifactDescribeRepositoryRepository {
    return new CodeArtifactDescribeRepositoryRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class CodeArtifactDescribeRepositoryRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDescribeRepositoryRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.administratorAccount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.domainName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.domainOwner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.description', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.upstreams', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactDisassociateExternalConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDisassociateExternalConnectionRequest) {
    super(scope, id);
  }

  public get repository(): CodeArtifactDisassociateExternalConnectionRepository {
    return new CodeArtifactDisassociateExternalConnectionRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class CodeArtifactDisassociateExternalConnectionRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDisassociateExternalConnectionRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.administratorAccount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.domainName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.domainOwner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.description', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.upstreams', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          externalConnection: this.input.externalConnection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateExternalConnection.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

export class CodeArtifactDisposePackageVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactDisposePackageVersionsRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          versionRevisions: this.input.versionRevisions,
          expectedStatus: this.input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisposePackageVersions.successfulVersions', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          versionRevisions: this.input.versionRevisions,
          expectedStatus: this.input.expectedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisposePackageVersions.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactFetchAuthorizationToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetAuthorizationTokenRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          durationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizationToken.authorizationToken', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          durationSeconds: this.input.durationSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizationToken.expiration', props);
    return resource.getResponseField('expiration') as unknown as string;
  }

}

export class CodeArtifactFetchDomainPermissionsPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetDomainPermissionsPolicyRequest) {
    super(scope, id);
  }

  public get policy(): CodeArtifactFetchDomainPermissionsPolicyPolicy {
    return new CodeArtifactFetchDomainPermissionsPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class CodeArtifactFetchDomainPermissionsPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetDomainPermissionsPolicyRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainPermissionsPolicy.policy.resourceArn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainPermissionsPolicy.policy.revision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomainPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactFetchPackageVersionAsset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetPackageVersionAssetRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          asset: this.input.asset,
          packageVersionRevision: this.input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionAsset.asset', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          asset: this.input.asset,
          packageVersionRevision: this.input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionAsset.assetName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          asset: this.input.asset,
          packageVersionRevision: this.input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionAsset.packageVersion', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          asset: this.input.asset,
          packageVersionRevision: this.input.packageVersionRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionAsset.packageVersionRevision', props);
    return resource.getResponseField('packageVersionRevision') as unknown as string;
  }

}

export class CodeArtifactFetchPackageVersionReadme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetPackageVersionReadmeRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionReadme.format', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionReadme.namespace', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionReadme.package', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionReadme.version', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionReadme.versionRevision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPackageVersionReadme.readme', props);
    return resource.getResponseField('readme') as unknown as string;
  }

}

export class CodeArtifactFetchRepositoryEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetRepositoryEndpointRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryEndpoint.repositoryEndpoint', props);
    return resource.getResponseField('repositoryEndpoint') as unknown as string;
  }

}

export class CodeArtifactFetchRepositoryPermissionsPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetRepositoryPermissionsPolicyRequest) {
    super(scope, id);
  }

  public get policy(): CodeArtifactFetchRepositoryPermissionsPolicyPolicy {
    return new CodeArtifactFetchRepositoryPermissionsPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class CodeArtifactFetchRepositoryPermissionsPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactGetRepositoryPermissionsPolicyRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryPermissionsPolicy.policy.resourceArn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryPermissionsPolicy.policy.revision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactListDomains extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListDomainsRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.domains', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactListPackageVersionAssets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListPackageVersionAssetsRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionAssets.format', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionAssets.namespace', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionAssets.package', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionAssets.version', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionAssets.versionRevision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionAssets.nextToken', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionAssets.assets', props);
    return resource.getResponseField('assets') as unknown as shapes.CodeArtifactAssetSummary[];
  }

}

export class CodeArtifactListPackageVersionDependencies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListPackageVersionDependenciesRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionDependencies.format', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionDependencies.namespace', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionDependencies.package', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionDependencies.version', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionDependencies.versionRevision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionDependencies.nextToken', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          packageVersion: this.input.packageVersion,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersionDependencies.dependencies', props);
    return resource.getResponseField('dependencies') as unknown as shapes.CodeArtifactPackageDependency[];
  }

}

export class CodeArtifactListPackageVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListPackageVersionsRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          status: this.input.status,
          sortBy: this.input.sortBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersions.defaultDisplayVersion', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          status: this.input.status,
          sortBy: this.input.sortBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersions.format', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          status: this.input.status,
          sortBy: this.input.sortBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersions.namespace', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          status: this.input.status,
          sortBy: this.input.sortBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersions.package', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          status: this.input.status,
          sortBy: this.input.sortBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersions.versions', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          status: this.input.status,
          sortBy: this.input.sortBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackageVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactListPackages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListPackagesRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          packagePrefix: this.input.packagePrefix,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackages.packages', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          packagePrefix: this.input.packagePrefix,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPackages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactListRepositories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListRepositoriesRequest) {
    super(scope, id);
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
          repositoryPrefix: this.input.repositoryPrefix,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositories.repositories', props);
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
          repositoryPrefix: this.input.repositoryPrefix,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositories.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactListRepositoriesInDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListRepositoriesInDomainRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          administratorAccount: this.input.administratorAccount,
          repositoryPrefix: this.input.repositoryPrefix,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositoriesInDomain.repositories', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          administratorAccount: this.input.administratorAccount,
          repositoryPrefix: this.input.repositoryPrefix,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositoriesInDomain.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeArtifactListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.CodeArtifactTag[];
  }

}

export class CodeArtifactPutDomainPermissionsPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactPutDomainPermissionsPolicyRequest) {
    super(scope, id);
  }

  public get policy(): CodeArtifactPutDomainPermissionsPolicyPolicy {
    return new CodeArtifactPutDomainPermissionsPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class CodeArtifactPutDomainPermissionsPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactPutDomainPermissionsPolicyRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          policyRevision: this.input.policyRevision,
          policyDocument: this.input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDomainPermissionsPolicy.policy.resourceArn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          policyRevision: this.input.policyRevision,
          policyDocument: this.input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDomainPermissionsPolicy.policy.revision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          policyRevision: this.input.policyRevision,
          policyDocument: this.input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutDomainPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactPutRepositoryPermissionsPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactPutRepositoryPermissionsPolicyRequest) {
    super(scope, id);
  }

  public get policy(): CodeArtifactPutRepositoryPermissionsPolicyPolicy {
    return new CodeArtifactPutRepositoryPermissionsPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class CodeArtifactPutRepositoryPermissionsPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactPutRepositoryPermissionsPolicyRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          policyRevision: this.input.policyRevision,
          policyDocument: this.input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRepositoryPermissionsPolicy.policy.resourceArn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          policyRevision: this.input.policyRevision,
          policyDocument: this.input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRepositoryPermissionsPolicy.policy.revision', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          policyRevision: this.input.policyRevision,
          policyDocument: this.input.policyDocument,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutRepositoryPermissionsPolicy.policy.document', props);
    return resource.getResponseField('policy.document') as unknown as string;
  }

}

export class CodeArtifactUpdatePackageVersionsStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactUpdatePackageVersionsStatusRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          versionRevisions: this.input.versionRevisions,
          expectedStatus: this.input.expectedStatus,
          targetStatus: this.input.targetStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackageVersionsStatus.successfulVersions', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          format: this.input.format,
          namespace: this.input.namespace,
          package: this.input.package,
          versions: this.input.versions,
          versionRevisions: this.input.versionRevisions,
          expectedStatus: this.input.expectedStatus,
          targetStatus: this.input.targetStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePackageVersionsStatus.failedVersions', props);
    return resource.getResponseField('failedVersions') as unknown as Record<string, shapes.CodeArtifactPackageVersionError>;
  }

}

export class CodeArtifactUpdateRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactUpdateRepositoryRequest) {
    super(scope, id);
  }

  public get repository(): CodeArtifactUpdateRepositoryRepository {
    return new CodeArtifactUpdateRepositoryRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class CodeArtifactUpdateRepositoryRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeArtifactUpdateRepositoryRequest) {
    super(scope, id);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.name', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.administratorAccount', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.domainName', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.domainOwner', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.arn', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.description', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.upstreams', props);
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
          domain: this.input.domain,
          domainOwner: this.input.domainOwner,
          repository: this.input.repository,
          description: this.input.description,
          upstreams: this.input.upstreams,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRepository.repository.externalConnections', props);
    return resource.getResponseField('repository.externalConnections') as unknown as shapes.CodeArtifactRepositoryExternalConnectionInfo[];
  }

}

