import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DataBrewClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchDeleteRecipeVersion(input: shapes.DataBrewBatchDeleteRecipeVersionRequest): DataBrewBatchDeleteRecipeVersion {
    return new DataBrewBatchDeleteRecipeVersion(this, 'BatchDeleteRecipeVersion', this.__resources, input);
  }

  public createDataset(input: shapes.DataBrewCreateDatasetRequest): DataBrewCreateDataset {
    return new DataBrewCreateDataset(this, 'CreateDataset', this.__resources, input);
  }

  public createProfileJob(input: shapes.DataBrewCreateProfileJobRequest): DataBrewCreateProfileJob {
    return new DataBrewCreateProfileJob(this, 'CreateProfileJob', this.__resources, input);
  }

  public createProject(input: shapes.DataBrewCreateProjectRequest): DataBrewCreateProject {
    return new DataBrewCreateProject(this, 'CreateProject', this.__resources, input);
  }

  public createRecipe(input: shapes.DataBrewCreateRecipeRequest): DataBrewCreateRecipe {
    return new DataBrewCreateRecipe(this, 'CreateRecipe', this.__resources, input);
  }

  public createRecipeJob(input: shapes.DataBrewCreateRecipeJobRequest): DataBrewCreateRecipeJob {
    return new DataBrewCreateRecipeJob(this, 'CreateRecipeJob', this.__resources, input);
  }

  public createSchedule(input: shapes.DataBrewCreateScheduleRequest): DataBrewCreateSchedule {
    return new DataBrewCreateSchedule(this, 'CreateSchedule', this.__resources, input);
  }

  public deleteDataset(input: shapes.DataBrewDeleteDatasetRequest): DataBrewDeleteDataset {
    return new DataBrewDeleteDataset(this, 'DeleteDataset', this.__resources, input);
  }

  public deleteJob(input: shapes.DataBrewDeleteJobRequest): DataBrewDeleteJob {
    return new DataBrewDeleteJob(this, 'DeleteJob', this.__resources, input);
  }

  public deleteProject(input: shapes.DataBrewDeleteProjectRequest): DataBrewDeleteProject {
    return new DataBrewDeleteProject(this, 'DeleteProject', this.__resources, input);
  }

  public deleteRecipeVersion(input: shapes.DataBrewDeleteRecipeVersionRequest): DataBrewDeleteRecipeVersion {
    return new DataBrewDeleteRecipeVersion(this, 'DeleteRecipeVersion', this.__resources, input);
  }

  public deleteSchedule(input: shapes.DataBrewDeleteScheduleRequest): DataBrewDeleteSchedule {
    return new DataBrewDeleteSchedule(this, 'DeleteSchedule', this.__resources, input);
  }

  public describeDataset(input: shapes.DataBrewDescribeDatasetRequest): DataBrewDescribeDataset {
    return new DataBrewDescribeDataset(this, 'DescribeDataset', this.__resources, input);
  }

  public describeJob(input: shapes.DataBrewDescribeJobRequest): DataBrewDescribeJob {
    return new DataBrewDescribeJob(this, 'DescribeJob', this.__resources, input);
  }

  public describeProject(input: shapes.DataBrewDescribeProjectRequest): DataBrewDescribeProject {
    return new DataBrewDescribeProject(this, 'DescribeProject', this.__resources, input);
  }

  public describeRecipe(input: shapes.DataBrewDescribeRecipeRequest): DataBrewDescribeRecipe {
    return new DataBrewDescribeRecipe(this, 'DescribeRecipe', this.__resources, input);
  }

  public describeSchedule(input: shapes.DataBrewDescribeScheduleRequest): DataBrewDescribeSchedule {
    return new DataBrewDescribeSchedule(this, 'DescribeSchedule', this.__resources, input);
  }

  public listDatasets(input: shapes.DataBrewListDatasetsRequest): DataBrewListDatasets {
    return new DataBrewListDatasets(this, 'ListDatasets', this.__resources, input);
  }

  public listJobRuns(input: shapes.DataBrewListJobRunsRequest): DataBrewListJobRuns {
    return new DataBrewListJobRuns(this, 'ListJobRuns', this.__resources, input);
  }

  public listJobs(input: shapes.DataBrewListJobsRequest): DataBrewListJobs {
    return new DataBrewListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listProjects(input: shapes.DataBrewListProjectsRequest): DataBrewListProjects {
    return new DataBrewListProjects(this, 'ListProjects', this.__resources, input);
  }

  public listRecipeVersions(input: shapes.DataBrewListRecipeVersionsRequest): DataBrewListRecipeVersions {
    return new DataBrewListRecipeVersions(this, 'ListRecipeVersions', this.__resources, input);
  }

  public listRecipes(input: shapes.DataBrewListRecipesRequest): DataBrewListRecipes {
    return new DataBrewListRecipes(this, 'ListRecipes', this.__resources, input);
  }

  public listSchedules(input: shapes.DataBrewListSchedulesRequest): DataBrewListSchedules {
    return new DataBrewListSchedules(this, 'ListSchedules', this.__resources, input);
  }

  public listTagsForResource(input: shapes.DataBrewListTagsForResourceRequest): DataBrewListTagsForResource {
    return new DataBrewListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public publishRecipe(input: shapes.DataBrewPublishRecipeRequest): DataBrewPublishRecipe {
    return new DataBrewPublishRecipe(this, 'PublishRecipe', this.__resources, input);
  }

  public sendProjectSessionAction(input: shapes.DataBrewSendProjectSessionActionRequest): DataBrewSendProjectSessionAction {
    return new DataBrewSendProjectSessionAction(this, 'SendProjectSessionAction', this.__resources, input);
  }

  public startJobRun(input: shapes.DataBrewStartJobRunRequest): DataBrewStartJobRun {
    return new DataBrewStartJobRun(this, 'StartJobRun', this.__resources, input);
  }

  public startProjectSession(input: shapes.DataBrewStartProjectSessionRequest): DataBrewStartProjectSession {
    return new DataBrewStartProjectSession(this, 'StartProjectSession', this.__resources, input);
  }

  public stopJobRun(input: shapes.DataBrewStopJobRunRequest): DataBrewStopJobRun {
    return new DataBrewStopJobRun(this, 'StopJobRun', this.__resources, input);
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

  public updateDataset(input: shapes.DataBrewUpdateDatasetRequest): DataBrewUpdateDataset {
    return new DataBrewUpdateDataset(this, 'UpdateDataset', this.__resources, input);
  }

  public updateProfileJob(input: shapes.DataBrewUpdateProfileJobRequest): DataBrewUpdateProfileJob {
    return new DataBrewUpdateProfileJob(this, 'UpdateProfileJob', this.__resources, input);
  }

  public updateProject(input: shapes.DataBrewUpdateProjectRequest): DataBrewUpdateProject {
    return new DataBrewUpdateProject(this, 'UpdateProject', this.__resources, input);
  }

  public updateRecipe(input: shapes.DataBrewUpdateRecipeRequest): DataBrewUpdateRecipe {
    return new DataBrewUpdateRecipe(this, 'UpdateRecipe', this.__resources, input);
  }

  public updateRecipeJob(input: shapes.DataBrewUpdateRecipeJobRequest): DataBrewUpdateRecipeJob {
    return new DataBrewUpdateRecipeJob(this, 'UpdateRecipeJob', this.__resources, input);
  }

  public updateSchedule(input: shapes.DataBrewUpdateScheduleRequest): DataBrewUpdateSchedule {
    return new DataBrewUpdateSchedule(this, 'UpdateSchedule', this.__resources, input);
  }

}

export class DataBrewBatchDeleteRecipeVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewBatchDeleteRecipeVersionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RecipeVersions: this.input.recipeVersions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteRecipeVersion.Name', props);
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
          Name: this.input.name,
          RecipeVersions: this.input.recipeVersions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteRecipeVersion.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.DataBrewRecipeVersionErrorDetail[];
  }

}

