import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DataBrewClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchDeleteRecipeVersion(input: shapes.DataBrewBatchDeleteRecipeVersionRequest): DataBrewResponsesBatchDeleteRecipeVersion {
    return new DataBrewResponsesBatchDeleteRecipeVersion(this, this.__resources, input);
  }

  public createDataset(input: shapes.DataBrewCreateDatasetRequest): DataBrewResponsesCreateDataset {
    return new DataBrewResponsesCreateDataset(this, this.__resources, input);
  }

  public createProfileJob(input: shapes.DataBrewCreateProfileJobRequest): DataBrewResponsesCreateProfileJob {
    return new DataBrewResponsesCreateProfileJob(this, this.__resources, input);
  }

  public createProject(input: shapes.DataBrewCreateProjectRequest): DataBrewResponsesCreateProject {
    return new DataBrewResponsesCreateProject(this, this.__resources, input);
  }

  public createRecipe(input: shapes.DataBrewCreateRecipeRequest): DataBrewResponsesCreateRecipe {
    return new DataBrewResponsesCreateRecipe(this, this.__resources, input);
  }

  public createRecipeJob(input: shapes.DataBrewCreateRecipeJobRequest): DataBrewResponsesCreateRecipeJob {
    return new DataBrewResponsesCreateRecipeJob(this, this.__resources, input);
  }

  public createSchedule(input: shapes.DataBrewCreateScheduleRequest): DataBrewResponsesCreateSchedule {
    return new DataBrewResponsesCreateSchedule(this, this.__resources, input);
  }

  public deleteDataset(input: shapes.DataBrewDeleteDatasetRequest): DataBrewResponsesDeleteDataset {
    return new DataBrewResponsesDeleteDataset(this, this.__resources, input);
  }

  public deleteJob(input: shapes.DataBrewDeleteJobRequest): DataBrewResponsesDeleteJob {
    return new DataBrewResponsesDeleteJob(this, this.__resources, input);
  }

  public deleteProject(input: shapes.DataBrewDeleteProjectRequest): DataBrewResponsesDeleteProject {
    return new DataBrewResponsesDeleteProject(this, this.__resources, input);
  }

  public deleteRecipeVersion(input: shapes.DataBrewDeleteRecipeVersionRequest): DataBrewResponsesDeleteRecipeVersion {
    return new DataBrewResponsesDeleteRecipeVersion(this, this.__resources, input);
  }

  public deleteSchedule(input: shapes.DataBrewDeleteScheduleRequest): DataBrewResponsesDeleteSchedule {
    return new DataBrewResponsesDeleteSchedule(this, this.__resources, input);
  }

  public describeDataset(input: shapes.DataBrewDescribeDatasetRequest): DataBrewResponsesDescribeDataset {
    return new DataBrewResponsesDescribeDataset(this, this.__resources, input);
  }

  public describeJob(input: shapes.DataBrewDescribeJobRequest): DataBrewResponsesDescribeJob {
    return new DataBrewResponsesDescribeJob(this, this.__resources, input);
  }

  public describeJobRun(input: shapes.DataBrewDescribeJobRunRequest): DataBrewResponsesDescribeJobRun {
    return new DataBrewResponsesDescribeJobRun(this, this.__resources, input);
  }

  public describeProject(input: shapes.DataBrewDescribeProjectRequest): DataBrewResponsesDescribeProject {
    return new DataBrewResponsesDescribeProject(this, this.__resources, input);
  }

  public describeRecipe(input: shapes.DataBrewDescribeRecipeRequest): DataBrewResponsesDescribeRecipe {
    return new DataBrewResponsesDescribeRecipe(this, this.__resources, input);
  }

  public describeSchedule(input: shapes.DataBrewDescribeScheduleRequest): DataBrewResponsesDescribeSchedule {
    return new DataBrewResponsesDescribeSchedule(this, this.__resources, input);
  }

  public listDatasets(input: shapes.DataBrewListDatasetsRequest): DataBrewResponsesListDatasets {
    return new DataBrewResponsesListDatasets(this, this.__resources, input);
  }

  public listJobRuns(input: shapes.DataBrewListJobRunsRequest): DataBrewResponsesListJobRuns {
    return new DataBrewResponsesListJobRuns(this, this.__resources, input);
  }

  public listJobs(input: shapes.DataBrewListJobsRequest): DataBrewResponsesListJobs {
    return new DataBrewResponsesListJobs(this, this.__resources, input);
  }

  public listProjects(input: shapes.DataBrewListProjectsRequest): DataBrewResponsesListProjects {
    return new DataBrewResponsesListProjects(this, this.__resources, input);
  }

  public listRecipeVersions(input: shapes.DataBrewListRecipeVersionsRequest): DataBrewResponsesListRecipeVersions {
    return new DataBrewResponsesListRecipeVersions(this, this.__resources, input);
  }

  public listRecipes(input: shapes.DataBrewListRecipesRequest): DataBrewResponsesListRecipes {
    return new DataBrewResponsesListRecipes(this, this.__resources, input);
  }

  public listSchedules(input: shapes.DataBrewListSchedulesRequest): DataBrewResponsesListSchedules {
    return new DataBrewResponsesListSchedules(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.DataBrewListTagsForResourceRequest): DataBrewResponsesListTagsForResource {
    return new DataBrewResponsesListTagsForResource(this, this.__resources, input);
  }

  public publishRecipe(input: shapes.DataBrewPublishRecipeRequest): DataBrewResponsesPublishRecipe {
    return new DataBrewResponsesPublishRecipe(this, this.__resources, input);
  }

  public sendProjectSessionAction(input: shapes.DataBrewSendProjectSessionActionRequest): DataBrewResponsesSendProjectSessionAction {
    return new DataBrewResponsesSendProjectSessionAction(this, this.__resources, input);
  }

  public startJobRun(input: shapes.DataBrewStartJobRunRequest): DataBrewResponsesStartJobRun {
    return new DataBrewResponsesStartJobRun(this, this.__resources, input);
  }

  public startProjectSession(input: shapes.DataBrewStartProjectSessionRequest): DataBrewResponsesStartProjectSession {
    return new DataBrewResponsesStartProjectSession(this, this.__resources, input);
  }

  public stopJobRun(input: shapes.DataBrewStopJobRunRequest): DataBrewResponsesStopJobRun {
    return new DataBrewResponsesStopJobRun(this, this.__resources, input);
  }

  public tagResource(input: shapes.DataBrewTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.DataBrewUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDataset(input: shapes.DataBrewUpdateDatasetRequest): DataBrewResponsesUpdateDataset {
    return new DataBrewResponsesUpdateDataset(this, this.__resources, input);
  }

  public updateProfileJob(input: shapes.DataBrewUpdateProfileJobRequest): DataBrewResponsesUpdateProfileJob {
    return new DataBrewResponsesUpdateProfileJob(this, this.__resources, input);
  }

  public updateProject(input: shapes.DataBrewUpdateProjectRequest): DataBrewResponsesUpdateProject {
    return new DataBrewResponsesUpdateProject(this, this.__resources, input);
  }

  public updateRecipe(input: shapes.DataBrewUpdateRecipeRequest): DataBrewResponsesUpdateRecipe {
    return new DataBrewResponsesUpdateRecipe(this, this.__resources, input);
  }

  public updateRecipeJob(input: shapes.DataBrewUpdateRecipeJobRequest): DataBrewResponsesUpdateRecipeJob {
    return new DataBrewResponsesUpdateRecipeJob(this, this.__resources, input);
  }

  public updateSchedule(input: shapes.DataBrewUpdateScheduleRequest): DataBrewResponsesUpdateSchedule {
    return new DataBrewResponsesUpdateSchedule(this, this.__resources, input);
  }

}

export class DataBrewResponsesBatchDeleteRecipeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewBatchDeleteRecipeVersionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteRecipeVersion',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.BatchDeleteRecipeVersion.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          RecipeVersions: this.__input.recipeVersions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteRecipeVersion.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get errors(): shapes.DataBrewRecipeVersionErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteRecipeVersion',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.BatchDeleteRecipeVersion.Errors'),
        outputPath: 'Errors',
        parameters: {
          Name: this.__input.name,
          RecipeVersions: this.__input.recipeVersions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteRecipeVersion.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.DataBrewRecipeVersionErrorDetail[];
  }

}

export class DataBrewResponsesCreateDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewCreateDatasetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.CreateDataset.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          Format: this.__input.format,
          FormatOptions: {
            Json: {
              MultiLine: this.__input.formatOptions?.json?.multiLine,
            },
            Excel: {
              SheetNames: this.__input.formatOptions?.excel?.sheetNames,
              SheetIndexes: this.__input.formatOptions?.excel?.sheetIndexes,
              HeaderRow: this.__input.formatOptions?.excel?.headerRow,
            },
            Csv: {
              Delimiter: this.__input.formatOptions?.csv?.delimiter,
              HeaderRow: this.__input.formatOptions?.csv?.headerRow,
            },
          },
          Input: {
            S3InputDefinition: {
              Bucket: this.__input.input.s3InputDefinition?.bucket,
              Key: this.__input.input.s3InputDefinition?.key,
            },
            DataCatalogInputDefinition: {
              CatalogId: this.__input.input.dataCatalogInputDefinition?.catalogId,
              DatabaseName: this.__input.input.dataCatalogInputDefinition?.databaseName,
              TableName: this.__input.input.dataCatalogInputDefinition?.tableName,
              TempDirectory: {
                Bucket: this.__input.input.dataCatalogInputDefinition?.tempDirectory?.bucket,
                Key: this.__input.input.dataCatalogInputDefinition?.tempDirectory?.key,
              },
            },
            DatabaseInputDefinition: {
              GlueConnectionName: this.__input.input.databaseInputDefinition?.glueConnectionName,
              DatabaseTableName: this.__input.input.databaseInputDefinition?.databaseTableName,
              TempDirectory: {
                Bucket: this.__input.input.databaseInputDefinition?.tempDirectory?.bucket,
                Key: this.__input.input.databaseInputDefinition?.tempDirectory?.key,
              },
            },
          },
          PathOptions: {
            LastModifiedDateCondition: {
              Expression: this.__input.pathOptions?.lastModifiedDateCondition?.expression,
              ValuesMap: this.__input.pathOptions?.lastModifiedDateCondition?.valuesMap,
            },
            FilesLimit: {
              MaxFiles: this.__input.pathOptions?.filesLimit?.maxFiles,
              OrderedBy: this.__input.pathOptions?.filesLimit?.orderedBy,
              Order: this.__input.pathOptions?.filesLimit?.order,
            },
            Parameters: this.__input.pathOptions?.parameters,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesCreateProfileJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewCreateProfileJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfileJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.CreateProfileJob.Name'),
        outputPath: 'Name',
        parameters: {
          DatasetName: this.__input.datasetName,
          EncryptionKeyArn: this.__input.encryptionKeyArn,
          EncryptionMode: this.__input.encryptionMode,
          Name: this.__input.name,
          LogSubscription: this.__input.logSubscription,
          MaxCapacity: this.__input.maxCapacity,
          MaxRetries: this.__input.maxRetries,
          OutputLocation: {
            Bucket: this.__input.outputLocation.bucket,
            Key: this.__input.outputLocation.key,
          },
          Configuration: {
            DatasetStatisticsConfiguration: {
              IncludedStatistics: this.__input.configuration?.datasetStatisticsConfiguration?.includedStatistics,
              Overrides: this.__input.configuration?.datasetStatisticsConfiguration?.overrides,
            },
            ProfileColumns: this.__input.configuration?.profileColumns,
            ColumnStatisticsConfigurations: this.__input.configuration?.columnStatisticsConfigurations,
          },
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
          Timeout: this.__input.timeout,
          JobSample: {
            Mode: this.__input.jobSample?.mode,
            Size: this.__input.jobSample?.size,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfileJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesCreateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewCreateProjectRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.CreateProject.Name'),
        outputPath: 'Name',
        parameters: {
          DatasetName: this.__input.datasetName,
          Name: this.__input.name,
          RecipeName: this.__input.recipeName,
          Sample: {
            Size: this.__input.sample?.size,
            Type: this.__input.sample?.type,
          },
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesCreateRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewCreateRecipeRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.CreateRecipe.Name'),
        outputPath: 'Name',
        parameters: {
          Description: this.__input.description,
          Name: this.__input.name,
          Steps: this.__input.steps,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRecipe.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesCreateRecipeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewCreateRecipeJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRecipeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.CreateRecipeJob.Name'),
        outputPath: 'Name',
        parameters: {
          DatasetName: this.__input.datasetName,
          EncryptionKeyArn: this.__input.encryptionKeyArn,
          EncryptionMode: this.__input.encryptionMode,
          Name: this.__input.name,
          LogSubscription: this.__input.logSubscription,
          MaxCapacity: this.__input.maxCapacity,
          MaxRetries: this.__input.maxRetries,
          Outputs: this.__input.outputs,
          DataCatalogOutputs: this.__input.dataCatalogOutputs,
          DatabaseOutputs: this.__input.databaseOutputs,
          ProjectName: this.__input.projectName,
          RecipeReference: {
            Name: this.__input.recipeReference?.name,
            RecipeVersion: this.__input.recipeReference?.recipeVersion,
          },
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRecipeJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesCreateSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewCreateScheduleRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.CreateSchedule.Name'),
        outputPath: 'Name',
        parameters: {
          JobNames: this.__input.jobNames,
          CronExpression: this.__input.cronExpression,
          Tags: this.__input.tags,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesDeleteDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDeleteDatasetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DeleteDataset.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesDeleteJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDeleteJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DeleteJob.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesDeleteProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDeleteProjectRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DeleteProject.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProject.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesDeleteRecipeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDeleteRecipeVersionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRecipeVersion',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DeleteRecipeVersion.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRecipeVersion.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get recipeVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRecipeVersion',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DeleteRecipeVersion.RecipeVersion'),
        outputPath: 'RecipeVersion',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRecipeVersion.RecipeVersion', props);
    return resource.getResponseField('RecipeVersion') as unknown as string;
  }

}

export class DataBrewResponsesDeleteSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDeleteScheduleRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DeleteSchedule.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesDescribeDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.CreateDate'),
        outputPath: 'CreateDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Format'),
        outputPath: 'Format',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Format', props);
    return resource.getResponseField('Format') as unknown as string;
  }

  public get formatOptions(): DataBrewResponsesDescribeDatasetFormatOptions {
    return new DataBrewResponsesDescribeDatasetFormatOptions(this.__scope, this.__resources, this.__input);
  }

  public get input(): DataBrewResponsesDescribeDatasetInput {
    return new DataBrewResponsesDescribeDatasetInput(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.LastModifiedBy'),
        outputPath: 'LastModifiedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.LastModifiedBy', props);
    return resource.getResponseField('LastModifiedBy') as unknown as string;
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Source'),
        outputPath: 'Source',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Source', props);
    return resource.getResponseField('Source') as unknown as string;
  }

  public get pathOptions(): DataBrewResponsesDescribeDatasetPathOptions {
    return new DataBrewResponsesDescribeDatasetPathOptions(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

}

export class DataBrewResponsesDescribeDatasetFormatOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get json(): DataBrewResponsesDescribeDatasetFormatOptionsJson {
    return new DataBrewResponsesDescribeDatasetFormatOptionsJson(this.__scope, this.__resources, this.__input);
  }

  public get excel(): DataBrewResponsesDescribeDatasetFormatOptionsExcel {
    return new DataBrewResponsesDescribeDatasetFormatOptionsExcel(this.__scope, this.__resources, this.__input);
  }

  public get csv(): DataBrewResponsesDescribeDatasetFormatOptionsCsv {
    return new DataBrewResponsesDescribeDatasetFormatOptionsCsv(this.__scope, this.__resources, this.__input);
  }

}

export class DataBrewResponsesDescribeDatasetFormatOptionsJson {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get multiLine(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.FormatOptions.Json.MultiLine'),
        outputPath: 'FormatOptions.Json.MultiLine',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.FormatOptions.Json.MultiLine', props);
    return resource.getResponseField('FormatOptions.Json.MultiLine') as unknown as boolean;
  }

}

export class DataBrewResponsesDescribeDatasetFormatOptionsExcel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get sheetNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.FormatOptions.Excel.SheetNames'),
        outputPath: 'FormatOptions.Excel.SheetNames',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.FormatOptions.Excel.SheetNames', props);
    return resource.getResponseField('FormatOptions.Excel.SheetNames') as unknown as string[];
  }

  public get sheetIndexes(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.FormatOptions.Excel.SheetIndexes'),
        outputPath: 'FormatOptions.Excel.SheetIndexes',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.FormatOptions.Excel.SheetIndexes', props);
    return resource.getResponseField('FormatOptions.Excel.SheetIndexes') as unknown as number[];
  }

  public get headerRow(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.FormatOptions.Excel.HeaderRow'),
        outputPath: 'FormatOptions.Excel.HeaderRow',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.FormatOptions.Excel.HeaderRow', props);
    return resource.getResponseField('FormatOptions.Excel.HeaderRow') as unknown as boolean;
  }

}

export class DataBrewResponsesDescribeDatasetFormatOptionsCsv {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.FormatOptions.Csv.Delimiter'),
        outputPath: 'FormatOptions.Csv.Delimiter',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.FormatOptions.Csv.Delimiter', props);
    return resource.getResponseField('FormatOptions.Csv.Delimiter') as unknown as string;
  }

  public get headerRow(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.FormatOptions.Csv.HeaderRow'),
        outputPath: 'FormatOptions.Csv.HeaderRow',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.FormatOptions.Csv.HeaderRow', props);
    return resource.getResponseField('FormatOptions.Csv.HeaderRow') as unknown as boolean;
  }

}

export class DataBrewResponsesDescribeDatasetInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get s3InputDefinition(): DataBrewResponsesDescribeDatasetInputS3InputDefinition {
    return new DataBrewResponsesDescribeDatasetInputS3InputDefinition(this.__scope, this.__resources, this.__input);
  }

  public get dataCatalogInputDefinition(): DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition {
    return new DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition(this.__scope, this.__resources, this.__input);
  }

  public get databaseInputDefinition(): DataBrewResponsesDescribeDatasetInputDatabaseInputDefinition {
    return new DataBrewResponsesDescribeDatasetInputDatabaseInputDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class DataBrewResponsesDescribeDatasetInputS3InputDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.S3InputDefinition.Bucket'),
        outputPath: 'Input.S3InputDefinition.Bucket',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.S3InputDefinition.Bucket', props);
    return resource.getResponseField('Input.S3InputDefinition.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.S3InputDefinition.Key'),
        outputPath: 'Input.S3InputDefinition.Key',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.S3InputDefinition.Key', props);
    return resource.getResponseField('Input.S3InputDefinition.Key') as unknown as string;
  }

}

export class DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DataCatalogInputDefinition.CatalogId'),
        outputPath: 'Input.DataCatalogInputDefinition.CatalogId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DataCatalogInputDefinition.CatalogId', props);
    return resource.getResponseField('Input.DataCatalogInputDefinition.CatalogId') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DataCatalogInputDefinition.DatabaseName'),
        outputPath: 'Input.DataCatalogInputDefinition.DatabaseName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DataCatalogInputDefinition.DatabaseName', props);
    return resource.getResponseField('Input.DataCatalogInputDefinition.DatabaseName') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DataCatalogInputDefinition.TableName'),
        outputPath: 'Input.DataCatalogInputDefinition.TableName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DataCatalogInputDefinition.TableName', props);
    return resource.getResponseField('Input.DataCatalogInputDefinition.TableName') as unknown as string;
  }

  public get tempDirectory(): DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory {
    return new DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory(this.__scope, this.__resources, this.__input);
  }

}

