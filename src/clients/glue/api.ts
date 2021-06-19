import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GlueClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCreatePartition(input: shapes.GlueBatchCreatePartitionRequest): GlueResponsesBatchCreatePartition {
    return new GlueResponsesBatchCreatePartition(this, this.__resources, input);
  }

  public batchDeleteConnection(input: shapes.GlueBatchDeleteConnectionRequest): GlueResponsesBatchDeleteConnection {
    return new GlueResponsesBatchDeleteConnection(this, this.__resources, input);
  }

  public batchDeletePartition(input: shapes.GlueBatchDeletePartitionRequest): GlueResponsesBatchDeletePartition {
    return new GlueResponsesBatchDeletePartition(this, this.__resources, input);
  }

  public batchDeleteTable(input: shapes.GlueBatchDeleteTableRequest): GlueResponsesBatchDeleteTable {
    return new GlueResponsesBatchDeleteTable(this, this.__resources, input);
  }

  public batchDeleteTableVersion(input: shapes.GlueBatchDeleteTableVersionRequest): GlueResponsesBatchDeleteTableVersion {
    return new GlueResponsesBatchDeleteTableVersion(this, this.__resources, input);
  }

  public batchGetCrawlers(input: shapes.GlueBatchGetCrawlersRequest): GlueResponsesBatchGetCrawlers {
    return new GlueResponsesBatchGetCrawlers(this, this.__resources, input);
  }

  public batchGetDevEndpoints(input: shapes.GlueBatchGetDevEndpointsRequest): GlueResponsesBatchGetDevEndpoints {
    return new GlueResponsesBatchGetDevEndpoints(this, this.__resources, input);
  }

  public batchGetJobs(input: shapes.GlueBatchGetJobsRequest): GlueResponsesBatchGetJobs {
    return new GlueResponsesBatchGetJobs(this, this.__resources, input);
  }

  public batchGetPartition(input: shapes.GlueBatchGetPartitionRequest): GlueResponsesBatchGetPartition {
    return new GlueResponsesBatchGetPartition(this, this.__resources, input);
  }

  public batchGetTriggers(input: shapes.GlueBatchGetTriggersRequest): GlueResponsesBatchGetTriggers {
    return new GlueResponsesBatchGetTriggers(this, this.__resources, input);
  }

  public batchGetWorkflows(input: shapes.GlueBatchGetWorkflowsRequest): GlueResponsesBatchGetWorkflows {
    return new GlueResponsesBatchGetWorkflows(this, this.__resources, input);
  }

  public batchStopJobRun(input: shapes.GlueBatchStopJobRunRequest): GlueResponsesBatchStopJobRun {
    return new GlueResponsesBatchStopJobRun(this, this.__resources, input);
  }

  public batchUpdatePartition(input: shapes.GlueBatchUpdatePartitionRequest): GlueResponsesBatchUpdatePartition {
    return new GlueResponsesBatchUpdatePartition(this, this.__resources, input);
  }

  public cancelMlTaskRun(input: shapes.GlueCancelMlTaskRunRequest): GlueResponsesCancelMlTaskRun {
    return new GlueResponsesCancelMlTaskRun(this, this.__resources, input);
  }

  public checkSchemaVersionValidity(input: shapes.GlueCheckSchemaVersionValidityInput): GlueResponsesCheckSchemaVersionValidity {
    return new GlueResponsesCheckSchemaVersionValidity(this, this.__resources, input);
  }

  public createClassifier(input: shapes.GlueCreateClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateClassifier'),
        parameters: {
          GrokClassifier: {
            Classification: input.grokClassifier?.classification,
            Name: input.grokClassifier?.name,
            GrokPattern: input.grokClassifier?.grokPattern,
            CustomPatterns: input.grokClassifier?.customPatterns,
          },
          XMLClassifier: {
            Classification: input.xmlClassifier?.classification,
            Name: input.xmlClassifier?.name,
            RowTag: input.xmlClassifier?.rowTag,
          },
          JsonClassifier: {
            Name: input.jsonClassifier?.name,
            JsonPath: input.jsonClassifier?.jsonPath,
          },
          CsvClassifier: {
            Name: input.csvClassifier?.name,
            Delimiter: input.csvClassifier?.delimiter,
            QuoteSymbol: input.csvClassifier?.quoteSymbol,
            ContainsHeader: input.csvClassifier?.containsHeader,
            Header: input.csvClassifier?.header,
            DisableValueTrimming: input.csvClassifier?.disableValueTrimming,
            AllowSingleColumn: input.csvClassifier?.allowSingleColumn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateClassifier', props);
  }

  public createConnection(input: shapes.GlueCreateConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateConnection'),
        parameters: {
          CatalogId: input.catalogId,
          ConnectionInput: {
            Name: input.connectionInput.name,
            Description: input.connectionInput.description,
            ConnectionType: input.connectionInput.connectionType,
            MatchCriteria: input.connectionInput.matchCriteria,
            ConnectionProperties: input.connectionInput.connectionProperties,
            PhysicalConnectionRequirements: {
              SubnetId: input.connectionInput.physicalConnectionRequirements?.subnetId,
              SecurityGroupIdList: input.connectionInput.physicalConnectionRequirements?.securityGroupIdList,
              AvailabilityZone: input.connectionInput.physicalConnectionRequirements?.availabilityZone,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateConnection', props);
  }

  public createCrawler(input: shapes.GlueCreateCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateCrawler'),
        parameters: {
          Name: input.name,
          Role: input.role,
          DatabaseName: input.databaseName,
          Description: input.description,
          Targets: {
            S3Targets: input.targets.s3Targets,
            JdbcTargets: input.targets.jdbcTargets,
            MongoDBTargets: input.targets.mongoDbTargets,
            DynamoDBTargets: input.targets.dynamoDbTargets,
            CatalogTargets: input.targets.catalogTargets,
          },
          Schedule: input.schedule,
          Classifiers: input.classifiers,
          TablePrefix: input.tablePrefix,
          SchemaChangePolicy: {
            UpdateBehavior: input.schemaChangePolicy?.updateBehavior,
            DeleteBehavior: input.schemaChangePolicy?.deleteBehavior,
          },
          RecrawlPolicy: {
            RecrawlBehavior: input.recrawlPolicy?.recrawlBehavior,
          },
          LineageConfiguration: {
            CrawlerLineageSettings: input.lineageConfiguration?.crawlerLineageSettings,
          },
          Configuration: input.configuration,
          CrawlerSecurityConfiguration: input.crawlerSecurityConfiguration,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateCrawler', props);
  }

  public createDatabase(input: shapes.GlueCreateDatabaseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDatabase'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseInput: {
            Name: input.databaseInput.name,
            Description: input.databaseInput.description,
            LocationUri: input.databaseInput.locationUri,
            Parameters: input.databaseInput.parameters,
            CreateTableDefaultPermissions: input.databaseInput.createTableDefaultPermissions,
            TargetDatabase: {
              CatalogId: input.databaseInput.targetDatabase?.catalogId,
              DatabaseName: input.databaseInput.targetDatabase?.databaseName,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateDatabase', props);
  }

  public createDevEndpoint(input: shapes.GlueCreateDevEndpointRequest): GlueResponsesCreateDevEndpoint {
    return new GlueResponsesCreateDevEndpoint(this, this.__resources, input);
  }

  public createJob(input: shapes.GlueCreateJobRequest): GlueResponsesCreateJob {
    return new GlueResponsesCreateJob(this, this.__resources, input);
  }

  public createMlTransform(input: shapes.GlueCreateMlTransformRequest): GlueResponsesCreateMlTransform {
    return new GlueResponsesCreateMlTransform(this, this.__resources, input);
  }

  public createPartition(input: shapes.GlueCreatePartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreatePartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionInput: {
            Values: input.partitionInput.values,
            LastAccessTime: input.partitionInput.lastAccessTime,
            StorageDescriptor: {
              Columns: input.partitionInput.storageDescriptor?.columns,
              Location: input.partitionInput.storageDescriptor?.location,
              InputFormat: input.partitionInput.storageDescriptor?.inputFormat,
              OutputFormat: input.partitionInput.storageDescriptor?.outputFormat,
              Compressed: input.partitionInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.partitionInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.partitionInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.partitionInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.partitionInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.partitionInput.storageDescriptor?.bucketColumns,
              SortColumns: input.partitionInput.storageDescriptor?.sortColumns,
              Parameters: input.partitionInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.partitionInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            Parameters: input.partitionInput.parameters,
            LastAnalyzedTime: input.partitionInput.lastAnalyzedTime,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreatePartition', props);
  }

  public createPartitionIndex(input: shapes.GlueCreatePartitionIndexRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPartitionIndex',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreatePartitionIndex'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionIndex: {
            Keys: input.partitionIndex.keys,
            IndexName: input.partitionIndex.indexName,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreatePartitionIndex', props);
  }

  public createRegistry(input: shapes.GlueCreateRegistryInput): GlueResponsesCreateRegistry {
    return new GlueResponsesCreateRegistry(this, this.__resources, input);
  }

  public createSchema(input: shapes.GlueCreateSchemaInput): GlueResponsesCreateSchema {
    return new GlueResponsesCreateSchema(this, this.__resources, input);
  }

  public createScript(input: shapes.GlueCreateScriptRequest): GlueResponsesCreateScript {
    return new GlueResponsesCreateScript(this, this.__resources, input);
  }

  public createSecurityConfiguration(input: shapes.GlueCreateSecurityConfigurationRequest): GlueResponsesCreateSecurityConfiguration {
    return new GlueResponsesCreateSecurityConfiguration(this, this.__resources, input);
  }

  public createTable(input: shapes.GlueCreateTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableInput: {
            Name: input.tableInput.name,
            Description: input.tableInput.description,
            Owner: input.tableInput.owner,
            LastAccessTime: input.tableInput.lastAccessTime,
            LastAnalyzedTime: input.tableInput.lastAnalyzedTime,
            Retention: input.tableInput.retention,
            StorageDescriptor: {
              Columns: input.tableInput.storageDescriptor?.columns,
              Location: input.tableInput.storageDescriptor?.location,
              InputFormat: input.tableInput.storageDescriptor?.inputFormat,
              OutputFormat: input.tableInput.storageDescriptor?.outputFormat,
              Compressed: input.tableInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.tableInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.tableInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.tableInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.tableInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.tableInput.storageDescriptor?.bucketColumns,
              SortColumns: input.tableInput.storageDescriptor?.sortColumns,
              Parameters: input.tableInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.tableInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            PartitionKeys: input.tableInput.partitionKeys,
            ViewOriginalText: input.tableInput.viewOriginalText,
            ViewExpandedText: input.tableInput.viewExpandedText,
            TableType: input.tableInput.tableType,
            Parameters: input.tableInput.parameters,
            TargetTable: {
              CatalogId: input.tableInput.targetTable?.catalogId,
              DatabaseName: input.tableInput.targetTable?.databaseName,
              Name: input.tableInput.targetTable?.name,
            },
          },
          PartitionIndexes: input.partitionIndexes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateTable', props);
  }

  public createTrigger(input: shapes.GlueCreateTriggerRequest): GlueResponsesCreateTrigger {
    return new GlueResponsesCreateTrigger(this, this.__resources, input);
  }

  public createUserDefinedFunction(input: shapes.GlueCreateUserDefinedFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateUserDefinedFunction'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          FunctionInput: {
            FunctionName: input.functionInput.functionName,
            ClassName: input.functionInput.className,
            OwnerName: input.functionInput.ownerName,
            OwnerType: input.functionInput.ownerType,
            ResourceUris: input.functionInput.resourceUris,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateUserDefinedFunction', props);
  }

  public createWorkflow(input: shapes.GlueCreateWorkflowRequest): GlueResponsesCreateWorkflow {
    return new GlueResponsesCreateWorkflow(this, this.__resources, input);
  }

  public deleteClassifier(input: shapes.GlueDeleteClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteClassifier'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteClassifier', props);
  }

  public deleteColumnStatisticsForPartition(input: shapes.GlueDeleteColumnStatisticsForPartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteColumnStatisticsForPartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionValues: input.partitionValues,
          ColumnName: input.columnName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteColumnStatisticsForPartition', props);
  }

  public deleteColumnStatisticsForTable(input: shapes.GlueDeleteColumnStatisticsForTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteColumnStatisticsForTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          ColumnName: input.columnName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteColumnStatisticsForTable', props);
  }

  public deleteConnection(input: shapes.GlueDeleteConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteConnection'),
        parameters: {
          CatalogId: input.catalogId,
          ConnectionName: input.connectionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnection', props);
  }

  public deleteCrawler(input: shapes.GlueDeleteCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteCrawler'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCrawler', props);
  }

  public deleteDatabase(input: shapes.GlueDeleteDatabaseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteDatabase'),
        parameters: {
          CatalogId: input.catalogId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDatabase', props);
  }

  public deleteDevEndpoint(input: shapes.GlueDeleteDevEndpointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteDevEndpoint'),
        parameters: {
          EndpointName: input.endpointName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDevEndpoint', props);
  }

  public deleteJob(input: shapes.GlueDeleteJobRequest): GlueResponsesDeleteJob {
    return new GlueResponsesDeleteJob(this, this.__resources, input);
  }

  public deleteMlTransform(input: shapes.GlueDeleteMlTransformRequest): GlueResponsesDeleteMlTransform {
    return new GlueResponsesDeleteMlTransform(this, this.__resources, input);
  }

  public deletePartition(input: shapes.GlueDeletePartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeletePartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionValues: input.partitionValues,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePartition', props);
  }

  public deletePartitionIndex(input: shapes.GlueDeletePartitionIndexRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePartitionIndex',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeletePartitionIndex'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          IndexName: input.indexName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePartitionIndex', props);
  }

  public deleteRegistry(input: shapes.GlueDeleteRegistryInput): GlueResponsesDeleteRegistry {
    return new GlueResponsesDeleteRegistry(this, this.__resources, input);
  }

  public deleteResourcePolicy(input: shapes.GlueDeleteResourcePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteResourcePolicy'),
        parameters: {
          PolicyHashCondition: input.policyHashCondition,
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourcePolicy', props);
  }

  public deleteSchema(input: shapes.GlueDeleteSchemaInput): GlueResponsesDeleteSchema {
    return new GlueResponsesDeleteSchema(this, this.__resources, input);
  }

  public deleteSchemaVersions(input: shapes.GlueDeleteSchemaVersionsInput): GlueResponsesDeleteSchemaVersions {
    return new GlueResponsesDeleteSchemaVersions(this, this.__resources, input);
  }

  public deleteSecurityConfiguration(input: shapes.GlueDeleteSecurityConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSecurityConfiguration'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSecurityConfiguration', props);
  }

  public deleteTable(input: shapes.GlueDeleteTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTable', props);
  }

  public deleteTableVersion(input: shapes.GlueDeleteTableVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteTableVersion'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          VersionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTableVersion', props);
  }

  public deleteTrigger(input: shapes.GlueDeleteTriggerRequest): GlueResponsesDeleteTrigger {
    return new GlueResponsesDeleteTrigger(this, this.__resources, input);
  }

  public deleteUserDefinedFunction(input: shapes.GlueDeleteUserDefinedFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteUserDefinedFunction'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          FunctionName: input.functionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUserDefinedFunction', props);
  }

  public deleteWorkflow(input: shapes.GlueDeleteWorkflowRequest): GlueResponsesDeleteWorkflow {
    return new GlueResponsesDeleteWorkflow(this, this.__resources, input);
  }

  public fetchCatalogImportStatus(input: shapes.GlueGetCatalogImportStatusRequest): GlueResponsesFetchCatalogImportStatus {
    return new GlueResponsesFetchCatalogImportStatus(this, this.__resources, input);
  }

  public fetchClassifier(input: shapes.GlueGetClassifierRequest): GlueResponsesFetchClassifier {
    return new GlueResponsesFetchClassifier(this, this.__resources, input);
  }

  public fetchClassifiers(input: shapes.GlueGetClassifiersRequest): GlueResponsesFetchClassifiers {
    return new GlueResponsesFetchClassifiers(this, this.__resources, input);
  }

  public fetchColumnStatisticsForPartition(input: shapes.GlueGetColumnStatisticsForPartitionRequest): GlueResponsesFetchColumnStatisticsForPartition {
    return new GlueResponsesFetchColumnStatisticsForPartition(this, this.__resources, input);
  }

  public fetchColumnStatisticsForTable(input: shapes.GlueGetColumnStatisticsForTableRequest): GlueResponsesFetchColumnStatisticsForTable {
    return new GlueResponsesFetchColumnStatisticsForTable(this, this.__resources, input);
  }

  public fetchConnection(input: shapes.GlueGetConnectionRequest): GlueResponsesFetchConnection {
    return new GlueResponsesFetchConnection(this, this.__resources, input);
  }

  public fetchConnections(input: shapes.GlueGetConnectionsRequest): GlueResponsesFetchConnections {
    return new GlueResponsesFetchConnections(this, this.__resources, input);
  }

  public fetchCrawler(input: shapes.GlueGetCrawlerRequest): GlueResponsesFetchCrawler {
    return new GlueResponsesFetchCrawler(this, this.__resources, input);
  }

  public fetchCrawlerMetrics(input: shapes.GlueGetCrawlerMetricsRequest): GlueResponsesFetchCrawlerMetrics {
    return new GlueResponsesFetchCrawlerMetrics(this, this.__resources, input);
  }

  public fetchCrawlers(input: shapes.GlueGetCrawlersRequest): GlueResponsesFetchCrawlers {
    return new GlueResponsesFetchCrawlers(this, this.__resources, input);
  }

  public fetchDataCatalogEncryptionSettings(input: shapes.GlueGetDataCatalogEncryptionSettingsRequest): GlueResponsesFetchDataCatalogEncryptionSettings {
    return new GlueResponsesFetchDataCatalogEncryptionSettings(this, this.__resources, input);
  }

  public fetchDatabase(input: shapes.GlueGetDatabaseRequest): GlueResponsesFetchDatabase {
    return new GlueResponsesFetchDatabase(this, this.__resources, input);
  }

  public fetchDatabases(input: shapes.GlueGetDatabasesRequest): GlueResponsesFetchDatabases {
    return new GlueResponsesFetchDatabases(this, this.__resources, input);
  }

  public fetchDataflowGraph(input: shapes.GlueGetDataflowGraphRequest): GlueResponsesFetchDataflowGraph {
    return new GlueResponsesFetchDataflowGraph(this, this.__resources, input);
  }

  public fetchDevEndpoint(input: shapes.GlueGetDevEndpointRequest): GlueResponsesFetchDevEndpoint {
    return new GlueResponsesFetchDevEndpoint(this, this.__resources, input);
  }

  public fetchDevEndpoints(input: shapes.GlueGetDevEndpointsRequest): GlueResponsesFetchDevEndpoints {
    return new GlueResponsesFetchDevEndpoints(this, this.__resources, input);
  }

  public fetchJob(input: shapes.GlueGetJobRequest): GlueResponsesFetchJob {
    return new GlueResponsesFetchJob(this, this.__resources, input);
  }

  public fetchJobBookmark(input: shapes.GlueGetJobBookmarkRequest): GlueResponsesFetchJobBookmark {
    return new GlueResponsesFetchJobBookmark(this, this.__resources, input);
  }

  public fetchJobRun(input: shapes.GlueGetJobRunRequest): GlueResponsesFetchJobRun {
    return new GlueResponsesFetchJobRun(this, this.__resources, input);
  }

  public fetchJobRuns(input: shapes.GlueGetJobRunsRequest): GlueResponsesFetchJobRuns {
    return new GlueResponsesFetchJobRuns(this, this.__resources, input);
  }

  public fetchJobs(input: shapes.GlueGetJobsRequest): GlueResponsesFetchJobs {
    return new GlueResponsesFetchJobs(this, this.__resources, input);
  }

  public fetchMlTaskRun(input: shapes.GlueGetMlTaskRunRequest): GlueResponsesFetchMlTaskRun {
    return new GlueResponsesFetchMlTaskRun(this, this.__resources, input);
  }

  public fetchMlTaskRuns(input: shapes.GlueGetMlTaskRunsRequest): GlueResponsesFetchMlTaskRuns {
    return new GlueResponsesFetchMlTaskRuns(this, this.__resources, input);
  }

  public fetchMlTransform(input: shapes.GlueGetMlTransformRequest): GlueResponsesFetchMlTransform {
    return new GlueResponsesFetchMlTransform(this, this.__resources, input);
  }

  public fetchMlTransforms(input: shapes.GlueGetMlTransformsRequest): GlueResponsesFetchMlTransforms {
    return new GlueResponsesFetchMlTransforms(this, this.__resources, input);
  }

  public fetchMapping(input: shapes.GlueGetMappingRequest): GlueResponsesFetchMapping {
    return new GlueResponsesFetchMapping(this, this.__resources, input);
  }

  public fetchPartition(input: shapes.GlueGetPartitionRequest): GlueResponsesFetchPartition {
    return new GlueResponsesFetchPartition(this, this.__resources, input);
  }

  public fetchPartitionIndexes(input: shapes.GlueGetPartitionIndexesRequest): GlueResponsesFetchPartitionIndexes {
    return new GlueResponsesFetchPartitionIndexes(this, this.__resources, input);
  }

  public fetchPartitions(input: shapes.GlueGetPartitionsRequest): GlueResponsesFetchPartitions {
    return new GlueResponsesFetchPartitions(this, this.__resources, input);
  }

  public fetchPlan(input: shapes.GlueGetPlanRequest): GlueResponsesFetchPlan {
    return new GlueResponsesFetchPlan(this, this.__resources, input);
  }

  public fetchRegistry(input: shapes.GlueGetRegistryInput): GlueResponsesFetchRegistry {
    return new GlueResponsesFetchRegistry(this, this.__resources, input);
  }

  public fetchResourcePolicies(input: shapes.GlueGetResourcePoliciesRequest): GlueResponsesFetchResourcePolicies {
    return new GlueResponsesFetchResourcePolicies(this, this.__resources, input);
  }

  public fetchResourcePolicy(input: shapes.GlueGetResourcePolicyRequest): GlueResponsesFetchResourcePolicy {
    return new GlueResponsesFetchResourcePolicy(this, this.__resources, input);
  }

  public fetchSchema(input: shapes.GlueGetSchemaInput): GlueResponsesFetchSchema {
    return new GlueResponsesFetchSchema(this, this.__resources, input);
  }

  public fetchSchemaByDefinition(input: shapes.GlueGetSchemaByDefinitionInput): GlueResponsesFetchSchemaByDefinition {
    return new GlueResponsesFetchSchemaByDefinition(this, this.__resources, input);
  }

  public fetchSchemaVersion(input: shapes.GlueGetSchemaVersionInput): GlueResponsesFetchSchemaVersion {
    return new GlueResponsesFetchSchemaVersion(this, this.__resources, input);
  }

  public fetchSchemaVersionsDiff(input: shapes.GlueGetSchemaVersionsDiffInput): GlueResponsesFetchSchemaVersionsDiff {
    return new GlueResponsesFetchSchemaVersionsDiff(this, this.__resources, input);
  }

  public fetchSecurityConfiguration(input: shapes.GlueGetSecurityConfigurationRequest): GlueResponsesFetchSecurityConfiguration {
    return new GlueResponsesFetchSecurityConfiguration(this, this.__resources, input);
  }

  public fetchSecurityConfigurations(input: shapes.GlueGetSecurityConfigurationsRequest): GlueResponsesFetchSecurityConfigurations {
    return new GlueResponsesFetchSecurityConfigurations(this, this.__resources, input);
  }

  public fetchTable(input: shapes.GlueGetTableRequest): GlueResponsesFetchTable {
    return new GlueResponsesFetchTable(this, this.__resources, input);
  }

  public fetchTableVersion(input: shapes.GlueGetTableVersionRequest): GlueResponsesFetchTableVersion {
    return new GlueResponsesFetchTableVersion(this, this.__resources, input);
  }

  public fetchTableVersions(input: shapes.GlueGetTableVersionsRequest): GlueResponsesFetchTableVersions {
    return new GlueResponsesFetchTableVersions(this, this.__resources, input);
  }

  public fetchTables(input: shapes.GlueGetTablesRequest): GlueResponsesFetchTables {
    return new GlueResponsesFetchTables(this, this.__resources, input);
  }

  public fetchTags(input: shapes.GlueGetTagsRequest): GlueResponsesFetchTags {
    return new GlueResponsesFetchTags(this, this.__resources, input);
  }

  public fetchTrigger(input: shapes.GlueGetTriggerRequest): GlueResponsesFetchTrigger {
    return new GlueResponsesFetchTrigger(this, this.__resources, input);
  }

  public fetchTriggers(input: shapes.GlueGetTriggersRequest): GlueResponsesFetchTriggers {
    return new GlueResponsesFetchTriggers(this, this.__resources, input);
  }

  public fetchUserDefinedFunction(input: shapes.GlueGetUserDefinedFunctionRequest): GlueResponsesFetchUserDefinedFunction {
    return new GlueResponsesFetchUserDefinedFunction(this, this.__resources, input);
  }

  public fetchUserDefinedFunctions(input: shapes.GlueGetUserDefinedFunctionsRequest): GlueResponsesFetchUserDefinedFunctions {
    return new GlueResponsesFetchUserDefinedFunctions(this, this.__resources, input);
  }

  public fetchWorkflow(input: shapes.GlueGetWorkflowRequest): GlueResponsesFetchWorkflow {
    return new GlueResponsesFetchWorkflow(this, this.__resources, input);
  }

  public fetchWorkflowRun(input: shapes.GlueGetWorkflowRunRequest): GlueResponsesFetchWorkflowRun {
    return new GlueResponsesFetchWorkflowRun(this, this.__resources, input);
  }

  public fetchWorkflowRunProperties(input: shapes.GlueGetWorkflowRunPropertiesRequest): GlueResponsesFetchWorkflowRunProperties {
    return new GlueResponsesFetchWorkflowRunProperties(this, this.__resources, input);
  }

  public fetchWorkflowRuns(input: shapes.GlueGetWorkflowRunsRequest): GlueResponsesFetchWorkflowRuns {
    return new GlueResponsesFetchWorkflowRuns(this, this.__resources, input);
  }

  public importCatalogToGlue(input: shapes.GlueImportCatalogToGlueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importCatalogToGlue',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ImportCatalogToGlue'),
        parameters: {
          CatalogId: input.catalogId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ImportCatalogToGlue', props);
  }

  public listCrawlers(input: shapes.GlueListCrawlersRequest): GlueResponsesListCrawlers {
    return new GlueResponsesListCrawlers(this, this.__resources, input);
  }

  public listDevEndpoints(input: shapes.GlueListDevEndpointsRequest): GlueResponsesListDevEndpoints {
    return new GlueResponsesListDevEndpoints(this, this.__resources, input);
  }

  public listJobs(input: shapes.GlueListJobsRequest): GlueResponsesListJobs {
    return new GlueResponsesListJobs(this, this.__resources, input);
  }

  public listMlTransforms(input: shapes.GlueListMlTransformsRequest): GlueResponsesListMlTransforms {
    return new GlueResponsesListMlTransforms(this, this.__resources, input);
  }

  public listRegistries(input: shapes.GlueListRegistriesInput): GlueResponsesListRegistries {
    return new GlueResponsesListRegistries(this, this.__resources, input);
  }

  public listSchemaVersions(input: shapes.GlueListSchemaVersionsInput): GlueResponsesListSchemaVersions {
    return new GlueResponsesListSchemaVersions(this, this.__resources, input);
  }

  public listSchemas(input: shapes.GlueListSchemasInput): GlueResponsesListSchemas {
    return new GlueResponsesListSchemas(this, this.__resources, input);
  }

  public listTriggers(input: shapes.GlueListTriggersRequest): GlueResponsesListTriggers {
    return new GlueResponsesListTriggers(this, this.__resources, input);
  }

  public listWorkflows(input: shapes.GlueListWorkflowsRequest): GlueResponsesListWorkflows {
    return new GlueResponsesListWorkflows(this, this.__resources, input);
  }

  public putDataCatalogEncryptionSettings(input: shapes.GluePutDataCatalogEncryptionSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutDataCatalogEncryptionSettings'),
        parameters: {
          CatalogId: input.catalogId,
          DataCatalogEncryptionSettings: {
            EncryptionAtRest: {
              CatalogEncryptionMode: input.dataCatalogEncryptionSettings.encryptionAtRest?.catalogEncryptionMode,
              SseAwsKmsKeyId: input.dataCatalogEncryptionSettings.encryptionAtRest?.sseAwsKmsKeyId,
            },
            ConnectionPasswordEncryption: {
              ReturnConnectionPasswordEncrypted: input.dataCatalogEncryptionSettings.connectionPasswordEncryption?.returnConnectionPasswordEncrypted,
              AwsKmsKeyId: input.dataCatalogEncryptionSettings.connectionPasswordEncryption?.awsKmsKeyId,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDataCatalogEncryptionSettings', props);
  }

  public putResourcePolicy(input: shapes.GluePutResourcePolicyRequest): GlueResponsesPutResourcePolicy {
    return new GlueResponsesPutResourcePolicy(this, this.__resources, input);
  }

  public putSchemaVersionMetadata(input: shapes.GluePutSchemaVersionMetadataInput): GlueResponsesPutSchemaVersionMetadata {
    return new GlueResponsesPutSchemaVersionMetadata(this, this.__resources, input);
  }

  public putWorkflowRunProperties(input: shapes.GluePutWorkflowRunPropertiesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWorkflowRunProperties',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutWorkflowRunProperties'),
        parameters: {
          Name: input.name,
          RunId: input.runId,
          RunProperties: input.runProperties,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutWorkflowRunProperties', props);
  }

  public querySchemaVersionMetadata(input: shapes.GlueQuerySchemaVersionMetadataInput): GlueResponsesQuerySchemaVersionMetadata {
    return new GlueResponsesQuerySchemaVersionMetadata(this, this.__resources, input);
  }

  public registerSchemaVersion(input: shapes.GlueRegisterSchemaVersionInput): GlueResponsesRegisterSchemaVersion {
    return new GlueResponsesRegisterSchemaVersion(this, this.__resources, input);
  }

  public removeSchemaVersionMetadata(input: shapes.GlueRemoveSchemaVersionMetadataInput): GlueResponsesRemoveSchemaVersionMetadata {
    return new GlueResponsesRemoveSchemaVersionMetadata(this, this.__resources, input);
  }

  public resetJobBookmark(input: shapes.GlueResetJobBookmarkRequest): GlueResponsesResetJobBookmark {
    return new GlueResponsesResetJobBookmark(this, this.__resources, input);
  }

  public resumeWorkflowRun(input: shapes.GlueResumeWorkflowRunRequest): GlueResponsesResumeWorkflowRun {
    return new GlueResponsesResumeWorkflowRun(this, this.__resources, input);
  }

  public searchTables(input: shapes.GlueSearchTablesRequest): GlueResponsesSearchTables {
    return new GlueResponsesSearchTables(this, this.__resources, input);
  }

  public startCrawler(input: shapes.GlueStartCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartCrawler'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartCrawler', props);
  }

  public startCrawlerSchedule(input: shapes.GlueStartCrawlerScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCrawlerSchedule',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartCrawlerSchedule'),
        parameters: {
          CrawlerName: input.crawlerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartCrawlerSchedule', props);
  }

  public startExportLabelsTaskRun(input: shapes.GlueStartExportLabelsTaskRunRequest): GlueResponsesStartExportLabelsTaskRun {
    return new GlueResponsesStartExportLabelsTaskRun(this, this.__resources, input);
  }

  public startImportLabelsTaskRun(input: shapes.GlueStartImportLabelsTaskRunRequest): GlueResponsesStartImportLabelsTaskRun {
    return new GlueResponsesStartImportLabelsTaskRun(this, this.__resources, input);
  }

  public startJobRun(input: shapes.GlueStartJobRunRequest): GlueResponsesStartJobRun {
    return new GlueResponsesStartJobRun(this, this.__resources, input);
  }

  public startMlEvaluationTaskRun(input: shapes.GlueStartMlEvaluationTaskRunRequest): GlueResponsesStartMlEvaluationTaskRun {
    return new GlueResponsesStartMlEvaluationTaskRun(this, this.__resources, input);
  }

  public startMlLabelingSetGenerationTaskRun(input: shapes.GlueStartMlLabelingSetGenerationTaskRunRequest): GlueResponsesStartMlLabelingSetGenerationTaskRun {
    return new GlueResponsesStartMlLabelingSetGenerationTaskRun(this, this.__resources, input);
  }

  public startTrigger(input: shapes.GlueStartTriggerRequest): GlueResponsesStartTrigger {
    return new GlueResponsesStartTrigger(this, this.__resources, input);
  }

  public startWorkflowRun(input: shapes.GlueStartWorkflowRunRequest): GlueResponsesStartWorkflowRun {
    return new GlueResponsesStartWorkflowRun(this, this.__resources, input);
  }

  public stopCrawler(input: shapes.GlueStopCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopCrawler'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopCrawler', props);
  }

  public stopCrawlerSchedule(input: shapes.GlueStopCrawlerScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopCrawlerSchedule',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopCrawlerSchedule'),
        parameters: {
          CrawlerName: input.crawlerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopCrawlerSchedule', props);
  }

  public stopTrigger(input: shapes.GlueStopTriggerRequest): GlueResponsesStopTrigger {
    return new GlueResponsesStopTrigger(this, this.__resources, input);
  }

  public stopWorkflowRun(input: shapes.GlueStopWorkflowRunRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopWorkflowRun'),
        parameters: {
          Name: input.name,
          RunId: input.runId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopWorkflowRun', props);
  }

  public tagResource(input: shapes.GlueTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagsToAdd: input.tagsToAdd,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.GlueUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagsToRemove: input.tagsToRemove,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateClassifier(input: shapes.GlueUpdateClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateClassifier'),
        parameters: {
          GrokClassifier: {
            Name: input.grokClassifier?.name,
            Classification: input.grokClassifier?.classification,
            GrokPattern: input.grokClassifier?.grokPattern,
            CustomPatterns: input.grokClassifier?.customPatterns,
          },
          XMLClassifier: {
            Name: input.xmlClassifier?.name,
            Classification: input.xmlClassifier?.classification,
            RowTag: input.xmlClassifier?.rowTag,
          },
          JsonClassifier: {
            Name: input.jsonClassifier?.name,
            JsonPath: input.jsonClassifier?.jsonPath,
          },
          CsvClassifier: {
            Name: input.csvClassifier?.name,
            Delimiter: input.csvClassifier?.delimiter,
            QuoteSymbol: input.csvClassifier?.quoteSymbol,
            ContainsHeader: input.csvClassifier?.containsHeader,
            Header: input.csvClassifier?.header,
            DisableValueTrimming: input.csvClassifier?.disableValueTrimming,
            AllowSingleColumn: input.csvClassifier?.allowSingleColumn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateClassifier', props);
  }

  public updateColumnStatisticsForPartition(input: shapes.GlueUpdateColumnStatisticsForPartitionRequest): GlueResponsesUpdateColumnStatisticsForPartition {
    return new GlueResponsesUpdateColumnStatisticsForPartition(this, this.__resources, input);
  }

  public updateColumnStatisticsForTable(input: shapes.GlueUpdateColumnStatisticsForTableRequest): GlueResponsesUpdateColumnStatisticsForTable {
    return new GlueResponsesUpdateColumnStatisticsForTable(this, this.__resources, input);
  }

  public updateConnection(input: shapes.GlueUpdateConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateConnection'),
        parameters: {
          CatalogId: input.catalogId,
          Name: input.name,
          ConnectionInput: {
            Name: input.connectionInput.name,
            Description: input.connectionInput.description,
            ConnectionType: input.connectionInput.connectionType,
            MatchCriteria: input.connectionInput.matchCriteria,
            ConnectionProperties: input.connectionInput.connectionProperties,
            PhysicalConnectionRequirements: {
              SubnetId: input.connectionInput.physicalConnectionRequirements?.subnetId,
              SecurityGroupIdList: input.connectionInput.physicalConnectionRequirements?.securityGroupIdList,
              AvailabilityZone: input.connectionInput.physicalConnectionRequirements?.availabilityZone,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateConnection', props);
  }

  public updateCrawler(input: shapes.GlueUpdateCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateCrawler'),
        parameters: {
          Name: input.name,
          Role: input.role,
          DatabaseName: input.databaseName,
          Description: input.description,
          Targets: {
            S3Targets: input.targets?.s3Targets,
            JdbcTargets: input.targets?.jdbcTargets,
            MongoDBTargets: input.targets?.mongoDbTargets,
            DynamoDBTargets: input.targets?.dynamoDbTargets,
            CatalogTargets: input.targets?.catalogTargets,
          },
          Schedule: input.schedule,
          Classifiers: input.classifiers,
          TablePrefix: input.tablePrefix,
          SchemaChangePolicy: {
            UpdateBehavior: input.schemaChangePolicy?.updateBehavior,
            DeleteBehavior: input.schemaChangePolicy?.deleteBehavior,
          },
          RecrawlPolicy: {
            RecrawlBehavior: input.recrawlPolicy?.recrawlBehavior,
          },
          LineageConfiguration: {
            CrawlerLineageSettings: input.lineageConfiguration?.crawlerLineageSettings,
          },
          Configuration: input.configuration,
          CrawlerSecurityConfiguration: input.crawlerSecurityConfiguration,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCrawler', props);
  }

  public updateCrawlerSchedule(input: shapes.GlueUpdateCrawlerScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCrawlerSchedule',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateCrawlerSchedule'),
        parameters: {
          CrawlerName: input.crawlerName,
          Schedule: input.schedule,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCrawlerSchedule', props);
  }

  public updateDatabase(input: shapes.GlueUpdateDatabaseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateDatabase'),
        parameters: {
          CatalogId: input.catalogId,
          Name: input.name,
          DatabaseInput: {
            Name: input.databaseInput.name,
            Description: input.databaseInput.description,
            LocationUri: input.databaseInput.locationUri,
            Parameters: input.databaseInput.parameters,
            CreateTableDefaultPermissions: input.databaseInput.createTableDefaultPermissions,
            TargetDatabase: {
              CatalogId: input.databaseInput.targetDatabase?.catalogId,
              DatabaseName: input.databaseInput.targetDatabase?.databaseName,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDatabase', props);
  }

  public updateDevEndpoint(input: shapes.GlueUpdateDevEndpointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateDevEndpoint'),
        parameters: {
          EndpointName: input.endpointName,
          PublicKey: input.publicKey,
          AddPublicKeys: input.addPublicKeys,
          DeletePublicKeys: input.deletePublicKeys,
          CustomLibraries: {
            ExtraPythonLibsS3Path: input.customLibraries?.extraPythonLibsS3Path,
            ExtraJarsS3Path: input.customLibraries?.extraJarsS3Path,
          },
          UpdateEtlLibraries: input.updateEtlLibraries,
          DeleteArguments: input.deleteArguments,
          AddArguments: input.addArguments,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDevEndpoint', props);
  }

  public updateJob(input: shapes.GlueUpdateJobRequest): GlueResponsesUpdateJob {
    return new GlueResponsesUpdateJob(this, this.__resources, input);
  }

  public updateMlTransform(input: shapes.GlueUpdateMlTransformRequest): GlueResponsesUpdateMlTransform {
    return new GlueResponsesUpdateMlTransform(this, this.__resources, input);
  }

  public updatePartition(input: shapes.GlueUpdatePartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdatePartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionValueList: input.partitionValueList,
          PartitionInput: {
            Values: input.partitionInput.values,
            LastAccessTime: input.partitionInput.lastAccessTime,
            StorageDescriptor: {
              Columns: input.partitionInput.storageDescriptor?.columns,
              Location: input.partitionInput.storageDescriptor?.location,
              InputFormat: input.partitionInput.storageDescriptor?.inputFormat,
              OutputFormat: input.partitionInput.storageDescriptor?.outputFormat,
              Compressed: input.partitionInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.partitionInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.partitionInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.partitionInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.partitionInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.partitionInput.storageDescriptor?.bucketColumns,
              SortColumns: input.partitionInput.storageDescriptor?.sortColumns,
              Parameters: input.partitionInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.partitionInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            Parameters: input.partitionInput.parameters,
            LastAnalyzedTime: input.partitionInput.lastAnalyzedTime,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePartition', props);
  }

  public updateRegistry(input: shapes.GlueUpdateRegistryInput): GlueResponsesUpdateRegistry {
    return new GlueResponsesUpdateRegistry(this, this.__resources, input);
  }

  public updateSchema(input: shapes.GlueUpdateSchemaInput): GlueResponsesUpdateSchema {
    return new GlueResponsesUpdateSchema(this, this.__resources, input);
  }

  public updateTable(input: shapes.GlueUpdateTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableInput: {
            Name: input.tableInput.name,
            Description: input.tableInput.description,
            Owner: input.tableInput.owner,
            LastAccessTime: input.tableInput.lastAccessTime,
            LastAnalyzedTime: input.tableInput.lastAnalyzedTime,
            Retention: input.tableInput.retention,
            StorageDescriptor: {
              Columns: input.tableInput.storageDescriptor?.columns,
              Location: input.tableInput.storageDescriptor?.location,
              InputFormat: input.tableInput.storageDescriptor?.inputFormat,
              OutputFormat: input.tableInput.storageDescriptor?.outputFormat,
              Compressed: input.tableInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.tableInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.tableInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.tableInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.tableInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.tableInput.storageDescriptor?.bucketColumns,
              SortColumns: input.tableInput.storageDescriptor?.sortColumns,
              Parameters: input.tableInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.tableInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            PartitionKeys: input.tableInput.partitionKeys,
            ViewOriginalText: input.tableInput.viewOriginalText,
            ViewExpandedText: input.tableInput.viewExpandedText,
            TableType: input.tableInput.tableType,
            Parameters: input.tableInput.parameters,
            TargetTable: {
              CatalogId: input.tableInput.targetTable?.catalogId,
              DatabaseName: input.tableInput.targetTable?.databaseName,
              Name: input.tableInput.targetTable?.name,
            },
          },
          SkipArchive: input.skipArchive,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTable', props);
  }

  public updateTrigger(input: shapes.GlueUpdateTriggerRequest): GlueResponsesUpdateTrigger {
    return new GlueResponsesUpdateTrigger(this, this.__resources, input);
  }

  public updateUserDefinedFunction(input: shapes.GlueUpdateUserDefinedFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateUserDefinedFunction'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          FunctionName: input.functionName,
          FunctionInput: {
            FunctionName: input.functionInput.functionName,
            ClassName: input.functionInput.className,
            OwnerName: input.functionInput.ownerName,
            OwnerType: input.functionInput.ownerType,
            ResourceUris: input.functionInput.resourceUris,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserDefinedFunction', props);
  }

  public updateWorkflow(input: shapes.GlueUpdateWorkflowRequest): GlueResponsesUpdateWorkflow {
    return new GlueResponsesUpdateWorkflow(this, this.__resources, input);
  }

}

export class GlueResponsesBatchCreatePartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchCreatePartitionRequest) {
  }

  public get errors(): shapes.GluePartitionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreatePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchCreatePartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionInputList: this.__input.partitionInputList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreatePartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GluePartitionError[];
  }

}

export class GlueResponsesBatchDeleteConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchDeleteConnectionRequest) {
  }

  public get succeeded(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteConnection.Succeeded'),
        outputPath: 'Succeeded',
        parameters: {
          CatalogId: this.__input.catalogId,
          ConnectionNameList: this.__input.connectionNameList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteConnection.Succeeded', props);
    return resource.getResponseField('Succeeded') as unknown as string[];
  }

  public get errors(): Record<string, shapes.GlueErrorDetail> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteConnection.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          ConnectionNameList: this.__input.connectionNameList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteConnection.Errors', props);
    return resource.getResponseField('Errors') as unknown as Record<string, shapes.GlueErrorDetail>;
  }

}

export class GlueResponsesBatchDeletePartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchDeletePartitionRequest) {
  }

  public get errors(): shapes.GluePartitionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeletePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeletePartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionsToDelete: this.__input.partitionsToDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeletePartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GluePartitionError[];
  }

}

export class GlueResponsesBatchDeleteTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchDeleteTableRequest) {
  }

  public get errors(): shapes.GlueTableError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteTable.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TablesToDelete: this.__input.tablesToDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteTable.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueTableError[];
  }

}

export class GlueResponsesBatchDeleteTableVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchDeleteTableVersionRequest) {
  }

  public get errors(): shapes.GlueTableVersionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteTableVersion.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionIds: this.__input.versionIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteTableVersion.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueTableVersionError[];
  }

}

export class GlueResponsesBatchGetCrawlers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchGetCrawlersRequest) {
  }

  public get crawlers(): shapes.GlueCrawler[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetCrawlers.Crawlers'),
        outputPath: 'Crawlers',
        parameters: {
          CrawlerNames: this.__input.crawlerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCrawlers.Crawlers', props);
    return resource.getResponseField('Crawlers') as unknown as shapes.GlueCrawler[];
  }

  public get crawlersNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetCrawlers.CrawlersNotFound'),
        outputPath: 'CrawlersNotFound',
        parameters: {
          CrawlerNames: this.__input.crawlerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetCrawlers.CrawlersNotFound', props);
    return resource.getResponseField('CrawlersNotFound') as unknown as string[];
  }

}

export class GlueResponsesBatchGetDevEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchGetDevEndpointsRequest) {
  }

  public get devEndpoints(): shapes.GlueDevEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetDevEndpoints.DevEndpoints'),
        outputPath: 'DevEndpoints',
        parameters: {
          DevEndpointNames: this.__input.devEndpointNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDevEndpoints.DevEndpoints', props);
    return resource.getResponseField('DevEndpoints') as unknown as shapes.GlueDevEndpoint[];
  }

  public get devEndpointsNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetDevEndpoints.DevEndpointsNotFound'),
        outputPath: 'DevEndpointsNotFound',
        parameters: {
          DevEndpointNames: this.__input.devEndpointNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetDevEndpoints.DevEndpointsNotFound', props);
    return resource.getResponseField('DevEndpointsNotFound') as unknown as string[];
  }

}

export class GlueResponsesBatchGetJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchGetJobsRequest) {
  }

  public get jobs(): shapes.GlueJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          JobNames: this.__input.jobNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.GlueJob[];
  }

  public get jobsNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetJobs.JobsNotFound'),
        outputPath: 'JobsNotFound',
        parameters: {
          JobNames: this.__input.jobNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetJobs.JobsNotFound', props);
    return resource.getResponseField('JobsNotFound') as unknown as string[];
  }

}

export class GlueResponsesBatchGetPartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchGetPartitionRequest) {
  }

  public get partitions(): shapes.GluePartition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetPartition.Partitions'),
        outputPath: 'Partitions',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionsToGet: this.__input.partitionsToGet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetPartition.Partitions', props);
    return resource.getResponseField('Partitions') as unknown as shapes.GluePartition[];
  }

  public get unprocessedKeys(): shapes.GluePartitionValueList[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetPartition.UnprocessedKeys'),
        outputPath: 'UnprocessedKeys',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionsToGet: this.__input.partitionsToGet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetPartition.UnprocessedKeys', props);
    return resource.getResponseField('UnprocessedKeys') as unknown as shapes.GluePartitionValueList[];
  }

}

export class GlueResponsesBatchGetTriggers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchGetTriggersRequest) {
  }

  public get triggers(): shapes.GlueTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetTriggers.Triggers'),
        outputPath: 'Triggers',
        parameters: {
          TriggerNames: this.__input.triggerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetTriggers.Triggers', props);
    return resource.getResponseField('Triggers') as unknown as shapes.GlueTrigger[];
  }

  public get triggersNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetTriggers.TriggersNotFound'),
        outputPath: 'TriggersNotFound',
        parameters: {
          TriggerNames: this.__input.triggerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetTriggers.TriggersNotFound', props);
    return resource.getResponseField('TriggersNotFound') as unknown as string[];
  }

}

export class GlueResponsesBatchGetWorkflows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchGetWorkflowsRequest) {
  }

  public get workflows(): shapes.GlueWorkflow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetWorkflows.Workflows'),
        outputPath: 'Workflows',
        parameters: {
          Names: this.__input.names,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetWorkflows.Workflows', props);
    return resource.getResponseField('Workflows') as unknown as shapes.GlueWorkflow[];
  }

  public get missingWorkflows(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetWorkflows.MissingWorkflows'),
        outputPath: 'MissingWorkflows',
        parameters: {
          Names: this.__input.names,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetWorkflows.MissingWorkflows', props);
    return resource.getResponseField('MissingWorkflows') as unknown as string[];
  }

}

export class GlueResponsesBatchStopJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchStopJobRunRequest) {
  }

  public get successfulSubmissions(): shapes.GlueBatchStopJobRunSuccessfulSubmission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchStopJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchStopJobRun.SuccessfulSubmissions'),
        outputPath: 'SuccessfulSubmissions',
        parameters: {
          JobName: this.__input.jobName,
          JobRunIds: this.__input.jobRunIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchStopJobRun.SuccessfulSubmissions', props);
    return resource.getResponseField('SuccessfulSubmissions') as unknown as shapes.GlueBatchStopJobRunSuccessfulSubmission[];
  }

  public get errors(): shapes.GlueBatchStopJobRunError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchStopJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchStopJobRun.Errors'),
        outputPath: 'Errors',
        parameters: {
          JobName: this.__input.jobName,
          JobRunIds: this.__input.jobRunIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchStopJobRun.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueBatchStopJobRunError[];
  }

}

export class GlueResponsesBatchUpdatePartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueBatchUpdatePartitionRequest) {
  }

  public get errors(): shapes.GlueBatchUpdatePartitionFailureEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdatePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchUpdatePartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdatePartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueBatchUpdatePartitionFailureEntry[];
  }

}

export class GlueResponsesCancelMlTaskRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCancelMlTaskRunRequest) {
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CancelMLTaskRun.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelMLTaskRun.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CancelMLTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelMLTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CancelMLTaskRun.Status'),
        outputPath: 'Status',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelMLTaskRun.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueResponsesCheckSchemaVersionValidity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCheckSchemaVersionValidityInput) {
  }

  public get valid(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkSchemaVersionValidity',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CheckSchemaVersionValidity.Valid'),
        outputPath: 'Valid',
        parameters: {
          DataFormat: this.__input.dataFormat,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckSchemaVersionValidity.Valid', props);
    return resource.getResponseField('Valid') as unknown as boolean;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkSchemaVersionValidity',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CheckSchemaVersionValidity.Error'),
        outputPath: 'Error',
        parameters: {
          DataFormat: this.__input.dataFormat,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckSchemaVersionValidity.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

}

export class GlueResponsesCreateDevEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateDevEndpointRequest) {
  }

  public get endpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.EndpointName'),
        outputPath: 'EndpointName',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.EndpointName', props);
    return resource.getResponseField('EndpointName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.Status'),
        outputPath: 'Status',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.SecurityGroupIds'),
        outputPath: 'SecurityGroupIds',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('SecurityGroupIds') as unknown as string[];
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.SubnetId'),
        outputPath: 'SubnetId',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.SubnetId', props);
    return resource.getResponseField('SubnetId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get yarnEndpointAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.YarnEndpointAddress'),
        outputPath: 'YarnEndpointAddress',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.YarnEndpointAddress', props);
    return resource.getResponseField('YarnEndpointAddress') as unknown as string;
  }

  public get zeppelinRemoteSparkInterpreterPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.ZeppelinRemoteSparkInterpreterPort'),
        outputPath: 'ZeppelinRemoteSparkInterpreterPort',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.ZeppelinRemoteSparkInterpreterPort', props);
    return resource.getResponseField('ZeppelinRemoteSparkInterpreterPort') as unknown as number;
  }

  public get numberOfNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.NumberOfNodes'),
        outputPath: 'NumberOfNodes',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.NumberOfNodes', props);
    return resource.getResponseField('NumberOfNodes') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.WorkerType'),
        outputPath: 'WorkerType',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.WorkerType', props);
    return resource.getResponseField('WorkerType') as unknown as string;
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.GlueVersion'),
        outputPath: 'GlueVersion',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.GlueVersion', props);
    return resource.getResponseField('GlueVersion') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.NumberOfWorkers'),
        outputPath: 'NumberOfWorkers',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.NumberOfWorkers', props);
    return resource.getResponseField('NumberOfWorkers') as unknown as number;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.AvailabilityZone'),
        outputPath: 'AvailabilityZone',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.AvailabilityZone', props);
    return resource.getResponseField('AvailabilityZone') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.VpcId'),
        outputPath: 'VpcId',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.VpcId', props);
    return resource.getResponseField('VpcId') as unknown as string;
  }

  public get extraPythonLibsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.ExtraPythonLibsS3Path'),
        outputPath: 'ExtraPythonLibsS3Path',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.ExtraPythonLibsS3Path', props);
    return resource.getResponseField('ExtraPythonLibsS3Path') as unknown as string;
  }

  public get extraJarsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.ExtraJarsS3Path'),
        outputPath: 'ExtraJarsS3Path',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.ExtraJarsS3Path', props);
    return resource.getResponseField('ExtraJarsS3Path') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.SecurityConfiguration'),
        outputPath: 'SecurityConfiguration',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.SecurityConfiguration', props);
    return resource.getResponseField('SecurityConfiguration') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

  public get arguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.Arguments'),
        outputPath: 'Arguments',
        parameters: {
          EndpointName: this.__input.endpointName,
          RoleArn: this.__input.roleArn,
          SecurityGroupIds: this.__input.securityGroupIds,
          SubnetId: this.__input.subnetId,
          PublicKey: this.__input.publicKey,
          PublicKeys: this.__input.publicKeys,
          NumberOfNodes: this.__input.numberOfNodes,
          WorkerType: this.__input.workerType,
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.__input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.__input.extraJarsS3Path,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          Arguments: this.__input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevEndpoint.Arguments', props);
    return resource.getResponseField('Arguments') as unknown as Record<string, string>;
  }

}

export class GlueResponsesCreateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateJob.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          LogUri: this.__input.logUri,
          Role: this.__input.role,
          ExecutionProperty: {
            MaxConcurrentRuns: this.__input.executionProperty?.maxConcurrentRuns,
          },
          Command: {
            Name: this.__input.command.name,
            ScriptLocation: this.__input.command.scriptLocation,
            PythonVersion: this.__input.command.pythonVersion,
          },
          DefaultArguments: this.__input.defaultArguments,
          NonOverridableArguments: this.__input.nonOverridableArguments,
          Connections: {
            Connections: this.__input.connections?.connections,
          },
          MaxRetries: this.__input.maxRetries,
          AllocatedCapacity: this.__input.allocatedCapacity,
          Timeout: this.__input.timeout,
          MaxCapacity: this.__input.maxCapacity,
          SecurityConfiguration: this.__input.securityConfiguration,
          Tags: this.__input.tags,
          NotificationProperty: {
            NotifyDelayAfter: this.__input.notificationProperty?.notifyDelayAfter,
          },
          GlueVersion: this.__input.glueVersion,
          NumberOfWorkers: this.__input.numberOfWorkers,
          WorkerType: this.__input.workerType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueResponsesCreateMlTransform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateMlTransformRequest) {
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          InputRecordTables: this.__input.inputRecordTables,
          Parameters: {
            TransformType: this.__input.parameters.transformType,
            FindMatchesParameters: {
              PrimaryKeyColumnName: this.__input.parameters.findMatchesParameters?.primaryKeyColumnName,
              PrecisionRecallTradeoff: this.__input.parameters.findMatchesParameters?.precisionRecallTradeoff,
              AccuracyCostTradeoff: this.__input.parameters.findMatchesParameters?.accuracyCostTradeoff,
              EnforceProvidedLabels: this.__input.parameters.findMatchesParameters?.enforceProvidedLabels,
            },
          },
          Role: this.__input.role,
          GlueVersion: this.__input.glueVersion,
          MaxCapacity: this.__input.maxCapacity,
          WorkerType: this.__input.workerType,
          NumberOfWorkers: this.__input.numberOfWorkers,
          Timeout: this.__input.timeout,
          MaxRetries: this.__input.maxRetries,
          Tags: this.__input.tags,
          TransformEncryption: {
            MlUserDataEncryption: {
              MlUserDataEncryptionMode: this.__input.transformEncryption?.mlUserDataEncryption?.mlUserDataEncryptionMode,
              KmsKeyId: this.__input.transformEncryption?.mlUserDataEncryption?.kmsKeyId,
            },
            TaskRunSecurityConfigurationName: this.__input.transformEncryption?.taskRunSecurityConfigurationName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

}

export class GlueResponsesCreateRegistry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateRegistryInput) {
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryName: this.__input.registryName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryName: this.__input.registryName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryName: this.__input.registryName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryName: this.__input.registryName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GlueResponsesCreateSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateSchemaInput) {
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get compatibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.Compatibility'),
        outputPath: 'Compatibility',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.Compatibility', props);
    return resource.getResponseField('Compatibility') as unknown as string;
  }

  public get schemaCheckpoint(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaCheckpoint'),
        outputPath: 'SchemaCheckpoint',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaCheckpoint', props);
    return resource.getResponseField('SchemaCheckpoint') as unknown as number;
  }

  public get latestSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.LatestSchemaVersion'),
        outputPath: 'LatestSchemaVersion',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.LatestSchemaVersion', props);
    return resource.getResponseField('LatestSchemaVersion') as unknown as number;
  }

  public get nextSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.NextSchemaVersion'),
        outputPath: 'NextSchemaVersion',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.NextSchemaVersion', props);
    return resource.getResponseField('NextSchemaVersion') as unknown as number;
  }

  public get schemaStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaStatus'),
        outputPath: 'SchemaStatus',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaStatus', props);
    return resource.getResponseField('SchemaStatus') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get schemaVersionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaVersionStatus'),
        outputPath: 'SchemaVersionStatus',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          SchemaName: this.__input.schemaName,
          DataFormat: this.__input.dataFormat,
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
          Tags: this.__input.tags,
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaVersionStatus', props);
    return resource.getResponseField('SchemaVersionStatus') as unknown as string;
  }

}

export class GlueResponsesCreateScript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateScriptRequest) {
  }

  public get pythonScript(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateScript.PythonScript'),
        outputPath: 'PythonScript',
        parameters: {
          DagNodes: this.__input.dagNodes,
          DagEdges: this.__input.dagEdges,
          Language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.PythonScript', props);
    return resource.getResponseField('PythonScript') as unknown as string;
  }

  public get scalaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateScript.ScalaCode'),
        outputPath: 'ScalaCode',
        parameters: {
          DagNodes: this.__input.dagNodes,
          DagEdges: this.__input.dagEdges,
          Language: this.__input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateScript.ScalaCode', props);
    return resource.getResponseField('ScalaCode') as unknown as string;
  }

}

export class GlueResponsesCreateSecurityConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateSecurityConfigurationRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSecurityConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          EncryptionConfiguration: {
            S3Encryption: this.__input.encryptionConfiguration.s3Encryption,
            CloudWatchEncryption: {
              CloudWatchEncryptionMode: this.__input.encryptionConfiguration.cloudWatchEncryption?.cloudWatchEncryptionMode,
              KmsKeyArn: this.__input.encryptionConfiguration.cloudWatchEncryption?.kmsKeyArn,
            },
            JobBookmarksEncryption: {
              JobBookmarksEncryptionMode: this.__input.encryptionConfiguration.jobBookmarksEncryption?.jobBookmarksEncryptionMode,
              KmsKeyArn: this.__input.encryptionConfiguration.jobBookmarksEncryption?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecurityConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSecurityConfiguration.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          Name: this.__input.name,
          EncryptionConfiguration: {
            S3Encryption: this.__input.encryptionConfiguration.s3Encryption,
            CloudWatchEncryption: {
              CloudWatchEncryptionMode: this.__input.encryptionConfiguration.cloudWatchEncryption?.cloudWatchEncryptionMode,
              KmsKeyArn: this.__input.encryptionConfiguration.cloudWatchEncryption?.kmsKeyArn,
            },
            JobBookmarksEncryption: {
              JobBookmarksEncryptionMode: this.__input.encryptionConfiguration.jobBookmarksEncryption?.jobBookmarksEncryptionMode,
              KmsKeyArn: this.__input.encryptionConfiguration.jobBookmarksEncryption?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSecurityConfiguration.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

}

export class GlueResponsesCreateTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateTriggerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          WorkflowName: this.__input.workflowName,
          Type: this.__input.type,
          Schedule: this.__input.schedule,
          Predicate: {
            Logical: this.__input.predicate?.logical,
            Conditions: this.__input.predicate?.conditions,
          },
          Actions: this.__input.actions,
          Description: this.__input.description,
          StartOnCreation: this.__input.startOnCreation,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueResponsesCreateWorkflow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueCreateWorkflowRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateWorkflow.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          DefaultRunProperties: this.__input.defaultRunProperties,
          Tags: this.__input.tags,
          MaxConcurrentRuns: this.__input.maxConcurrentRuns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkflow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueResponsesDeleteJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueDeleteJobRequest) {
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteJob.JobName'),
        outputPath: 'JobName',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.JobName', props);
    return resource.getResponseField('JobName') as unknown as string;
  }

}

export class GlueResponsesDeleteMlTransform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueDeleteMlTransformRequest) {
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

}

export class GlueResponsesDeleteRegistry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueDeleteRegistryInput) {
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteRegistry.Status'),
        outputPath: 'Status',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRegistry.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueResponsesDeleteSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueDeleteSchemaInput) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchema.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSchema.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueResponsesDeleteSchemaVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueDeleteSchemaVersionsInput) {
  }

  public get schemaVersionErrors(): shapes.GlueSchemaVersionErrorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchemaVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchemaVersions.SchemaVersionErrors'),
        outputPath: 'SchemaVersionErrors',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          Versions: this.__input.versions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSchemaVersions.SchemaVersionErrors', props);
    return resource.getResponseField('SchemaVersionErrors') as unknown as shapes.GlueSchemaVersionErrorItem[];
  }

}

export class GlueResponsesDeleteTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueDeleteTriggerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueResponsesDeleteWorkflow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueDeleteWorkflowRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteWorkflow.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWorkflow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueResponsesFetchCatalogImportStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCatalogImportStatusRequest) {
  }

  public get importStatus(): GlueResponsesFetchCatalogImportStatusImportStatus {
    return new GlueResponsesFetchCatalogImportStatusImportStatus(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchCatalogImportStatusImportStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCatalogImportStatusRequest) {
  }

  public get importCompleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCatalogImportStatus',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCatalogImportStatus.ImportStatus.ImportCompleted'),
        outputPath: 'ImportStatus.ImportCompleted',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCatalogImportStatus.ImportStatus.ImportCompleted', props);
    return resource.getResponseField('ImportStatus.ImportCompleted') as unknown as boolean;
  }

  public get importTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCatalogImportStatus',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCatalogImportStatus.ImportStatus.ImportTime'),
        outputPath: 'ImportStatus.ImportTime',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCatalogImportStatus.ImportStatus.ImportTime', props);
    return resource.getResponseField('ImportStatus.ImportTime') as unknown as string;
  }

  public get importedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCatalogImportStatus',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCatalogImportStatus.ImportStatus.ImportedBy'),
        outputPath: 'ImportStatus.ImportedBy',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCatalogImportStatus.ImportStatus.ImportedBy', props);
    return resource.getResponseField('ImportStatus.ImportedBy') as unknown as string;
  }

}

export class GlueResponsesFetchClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetClassifierRequest) {
  }

  public get classifier(): GlueResponsesFetchClassifierClassifier {
    return new GlueResponsesFetchClassifierClassifier(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchClassifierClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetClassifierRequest) {
  }

  public get grokClassifier(): GlueResponsesFetchClassifierClassifierGrokClassifier {
    return new GlueResponsesFetchClassifierClassifierGrokClassifier(this.__scope, this.__resources, this.__input);
  }

  public get xmlClassifier(): GlueResponsesFetchClassifierClassifierXmlClassifier {
    return new GlueResponsesFetchClassifierClassifierXmlClassifier(this.__scope, this.__resources, this.__input);
  }

  public get jsonClassifier(): GlueResponsesFetchClassifierClassifierJsonClassifier {
    return new GlueResponsesFetchClassifierClassifierJsonClassifier(this.__scope, this.__resources, this.__input);
  }

  public get csvClassifier(): GlueResponsesFetchClassifierClassifierCsvClassifier {
    return new GlueResponsesFetchClassifierClassifierCsvClassifier(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchClassifierClassifierGrokClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetClassifierRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.Name'),
        outputPath: 'Classifier.GrokClassifier.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.GrokClassifier.Name', props);
    return resource.getResponseField('Classifier.GrokClassifier.Name') as unknown as string;
  }

  public get classification(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.Classification'),
        outputPath: 'Classifier.GrokClassifier.Classification',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.GrokClassifier.Classification', props);
    return resource.getResponseField('Classifier.GrokClassifier.Classification') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.CreationTime'),
        outputPath: 'Classifier.GrokClassifier.CreationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.GrokClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.GrokClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.LastUpdated'),
        outputPath: 'Classifier.GrokClassifier.LastUpdated',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.GrokClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.GrokClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.Version'),
        outputPath: 'Classifier.GrokClassifier.Version',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.GrokClassifier.Version', props);
    return resource.getResponseField('Classifier.GrokClassifier.Version') as unknown as number;
  }

  public get grokPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.GrokPattern'),
        outputPath: 'Classifier.GrokClassifier.GrokPattern',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.GrokClassifier.GrokPattern', props);
    return resource.getResponseField('Classifier.GrokClassifier.GrokPattern') as unknown as string;
  }

  public get customPatterns(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.CustomPatterns'),
        outputPath: 'Classifier.GrokClassifier.CustomPatterns',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.GrokClassifier.CustomPatterns', props);
    return resource.getResponseField('Classifier.GrokClassifier.CustomPatterns') as unknown as string;
  }

}

export class GlueResponsesFetchClassifierClassifierXmlClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetClassifierRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.Name'),
        outputPath: 'Classifier.XMLClassifier.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.XMLClassifier.Name', props);
    return resource.getResponseField('Classifier.XMLClassifier.Name') as unknown as string;
  }

  public get classification(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.Classification'),
        outputPath: 'Classifier.XMLClassifier.Classification',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.XMLClassifier.Classification', props);
    return resource.getResponseField('Classifier.XMLClassifier.Classification') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.CreationTime'),
        outputPath: 'Classifier.XMLClassifier.CreationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.XMLClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.XMLClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.LastUpdated'),
        outputPath: 'Classifier.XMLClassifier.LastUpdated',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.XMLClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.XMLClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.Version'),
        outputPath: 'Classifier.XMLClassifier.Version',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.XMLClassifier.Version', props);
    return resource.getResponseField('Classifier.XMLClassifier.Version') as unknown as number;
  }

  public get rowTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.RowTag'),
        outputPath: 'Classifier.XMLClassifier.RowTag',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.XMLClassifier.RowTag', props);
    return resource.getResponseField('Classifier.XMLClassifier.RowTag') as unknown as string;
  }

}

export class GlueResponsesFetchClassifierClassifierJsonClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetClassifierRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.Name'),
        outputPath: 'Classifier.JsonClassifier.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.JsonClassifier.Name', props);
    return resource.getResponseField('Classifier.JsonClassifier.Name') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.CreationTime'),
        outputPath: 'Classifier.JsonClassifier.CreationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.JsonClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.JsonClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.LastUpdated'),
        outputPath: 'Classifier.JsonClassifier.LastUpdated',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.JsonClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.JsonClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.Version'),
        outputPath: 'Classifier.JsonClassifier.Version',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.JsonClassifier.Version', props);
    return resource.getResponseField('Classifier.JsonClassifier.Version') as unknown as number;
  }

  public get jsonPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.JsonPath'),
        outputPath: 'Classifier.JsonClassifier.JsonPath',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.JsonClassifier.JsonPath', props);
    return resource.getResponseField('Classifier.JsonClassifier.JsonPath') as unknown as string;
  }

}

export class GlueResponsesFetchClassifierClassifierCsvClassifier {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetClassifierRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Name'),
        outputPath: 'Classifier.CsvClassifier.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.Name', props);
    return resource.getResponseField('Classifier.CsvClassifier.Name') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.CreationTime'),
        outputPath: 'Classifier.CsvClassifier.CreationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.CsvClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.LastUpdated'),
        outputPath: 'Classifier.CsvClassifier.LastUpdated',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.CsvClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Version'),
        outputPath: 'Classifier.CsvClassifier.Version',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.Version', props);
    return resource.getResponseField('Classifier.CsvClassifier.Version') as unknown as number;
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Delimiter'),
        outputPath: 'Classifier.CsvClassifier.Delimiter',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.Delimiter', props);
    return resource.getResponseField('Classifier.CsvClassifier.Delimiter') as unknown as string;
  }

  public get quoteSymbol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.QuoteSymbol'),
        outputPath: 'Classifier.CsvClassifier.QuoteSymbol',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.QuoteSymbol', props);
    return resource.getResponseField('Classifier.CsvClassifier.QuoteSymbol') as unknown as string;
  }

  public get containsHeader(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.ContainsHeader'),
        outputPath: 'Classifier.CsvClassifier.ContainsHeader',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.ContainsHeader', props);
    return resource.getResponseField('Classifier.CsvClassifier.ContainsHeader') as unknown as string;
  }

  public get header(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Header'),
        outputPath: 'Classifier.CsvClassifier.Header',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.Header', props);
    return resource.getResponseField('Classifier.CsvClassifier.Header') as unknown as string[];
  }

  public get disableValueTrimming(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.DisableValueTrimming'),
        outputPath: 'Classifier.CsvClassifier.DisableValueTrimming',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.DisableValueTrimming', props);
    return resource.getResponseField('Classifier.CsvClassifier.DisableValueTrimming') as unknown as boolean;
  }

  public get allowSingleColumn(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.AllowSingleColumn'),
        outputPath: 'Classifier.CsvClassifier.AllowSingleColumn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifier.Classifier.CsvClassifier.AllowSingleColumn', props);
    return resource.getResponseField('Classifier.CsvClassifier.AllowSingleColumn') as unknown as boolean;
  }

}