export class DataBrewCreateDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewCreateDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          FormatOptions: {
            Json: {
              MultiLine: this.input.formatOptions?.json?.multiLine,
            },
            Excel: {
              SheetNames: this.input.formatOptions?.excel?.sheetNames,
              SheetIndexes: this.input.formatOptions?.excel?.sheetIndexes,
            },
          },
          Input: {
            S3InputDefinition: {
              Bucket: this.input.input.s3InputDefinition?.bucket,
              Key: this.input.input.s3InputDefinition?.key,
            },
            DataCatalogInputDefinition: {
              CatalogId: this.input.input.dataCatalogInputDefinition?.catalogId,
              DatabaseName: this.input.input.dataCatalogInputDefinition?.databaseName,
              TableName: this.input.input.dataCatalogInputDefinition?.tableName,
              TempDirectory: {
                Bucket: this.input.input.dataCatalogInputDefinition?.tempDirectory?.bucket,
                Key: this.input.input.dataCatalogInputDefinition?.tempDirectory?.key,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewCreateProfileJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewCreateProfileJobRequest) {
    super(scope, id);
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
          DatasetName: this.input.datasetName,
          EncryptionKeyArn: this.input.encryptionKeyArn,
          EncryptionMode: this.input.encryptionMode,
          Name: this.input.name,
          LogSubscription: this.input.logSubscription,
          MaxCapacity: this.input.maxCapacity,
          MaxRetries: this.input.maxRetries,
          OutputLocation: {
            Bucket: this.input.outputLocation.bucket,
            Key: this.input.outputLocation.key,
          },
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProfileJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewCreateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewCreateProjectRequest) {
    super(scope, id);
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
          DatasetName: this.input.datasetName,
          Name: this.input.name,
          RecipeName: this.input.recipeName,
          Sample: {
            Size: this.input.sample?.size,
            Type: this.input.sample?.type,
          },
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewCreateRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewCreateRecipeRequest) {
    super(scope, id);
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
          Description: this.input.description,
          Name: this.input.name,
          Steps: this.input.steps,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRecipe.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewCreateRecipeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewCreateRecipeJobRequest) {
    super(scope, id);
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
          DatasetName: this.input.datasetName,
          EncryptionKeyArn: this.input.encryptionKeyArn,
          EncryptionMode: this.input.encryptionMode,
          Name: this.input.name,
          LogSubscription: this.input.logSubscription,
          MaxCapacity: this.input.maxCapacity,
          MaxRetries: this.input.maxRetries,
          Outputs: this.input.outputs,
          ProjectName: this.input.projectName,
          RecipeReference: {
            Name: this.input.recipeReference?.name,
            RecipeVersion: this.input.recipeReference?.recipeVersion,
          },
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRecipeJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewCreateSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewCreateScheduleRequest) {
    super(scope, id);
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
          JobNames: this.input.jobNames,
          CronExpression: this.input.cronExpression,
          Tags: this.input.tags,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewDeleteDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDeleteDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewDeleteJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDeleteJobRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewDeleteProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDeleteProjectRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteProject.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewDeleteRecipeVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDeleteRecipeVersionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRecipeVersion.Name', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRecipeVersion.RecipeVersion', props);
    return resource.getResponseField('RecipeVersion') as unknown as string;
  }

}

