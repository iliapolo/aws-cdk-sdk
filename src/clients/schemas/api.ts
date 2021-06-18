import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SchemasClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDiscoverer(input: shapes.SchemasCreateDiscovererRequest): SchemasCreateDiscoverer {
    return new SchemasCreateDiscoverer(this, 'CreateDiscoverer', this.__resources, input);
  }

  public createRegistry(input: shapes.SchemasCreateRegistryRequest): SchemasCreateRegistry {
    return new SchemasCreateRegistry(this, 'CreateRegistry', this.__resources, input);
  }

  public createSchema(input: shapes.SchemasCreateSchemaRequest): SchemasCreateSchema {
    return new SchemasCreateSchema(this, 'CreateSchema', this.__resources, input);
  }

  public deleteDiscoverer(input: shapes.SchemasDeleteDiscovererRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteDiscoverer'),
        parameters: {
          DiscovererId: input.discovererId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDiscoverer', props);
  }

  public deleteRegistry(input: shapes.SchemasDeleteRegistryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteRegistry'),
        parameters: {
          RegistryName: input.registryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRegistry', props);
  }

  public deleteResourcePolicy(input: shapes.SchemasDeleteResourcePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteResourcePolicy'),
        parameters: {
          RegistryName: input.registryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourcePolicy', props);
  }

  public deleteSchema(input: shapes.SchemasDeleteSchemaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteSchema'),
        parameters: {
          RegistryName: input.registryName,
          SchemaName: input.schemaName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSchema', props);
  }

  public deleteSchemaVersion(input: shapes.SchemasDeleteSchemaVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchemaVersion',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteSchemaVersion'),
        parameters: {
          RegistryName: input.registryName,
          SchemaName: input.schemaName,
          SchemaVersion: input.schemaVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSchemaVersion', props);
  }

  public describeCodeBinding(input: shapes.SchemasDescribeCodeBindingRequest): SchemasDescribeCodeBinding {
    return new SchemasDescribeCodeBinding(this, 'DescribeCodeBinding', this.__resources, input);
  }

  public describeDiscoverer(input: shapes.SchemasDescribeDiscovererRequest): SchemasDescribeDiscoverer {
    return new SchemasDescribeDiscoverer(this, 'DescribeDiscoverer', this.__resources, input);
  }

  public describeRegistry(input: shapes.SchemasDescribeRegistryRequest): SchemasDescribeRegistry {
    return new SchemasDescribeRegistry(this, 'DescribeRegistry', this.__resources, input);
  }

  public describeSchema(input: shapes.SchemasDescribeSchemaRequest): SchemasDescribeSchema {
    return new SchemasDescribeSchema(this, 'DescribeSchema', this.__resources, input);
  }

  public exportSchema(input: shapes.SchemasExportSchemaRequest): SchemasExportSchema {
    return new SchemasExportSchema(this, 'ExportSchema', this.__resources, input);
  }

  public fetchCodeBindingSource(input: shapes.SchemasGetCodeBindingSourceRequest): SchemasFetchCodeBindingSource {
    return new SchemasFetchCodeBindingSource(this, 'FetchCodeBindingSource', this.__resources, input);
  }

  public fetchDiscoveredSchema(input: shapes.SchemasGetDiscoveredSchemaRequest): SchemasFetchDiscoveredSchema {
    return new SchemasFetchDiscoveredSchema(this, 'FetchDiscoveredSchema', this.__resources, input);
  }

  public fetchResourcePolicy(input: shapes.SchemasGetResourcePolicyRequest): SchemasFetchResourcePolicy {
    return new SchemasFetchResourcePolicy(this, 'FetchResourcePolicy', this.__resources, input);
  }

  public listDiscoverers(input: shapes.SchemasListDiscoverersRequest): SchemasListDiscoverers {
    return new SchemasListDiscoverers(this, 'ListDiscoverers', this.__resources, input);
  }

  public listRegistries(input: shapes.SchemasListRegistriesRequest): SchemasListRegistries {
    return new SchemasListRegistries(this, 'ListRegistries', this.__resources, input);
  }

  public listSchemaVersions(input: shapes.SchemasListSchemaVersionsRequest): SchemasListSchemaVersions {
    return new SchemasListSchemaVersions(this, 'ListSchemaVersions', this.__resources, input);
  }

  public listSchemas(input: shapes.SchemasListSchemasRequest): SchemasListSchemas {
    return new SchemasListSchemas(this, 'ListSchemas', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SchemasListTagsForResourceRequest): SchemasListTagsForResource {
    return new SchemasListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putCodeBinding(input: shapes.SchemasPutCodeBindingRequest): SchemasPutCodeBinding {
    return new SchemasPutCodeBinding(this, 'PutCodeBinding', this.__resources, input);
  }

  public putResourcePolicy(input: shapes.SchemasPutResourcePolicyRequest): SchemasPutResourcePolicy {
    return new SchemasPutResourcePolicy(this, 'PutResourcePolicy', this.__resources, input);
  }

  public searchSchemas(input: shapes.SchemasSearchSchemasRequest): SchemasSearchSchemas {
    return new SchemasSearchSchemas(this, 'SearchSchemas', this.__resources, input);
  }

  public startDiscoverer(input: shapes.SchemasStartDiscovererRequest): SchemasStartDiscoverer {
    return new SchemasStartDiscoverer(this, 'StartDiscoverer', this.__resources, input);
  }

  public stopDiscoverer(input: shapes.SchemasStopDiscovererRequest): SchemasStopDiscoverer {
    return new SchemasStopDiscoverer(this, 'StopDiscoverer', this.__resources, input);
  }

  public tagResource(input: shapes.SchemasTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SchemasUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDiscoverer(input: shapes.SchemasUpdateDiscovererRequest): SchemasUpdateDiscoverer {
    return new SchemasUpdateDiscoverer(this, 'UpdateDiscoverer', this.__resources, input);
  }

  public updateRegistry(input: shapes.SchemasUpdateRegistryRequest): SchemasUpdateRegistry {
    return new SchemasUpdateRegistry(this, 'UpdateRegistry', this.__resources, input);
  }

  public updateSchema(input: shapes.SchemasUpdateSchemaRequest): SchemasUpdateSchema {
    return new SchemasUpdateSchema(this, 'UpdateSchema', this.__resources, input);
  }

}

export class SchemasCreateDiscoverer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasCreateDiscovererRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.input.description,
          SourceArn: this.input.sourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiscoverer.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get discovererArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.DiscovererArn'),
        outputPath: 'DiscovererArn',
        parameters: {
          Description: this.input.description,
          SourceArn: this.input.sourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiscoverer.DiscovererArn', props);
    return resource.getResponseField('DiscovererArn') as unknown as string;
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          Description: this.input.description,
          SourceArn: this.input.sourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          Description: this.input.description,
          SourceArn: this.input.sourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiscoverer.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          Description: this.input.description,
          SourceArn: this.input.sourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.input.description,
          SourceArn: this.input.sourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiscoverer.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasCreateRegistry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasCreateRegistryRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasCreateSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasCreateSchemaRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.Description'),
        outputPath: 'Description',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.Type'),
        outputPath: 'Type',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get versionCreatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.VersionCreatedDate'),
        outputPath: 'VersionCreatedDate',
        parameters: {
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Tags: this.input.tags,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.VersionCreatedDate', props);
    return resource.getResponseField('VersionCreatedDate') as unknown as string;
  }

}

export class SchemasDescribeCodeBinding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasDescribeCodeBindingRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeBinding.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeBinding.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeBinding.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.Status'),
        outputPath: 'Status',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeBinding.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SchemasDescribeDiscoverer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasDescribeDiscovererRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.Description'),
        outputPath: 'Description',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDiscoverer.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get discovererArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.DiscovererArn'),
        outputPath: 'DiscovererArn',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDiscoverer.DiscovererArn', props);
    return resource.getResponseField('DiscovererArn') as unknown as string;
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDiscoverer.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.Tags'),
        outputPath: 'Tags',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDiscoverer.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasDescribeRegistry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasDescribeRegistryRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasDescribeSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasDescribeSchemaRequest) {
    super(scope, id);
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Content'),
        outputPath: 'Content',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Type'),
        outputPath: 'Type',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get versionCreatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.VersionCreatedDate'),
        outputPath: 'VersionCreatedDate',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.VersionCreatedDate', props);
    return resource.getResponseField('VersionCreatedDate') as unknown as string;
  }

}

export class SchemasExportSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasExportSchemaRequest) {
    super(scope, id);
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.Content'),
        outputPath: 'Content',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportSchema.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.Type'),
        outputPath: 'Type',
        parameters: {
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

}

export class SchemasFetchCodeBindingSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasGetCodeBindingSourceRequest) {
    super(scope, id);
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeBindingSource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetCodeBindingSource.Body'),
        outputPath: 'Body',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCodeBindingSource.Body', props);
    return resource.getResponseField('Body') as unknown as any;
  }

}

export class SchemasFetchDiscoveredSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasGetDiscoveredSchemaRequest) {
    super(scope, id);
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoveredSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetDiscoveredSchema.Content'),
        outputPath: 'Content',
        parameters: {
          Events: this.input.events,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiscoveredSchema.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

}

export class SchemasFetchResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasGetResourcePolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetResourcePolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetResourcePolicy.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class SchemasListDiscoverers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasListDiscoverersRequest) {
    super(scope, id);
  }

  public get discoverers(): shapes.SchemasDiscovererSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDiscoverers',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListDiscoverers.Discoverers'),
        outputPath: 'Discoverers',
        parameters: {
          DiscovererIdPrefix: this.input.discovererIdPrefix,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          SourceArnPrefix: this.input.sourceArnPrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDiscoverers.Discoverers', props);
    return resource.getResponseField('Discoverers') as unknown as shapes.SchemasDiscovererSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDiscoverers',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListDiscoverers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DiscovererIdPrefix: this.input.discovererIdPrefix,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          SourceArnPrefix: this.input.sourceArnPrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDiscoverers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SchemasListRegistries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasListRegistriesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListRegistries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryNamePrefix: this.input.registryNamePrefix,
          Scope: this.input.scope,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegistries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get registries(): shapes.SchemasRegistrySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListRegistries.Registries'),
        outputPath: 'Registries',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryNamePrefix: this.input.registryNamePrefix,
          Scope: this.input.scope,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegistries.Registries', props);
    return resource.getResponseField('Registries') as unknown as shapes.SchemasRegistrySummary[];
  }

}