export class GlueResponsesFetchClassifiers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetClassifiersRequest) {
  }

  public get classifiers(): shapes.GlueClassifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifiers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifiers.Classifiers'),
        outputPath: 'Classifiers',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifiers.Classifiers', props);
    return resource.getResponseField('Classifiers') as unknown as shapes.GlueClassifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifiers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifiers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetClassifiers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchColumnStatisticsForPartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetColumnStatisticsForPartitionRequest) {
  }

  public get columnStatisticsList(): shapes.GlueColumnStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForPartition.ColumnStatisticsList'),
        outputPath: 'ColumnStatisticsList',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
          ColumnNames: this.__input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetColumnStatisticsForPartition.ColumnStatisticsList', props);
    return resource.getResponseField('ColumnStatisticsList') as unknown as shapes.GlueColumnStatistics[];
  }

  public get errors(): shapes.GlueColumnError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForPartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
          ColumnNames: this.__input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetColumnStatisticsForPartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnError[];
  }

}

export class GlueResponsesFetchColumnStatisticsForTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetColumnStatisticsForTableRequest) {
  }

  public get columnStatisticsList(): shapes.GlueColumnStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForTable.ColumnStatisticsList'),
        outputPath: 'ColumnStatisticsList',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          ColumnNames: this.__input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetColumnStatisticsForTable.ColumnStatisticsList', props);
    return resource.getResponseField('ColumnStatisticsList') as unknown as shapes.GlueColumnStatistics[];
  }

  public get errors(): shapes.GlueColumnError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForTable.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          ColumnNames: this.__input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetColumnStatisticsForTable.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnError[];
  }

}

export class GlueResponsesFetchConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetConnectionRequest) {
  }

  public get connection(): GlueResponsesFetchConnectionConnection {
    return new GlueResponsesFetchConnectionConnection(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchConnectionConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetConnectionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.Name'),
        outputPath: 'Connection.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.Name', props);
    return resource.getResponseField('Connection.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.Description'),
        outputPath: 'Connection.Description',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.Description', props);
    return resource.getResponseField('Connection.Description') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.ConnectionType'),
        outputPath: 'Connection.ConnectionType',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.ConnectionType', props);
    return resource.getResponseField('Connection.ConnectionType') as unknown as string;
  }

  public get matchCriteria(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.MatchCriteria'),
        outputPath: 'Connection.MatchCriteria',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.MatchCriteria', props);
    return resource.getResponseField('Connection.MatchCriteria') as unknown as string[];
  }

  public get connectionProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.ConnectionProperties'),
        outputPath: 'Connection.ConnectionProperties',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.ConnectionProperties', props);
    return resource.getResponseField('Connection.ConnectionProperties') as unknown as Record<string, string>;
  }

  public get physicalConnectionRequirements(): GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements {
    return new GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.CreationTime'),
        outputPath: 'Connection.CreationTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.CreationTime', props);
    return resource.getResponseField('Connection.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.LastUpdatedTime'),
        outputPath: 'Connection.LastUpdatedTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.LastUpdatedTime', props);
    return resource.getResponseField('Connection.LastUpdatedTime') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.LastUpdatedBy'),
        outputPath: 'Connection.LastUpdatedBy',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.LastUpdatedBy', props);
    return resource.getResponseField('Connection.LastUpdatedBy') as unknown as string;
  }

}

export class GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetConnectionRequest) {
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.PhysicalConnectionRequirements.SubnetId'),
        outputPath: 'Connection.PhysicalConnectionRequirements.SubnetId',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.PhysicalConnectionRequirements.SubnetId', props);
    return resource.getResponseField('Connection.PhysicalConnectionRequirements.SubnetId') as unknown as string;
  }

  public get securityGroupIdList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.PhysicalConnectionRequirements.SecurityGroupIdList'),
        outputPath: 'Connection.PhysicalConnectionRequirements.SecurityGroupIdList',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.PhysicalConnectionRequirements.SecurityGroupIdList', props);
    return resource.getResponseField('Connection.PhysicalConnectionRequirements.SecurityGroupIdList') as unknown as string[];
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.PhysicalConnectionRequirements.AvailabilityZone'),
        outputPath: 'Connection.PhysicalConnectionRequirements.AvailabilityZone',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
          HidePassword: this.__input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.PhysicalConnectionRequirements.AvailabilityZone', props);
    return resource.getResponseField('Connection.PhysicalConnectionRequirements.AvailabilityZone') as unknown as string;
  }

}

export class GlueResponsesFetchConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetConnectionsRequest) {
  }

  public get connectionList(): shapes.GlueConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnections',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnections.ConnectionList'),
        outputPath: 'ConnectionList',
        parameters: {
          CatalogId: this.__input.catalogId,
          Filter: {
            MatchCriteria: this.__input.filter?.matchCriteria,
            ConnectionType: this.__input.filter?.connectionType,
          },
          HidePassword: this.__input.hidePassword,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnections.ConnectionList', props);
    return resource.getResponseField('ConnectionList') as unknown as shapes.GlueConnection[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnections',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          Filter: {
            MatchCriteria: this.__input.filter?.matchCriteria,
            ConnectionType: this.__input.filter?.connectionType,
          },
          HidePassword: this.__input.hidePassword,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchCrawler {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get crawler(): GlueResponsesFetchCrawlerCrawler {
    return new GlueResponsesFetchCrawlerCrawler(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchCrawlerCrawler {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Name'),
        outputPath: 'Crawler.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Name', props);
    return resource.getResponseField('Crawler.Name') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Role'),
        outputPath: 'Crawler.Role',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Role', props);
    return resource.getResponseField('Crawler.Role') as unknown as string;
  }

  public get targets(): GlueResponsesFetchCrawlerCrawlerTargets {
    return new GlueResponsesFetchCrawlerCrawlerTargets(this.__scope, this.__resources, this.__input);
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.DatabaseName'),
        outputPath: 'Crawler.DatabaseName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.DatabaseName', props);
    return resource.getResponseField('Crawler.DatabaseName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Description'),
        outputPath: 'Crawler.Description',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Description', props);
    return resource.getResponseField('Crawler.Description') as unknown as string;
  }

  public get classifiers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Classifiers'),
        outputPath: 'Crawler.Classifiers',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Classifiers', props);
    return resource.getResponseField('Crawler.Classifiers') as unknown as string[];
  }

  public get recrawlPolicy(): GlueResponsesFetchCrawlerCrawlerRecrawlPolicy {
    return new GlueResponsesFetchCrawlerCrawlerRecrawlPolicy(this.__scope, this.__resources, this.__input);
  }

  public get schemaChangePolicy(): GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy {
    return new GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy(this.__scope, this.__resources, this.__input);
  }

  public get lineageConfiguration(): GlueResponsesFetchCrawlerCrawlerLineageConfiguration {
    return new GlueResponsesFetchCrawlerCrawlerLineageConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.State'),
        outputPath: 'Crawler.State',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.State', props);
    return resource.getResponseField('Crawler.State') as unknown as string;
  }

  public get tablePrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.TablePrefix'),
        outputPath: 'Crawler.TablePrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.TablePrefix', props);
    return resource.getResponseField('Crawler.TablePrefix') as unknown as string;
  }

  public get schedule(): GlueResponsesFetchCrawlerCrawlerSchedule {
    return new GlueResponsesFetchCrawlerCrawlerSchedule(this.__scope, this.__resources, this.__input);
  }

  public get crawlElapsedTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.CrawlElapsedTime'),
        outputPath: 'Crawler.CrawlElapsedTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.CrawlElapsedTime', props);
    return resource.getResponseField('Crawler.CrawlElapsedTime') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.CreationTime'),
        outputPath: 'Crawler.CreationTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.CreationTime', props);
    return resource.getResponseField('Crawler.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastUpdated'),
        outputPath: 'Crawler.LastUpdated',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LastUpdated', props);
    return resource.getResponseField('Crawler.LastUpdated') as unknown as string;
  }

  public get lastCrawl(): GlueResponsesFetchCrawlerCrawlerLastCrawl {
    return new GlueResponsesFetchCrawlerCrawlerLastCrawl(this.__scope, this.__resources, this.__input);
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Version'),
        outputPath: 'Crawler.Version',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Version', props);
    return resource.getResponseField('Crawler.Version') as unknown as number;
  }

  public get configuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Configuration'),
        outputPath: 'Crawler.Configuration',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Configuration', props);
    return resource.getResponseField('Crawler.Configuration') as unknown as string;
  }

  public get crawlerSecurityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.CrawlerSecurityConfiguration'),
        outputPath: 'Crawler.CrawlerSecurityConfiguration',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.CrawlerSecurityConfiguration', props);
    return resource.getResponseField('Crawler.CrawlerSecurityConfiguration') as unknown as string;
  }

}

export class GlueResponsesFetchCrawlerCrawlerTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get s3Targets(): shapes.GlueS3Target[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.S3Targets'),
        outputPath: 'Crawler.Targets.S3Targets',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Targets.S3Targets', props);
    return resource.getResponseField('Crawler.Targets.S3Targets') as unknown as shapes.GlueS3Target[];
  }

  public get jdbcTargets(): shapes.GlueJdbcTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.JdbcTargets'),
        outputPath: 'Crawler.Targets.JdbcTargets',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Targets.JdbcTargets', props);
    return resource.getResponseField('Crawler.Targets.JdbcTargets') as unknown as shapes.GlueJdbcTarget[];
  }

  public get mongoDbTargets(): shapes.GlueMongoDbTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.MongoDBTargets'),
        outputPath: 'Crawler.Targets.MongoDBTargets',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Targets.MongoDBTargets', props);
    return resource.getResponseField('Crawler.Targets.MongoDBTargets') as unknown as shapes.GlueMongoDbTarget[];
  }

  public get dynamoDbTargets(): shapes.GlueDynamoDbTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.DynamoDBTargets'),
        outputPath: 'Crawler.Targets.DynamoDBTargets',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Targets.DynamoDBTargets', props);
    return resource.getResponseField('Crawler.Targets.DynamoDBTargets') as unknown as shapes.GlueDynamoDbTarget[];
  }

  public get catalogTargets(): shapes.GlueCatalogTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.CatalogTargets'),
        outputPath: 'Crawler.Targets.CatalogTargets',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Targets.CatalogTargets', props);
    return resource.getResponseField('Crawler.Targets.CatalogTargets') as unknown as shapes.GlueCatalogTarget[];
  }

}

export class GlueResponsesFetchCrawlerCrawlerRecrawlPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get recrawlBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.RecrawlPolicy.RecrawlBehavior'),
        outputPath: 'Crawler.RecrawlPolicy.RecrawlBehavior',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.RecrawlPolicy.RecrawlBehavior', props);
    return resource.getResponseField('Crawler.RecrawlPolicy.RecrawlBehavior') as unknown as string;
  }

}

export class GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get updateBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.SchemaChangePolicy.UpdateBehavior'),
        outputPath: 'Crawler.SchemaChangePolicy.UpdateBehavior',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.SchemaChangePolicy.UpdateBehavior', props);
    return resource.getResponseField('Crawler.SchemaChangePolicy.UpdateBehavior') as unknown as string;
  }

  public get deleteBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.SchemaChangePolicy.DeleteBehavior'),
        outputPath: 'Crawler.SchemaChangePolicy.DeleteBehavior',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.SchemaChangePolicy.DeleteBehavior', props);
    return resource.getResponseField('Crawler.SchemaChangePolicy.DeleteBehavior') as unknown as string;
  }

}

export class GlueResponsesFetchCrawlerCrawlerLineageConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get crawlerLineageSettings(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LineageConfiguration.CrawlerLineageSettings'),
        outputPath: 'Crawler.LineageConfiguration.CrawlerLineageSettings',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LineageConfiguration.CrawlerLineageSettings', props);
    return resource.getResponseField('Crawler.LineageConfiguration.CrawlerLineageSettings') as unknown as string;
  }

}

export class GlueResponsesFetchCrawlerCrawlerSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Schedule.ScheduleExpression'),
        outputPath: 'Crawler.Schedule.ScheduleExpression',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Schedule.ScheduleExpression', props);
    return resource.getResponseField('Crawler.Schedule.ScheduleExpression') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Schedule.State'),
        outputPath: 'Crawler.Schedule.State',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.Schedule.State', props);
    return resource.getResponseField('Crawler.Schedule.State') as unknown as string;
  }

}

export class GlueResponsesFetchCrawlerCrawlerLastCrawl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.Status'),
        outputPath: 'Crawler.LastCrawl.Status',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LastCrawl.Status', props);
    return resource.getResponseField('Crawler.LastCrawl.Status') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.ErrorMessage'),
        outputPath: 'Crawler.LastCrawl.ErrorMessage',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LastCrawl.ErrorMessage', props);
    return resource.getResponseField('Crawler.LastCrawl.ErrorMessage') as unknown as string;
  }

  public get logGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.LogGroup'),
        outputPath: 'Crawler.LastCrawl.LogGroup',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LastCrawl.LogGroup', props);
    return resource.getResponseField('Crawler.LastCrawl.LogGroup') as unknown as string;
  }

  public get logStream(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.LogStream'),
        outputPath: 'Crawler.LastCrawl.LogStream',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LastCrawl.LogStream', props);
    return resource.getResponseField('Crawler.LastCrawl.LogStream') as unknown as string;
  }

  public get messagePrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.MessagePrefix'),
        outputPath: 'Crawler.LastCrawl.MessagePrefix',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LastCrawl.MessagePrefix', props);
    return resource.getResponseField('Crawler.LastCrawl.MessagePrefix') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.StartTime'),
        outputPath: 'Crawler.LastCrawl.StartTime',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawler.Crawler.LastCrawl.StartTime', props);
    return resource.getResponseField('Crawler.LastCrawl.StartTime') as unknown as string;
  }

}

export class GlueResponsesFetchCrawlerMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlerMetricsRequest) {
  }

  public get crawlerMetricsList(): shapes.GlueCrawlerMetrics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlerMetrics',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlerMetrics.CrawlerMetricsList'),
        outputPath: 'CrawlerMetricsList',
        parameters: {
          CrawlerNameList: this.__input.crawlerNameList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawlerMetrics.CrawlerMetricsList', props);
    return resource.getResponseField('CrawlerMetricsList') as unknown as shapes.GlueCrawlerMetrics[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlerMetrics',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlerMetrics.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CrawlerNameList: this.__input.crawlerNameList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawlerMetrics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchCrawlers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetCrawlersRequest) {
  }

  public get crawlers(): shapes.GlueCrawler[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlers.Crawlers'),
        outputPath: 'Crawlers',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawlers.Crawlers', props);
    return resource.getResponseField('Crawlers') as unknown as shapes.GlueCrawler[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCrawlers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchDataCatalogEncryptionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
  }

  public get dataCatalogEncryptionSettings(): GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
    return new GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
  }

  public get encryptionAtRest(): GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
    return new GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest(this.__scope, this.__resources, this.__input);
  }

  public get connectionPasswordEncryption(): GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
    return new GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
  }

  public get catalogEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode'),
        outputPath: 'DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode') as unknown as string;
  }

  public get sseAwsKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId'),
        outputPath: 'DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId') as unknown as string;
  }

}

export class GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
  }

  public get returnConnectionPasswordEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted'),
        outputPath: 'DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted') as unknown as boolean;
  }

  public get awsKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId'),
        outputPath: 'DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId') as unknown as string;
  }

}

export class GlueResponsesFetchDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDatabaseRequest) {
  }

  public get database(): GlueResponsesFetchDatabaseDatabase {
    return new GlueResponsesFetchDatabaseDatabase(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchDatabaseDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDatabaseRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.Name'),
        outputPath: 'Database.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.Name', props);
    return resource.getResponseField('Database.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.Description'),
        outputPath: 'Database.Description',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.Description', props);
    return resource.getResponseField('Database.Description') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.LocationUri'),
        outputPath: 'Database.LocationUri',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.LocationUri', props);
    return resource.getResponseField('Database.LocationUri') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.Parameters'),
        outputPath: 'Database.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.Parameters', props);
    return resource.getResponseField('Database.Parameters') as unknown as Record<string, string>;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.CreateTime'),
        outputPath: 'Database.CreateTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.CreateTime', props);
    return resource.getResponseField('Database.CreateTime') as unknown as string;
  }

  public get createTableDefaultPermissions(): shapes.GluePrincipalPermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.CreateTableDefaultPermissions'),
        outputPath: 'Database.CreateTableDefaultPermissions',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.CreateTableDefaultPermissions', props);
    return resource.getResponseField('Database.CreateTableDefaultPermissions') as unknown as shapes.GluePrincipalPermissions[];
  }

  public get targetDatabase(): GlueResponsesFetchDatabaseDatabaseTargetDatabase {
    return new GlueResponsesFetchDatabaseDatabaseTargetDatabase(this.__scope, this.__resources, this.__input);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.CatalogId'),
        outputPath: 'Database.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.CatalogId', props);
    return resource.getResponseField('Database.CatalogId') as unknown as string;
  }

}

export class GlueResponsesFetchDatabaseDatabaseTargetDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDatabaseRequest) {
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.TargetDatabase.CatalogId'),
        outputPath: 'Database.TargetDatabase.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.TargetDatabase.CatalogId', props);
    return resource.getResponseField('Database.TargetDatabase.CatalogId') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.TargetDatabase.DatabaseName'),
        outputPath: 'Database.TargetDatabase.DatabaseName',
        parameters: {
          CatalogId: this.__input.catalogId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.TargetDatabase.DatabaseName', props);
    return resource.getResponseField('Database.TargetDatabase.DatabaseName') as unknown as string;
  }

}

export class GlueResponsesFetchDatabases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDatabasesRequest) {
  }

  public get databaseList(): shapes.GlueDatabase[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabases',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabases.DatabaseList'),
        outputPath: 'DatabaseList',
        parameters: {
          CatalogId: this.__input.catalogId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ResourceShareType: this.__input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabases.DatabaseList', props);
    return resource.getResponseField('DatabaseList') as unknown as shapes.GlueDatabase[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabases',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ResourceShareType: this.__input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchDataflowGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDataflowGraphRequest) {
  }

  public get dagNodes(): shapes.GlueCodeGenNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowGraph',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataflowGraph.DagNodes'),
        outputPath: 'DagNodes',
        parameters: {
          PythonScript: this.__input.pythonScript,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataflowGraph.DagNodes', props);
    return resource.getResponseField('DagNodes') as unknown as shapes.GlueCodeGenNode[];
  }

  public get dagEdges(): shapes.GlueCodeGenEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowGraph',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataflowGraph.DagEdges'),
        outputPath: 'DagEdges',
        parameters: {
          PythonScript: this.__input.pythonScript,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataflowGraph.DagEdges', props);
    return resource.getResponseField('DagEdges') as unknown as shapes.GlueCodeGenEdge[];
  }

}

export class GlueResponsesFetchDevEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDevEndpointRequest) {
  }

  public get devEndpoint(): GlueResponsesFetchDevEndpointDevEndpoint {
    return new GlueResponsesFetchDevEndpointDevEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchDevEndpointDevEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDevEndpointRequest) {
  }

  public get endpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.EndpointName'),
        outputPath: 'DevEndpoint.EndpointName',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.EndpointName', props);
    return resource.getResponseField('DevEndpoint.EndpointName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.RoleArn'),
        outputPath: 'DevEndpoint.RoleArn',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.RoleArn', props);
    return resource.getResponseField('DevEndpoint.RoleArn') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.SecurityGroupIds'),
        outputPath: 'DevEndpoint.SecurityGroupIds',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('DevEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.SubnetId'),
        outputPath: 'DevEndpoint.SubnetId',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.SubnetId', props);
    return resource.getResponseField('DevEndpoint.SubnetId') as unknown as string;
  }

  public get yarnEndpointAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.YarnEndpointAddress'),
        outputPath: 'DevEndpoint.YarnEndpointAddress',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.YarnEndpointAddress', props);
    return resource.getResponseField('DevEndpoint.YarnEndpointAddress') as unknown as string;
  }

  public get privateAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PrivateAddress'),
        outputPath: 'DevEndpoint.PrivateAddress',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.PrivateAddress', props);
    return resource.getResponseField('DevEndpoint.PrivateAddress') as unknown as string;
  }

  public get zeppelinRemoteSparkInterpreterPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.ZeppelinRemoteSparkInterpreterPort'),
        outputPath: 'DevEndpoint.ZeppelinRemoteSparkInterpreterPort',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.ZeppelinRemoteSparkInterpreterPort', props);
    return resource.getResponseField('DevEndpoint.ZeppelinRemoteSparkInterpreterPort') as unknown as number;
  }

  public get publicAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PublicAddress'),
        outputPath: 'DevEndpoint.PublicAddress',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.PublicAddress', props);
    return resource.getResponseField('DevEndpoint.PublicAddress') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.Status'),
        outputPath: 'DevEndpoint.Status',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.Status', props);
    return resource.getResponseField('DevEndpoint.Status') as unknown as string;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.WorkerType'),
        outputPath: 'DevEndpoint.WorkerType',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.WorkerType', props);
    return resource.getResponseField('DevEndpoint.WorkerType') as unknown as string;
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.GlueVersion'),
        outputPath: 'DevEndpoint.GlueVersion',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.GlueVersion', props);
    return resource.getResponseField('DevEndpoint.GlueVersion') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.NumberOfWorkers'),
        outputPath: 'DevEndpoint.NumberOfWorkers',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.NumberOfWorkers', props);
    return resource.getResponseField('DevEndpoint.NumberOfWorkers') as unknown as number;
  }

  public get numberOfNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.NumberOfNodes'),
        outputPath: 'DevEndpoint.NumberOfNodes',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.NumberOfNodes', props);
    return resource.getResponseField('DevEndpoint.NumberOfNodes') as unknown as number;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.AvailabilityZone'),
        outputPath: 'DevEndpoint.AvailabilityZone',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.AvailabilityZone', props);
    return resource.getResponseField('DevEndpoint.AvailabilityZone') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.VpcId'),
        outputPath: 'DevEndpoint.VpcId',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.VpcId', props);
    return resource.getResponseField('DevEndpoint.VpcId') as unknown as string;
  }

  public get extraPythonLibsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.ExtraPythonLibsS3Path'),
        outputPath: 'DevEndpoint.ExtraPythonLibsS3Path',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.ExtraPythonLibsS3Path', props);
    return resource.getResponseField('DevEndpoint.ExtraPythonLibsS3Path') as unknown as string;
  }

  public get extraJarsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.ExtraJarsS3Path'),
        outputPath: 'DevEndpoint.ExtraJarsS3Path',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.ExtraJarsS3Path', props);
    return resource.getResponseField('DevEndpoint.ExtraJarsS3Path') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.FailureReason'),
        outputPath: 'DevEndpoint.FailureReason',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.FailureReason', props);
    return resource.getResponseField('DevEndpoint.FailureReason') as unknown as string;
  }

  public get lastUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.LastUpdateStatus'),
        outputPath: 'DevEndpoint.LastUpdateStatus',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.LastUpdateStatus', props);
    return resource.getResponseField('DevEndpoint.LastUpdateStatus') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.CreatedTimestamp'),
        outputPath: 'DevEndpoint.CreatedTimestamp',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.CreatedTimestamp', props);
    return resource.getResponseField('DevEndpoint.CreatedTimestamp') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.LastModifiedTimestamp'),
        outputPath: 'DevEndpoint.LastModifiedTimestamp',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.LastModifiedTimestamp', props);
    return resource.getResponseField('DevEndpoint.LastModifiedTimestamp') as unknown as string;
  }

  public get publicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PublicKey'),
        outputPath: 'DevEndpoint.PublicKey',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.PublicKey', props);
    return resource.getResponseField('DevEndpoint.PublicKey') as unknown as string;
  }

  public get publicKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PublicKeys'),
        outputPath: 'DevEndpoint.PublicKeys',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.PublicKeys', props);
    return resource.getResponseField('DevEndpoint.PublicKeys') as unknown as string[];
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.SecurityConfiguration'),
        outputPath: 'DevEndpoint.SecurityConfiguration',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.SecurityConfiguration', props);
    return resource.getResponseField('DevEndpoint.SecurityConfiguration') as unknown as string;
  }

  public get arguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.Arguments'),
        outputPath: 'DevEndpoint.Arguments',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoint.DevEndpoint.Arguments', props);
    return resource.getResponseField('DevEndpoint.Arguments') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchDevEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetDevEndpointsRequest) {
  }

  public get devEndpoints(): shapes.GlueDevEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoints.DevEndpoints'),
        outputPath: 'DevEndpoints',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoints.DevEndpoints', props);
    return resource.getResponseField('DevEndpoints') as unknown as shapes.GlueDevEndpoint[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRequest) {
  }

  public get job(): GlueResponsesFetchJobJob {
    return new GlueResponsesFetchJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Name'),
        outputPath: 'Job.Name',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Name', props);
    return resource.getResponseField('Job.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Description'),
        outputPath: 'Job.Description',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Description', props);
    return resource.getResponseField('Job.Description') as unknown as string;
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.LogUri'),
        outputPath: 'Job.LogUri',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.LogUri', props);
    return resource.getResponseField('Job.LogUri') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Role'),
        outputPath: 'Job.Role',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Role', props);
    return resource.getResponseField('Job.Role') as unknown as string;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.CreatedOn'),
        outputPath: 'Job.CreatedOn',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.CreatedOn', props);
    return resource.getResponseField('Job.CreatedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.LastModifiedOn'),
        outputPath: 'Job.LastModifiedOn',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.LastModifiedOn', props);
    return resource.getResponseField('Job.LastModifiedOn') as unknown as string;
  }

  public get executionProperty(): GlueResponsesFetchJobJobExecutionProperty {
    return new GlueResponsesFetchJobJobExecutionProperty(this.__scope, this.__resources, this.__input);
  }

  public get command(): GlueResponsesFetchJobJobCommand {
    return new GlueResponsesFetchJobJobCommand(this.__scope, this.__resources, this.__input);
  }

  public get defaultArguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.DefaultArguments'),
        outputPath: 'Job.DefaultArguments',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.DefaultArguments', props);
    return resource.getResponseField('Job.DefaultArguments') as unknown as Record<string, string>;
  }

  public get nonOverridableArguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.NonOverridableArguments'),
        outputPath: 'Job.NonOverridableArguments',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.NonOverridableArguments', props);
    return resource.getResponseField('Job.NonOverridableArguments') as unknown as Record<string, string>;
  }

  public get connections(): GlueResponsesFetchJobJobConnections {
    return new GlueResponsesFetchJobJobConnections(this.__scope, this.__resources, this.__input);
  }

  public get maxRetries(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.MaxRetries'),
        outputPath: 'Job.MaxRetries',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.MaxRetries', props);
    return resource.getResponseField('Job.MaxRetries') as unknown as number;
  }

  public get allocatedCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.AllocatedCapacity'),
        outputPath: 'Job.AllocatedCapacity',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.AllocatedCapacity', props);
    return resource.getResponseField('Job.AllocatedCapacity') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Timeout'),
        outputPath: 'Job.Timeout',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Timeout', props);
    return resource.getResponseField('Job.Timeout') as unknown as number;
  }

  public get maxCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.MaxCapacity'),
        outputPath: 'Job.MaxCapacity',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.MaxCapacity', props);
    return resource.getResponseField('Job.MaxCapacity') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.WorkerType'),
        outputPath: 'Job.WorkerType',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.WorkerType', props);
    return resource.getResponseField('Job.WorkerType') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.NumberOfWorkers'),
        outputPath: 'Job.NumberOfWorkers',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.NumberOfWorkers', props);
    return resource.getResponseField('Job.NumberOfWorkers') as unknown as number;
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.SecurityConfiguration'),
        outputPath: 'Job.SecurityConfiguration',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.SecurityConfiguration', props);
    return resource.getResponseField('Job.SecurityConfiguration') as unknown as string;
  }

  public get notificationProperty(): GlueResponsesFetchJobJobNotificationProperty {
    return new GlueResponsesFetchJobJobNotificationProperty(this.__scope, this.__resources, this.__input);
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.GlueVersion'),
        outputPath: 'Job.GlueVersion',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.GlueVersion', props);
    return resource.getResponseField('Job.GlueVersion') as unknown as string;
  }

}

export class GlueResponsesFetchJobJobExecutionProperty {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRequest) {
  }

  public get maxConcurrentRuns(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.ExecutionProperty.MaxConcurrentRuns'),
        outputPath: 'Job.ExecutionProperty.MaxConcurrentRuns',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.ExecutionProperty.MaxConcurrentRuns', props);
    return resource.getResponseField('Job.ExecutionProperty.MaxConcurrentRuns') as unknown as number;
  }

}

export class GlueResponsesFetchJobJobCommand {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Command.Name'),
        outputPath: 'Job.Command.Name',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Command.Name', props);
    return resource.getResponseField('Job.Command.Name') as unknown as string;
  }

  public get scriptLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Command.ScriptLocation'),
        outputPath: 'Job.Command.ScriptLocation',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Command.ScriptLocation', props);
    return resource.getResponseField('Job.Command.ScriptLocation') as unknown as string;
  }

  public get pythonVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Command.PythonVersion'),
        outputPath: 'Job.Command.PythonVersion',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Command.PythonVersion', props);
    return resource.getResponseField('Job.Command.PythonVersion') as unknown as string;
  }

}

export class GlueResponsesFetchJobJobConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRequest) {
  }

  public get connections(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Connections.Connections'),
        outputPath: 'Job.Connections.Connections',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.Connections.Connections', props);
    return resource.getResponseField('Job.Connections.Connections') as unknown as string[];
  }

}

export class GlueResponsesFetchJobJobNotificationProperty {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRequest) {
  }

  public get notifyDelayAfter(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.NotificationProperty.NotifyDelayAfter'),
        outputPath: 'Job.NotificationProperty.NotifyDelayAfter',
        parameters: {
          JobName: this.__input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.Job.NotificationProperty.NotifyDelayAfter', props);
    return resource.getResponseField('Job.NotificationProperty.NotifyDelayAfter') as unknown as number;
  }

}

export class GlueResponsesFetchJobBookmark {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobBookmarkRequest) {
  }

  public get jobBookmarkEntry(): GlueResponsesFetchJobBookmarkJobBookmarkEntry {
    return new GlueResponsesFetchJobBookmarkJobBookmarkEntry(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchJobBookmarkJobBookmarkEntry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobBookmarkRequest) {
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.JobName'),
        outputPath: 'JobBookmarkEntry.JobName',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobBookmark.JobBookmarkEntry.JobName', props);
    return resource.getResponseField('JobBookmarkEntry.JobName') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.Version'),
        outputPath: 'JobBookmarkEntry.Version',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobBookmark.JobBookmarkEntry.Version', props);
    return resource.getResponseField('JobBookmarkEntry.Version') as unknown as number;
  }

  public get run(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.Run'),
        outputPath: 'JobBookmarkEntry.Run',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobBookmark.JobBookmarkEntry.Run', props);
    return resource.getResponseField('JobBookmarkEntry.Run') as unknown as number;
  }

  public get attempt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.Attempt'),
        outputPath: 'JobBookmarkEntry.Attempt',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobBookmark.JobBookmarkEntry.Attempt', props);
    return resource.getResponseField('JobBookmarkEntry.Attempt') as unknown as number;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.PreviousRunId'),
        outputPath: 'JobBookmarkEntry.PreviousRunId',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobBookmark.JobBookmarkEntry.PreviousRunId', props);
    return resource.getResponseField('JobBookmarkEntry.PreviousRunId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.RunId'),
        outputPath: 'JobBookmarkEntry.RunId',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobBookmark.JobBookmarkEntry.RunId', props);
    return resource.getResponseField('JobBookmarkEntry.RunId') as unknown as string;
  }

  public get jobBookmark(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.JobBookmark'),
        outputPath: 'JobBookmarkEntry.JobBookmark',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobBookmark.JobBookmarkEntry.JobBookmark', props);
    return resource.getResponseField('JobBookmarkEntry.JobBookmark') as unknown as string;
  }

}

export class GlueResponsesFetchJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRunRequest) {
  }

  public get jobRun(): GlueResponsesFetchJobRunJobRun {
    return new GlueResponsesFetchJobRunJobRun(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchJobRunJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRunRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Id'),
        outputPath: 'JobRun.Id',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.Id', props);
    return resource.getResponseField('JobRun.Id') as unknown as string;
  }

  public get attempt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Attempt'),
        outputPath: 'JobRun.Attempt',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.Attempt', props);
    return resource.getResponseField('JobRun.Attempt') as unknown as number;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.PreviousRunId'),
        outputPath: 'JobRun.PreviousRunId',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.PreviousRunId', props);
    return resource.getResponseField('JobRun.PreviousRunId') as unknown as string;
  }

  public get triggerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.TriggerName'),
        outputPath: 'JobRun.TriggerName',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.TriggerName', props);
    return resource.getResponseField('JobRun.TriggerName') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.JobName'),
        outputPath: 'JobRun.JobName',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.JobName', props);
    return resource.getResponseField('JobRun.JobName') as unknown as string;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.StartedOn'),
        outputPath: 'JobRun.StartedOn',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.StartedOn', props);
    return resource.getResponseField('JobRun.StartedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.LastModifiedOn'),
        outputPath: 'JobRun.LastModifiedOn',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.LastModifiedOn', props);
    return resource.getResponseField('JobRun.LastModifiedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.CompletedOn'),
        outputPath: 'JobRun.CompletedOn',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.CompletedOn', props);
    return resource.getResponseField('JobRun.CompletedOn') as unknown as string;
  }

  public get jobRunState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.JobRunState'),
        outputPath: 'JobRun.JobRunState',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.JobRunState', props);
    return resource.getResponseField('JobRun.JobRunState') as unknown as string;
  }

  public get arguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Arguments'),
        outputPath: 'JobRun.Arguments',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.Arguments', props);
    return resource.getResponseField('JobRun.Arguments') as unknown as Record<string, string>;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.ErrorMessage'),
        outputPath: 'JobRun.ErrorMessage',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.ErrorMessage', props);
    return resource.getResponseField('JobRun.ErrorMessage') as unknown as string;
  }

  public get predecessorRuns(): shapes.GluePredecessor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.PredecessorRuns'),
        outputPath: 'JobRun.PredecessorRuns',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.PredecessorRuns', props);
    return resource.getResponseField('JobRun.PredecessorRuns') as unknown as shapes.GluePredecessor[];
  }

  public get allocatedCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.AllocatedCapacity'),
        outputPath: 'JobRun.AllocatedCapacity',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.AllocatedCapacity', props);
    return resource.getResponseField('JobRun.AllocatedCapacity') as unknown as number;
  }

  public get executionTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.ExecutionTime'),
        outputPath: 'JobRun.ExecutionTime',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.ExecutionTime', props);
    return resource.getResponseField('JobRun.ExecutionTime') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Timeout'),
        outputPath: 'JobRun.Timeout',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.Timeout', props);
    return resource.getResponseField('JobRun.Timeout') as unknown as number;
  }

  public get maxCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.MaxCapacity'),
        outputPath: 'JobRun.MaxCapacity',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.MaxCapacity', props);
    return resource.getResponseField('JobRun.MaxCapacity') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.WorkerType'),
        outputPath: 'JobRun.WorkerType',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.WorkerType', props);
    return resource.getResponseField('JobRun.WorkerType') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.NumberOfWorkers'),
        outputPath: 'JobRun.NumberOfWorkers',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.NumberOfWorkers', props);
    return resource.getResponseField('JobRun.NumberOfWorkers') as unknown as number;
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.SecurityConfiguration'),
        outputPath: 'JobRun.SecurityConfiguration',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.SecurityConfiguration', props);
    return resource.getResponseField('JobRun.SecurityConfiguration') as unknown as string;
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.LogGroupName'),
        outputPath: 'JobRun.LogGroupName',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.LogGroupName', props);
    return resource.getResponseField('JobRun.LogGroupName') as unknown as string;
  }

  public get notificationProperty(): GlueResponsesFetchJobRunJobRunNotificationProperty {
    return new GlueResponsesFetchJobRunJobRunNotificationProperty(this.__scope, this.__resources, this.__input);
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.GlueVersion'),
        outputPath: 'JobRun.GlueVersion',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.GlueVersion', props);
    return resource.getResponseField('JobRun.GlueVersion') as unknown as string;
  }

}

export class GlueResponsesFetchJobRunJobRunNotificationProperty {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRunRequest) {
  }

  public get notifyDelayAfter(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.NotificationProperty.NotifyDelayAfter'),
        outputPath: 'JobRun.NotificationProperty.NotifyDelayAfter',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
          PredecessorsIncluded: this.__input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRun.JobRun.NotificationProperty.NotifyDelayAfter', props);
    return resource.getResponseField('JobRun.NotificationProperty.NotifyDelayAfter') as unknown as number;
  }

}

export class GlueResponsesFetchJobRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobRunsRequest) {
  }

  public get jobRuns(): shapes.GlueJobRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRuns.JobRuns'),
        outputPath: 'JobRuns',
        parameters: {
          JobName: this.__input.jobName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRuns.JobRuns', props);
    return resource.getResponseField('JobRuns') as unknown as shapes.GlueJobRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobName: this.__input.jobName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetJobsRequest) {
  }

  public get jobs(): shapes.GlueJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.GlueJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchMlTaskRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTaskRunRequest) {
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Status'),
        outputPath: 'Status',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.LogGroupName'),
        outputPath: 'LogGroupName',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.LogGroupName', props);
    return resource.getResponseField('LogGroupName') as unknown as string;
  }

  public get properties(): GlueResponsesFetchMlTaskRunProperties {
    return new GlueResponsesFetchMlTaskRunProperties(this.__scope, this.__resources, this.__input);
  }

  public get errorString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.ErrorString'),
        outputPath: 'ErrorString',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.ErrorString', props);
    return resource.getResponseField('ErrorString') as unknown as string;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.StartedOn'),
        outputPath: 'StartedOn',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.StartedOn', props);
    return resource.getResponseField('StartedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.LastModifiedOn'),
        outputPath: 'LastModifiedOn',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.LastModifiedOn', props);
    return resource.getResponseField('LastModifiedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.CompletedOn'),
        outputPath: 'CompletedOn',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.CompletedOn', props);
    return resource.getResponseField('CompletedOn') as unknown as string;
  }

  public get executionTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.ExecutionTime'),
        outputPath: 'ExecutionTime',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.ExecutionTime', props);
    return resource.getResponseField('ExecutionTime') as unknown as number;
  }

}

export class GlueResponsesFetchMlTaskRunProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTaskRunRequest) {
  }

  public get taskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.TaskType'),
        outputPath: 'Properties.TaskType',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.TaskType', props);
    return resource.getResponseField('Properties.TaskType') as unknown as string;
  }

  public get importLabelsTaskRunProperties(): GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties {
    return new GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties(this.__scope, this.__resources, this.__input);
  }

  public get exportLabelsTaskRunProperties(): GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties {
    return new GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties(this.__scope, this.__resources, this.__input);
  }

  public get labelingSetGenerationTaskRunProperties(): GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties {
    return new GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties(this.__scope, this.__resources, this.__input);
  }

  public get findMatchesTaskRunProperties(): GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties {
    return new GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTaskRunRequest) {
  }

  public get inputS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.InputS3Path'),
        outputPath: 'Properties.ImportLabelsTaskRunProperties.InputS3Path',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.InputS3Path', props);
    return resource.getResponseField('Properties.ImportLabelsTaskRunProperties.InputS3Path') as unknown as string;
  }

  public get replace(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.Replace'),
        outputPath: 'Properties.ImportLabelsTaskRunProperties.Replace',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.Replace', props);
    return resource.getResponseField('Properties.ImportLabelsTaskRunProperties.Replace') as unknown as boolean;
  }

}

export class GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTaskRunRequest) {
  }

  public get outputS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.ExportLabelsTaskRunProperties.OutputS3Path'),
        outputPath: 'Properties.ExportLabelsTaskRunProperties.OutputS3Path',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.ExportLabelsTaskRunProperties.OutputS3Path', props);
    return resource.getResponseField('Properties.ExportLabelsTaskRunProperties.OutputS3Path') as unknown as string;
  }

}

export class GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTaskRunRequest) {
  }

  public get outputS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path'),
        outputPath: 'Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path', props);
    return resource.getResponseField('Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path') as unknown as string;
  }

}

export class GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTaskRunRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobId'),
        outputPath: 'Properties.FindMatchesTaskRunProperties.JobId',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobId', props);
    return resource.getResponseField('Properties.FindMatchesTaskRunProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobName'),
        outputPath: 'Properties.FindMatchesTaskRunProperties.JobName',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobName', props);
    return resource.getResponseField('Properties.FindMatchesTaskRunProperties.JobName') as unknown as string;
  }

  public get jobRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobRunId'),
        outputPath: 'Properties.FindMatchesTaskRunProperties.JobRunId',
        parameters: {
          TransformId: this.__input.transformId,
          TaskRunId: this.__input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobRunId', props);
    return resource.getResponseField('Properties.FindMatchesTaskRunProperties.JobRunId') as unknown as string;
  }

}

export class GlueResponsesFetchMlTaskRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTaskRunsRequest) {
  }

  public get taskRuns(): shapes.GlueTaskRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRuns.TaskRuns'),
        outputPath: 'TaskRuns',
        parameters: {
          TransformId: this.__input.transformId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filter: {
            TaskRunType: this.__input.filter?.taskRunType,
            Status: this.__input.filter?.status,
            StartedBefore: this.__input.filter?.startedBefore,
            StartedAfter: this.__input.filter?.startedAfter,
          },
          Sort: {
            Column: this.__input.sort?.column,
            SortDirection: this.__input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRuns.TaskRuns', props);
    return resource.getResponseField('TaskRuns') as unknown as shapes.GlueTaskRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TransformId: this.__input.transformId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filter: {
            TaskRunType: this.__input.filter?.taskRunType,
            Status: this.__input.filter?.status,
            StartedBefore: this.__input.filter?.startedBefore,
            StartedAfter: this.__input.filter?.startedAfter,
          },
          Sort: {
            Column: this.__input.sort?.column,
            SortDirection: this.__input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTaskRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchMlTransform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Name'),
        outputPath: 'Name',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Description'),
        outputPath: 'Description',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Status'),
        outputPath: 'Status',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.CreatedOn'),
        outputPath: 'CreatedOn',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.CreatedOn', props);
    return resource.getResponseField('CreatedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.LastModifiedOn'),
        outputPath: 'LastModifiedOn',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.LastModifiedOn', props);
    return resource.getResponseField('LastModifiedOn') as unknown as string;
  }

  public get inputRecordTables(): shapes.GlueGlueTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.InputRecordTables'),
        outputPath: 'InputRecordTables',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.InputRecordTables', props);
    return resource.getResponseField('InputRecordTables') as unknown as shapes.GlueGlueTable[];
  }

  public get parameters(): GlueResponsesFetchMlTransformParameters {
    return new GlueResponsesFetchMlTransformParameters(this.__scope, this.__resources, this.__input);
  }

  public get evaluationMetrics(): GlueResponsesFetchMlTransformEvaluationMetrics {
    return new GlueResponsesFetchMlTransformEvaluationMetrics(this.__scope, this.__resources, this.__input);
  }

  public get labelCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.LabelCount'),
        outputPath: 'LabelCount',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.LabelCount', props);
    return resource.getResponseField('LabelCount') as unknown as number;
  }

  public get schema(): shapes.GlueSchemaColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Schema'),
        outputPath: 'Schema',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Schema', props);
    return resource.getResponseField('Schema') as unknown as shapes.GlueSchemaColumn[];
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Role'),
        outputPath: 'Role',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Role', props);
    return resource.getResponseField('Role') as unknown as string;
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.GlueVersion'),
        outputPath: 'GlueVersion',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.GlueVersion', props);
    return resource.getResponseField('GlueVersion') as unknown as string;
  }

  public get maxCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.MaxCapacity'),
        outputPath: 'MaxCapacity',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.MaxCapacity', props);
    return resource.getResponseField('MaxCapacity') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.WorkerType'),
        outputPath: 'WorkerType',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.WorkerType', props);
    return resource.getResponseField('WorkerType') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.NumberOfWorkers'),
        outputPath: 'NumberOfWorkers',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.NumberOfWorkers', props);
    return resource.getResponseField('NumberOfWorkers') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get maxRetries(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.MaxRetries'),
        outputPath: 'MaxRetries',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.MaxRetries', props);
    return resource.getResponseField('MaxRetries') as unknown as number;
  }

  public get transformEncryption(): GlueResponsesFetchMlTransformTransformEncryption {
    return new GlueResponsesFetchMlTransformTransformEncryption(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchMlTransformParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get transformType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.TransformType'),
        outputPath: 'Parameters.TransformType',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Parameters.TransformType', props);
    return resource.getResponseField('Parameters.TransformType') as unknown as string;
  }

  public get findMatchesParameters(): GlueResponsesFetchMlTransformParametersFindMatchesParameters {
    return new GlueResponsesFetchMlTransformParametersFindMatchesParameters(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchMlTransformParametersFindMatchesParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get primaryKeyColumnName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.PrimaryKeyColumnName'),
        outputPath: 'Parameters.FindMatchesParameters.PrimaryKeyColumnName',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Parameters.FindMatchesParameters.PrimaryKeyColumnName', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.PrimaryKeyColumnName') as unknown as string;
  }

  public get precisionRecallTradeoff(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.PrecisionRecallTradeoff'),
        outputPath: 'Parameters.FindMatchesParameters.PrecisionRecallTradeoff',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Parameters.FindMatchesParameters.PrecisionRecallTradeoff', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.PrecisionRecallTradeoff') as unknown as number;
  }

  public get accuracyCostTradeoff(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.AccuracyCostTradeoff'),
        outputPath: 'Parameters.FindMatchesParameters.AccuracyCostTradeoff',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Parameters.FindMatchesParameters.AccuracyCostTradeoff', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.AccuracyCostTradeoff') as unknown as number;
  }

  public get enforceProvidedLabels(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.EnforceProvidedLabels'),
        outputPath: 'Parameters.FindMatchesParameters.EnforceProvidedLabels',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.Parameters.FindMatchesParameters.EnforceProvidedLabels', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.EnforceProvidedLabels') as unknown as boolean;
  }

}