export class DataBrewResponsesDescribeDatasetInputDataCatalogInputDefinitionTempDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DataCatalogInputDefinition.TempDirectory.Bucket'),
        outputPath: 'Input.DataCatalogInputDefinition.TempDirectory.Bucket',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DataCatalogInputDefinition.TempDirectory.Bucket', props);
    return resource.getResponseField('Input.DataCatalogInputDefinition.TempDirectory.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DataCatalogInputDefinition.TempDirectory.Key'),
        outputPath: 'Input.DataCatalogInputDefinition.TempDirectory.Key',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DataCatalogInputDefinition.TempDirectory.Key', props);
    return resource.getResponseField('Input.DataCatalogInputDefinition.TempDirectory.Key') as unknown as string;
  }

}

export class DataBrewResponsesDescribeDatasetInputDatabaseInputDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get glueConnectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DatabaseInputDefinition.GlueConnectionName'),
        outputPath: 'Input.DatabaseInputDefinition.GlueConnectionName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DatabaseInputDefinition.GlueConnectionName', props);
    return resource.getResponseField('Input.DatabaseInputDefinition.GlueConnectionName') as unknown as string;
  }

  public get databaseTableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DatabaseInputDefinition.DatabaseTableName'),
        outputPath: 'Input.DatabaseInputDefinition.DatabaseTableName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DatabaseInputDefinition.DatabaseTableName', props);
    return resource.getResponseField('Input.DatabaseInputDefinition.DatabaseTableName') as unknown as string;
  }

  public get tempDirectory(): DataBrewResponsesDescribeDatasetInputDatabaseInputDefinitionTempDirectory {
    return new DataBrewResponsesDescribeDatasetInputDatabaseInputDefinitionTempDirectory(this.__scope, this.__resources, this.__input);
  }

}

export class DataBrewResponsesDescribeDatasetInputDatabaseInputDefinitionTempDirectory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DatabaseInputDefinition.TempDirectory.Bucket'),
        outputPath: 'Input.DatabaseInputDefinition.TempDirectory.Bucket',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DatabaseInputDefinition.TempDirectory.Bucket', props);
    return resource.getResponseField('Input.DatabaseInputDefinition.TempDirectory.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.Input.DatabaseInputDefinition.TempDirectory.Key'),
        outputPath: 'Input.DatabaseInputDefinition.TempDirectory.Key',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.Input.DatabaseInputDefinition.TempDirectory.Key', props);
    return resource.getResponseField('Input.DatabaseInputDefinition.TempDirectory.Key') as unknown as string;
  }

}

export class DataBrewResponsesDescribeDatasetPathOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get lastModifiedDateCondition(): DataBrewResponsesDescribeDatasetPathOptionsLastModifiedDateCondition {
    return new DataBrewResponsesDescribeDatasetPathOptionsLastModifiedDateCondition(this.__scope, this.__resources, this.__input);
  }

  public get filesLimit(): DataBrewResponsesDescribeDatasetPathOptionsFilesLimit {
    return new DataBrewResponsesDescribeDatasetPathOptionsFilesLimit(this.__scope, this.__resources, this.__input);
  }

  public get parameters(): Record<string, shapes.DataBrewDatasetParameter> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.PathOptions.Parameters'),
        outputPath: 'PathOptions.Parameters',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.PathOptions.Parameters', props);
    return resource.getResponseField('PathOptions.Parameters') as unknown as Record<string, shapes.DataBrewDatasetParameter>;
  }

}

export class DataBrewResponsesDescribeDatasetPathOptionsLastModifiedDateCondition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get expression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.PathOptions.LastModifiedDateCondition.Expression'),
        outputPath: 'PathOptions.LastModifiedDateCondition.Expression',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.PathOptions.LastModifiedDateCondition.Expression', props);
    return resource.getResponseField('PathOptions.LastModifiedDateCondition.Expression') as unknown as string;
  }

  public get valuesMap(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.PathOptions.LastModifiedDateCondition.ValuesMap'),
        outputPath: 'PathOptions.LastModifiedDateCondition.ValuesMap',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.PathOptions.LastModifiedDateCondition.ValuesMap', props);
    return resource.getResponseField('PathOptions.LastModifiedDateCondition.ValuesMap') as unknown as Record<string, string>;
  }

}

export class DataBrewResponsesDescribeDatasetPathOptionsFilesLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeDatasetRequest) {
  }

  public get maxFiles(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.PathOptions.FilesLimit.MaxFiles'),
        outputPath: 'PathOptions.FilesLimit.MaxFiles',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.PathOptions.FilesLimit.MaxFiles', props);
    return resource.getResponseField('PathOptions.FilesLimit.MaxFiles') as unknown as number;
  }

  public get orderedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.PathOptions.FilesLimit.OrderedBy'),
        outputPath: 'PathOptions.FilesLimit.OrderedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.PathOptions.FilesLimit.OrderedBy', props);
    return resource.getResponseField('PathOptions.FilesLimit.OrderedBy') as unknown as string;
  }

  public get order(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeDataset.PathOptions.FilesLimit.Order'),
        outputPath: 'PathOptions.FilesLimit.Order',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.PathOptions.FilesLimit.Order', props);
    return resource.getResponseField('PathOptions.FilesLimit.Order') as unknown as string;
  }

}

export class DataBrewResponsesDescribeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRequest) {
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.CreateDate'),
        outputPath: 'CreateDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.DatasetName'),
        outputPath: 'DatasetName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.DatasetName', props);
    return resource.getResponseField('DatasetName') as unknown as string;
  }

  public get encryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.EncryptionKeyArn'),
        outputPath: 'EncryptionKeyArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.EncryptionKeyArn', props);
    return resource.getResponseField('EncryptionKeyArn') as unknown as string;
  }

  public get encryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.EncryptionMode'),
        outputPath: 'EncryptionMode',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.EncryptionMode', props);
    return resource.getResponseField('EncryptionMode') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.Type'),
        outputPath: 'Type',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.LastModifiedBy'),
        outputPath: 'LastModifiedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.LastModifiedBy', props);
    return resource.getResponseField('LastModifiedBy') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

  public get logSubscription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.LogSubscription'),
        outputPath: 'LogSubscription',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.LogSubscription', props);
    return resource.getResponseField('LogSubscription') as unknown as string;
  }

  public get maxCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.MaxCapacity'),
        outputPath: 'MaxCapacity',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.MaxCapacity', props);
    return resource.getResponseField('MaxCapacity') as unknown as number;
  }

  public get maxRetries(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.MaxRetries'),
        outputPath: 'MaxRetries',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.MaxRetries', props);
    return resource.getResponseField('MaxRetries') as unknown as number;
  }

  public get outputs(): shapes.DataBrewOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.Outputs'),
        outputPath: 'Outputs',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.DataBrewOutput[];
  }

  public get dataCatalogOutputs(): shapes.DataBrewDataCatalogOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.DataCatalogOutputs'),
        outputPath: 'DataCatalogOutputs',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.DataCatalogOutputs', props);
    return resource.getResponseField('DataCatalogOutputs') as unknown as shapes.DataBrewDataCatalogOutput[];
  }

  public get databaseOutputs(): shapes.DataBrewDatabaseOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.DatabaseOutputs'),
        outputPath: 'DatabaseOutputs',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.DatabaseOutputs', props);
    return resource.getResponseField('DatabaseOutputs') as unknown as shapes.DataBrewDatabaseOutput[];
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.ProjectName'),
        outputPath: 'ProjectName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ProjectName', props);
    return resource.getResponseField('ProjectName') as unknown as string;
  }

  public get profileConfiguration(): DataBrewResponsesDescribeJobProfileConfiguration {
    return new DataBrewResponsesDescribeJobProfileConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get recipeReference(): DataBrewResponsesDescribeJobRecipeReference {
    return new DataBrewResponsesDescribeJobRecipeReference(this.__scope, this.__resources, this.__input);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get jobSample(): DataBrewResponsesDescribeJobJobSample {
    return new DataBrewResponsesDescribeJobJobSample(this.__scope, this.__resources, this.__input);
  }

}

export class DataBrewResponsesDescribeJobProfileConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRequest) {
  }

  public get datasetStatisticsConfiguration(): DataBrewResponsesDescribeJobProfileConfigurationDatasetStatisticsConfiguration {
    return new DataBrewResponsesDescribeJobProfileConfigurationDatasetStatisticsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get profileColumns(): shapes.DataBrewColumnSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.ProfileConfiguration.ProfileColumns'),
        outputPath: 'ProfileConfiguration.ProfileColumns',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ProfileConfiguration.ProfileColumns', props);
    return resource.getResponseField('ProfileConfiguration.ProfileColumns') as unknown as shapes.DataBrewColumnSelector[];
  }

  public get columnStatisticsConfigurations(): shapes.DataBrewColumnStatisticsConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.ProfileConfiguration.ColumnStatisticsConfigurations'),
        outputPath: 'ProfileConfiguration.ColumnStatisticsConfigurations',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ProfileConfiguration.ColumnStatisticsConfigurations', props);
    return resource.getResponseField('ProfileConfiguration.ColumnStatisticsConfigurations') as unknown as shapes.DataBrewColumnStatisticsConfiguration[];
  }

}

export class DataBrewResponsesDescribeJobProfileConfigurationDatasetStatisticsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRequest) {
  }

  public get includedStatistics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics'),
        outputPath: 'ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics', props);
    return resource.getResponseField('ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics') as unknown as string[];
  }

  public get overrides(): shapes.DataBrewStatisticOverride[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.ProfileConfiguration.DatasetStatisticsConfiguration.Overrides'),
        outputPath: 'ProfileConfiguration.DatasetStatisticsConfiguration.Overrides',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ProfileConfiguration.DatasetStatisticsConfiguration.Overrides', props);
    return resource.getResponseField('ProfileConfiguration.DatasetStatisticsConfiguration.Overrides') as unknown as shapes.DataBrewStatisticOverride[];
  }

}

export class DataBrewResponsesDescribeJobRecipeReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.RecipeReference.Name'),
        outputPath: 'RecipeReference.Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.RecipeReference.Name', props);
    return resource.getResponseField('RecipeReference.Name') as unknown as string;
  }

  public get recipeVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.RecipeReference.RecipeVersion'),
        outputPath: 'RecipeReference.RecipeVersion',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.RecipeReference.RecipeVersion', props);
    return resource.getResponseField('RecipeReference.RecipeVersion') as unknown as string;
  }

}

export class DataBrewResponsesDescribeJobJobSample {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.JobSample.Mode'),
        outputPath: 'JobSample.Mode',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobSample.Mode', props);
    return resource.getResponseField('JobSample.Mode') as unknown as string;
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJob.JobSample.Size'),
        outputPath: 'JobSample.Size',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobSample.Size', props);
    return resource.getResponseField('JobSample.Size') as unknown as number;
  }

}

export class DataBrewResponsesDescribeJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRunRequest) {
  }

  public get attempt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.Attempt'),
        outputPath: 'Attempt',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.Attempt', props);
    return resource.getResponseField('Attempt') as unknown as number;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.CompletedOn'),
        outputPath: 'CompletedOn',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.CompletedOn', props);
    return resource.getResponseField('CompletedOn') as unknown as string;
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.DatasetName'),
        outputPath: 'DatasetName',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.DatasetName', props);
    return resource.getResponseField('DatasetName') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.ErrorMessage'),
        outputPath: 'ErrorMessage',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.ErrorMessage', props);
    return resource.getResponseField('ErrorMessage') as unknown as string;
  }

  public get executionTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.ExecutionTime'),
        outputPath: 'ExecutionTime',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.ExecutionTime', props);
    return resource.getResponseField('ExecutionTime') as unknown as number;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.JobName'),
        outputPath: 'JobName',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.JobName', props);
    return resource.getResponseField('JobName') as unknown as string;
  }

  public get profileConfiguration(): DataBrewResponsesDescribeJobRunProfileConfiguration {
    return new DataBrewResponsesDescribeJobRunProfileConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.RunId'),
        outputPath: 'RunId',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.State'),
        outputPath: 'State',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get logSubscription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.LogSubscription'),
        outputPath: 'LogSubscription',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.LogSubscription', props);
    return resource.getResponseField('LogSubscription') as unknown as string;
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.LogGroupName'),
        outputPath: 'LogGroupName',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.LogGroupName', props);
    return resource.getResponseField('LogGroupName') as unknown as string;
  }

  public get outputs(): shapes.DataBrewOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.Outputs'),
        outputPath: 'Outputs',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.DataBrewOutput[];
  }

  public get dataCatalogOutputs(): shapes.DataBrewDataCatalogOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.DataCatalogOutputs'),
        outputPath: 'DataCatalogOutputs',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.DataCatalogOutputs', props);
    return resource.getResponseField('DataCatalogOutputs') as unknown as shapes.DataBrewDataCatalogOutput[];
  }

  public get databaseOutputs(): shapes.DataBrewDatabaseOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.DatabaseOutputs'),
        outputPath: 'DatabaseOutputs',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.DatabaseOutputs', props);
    return resource.getResponseField('DatabaseOutputs') as unknown as shapes.DataBrewDatabaseOutput[];
  }

  public get recipeReference(): DataBrewResponsesDescribeJobRunRecipeReference {
    return new DataBrewResponsesDescribeJobRunRecipeReference(this.__scope, this.__resources, this.__input);
  }

  public get startedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.StartedBy'),
        outputPath: 'StartedBy',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.StartedBy', props);
    return resource.getResponseField('StartedBy') as unknown as string;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.StartedOn'),
        outputPath: 'StartedOn',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.StartedOn', props);
    return resource.getResponseField('StartedOn') as unknown as string;
  }

  public get jobSample(): DataBrewResponsesDescribeJobRunJobSample {
    return new DataBrewResponsesDescribeJobRunJobSample(this.__scope, this.__resources, this.__input);
  }

}