export class DataBrewDeleteSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDeleteScheduleRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewDescribeDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.CreatedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.CreateDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get formatOptions(): DataBrewDescribeDatasetFormatOptions {
    return new DataBrewDescribeDatasetFormatOptions(this, 'FormatOptions', this.__resources, this.input);
  }

  public get input(): DataBrewDescribeDatasetInput {
    return new DataBrewDescribeDatasetInput(this, 'Input', this.__resources, this.input);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.LastModifiedDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.LastModifiedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Source', props);
    return resource.getResponseField('Source') as unknown as string;
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Tags', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

}

export class DataBrewDescribeDatasetFormatOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
  }

  public get json(): DataBrewDescribeDatasetFormatOptionsJson {
    return new DataBrewDescribeDatasetFormatOptionsJson(this, 'Json', this.__resources, this.input);
  }

  public get excel(): DataBrewDescribeDatasetFormatOptionsExcel {
    return new DataBrewDescribeDatasetFormatOptionsExcel(this, 'Excel', this.__resources, this.input);
  }

}

export class DataBrewDescribeDatasetFormatOptionsJson extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.FormatOptions.Json.MultiLine', props);
    return resource.getResponseField('FormatOptions.Json.MultiLine') as unknown as boolean;
  }

}

export class DataBrewDescribeDatasetFormatOptionsExcel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.FormatOptions.Excel.SheetNames', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.FormatOptions.Excel.SheetIndexes', props);
    return resource.getResponseField('FormatOptions.Excel.SheetIndexes') as unknown as number[];
  }

}

export class DataBrewDescribeDatasetInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
  }

  public get s3InputDefinition(): DataBrewDescribeDatasetInputS3InputDefinition {
    return new DataBrewDescribeDatasetInputS3InputDefinition(this, 'S3InputDefinition', this.__resources, this.input);
  }

  public get dataCatalogInputDefinition(): DataBrewDescribeDatasetInputDataCatalogInputDefinition {
    return new DataBrewDescribeDatasetInputDataCatalogInputDefinition(this, 'DataCatalogInputDefinition', this.__resources, this.input);
  }

}

export class DataBrewDescribeDatasetInputS3InputDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Input.S3InputDefinition.Bucket', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Input.S3InputDefinition.Key', props);
    return resource.getResponseField('Input.S3InputDefinition.Key') as unknown as string;
  }

}

export class DataBrewDescribeDatasetInputDataCatalogInputDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Input.DataCatalogInputDefinition.CatalogId', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Input.DataCatalogInputDefinition.DatabaseName', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Input.DataCatalogInputDefinition.TableName', props);
    return resource.getResponseField('Input.DataCatalogInputDefinition.TableName') as unknown as string;
  }

  public get tempDirectory(): DataBrewDescribeDatasetInputDataCatalogInputDefinitionTempDirectory {
    return new DataBrewDescribeDatasetInputDataCatalogInputDefinitionTempDirectory(this, 'TempDirectory', this.__resources, this.input);
  }

}

export class DataBrewDescribeDatasetInputDataCatalogInputDefinitionTempDirectory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Input.DataCatalogInputDefinition.TempDirectory.Bucket', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.Input.DataCatalogInputDefinition.TempDirectory.Key', props);
    return resource.getResponseField('Input.DataCatalogInputDefinition.TempDirectory.Key') as unknown as string;
  }

}

export class DataBrewDescribeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeJobRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.CreateDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.CreatedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.DatasetName', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.EncryptionKeyArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.EncryptionMode', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Type', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.LastModifiedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.LastModifiedDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.LogSubscription', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.MaxCapacity', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.MaxRetries', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.DataBrewOutput[];
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.ProjectName', props);
    return resource.getResponseField('ProjectName') as unknown as string;
  }

  public get recipeReference(): DataBrewDescribeJobRecipeReference {
    return new DataBrewDescribeJobRecipeReference(this, 'RecipeReference', this.__resources, this.input);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.ResourceArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.RoleArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Tags', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

}

export class DataBrewDescribeJobRecipeReference extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeJobRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.RecipeReference.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.RecipeReference.RecipeVersion', props);
    return resource.getResponseField('RecipeReference.RecipeVersion') as unknown as string;
  }

}