export class GlueResponsesFetchMlTransformEvaluationMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get transformType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.TransformType'),
        outputPath: 'EvaluationMetrics.TransformType',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.TransformType', props);
    return resource.getResponseField('EvaluationMetrics.TransformType') as unknown as string;
  }

  public get findMatchesMetrics(): GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics {
    return new GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get areaUnderPrCurve(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve') as unknown as number;
  }

  public get precision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Precision'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.Precision',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Precision', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.Precision') as unknown as number;
  }

  public get recall(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Recall'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.Recall',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Recall', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.Recall') as unknown as number;
  }

  public get f1(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.F1'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.F1',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.F1', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.F1') as unknown as number;
  }

  public get confusionMatrix(): GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix {
    return new GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get numTruePositives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives') as unknown as number;
  }

  public get numFalsePositives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives') as unknown as number;
  }

  public get numTrueNegatives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives') as unknown as number;
  }

  public get numFalseNegatives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives') as unknown as number;
  }

}

export class GlueResponsesFetchMlTransformTransformEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get mlUserDataEncryption(): GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption {
    return new GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption(this.__scope, this.__resources, this.__input);
  }

  public get taskRunSecurityConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformEncryption.TaskRunSecurityConfigurationName'),
        outputPath: 'TransformEncryption.TaskRunSecurityConfigurationName',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.TransformEncryption.TaskRunSecurityConfigurationName', props);
    return resource.getResponseField('TransformEncryption.TaskRunSecurityConfigurationName') as unknown as string;
  }

}

export class GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformRequest) {
  }

  public get mlUserDataEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode'),
        outputPath: 'TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode', props);
    return resource.getResponseField('TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformEncryption.MlUserDataEncryption.KmsKeyId'),
        outputPath: 'TransformEncryption.MlUserDataEncryption.KmsKeyId',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransform.TransformEncryption.MlUserDataEncryption.KmsKeyId', props);
    return resource.getResponseField('TransformEncryption.MlUserDataEncryption.KmsKeyId') as unknown as string;
  }

}

export class GlueResponsesFetchMlTransforms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMlTransformsRequest) {
  }

  public get transforms(): shapes.GlueMlTransform[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransforms.Transforms'),
        outputPath: 'Transforms',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filter: {
            Name: this.__input.filter?.name,
            TransformType: this.__input.filter?.transformType,
            Status: this.__input.filter?.status,
            GlueVersion: this.__input.filter?.glueVersion,
            CreatedBefore: this.__input.filter?.createdBefore,
            CreatedAfter: this.__input.filter?.createdAfter,
            LastModifiedBefore: this.__input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.__input.filter?.lastModifiedAfter,
            Schema: this.__input.filter?.schema,
          },
          Sort: {
            Column: this.__input.sort?.column,
            SortDirection: this.__input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransforms.Transforms', props);
    return resource.getResponseField('Transforms') as unknown as shapes.GlueMlTransform[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransforms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filter: {
            Name: this.__input.filter?.name,
            TransformType: this.__input.filter?.transformType,
            Status: this.__input.filter?.status,
            GlueVersion: this.__input.filter?.glueVersion,
            CreatedBefore: this.__input.filter?.createdBefore,
            CreatedAfter: this.__input.filter?.createdAfter,
            LastModifiedBefore: this.__input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.__input.filter?.lastModifiedAfter,
            Schema: this.__input.filter?.schema,
          },
          Sort: {
            Column: this.__input.sort?.column,
            SortDirection: this.__input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLTransforms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchMapping {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetMappingRequest) {
  }

  public get mapping(): shapes.GlueMappingEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapping',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMapping.Mapping'),
        outputPath: 'Mapping',
        parameters: {
          Source: {
            DatabaseName: this.__input.source.databaseName,
            TableName: this.__input.source.tableName,
          },
          Sinks: this.__input.sinks,
          Location: {
            Jdbc: this.__input.location?.jdbc,
            S3: this.__input.location?.s3,
            DynamoDB: this.__input.location?.dynamoDb,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMapping.Mapping', props);
    return resource.getResponseField('Mapping') as unknown as shapes.GlueMappingEntry[];
  }

}

export class GlueResponsesFetchPartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionRequest) {
  }

  public get partition(): GlueResponsesFetchPartitionPartition {
    return new GlueResponsesFetchPartitionPartition(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchPartitionPartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionRequest) {
  }

  public get values(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.Values'),
        outputPath: 'Partition.Values',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.Values', props);
    return resource.getResponseField('Partition.Values') as unknown as string[];
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.DatabaseName'),
        outputPath: 'Partition.DatabaseName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.DatabaseName', props);
    return resource.getResponseField('Partition.DatabaseName') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.TableName'),
        outputPath: 'Partition.TableName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.TableName', props);
    return resource.getResponseField('Partition.TableName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.CreationTime'),
        outputPath: 'Partition.CreationTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.CreationTime', props);
    return resource.getResponseField('Partition.CreationTime') as unknown as string;
  }

  public get lastAccessTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.LastAccessTime'),
        outputPath: 'Partition.LastAccessTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.LastAccessTime', props);
    return resource.getResponseField('Partition.LastAccessTime') as unknown as string;
  }

  public get storageDescriptor(): GlueResponsesFetchPartitionPartitionStorageDescriptor {
    return new GlueResponsesFetchPartitionPartitionStorageDescriptor(this.__scope, this.__resources, this.__input);
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.Parameters'),
        outputPath: 'Partition.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.Parameters', props);
    return resource.getResponseField('Partition.Parameters') as unknown as Record<string, string>;
  }

  public get lastAnalyzedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.LastAnalyzedTime'),
        outputPath: 'Partition.LastAnalyzedTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.LastAnalyzedTime', props);
    return resource.getResponseField('Partition.LastAnalyzedTime') as unknown as string;
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.CatalogId'),
        outputPath: 'Partition.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.CatalogId', props);
    return resource.getResponseField('Partition.CatalogId') as unknown as string;
  }

}

export class GlueResponsesFetchPartitionPartitionStorageDescriptor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionRequest) {
  }

  public get columns(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Columns'),
        outputPath: 'Partition.StorageDescriptor.Columns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.Columns', props);
    return resource.getResponseField('Partition.StorageDescriptor.Columns') as unknown as shapes.GlueColumn[];
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Location'),
        outputPath: 'Partition.StorageDescriptor.Location',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.Location', props);
    return resource.getResponseField('Partition.StorageDescriptor.Location') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.InputFormat'),
        outputPath: 'Partition.StorageDescriptor.InputFormat',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.InputFormat', props);
    return resource.getResponseField('Partition.StorageDescriptor.InputFormat') as unknown as string;
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.OutputFormat'),
        outputPath: 'Partition.StorageDescriptor.OutputFormat',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.OutputFormat', props);
    return resource.getResponseField('Partition.StorageDescriptor.OutputFormat') as unknown as string;
  }

  public get compressed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Compressed'),
        outputPath: 'Partition.StorageDescriptor.Compressed',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.Compressed', props);
    return resource.getResponseField('Partition.StorageDescriptor.Compressed') as unknown as boolean;
  }

  public get numberOfBuckets(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.NumberOfBuckets'),
        outputPath: 'Partition.StorageDescriptor.NumberOfBuckets',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.NumberOfBuckets', props);
    return resource.getResponseField('Partition.StorageDescriptor.NumberOfBuckets') as unknown as number;
  }

  public get serdeInfo(): GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo {
    return new GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo(this.__scope, this.__resources, this.__input);
  }

  public get bucketColumns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.BucketColumns'),
        outputPath: 'Partition.StorageDescriptor.BucketColumns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.BucketColumns', props);
    return resource.getResponseField('Partition.StorageDescriptor.BucketColumns') as unknown as string[];
  }

  public get sortColumns(): shapes.GlueOrder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SortColumns'),
        outputPath: 'Partition.StorageDescriptor.SortColumns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SortColumns', props);
    return resource.getResponseField('Partition.StorageDescriptor.SortColumns') as unknown as shapes.GlueOrder[];
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Parameters'),
        outputPath: 'Partition.StorageDescriptor.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.Parameters', props);
    return resource.getResponseField('Partition.StorageDescriptor.Parameters') as unknown as Record<string, string>;
  }

  public get skewedInfo(): GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo {
    return new GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo(this.__scope, this.__resources, this.__input);
  }

  public get storedAsSubDirectories(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.StoredAsSubDirectories'),
        outputPath: 'Partition.StorageDescriptor.StoredAsSubDirectories',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.StoredAsSubDirectories', props);
    return resource.getResponseField('Partition.StorageDescriptor.StoredAsSubDirectories') as unknown as boolean;
  }

  public get schemaReference(): GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference {
    return new GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SerdeInfo.Name'),
        outputPath: 'Partition.StorageDescriptor.SerdeInfo.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SerdeInfo.Name', props);
    return resource.getResponseField('Partition.StorageDescriptor.SerdeInfo.Name') as unknown as string;
  }

  public get serializationLibrary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SerdeInfo.SerializationLibrary'),
        outputPath: 'Partition.StorageDescriptor.SerdeInfo.SerializationLibrary',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SerdeInfo.SerializationLibrary', props);
    return resource.getResponseField('Partition.StorageDescriptor.SerdeInfo.SerializationLibrary') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SerdeInfo.Parameters'),
        outputPath: 'Partition.StorageDescriptor.SerdeInfo.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SerdeInfo.Parameters', props);
    return resource.getResponseField('Partition.StorageDescriptor.SerdeInfo.Parameters') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionRequest) {
  }

  public get skewedColumnNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames'),
        outputPath: 'Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames', props);
    return resource.getResponseField('Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames') as unknown as string[];
  }

  public get skewedColumnValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues'),
        outputPath: 'Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues', props);
    return resource.getResponseField('Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues') as unknown as string[];
  }

  public get skewedColumnValueLocationMaps(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps'),
        outputPath: 'Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps', props);
    return resource.getResponseField('Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionRequest) {
  }

  public get schemaId(): GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId {
    return new GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId(this.__scope, this.__resources, this.__input);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionId'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaVersionId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionId', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaVersionId') as unknown as string;
  }

  public get schemaVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber') as unknown as number;
  }

}

export class GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName') as unknown as string;
  }

}

export class GlueResponsesFetchPartitionIndexes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionIndexesRequest) {
  }

  public get partitionIndexDescriptorList(): shapes.GluePartitionIndexDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitionIndexes',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitionIndexes.PartitionIndexDescriptorList'),
        outputPath: 'PartitionIndexDescriptorList',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartitionIndexes.PartitionIndexDescriptorList', props);
    return resource.getResponseField('PartitionIndexDescriptorList') as unknown as shapes.GluePartitionIndexDescriptor[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitionIndexes',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitionIndexes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartitionIndexes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchPartitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPartitionsRequest) {
  }

  public get partitions(): shapes.GluePartition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitions.Partitions'),
        outputPath: 'Partitions',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          Expression: this.__input.expression,
          NextToken: this.__input.nextToken,
          Segment: {
            SegmentNumber: this.__input.segment?.segmentNumber,
            TotalSegments: this.__input.segment?.totalSegments,
          },
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartitions.Partitions', props);
    return resource.getResponseField('Partitions') as unknown as shapes.GluePartition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          Expression: this.__input.expression,
          NextToken: this.__input.nextToken,
          Segment: {
            SegmentNumber: this.__input.segment?.segmentNumber,
            TotalSegments: this.__input.segment?.totalSegments,
          },
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPartitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetPlanRequest) {
  }

  public get pythonScript(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlan',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPlan.PythonScript'),
        outputPath: 'PythonScript',
        parameters: {
          Mapping: this.__input.mapping,
          Source: {
            DatabaseName: this.__input.source.databaseName,
            TableName: this.__input.source.tableName,
          },
          Sinks: this.__input.sinks,
          Location: {
            Jdbc: this.__input.location?.jdbc,
            S3: this.__input.location?.s3,
            DynamoDB: this.__input.location?.dynamoDb,
          },
          Language: this.__input.language,
          AdditionalPlanOptionsMap: this.__input.additionalPlanOptionsMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlan.PythonScript', props);
    return resource.getResponseField('PythonScript') as unknown as string;
  }

  public get scalaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlan',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPlan.ScalaCode'),
        outputPath: 'ScalaCode',
        parameters: {
          Mapping: this.__input.mapping,
          Source: {
            DatabaseName: this.__input.source.databaseName,
            TableName: this.__input.source.tableName,
          },
          Sinks: this.__input.sinks,
          Location: {
            Jdbc: this.__input.location?.jdbc,
            S3: this.__input.location?.s3,
            DynamoDB: this.__input.location?.dynamoDb,
          },
          Language: this.__input.language,
          AdditionalPlanOptionsMap: this.__input.additionalPlanOptionsMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPlan.ScalaCode', props);
    return resource.getResponseField('ScalaCode') as unknown as string;
  }

}

export class GlueResponsesFetchRegistry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetRegistryInput) {
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.Status'),
        outputPath: 'Status',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistry.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistry.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.UpdatedTime'),
        outputPath: 'UpdatedTime',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistry.UpdatedTime', props);
    return resource.getResponseField('UpdatedTime') as unknown as string;
  }

}

export class GlueResponsesFetchResourcePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetResourcePoliciesRequest) {
  }

  public get getResourcePoliciesResponseList(): shapes.GlueGluePolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicies.GetResourcePoliciesResponseList'),
        outputPath: 'GetResourcePoliciesResponseList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicies.GetResourcePoliciesResponseList', props);
    return resource.getResponseField('GetResourcePoliciesResponseList') as unknown as shapes.GlueGluePolicy[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetResourcePolicyRequest) {
  }

  public get policyInJson(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.PolicyInJson'),
        outputPath: 'PolicyInJson',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.PolicyInJson', props);
    return resource.getResponseField('PolicyInJson') as unknown as string;
  }

  public get policyHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.PolicyHash'),
        outputPath: 'PolicyHash',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.PolicyHash', props);
    return resource.getResponseField('PolicyHash') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class GlueResponsesFetchSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSchemaInput) {
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.Description'),
        outputPath: 'Description',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get compatibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.Compatibility'),
        outputPath: 'Compatibility',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.Compatibility', props);
    return resource.getResponseField('Compatibility') as unknown as string;
  }

  public get schemaCheckpoint(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaCheckpoint'),
        outputPath: 'SchemaCheckpoint',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.SchemaCheckpoint', props);
    return resource.getResponseField('SchemaCheckpoint') as unknown as number;
  }

  public get latestSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.LatestSchemaVersion'),
        outputPath: 'LatestSchemaVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.LatestSchemaVersion', props);
    return resource.getResponseField('LatestSchemaVersion') as unknown as number;
  }

  public get nextSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.NextSchemaVersion'),
        outputPath: 'NextSchemaVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.NextSchemaVersion', props);
    return resource.getResponseField('NextSchemaVersion') as unknown as number;
  }

  public get schemaStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaStatus'),
        outputPath: 'SchemaStatus',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.SchemaStatus', props);
    return resource.getResponseField('SchemaStatus') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.UpdatedTime'),
        outputPath: 'UpdatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchema.UpdatedTime', props);
    return resource.getResponseField('UpdatedTime') as unknown as string;
  }

}

export class GlueResponsesFetchSchemaByDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSchemaByDefinitionInput) {
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaByDefinition.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaByDefinition.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaByDefinition.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaByDefinition.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaByDefinition.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

}

export class GlueResponsesFetchSchemaVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSchemaVersionInput) {
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersion.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get schemaDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.SchemaDefinition'),
        outputPath: 'SchemaDefinition',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersion.SchemaDefinition', props);
    return resource.getResponseField('SchemaDefinition') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersion.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersion.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersion.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersion.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

}

export class GlueResponsesFetchSchemaVersionsDiff {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSchemaVersionsDiffInput) {
  }

  public get diff(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersionsDiff',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersionsDiff.Diff'),
        outputPath: 'Diff',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          FirstSchemaVersionNumber: {
            LatestVersion: this.__input.firstSchemaVersionNumber.latestVersion,
            VersionNumber: this.__input.firstSchemaVersionNumber.versionNumber,
          },
          SecondSchemaVersionNumber: {
            LatestVersion: this.__input.secondSchemaVersionNumber.latestVersion,
            VersionNumber: this.__input.secondSchemaVersionNumber.versionNumber,
          },
          SchemaDiffType: this.__input.schemaDiffType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSchemaVersionsDiff.Diff', props);
    return resource.getResponseField('Diff') as unknown as string;
  }

}

export class GlueResponsesFetchSecurityConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSecurityConfigurationRequest) {
  }

  public get securityConfiguration(): GlueResponsesFetchSecurityConfigurationSecurityConfiguration {
    return new GlueResponsesFetchSecurityConfigurationSecurityConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchSecurityConfigurationSecurityConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSecurityConfigurationRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.Name'),
        outputPath: 'SecurityConfiguration.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfiguration.SecurityConfiguration.Name', props);
    return resource.getResponseField('SecurityConfiguration.Name') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.CreatedTimeStamp'),
        outputPath: 'SecurityConfiguration.CreatedTimeStamp',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfiguration.SecurityConfiguration.CreatedTimeStamp', props);
    return resource.getResponseField('SecurityConfiguration.CreatedTimeStamp') as unknown as string;
  }

  public get encryptionConfiguration(): GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration {
    return new GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSecurityConfigurationRequest) {
  }

  public get s3Encryption(): shapes.GlueS3Encryption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.S3Encryption'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.S3Encryption',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.S3Encryption', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.S3Encryption') as unknown as shapes.GlueS3Encryption[];
  }

  public get cloudWatchEncryption(): GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption {
    return new GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption(this.__scope, this.__resources, this.__input);
  }

  public get jobBookmarksEncryption(): GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
    return new GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSecurityConfigurationRequest) {
  }

  public get cloudWatchEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn') as unknown as string;
  }

}

export class GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSecurityConfigurationRequest) {
  }

  public get jobBookmarksEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn') as unknown as string;
  }

}

export class GlueResponsesFetchSecurityConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetSecurityConfigurationsRequest) {
  }

  public get securityConfigurations(): shapes.GlueSecurityConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfigurations',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfigurations.SecurityConfigurations'),
        outputPath: 'SecurityConfigurations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfigurations.SecurityConfigurations', props);
    return resource.getResponseField('SecurityConfigurations') as unknown as shapes.GlueSecurityConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfigurations',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSecurityConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get table(): GlueResponsesFetchTableTable {
    return new GlueResponsesFetchTableTable(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchTableTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Name'),
        outputPath: 'Table.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.Name', props);
    return resource.getResponseField('Table.Name') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.DatabaseName'),
        outputPath: 'Table.DatabaseName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.DatabaseName', props);
    return resource.getResponseField('Table.DatabaseName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Description'),
        outputPath: 'Table.Description',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.Description', props);
    return resource.getResponseField('Table.Description') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Owner'),
        outputPath: 'Table.Owner',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.Owner', props);
    return resource.getResponseField('Table.Owner') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.CreateTime'),
        outputPath: 'Table.CreateTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.CreateTime', props);
    return resource.getResponseField('Table.CreateTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.UpdateTime'),
        outputPath: 'Table.UpdateTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.UpdateTime', props);
    return resource.getResponseField('Table.UpdateTime') as unknown as string;
  }

  public get lastAccessTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.LastAccessTime'),
        outputPath: 'Table.LastAccessTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.LastAccessTime', props);
    return resource.getResponseField('Table.LastAccessTime') as unknown as string;
  }

  public get lastAnalyzedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.LastAnalyzedTime'),
        outputPath: 'Table.LastAnalyzedTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.LastAnalyzedTime', props);
    return resource.getResponseField('Table.LastAnalyzedTime') as unknown as string;
  }

  public get retention(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Retention'),
        outputPath: 'Table.Retention',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.Retention', props);
    return resource.getResponseField('Table.Retention') as unknown as number;
  }

  public get storageDescriptor(): GlueResponsesFetchTableTableStorageDescriptor {
    return new GlueResponsesFetchTableTableStorageDescriptor(this.__scope, this.__resources, this.__input);
  }

  public get partitionKeys(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.PartitionKeys'),
        outputPath: 'Table.PartitionKeys',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.PartitionKeys', props);
    return resource.getResponseField('Table.PartitionKeys') as unknown as shapes.GlueColumn[];
  }

  public get viewOriginalText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.ViewOriginalText'),
        outputPath: 'Table.ViewOriginalText',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.ViewOriginalText', props);
    return resource.getResponseField('Table.ViewOriginalText') as unknown as string;
  }

  public get viewExpandedText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.ViewExpandedText'),
        outputPath: 'Table.ViewExpandedText',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.ViewExpandedText', props);
    return resource.getResponseField('Table.ViewExpandedText') as unknown as string;
  }

  public get tableType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TableType'),
        outputPath: 'Table.TableType',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.TableType', props);
    return resource.getResponseField('Table.TableType') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Parameters'),
        outputPath: 'Table.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.Parameters', props);
    return resource.getResponseField('Table.Parameters') as unknown as Record<string, string>;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.CreatedBy'),
        outputPath: 'Table.CreatedBy',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.CreatedBy', props);
    return resource.getResponseField('Table.CreatedBy') as unknown as string;
  }

  public get isRegisteredWithLakeFormation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.IsRegisteredWithLakeFormation'),
        outputPath: 'Table.IsRegisteredWithLakeFormation',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.IsRegisteredWithLakeFormation', props);
    return resource.getResponseField('Table.IsRegisteredWithLakeFormation') as unknown as boolean;
  }

  public get targetTable(): GlueResponsesFetchTableTableTargetTable {
    return new GlueResponsesFetchTableTableTargetTable(this.__scope, this.__resources, this.__input);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.CatalogId'),
        outputPath: 'Table.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.CatalogId', props);
    return resource.getResponseField('Table.CatalogId') as unknown as string;
  }

}

