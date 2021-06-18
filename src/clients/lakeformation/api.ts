import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LakeFormationClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGrantPermissions(input: shapes.LakeFormationBatchGrantPermissionsRequest): LakeFormationBatchGrantPermissions {
    return new LakeFormationBatchGrantPermissions(this, 'BatchGrantPermissions', this.__resources, input);
  }

  public batchRevokePermissions(input: shapes.LakeFormationBatchRevokePermissionsRequest): LakeFormationBatchRevokePermissions {
    return new LakeFormationBatchRevokePermissions(this, 'BatchRevokePermissions', this.__resources, input);
  }

  public deregisterResource(input: shapes.LakeFormationDeregisterResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DeregisterResource'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterResource', props);
  }

  public describeResource(input: shapes.LakeFormationDescribeResourceRequest): LakeFormationDescribeResource {
    return new LakeFormationDescribeResource(this, 'DescribeResource', this.__resources, input);
  }

  public fetchDataLakeSettings(input: shapes.LakeFormationGetDataLakeSettingsRequest): LakeFormationFetchDataLakeSettings {
    return new LakeFormationFetchDataLakeSettings(this, 'FetchDataLakeSettings', this.__resources, input);
  }

  public fetchEffectivePermissionsForPath(input: shapes.LakeFormationGetEffectivePermissionsForPathRequest): LakeFormationFetchEffectivePermissionsForPath {
    return new LakeFormationFetchEffectivePermissionsForPath(this, 'FetchEffectivePermissionsForPath', this.__resources, input);
  }

  public grantPermissions(input: shapes.LakeFormationGrantPermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GrantPermissions'),
        parameters: {
          CatalogId: input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: input.principal.dataLakePrincipalIdentifier,
          },
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: input.resource.database?.catalogId,
              Name: input.resource.database?.name,
            },
            Table: {
              CatalogId: input.resource.table?.catalogId,
              DatabaseName: input.resource.table?.databaseName,
              Name: input.resource.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: input.resource.tableWithColumns?.catalogId,
              DatabaseName: input.resource.tableWithColumns?.databaseName,
              Name: input.resource.tableWithColumns?.name,
              ColumnNames: input.resource.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: input.resource.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: input.resource.dataLocation?.catalogId,
              ResourceArn: input.resource.dataLocation?.resourceArn,
            },
          },
          Permissions: input.permissions,
          PermissionsWithGrantOption: input.permissionsWithGrantOption,
        },
      },
    };
    new cr.AwsCustomResource(this, 'GrantPermissions', props);
  }

  public listPermissions(input: shapes.LakeFormationListPermissionsRequest): LakeFormationListPermissions {
    return new LakeFormationListPermissions(this, 'ListPermissions', this.__resources, input);
  }

  public listResources(input: shapes.LakeFormationListResourcesRequest): LakeFormationListResources {
    return new LakeFormationListResources(this, 'ListResources', this.__resources, input);
  }

  public putDataLakeSettings(input: shapes.LakeFormationPutDataLakeSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.PutDataLakeSettings'),
        parameters: {
          CatalogId: input.catalogId,
          DataLakeSettings: {
            DataLakeAdmins: input.dataLakeSettings.dataLakeAdmins,
            CreateDatabaseDefaultPermissions: input.dataLakeSettings.createDatabaseDefaultPermissions,
            CreateTableDefaultPermissions: input.dataLakeSettings.createTableDefaultPermissions,
            TrustedResourceOwners: input.dataLakeSettings.trustedResourceOwners,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDataLakeSettings', props);
  }

  public registerResource(input: shapes.LakeFormationRegisterResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.RegisterResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          UseServiceLinkedRole: input.useServiceLinkedRole,
          RoleArn: input.roleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterResource', props);
  }

  public revokePermissions(input: shapes.LakeFormationRevokePermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokePermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.RevokePermissions'),
        parameters: {
          CatalogId: input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: input.principal.dataLakePrincipalIdentifier,
          },
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: input.resource.database?.catalogId,
              Name: input.resource.database?.name,
            },
            Table: {
              CatalogId: input.resource.table?.catalogId,
              DatabaseName: input.resource.table?.databaseName,
              Name: input.resource.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: input.resource.tableWithColumns?.catalogId,
              DatabaseName: input.resource.tableWithColumns?.databaseName,
              Name: input.resource.tableWithColumns?.name,
              ColumnNames: input.resource.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: input.resource.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: input.resource.dataLocation?.catalogId,
              ResourceArn: input.resource.dataLocation?.resourceArn,
            },
          },
          Permissions: input.permissions,
          PermissionsWithGrantOption: input.permissionsWithGrantOption,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokePermissions', props);
  }

  public updateResource(input: shapes.LakeFormationUpdateResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.UpdateResource'),
        parameters: {
          RoleArn: input.roleArn,
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateResource', props);
  }

}

export class LakeFormationBatchGrantPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationBatchGrantPermissionsRequest) {
    super(scope, id);
  }

  public get failures(): shapes.LakeFormationBatchPermissionsFailureEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGrantPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.BatchGrantPermissions.Failures'),
        outputPath: 'Failures',
        parameters: {
          CatalogId: this.input.catalogId,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGrantPermissions.Failures', props);
    return resource.getResponseField('Failures') as unknown as shapes.LakeFormationBatchPermissionsFailureEntry[];
  }

}

export class LakeFormationBatchRevokePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationBatchRevokePermissionsRequest) {
    super(scope, id);
  }

  public get failures(): shapes.LakeFormationBatchPermissionsFailureEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchRevokePermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.BatchRevokePermissions.Failures'),
        outputPath: 'Failures',
        parameters: {
          CatalogId: this.input.catalogId,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchRevokePermissions.Failures', props);
    return resource.getResponseField('Failures') as unknown as shapes.LakeFormationBatchPermissionsFailureEntry[];
  }

}

export class LakeFormationDescribeResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationDescribeResourceRequest) {
    super(scope, id);
  }

  public get resourceInfo(): LakeFormationDescribeResourceResourceInfo {
    return new LakeFormationDescribeResourceResourceInfo(this, 'ResourceInfo', this.__resources, this.input);
  }

}

export class LakeFormationDescribeResourceResourceInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationDescribeResourceRequest) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DescribeResource.ResourceInfo.ResourceArn'),
        outputPath: 'ResourceInfo.ResourceArn',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.ResourceInfo.ResourceArn', props);
    return resource.getResponseField('ResourceInfo.ResourceArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DescribeResource.ResourceInfo.RoleArn'),
        outputPath: 'ResourceInfo.RoleArn',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.ResourceInfo.RoleArn', props);
    return resource.getResponseField('ResourceInfo.RoleArn') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DescribeResource.ResourceInfo.LastModified'),
        outputPath: 'ResourceInfo.LastModified',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeResource.ResourceInfo.LastModified', props);
    return resource.getResponseField('ResourceInfo.LastModified') as unknown as string;
  }

}

export class LakeFormationFetchDataLakeSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationGetDataLakeSettingsRequest) {
    super(scope, id);
  }

  public get dataLakeSettings(): LakeFormationFetchDataLakeSettingsDataLakeSettings {
    return new LakeFormationFetchDataLakeSettingsDataLakeSettings(this, 'DataLakeSettings', this.__resources, this.input);
  }

}