export class SchemasListSchemaVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasListSchemaVersionsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemaVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemaVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemaVersions(): shapes.SchemasSchemaVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemaVersions.SchemaVersions'),
        outputPath: 'SchemaVersions',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemaVersions.SchemaVersions', props);
    return resource.getResponseField('SchemaVersions') as unknown as shapes.SchemasSchemaVersionSummary[];
  }

}

export class SchemasListSchemas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasListSchemasRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryName: this.input.registryName,
          SchemaNamePrefix: this.input.schemaNamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemas(): shapes.SchemasSchemaSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryName: this.input.registryName,
          SchemaNamePrefix: this.input.schemaNamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.SchemasSchemaSummary[];
  }

}

export class SchemasListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListTagsForResource.Tags'),
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

export class SchemasPutCodeBinding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasPutCodeBindingRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutCodeBinding.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutCodeBinding.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutCodeBinding.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.Status'),
        outputPath: 'Status',
        parameters: {
          Language: this.input.language,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          SchemaVersion: this.input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutCodeBinding.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SchemasPutResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasPutResourcePolicyRequest) {
    super(scope, id);
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutResourcePolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          Policy: this.input.policy,
          RegistryName: this.input.registryName,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutResourcePolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutResourcePolicy.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          Policy: this.input.policy,
          RegistryName: this.input.registryName,
          RevisionId: this.input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutResourcePolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class SchemasSearchSchemas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasSearchSchemasRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.SearchSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Keywords: this.input.keywords,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemas(): shapes.SchemasSearchSchemaSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.SearchSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          Keywords: this.input.keywords,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.SchemasSearchSchemaSummary[];
  }

}