export class DataBrewDescribeProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeProjectRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.CreateDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.CreatedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.DatasetName', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.LastModifiedDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.LastModifiedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.Name', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.RecipeName', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get sample(): DataBrewDescribeProjectSample {
    return new DataBrewDescribeProjectSample(this, 'Sample', this.__resources, this.input);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.RoleArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.Tags', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.SessionStatus', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.OpenedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.OpenDate', props);
    return resource.getResponseField('OpenDate') as unknown as string;
  }

}

export class DataBrewDescribeProjectSample extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeProjectRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.Sample.Size', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.Sample.Type', props);
    return resource.getResponseField('Sample.Type') as unknown as string;
  }

}

export class DataBrewDescribeRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeRecipeRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.CreatedBy', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.CreateDate', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.LastModifiedBy', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.LastModifiedDate', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.ProjectName', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.PublishedBy', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.PublishedDate', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.Description', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.Name', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.Steps', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.Tags', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.ResourceArn', props);
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
          Name: this.input.name,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.RecipeVersion', props);
    return resource.getResponseField('RecipeVersion') as unknown as string;
  }

}

export class DataBrewDescribeSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewDescribeScheduleRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.CreateDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.CreatedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.JobNames', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.LastModifiedBy', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.LastModifiedDate', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.ResourceArn', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.CronExpression', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.Tags', props);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewListDatasets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListDatasetsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.Datasets', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewListJobRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListJobRunsRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobRuns.JobRuns', props);
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
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListJobsRequest) {
    super(scope, id);
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
          DatasetName: this.input.datasetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ProjectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.Jobs', props);
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
          DatasetName: this.input.datasetName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ProjectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewListProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListProjectsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.Projects', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewListRecipeVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListRecipeVersionsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecipeVersions.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecipeVersions.Recipes', props);
    return resource.getResponseField('Recipes') as unknown as shapes.DataBrewRecipe[];
  }

}

export class DataBrewListRecipes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListRecipesRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecipes.Recipes', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          RecipeVersion: this.input.recipeVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecipes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewListSchedules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListSchedulesRequest) {
    super(scope, id);
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
          JobName: this.input.jobName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchedules.Schedules', props);
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
          JobName: this.input.jobName,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchedules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataBrewListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class DataBrewPublishRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewPublishRecipeRequest) {
    super(scope, id);
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
          Description: this.input.description,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PublishRecipe.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewSendProjectSessionAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewSendProjectSessionActionRequest) {
    super(scope, id);
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
          Preview: this.input.preview,
          Name: this.input.name,
          RecipeStep: {
            Action: {
              Operation: this.input.recipeStep?.action.operation,
              Parameters: this.input.recipeStep?.action.parameters,
            },
            ConditionExpressions: this.input.recipeStep?.conditionExpressions,
          },
          StepIndex: this.input.stepIndex,
          ClientSessionId: this.input.clientSessionId,
          ViewFrame: {
            StartColumnIndex: this.input.viewFrame?.startColumnIndex,
            ColumnRange: this.input.viewFrame?.columnRange,
            HiddenColumns: this.input.viewFrame?.hiddenColumns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendProjectSessionAction.Result', props);
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
          Preview: this.input.preview,
          Name: this.input.name,
          RecipeStep: {
            Action: {
              Operation: this.input.recipeStep?.action.operation,
              Parameters: this.input.recipeStep?.action.parameters,
            },
            ConditionExpressions: this.input.recipeStep?.conditionExpressions,
          },
          StepIndex: this.input.stepIndex,
          ClientSessionId: this.input.clientSessionId,
          ViewFrame: {
            StartColumnIndex: this.input.viewFrame?.startColumnIndex,
            ColumnRange: this.input.viewFrame?.columnRange,
            HiddenColumns: this.input.viewFrame?.hiddenColumns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendProjectSessionAction.Name', props);
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
          Preview: this.input.preview,
          Name: this.input.name,
          RecipeStep: {
            Action: {
              Operation: this.input.recipeStep?.action.operation,
              Parameters: this.input.recipeStep?.action.parameters,
            },
            ConditionExpressions: this.input.recipeStep?.conditionExpressions,
          },
          StepIndex: this.input.stepIndex,
          ClientSessionId: this.input.clientSessionId,
          ViewFrame: {
            StartColumnIndex: this.input.viewFrame?.startColumnIndex,
            ColumnRange: this.input.viewFrame?.columnRange,
            HiddenColumns: this.input.viewFrame?.hiddenColumns,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendProjectSessionAction.ActionId', props);
    return resource.getResponseField('ActionId') as unknown as number;
  }

}

export class DataBrewStartJobRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewStartJobRunRequest) {
    super(scope, id);
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
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJobRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

}

export class DataBrewStartProjectSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewStartProjectSessionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          AssumeControl: this.input.assumeControl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartProjectSession.Name', props);
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
          Name: this.input.name,
          AssumeControl: this.input.assumeControl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartProjectSession.ClientSessionId', props);
    return resource.getResponseField('ClientSessionId') as unknown as string;
  }

}