export class DataBrewResponsesDescribeJobRunProfileConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRunRequest) {
  }

  public get datasetStatisticsConfiguration(): DataBrewResponsesDescribeJobRunProfileConfigurationDatasetStatisticsConfiguration {
    return new DataBrewResponsesDescribeJobRunProfileConfigurationDatasetStatisticsConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get profileColumns(): shapes.DataBrewColumnSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.ProfileConfiguration.ProfileColumns'),
        outputPath: 'ProfileConfiguration.ProfileColumns',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.ProfileConfiguration.ProfileColumns', props);
    return resource.getResponseField('ProfileConfiguration.ProfileColumns') as unknown as shapes.DataBrewColumnSelector[];
  }

  public get columnStatisticsConfigurations(): shapes.DataBrewColumnStatisticsConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.ProfileConfiguration.ColumnStatisticsConfigurations'),
        outputPath: 'ProfileConfiguration.ColumnStatisticsConfigurations',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.ProfileConfiguration.ColumnStatisticsConfigurations', props);
    return resource.getResponseField('ProfileConfiguration.ColumnStatisticsConfigurations') as unknown as shapes.DataBrewColumnStatisticsConfiguration[];
  }

}

export class DataBrewResponsesDescribeJobRunProfileConfigurationDatasetStatisticsConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRunRequest) {
  }

  public get includedStatistics(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics'),
        outputPath: 'ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics', props);
    return resource.getResponseField('ProfileConfiguration.DatasetStatisticsConfiguration.IncludedStatistics') as unknown as string[];
  }

  public get overrides(): shapes.DataBrewStatisticOverride[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.ProfileConfiguration.DatasetStatisticsConfiguration.Overrides'),
        outputPath: 'ProfileConfiguration.DatasetStatisticsConfiguration.Overrides',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.ProfileConfiguration.DatasetStatisticsConfiguration.Overrides', props);
    return resource.getResponseField('ProfileConfiguration.DatasetStatisticsConfiguration.Overrides') as unknown as shapes.DataBrewStatisticOverride[];
  }

}

export class DataBrewResponsesDescribeJobRunRecipeReference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRunRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.RecipeReference.Name'),
        outputPath: 'RecipeReference.Name',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.RecipeReference.Name', props);
    return resource.getResponseField('RecipeReference.Name') as unknown as string;
  }

  public get recipeVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.RecipeReference.RecipeVersion'),
        outputPath: 'RecipeReference.RecipeVersion',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.RecipeReference.RecipeVersion', props);
    return resource.getResponseField('RecipeReference.RecipeVersion') as unknown as string;
  }

}

export class DataBrewResponsesDescribeJobRunJobSample {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeJobRunRequest) {
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.JobSample.Mode'),
        outputPath: 'JobSample.Mode',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.JobSample.Mode', props);
    return resource.getResponseField('JobSample.Mode') as unknown as string;
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeJobRun.JobSample.Size'),
        outputPath: 'JobSample.Size',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.JobSample.Size', props);
    return resource.getResponseField('JobSample.Size') as unknown as number;
  }

}

export class DataBrewResponsesDescribeProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeProjectRequest) {
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.CreateDate'),
        outputPath: 'CreateDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.DatasetName'),
        outputPath: 'DatasetName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.DatasetName', props);
    return resource.getResponseField('DatasetName') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.LastModifiedBy'),
        outputPath: 'LastModifiedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.LastModifiedBy', props);
    return resource.getResponseField('LastModifiedBy') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get recipeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.RecipeName'),
        outputPath: 'RecipeName',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.RecipeName', props);
    return resource.getResponseField('RecipeName') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get sample(): DataBrewResponsesDescribeProjectSample {
    return new DataBrewResponsesDescribeProjectSample(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get sessionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.SessionStatus'),
        outputPath: 'SessionStatus',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.SessionStatus', props);
    return resource.getResponseField('SessionStatus') as unknown as string;
  }

  public get openedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.OpenedBy'),
        outputPath: 'OpenedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.OpenedBy', props);
    return resource.getResponseField('OpenedBy') as unknown as string;
  }

  public get openDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.OpenDate'),
        outputPath: 'OpenDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.OpenDate', props);
    return resource.getResponseField('OpenDate') as unknown as string;
  }

}

export class DataBrewResponsesDescribeProjectSample {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeProjectRequest) {
  }

  public get size(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.Sample.Size'),
        outputPath: 'Sample.Size',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.Sample.Size', props);
    return resource.getResponseField('Sample.Size') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeProject.Sample.Type'),
        outputPath: 'Sample.Type',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.Sample.Type', props);
    return resource.getResponseField('Sample.Type') as unknown as string;
  }

}

export class DataBrewResponsesDescribeRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeRecipeRequest) {
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.CreateDate'),
        outputPath: 'CreateDate',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.LastModifiedBy'),
        outputPath: 'LastModifiedBy',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.LastModifiedBy', props);
    return resource.getResponseField('LastModifiedBy') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.ProjectName'),
        outputPath: 'ProjectName',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.ProjectName', props);
    return resource.getResponseField('ProjectName') as unknown as string;
  }

  public get publishedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.PublishedBy'),
        outputPath: 'PublishedBy',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.PublishedBy', props);
    return resource.getResponseField('PublishedBy') as unknown as string;
  }

  public get publishedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.PublishedDate'),
        outputPath: 'PublishedDate',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.PublishedDate', props);
    return resource.getResponseField('PublishedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.Description'),
        outputPath: 'Description',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get steps(): shapes.DataBrewRecipeStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.Steps'),
        outputPath: 'Steps',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.Steps', props);
    return resource.getResponseField('Steps') as unknown as shapes.DataBrewRecipeStep[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get recipeVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeRecipe.RecipeVersion'),
        outputPath: 'RecipeVersion',
        parameters: {
          Name: this.__input.name,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.RecipeVersion', props);
    return resource.getResponseField('RecipeVersion') as unknown as string;
  }

}

export class DataBrewResponsesDescribeSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewDescribeScheduleRequest) {
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.CreateDate'),
        outputPath: 'CreateDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.CreateDate', props);
    return resource.getResponseField('CreateDate') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.CreatedBy'),
        outputPath: 'CreatedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.CreatedBy', props);
    return resource.getResponseField('CreatedBy') as unknown as string;
  }

  public get jobNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.JobNames'),
        outputPath: 'JobNames',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.JobNames', props);
    return resource.getResponseField('JobNames') as unknown as string[];
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.LastModifiedBy'),
        outputPath: 'LastModifiedBy',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.LastModifiedBy', props);
    return resource.getResponseField('LastModifiedBy') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get cronExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.CronExpression'),
        outputPath: 'CronExpression',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.CronExpression', props);
    return resource.getResponseField('CronExpression') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.DescribeSchedule.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesListDatasets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListDatasetsRequest) {
  }

  public get datasets(): shapes.DataBrewDataset[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListDatasets.Datasets'),
        outputPath: 'Datasets',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.Datasets', props);
    return resource.getResponseField('Datasets') as unknown as shapes.DataBrewDataset[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListDatasets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewResponsesListJobRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListJobRunsRequest) {
  }

  public get jobRuns(): shapes.DataBrewJobRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobRuns',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListJobRuns.JobRuns'),
        outputPath: 'JobRuns',
        parameters: {
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobRuns.JobRuns', props);
    return resource.getResponseField('JobRuns') as unknown as shapes.DataBrewJobRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobRuns',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListJobRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListJobsRequest) {
  }

  public get jobs(): shapes.DataBrewJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          DatasetName: this.__input.datasetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ProjectName: this.__input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.DataBrewJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DatasetName: this.__input.datasetName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ProjectName: this.__input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewResponsesListProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListProjectsRequest) {
  }

  public get projects(): shapes.DataBrewProject[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListProjects.Projects'),
        outputPath: 'Projects',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.Projects', props);
    return resource.getResponseField('Projects') as unknown as shapes.DataBrewProject[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListProjects.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewResponsesListRecipeVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListRecipeVersionsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecipeVersions',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListRecipeVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecipeVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get recipes(): shapes.DataBrewRecipe[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecipeVersions',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListRecipeVersions.Recipes'),
        outputPath: 'Recipes',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecipeVersions.Recipes', props);
    return resource.getResponseField('Recipes') as unknown as shapes.DataBrewRecipe[];
  }

}

export class DataBrewResponsesListRecipes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListRecipesRequest) {
  }

  public get recipes(): shapes.DataBrewRecipe[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecipes',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListRecipes.Recipes'),
        outputPath: 'Recipes',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecipes.Recipes', props);
    return resource.getResponseField('Recipes') as unknown as shapes.DataBrewRecipe[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecipes',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListRecipes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          RecipeVersion: this.__input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecipes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewResponsesListSchedules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListSchedulesRequest) {
  }

  public get schedules(): shapes.DataBrewSchedule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchedules',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListSchedules.Schedules'),
        outputPath: 'Schedules',
        parameters: {
          JobName: this.__input.jobName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchedules.Schedules', props);
    return resource.getResponseField('Schedules') as unknown as shapes.DataBrewSchedule[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchedules',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListSchedules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobName: this.__input.jobName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchedules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.ListTagsForResource.Tags'),
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

export class DataBrewResponsesPublishRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewPublishRecipeRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'publishRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.PublishRecipe.Name'),
        outputPath: 'Name',
        parameters: {
          Description: this.__input.description,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PublishRecipe.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesSendProjectSessionAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewSendProjectSessionActionRequest) {
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendProjectSessionAction',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.SendProjectSessionAction.Result'),
        outputPath: 'Result',
        parameters: {
          Preview: this.__input.preview,
          Name: this.__input.name,
          RecipeStep: {
            Action: {
              Operation: this.__input.recipeStep?.action.operation,
              Parameters: this.__input.recipeStep?.action.parameters,
            },
            ConditionExpressions: this.__input.recipeStep?.conditionExpressions,
          },
          StepIndex: this.__input.stepIndex,
          ClientSessionId: this.__input.clientSessionId,
          ViewFrame: {
            StartColumnIndex: this.__input.viewFrame?.startColumnIndex,
            ColumnRange: this.__input.viewFrame?.columnRange,
            HiddenColumns: this.__input.viewFrame?.hiddenColumns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendProjectSessionAction.Result', props);
    return resource.getResponseField('Result') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendProjectSessionAction',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.SendProjectSessionAction.Name'),
        outputPath: 'Name',
        parameters: {
          Preview: this.__input.preview,
          Name: this.__input.name,
          RecipeStep: {
            Action: {
              Operation: this.__input.recipeStep?.action.operation,
              Parameters: this.__input.recipeStep?.action.parameters,
            },
            ConditionExpressions: this.__input.recipeStep?.conditionExpressions,
          },
          StepIndex: this.__input.stepIndex,
          ClientSessionId: this.__input.clientSessionId,
          ViewFrame: {
            StartColumnIndex: this.__input.viewFrame?.startColumnIndex,
            ColumnRange: this.__input.viewFrame?.columnRange,
            HiddenColumns: this.__input.viewFrame?.hiddenColumns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendProjectSessionAction.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get actionId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendProjectSessionAction',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.SendProjectSessionAction.ActionId'),
        outputPath: 'ActionId',
        parameters: {
          Preview: this.__input.preview,
          Name: this.__input.name,
          RecipeStep: {
            Action: {
              Operation: this.__input.recipeStep?.action.operation,
              Parameters: this.__input.recipeStep?.action.parameters,
            },
            ConditionExpressions: this.__input.recipeStep?.conditionExpressions,
          },
          StepIndex: this.__input.stepIndex,
          ClientSessionId: this.__input.clientSessionId,
          ViewFrame: {
            StartColumnIndex: this.__input.viewFrame?.startColumnIndex,
            ColumnRange: this.__input.viewFrame?.columnRange,
            HiddenColumns: this.__input.viewFrame?.hiddenColumns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendProjectSessionAction.ActionId', props);
    return resource.getResponseField('ActionId') as unknown as number;
  }

}

export class DataBrewResponsesStartJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewStartJobRunRequest) {
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.StartJobRun.RunId'),
        outputPath: 'RunId',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJobRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

}

export class DataBrewResponsesStartProjectSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewStartProjectSessionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startProjectSession',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.StartProjectSession.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          AssumeControl: this.__input.assumeControl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartProjectSession.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get clientSessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startProjectSession',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.StartProjectSession.ClientSessionId'),
        outputPath: 'ClientSessionId',
        parameters: {
          Name: this.__input.name,
          AssumeControl: this.__input.assumeControl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartProjectSession.ClientSessionId', props);
    return resource.getResponseField('ClientSessionId') as unknown as string;
  }

}