export class SchemasStartDiscoverer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasStartDiscovererRequest) {
    super(scope, id);
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StartDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StartDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class SchemasStopDiscoverer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasStopDiscovererRequest) {
    super(scope, id);
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StopDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StopDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class SchemasUpdateDiscoverer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasUpdateDiscovererRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.input.description,
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDiscoverer.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get discovererArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.DiscovererArn'),
        outputPath: 'DiscovererArn',
        parameters: {
          Description: this.input.description,
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDiscoverer.DiscovererArn', props);
    return resource.getResponseField('DiscovererArn') as unknown as string;
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          Description: this.input.description,
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          Description: this.input.description,
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDiscoverer.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          Description: this.input.description,
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.input.description,
          DiscovererId: this.input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDiscoverer.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasUpdateRegistry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasUpdateRegistryRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.input.description,
          RegistryName: this.input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasUpdateSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SchemasUpdateSchemaRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.Description'),
        outputPath: 'Description',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.Type'),
        outputPath: 'Type',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get versionCreatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.VersionCreatedDate'),
        outputPath: 'VersionCreatedDate',
        parameters: {
          ClientTokenId: this.input.clientTokenId,
          Content: this.input.content,
          Description: this.input.description,
          RegistryName: this.input.registryName,
          SchemaName: this.input.schemaName,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.VersionCreatedDate', props);
    return resource.getResponseField('VersionCreatedDate') as unknown as string;
  }

}

