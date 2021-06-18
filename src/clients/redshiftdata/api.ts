import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RedshiftDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelStatement(input: shapes.RedshiftDataCancelStatementRequest): RedshiftDataCancelStatement {
    return new RedshiftDataCancelStatement(this, 'CancelStatement', this.__resources, input);
  }

  public describeStatement(input: shapes.RedshiftDataDescribeStatementRequest): RedshiftDataDescribeStatement {
    return new RedshiftDataDescribeStatement(this, 'DescribeStatement', this.__resources, input);
  }

  public describeTable(input: shapes.RedshiftDataDescribeTableRequest): RedshiftDataDescribeTable {
    return new RedshiftDataDescribeTable(this, 'DescribeTable', this.__resources, input);
  }

  public executeStatement(input: shapes.RedshiftDataExecuteStatementInput): RedshiftDataExecuteStatement {
    return new RedshiftDataExecuteStatement(this, 'ExecuteStatement', this.__resources, input);
  }

  public fetchStatementResult(input: shapes.RedshiftDataGetStatementResultRequest): RedshiftDataFetchStatementResult {
    return new RedshiftDataFetchStatementResult(this, 'FetchStatementResult', this.__resources, input);
  }

  public listDatabases(input: shapes.RedshiftDataListDatabasesRequest): RedshiftDataListDatabases {
    return new RedshiftDataListDatabases(this, 'ListDatabases', this.__resources, input);
  }

  public listSchemas(input: shapes.RedshiftDataListSchemasRequest): RedshiftDataListSchemas {
    return new RedshiftDataListSchemas(this, 'ListSchemas', this.__resources, input);
  }

  public listStatements(input: shapes.RedshiftDataListStatementsRequest): RedshiftDataListStatements {
    return new RedshiftDataListStatements(this, 'ListStatements', this.__resources, input);
  }

  public listTables(input: shapes.RedshiftDataListTablesRequest): RedshiftDataListTables {
    return new RedshiftDataListTables(this, 'ListTables', this.__resources, input);
  }

}

export class RedshiftDataCancelStatement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataCancelStatementRequest) {
    super(scope, id);
  }

  public get status(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.CancelStatement.Status'),
        outputPath: 'Status',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelStatement.Status', props);
    return resource.getResponseField('Status') as unknown as boolean;
  }

}

export class RedshiftDataDescribeStatement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataDescribeStatementRequest) {
    super(scope, id);
  }

  public get clusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.ClusterIdentifier'),
        outputPath: 'ClusterIdentifier',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.ClusterIdentifier', props);
    return resource.getResponseField('ClusterIdentifier') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Database'),
        outputPath: 'Database',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.Database', props);
    return resource.getResponseField('Database') as unknown as string;
  }

  public get dbUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.DbUser'),
        outputPath: 'DbUser',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.DbUser', props);
    return resource.getResponseField('DbUser') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Duration'),
        outputPath: 'Duration',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.Duration', props);
    return resource.getResponseField('Duration') as unknown as number;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Error'),
        outputPath: 'Error',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get queryString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.QueryString'),
        outputPath: 'QueryString',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.QueryString', props);
    return resource.getResponseField('QueryString') as unknown as string;
  }

  public get redshiftPid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.RedshiftPid'),
        outputPath: 'RedshiftPid',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.RedshiftPid', props);
    return resource.getResponseField('RedshiftPid') as unknown as number;
  }

  public get redshiftQueryId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.RedshiftQueryId'),
        outputPath: 'RedshiftQueryId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.RedshiftQueryId', props);
    return resource.getResponseField('RedshiftQueryId') as unknown as number;
  }

  public get resultRows(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.ResultRows'),
        outputPath: 'ResultRows',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.ResultRows', props);
    return resource.getResponseField('ResultRows') as unknown as number;
  }

  public get resultSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.ResultSize'),
        outputPath: 'ResultSize',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.ResultSize', props);
    return resource.getResponseField('ResultSize') as unknown as number;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.SecretArn'),
        outputPath: 'SecretArn',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.SecretArn', props);
    return resource.getResponseField('SecretArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Status'),
        outputPath: 'Status',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStatement.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class RedshiftDataDescribeTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataDescribeTableRequest) {
    super(scope, id);
  }

  public get columnList(): shapes.RedshiftDataColumnMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeTable.ColumnList'),
        outputPath: 'ColumnList',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Schema: this.input.schema,
          SecretArn: this.input.secretArn,
          Table: this.input.table,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.ColumnList', props);
    return resource.getResponseField('ColumnList') as unknown as shapes.RedshiftDataColumnMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeTable.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Schema: this.input.schema,
          SecretArn: this.input.secretArn,
          Table: this.input.table,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeTable.TableName'),
        outputPath: 'TableName',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Schema: this.input.schema,
          SecretArn: this.input.secretArn,
          Table: this.input.table,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTable.TableName', props);
    return resource.getResponseField('TableName') as unknown as string;
  }

}