export class LakeFormationFetchDataLakeSettingsDataLakeSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationGetDataLakeSettingsRequest) {
    super(scope, id);
  }

  public get dataLakeAdmins(): shapes.LakeFormationDataLakePrincipal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.DataLakeAdmins'),
        outputPath: 'DataLakeSettings.DataLakeAdmins',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataLakeSettings.DataLakeSettings.DataLakeAdmins', props);
    return resource.getResponseField('DataLakeSettings.DataLakeAdmins') as unknown as shapes.LakeFormationDataLakePrincipal[];
  }

  public get createDatabaseDefaultPermissions(): shapes.LakeFormationPrincipalPermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.CreateDatabaseDefaultPermissions'),
        outputPath: 'DataLakeSettings.CreateDatabaseDefaultPermissions',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataLakeSettings.DataLakeSettings.CreateDatabaseDefaultPermissions', props);
    return resource.getResponseField('DataLakeSettings.CreateDatabaseDefaultPermissions') as unknown as shapes.LakeFormationPrincipalPermissions[];
  }

  public get createTableDefaultPermissions(): shapes.LakeFormationPrincipalPermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.CreateTableDefaultPermissions'),
        outputPath: 'DataLakeSettings.CreateTableDefaultPermissions',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataLakeSettings.DataLakeSettings.CreateTableDefaultPermissions', props);
    return resource.getResponseField('DataLakeSettings.CreateTableDefaultPermissions') as unknown as shapes.LakeFormationPrincipalPermissions[];
  }

  public get trustedResourceOwners(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.TrustedResourceOwners'),
        outputPath: 'DataLakeSettings.TrustedResourceOwners',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataLakeSettings.DataLakeSettings.TrustedResourceOwners', props);
    return resource.getResponseField('DataLakeSettings.TrustedResourceOwners') as unknown as string[];
  }

}

export class LakeFormationFetchEffectivePermissionsForPath extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationGetEffectivePermissionsForPathRequest) {
    super(scope, id);
  }

  public get permissions(): shapes.LakeFormationPrincipalResourcePermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEffectivePermissionsForPath',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetEffectivePermissionsForPath.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          CatalogId: this.input.catalogId,
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEffectivePermissionsForPath.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.LakeFormationPrincipalResourcePermissions[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEffectivePermissionsForPath',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetEffectivePermissionsForPath.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEffectivePermissionsForPath.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LakeFormationListPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationListPermissionsRequest) {
    super(scope, id);
  }

  public get principalResourcePermissions(): shapes.LakeFormationPrincipalResourcePermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListPermissions.PrincipalResourcePermissions'),
        outputPath: 'PrincipalResourcePermissions',
        parameters: {
          CatalogId: this.input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: this.input.principal?.dataLakePrincipalIdentifier,
          },
          ResourceType: this.input.resourceType,
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: this.input.resource?.database?.catalogId,
              Name: this.input.resource?.database?.name,
            },
            Table: {
              CatalogId: this.input.resource?.table?.catalogId,
              DatabaseName: this.input.resource?.table?.databaseName,
              Name: this.input.resource?.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: this.input.resource?.tableWithColumns?.catalogId,
              DatabaseName: this.input.resource?.tableWithColumns?.databaseName,
              Name: this.input.resource?.tableWithColumns?.name,
              ColumnNames: this.input.resource?.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: this.input.resource?.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: this.input.resource?.dataLocation?.catalogId,
              ResourceArn: this.input.resource?.dataLocation?.resourceArn,
            },
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissions.PrincipalResourcePermissions', props);
    return resource.getResponseField('PrincipalResourcePermissions') as unknown as shapes.LakeFormationPrincipalResourcePermissions[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListPermissions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: this.input.principal?.dataLakePrincipalIdentifier,
          },
          ResourceType: this.input.resourceType,
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: this.input.resource?.database?.catalogId,
              Name: this.input.resource?.database?.name,
            },
            Table: {
              CatalogId: this.input.resource?.table?.catalogId,
              DatabaseName: this.input.resource?.table?.databaseName,
              Name: this.input.resource?.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: this.input.resource?.tableWithColumns?.catalogId,
              DatabaseName: this.input.resource?.tableWithColumns?.databaseName,
              Name: this.input.resource?.tableWithColumns?.name,
              ColumnNames: this.input.resource?.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: this.input.resource?.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: this.input.resource?.dataLocation?.catalogId,
              ResourceArn: this.input.resource?.dataLocation?.resourceArn,
            },
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LakeFormationListResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LakeFormationListResourcesRequest) {
    super(scope, id);
  }

  public get resourceInfoList(): shapes.LakeFormationResourceInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListResources.ResourceInfoList'),
        outputPath: 'ResourceInfoList',
        parameters: {
          FilterConditionList: this.input.filterConditionList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.ResourceInfoList', props);
    return resource.getResponseField('ResourceInfoList') as unknown as shapes.LakeFormationResourceInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FilterConditionList: this.input.filterConditionList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

