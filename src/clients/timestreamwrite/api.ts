import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TimestreamWriteClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDatabase(input: shapes.TimestreamWriteCreateDatabaseRequest): TimestreamWriteResponsesCreateDatabase {
    return new TimestreamWriteResponsesCreateDatabase(this, this.__resources, input);
  }

  public createTable(input: shapes.TimestreamWriteCreateTableRequest): TimestreamWriteResponsesCreateTable {
    return new TimestreamWriteResponsesCreateTable(this, this.__resources, input);
  }

  public deleteDatabase(input: shapes.TimestreamWriteDeleteDatabaseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DeleteDatabase'),
        parameters: {
          DatabaseName: input.databaseName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDatabase', props);
  }

  public deleteTable(input: shapes.TimestreamWriteDeleteTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DeleteTable'),
        parameters: {
          DatabaseName: input.databaseName,
          TableName: input.tableName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTable', props);
  }

  public describeDatabase(input: shapes.TimestreamWriteDescribeDatabaseRequest): TimestreamWriteResponsesDescribeDatabase {
    return new TimestreamWriteResponsesDescribeDatabase(this, this.__resources, input);
  }

  public describeEndpoints(): TimestreamWriteResponsesDescribeEndpoints {
    return new TimestreamWriteResponsesDescribeEndpoints(this, this.__resources);
  }

  public describeTable(input: shapes.TimestreamWriteDescribeTableRequest): TimestreamWriteResponsesDescribeTable {
    return new TimestreamWriteResponsesDescribeTable(this, this.__resources, input);
  }

  public listDatabases(input: shapes.TimestreamWriteListDatabasesRequest): TimestreamWriteResponsesListDatabases {
    return new TimestreamWriteResponsesListDatabases(this, this.__resources, input);
  }

  public listTables(input: shapes.TimestreamWriteListTablesRequest): TimestreamWriteResponsesListTables {
    return new TimestreamWriteResponsesListTables(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.TimestreamWriteListTagsForResourceRequest): TimestreamWriteResponsesListTagsForResource {
    return new TimestreamWriteResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.TimestreamWriteTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.TimestreamWriteUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDatabase(input: shapes.TimestreamWriteUpdateDatabaseRequest): TimestreamWriteResponsesUpdateDatabase {
    return new TimestreamWriteResponsesUpdateDatabase(this, this.__resources, input);
  }

  public updateTable(input: shapes.TimestreamWriteUpdateTableRequest): TimestreamWriteResponsesUpdateTable {
    return new TimestreamWriteResponsesUpdateTable(this, this.__resources, input);
  }

  public writeRecords(input: shapes.TimestreamWriteWriteRecordsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'writeRecords',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.WriteRecords'),
        parameters: {
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          CommonAttributes: {
            Dimensions: input.commonAttributes?.dimensions,
            MeasureName: input.commonAttributes?.measureName,
            MeasureValue: input.commonAttributes?.measureValue,
            MeasureValueType: input.commonAttributes?.measureValueType,
            Time: input.commonAttributes?.time,
            TimeUnit: input.commonAttributes?.timeUnit,
            Version: input.commonAttributes?.version,
          },
          Records: input.records,
        },
      },
    };
    new cr.AwsCustomResource(this, 'WriteRecords', props);
  }

}

export class TimestreamWriteResponsesCreateDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteCreateDatabaseRequest) {
  }

  public get database(): TimestreamWriteResponsesCreateDatabaseDatabase {
    return new TimestreamWriteResponsesCreateDatabaseDatabase(this.__scope, this.__resources, this.__input);
  }

}

