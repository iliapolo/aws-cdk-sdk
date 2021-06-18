import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TimestreamWriteClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDatabase(input: shapes.TimestreamWriteCreateDatabaseRequest): TimestreamWriteCreateDatabase {
    return new TimestreamWriteCreateDatabase(this, 'CreateDatabase', this.__resources, input);
  }

  public createTable(input: shapes.TimestreamWriteCreateTableRequest): TimestreamWriteCreateTable {
    return new TimestreamWriteCreateTable(this, 'CreateTable', this.__resources, input);
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

  public describeDatabase(input: shapes.TimestreamWriteDescribeDatabaseRequest): TimestreamWriteDescribeDatabase {
    return new TimestreamWriteDescribeDatabase(this, 'DescribeDatabase', this.__resources, input);
  }

  public describeEndpoints(): TimestreamWriteDescribeEndpoints {
    return new TimestreamWriteDescribeEndpoints(this, 'DescribeEndpoints', this.__resources);
  }

  public describeTable(input: shapes.TimestreamWriteDescribeTableRequest): TimestreamWriteDescribeTable {
    return new TimestreamWriteDescribeTable(this, 'DescribeTable', this.__resources, input);
  }

  public listDatabases(input: shapes.TimestreamWriteListDatabasesRequest): TimestreamWriteListDatabases {
    return new TimestreamWriteListDatabases(this, 'ListDatabases', this.__resources, input);
  }

  public listTables(input: shapes.TimestreamWriteListTablesRequest): TimestreamWriteListTables {
    return new TimestreamWriteListTables(this, 'ListTables', this.__resources, input);
  }

  public listTagsForResource(input: shapes.TimestreamWriteListTagsForResourceRequest): TimestreamWriteListTagsForResource {
    return new TimestreamWriteListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public updateDatabase(input: shapes.TimestreamWriteUpdateDatabaseRequest): TimestreamWriteUpdateDatabase {
    return new TimestreamWriteUpdateDatabase(this, 'UpdateDatabase', this.__resources, input);
  }

  public updateTable(input: shapes.TimestreamWriteUpdateTableRequest): TimestreamWriteUpdateTable {
    return new TimestreamWriteUpdateTable(this, 'UpdateTable', this.__resources, input);
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

export class TimestreamWriteCreateDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteCreateDatabaseRequest) {
    super(scope, id);
  }

  public get database(): TimestreamWriteCreateDatabaseDatabase {
    return new TimestreamWriteCreateDatabaseDatabase(this, 'Database', this.__resources, this.input);
  }

}

export class TimestreamWriteCreateDatabaseDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteCreateDatabaseRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatabase.Database.Arn', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatabase.Database.DatabaseName', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatabase.Database.TableCount', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatabase.Database.KmsKeyId', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatabase.Database.CreationTime', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatabase.Database.LastUpdatedTime', props);
    return resource.getResponseField('Database.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteCreateTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteCreateTableRequest) {
    super(scope, id);
  }

  public get table(): TimestreamWriteCreateTableTable {
    return new TimestreamWriteCreateTableTable(this, 'Table', this.__resources, this.input);
  }

}

export class TimestreamWriteCreateTableTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteCreateTableRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.Arn', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.TableName', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.DatabaseName', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.TableStatus', props);
    return resource.getResponseField('Table.TableStatus') as unknown as string;
  }

  public get retentionProperties(): TimestreamWriteCreateTableTableRetentionProperties {
    return new TimestreamWriteCreateTableTableRetentionProperties(this, 'RetentionProperties', this.__resources, this.input);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.CreationTime', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.LastUpdatedTime', props);
    return resource.getResponseField('Table.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteCreateTableTableRetentionProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteCreateTableRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties?.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties?.magneticStoreRetentionPeriodInDays,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays', props);
    return resource.getResponseField('Table.RetentionProperties.MagneticStoreRetentionPeriodInDays') as unknown as number;
  }

}

export class TimestreamWriteDescribeDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteDescribeDatabaseRequest) {
    super(scope, id);
  }

  public get database(): TimestreamWriteDescribeDatabaseDatabase {
    return new TimestreamWriteDescribeDatabaseDatabase(this, 'Database', this.__resources, this.input);
  }

}

export class TimestreamWriteDescribeDatabaseDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteDescribeDatabaseRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatabase.Database.Arn', props);
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
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatabase.Database.DatabaseName', props);
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
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatabase.Database.TableCount', props);
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
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatabase.Database.KmsKeyId', props);
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
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatabase.Database.CreationTime', props);
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
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatabase.Database.LastUpdatedTime', props);
    return resource.getResponseField('Database.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteDescribeEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.TimestreamWriteEndpoint[];
  }

}

export class TimestreamWriteDescribeTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteDescribeTableRequest) {
    super(scope, id);
  }

  public get table(): TimestreamWriteDescribeTableTable {
    return new TimestreamWriteDescribeTableTable(this, 'Table', this.__resources, this.input);
  }

}

export class TimestreamWriteDescribeTableTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteDescribeTableRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.Arn', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.TableName', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.DatabaseName', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.TableStatus', props);
    return resource.getResponseField('Table.TableStatus') as unknown as string;
  }

  public get retentionProperties(): TimestreamWriteDescribeTableTableRetentionProperties {
    return new TimestreamWriteDescribeTableTableRetentionProperties(this, 'RetentionProperties', this.__resources, this.input);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.CreationTime', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.LastUpdatedTime', props);
    return resource.getResponseField('Table.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteDescribeTableTableRetentionProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteDescribeTableRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays', props);
    return resource.getResponseField('Table.RetentionProperties.MagneticStoreRetentionPeriodInDays') as unknown as number;
  }

}

export class TimestreamWriteListDatabases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteListDatabasesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatabases.Databases', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TimestreamWriteListTables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteListTablesRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTables.Tables', props);
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
          DatabaseName: this.input.databaseName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class TimestreamWriteListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.TimestreamWriteTag[];
  }

}

export class TimestreamWriteUpdateDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteUpdateDatabaseRequest) {
    super(scope, id);
  }

  public get database(): TimestreamWriteUpdateDatabaseDatabase {
    return new TimestreamWriteUpdateDatabaseDatabase(this, 'Database', this.__resources, this.input);
  }

}

export class TimestreamWriteUpdateDatabaseDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteUpdateDatabaseRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDatabase.Database.Arn', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDatabase.Database.DatabaseName', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDatabase.Database.TableCount', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDatabase.Database.KmsKeyId', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDatabase.Database.CreationTime', props);
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
          DatabaseName: this.input.databaseName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDatabase.Database.LastUpdatedTime', props);
    return resource.getResponseField('Database.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteUpdateTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteUpdateTableRequest) {
    super(scope, id);
  }

  public get table(): TimestreamWriteUpdateTableTable {
    return new TimestreamWriteUpdateTableTable(this, 'Table', this.__resources, this.input);
  }

}

export class TimestreamWriteUpdateTableTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteUpdateTableRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.Arn', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.TableName', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.DatabaseName', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.TableStatus', props);
    return resource.getResponseField('Table.TableStatus') as unknown as string;
  }

  public get retentionProperties(): TimestreamWriteUpdateTableTableRetentionProperties {
    return new TimestreamWriteUpdateTableTableRetentionProperties(this, 'RetentionProperties', this.__resources, this.input);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.CreationTime', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.LastUpdatedTime', props);
    return resource.getResponseField('Table.LastUpdatedTime') as unknown as string;
  }

}

export class TimestreamWriteUpdateTableTableRetentionProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TimestreamWriteUpdateTableRequest) {
    super(scope, id);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.RetentionProperties.MemoryStoreRetentionPeriodInHours', props);
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
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          RetentionProperties: {
            MemoryStoreRetentionPeriodInHours: this.input.retentionProperties.memoryStoreRetentionPeriodInHours,
            MagneticStoreRetentionPeriodInDays: this.input.retentionProperties.magneticStoreRetentionPeriodInDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTable.Table.RetentionProperties.MagneticStoreRetentionPeriodInDays', props);
    return resource.getResponseField('Table.RetentionProperties.MagneticStoreRetentionPeriodInDays') as unknown as number;
  }

}