export class RedshiftDataExecuteStatement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataExecuteStatementInput) {
    super(scope, id);
  }

  public get clusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.ClusterIdentifier'),
        outputPath: 'ClusterIdentifier',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          SecretArn: this.input.secretArn,
          Sql: this.input.sql,
          StatementName: this.input.statementName,
          WithEvent: this.input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.ClusterIdentifier', props);
    return resource.getResponseField('ClusterIdentifier') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          SecretArn: this.input.secretArn,
          Sql: this.input.sql,
          StatementName: this.input.statementName,
          WithEvent: this.input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.Database'),
        outputPath: 'Database',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          SecretArn: this.input.secretArn,
          Sql: this.input.sql,
          StatementName: this.input.statementName,
          WithEvent: this.input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.Database', props);
    return resource.getResponseField('Database') as unknown as string;
  }

  public get dbUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.DbUser'),
        outputPath: 'DbUser',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          SecretArn: this.input.secretArn,
          Sql: this.input.sql,
          StatementName: this.input.statementName,
          WithEvent: this.input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.DbUser', props);
    return resource.getResponseField('DbUser') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.Id'),
        outputPath: 'Id',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          SecretArn: this.input.secretArn,
          Sql: this.input.sql,
          StatementName: this.input.statementName,
          WithEvent: this.input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.SecretArn'),
        outputPath: 'SecretArn',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          SecretArn: this.input.secretArn,
          Sql: this.input.sql,
          StatementName: this.input.statementName,
          WithEvent: this.input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteStatement.SecretArn', props);
    return resource.getResponseField('SecretArn') as unknown as string;
  }

}

export class RedshiftDataFetchStatementResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataGetStatementResultRequest) {
    super(scope, id);
  }

  public get columnMetadata(): shapes.RedshiftDataColumnMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.ColumnMetadata'),
        outputPath: 'ColumnMetadata',
        parameters: {
          Id: this.input.id,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatementResult.ColumnMetadata', props);
    return resource.getResponseField('ColumnMetadata') as unknown as shapes.RedshiftDataColumnMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Id: this.input.id,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatementResult.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get records(): shapes.RedshiftDataField[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.Records'),
        outputPath: 'Records',
        parameters: {
          Id: this.input.id,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatementResult.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.RedshiftDataField[][];
  }

  public get totalNumRows(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.TotalNumRows'),
        outputPath: 'TotalNumRows',
        parameters: {
          Id: this.input.id,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStatementResult.TotalNumRows', props);
    return resource.getResponseField('TotalNumRows') as unknown as number;
  }

}

export class RedshiftDataListDatabases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataListDatabasesRequest) {
    super(scope, id);
  }

  public get databases(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListDatabases.Databases'),
        outputPath: 'Databases',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SecretArn: this.input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatabases.Databases', props);
    return resource.getResponseField('Databases') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListDatabases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SecretArn: this.input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class RedshiftDataListSchemas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataListSchemasRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SchemaPattern: this.input.schemaPattern,
          SecretArn: this.input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemas(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SchemaPattern: this.input.schemaPattern,
          SecretArn: this.input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as string[];
  }

}

export class RedshiftDataListStatements extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataListStatementsRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStatements',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListStatements.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          StatementName: this.input.statementName,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStatements.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get statements(): shapes.RedshiftDataStatementData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStatements',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListStatements.Statements'),
        outputPath: 'Statements',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          StatementName: this.input.statementName,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStatements.Statements', props);
    return resource.getResponseField('Statements') as unknown as shapes.RedshiftDataStatementData[];
  }

}

export class RedshiftDataListTables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RedshiftDataListTablesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListTables.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SchemaPattern: this.input.schemaPattern,
          SecretArn: this.input.secretArn,
          TablePattern: this.input.tablePattern,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tables(): shapes.RedshiftDataTableMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListTables.Tables'),
        outputPath: 'Tables',
        parameters: {
          ClusterIdentifier: this.input.clusterIdentifier,
          Database: this.input.database,
          DbUser: this.input.dbUser,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SchemaPattern: this.input.schemaPattern,
          SecretArn: this.input.secretArn,
          TablePattern: this.input.tablePattern,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTables.Tables', props);
    return resource.getResponseField('Tables') as unknown as shapes.RedshiftDataTableMember[];
  }

}