export class TimestreamWriteResponsesCreateDatabaseDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteCreateDatabaseRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateDatabase.Database.Arn'),
        outputPath: 'Database.Arn',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatabase.Database.Arn', props);
    return resource.getResponseField('Database.Arn') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateDatabase.Database.DatabaseName'),
        outputPath: 'Database.DatabaseName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatabase.Database.DatabaseName', props);
    return resource.getResponseField('Database.DatabaseName') as unknown as string;
  }

  public get tableCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateDatabase.Database.TableCount'),
        outputPath: 'Database.TableCount',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatabase.Database.TableCount', props);
    return resource.getResponseField('Database.TableCount') as unknown as number;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateDatabase.Database.KmsKeyId'),
        outputPath: 'Database.KmsKeyId',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatabase.Database.KmsKeyId', props);
    return resource.getResponseField('Database.KmsKeyId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateDatabase.Database.CreationTime'),
        outputPath: 'Database.CreationTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatabase.Database.CreationTime', props);
    return resource.getResponseField('Database.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateDatabase.Database.LastUpdatedTime'),
        outputPath: 'Database.LastUpdatedTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatabase.Database.LastUpdatedTime', props);
    return resource.getResponseField('Database.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteResponsesCreateTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteCreateTableRequest) {
  }

  public get table(): TimestreamWriteResponsesCreateTableTable {
    return new TimestreamWriteResponsesCreateTableTable(this.__scope, this.__resources, this.__input);
  }

}

export class TimestreamWriteResponsesCreateTableTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteCreateTableRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.Arn'),
        outputPath: 'Table.Arn',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.Arn', props);
    return resource.getResponseField('Table.Arn') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.TableName'),
        outputPath: 'Table.TableName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.TableName', props);
    return resource.getResponseField('Table.TableName') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.DatabaseName'),
        outputPath: 'Table.DatabaseName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.DatabaseName', props);
    return resource.getResponseField('Table.DatabaseName') as unknown as string;
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.TableStatus'),
        outputPath: 'Table.TableStatus',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.TableStatus', props);
    return resource.getResponseField('Table.TableStatus') as unknown as string;
  }

  public get retentionProperties(): TimestreamWriteResponsesCreateTableTableRetentionProperties {
    return new TimestreamWriteResponsesCreateTableTableRetentionProperties(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.CreationTime'),
        outputPath: 'Table.CreationTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.CreationTime', props);
    return resource.getResponseField('Table.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.LastUpdatedTime'),
        outputPath: 'Table.LastUpdatedTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.LastUpdatedTime', props);
    return resource.getResponseField('Table.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteResponsesCreateTableTableRetentionProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteCreateTableRequest) {
  }

  public get memoryStoreRetentionPeriodInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours'),
        outputPath: 'Table.RetentionProperties.MemoryStoreRetentionPeriodInHours',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours', props);
    return resource.getResponseField('Table.RetentionProperties.MemoryStoreRetentionPeriodInHours') as unknown as number;
  }

  public get magneticStoreRetentionPeriodInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.CreateTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays'),
        outputPath: 'Table.RetentionProperties.MagneticStoreRetentionPeriodInDays',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays', props);
    return resource.getResponseField('Table.RetentionProperties.MagneticStoreRetentionPeriodInDays') as unknown as number;
  }

}

export class TimestreamWriteResponsesDescribeDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteDescribeDatabaseRequest) {
  }

  public get database(): TimestreamWriteResponsesDescribeDatabaseDatabase {
    return new TimestreamWriteResponsesDescribeDatabaseDatabase(this.__scope, this.__resources, this.__input);
  }

}