export class DataBrewResponsesStopJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewStopJobRunRequest) {
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJobRun',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.StopJobRun.RunId'),
        outputPath: 'RunId',
        parameters: {
          Name: this.__input.name,
          RunId: this.__input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJobRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

}

export class DataBrewResponsesUpdateDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewUpdateDatasetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataset',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UpdateDataset.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          Format: this.__input.format,
          FormatOptions: {
            Json: {
              MultiLine: this.__input.formatOptions?.json?.multiLine,
            },
            Excel: {
              SheetNames: this.__input.formatOptions?.excel?.sheetNames,
              SheetIndexes: this.__input.formatOptions?.excel?.sheetIndexes,
              HeaderRow: this.__input.formatOptions?.excel?.headerRow,
            },
            Csv: {
              Delimiter: this.__input.formatOptions?.csv?.delimiter,
              HeaderRow: this.__input.formatOptions?.csv?.headerRow,
            },
          },
          Input: {
            S3InputDefinition: {
              Bucket: this.__input.input.s3InputDefinition?.bucket,
              Key: this.__input.input.s3InputDefinition?.key,
            },
            DataCatalogInputDefinition: {
              CatalogId: this.__input.input.dataCatalogInputDefinition?.catalogId,
              DatabaseName: this.__input.input.dataCatalogInputDefinition?.databaseName,
              TableName: this.__input.input.dataCatalogInputDefinition?.tableName,
              TempDirectory: {
                Bucket: this.__input.input.dataCatalogInputDefinition?.tempDirectory?.bucket,
                Key: this.__input.input.dataCatalogInputDefinition?.tempDirectory?.key,
              },
            },
            DatabaseInputDefinition: {
              GlueConnectionName: this.__input.input.databaseInputDefinition?.glueConnectionName,
              DatabaseTableName: this.__input.input.databaseInputDefinition?.databaseTableName,
              TempDirectory: {
                Bucket: this.__input.input.databaseInputDefinition?.tempDirectory?.bucket,
                Key: this.__input.input.databaseInputDefinition?.tempDirectory?.key,
              },
            },
          },
          PathOptions: {
            LastModifiedDateCondition: {
              Expression: this.__input.pathOptions?.lastModifiedDateCondition?.expression,
              ValuesMap: this.__input.pathOptions?.lastModifiedDateCondition?.valuesMap,
            },
            FilesLimit: {
              MaxFiles: this.__input.pathOptions?.filesLimit?.maxFiles,
              OrderedBy: this.__input.pathOptions?.filesLimit?.orderedBy,
              Order: this.__input.pathOptions?.filesLimit?.order,
            },
            Parameters: this.__input.pathOptions?.parameters,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesUpdateProfileJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewUpdateProfileJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfileJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UpdateProfileJob.Name'),
        outputPath: 'Name',
        parameters: {
          Configuration: {
            DatasetStatisticsConfiguration: {
              IncludedStatistics: this.__input.configuration?.datasetStatisticsConfiguration?.includedStatistics,
              Overrides: this.__input.configuration?.datasetStatisticsConfiguration?.overrides,
            },
            ProfileColumns: this.__input.configuration?.profileColumns,
            ColumnStatisticsConfigurations: this.__input.configuration?.columnStatisticsConfigurations,
          },
          EncryptionKeyArn: this.__input.encryptionKeyArn,
          EncryptionMode: this.__input.encryptionMode,
          Name: this.__input.name,
          LogSubscription: this.__input.logSubscription,
          MaxCapacity: this.__input.maxCapacity,
          MaxRetries: this.__input.maxRetries,
          OutputLocation: {
            Bucket: this.__input.outputLocation.bucket,
            Key: this.__input.outputLocation.key,
          },
          RoleArn: this.__input.roleArn,
          Timeout: this.__input.timeout,
          JobSample: {
            Mode: this.__input.jobSample?.mode,
            Size: this.__input.jobSample?.size,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProfileJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesUpdateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewUpdateProjectRequest) {
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UpdateProject.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          Sample: {
            Size: this.__input.sample?.size,
            Type: this.__input.sample?.type,
          },
          RoleArn: this.__input.roleArn,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UpdateProject.Name'),
        outputPath: 'Name',
        parameters: {
          Sample: {
            Size: this.__input.sample?.size,
            Type: this.__input.sample?.type,
          },
          RoleArn: this.__input.roleArn,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesUpdateRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewUpdateRecipeRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecipe',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UpdateRecipe.Name'),
        outputPath: 'Name',
        parameters: {
          Description: this.__input.description,
          Name: this.__input.name,
          Steps: this.__input.steps,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecipe.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesUpdateRecipeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewUpdateRecipeJobRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecipeJob',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UpdateRecipeJob.Name'),
        outputPath: 'Name',
        parameters: {
          EncryptionKeyArn: this.__input.encryptionKeyArn,
          EncryptionMode: this.__input.encryptionMode,
          Name: this.__input.name,
          LogSubscription: this.__input.logSubscription,
          MaxCapacity: this.__input.maxCapacity,
          MaxRetries: this.__input.maxRetries,
          Outputs: this.__input.outputs,
          DataCatalogOutputs: this.__input.dataCatalogOutputs,
          DatabaseOutputs: this.__input.databaseOutputs,
          RoleArn: this.__input.roleArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecipeJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewResponsesUpdateSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataBrewUpdateScheduleRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchedule',
        service: 'DataBrew',
        physicalResourceId: cr.PhysicalResourceId.of('DataBrew.UpdateSchedule.Name'),
        outputPath: 'Name',
        parameters: {
          JobNames: this.__input.jobNames,
          CronExpression: this.__input.cronExpression,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