export class DataBrewStopJobRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewStopJobRunRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJobRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

}

export class DataBrewUpdateDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewUpdateDatasetRequest) {
    super(scope, id);
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
          Name: this.input.name,
          FormatOptions: {
            Json: {
              MultiLine: this.input.formatOptions?.json?.multiLine,
            },
            Excel: {
              SheetNames: this.input.formatOptions?.excel?.sheetNames,
              SheetIndexes: this.input.formatOptions?.excel?.sheetIndexes,
            },
          },
          Input: {
            S3InputDefinition: {
              Bucket: this.input.input.s3InputDefinition?.bucket,
              Key: this.input.input.s3InputDefinition?.key,
            },
            DataCatalogInputDefinition: {
              CatalogId: this.input.input.dataCatalogInputDefinition?.catalogId,
              DatabaseName: this.input.input.dataCatalogInputDefinition?.databaseName,
              TableName: this.input.input.dataCatalogInputDefinition?.tableName,
              TempDirectory: {
                Bucket: this.input.input.dataCatalogInputDefinition?.tempDirectory?.bucket,
                Key: this.input.input.dataCatalogInputDefinition?.tempDirectory?.key,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataset.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewUpdateProfileJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewUpdateProfileJobRequest) {
    super(scope, id);
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
          EncryptionKeyArn: this.input.encryptionKeyArn,
          EncryptionMode: this.input.encryptionMode,
          Name: this.input.name,
          LogSubscription: this.input.logSubscription,
          MaxCapacity: this.input.maxCapacity,
          MaxRetries: this.input.maxRetries,
          OutputLocation: {
            Bucket: this.input.outputLocation.bucket,
            Key: this.input.outputLocation.key,
          },
          RoleArn: this.input.roleArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProfileJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewUpdateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewUpdateProjectRequest) {
    super(scope, id);
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
            Size: this.input.sample?.size,
            Type: this.input.sample?.type,
          },
          RoleArn: this.input.roleArn,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.LastModifiedDate', props);
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
            Size: this.input.sample?.size,
            Type: this.input.sample?.type,
          },
          RoleArn: this.input.roleArn,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewUpdateRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewUpdateRecipeRequest) {
    super(scope, id);
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
          Description: this.input.description,
          Name: this.input.name,
          Steps: this.input.steps,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecipe.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewUpdateRecipeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewUpdateRecipeJobRequest) {
    super(scope, id);
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
          EncryptionKeyArn: this.input.encryptionKeyArn,
          EncryptionMode: this.input.encryptionMode,
          Name: this.input.name,
          LogSubscription: this.input.logSubscription,
          MaxCapacity: this.input.maxCapacity,
          MaxRetries: this.input.maxRetries,
          Outputs: this.input.outputs,
          RoleArn: this.input.roleArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecipeJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class DataBrewUpdateSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataBrewUpdateScheduleRequest) {
    super(scope, id);
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
          JobNames: this.input.jobNames,
          CronExpression: this.input.cronExpression,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchedule.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