export class TimestreamWriteResponsesDescribeDatabaseDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteDescribeDatabaseRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeDatabase.Database.Arn'),
        outputPath: 'Database.Arn',
        parameters: {
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatabase.Database.Arn', props);
    return resource.getResponseField('Database.Arn') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeDatabase.Database.DatabaseName'),
        outputPath: 'Database.DatabaseName',
        parameters: {
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatabase.Database.DatabaseName', props);
    return resource.getResponseField('Database.DatabaseName') as unknown as string;
  }

  public get tableCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeDatabase.Database.TableCount'),
        outputPath: 'Database.TableCount',
        parameters: {
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatabase.Database.TableCount', props);
    return resource.getResponseField('Database.TableCount') as unknown as number;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeDatabase.Database.KmsKeyId'),
        outputPath: 'Database.KmsKeyId',
        parameters: {
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatabase.Database.KmsKeyId', props);
    return resource.getResponseField('Database.KmsKeyId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeDatabase.Database.CreationTime'),
        outputPath: 'Database.CreationTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatabase.Database.CreationTime', props);
    return resource.getResponseField('Database.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeDatabase.Database.LastUpdatedTime'),
        outputPath: 'Database.LastUpdatedTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatabase.Database.LastUpdatedTime', props);
    return resource.getResponseField('Database.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteResponsesDescribeEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get endpoints(): shapes.TimestreamWriteEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoints',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeEndpoints.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.TimestreamWriteEndpoint[];
  }

}

export class TimestreamWriteResponsesDescribeTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteDescribeTableRequest) {
  }

  public get table(): TimestreamWriteResponsesDescribeTableTable {
    return new TimestreamWriteResponsesDescribeTableTable(this.__scope, this.__resources, this.__input);
  }

}

export class TimestreamWriteResponsesDescribeTableTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteDescribeTableRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.Arn'),
        outputPath: 'Table.Arn',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.Arn', props);
    return resource.getResponseField('Table.Arn') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.TableName'),
        outputPath: 'Table.TableName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.TableName', props);
    return resource.getResponseField('Table.TableName') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.DatabaseName'),
        outputPath: 'Table.DatabaseName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.DatabaseName', props);
    return resource.getResponseField('Table.DatabaseName') as unknown as string;
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.TableStatus'),
        outputPath: 'Table.TableStatus',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.TableStatus', props);
    return resource.getResponseField('Table.TableStatus') as unknown as string;
  }

  public get retentionProperties(): TimestreamWriteResponsesDescribeTableTableRetentionProperties {
    return new TimestreamWriteResponsesDescribeTableTableRetentionProperties(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.CreationTime'),
        outputPath: 'Table.CreationTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.CreationTime', props);
    return resource.getResponseField('Table.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.LastUpdatedTime'),
        outputPath: 'Table.LastUpdatedTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.LastUpdatedTime', props);
    return resource.getResponseField('Table.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteResponsesDescribeTableTableRetentionProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteDescribeTableRequest) {
  }

  public get memoryStoreRetentionPeriodInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours'),
        outputPath: 'Table.RetentionProperties.MemoryStoreRetentionPeriodInHours',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours', props);
    return resource.getResponseField('Table.RetentionProperties.MemoryStoreRetentionPeriodInHours') as unknown as number;
  }

  public get magneticStoreRetentionPeriodInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.DescribeTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays'),
        outputPath: 'Table.RetentionProperties.MagneticStoreRetentionPeriodInDays',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays', props);
    return resource.getResponseField('Table.RetentionProperties.MagneticStoreRetentionPeriodInDays') as unknown as number;
  }

}

export class TimestreamWriteResponsesListDatabases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteListDatabasesRequest) {
  }

  public get databases(): shapes.TimestreamWriteDatabase[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.ListDatabases.Databases'),
        outputPath: 'Databases',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatabases.Databases', props);
    return resource.getResponseField('Databases') as unknown as shapes.TimestreamWriteDatabase[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.ListDatabases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TimestreamWriteResponsesListTables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteListTablesRequest) {
  }

  public get tables(): shapes.TimestreamWriteTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.ListTables.Tables'),
        outputPath: 'Tables',
        parameters: {
          DatabaseName: this.__input.databaseName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.Tables', props);
    return resource.getResponseField('Tables') as unknown as shapes.TimestreamWriteTable[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.ListTables.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DatabaseName: this.__input.databaseName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TimestreamWriteResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteListTagsForResourceRequest) {
  }

  public get tags(): shapes.TimestreamWriteTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.TimestreamWriteTag[];
  }

}

export class TimestreamWriteResponsesUpdateDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteUpdateDatabaseRequest) {
  }

  public get database(): TimestreamWriteResponsesUpdateDatabaseDatabase {
    return new TimestreamWriteResponsesUpdateDatabaseDatabase(this.__scope, this.__resources, this.__input);
  }

}

export class TimestreamWriteResponsesUpdateDatabaseDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteUpdateDatabaseRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateDatabase.Database.Arn'),
        outputPath: 'Database.Arn',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDatabase.Database.Arn', props);
    return resource.getResponseField('Database.Arn') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateDatabase.Database.DatabaseName'),
        outputPath: 'Database.DatabaseName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDatabase.Database.DatabaseName', props);
    return resource.getResponseField('Database.DatabaseName') as unknown as string;
  }

  public get tableCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateDatabase.Database.TableCount'),
        outputPath: 'Database.TableCount',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDatabase.Database.TableCount', props);
    return resource.getResponseField('Database.TableCount') as unknown as number;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateDatabase.Database.KmsKeyId'),
        outputPath: 'Database.KmsKeyId',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDatabase.Database.KmsKeyId', props);
    return resource.getResponseField('Database.KmsKeyId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateDatabase.Database.CreationTime'),
        outputPath: 'Database.CreationTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDatabase.Database.CreationTime', props);
    return resource.getResponseField('Database.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateDatabase.Database.LastUpdatedTime'),
        outputPath: 'Database.LastUpdatedTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDatabase.Database.LastUpdatedTime', props);
    return resource.getResponseField('Database.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteResponsesUpdateTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteUpdateTableRequest) {
  }

  public get table(): TimestreamWriteResponsesUpdateTableTable {
    return new TimestreamWriteResponsesUpdateTableTable(this.__scope, this.__resources, this.__input);
  }

}

export class TimestreamWriteResponsesUpdateTableTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteUpdateTableRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.Arn'),
        outputPath: 'Table.Arn',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.Arn', props);
    return resource.getResponseField('Table.Arn') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.TableName'),
        outputPath: 'Table.TableName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.TableName', props);
    return resource.getResponseField('Table.TableName') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.DatabaseName'),
        outputPath: 'Table.DatabaseName',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.DatabaseName', props);
    return resource.getResponseField('Table.DatabaseName') as unknown as string;
  }

  public get tableStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.TableStatus'),
        outputPath: 'Table.TableStatus',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.TableStatus', props);
    return resource.getResponseField('Table.TableStatus') as unknown as string;
  }

  public get retentionProperties(): TimestreamWriteResponsesUpdateTableTableRetentionProperties {
    return new TimestreamWriteResponsesUpdateTableTableRetentionProperties(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.CreationTime'),
        outputPath: 'Table.CreationTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.CreationTime', props);
    return resource.getResponseField('Table.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.LastUpdatedTime'),
        outputPath: 'Table.LastUpdatedTime',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.LastUpdatedTime', props);
    return resource.getResponseField('Table.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteResponsesUpdateTableTableRetentionProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamWriteUpdateTableRequest) {
  }

  public get memoryStoreRetentionPeriodInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours'),
        outputPath: 'Table.RetentionProperties.MemoryStoreRetentionPeriodInHours',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours', props);
    return resource.getResponseField('Table.RetentionProperties.MemoryStoreRetentionPeriodInHours') as unknown as number;
  }

  public get magneticStoreRetentionPeriodInDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'TimestreamWrite',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamWrite.UpdateTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays'),
        outputPath: 'Table.RetentionProperties.MagneticStoreRetentionPeriodInDays',
        parameters: {
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.__input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.__input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays', props);
    return resource.getResponseField('Table.RetentionProperties.MagneticStoreRetentionPeriodInDays') as unknown as number;
  }

}