export class GlueResponsesFetchTableTableStorageDescriptor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get columns(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Columns'),
        outputPath: 'Table.StorageDescriptor.Columns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.Columns', props);
    return resource.getResponseField('Table.StorageDescriptor.Columns') as unknown as shapes.GlueColumn[];
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Location'),
        outputPath: 'Table.StorageDescriptor.Location',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.Location', props);
    return resource.getResponseField('Table.StorageDescriptor.Location') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.InputFormat'),
        outputPath: 'Table.StorageDescriptor.InputFormat',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.InputFormat', props);
    return resource.getResponseField('Table.StorageDescriptor.InputFormat') as unknown as string;
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.OutputFormat'),
        outputPath: 'Table.StorageDescriptor.OutputFormat',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.OutputFormat', props);
    return resource.getResponseField('Table.StorageDescriptor.OutputFormat') as unknown as string;
  }

  public get compressed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Compressed'),
        outputPath: 'Table.StorageDescriptor.Compressed',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.Compressed', props);
    return resource.getResponseField('Table.StorageDescriptor.Compressed') as unknown as boolean;
  }

  public get numberOfBuckets(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.NumberOfBuckets'),
        outputPath: 'Table.StorageDescriptor.NumberOfBuckets',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.NumberOfBuckets', props);
    return resource.getResponseField('Table.StorageDescriptor.NumberOfBuckets') as unknown as number;
  }

  public get serdeInfo(): GlueResponsesFetchTableTableStorageDescriptorSerdeInfo {
    return new GlueResponsesFetchTableTableStorageDescriptorSerdeInfo(this.__scope, this.__resources, this.__input);
  }

  public get bucketColumns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.BucketColumns'),
        outputPath: 'Table.StorageDescriptor.BucketColumns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.BucketColumns', props);
    return resource.getResponseField('Table.StorageDescriptor.BucketColumns') as unknown as string[];
  }

  public get sortColumns(): shapes.GlueOrder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SortColumns'),
        outputPath: 'Table.StorageDescriptor.SortColumns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SortColumns', props);
    return resource.getResponseField('Table.StorageDescriptor.SortColumns') as unknown as shapes.GlueOrder[];
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Parameters'),
        outputPath: 'Table.StorageDescriptor.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.Parameters', props);
    return resource.getResponseField('Table.StorageDescriptor.Parameters') as unknown as Record<string, string>;
  }

  public get skewedInfo(): GlueResponsesFetchTableTableStorageDescriptorSkewedInfo {
    return new GlueResponsesFetchTableTableStorageDescriptorSkewedInfo(this.__scope, this.__resources, this.__input);
  }

  public get storedAsSubDirectories(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.StoredAsSubDirectories'),
        outputPath: 'Table.StorageDescriptor.StoredAsSubDirectories',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.StoredAsSubDirectories', props);
    return resource.getResponseField('Table.StorageDescriptor.StoredAsSubDirectories') as unknown as boolean;
  }

  public get schemaReference(): GlueResponsesFetchTableTableStorageDescriptorSchemaReference {
    return new GlueResponsesFetchTableTableStorageDescriptorSchemaReference(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchTableTableStorageDescriptorSerdeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SerdeInfo.Name'),
        outputPath: 'Table.StorageDescriptor.SerdeInfo.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SerdeInfo.Name', props);
    return resource.getResponseField('Table.StorageDescriptor.SerdeInfo.Name') as unknown as string;
  }

  public get serializationLibrary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SerdeInfo.SerializationLibrary'),
        outputPath: 'Table.StorageDescriptor.SerdeInfo.SerializationLibrary',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SerdeInfo.SerializationLibrary', props);
    return resource.getResponseField('Table.StorageDescriptor.SerdeInfo.SerializationLibrary') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SerdeInfo.Parameters'),
        outputPath: 'Table.StorageDescriptor.SerdeInfo.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SerdeInfo.Parameters', props);
    return resource.getResponseField('Table.StorageDescriptor.SerdeInfo.Parameters') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchTableTableStorageDescriptorSkewedInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get skewedColumnNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames'),
        outputPath: 'Table.StorageDescriptor.SkewedInfo.SkewedColumnNames',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames', props);
    return resource.getResponseField('Table.StorageDescriptor.SkewedInfo.SkewedColumnNames') as unknown as string[];
  }

  public get skewedColumnValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues'),
        outputPath: 'Table.StorageDescriptor.SkewedInfo.SkewedColumnValues',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues', props);
    return resource.getResponseField('Table.StorageDescriptor.SkewedInfo.SkewedColumnValues') as unknown as string[];
  }

  public get skewedColumnValueLocationMaps(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps'),
        outputPath: 'Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps', props);
    return resource.getResponseField('Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchTableTableStorageDescriptorSchemaReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get schemaId(): GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId {
    return new GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId(this.__scope, this.__resources, this.__input);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionId'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaVersionId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionId', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaVersionId') as unknown as string;
  }

  public get schemaVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaVersionNumber',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaVersionNumber') as unknown as number;
  }

}

export class GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName') as unknown as string;
  }

}

export class GlueResponsesFetchTableTableTargetTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableRequest) {
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TargetTable.CatalogId'),
        outputPath: 'Table.TargetTable.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.TargetTable.CatalogId', props);
    return resource.getResponseField('Table.TargetTable.CatalogId') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TargetTable.DatabaseName'),
        outputPath: 'Table.TargetTable.DatabaseName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.TargetTable.DatabaseName', props);
    return resource.getResponseField('Table.TargetTable.DatabaseName') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TargetTable.Name'),
        outputPath: 'Table.TargetTable.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTable.Table.TargetTable.Name', props);
    return resource.getResponseField('Table.TargetTable.Name') as unknown as string;
  }

}

export class GlueResponsesFetchTableVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get tableVersion(): GlueResponsesFetchTableVersionTableVersion {
    return new GlueResponsesFetchTableVersionTableVersion(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchTableVersionTableVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get table(): GlueResponsesFetchTableVersionTableVersionTable {
    return new GlueResponsesFetchTableVersionTableVersionTable(this.__scope, this.__resources, this.__input);
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.VersionId'),
        outputPath: 'TableVersion.VersionId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.VersionId', props);
    return resource.getResponseField('TableVersion.VersionId') as unknown as string;
  }

}

export class GlueResponsesFetchTableVersionTableVersionTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Name'),
        outputPath: 'TableVersion.Table.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.Name', props);
    return resource.getResponseField('TableVersion.Table.Name') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.DatabaseName'),
        outputPath: 'TableVersion.Table.DatabaseName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.DatabaseName', props);
    return resource.getResponseField('TableVersion.Table.DatabaseName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Description'),
        outputPath: 'TableVersion.Table.Description',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.Description', props);
    return resource.getResponseField('TableVersion.Table.Description') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Owner'),
        outputPath: 'TableVersion.Table.Owner',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.Owner', props);
    return resource.getResponseField('TableVersion.Table.Owner') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.CreateTime'),
        outputPath: 'TableVersion.Table.CreateTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.CreateTime', props);
    return resource.getResponseField('TableVersion.Table.CreateTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.UpdateTime'),
        outputPath: 'TableVersion.Table.UpdateTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.UpdateTime', props);
    return resource.getResponseField('TableVersion.Table.UpdateTime') as unknown as string;
  }

  public get lastAccessTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.LastAccessTime'),
        outputPath: 'TableVersion.Table.LastAccessTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.LastAccessTime', props);
    return resource.getResponseField('TableVersion.Table.LastAccessTime') as unknown as string;
  }

  public get lastAnalyzedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.LastAnalyzedTime'),
        outputPath: 'TableVersion.Table.LastAnalyzedTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.LastAnalyzedTime', props);
    return resource.getResponseField('TableVersion.Table.LastAnalyzedTime') as unknown as string;
  }

  public get retention(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Retention'),
        outputPath: 'TableVersion.Table.Retention',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.Retention', props);
    return resource.getResponseField('TableVersion.Table.Retention') as unknown as number;
  }

  public get storageDescriptor(): GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor {
    return new GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor(this.__scope, this.__resources, this.__input);
  }

  public get partitionKeys(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.PartitionKeys'),
        outputPath: 'TableVersion.Table.PartitionKeys',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.PartitionKeys', props);
    return resource.getResponseField('TableVersion.Table.PartitionKeys') as unknown as shapes.GlueColumn[];
  }

  public get viewOriginalText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.ViewOriginalText'),
        outputPath: 'TableVersion.Table.ViewOriginalText',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.ViewOriginalText', props);
    return resource.getResponseField('TableVersion.Table.ViewOriginalText') as unknown as string;
  }

  public get viewExpandedText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.ViewExpandedText'),
        outputPath: 'TableVersion.Table.ViewExpandedText',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.ViewExpandedText', props);
    return resource.getResponseField('TableVersion.Table.ViewExpandedText') as unknown as string;
  }

  public get tableType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TableType'),
        outputPath: 'TableVersion.Table.TableType',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.TableType', props);
    return resource.getResponseField('TableVersion.Table.TableType') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Parameters'),
        outputPath: 'TableVersion.Table.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.Parameters', props);
    return resource.getResponseField('TableVersion.Table.Parameters') as unknown as Record<string, string>;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.CreatedBy'),
        outputPath: 'TableVersion.Table.CreatedBy',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.CreatedBy', props);
    return resource.getResponseField('TableVersion.Table.CreatedBy') as unknown as string;
  }

  public get isRegisteredWithLakeFormation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.IsRegisteredWithLakeFormation'),
        outputPath: 'TableVersion.Table.IsRegisteredWithLakeFormation',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.IsRegisteredWithLakeFormation', props);
    return resource.getResponseField('TableVersion.Table.IsRegisteredWithLakeFormation') as unknown as boolean;
  }

  public get targetTable(): GlueResponsesFetchTableVersionTableVersionTableTargetTable {
    return new GlueResponsesFetchTableVersionTableVersionTableTargetTable(this.__scope, this.__resources, this.__input);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.CatalogId'),
        outputPath: 'TableVersion.Table.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.CatalogId', props);
    return resource.getResponseField('TableVersion.Table.CatalogId') as unknown as string;
  }

}

export class GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get columns(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Columns'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Columns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Columns', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Columns') as unknown as shapes.GlueColumn[];
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Location'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Location',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Location', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Location') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.InputFormat'),
        outputPath: 'TableVersion.Table.StorageDescriptor.InputFormat',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.InputFormat', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.InputFormat') as unknown as string;
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.OutputFormat'),
        outputPath: 'TableVersion.Table.StorageDescriptor.OutputFormat',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.OutputFormat', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.OutputFormat') as unknown as string;
  }

  public get compressed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Compressed'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Compressed',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Compressed', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Compressed') as unknown as boolean;
  }

  public get numberOfBuckets(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.NumberOfBuckets'),
        outputPath: 'TableVersion.Table.StorageDescriptor.NumberOfBuckets',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.NumberOfBuckets', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.NumberOfBuckets') as unknown as number;
  }

  public get serdeInfo(): GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo {
    return new GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo(this.__scope, this.__resources, this.__input);
  }

  public get bucketColumns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.BucketColumns'),
        outputPath: 'TableVersion.Table.StorageDescriptor.BucketColumns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.BucketColumns', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.BucketColumns') as unknown as string[];
  }

  public get sortColumns(): shapes.GlueOrder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SortColumns'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SortColumns',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SortColumns', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SortColumns') as unknown as shapes.GlueOrder[];
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Parameters'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Parameters', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Parameters') as unknown as Record<string, string>;
  }

  public get skewedInfo(): GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo {
    return new GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo(this.__scope, this.__resources, this.__input);
  }

  public get storedAsSubDirectories(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.StoredAsSubDirectories'),
        outputPath: 'TableVersion.Table.StorageDescriptor.StoredAsSubDirectories',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.StoredAsSubDirectories', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.StoredAsSubDirectories') as unknown as boolean;
  }

  public get schemaReference(): GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference {
    return new GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Name'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SerdeInfo.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Name', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SerdeInfo.Name') as unknown as string;
  }

  public get serializationLibrary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get skewedColumnNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames') as unknown as string[];
  }

  public get skewedColumnValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues') as unknown as string[];
  }

  public get skewedColumnValueLocationMaps(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get schemaId(): GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId {
    return new GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId(this.__scope, this.__resources, this.__input);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId') as unknown as string;
  }

  public get schemaVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber') as unknown as number;
  }

}

export class GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName') as unknown as string;
  }

}

export class GlueResponsesFetchTableVersionTableVersionTableTargetTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionRequest) {
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TargetTable.CatalogId'),
        outputPath: 'TableVersion.Table.TargetTable.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.TargetTable.CatalogId', props);
    return resource.getResponseField('TableVersion.Table.TargetTable.CatalogId') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TargetTable.DatabaseName'),
        outputPath: 'TableVersion.Table.TargetTable.DatabaseName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.TargetTable.DatabaseName', props);
    return resource.getResponseField('TableVersion.Table.TargetTable.DatabaseName') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TargetTable.Name'),
        outputPath: 'TableVersion.Table.TargetTable.Name',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersion.TableVersion.Table.TargetTable.Name', props);
    return resource.getResponseField('TableVersion.Table.TargetTable.Name') as unknown as string;
  }

}

export class GlueResponsesFetchTableVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTableVersionsRequest) {
  }

  public get tableVersions(): shapes.GlueTableVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersions.TableVersions'),
        outputPath: 'TableVersions',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersions.TableVersions', props);
    return resource.getResponseField('TableVersions') as unknown as shapes.GlueTableVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchTables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTablesRequest) {
  }

  public get tableList(): shapes.GlueTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTables.TableList'),
        outputPath: 'TableList',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Expression: this.__input.expression,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTables.TableList', props);
    return resource.getResponseField('TableList') as unknown as shapes.GlueTable[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTables.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Expression: this.__input.expression,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTagsRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTags',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTriggerRequest) {
  }

  public get trigger(): GlueResponsesFetchTriggerTrigger {
    return new GlueResponsesFetchTriggerTrigger(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchTriggerTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTriggerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Name'),
        outputPath: 'Trigger.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Name', props);
    return resource.getResponseField('Trigger.Name') as unknown as string;
  }

  public get workflowName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.WorkflowName'),
        outputPath: 'Trigger.WorkflowName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.WorkflowName', props);
    return resource.getResponseField('Trigger.WorkflowName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Id'),
        outputPath: 'Trigger.Id',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Id', props);
    return resource.getResponseField('Trigger.Id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Type'),
        outputPath: 'Trigger.Type',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Type', props);
    return resource.getResponseField('Trigger.Type') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.State'),
        outputPath: 'Trigger.State',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.State', props);
    return resource.getResponseField('Trigger.State') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Description'),
        outputPath: 'Trigger.Description',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Description', props);
    return resource.getResponseField('Trigger.Description') as unknown as string;
  }

  public get schedule(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Schedule'),
        outputPath: 'Trigger.Schedule',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Schedule', props);
    return resource.getResponseField('Trigger.Schedule') as unknown as string;
  }

  public get actions(): shapes.GlueAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Actions'),
        outputPath: 'Trigger.Actions',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Actions', props);
    return resource.getResponseField('Trigger.Actions') as unknown as shapes.GlueAction[];
  }

  public get predicate(): GlueResponsesFetchTriggerTriggerPredicate {
    return new GlueResponsesFetchTriggerTriggerPredicate(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchTriggerTriggerPredicate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTriggerRequest) {
  }

  public get logical(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Predicate.Logical'),
        outputPath: 'Trigger.Predicate.Logical',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Predicate.Logical', props);
    return resource.getResponseField('Trigger.Predicate.Logical') as unknown as string;
  }

  public get conditions(): shapes.GlueCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Predicate.Conditions'),
        outputPath: 'Trigger.Predicate.Conditions',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTrigger.Trigger.Predicate.Conditions', props);
    return resource.getResponseField('Trigger.Predicate.Conditions') as unknown as shapes.GlueCondition[];
  }

}

export class GlueResponsesFetchTriggers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetTriggersRequest) {
  }

  public get triggers(): shapes.GlueTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTriggers.Triggers'),
        outputPath: 'Triggers',
        parameters: {
          NextToken: this.__input.nextToken,
          DependentJobName: this.__input.dependentJobName,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTriggers.Triggers', props);
    return resource.getResponseField('Triggers') as unknown as shapes.GlueTrigger[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTriggers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          DependentJobName: this.__input.dependentJobName,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTriggers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchUserDefinedFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetUserDefinedFunctionRequest) {
  }

  public get userDefinedFunction(): GlueResponsesFetchUserDefinedFunctionUserDefinedFunction {
    return new GlueResponsesFetchUserDefinedFunctionUserDefinedFunction(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchUserDefinedFunctionUserDefinedFunction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetUserDefinedFunctionRequest) {
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.FunctionName'),
        outputPath: 'UserDefinedFunction.FunctionName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.FunctionName', props);
    return resource.getResponseField('UserDefinedFunction.FunctionName') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.DatabaseName'),
        outputPath: 'UserDefinedFunction.DatabaseName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.DatabaseName', props);
    return resource.getResponseField('UserDefinedFunction.DatabaseName') as unknown as string;
  }

  public get className(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.ClassName'),
        outputPath: 'UserDefinedFunction.ClassName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.ClassName', props);
    return resource.getResponseField('UserDefinedFunction.ClassName') as unknown as string;
  }

  public get ownerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.OwnerName'),
        outputPath: 'UserDefinedFunction.OwnerName',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.OwnerName', props);
    return resource.getResponseField('UserDefinedFunction.OwnerName') as unknown as string;
  }

  public get ownerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.OwnerType'),
        outputPath: 'UserDefinedFunction.OwnerType',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.OwnerType', props);
    return resource.getResponseField('UserDefinedFunction.OwnerType') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.CreateTime'),
        outputPath: 'UserDefinedFunction.CreateTime',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.CreateTime', props);
    return resource.getResponseField('UserDefinedFunction.CreateTime') as unknown as string;
  }

  public get resourceUris(): shapes.GlueResourceUri[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.ResourceUris'),
        outputPath: 'UserDefinedFunction.ResourceUris',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.ResourceUris', props);
    return resource.getResponseField('UserDefinedFunction.ResourceUris') as unknown as shapes.GlueResourceUri[];
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.CatalogId'),
        outputPath: 'UserDefinedFunction.CatalogId',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          FunctionName: this.__input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunction.UserDefinedFunction.CatalogId', props);
    return resource.getResponseField('UserDefinedFunction.CatalogId') as unknown as string;
  }

}

export class GlueResponsesFetchUserDefinedFunctions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetUserDefinedFunctionsRequest) {
  }

  public get userDefinedFunctions(): shapes.GlueUserDefinedFunction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunctions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunctions.UserDefinedFunctions'),
        outputPath: 'UserDefinedFunctions',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Pattern: this.__input.pattern,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunctions.UserDefinedFunctions', props);
    return resource.getResponseField('UserDefinedFunctions') as unknown as shapes.GlueUserDefinedFunction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunctions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunctions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          Pattern: this.__input.pattern,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUserDefinedFunctions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesFetchWorkflow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRequest) {
  }

  public get workflow(): GlueResponsesFetchWorkflowWorkflow {
    return new GlueResponsesFetchWorkflowWorkflow(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchWorkflowWorkflow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Name'),
        outputPath: 'Workflow.Name',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.Name', props);
    return resource.getResponseField('Workflow.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Description'),
        outputPath: 'Workflow.Description',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.Description', props);
    return resource.getResponseField('Workflow.Description') as unknown as string;
  }

  public get defaultRunProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.DefaultRunProperties'),
        outputPath: 'Workflow.DefaultRunProperties',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.DefaultRunProperties', props);
    return resource.getResponseField('Workflow.DefaultRunProperties') as unknown as Record<string, string>;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.CreatedOn'),
        outputPath: 'Workflow.CreatedOn',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.CreatedOn', props);
    return resource.getResponseField('Workflow.CreatedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastModifiedOn'),
        outputPath: 'Workflow.LastModifiedOn',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastModifiedOn', props);
    return resource.getResponseField('Workflow.LastModifiedOn') as unknown as string;
  }

  public get lastRun(): GlueResponsesFetchWorkflowWorkflowLastRun {
    return new GlueResponsesFetchWorkflowWorkflowLastRun(this.__scope, this.__resources, this.__input);
  }

  public get graph(): GlueResponsesFetchWorkflowWorkflowGraph {
    return new GlueResponsesFetchWorkflowWorkflowGraph(this.__scope, this.__resources, this.__input);
  }

  public get maxConcurrentRuns(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.MaxConcurrentRuns'),
        outputPath: 'Workflow.MaxConcurrentRuns',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.MaxConcurrentRuns', props);
    return resource.getResponseField('Workflow.MaxConcurrentRuns') as unknown as number;
  }

}

export class GlueResponsesFetchWorkflowWorkflowLastRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Name'),
        outputPath: 'Workflow.LastRun.Name',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Name', props);
    return resource.getResponseField('Workflow.LastRun.Name') as unknown as string;
  }

  public get workflowRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.WorkflowRunId'),
        outputPath: 'Workflow.LastRun.WorkflowRunId',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.WorkflowRunId', props);
    return resource.getResponseField('Workflow.LastRun.WorkflowRunId') as unknown as string;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.PreviousRunId'),
        outputPath: 'Workflow.LastRun.PreviousRunId',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.PreviousRunId', props);
    return resource.getResponseField('Workflow.LastRun.PreviousRunId') as unknown as string;
  }

  public get workflowRunProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.WorkflowRunProperties'),
        outputPath: 'Workflow.LastRun.WorkflowRunProperties',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.WorkflowRunProperties', props);
    return resource.getResponseField('Workflow.LastRun.WorkflowRunProperties') as unknown as Record<string, string>;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.StartedOn'),
        outputPath: 'Workflow.LastRun.StartedOn',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.StartedOn', props);
    return resource.getResponseField('Workflow.LastRun.StartedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.CompletedOn'),
        outputPath: 'Workflow.LastRun.CompletedOn',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.CompletedOn', props);
    return resource.getResponseField('Workflow.LastRun.CompletedOn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Status'),
        outputPath: 'Workflow.LastRun.Status',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Status', props);
    return resource.getResponseField('Workflow.LastRun.Status') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.ErrorMessage'),
        outputPath: 'Workflow.LastRun.ErrorMessage',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.ErrorMessage', props);
    return resource.getResponseField('Workflow.LastRun.ErrorMessage') as unknown as string;
  }

  public get statistics(): GlueResponsesFetchWorkflowWorkflowLastRunStatistics {
    return new GlueResponsesFetchWorkflowWorkflowLastRunStatistics(this.__scope, this.__resources, this.__input);
  }

  public get graph(): GlueResponsesFetchWorkflowWorkflowLastRunGraph {
    return new GlueResponsesFetchWorkflowWorkflowLastRunGraph(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchWorkflowWorkflowLastRunStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRequest) {
  }

  public get totalActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.TotalActions'),
        outputPath: 'Workflow.LastRun.Statistics.TotalActions',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Statistics.TotalActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.TotalActions') as unknown as number;
  }

  public get timeoutActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.TimeoutActions'),
        outputPath: 'Workflow.LastRun.Statistics.TimeoutActions',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Statistics.TimeoutActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.TimeoutActions') as unknown as number;
  }

  public get failedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.FailedActions'),
        outputPath: 'Workflow.LastRun.Statistics.FailedActions',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Statistics.FailedActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.FailedActions') as unknown as number;
  }

  public get stoppedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.StoppedActions'),
        outputPath: 'Workflow.LastRun.Statistics.StoppedActions',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Statistics.StoppedActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.StoppedActions') as unknown as number;
  }

  public get succeededActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.SucceededActions'),
        outputPath: 'Workflow.LastRun.Statistics.SucceededActions',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Statistics.SucceededActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.SucceededActions') as unknown as number;
  }

  public get runningActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.RunningActions'),
        outputPath: 'Workflow.LastRun.Statistics.RunningActions',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Statistics.RunningActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.RunningActions') as unknown as number;
  }

}

export class GlueResponsesFetchWorkflowWorkflowLastRunGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRequest) {
  }

  public get nodes(): shapes.GlueNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Graph.Nodes'),
        outputPath: 'Workflow.LastRun.Graph.Nodes',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Graph.Nodes', props);
    return resource.getResponseField('Workflow.LastRun.Graph.Nodes') as unknown as shapes.GlueNode[];
  }

  public get edges(): shapes.GlueEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Graph.Edges'),
        outputPath: 'Workflow.LastRun.Graph.Edges',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.LastRun.Graph.Edges', props);
    return resource.getResponseField('Workflow.LastRun.Graph.Edges') as unknown as shapes.GlueEdge[];
  }

}

export class GlueResponsesFetchWorkflowWorkflowGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRequest) {
  }

  public get nodes(): shapes.GlueNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Graph.Nodes'),
        outputPath: 'Workflow.Graph.Nodes',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.Graph.Nodes', props);
    return resource.getResponseField('Workflow.Graph.Nodes') as unknown as shapes.GlueNode[];
  }

  public get edges(): shapes.GlueEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Graph.Edges'),
        outputPath: 'Workflow.Graph.Edges',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflow.Workflow.Graph.Edges', props);
    return resource.getResponseField('Workflow.Graph.Edges') as unknown as shapes.GlueEdge[];
  }

}

export class GlueResponsesFetchWorkflowRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRunRequest) {
  }

  public get run(): GlueResponsesFetchWorkflowRunRun {
    return new GlueResponsesFetchWorkflowRunRun(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchWorkflowRunRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRunRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Name'),
        outputPath: 'Run.Name',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Name', props);
    return resource.getResponseField('Run.Name') as unknown as string;
  }

  public get workflowRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.WorkflowRunId'),
        outputPath: 'Run.WorkflowRunId',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.WorkflowRunId', props);
    return resource.getResponseField('Run.WorkflowRunId') as unknown as string;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.PreviousRunId'),
        outputPath: 'Run.PreviousRunId',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.PreviousRunId', props);
    return resource.getResponseField('Run.PreviousRunId') as unknown as string;
  }

  public get workflowRunProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.WorkflowRunProperties'),
        outputPath: 'Run.WorkflowRunProperties',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.WorkflowRunProperties', props);
    return resource.getResponseField('Run.WorkflowRunProperties') as unknown as Record<string, string>;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.StartedOn'),
        outputPath: 'Run.StartedOn',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.StartedOn', props);
    return resource.getResponseField('Run.StartedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.CompletedOn'),
        outputPath: 'Run.CompletedOn',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.CompletedOn', props);
    return resource.getResponseField('Run.CompletedOn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Status'),
        outputPath: 'Run.Status',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Status', props);
    return resource.getResponseField('Run.Status') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.ErrorMessage'),
        outputPath: 'Run.ErrorMessage',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.ErrorMessage', props);
    return resource.getResponseField('Run.ErrorMessage') as unknown as string;
  }

  public get statistics(): GlueResponsesFetchWorkflowRunRunStatistics {
    return new GlueResponsesFetchWorkflowRunRunStatistics(this.__scope, this.__resources, this.__input);
  }

  public get graph(): GlueResponsesFetchWorkflowRunRunGraph {
    return new GlueResponsesFetchWorkflowRunRunGraph(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesFetchWorkflowRunRunStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRunRequest) {
  }

  public get totalActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.TotalActions'),
        outputPath: 'Run.Statistics.TotalActions',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Statistics.TotalActions', props);
    return resource.getResponseField('Run.Statistics.TotalActions') as unknown as number;
  }

  public get timeoutActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.TimeoutActions'),
        outputPath: 'Run.Statistics.TimeoutActions',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Statistics.TimeoutActions', props);
    return resource.getResponseField('Run.Statistics.TimeoutActions') as unknown as number;
  }

  public get failedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.FailedActions'),
        outputPath: 'Run.Statistics.FailedActions',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Statistics.FailedActions', props);
    return resource.getResponseField('Run.Statistics.FailedActions') as unknown as number;
  }

  public get stoppedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.StoppedActions'),
        outputPath: 'Run.Statistics.StoppedActions',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Statistics.StoppedActions', props);
    return resource.getResponseField('Run.Statistics.StoppedActions') as unknown as number;
  }

  public get succeededActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.SucceededActions'),
        outputPath: 'Run.Statistics.SucceededActions',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Statistics.SucceededActions', props);
    return resource.getResponseField('Run.Statistics.SucceededActions') as unknown as number;
  }

  public get runningActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.RunningActions'),
        outputPath: 'Run.Statistics.RunningActions',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Statistics.RunningActions', props);
    return resource.getResponseField('Run.Statistics.RunningActions') as unknown as number;
  }

}

export class GlueResponsesFetchWorkflowRunRunGraph {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRunRequest) {
  }

  public get nodes(): shapes.GlueNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Graph.Nodes'),
        outputPath: 'Run.Graph.Nodes',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Graph.Nodes', props);
    return resource.getResponseField('Run.Graph.Nodes') as unknown as shapes.GlueNode[];
  }

  public get edges(): shapes.GlueEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Graph.Edges'),
        outputPath: 'Run.Graph.Edges',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          IncludeGraph: this.__input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRun.Run.Graph.Edges', props);
    return resource.getResponseField('Run.Graph.Edges') as unknown as shapes.GlueEdge[];
  }

}

export class GlueResponsesFetchWorkflowRunProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRunPropertiesRequest) {
  }

  public get runProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRunProperties',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRunProperties.RunProperties'),
        outputPath: 'RunProperties',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRunProperties.RunProperties', props);
    return resource.getResponseField('RunProperties') as unknown as Record<string, string>;
  }

}

export class GlueResponsesFetchWorkflowRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueGetWorkflowRunsRequest) {
  }

  public get runs(): shapes.GlueWorkflowRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRuns.Runs'),
        outputPath: 'Runs',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRuns.Runs', props);
    return resource.getResponseField('Runs') as unknown as shapes.GlueWorkflowRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.__input.name,
          IncludeGraph: this.__input.includeGraph,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkflowRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListCrawlers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListCrawlersRequest) {
  }

  public get crawlerNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListCrawlers.CrawlerNames'),
        outputPath: 'CrawlerNames',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCrawlers.CrawlerNames', props);
    return resource.getResponseField('CrawlerNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListCrawlers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCrawlers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListDevEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListDevEndpointsRequest) {
  }

  public get devEndpointNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListDevEndpoints.DevEndpointNames'),
        outputPath: 'DevEndpointNames',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevEndpoints.DevEndpointNames', props);
    return resource.getResponseField('DevEndpointNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListDevEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListJobsRequest) {
  }

  public get jobNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListJobs.JobNames'),
        outputPath: 'JobNames',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.JobNames', props);
    return resource.getResponseField('JobNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListMlTransforms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListMlTransformsRequest) {
  }

  public get transformIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListMLTransforms.TransformIds'),
        outputPath: 'TransformIds',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filter: {
            Name: this.__input.filter?.name,
            TransformType: this.__input.filter?.transformType,
            Status: this.__input.filter?.status,
            GlueVersion: this.__input.filter?.glueVersion,
            CreatedBefore: this.__input.filter?.createdBefore,
            CreatedAfter: this.__input.filter?.createdAfter,
            LastModifiedBefore: this.__input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.__input.filter?.lastModifiedAfter,
            Schema: this.__input.filter?.schema,
          },
          Sort: {
            Column: this.__input.sort?.column,
            SortDirection: this.__input.sort?.sortDirection,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMLTransforms.TransformIds', props);
    return resource.getResponseField('TransformIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListMLTransforms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filter: {
            Name: this.__input.filter?.name,
            TransformType: this.__input.filter?.transformType,
            Status: this.__input.filter?.status,
            GlueVersion: this.__input.filter?.glueVersion,
            CreatedBefore: this.__input.filter?.createdBefore,
            CreatedAfter: this.__input.filter?.createdAfter,
            LastModifiedBefore: this.__input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.__input.filter?.lastModifiedAfter,
            Schema: this.__input.filter?.schema,
          },
          Sort: {
            Column: this.__input.sort?.column,
            SortDirection: this.__input.sort?.sortDirection,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMLTransforms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListRegistries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListRegistriesInput) {
  }

  public get registries(): shapes.GlueRegistryListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListRegistries.Registries'),
        outputPath: 'Registries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegistries.Registries', props);
    return resource.getResponseField('Registries') as unknown as shapes.GlueRegistryListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListRegistries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegistries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListSchemaVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListSchemaVersionsInput) {
  }

  public get schemas(): shapes.GlueSchemaVersionListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemaVersions.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemaVersions.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.GlueSchemaVersionListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemaVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemaVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListSchemas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListSchemasInput) {
  }

  public get schemas(): shapes.GlueSchemaListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.GlueSchemaListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId?.registryName,
            RegistryArn: this.__input.registryId?.registryArn,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListTriggers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListTriggersRequest) {
  }

  public get triggerNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListTriggers.TriggerNames'),
        outputPath: 'TriggerNames',
        parameters: {
          NextToken: this.__input.nextToken,
          DependentJobName: this.__input.dependentJobName,
          MaxResults: this.__input.maxResults,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTriggers.TriggerNames', props);
    return resource.getResponseField('TriggerNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListTriggers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          DependentJobName: this.__input.dependentJobName,
          MaxResults: this.__input.maxResults,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTriggers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesListWorkflows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueListWorkflowsRequest) {
  }

  public get workflows(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListWorkflows.Workflows'),
        outputPath: 'Workflows',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkflows.Workflows', props);
    return resource.getResponseField('Workflows') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListWorkflows.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkflows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesPutResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GluePutResourcePolicyRequest) {
  }

  public get policyHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutResourcePolicy.PolicyHash'),
        outputPath: 'PolicyHash',
        parameters: {
          PolicyInJson: this.__input.policyInJson,
          ResourceArn: this.__input.resourceArn,
          PolicyHashCondition: this.__input.policyHashCondition,
          PolicyExistsCondition: this.__input.policyExistsCondition,
          EnableHybrid: this.__input.enableHybrid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResourcePolicy.PolicyHash', props);
    return resource.getResponseField('PolicyHash') as unknown as string;
  }

}

export class GlueResponsesPutSchemaVersionMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GluePutSchemaVersionMetadataInput) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get latestVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as boolean;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get metadataKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.MetadataKey'),
        outputPath: 'MetadataKey',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.MetadataKey', props);
    return resource.getResponseField('MetadataKey') as unknown as string;
  }

  public get metadataValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.MetadataValue'),
        outputPath: 'MetadataValue',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSchemaVersionMetadata.MetadataValue', props);
    return resource.getResponseField('MetadataValue') as unknown as string;
  }

}

export class GlueResponsesQuerySchemaVersionMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueQuerySchemaVersionMetadataInput) {
  }

  public get metadataInfoMap(): Record<string, shapes.GlueMetadataInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'querySchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.QuerySchemaVersionMetadata.MetadataInfoMap'),
        outputPath: 'MetadataInfoMap',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataList: this.__input.metadataList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QuerySchemaVersionMetadata.MetadataInfoMap', props);
    return resource.getResponseField('MetadataInfoMap') as unknown as Record<string, shapes.GlueMetadataInfo>;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'querySchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.QuerySchemaVersionMetadata.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataList: this.__input.metadataList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QuerySchemaVersionMetadata.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'querySchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.QuerySchemaVersionMetadata.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataList: this.__input.metadataList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QuerySchemaVersionMetadata.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueResponsesRegisterSchemaVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueRegisterSchemaVersionInput) {
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RegisterSchemaVersion.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterSchemaVersion.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RegisterSchemaVersion.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterSchemaVersion.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RegisterSchemaVersion.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaDefinition: this.__input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterSchemaVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueResponsesRemoveSchemaVersionMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueRemoveSchemaVersionMetadataInput) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get latestVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as boolean;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get metadataKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.MetadataKey'),
        outputPath: 'MetadataKey',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.MetadataKey', props);
    return resource.getResponseField('MetadataKey') as unknown as string;
  }

  public get metadataValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.MetadataValue'),
        outputPath: 'MetadataValue',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId?.schemaArn,
            SchemaName: this.__input.schemaId?.schemaName,
            RegistryName: this.__input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.__input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.__input.metadataKeyValue.metadataKey,
            MetadataValue: this.__input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveSchemaVersionMetadata.MetadataValue', props);
    return resource.getResponseField('MetadataValue') as unknown as string;
  }

}

export class GlueResponsesResetJobBookmark {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueResetJobBookmarkRequest) {
  }

  public get jobBookmarkEntry(): GlueResponsesResetJobBookmarkJobBookmarkEntry {
    return new GlueResponsesResetJobBookmarkJobBookmarkEntry(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesResetJobBookmarkJobBookmarkEntry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueResetJobBookmarkRequest) {
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.JobName'),
        outputPath: 'JobBookmarkEntry.JobName',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetJobBookmark.JobBookmarkEntry.JobName', props);
    return resource.getResponseField('JobBookmarkEntry.JobName') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.Version'),
        outputPath: 'JobBookmarkEntry.Version',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetJobBookmark.JobBookmarkEntry.Version', props);
    return resource.getResponseField('JobBookmarkEntry.Version') as unknown as number;
  }

  public get run(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.Run'),
        outputPath: 'JobBookmarkEntry.Run',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetJobBookmark.JobBookmarkEntry.Run', props);
    return resource.getResponseField('JobBookmarkEntry.Run') as unknown as number;
  }

  public get attempt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.Attempt'),
        outputPath: 'JobBookmarkEntry.Attempt',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetJobBookmark.JobBookmarkEntry.Attempt', props);
    return resource.getResponseField('JobBookmarkEntry.Attempt') as unknown as number;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.PreviousRunId'),
        outputPath: 'JobBookmarkEntry.PreviousRunId',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetJobBookmark.JobBookmarkEntry.PreviousRunId', props);
    return resource.getResponseField('JobBookmarkEntry.PreviousRunId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.RunId'),
        outputPath: 'JobBookmarkEntry.RunId',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetJobBookmark.JobBookmarkEntry.RunId', props);
    return resource.getResponseField('JobBookmarkEntry.RunId') as unknown as string;
  }

  public get jobBookmark(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.JobBookmark'),
        outputPath: 'JobBookmarkEntry.JobBookmark',
        parameters: {
          JobName: this.__input.jobName,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetJobBookmark.JobBookmarkEntry.JobBookmark', props);
    return resource.getResponseField('JobBookmarkEntry.JobBookmark') as unknown as string;
  }

}

export class GlueResponsesResumeWorkflowRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueResumeWorkflowRunRequest) {
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResumeWorkflowRun.RunId'),
        outputPath: 'RunId',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          NodeIds: this.__input.nodeIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeWorkflowRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

  public get nodeIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResumeWorkflowRun.NodeIds'),
        outputPath: 'NodeIds',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
          NodeIds: this.__input.nodeIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeWorkflowRun.NodeIds', props);
    return resource.getResponseField('NodeIds') as unknown as string[];
  }

}

export class GlueResponsesSearchTables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueSearchTablesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.SearchTables.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SearchText: this.__input.searchText,
          SortCriteria: this.__input.sortCriteria,
          MaxResults: this.__input.maxResults,
          ResourceShareType: this.__input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tableList(): shapes.GlueTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.SearchTables.TableList'),
        outputPath: 'TableList',
        parameters: {
          CatalogId: this.__input.catalogId,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          SearchText: this.__input.searchText,
          SortCriteria: this.__input.sortCriteria,
          MaxResults: this.__input.maxResults,
          ResourceShareType: this.__input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchTables.TableList', props);
    return resource.getResponseField('TableList') as unknown as shapes.GlueTable[];
  }

}

export class GlueResponsesStartExportLabelsTaskRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStartExportLabelsTaskRunRequest) {
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExportLabelsTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartExportLabelsTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.__input.transformId,
          OutputS3Path: this.__input.outputS3Path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExportLabelsTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueResponsesStartImportLabelsTaskRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStartImportLabelsTaskRunRequest) {
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportLabelsTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartImportLabelsTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.__input.transformId,
          InputS3Path: this.__input.inputS3Path,
          ReplaceAllLabels: this.__input.replaceAllLabels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportLabelsTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueResponsesStartJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStartJobRunRequest) {
  }

  public get jobRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartJobRun.JobRunId'),
        outputPath: 'JobRunId',
        parameters: {
          JobName: this.__input.jobName,
          JobRunId: this.__input.jobRunId,
          Arguments: this.__input.arguments,
          AllocatedCapacity: this.__input.allocatedCapacity,
          Timeout: this.__input.timeout,
          MaxCapacity: this.__input.maxCapacity,
          SecurityConfiguration: this.__input.securityConfiguration,
          NotificationProperty: {
            NotifyDelayAfter: this.__input.notificationProperty?.notifyDelayAfter,
          },
          WorkerType: this.__input.workerType,
          NumberOfWorkers: this.__input.numberOfWorkers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJobRun.JobRunId', props);
    return resource.getResponseField('JobRunId') as unknown as string;
  }

}

export class GlueResponsesStartMlEvaluationTaskRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStartMlEvaluationTaskRunRequest) {
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMlEvaluationTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartMLEvaluationTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.__input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMLEvaluationTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueResponsesStartMlLabelingSetGenerationTaskRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStartMlLabelingSetGenerationTaskRunRequest) {
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMlLabelingSetGenerationTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartMLLabelingSetGenerationTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.__input.transformId,
          OutputS3Path: this.__input.outputS3Path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMLLabelingSetGenerationTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueResponsesStartTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStartTriggerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueResponsesStartWorkflowRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStartWorkflowRunRequest) {
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartWorkflowRun.RunId'),
        outputPath: 'RunId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartWorkflowRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

}

export class GlueResponsesStopTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueStopTriggerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueResponsesUpdateColumnStatisticsForPartition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateColumnStatisticsForPartitionRequest) {
  }

  public get errors(): shapes.GlueColumnStatisticsError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateColumnStatisticsForPartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          PartitionValues: this.__input.partitionValues,
          ColumnStatisticsList: this.__input.columnStatisticsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateColumnStatisticsForPartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnStatisticsError[];
  }

}

export class GlueResponsesUpdateColumnStatisticsForTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateColumnStatisticsForTableRequest) {
  }

  public get errors(): shapes.GlueColumnStatisticsError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateColumnStatisticsForTable.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.__input.catalogId,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
          ColumnStatisticsList: this.__input.columnStatisticsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateColumnStatisticsForTable.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnStatisticsError[];
  }

}

export class GlueResponsesUpdateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateJobRequest) {
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateJob.JobName'),
        outputPath: 'JobName',
        parameters: {
          JobName: this.__input.jobName,
          JobUpdate: {
            Description: this.__input.jobUpdate.description,
            LogUri: this.__input.jobUpdate.logUri,
            Role: this.__input.jobUpdate.role,
            ExecutionProperty: {
              MaxConcurrentRuns: this.__input.jobUpdate.executionProperty?.maxConcurrentRuns,
            },
            Command: {
              Name: this.__input.jobUpdate.command?.name,
              ScriptLocation: this.__input.jobUpdate.command?.scriptLocation,
              PythonVersion: this.__input.jobUpdate.command?.pythonVersion,
            },
            DefaultArguments: this.__input.jobUpdate.defaultArguments,
            NonOverridableArguments: this.__input.jobUpdate.nonOverridableArguments,
            Connections: {
              Connections: this.__input.jobUpdate.connections?.connections,
            },
            MaxRetries: this.__input.jobUpdate.maxRetries,
            AllocatedCapacity: this.__input.jobUpdate.allocatedCapacity,
            Timeout: this.__input.jobUpdate.timeout,
            MaxCapacity: this.__input.jobUpdate.maxCapacity,
            WorkerType: this.__input.jobUpdate.workerType,
            NumberOfWorkers: this.__input.jobUpdate.numberOfWorkers,
            SecurityConfiguration: this.__input.jobUpdate.securityConfiguration,
            NotificationProperty: {
              NotifyDelayAfter: this.__input.jobUpdate.notificationProperty?.notifyDelayAfter,
            },
            GlueVersion: this.__input.jobUpdate.glueVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJob.JobName', props);
    return resource.getResponseField('JobName') as unknown as string;
  }

}

export class GlueResponsesUpdateMlTransform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateMlTransformRequest) {
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.__input.transformId,
          Name: this.__input.name,
          Description: this.__input.description,
          Parameters: {
            TransformType: this.__input.parameters?.transformType,
            FindMatchesParameters: {
              PrimaryKeyColumnName: this.__input.parameters?.findMatchesParameters?.primaryKeyColumnName,
              PrecisionRecallTradeoff: this.__input.parameters?.findMatchesParameters?.precisionRecallTradeoff,
              AccuracyCostTradeoff: this.__input.parameters?.findMatchesParameters?.accuracyCostTradeoff,
              EnforceProvidedLabels: this.__input.parameters?.findMatchesParameters?.enforceProvidedLabels,
            },
          },
          Role: this.__input.role,
          GlueVersion: this.__input.glueVersion,
          MaxCapacity: this.__input.maxCapacity,
          WorkerType: this.__input.workerType,
          NumberOfWorkers: this.__input.numberOfWorkers,
          Timeout: this.__input.timeout,
          MaxRetries: this.__input.maxRetries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

}

export class GlueResponsesUpdateRegistry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateRegistryInput) {
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.__input.registryId.registryName,
            RegistryArn: this.__input.registryId.registryArn,
          },
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

}

export class GlueResponsesUpdateSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateSchemaInput) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateSchema.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.__input.schemaId.schemaArn,
            SchemaName: this.__input.schemaId.schemaName,
            RegistryName: this.__input.schemaId.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.__input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.__input.schemaVersionNumber?.versionNumber,
          },
          Compatibility: this.__input.compatibility,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

}

export class GlueResponsesUpdateTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateTriggerRequest) {
  }

  public get trigger(): GlueResponsesUpdateTriggerTrigger {
    return new GlueResponsesUpdateTriggerTrigger(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesUpdateTriggerTrigger {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateTriggerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Name'),
        outputPath: 'Trigger.Name',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Name', props);
    return resource.getResponseField('Trigger.Name') as unknown as string;
  }

  public get workflowName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.WorkflowName'),
        outputPath: 'Trigger.WorkflowName',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.WorkflowName', props);
    return resource.getResponseField('Trigger.WorkflowName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Id'),
        outputPath: 'Trigger.Id',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Id', props);
    return resource.getResponseField('Trigger.Id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Type'),
        outputPath: 'Trigger.Type',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Type', props);
    return resource.getResponseField('Trigger.Type') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.State'),
        outputPath: 'Trigger.State',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.State', props);
    return resource.getResponseField('Trigger.State') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Description'),
        outputPath: 'Trigger.Description',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Description', props);
    return resource.getResponseField('Trigger.Description') as unknown as string;
  }

  public get schedule(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Schedule'),
        outputPath: 'Trigger.Schedule',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Schedule', props);
    return resource.getResponseField('Trigger.Schedule') as unknown as string;
  }

  public get actions(): shapes.GlueAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Actions'),
        outputPath: 'Trigger.Actions',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Actions', props);
    return resource.getResponseField('Trigger.Actions') as unknown as shapes.GlueAction[];
  }

  public get predicate(): GlueResponsesUpdateTriggerTriggerPredicate {
    return new GlueResponsesUpdateTriggerTriggerPredicate(this.__scope, this.__resources, this.__input);
  }

}

export class GlueResponsesUpdateTriggerTriggerPredicate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateTriggerRequest) {
  }

  public get logical(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Predicate.Logical'),
        outputPath: 'Trigger.Predicate.Logical',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Predicate.Logical', props);
    return resource.getResponseField('Trigger.Predicate.Logical') as unknown as string;
  }

  public get conditions(): shapes.GlueCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Predicate.Conditions'),
        outputPath: 'Trigger.Predicate.Conditions',
        parameters: {
          Name: this.__input.name,
          TriggerUpdate: {
            Name: this.__input.triggerUpdate.name,
            Description: this.__input.triggerUpdate.description,
            Schedule: this.__input.triggerUpdate.schedule,
            Actions: this.__input.triggerUpdate.actions,
            Predicate: {
              Logical: this.__input.triggerUpdate.predicate?.logical,
              Conditions: this.__input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrigger.Trigger.Predicate.Conditions', props);
    return resource.getResponseField('Trigger.Predicate.Conditions') as unknown as shapes.GlueCondition[];
  }

}

export class GlueResponsesUpdateWorkflow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlueUpdateWorkflowRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateWorkflow.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          DefaultRunProperties: this.__input.defaultRunProperties,
          MaxConcurrentRuns: this.__input.maxConcurrentRuns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkflow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

