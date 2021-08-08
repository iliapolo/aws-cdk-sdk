import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PersonalizeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createBatchInferenceJob(input: shapes.PersonalizeCreateBatchInferenceJobRequest): PersonalizeResponsesCreateBatchInferenceJob {
    return new PersonalizeResponsesCreateBatchInferenceJob(this, this.__resources, input);
  }

  public createCampaign(input: shapes.PersonalizeCreateCampaignRequest): PersonalizeResponsesCreateCampaign {
    return new PersonalizeResponsesCreateCampaign(this, this.__resources, input);
  }

  public createDataset(input: shapes.PersonalizeCreateDatasetRequest): PersonalizeResponsesCreateDataset {
    return new PersonalizeResponsesCreateDataset(this, this.__resources, input);
  }

  public createDatasetExportJob(input: shapes.PersonalizeCreateDatasetExportJobRequest): PersonalizeResponsesCreateDatasetExportJob {
    return new PersonalizeResponsesCreateDatasetExportJob(this, this.__resources, input);
  }

  public createDatasetGroup(input: shapes.PersonalizeCreateDatasetGroupRequest): PersonalizeResponsesCreateDatasetGroup {
    return new PersonalizeResponsesCreateDatasetGroup(this, this.__resources, input);
  }

  public createDatasetImportJob(input: shapes.PersonalizeCreateDatasetImportJobRequest): PersonalizeResponsesCreateDatasetImportJob {
    return new PersonalizeResponsesCreateDatasetImportJob(this, this.__resources, input);
  }

  public createEventTracker(input: shapes.PersonalizeCreateEventTrackerRequest): PersonalizeResponsesCreateEventTracker {
    return new PersonalizeResponsesCreateEventTracker(this, this.__resources, input);
  }

  public createFilter(input: shapes.PersonalizeCreateFilterRequest): PersonalizeResponsesCreateFilter {
    return new PersonalizeResponsesCreateFilter(this, this.__resources, input);
  }

  public createSchema(input: shapes.PersonalizeCreateSchemaRequest): PersonalizeResponsesCreateSchema {
    return new PersonalizeResponsesCreateSchema(this, this.__resources, input);
  }

  public createSolution(input: shapes.PersonalizeCreateSolutionRequest): PersonalizeResponsesCreateSolution {
    return new PersonalizeResponsesCreateSolution(this, this.__resources, input);
  }

  public createSolutionVersion(input: shapes.PersonalizeCreateSolutionVersionRequest): PersonalizeResponsesCreateSolutionVersion {
    return new PersonalizeResponsesCreateSolutionVersion(this, this.__resources, input);
  }

  public deleteCampaign(input: shapes.PersonalizeDeleteCampaignRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DeleteCampaign'),
        parameters: {
          campaignArn: input.campaignArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCampaign', props);
  }

  public deleteDataset(input: shapes.PersonalizeDeleteDatasetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DeleteDataset'),
        parameters: {
          datasetArn: input.datasetArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDataset', props);
  }

  public deleteDatasetGroup(input: shapes.PersonalizeDeleteDatasetGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DeleteDatasetGroup'),
        parameters: {
          datasetGroupArn: input.datasetGroupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDatasetGroup', props);
  }

  public deleteEventTracker(input: shapes.PersonalizeDeleteEventTrackerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DeleteEventTracker'),
        parameters: {
          eventTrackerArn: input.eventTrackerArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEventTracker', props);
  }

  public deleteFilter(input: shapes.PersonalizeDeleteFilterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DeleteFilter'),
        parameters: {
          filterArn: input.filterArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFilter', props);
  }

  public deleteSchema(input: shapes.PersonalizeDeleteSchemaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DeleteSchema'),
        parameters: {
          schemaArn: input.schemaArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSchema', props);
  }

  public deleteSolution(input: shapes.PersonalizeDeleteSolutionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DeleteSolution'),
        parameters: {
          solutionArn: input.solutionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSolution', props);
  }

  public describeAlgorithm(input: shapes.PersonalizeDescribeAlgorithmRequest): PersonalizeResponsesDescribeAlgorithm {
    return new PersonalizeResponsesDescribeAlgorithm(this, this.__resources, input);
  }

  public describeBatchInferenceJob(input: shapes.PersonalizeDescribeBatchInferenceJobRequest): PersonalizeResponsesDescribeBatchInferenceJob {
    return new PersonalizeResponsesDescribeBatchInferenceJob(this, this.__resources, input);
  }

  public describeCampaign(input: shapes.PersonalizeDescribeCampaignRequest): PersonalizeResponsesDescribeCampaign {
    return new PersonalizeResponsesDescribeCampaign(this, this.__resources, input);
  }

  public describeDataset(input: shapes.PersonalizeDescribeDatasetRequest): PersonalizeResponsesDescribeDataset {
    return new PersonalizeResponsesDescribeDataset(this, this.__resources, input);
  }

  public describeDatasetExportJob(input: shapes.PersonalizeDescribeDatasetExportJobRequest): PersonalizeResponsesDescribeDatasetExportJob {
    return new PersonalizeResponsesDescribeDatasetExportJob(this, this.__resources, input);
  }

  public describeDatasetGroup(input: shapes.PersonalizeDescribeDatasetGroupRequest): PersonalizeResponsesDescribeDatasetGroup {
    return new PersonalizeResponsesDescribeDatasetGroup(this, this.__resources, input);
  }

  public describeDatasetImportJob(input: shapes.PersonalizeDescribeDatasetImportJobRequest): PersonalizeResponsesDescribeDatasetImportJob {
    return new PersonalizeResponsesDescribeDatasetImportJob(this, this.__resources, input);
  }

  public describeEventTracker(input: shapes.PersonalizeDescribeEventTrackerRequest): PersonalizeResponsesDescribeEventTracker {
    return new PersonalizeResponsesDescribeEventTracker(this, this.__resources, input);
  }

  public describeFeatureTransformation(input: shapes.PersonalizeDescribeFeatureTransformationRequest): PersonalizeResponsesDescribeFeatureTransformation {
    return new PersonalizeResponsesDescribeFeatureTransformation(this, this.__resources, input);
  }

  public describeFilter(input: shapes.PersonalizeDescribeFilterRequest): PersonalizeResponsesDescribeFilter {
    return new PersonalizeResponsesDescribeFilter(this, this.__resources, input);
  }

  public describeRecipe(input: shapes.PersonalizeDescribeRecipeRequest): PersonalizeResponsesDescribeRecipe {
    return new PersonalizeResponsesDescribeRecipe(this, this.__resources, input);
  }

  public describeSchema(input: shapes.PersonalizeDescribeSchemaRequest): PersonalizeResponsesDescribeSchema {
    return new PersonalizeResponsesDescribeSchema(this, this.__resources, input);
  }

  public describeSolution(input: shapes.PersonalizeDescribeSolutionRequest): PersonalizeResponsesDescribeSolution {
    return new PersonalizeResponsesDescribeSolution(this, this.__resources, input);
  }

  public describeSolutionVersion(input: shapes.PersonalizeDescribeSolutionVersionRequest): PersonalizeResponsesDescribeSolutionVersion {
    return new PersonalizeResponsesDescribeSolutionVersion(this, this.__resources, input);
  }

  public fetchSolutionMetrics(input: shapes.PersonalizeGetSolutionMetricsRequest): PersonalizeResponsesFetchSolutionMetrics {
    return new PersonalizeResponsesFetchSolutionMetrics(this, this.__resources, input);
  }

  public listBatchInferenceJobs(input: shapes.PersonalizeListBatchInferenceJobsRequest): PersonalizeResponsesListBatchInferenceJobs {
    return new PersonalizeResponsesListBatchInferenceJobs(this, this.__resources, input);
  }

  public listCampaigns(input: shapes.PersonalizeListCampaignsRequest): PersonalizeResponsesListCampaigns {
    return new PersonalizeResponsesListCampaigns(this, this.__resources, input);
  }

  public listDatasetExportJobs(input: shapes.PersonalizeListDatasetExportJobsRequest): PersonalizeResponsesListDatasetExportJobs {
    return new PersonalizeResponsesListDatasetExportJobs(this, this.__resources, input);
  }

  public listDatasetGroups(input: shapes.PersonalizeListDatasetGroupsRequest): PersonalizeResponsesListDatasetGroups {
    return new PersonalizeResponsesListDatasetGroups(this, this.__resources, input);
  }

  public listDatasetImportJobs(input: shapes.PersonalizeListDatasetImportJobsRequest): PersonalizeResponsesListDatasetImportJobs {
    return new PersonalizeResponsesListDatasetImportJobs(this, this.__resources, input);
  }

  public listDatasets(input: shapes.PersonalizeListDatasetsRequest): PersonalizeResponsesListDatasets {
    return new PersonalizeResponsesListDatasets(this, this.__resources, input);
  }

  public listEventTrackers(input: shapes.PersonalizeListEventTrackersRequest): PersonalizeResponsesListEventTrackers {
    return new PersonalizeResponsesListEventTrackers(this, this.__resources, input);
  }

  public listFilters(input: shapes.PersonalizeListFiltersRequest): PersonalizeResponsesListFilters {
    return new PersonalizeResponsesListFilters(this, this.__resources, input);
  }

  public listRecipes(input: shapes.PersonalizeListRecipesRequest): PersonalizeResponsesListRecipes {
    return new PersonalizeResponsesListRecipes(this, this.__resources, input);
  }

  public listSchemas(input: shapes.PersonalizeListSchemasRequest): PersonalizeResponsesListSchemas {
    return new PersonalizeResponsesListSchemas(this, this.__resources, input);
  }

  public listSolutionVersions(input: shapes.PersonalizeListSolutionVersionsRequest): PersonalizeResponsesListSolutionVersions {
    return new PersonalizeResponsesListSolutionVersions(this, this.__resources, input);
  }

  public listSolutions(input: shapes.PersonalizeListSolutionsRequest): PersonalizeResponsesListSolutions {
    return new PersonalizeResponsesListSolutions(this, this.__resources, input);
  }

  public stopSolutionVersionCreation(input: shapes.PersonalizeStopSolutionVersionCreationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopSolutionVersionCreation',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.StopSolutionVersionCreation'),
        parameters: {
          solutionVersionArn: input.solutionVersionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopSolutionVersionCreation', props);
  }

  public updateCampaign(input: shapes.PersonalizeUpdateCampaignRequest): PersonalizeResponsesUpdateCampaign {
    return new PersonalizeResponsesUpdateCampaign(this, this.__resources, input);
  }

}

export class PersonalizeResponsesCreateBatchInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateBatchInferenceJobRequest) {
  }

  public get batchInferenceJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateBatchInferenceJob.batchInferenceJobArn'),
        outputPath: 'batchInferenceJobArn',
        parameters: {
          jobName: this.__input.jobName,
          solutionVersionArn: this.__input.solutionVersionArn,
          filterArn: this.__input.filterArn,
          numResults: this.__input.numResults,
          jobInput: {
            s3DataSource: {
              path: this.__input.jobInput.s3DataSource.path,
              kmsKeyArn: this.__input.jobInput.s3DataSource.kmsKeyArn,
            },
          },
          jobOutput: {
            s3DataDestination: {
              path: this.__input.jobOutput.s3DataDestination.path,
              kmsKeyArn: this.__input.jobOutput.s3DataDestination.kmsKeyArn,
            },
          },
          roleArn: this.__input.roleArn,
          batchInferenceJobConfig: {
            itemExplorationConfig: this.__input.batchInferenceJobConfig?.itemExplorationConfig,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBatchInferenceJob.batchInferenceJobArn', props);
    return resource.getResponseField('batchInferenceJobArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateCampaignRequest) {
  }

  public get campaignArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateCampaign.campaignArn'),
        outputPath: 'campaignArn',
        parameters: {
          name: this.__input.name,
          solutionVersionArn: this.__input.solutionVersionArn,
          minProvisionedTPS: this.__input.minProvisionedTPS,
          campaignConfig: {
            itemExplorationConfig: this.__input.campaignConfig?.itemExplorationConfig,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCampaign.campaignArn', props);
    return resource.getResponseField('campaignArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateDatasetRequest) {
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateDataset.datasetArn'),
        outputPath: 'datasetArn',
        parameters: {
          name: this.__input.name,
          schemaArn: this.__input.schemaArn,
          datasetGroupArn: this.__input.datasetGroupArn,
          datasetType: this.__input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.datasetArn', props);
    return resource.getResponseField('datasetArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateDatasetExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateDatasetExportJobRequest) {
  }

  public get datasetExportJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateDatasetExportJob.datasetExportJobArn'),
        outputPath: 'datasetExportJobArn',
        parameters: {
          jobName: this.__input.jobName,
          datasetArn: this.__input.datasetArn,
          ingestionMode: this.__input.ingestionMode,
          roleArn: this.__input.roleArn,
          jobOutput: {
            s3DataDestination: {
              path: this.__input.jobOutput.s3DataDestination.path,
              kmsKeyArn: this.__input.jobOutput.s3DataDestination.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatasetExportJob.datasetExportJobArn', props);
    return resource.getResponseField('datasetExportJobArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateDatasetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateDatasetGroupRequest) {
  }

  public get datasetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateDatasetGroup.datasetGroupArn'),
        outputPath: 'datasetGroupArn',
        parameters: {
          name: this.__input.name,
          roleArn: this.__input.roleArn,
          kmsKeyArn: this.__input.kmsKeyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatasetGroup.datasetGroupArn', props);
    return resource.getResponseField('datasetGroupArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateDatasetImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateDatasetImportJobRequest) {
  }

  public get datasetImportJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateDatasetImportJob.datasetImportJobArn'),
        outputPath: 'datasetImportJobArn',
        parameters: {
          jobName: this.__input.jobName,
          datasetArn: this.__input.datasetArn,
          dataSource: {
            dataLocation: this.__input.dataSource.dataLocation,
          },
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatasetImportJob.datasetImportJobArn', props);
    return resource.getResponseField('datasetImportJobArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateEventTracker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateEventTrackerRequest) {
  }

  public get eventTrackerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateEventTracker.eventTrackerArn'),
        outputPath: 'eventTrackerArn',
        parameters: {
          name: this.__input.name,
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventTracker.eventTrackerArn', props);
    return resource.getResponseField('eventTrackerArn') as unknown as string;
  }

  public get trackingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateEventTracker.trackingId'),
        outputPath: 'trackingId',
        parameters: {
          name: this.__input.name,
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventTracker.trackingId', props);
    return resource.getResponseField('trackingId') as unknown as string;
  }

}

export class PersonalizeResponsesCreateFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateFilterRequest) {
  }

  public get filterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateFilter.filterArn'),
        outputPath: 'filterArn',
        parameters: {
          name: this.__input.name,
          datasetGroupArn: this.__input.datasetGroupArn,
          filterExpression: this.__input.filterExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFilter.filterArn', props);
    return resource.getResponseField('filterArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateSchemaRequest) {
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateSchema.schemaArn'),
        outputPath: 'schemaArn',
        parameters: {
          name: this.__input.name,
          schema: this.__input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.schemaArn', props);
    return resource.getResponseField('schemaArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateSolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateSolutionRequest) {
  }

  public get solutionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateSolution.solutionArn'),
        outputPath: 'solutionArn',
        parameters: {
          name: this.__input.name,
          performHPO: this.__input.performHPO,
          performAutoML: this.__input.performAutoML,
          recipeArn: this.__input.recipeArn,
          datasetGroupArn: this.__input.datasetGroupArn,
          eventType: this.__input.eventType,
          solutionConfig: {
            eventValueThreshold: this.__input.solutionConfig?.eventValueThreshold,
            hpoConfig: {
              hpoObjective: {
                type: this.__input.solutionConfig?.hpoConfig?.hpoObjective?.type,
                metricName: this.__input.solutionConfig?.hpoConfig?.hpoObjective?.metricName,
                metricRegex: this.__input.solutionConfig?.hpoConfig?.hpoObjective?.metricRegex,
              },
              hpoResourceConfig: {
                maxNumberOfTrainingJobs: this.__input.solutionConfig?.hpoConfig?.hpoResourceConfig?.maxNumberOfTrainingJobs,
                maxParallelTrainingJobs: this.__input.solutionConfig?.hpoConfig?.hpoResourceConfig?.maxParallelTrainingJobs,
              },
              algorithmHyperParameterRanges: {
                integerHyperParameterRanges: this.__input.solutionConfig?.hpoConfig?.algorithmHyperParameterRanges?.integerHyperParameterRanges,
                continuousHyperParameterRanges: this.__input.solutionConfig?.hpoConfig?.algorithmHyperParameterRanges?.continuousHyperParameterRanges,
                categoricalHyperParameterRanges: this.__input.solutionConfig?.hpoConfig?.algorithmHyperParameterRanges?.categoricalHyperParameterRanges,
              },
            },
            algorithmHyperParameters: this.__input.solutionConfig?.algorithmHyperParameters,
            featureTransformationParameters: this.__input.solutionConfig?.featureTransformationParameters,
            autoMLConfig: {
              metricName: this.__input.solutionConfig?.autoMLConfig?.metricName,
              recipeList: this.__input.solutionConfig?.autoMLConfig?.recipeList,
            },
            optimizationObjective: {
              itemAttribute: this.__input.solutionConfig?.optimizationObjective?.itemAttribute,
              objectiveSensitivity: this.__input.solutionConfig?.optimizationObjective?.objectiveSensitivity,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSolution.solutionArn', props);
    return resource.getResponseField('solutionArn') as unknown as string;
  }

}

export class PersonalizeResponsesCreateSolutionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeCreateSolutionVersionRequest) {
  }

  public get solutionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.CreateSolutionVersion.solutionVersionArn'),
        outputPath: 'solutionVersionArn',
        parameters: {
          solutionArn: this.__input.solutionArn,
          trainingMode: this.__input.trainingMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSolutionVersion.solutionVersionArn', props);
    return resource.getResponseField('solutionVersionArn') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeAlgorithm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeAlgorithmRequest) {
  }

  public get algorithm(): PersonalizeResponsesDescribeAlgorithmAlgorithm {
    return new PersonalizeResponsesDescribeAlgorithmAlgorithm(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeAlgorithmAlgorithm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeAlgorithmRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.name'),
        outputPath: 'algorithm.name',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.name', props);
    return resource.getResponseField('algorithm.name') as unknown as string;
  }

  public get algorithmArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.algorithmArn'),
        outputPath: 'algorithm.algorithmArn',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.algorithmArn', props);
    return resource.getResponseField('algorithm.algorithmArn') as unknown as string;
  }

  public get algorithmImage(): PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage {
    return new PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage(this.__scope, this.__resources, this.__input);
  }

  public get defaultHyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.defaultHyperParameters'),
        outputPath: 'algorithm.defaultHyperParameters',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.defaultHyperParameters', props);
    return resource.getResponseField('algorithm.defaultHyperParameters') as unknown as Record<string, string>;
  }

  public get defaultHyperParameterRanges(): PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges {
    return new PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges(this.__scope, this.__resources, this.__input);
  }

  public get defaultResourceConfig(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.defaultResourceConfig'),
        outputPath: 'algorithm.defaultResourceConfig',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.defaultResourceConfig', props);
    return resource.getResponseField('algorithm.defaultResourceConfig') as unknown as Record<string, string>;
  }

  public get trainingInputMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.trainingInputMode'),
        outputPath: 'algorithm.trainingInputMode',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.trainingInputMode', props);
    return resource.getResponseField('algorithm.trainingInputMode') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.roleArn'),
        outputPath: 'algorithm.roleArn',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.roleArn', props);
    return resource.getResponseField('algorithm.roleArn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.creationDateTime'),
        outputPath: 'algorithm.creationDateTime',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.creationDateTime', props);
    return resource.getResponseField('algorithm.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.lastUpdatedDateTime'),
        outputPath: 'algorithm.lastUpdatedDateTime',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.lastUpdatedDateTime', props);
    return resource.getResponseField('algorithm.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeAlgorithmAlgorithmAlgorithmImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeAlgorithmRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.algorithmImage.name'),
        outputPath: 'algorithm.algorithmImage.name',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.algorithmImage.name', props);
    return resource.getResponseField('algorithm.algorithmImage.name') as unknown as string;
  }

  public get dockerUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.algorithmImage.dockerURI'),
        outputPath: 'algorithm.algorithmImage.dockerURI',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.algorithmImage.dockerURI', props);
    return resource.getResponseField('algorithm.algorithmImage.dockerURI') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeAlgorithmAlgorithmDefaultHyperParameterRanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeAlgorithmRequest) {
  }

  public get integerHyperParameterRanges(): shapes.PersonalizeDefaultIntegerHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.defaultHyperParameterRanges.integerHyperParameterRanges'),
        outputPath: 'algorithm.defaultHyperParameterRanges.integerHyperParameterRanges',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.defaultHyperParameterRanges.integerHyperParameterRanges', props);
    return resource.getResponseField('algorithm.defaultHyperParameterRanges.integerHyperParameterRanges') as unknown as shapes.PersonalizeDefaultIntegerHyperParameterRange[];
  }

  public get continuousHyperParameterRanges(): shapes.PersonalizeDefaultContinuousHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.defaultHyperParameterRanges.continuousHyperParameterRanges'),
        outputPath: 'algorithm.defaultHyperParameterRanges.continuousHyperParameterRanges',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.defaultHyperParameterRanges.continuousHyperParameterRanges', props);
    return resource.getResponseField('algorithm.defaultHyperParameterRanges.continuousHyperParameterRanges') as unknown as shapes.PersonalizeDefaultContinuousHyperParameterRange[];
  }

  public get categoricalHyperParameterRanges(): shapes.PersonalizeDefaultCategoricalHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeAlgorithm.algorithm.defaultHyperParameterRanges.categoricalHyperParameterRanges'),
        outputPath: 'algorithm.defaultHyperParameterRanges.categoricalHyperParameterRanges',
        parameters: {
          algorithmArn: this.__input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.algorithm.defaultHyperParameterRanges.categoricalHyperParameterRanges', props);
    return resource.getResponseField('algorithm.defaultHyperParameterRanges.categoricalHyperParameterRanges') as unknown as shapes.PersonalizeDefaultCategoricalHyperParameterRange[];
  }

}

export class PersonalizeResponsesDescribeBatchInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
  }

  public get batchInferenceJob(): PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob {
    return new PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.jobName'),
        outputPath: 'batchInferenceJob.jobName',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.jobName', props);
    return resource.getResponseField('batchInferenceJob.jobName') as unknown as string;
  }

  public get batchInferenceJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.batchInferenceJobArn'),
        outputPath: 'batchInferenceJob.batchInferenceJobArn',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.batchInferenceJobArn', props);
    return resource.getResponseField('batchInferenceJob.batchInferenceJobArn') as unknown as string;
  }

  public get filterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.filterArn'),
        outputPath: 'batchInferenceJob.filterArn',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.filterArn', props);
    return resource.getResponseField('batchInferenceJob.filterArn') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.failureReason'),
        outputPath: 'batchInferenceJob.failureReason',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.failureReason', props);
    return resource.getResponseField('batchInferenceJob.failureReason') as unknown as string;
  }

  public get solutionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.solutionVersionArn'),
        outputPath: 'batchInferenceJob.solutionVersionArn',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.solutionVersionArn', props);
    return resource.getResponseField('batchInferenceJob.solutionVersionArn') as unknown as string;
  }

  public get numResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.numResults'),
        outputPath: 'batchInferenceJob.numResults',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.numResults', props);
    return resource.getResponseField('batchInferenceJob.numResults') as unknown as number;
  }

  public get jobInput(): PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput {
    return new PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput(this.__scope, this.__resources, this.__input);
  }

  public get jobOutput(): PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput {
    return new PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput(this.__scope, this.__resources, this.__input);
  }

  public get batchInferenceJobConfig(): PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig {
    return new PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.roleArn'),
        outputPath: 'batchInferenceJob.roleArn',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.roleArn', props);
    return resource.getResponseField('batchInferenceJob.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.status'),
        outputPath: 'batchInferenceJob.status',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.status', props);
    return resource.getResponseField('batchInferenceJob.status') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.creationDateTime'),
        outputPath: 'batchInferenceJob.creationDateTime',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.creationDateTime', props);
    return resource.getResponseField('batchInferenceJob.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.lastUpdatedDateTime'),
        outputPath: 'batchInferenceJob.lastUpdatedDateTime',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.lastUpdatedDateTime', props);
    return resource.getResponseField('batchInferenceJob.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
  }

  public get s3DataSource(): PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource {
    return new PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.jobInput.s3DataSource.path'),
        outputPath: 'batchInferenceJob.jobInput.s3DataSource.path',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.jobInput.s3DataSource.path', props);
    return resource.getResponseField('batchInferenceJob.jobInput.s3DataSource.path') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.jobInput.s3DataSource.kmsKeyArn'),
        outputPath: 'batchInferenceJob.jobInput.s3DataSource.kmsKeyArn',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.jobInput.s3DataSource.kmsKeyArn', props);
    return resource.getResponseField('batchInferenceJob.jobInput.s3DataSource.kmsKeyArn') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
  }

  public get s3DataDestination(): PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination {
    return new PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.jobOutput.s3DataDestination.path'),
        outputPath: 'batchInferenceJob.jobOutput.s3DataDestination.path',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.jobOutput.s3DataDestination.path', props);
    return resource.getResponseField('batchInferenceJob.jobOutput.s3DataDestination.path') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.jobOutput.s3DataDestination.kmsKeyArn'),
        outputPath: 'batchInferenceJob.jobOutput.s3DataDestination.kmsKeyArn',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.jobOutput.s3DataDestination.kmsKeyArn', props);
    return resource.getResponseField('batchInferenceJob.jobOutput.s3DataDestination.kmsKeyArn') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
  }

  public get itemExplorationConfig(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchInferenceJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeBatchInferenceJob.batchInferenceJob.batchInferenceJobConfig.itemExplorationConfig'),
        outputPath: 'batchInferenceJob.batchInferenceJobConfig.itemExplorationConfig',
        parameters: {
          batchInferenceJobArn: this.__input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchInferenceJob.batchInferenceJob.batchInferenceJobConfig.itemExplorationConfig', props);
    return resource.getResponseField('batchInferenceJob.batchInferenceJobConfig.itemExplorationConfig') as unknown as Record<string, string>;
  }

}

export class PersonalizeResponsesDescribeCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeCampaignRequest) {
  }

  public get campaign(): PersonalizeResponsesDescribeCampaignCampaign {
    return new PersonalizeResponsesDescribeCampaignCampaign(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeCampaignCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeCampaignRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.name'),
        outputPath: 'campaign.name',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.name', props);
    return resource.getResponseField('campaign.name') as unknown as string;
  }

  public get campaignArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.campaignArn'),
        outputPath: 'campaign.campaignArn',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.campaignArn', props);
    return resource.getResponseField('campaign.campaignArn') as unknown as string;
  }

  public get solutionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.solutionVersionArn'),
        outputPath: 'campaign.solutionVersionArn',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.solutionVersionArn', props);
    return resource.getResponseField('campaign.solutionVersionArn') as unknown as string;
  }

  public get minProvisionedTps(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.minProvisionedTPS'),
        outputPath: 'campaign.minProvisionedTPS',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.minProvisionedTPS', props);
    return resource.getResponseField('campaign.minProvisionedTPS') as unknown as number;
  }

  public get campaignConfig(): PersonalizeResponsesDescribeCampaignCampaignCampaignConfig {
    return new PersonalizeResponsesDescribeCampaignCampaignCampaignConfig(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.status'),
        outputPath: 'campaign.status',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.status', props);
    return resource.getResponseField('campaign.status') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.failureReason'),
        outputPath: 'campaign.failureReason',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.failureReason', props);
    return resource.getResponseField('campaign.failureReason') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.creationDateTime'),
        outputPath: 'campaign.creationDateTime',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.creationDateTime', props);
    return resource.getResponseField('campaign.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.lastUpdatedDateTime'),
        outputPath: 'campaign.lastUpdatedDateTime',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.lastUpdatedDateTime', props);
    return resource.getResponseField('campaign.lastUpdatedDateTime') as unknown as string;
  }

  public get latestCampaignUpdate(): PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate {
    return new PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeCampaignCampaignCampaignConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeCampaignRequest) {
  }

  public get itemExplorationConfig(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.campaignConfig.itemExplorationConfig'),
        outputPath: 'campaign.campaignConfig.itemExplorationConfig',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.campaignConfig.itemExplorationConfig', props);
    return resource.getResponseField('campaign.campaignConfig.itemExplorationConfig') as unknown as Record<string, string>;
  }

}

export class PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeCampaignRequest) {
  }

  public get solutionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.latestCampaignUpdate.solutionVersionArn'),
        outputPath: 'campaign.latestCampaignUpdate.solutionVersionArn',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.latestCampaignUpdate.solutionVersionArn', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.solutionVersionArn') as unknown as string;
  }

  public get minProvisionedTps(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.latestCampaignUpdate.minProvisionedTPS'),
        outputPath: 'campaign.latestCampaignUpdate.minProvisionedTPS',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.latestCampaignUpdate.minProvisionedTPS', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.minProvisionedTPS') as unknown as number;
  }

  public get campaignConfig(): PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig {
    return new PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.latestCampaignUpdate.status'),
        outputPath: 'campaign.latestCampaignUpdate.status',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.latestCampaignUpdate.status', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.status') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.latestCampaignUpdate.failureReason'),
        outputPath: 'campaign.latestCampaignUpdate.failureReason',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.latestCampaignUpdate.failureReason', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.failureReason') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.latestCampaignUpdate.creationDateTime'),
        outputPath: 'campaign.latestCampaignUpdate.creationDateTime',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.latestCampaignUpdate.creationDateTime', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.latestCampaignUpdate.lastUpdatedDateTime'),
        outputPath: 'campaign.latestCampaignUpdate.lastUpdatedDateTime',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.latestCampaignUpdate.lastUpdatedDateTime', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeCampaignRequest) {
  }

  public get itemExplorationConfig(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeCampaign.campaign.latestCampaignUpdate.campaignConfig.itemExplorationConfig'),
        outputPath: 'campaign.latestCampaignUpdate.campaignConfig.itemExplorationConfig',
        parameters: {
          campaignArn: this.__input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCampaign.campaign.latestCampaignUpdate.campaignConfig.itemExplorationConfig', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.campaignConfig.itemExplorationConfig') as unknown as Record<string, string>;
  }

}

export class PersonalizeResponsesDescribeDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetRequest) {
  }

  public get dataset(): PersonalizeResponsesDescribeDatasetDataset {
    return new PersonalizeResponsesDescribeDatasetDataset(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeDatasetDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.name'),
        outputPath: 'dataset.name',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.name', props);
    return resource.getResponseField('dataset.name') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.datasetArn'),
        outputPath: 'dataset.datasetArn',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.datasetArn', props);
    return resource.getResponseField('dataset.datasetArn') as unknown as string;
  }

  public get datasetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.datasetGroupArn'),
        outputPath: 'dataset.datasetGroupArn',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.datasetGroupArn', props);
    return resource.getResponseField('dataset.datasetGroupArn') as unknown as string;
  }

  public get datasetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.datasetType'),
        outputPath: 'dataset.datasetType',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.datasetType', props);
    return resource.getResponseField('dataset.datasetType') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.schemaArn'),
        outputPath: 'dataset.schemaArn',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.schemaArn', props);
    return resource.getResponseField('dataset.schemaArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.status'),
        outputPath: 'dataset.status',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.status', props);
    return resource.getResponseField('dataset.status') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.creationDateTime'),
        outputPath: 'dataset.creationDateTime',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.creationDateTime', props);
    return resource.getResponseField('dataset.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDataset.dataset.lastUpdatedDateTime'),
        outputPath: 'dataset.lastUpdatedDateTime',
        parameters: {
          datasetArn: this.__input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.lastUpdatedDateTime', props);
    return resource.getResponseField('dataset.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeDatasetExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetExportJobRequest) {
  }

  public get datasetExportJob(): PersonalizeResponsesDescribeDatasetExportJobDatasetExportJob {
    return new PersonalizeResponsesDescribeDatasetExportJobDatasetExportJob(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeDatasetExportJobDatasetExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetExportJobRequest) {
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.jobName'),
        outputPath: 'datasetExportJob.jobName',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.jobName', props);
    return resource.getResponseField('datasetExportJob.jobName') as unknown as string;
  }

  public get datasetExportJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.datasetExportJobArn'),
        outputPath: 'datasetExportJob.datasetExportJobArn',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.datasetExportJobArn', props);
    return resource.getResponseField('datasetExportJob.datasetExportJobArn') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.datasetArn'),
        outputPath: 'datasetExportJob.datasetArn',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.datasetArn', props);
    return resource.getResponseField('datasetExportJob.datasetArn') as unknown as string;
  }

  public get ingestionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.ingestionMode'),
        outputPath: 'datasetExportJob.ingestionMode',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.ingestionMode', props);
    return resource.getResponseField('datasetExportJob.ingestionMode') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.roleArn'),
        outputPath: 'datasetExportJob.roleArn',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.roleArn', props);
    return resource.getResponseField('datasetExportJob.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.status'),
        outputPath: 'datasetExportJob.status',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.status', props);
    return resource.getResponseField('datasetExportJob.status') as unknown as string;
  }

  public get jobOutput(): PersonalizeResponsesDescribeDatasetExportJobDatasetExportJobJobOutput {
    return new PersonalizeResponsesDescribeDatasetExportJobDatasetExportJobJobOutput(this.__scope, this.__resources, this.__input);
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.creationDateTime'),
        outputPath: 'datasetExportJob.creationDateTime',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.creationDateTime', props);
    return resource.getResponseField('datasetExportJob.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.lastUpdatedDateTime'),
        outputPath: 'datasetExportJob.lastUpdatedDateTime',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.lastUpdatedDateTime', props);
    return resource.getResponseField('datasetExportJob.lastUpdatedDateTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.failureReason'),
        outputPath: 'datasetExportJob.failureReason',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.failureReason', props);
    return resource.getResponseField('datasetExportJob.failureReason') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeDatasetExportJobDatasetExportJobJobOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetExportJobRequest) {
  }

  public get s3DataDestination(): PersonalizeResponsesDescribeDatasetExportJobDatasetExportJobJobOutputS3DataDestination {
    return new PersonalizeResponsesDescribeDatasetExportJobDatasetExportJobJobOutputS3DataDestination(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeDatasetExportJobDatasetExportJobJobOutputS3DataDestination {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetExportJobRequest) {
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.jobOutput.s3DataDestination.path'),
        outputPath: 'datasetExportJob.jobOutput.s3DataDestination.path',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.jobOutput.s3DataDestination.path', props);
    return resource.getResponseField('datasetExportJob.jobOutput.s3DataDestination.path') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetExportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetExportJob.datasetExportJob.jobOutput.s3DataDestination.kmsKeyArn'),
        outputPath: 'datasetExportJob.jobOutput.s3DataDestination.kmsKeyArn',
        parameters: {
          datasetExportJobArn: this.__input.datasetExportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetExportJob.datasetExportJob.jobOutput.s3DataDestination.kmsKeyArn', props);
    return resource.getResponseField('datasetExportJob.jobOutput.s3DataDestination.kmsKeyArn') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeDatasetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetGroupRequest) {
  }

  public get datasetGroup(): PersonalizeResponsesDescribeDatasetGroupDatasetGroup {
    return new PersonalizeResponsesDescribeDatasetGroupDatasetGroup(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeDatasetGroupDatasetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetGroupRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.name'),
        outputPath: 'datasetGroup.name',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.name', props);
    return resource.getResponseField('datasetGroup.name') as unknown as string;
  }

  public get datasetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.datasetGroupArn'),
        outputPath: 'datasetGroup.datasetGroupArn',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.datasetGroupArn', props);
    return resource.getResponseField('datasetGroup.datasetGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.status'),
        outputPath: 'datasetGroup.status',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.status', props);
    return resource.getResponseField('datasetGroup.status') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.roleArn'),
        outputPath: 'datasetGroup.roleArn',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.roleArn', props);
    return resource.getResponseField('datasetGroup.roleArn') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.kmsKeyArn'),
        outputPath: 'datasetGroup.kmsKeyArn',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.kmsKeyArn', props);
    return resource.getResponseField('datasetGroup.kmsKeyArn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.creationDateTime'),
        outputPath: 'datasetGroup.creationDateTime',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.creationDateTime', props);
    return resource.getResponseField('datasetGroup.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.lastUpdatedDateTime'),
        outputPath: 'datasetGroup.lastUpdatedDateTime',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.lastUpdatedDateTime', props);
    return resource.getResponseField('datasetGroup.lastUpdatedDateTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetGroup',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetGroup.datasetGroup.failureReason'),
        outputPath: 'datasetGroup.failureReason',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetGroup.datasetGroup.failureReason', props);
    return resource.getResponseField('datasetGroup.failureReason') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeDatasetImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetImportJobRequest) {
  }

  public get datasetImportJob(): PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob {
    return new PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeDatasetImportJobDatasetImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetImportJobRequest) {
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.jobName'),
        outputPath: 'datasetImportJob.jobName',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.jobName', props);
    return resource.getResponseField('datasetImportJob.jobName') as unknown as string;
  }

  public get datasetImportJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.datasetImportJobArn'),
        outputPath: 'datasetImportJob.datasetImportJobArn',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.datasetImportJobArn', props);
    return resource.getResponseField('datasetImportJob.datasetImportJobArn') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.datasetArn'),
        outputPath: 'datasetImportJob.datasetArn',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.datasetArn', props);
    return resource.getResponseField('datasetImportJob.datasetArn') as unknown as string;
  }

  public get dataSource(): PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource {
    return new PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.roleArn'),
        outputPath: 'datasetImportJob.roleArn',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.roleArn', props);
    return resource.getResponseField('datasetImportJob.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.status'),
        outputPath: 'datasetImportJob.status',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.status', props);
    return resource.getResponseField('datasetImportJob.status') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.creationDateTime'),
        outputPath: 'datasetImportJob.creationDateTime',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.creationDateTime', props);
    return resource.getResponseField('datasetImportJob.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.lastUpdatedDateTime'),
        outputPath: 'datasetImportJob.lastUpdatedDateTime',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.lastUpdatedDateTime', props);
    return resource.getResponseField('datasetImportJob.lastUpdatedDateTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.failureReason'),
        outputPath: 'datasetImportJob.failureReason',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.failureReason', props);
    return resource.getResponseField('datasetImportJob.failureReason') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeDatasetImportJobDatasetImportJobDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeDatasetImportJobRequest) {
  }

  public get dataLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatasetImportJob',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeDatasetImportJob.datasetImportJob.dataSource.dataLocation'),
        outputPath: 'datasetImportJob.dataSource.dataLocation',
        parameters: {
          datasetImportJobArn: this.__input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatasetImportJob.datasetImportJob.dataSource.dataLocation', props);
    return resource.getResponseField('datasetImportJob.dataSource.dataLocation') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeEventTracker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeEventTrackerRequest) {
  }

  public get eventTracker(): PersonalizeResponsesDescribeEventTrackerEventTracker {
    return new PersonalizeResponsesDescribeEventTrackerEventTracker(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeEventTrackerEventTracker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeEventTrackerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.name'),
        outputPath: 'eventTracker.name',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.name', props);
    return resource.getResponseField('eventTracker.name') as unknown as string;
  }

  public get eventTrackerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.eventTrackerArn'),
        outputPath: 'eventTracker.eventTrackerArn',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.eventTrackerArn', props);
    return resource.getResponseField('eventTracker.eventTrackerArn') as unknown as string;
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.accountId'),
        outputPath: 'eventTracker.accountId',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.accountId', props);
    return resource.getResponseField('eventTracker.accountId') as unknown as string;
  }

  public get trackingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.trackingId'),
        outputPath: 'eventTracker.trackingId',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.trackingId', props);
    return resource.getResponseField('eventTracker.trackingId') as unknown as string;
  }

  public get datasetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.datasetGroupArn'),
        outputPath: 'eventTracker.datasetGroupArn',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.datasetGroupArn', props);
    return resource.getResponseField('eventTracker.datasetGroupArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.status'),
        outputPath: 'eventTracker.status',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.status', props);
    return resource.getResponseField('eventTracker.status') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.creationDateTime'),
        outputPath: 'eventTracker.creationDateTime',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.creationDateTime', props);
    return resource.getResponseField('eventTracker.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventTracker',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeEventTracker.eventTracker.lastUpdatedDateTime'),
        outputPath: 'eventTracker.lastUpdatedDateTime',
        parameters: {
          eventTrackerArn: this.__input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventTracker.eventTracker.lastUpdatedDateTime', props);
    return resource.getResponseField('eventTracker.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeFeatureTransformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeFeatureTransformationRequest) {
  }

  public get featureTransformation(): PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation {
    return new PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeFeatureTransformationFeatureTransformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeFeatureTransformationRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeatureTransformation',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFeatureTransformation.featureTransformation.name'),
        outputPath: 'featureTransformation.name',
        parameters: {
          featureTransformationArn: this.__input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeatureTransformation.featureTransformation.name', props);
    return resource.getResponseField('featureTransformation.name') as unknown as string;
  }

  public get featureTransformationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeatureTransformation',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFeatureTransformation.featureTransformation.featureTransformationArn'),
        outputPath: 'featureTransformation.featureTransformationArn',
        parameters: {
          featureTransformationArn: this.__input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeatureTransformation.featureTransformation.featureTransformationArn', props);
    return resource.getResponseField('featureTransformation.featureTransformationArn') as unknown as string;
  }

  public get defaultParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeatureTransformation',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFeatureTransformation.featureTransformation.defaultParameters'),
        outputPath: 'featureTransformation.defaultParameters',
        parameters: {
          featureTransformationArn: this.__input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeatureTransformation.featureTransformation.defaultParameters', props);
    return resource.getResponseField('featureTransformation.defaultParameters') as unknown as Record<string, string>;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeatureTransformation',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFeatureTransformation.featureTransformation.creationDateTime'),
        outputPath: 'featureTransformation.creationDateTime',
        parameters: {
          featureTransformationArn: this.__input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeatureTransformation.featureTransformation.creationDateTime', props);
    return resource.getResponseField('featureTransformation.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeatureTransformation',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFeatureTransformation.featureTransformation.lastUpdatedDateTime'),
        outputPath: 'featureTransformation.lastUpdatedDateTime',
        parameters: {
          featureTransformationArn: this.__input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeatureTransformation.featureTransformation.lastUpdatedDateTime', props);
    return resource.getResponseField('featureTransformation.lastUpdatedDateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFeatureTransformation',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFeatureTransformation.featureTransformation.status'),
        outputPath: 'featureTransformation.status',
        parameters: {
          featureTransformationArn: this.__input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFeatureTransformation.featureTransformation.status', props);
    return resource.getResponseField('featureTransformation.status') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeFilterRequest) {
  }

  public get filter(): PersonalizeResponsesDescribeFilterFilter {
    return new PersonalizeResponsesDescribeFilterFilter(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeFilterFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeFilterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.name'),
        outputPath: 'filter.name',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.name', props);
    return resource.getResponseField('filter.name') as unknown as string;
  }

  public get filterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.filterArn'),
        outputPath: 'filter.filterArn',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.filterArn', props);
    return resource.getResponseField('filter.filterArn') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.creationDateTime'),
        outputPath: 'filter.creationDateTime',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.creationDateTime', props);
    return resource.getResponseField('filter.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.lastUpdatedDateTime'),
        outputPath: 'filter.lastUpdatedDateTime',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.lastUpdatedDateTime', props);
    return resource.getResponseField('filter.lastUpdatedDateTime') as unknown as string;
  }

  public get datasetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.datasetGroupArn'),
        outputPath: 'filter.datasetGroupArn',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.datasetGroupArn', props);
    return resource.getResponseField('filter.datasetGroupArn') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.failureReason'),
        outputPath: 'filter.failureReason',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.failureReason', props);
    return resource.getResponseField('filter.failureReason') as unknown as string;
  }

  public get filterExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.filterExpression'),
        outputPath: 'filter.filterExpression',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.filterExpression', props);
    return resource.getResponseField('filter.filterExpression') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFilter',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeFilter.filter.status'),
        outputPath: 'filter.status',
        parameters: {
          filterArn: this.__input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFilter.filter.status', props);
    return resource.getResponseField('filter.status') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeRecipeRequest) {
  }

  public get recipe(): PersonalizeResponsesDescribeRecipeRecipe {
    return new PersonalizeResponsesDescribeRecipeRecipe(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeRecipeRecipe {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeRecipeRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.name'),
        outputPath: 'recipe.name',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.name', props);
    return resource.getResponseField('recipe.name') as unknown as string;
  }

  public get recipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.recipeArn'),
        outputPath: 'recipe.recipeArn',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.recipeArn', props);
    return resource.getResponseField('recipe.recipeArn') as unknown as string;
  }

  public get algorithmArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.algorithmArn'),
        outputPath: 'recipe.algorithmArn',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.algorithmArn', props);
    return resource.getResponseField('recipe.algorithmArn') as unknown as string;
  }

  public get featureTransformationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.featureTransformationArn'),
        outputPath: 'recipe.featureTransformationArn',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.featureTransformationArn', props);
    return resource.getResponseField('recipe.featureTransformationArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.status'),
        outputPath: 'recipe.status',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.status', props);
    return resource.getResponseField('recipe.status') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.description'),
        outputPath: 'recipe.description',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.description', props);
    return resource.getResponseField('recipe.description') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.creationDateTime'),
        outputPath: 'recipe.creationDateTime',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.creationDateTime', props);
    return resource.getResponseField('recipe.creationDateTime') as unknown as string;
  }

  public get recipeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.recipeType'),
        outputPath: 'recipe.recipeType',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.recipeType', props);
    return resource.getResponseField('recipe.recipeType') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecipe',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeRecipe.recipe.lastUpdatedDateTime'),
        outputPath: 'recipe.lastUpdatedDateTime',
        parameters: {
          recipeArn: this.__input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecipe.recipe.lastUpdatedDateTime', props);
    return resource.getResponseField('recipe.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSchemaRequest) {
  }

  public get schema(): PersonalizeResponsesDescribeSchemaSchema {
    return new PersonalizeResponsesDescribeSchemaSchema(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSchemaSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSchemaRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSchema.schema.name'),
        outputPath: 'schema.name',
        parameters: {
          schemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.schema.name', props);
    return resource.getResponseField('schema.name') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSchema.schema.schemaArn'),
        outputPath: 'schema.schemaArn',
        parameters: {
          schemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.schema.schemaArn', props);
    return resource.getResponseField('schema.schemaArn') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSchema.schema.schema'),
        outputPath: 'schema.schema',
        parameters: {
          schemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.schema.schema', props);
    return resource.getResponseField('schema.schema') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSchema.schema.creationDateTime'),
        outputPath: 'schema.creationDateTime',
        parameters: {
          schemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.schema.creationDateTime', props);
    return resource.getResponseField('schema.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSchema.schema.lastUpdatedDateTime'),
        outputPath: 'schema.lastUpdatedDateTime',
        parameters: {
          schemaArn: this.__input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.schema.lastUpdatedDateTime', props);
    return resource.getResponseField('schema.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get solution(): PersonalizeResponsesDescribeSolutionSolution {
    return new PersonalizeResponsesDescribeSolutionSolution(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSolutionSolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.name'),
        outputPath: 'solution.name',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.name', props);
    return resource.getResponseField('solution.name') as unknown as string;
  }

  public get solutionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionArn'),
        outputPath: 'solution.solutionArn',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionArn', props);
    return resource.getResponseField('solution.solutionArn') as unknown as string;
  }

  public get performHpo(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.performHPO'),
        outputPath: 'solution.performHPO',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.performHPO', props);
    return resource.getResponseField('solution.performHPO') as unknown as boolean;
  }

  public get performAutoMl(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.performAutoML'),
        outputPath: 'solution.performAutoML',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.performAutoML', props);
    return resource.getResponseField('solution.performAutoML') as unknown as boolean;
  }

  public get recipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.recipeArn'),
        outputPath: 'solution.recipeArn',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.recipeArn', props);
    return resource.getResponseField('solution.recipeArn') as unknown as string;
  }

  public get datasetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.datasetGroupArn'),
        outputPath: 'solution.datasetGroupArn',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.datasetGroupArn', props);
    return resource.getResponseField('solution.datasetGroupArn') as unknown as string;
  }

  public get eventType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.eventType'),
        outputPath: 'solution.eventType',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.eventType', props);
    return resource.getResponseField('solution.eventType') as unknown as string;
  }

  public get solutionConfig(): PersonalizeResponsesDescribeSolutionSolutionSolutionConfig {
    return new PersonalizeResponsesDescribeSolutionSolutionSolutionConfig(this.__scope, this.__resources, this.__input);
  }

  public get autoMlResult(): PersonalizeResponsesDescribeSolutionSolutionAutoMlResult {
    return new PersonalizeResponsesDescribeSolutionSolutionAutoMlResult(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.status'),
        outputPath: 'solution.status',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.status', props);
    return resource.getResponseField('solution.status') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.creationDateTime'),
        outputPath: 'solution.creationDateTime',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.creationDateTime', props);
    return resource.getResponseField('solution.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.lastUpdatedDateTime'),
        outputPath: 'solution.lastUpdatedDateTime',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.lastUpdatedDateTime', props);
    return resource.getResponseField('solution.lastUpdatedDateTime') as unknown as string;
  }

  public get latestSolutionVersion(): PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion {
    return new PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionSolutionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get eventValueThreshold(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.eventValueThreshold'),
        outputPath: 'solution.solutionConfig.eventValueThreshold',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.eventValueThreshold', props);
    return resource.getResponseField('solution.solutionConfig.eventValueThreshold') as unknown as string;
  }

  public get hpoConfig(): PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig {
    return new PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig(this.__scope, this.__resources, this.__input);
  }

  public get algorithmHyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.algorithmHyperParameters'),
        outputPath: 'solution.solutionConfig.algorithmHyperParameters',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.algorithmHyperParameters', props);
    return resource.getResponseField('solution.solutionConfig.algorithmHyperParameters') as unknown as Record<string, string>;
  }

  public get featureTransformationParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.featureTransformationParameters'),
        outputPath: 'solution.solutionConfig.featureTransformationParameters',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.featureTransformationParameters', props);
    return resource.getResponseField('solution.solutionConfig.featureTransformationParameters') as unknown as Record<string, string>;
  }

  public get autoMlConfig(): PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig {
    return new PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig(this.__scope, this.__resources, this.__input);
  }

  public get optimizationObjective(): PersonalizeResponsesDescribeSolutionSolutionSolutionConfigOptimizationObjective {
    return new PersonalizeResponsesDescribeSolutionSolutionSolutionConfigOptimizationObjective(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get hpoObjective(): PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective {
    return new PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective(this.__scope, this.__resources, this.__input);
  }

  public get hpoResourceConfig(): PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig {
    return new PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get algorithmHyperParameterRanges(): PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {
    return new PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.type'),
        outputPath: 'solution.solutionConfig.hpoConfig.hpoObjective.type',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.type', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.hpoObjective.type') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.metricName'),
        outputPath: 'solution.solutionConfig.hpoConfig.hpoObjective.metricName',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.metricName', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.hpoObjective.metricName') as unknown as string;
  }

  public get metricRegex(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.metricRegex'),
        outputPath: 'solution.solutionConfig.hpoConfig.hpoObjective.metricRegex',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.metricRegex', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.hpoObjective.metricRegex') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get maxNumberOfTrainingJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs'),
        outputPath: 'solution.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs') as unknown as string;
  }

  public get maxParallelTrainingJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs'),
        outputPath: 'solution.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get integerHyperParameterRanges(): shapes.PersonalizeIntegerHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges'),
        outputPath: 'solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges') as unknown as shapes.PersonalizeIntegerHyperParameterRange[];
  }

  public get continuousHyperParameterRanges(): shapes.PersonalizeContinuousHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges'),
        outputPath: 'solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges') as unknown as shapes.PersonalizeContinuousHyperParameterRange[];
  }

  public get categoricalHyperParameterRanges(): shapes.PersonalizeCategoricalHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges'),
        outputPath: 'solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges') as unknown as shapes.PersonalizeCategoricalHyperParameterRange[];
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionSolutionConfigAutoMlConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.autoMLConfig.metricName'),
        outputPath: 'solution.solutionConfig.autoMLConfig.metricName',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.autoMLConfig.metricName', props);
    return resource.getResponseField('solution.solutionConfig.autoMLConfig.metricName') as unknown as string;
  }

  public get recipeList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.autoMLConfig.recipeList'),
        outputPath: 'solution.solutionConfig.autoMLConfig.recipeList',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.autoMLConfig.recipeList', props);
    return resource.getResponseField('solution.solutionConfig.autoMLConfig.recipeList') as unknown as string[];
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionSolutionConfigOptimizationObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get itemAttribute(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.optimizationObjective.itemAttribute'),
        outputPath: 'solution.solutionConfig.optimizationObjective.itemAttribute',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.optimizationObjective.itemAttribute', props);
    return resource.getResponseField('solution.solutionConfig.optimizationObjective.itemAttribute') as unknown as string;
  }

  public get objectiveSensitivity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.solutionConfig.optimizationObjective.objectiveSensitivity'),
        outputPath: 'solution.solutionConfig.optimizationObjective.objectiveSensitivity',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.solutionConfig.optimizationObjective.objectiveSensitivity', props);
    return resource.getResponseField('solution.solutionConfig.optimizationObjective.objectiveSensitivity') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionAutoMlResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get bestRecipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.autoMLResult.bestRecipeArn'),
        outputPath: 'solution.autoMLResult.bestRecipeArn',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.autoMLResult.bestRecipeArn', props);
    return resource.getResponseField('solution.autoMLResult.bestRecipeArn') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionSolutionLatestSolutionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionRequest) {
  }

  public get solutionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.latestSolutionVersion.solutionVersionArn'),
        outputPath: 'solution.latestSolutionVersion.solutionVersionArn',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.latestSolutionVersion.solutionVersionArn', props);
    return resource.getResponseField('solution.latestSolutionVersion.solutionVersionArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.latestSolutionVersion.status'),
        outputPath: 'solution.latestSolutionVersion.status',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.latestSolutionVersion.status', props);
    return resource.getResponseField('solution.latestSolutionVersion.status') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.latestSolutionVersion.creationDateTime'),
        outputPath: 'solution.latestSolutionVersion.creationDateTime',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.latestSolutionVersion.creationDateTime', props);
    return resource.getResponseField('solution.latestSolutionVersion.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.latestSolutionVersion.lastUpdatedDateTime'),
        outputPath: 'solution.latestSolutionVersion.lastUpdatedDateTime',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.latestSolutionVersion.lastUpdatedDateTime', props);
    return resource.getResponseField('solution.latestSolutionVersion.lastUpdatedDateTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolution',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolution.solution.latestSolutionVersion.failureReason'),
        outputPath: 'solution.latestSolutionVersion.failureReason',
        parameters: {
          solutionArn: this.__input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolution.solution.latestSolutionVersion.failureReason', props);
    return resource.getResponseField('solution.latestSolutionVersion.failureReason') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get solutionVersion(): PersonalizeResponsesDescribeSolutionVersionSolutionVersion {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersion(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get solutionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionVersionArn'),
        outputPath: 'solutionVersion.solutionVersionArn',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionVersionArn', props);
    return resource.getResponseField('solutionVersion.solutionVersionArn') as unknown as string;
  }

  public get solutionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionArn'),
        outputPath: 'solutionVersion.solutionArn',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionArn', props);
    return resource.getResponseField('solutionVersion.solutionArn') as unknown as string;
  }

  public get performHpo(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.performHPO'),
        outputPath: 'solutionVersion.performHPO',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.performHPO', props);
    return resource.getResponseField('solutionVersion.performHPO') as unknown as boolean;
  }

  public get performAutoMl(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.performAutoML'),
        outputPath: 'solutionVersion.performAutoML',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.performAutoML', props);
    return resource.getResponseField('solutionVersion.performAutoML') as unknown as boolean;
  }

  public get recipeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.recipeArn'),
        outputPath: 'solutionVersion.recipeArn',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.recipeArn', props);
    return resource.getResponseField('solutionVersion.recipeArn') as unknown as string;
  }

  public get eventType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.eventType'),
        outputPath: 'solutionVersion.eventType',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.eventType', props);
    return resource.getResponseField('solutionVersion.eventType') as unknown as string;
  }

  public get datasetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.datasetGroupArn'),
        outputPath: 'solutionVersion.datasetGroupArn',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.datasetGroupArn', props);
    return resource.getResponseField('solutionVersion.datasetGroupArn') as unknown as string;
  }

  public get solutionConfig(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig(this.__scope, this.__resources, this.__input);
  }

  public get trainingHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.trainingHours'),
        outputPath: 'solutionVersion.trainingHours',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.trainingHours', props);
    return resource.getResponseField('solutionVersion.trainingHours') as unknown as number;
  }

  public get trainingMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.trainingMode'),
        outputPath: 'solutionVersion.trainingMode',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.trainingMode', props);
    return resource.getResponseField('solutionVersion.trainingMode') as unknown as string;
  }

  public get tunedHpoParams(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.status'),
        outputPath: 'solutionVersion.status',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.status', props);
    return resource.getResponseField('solutionVersion.status') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.failureReason'),
        outputPath: 'solutionVersion.failureReason',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.failureReason', props);
    return resource.getResponseField('solutionVersion.failureReason') as unknown as string;
  }

  public get creationDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.creationDateTime'),
        outputPath: 'solutionVersion.creationDateTime',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.creationDateTime', props);
    return resource.getResponseField('solutionVersion.creationDateTime') as unknown as string;
  }

  public get lastUpdatedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.lastUpdatedDateTime'),
        outputPath: 'solutionVersion.lastUpdatedDateTime',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.lastUpdatedDateTime', props);
    return resource.getResponseField('solutionVersion.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get eventValueThreshold(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.eventValueThreshold'),
        outputPath: 'solutionVersion.solutionConfig.eventValueThreshold',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.eventValueThreshold', props);
    return resource.getResponseField('solutionVersion.solutionConfig.eventValueThreshold') as unknown as string;
  }

  public get hpoConfig(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig(this.__scope, this.__resources, this.__input);
  }

  public get algorithmHyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.algorithmHyperParameters'),
        outputPath: 'solutionVersion.solutionConfig.algorithmHyperParameters',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.algorithmHyperParameters', props);
    return resource.getResponseField('solutionVersion.solutionConfig.algorithmHyperParameters') as unknown as Record<string, string>;
  }

  public get featureTransformationParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.featureTransformationParameters'),
        outputPath: 'solutionVersion.solutionConfig.featureTransformationParameters',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.featureTransformationParameters', props);
    return resource.getResponseField('solutionVersion.solutionConfig.featureTransformationParameters') as unknown as Record<string, string>;
  }

  public get autoMlConfig(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig(this.__scope, this.__resources, this.__input);
  }

  public get optimizationObjective(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigOptimizationObjective {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigOptimizationObjective(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get hpoObjective(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective(this.__scope, this.__resources, this.__input);
  }

  public get hpoResourceConfig(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get algorithmHyperParameterRanges(): PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {
    return new PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges(this.__scope, this.__resources, this.__input);
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.type'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.hpoObjective.type',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.type', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.hpoObjective.type') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricName'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricName',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricName', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricName') as unknown as string;
  }

  public get metricRegex(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricRegex'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricRegex',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricRegex', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricRegex') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get maxNumberOfTrainingJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs') as unknown as string;
  }

  public get maxParallelTrainingJobs(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get integerHyperParameterRanges(): shapes.PersonalizeIntegerHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges') as unknown as shapes.PersonalizeIntegerHyperParameterRange[];
  }

  public get continuousHyperParameterRanges(): shapes.PersonalizeContinuousHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges') as unknown as shapes.PersonalizeContinuousHyperParameterRange[];
  }

  public get categoricalHyperParameterRanges(): shapes.PersonalizeCategoricalHyperParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges'),
        outputPath: 'solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges') as unknown as shapes.PersonalizeCategoricalHyperParameterRange[];
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.autoMLConfig.metricName'),
        outputPath: 'solutionVersion.solutionConfig.autoMLConfig.metricName',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.autoMLConfig.metricName', props);
    return resource.getResponseField('solutionVersion.solutionConfig.autoMLConfig.metricName') as unknown as string;
  }

  public get recipeList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.autoMLConfig.recipeList'),
        outputPath: 'solutionVersion.solutionConfig.autoMLConfig.recipeList',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.autoMLConfig.recipeList', props);
    return resource.getResponseField('solutionVersion.solutionConfig.autoMLConfig.recipeList') as unknown as string[];
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionSolutionConfigOptimizationObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get itemAttribute(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.optimizationObjective.itemAttribute'),
        outputPath: 'solutionVersion.solutionConfig.optimizationObjective.itemAttribute',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.optimizationObjective.itemAttribute', props);
    return resource.getResponseField('solutionVersion.solutionConfig.optimizationObjective.itemAttribute') as unknown as string;
  }

  public get objectiveSensitivity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.solutionConfig.optimizationObjective.objectiveSensitivity'),
        outputPath: 'solutionVersion.solutionConfig.optimizationObjective.objectiveSensitivity',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.solutionConfig.optimizationObjective.objectiveSensitivity', props);
    return resource.getResponseField('solutionVersion.solutionConfig.optimizationObjective.objectiveSensitivity') as unknown as string;
  }

}

export class PersonalizeResponsesDescribeSolutionVersionSolutionVersionTunedHpoParams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeDescribeSolutionVersionRequest) {
  }

  public get algorithmHyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSolutionVersion',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.DescribeSolutionVersion.solutionVersion.tunedHPOParams.algorithmHyperParameters'),
        outputPath: 'solutionVersion.tunedHPOParams.algorithmHyperParameters',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSolutionVersion.solutionVersion.tunedHPOParams.algorithmHyperParameters', props);
    return resource.getResponseField('solutionVersion.tunedHPOParams.algorithmHyperParameters') as unknown as Record<string, string>;
  }

}

export class PersonalizeResponsesFetchSolutionMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeGetSolutionMetricsRequest) {
  }

  public get solutionVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSolutionMetrics',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.GetSolutionMetrics.solutionVersionArn'),
        outputPath: 'solutionVersionArn',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSolutionMetrics.solutionVersionArn', props);
    return resource.getResponseField('solutionVersionArn') as unknown as string;
  }

  public get metrics(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSolutionMetrics',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.GetSolutionMetrics.metrics'),
        outputPath: 'metrics',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSolutionMetrics.metrics', props);
    return resource.getResponseField('metrics') as unknown as Record<string, number>;
  }

}

export class PersonalizeResponsesListBatchInferenceJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListBatchInferenceJobsRequest) {
  }

  public get batchInferenceJobs(): shapes.PersonalizeBatchInferenceJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBatchInferenceJobs',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListBatchInferenceJobs.batchInferenceJobs'),
        outputPath: 'batchInferenceJobs',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBatchInferenceJobs.batchInferenceJobs', props);
    return resource.getResponseField('batchInferenceJobs') as unknown as shapes.PersonalizeBatchInferenceJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBatchInferenceJobs',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListBatchInferenceJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          solutionVersionArn: this.__input.solutionVersionArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBatchInferenceJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListCampaigns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListCampaignsRequest) {
  }

  public get campaigns(): shapes.PersonalizeCampaignSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCampaigns',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListCampaigns.campaigns'),
        outputPath: 'campaigns',
        parameters: {
          solutionArn: this.__input.solutionArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCampaigns.campaigns', props);
    return resource.getResponseField('campaigns') as unknown as shapes.PersonalizeCampaignSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCampaigns',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListCampaigns.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          solutionArn: this.__input.solutionArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCampaigns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListDatasetExportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListDatasetExportJobsRequest) {
  }

  public get datasetExportJobs(): shapes.PersonalizeDatasetExportJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetExportJobs',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasetExportJobs.datasetExportJobs'),
        outputPath: 'datasetExportJobs',
        parameters: {
          datasetArn: this.__input.datasetArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetExportJobs.datasetExportJobs', props);
    return resource.getResponseField('datasetExportJobs') as unknown as shapes.PersonalizeDatasetExportJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetExportJobs',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasetExportJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          datasetArn: this.__input.datasetArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetExportJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListDatasetGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListDatasetGroupsRequest) {
  }

  public get datasetGroups(): shapes.PersonalizeDatasetGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetGroups',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasetGroups.datasetGroups'),
        outputPath: 'datasetGroups',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetGroups.datasetGroups', props);
    return resource.getResponseField('datasetGroups') as unknown as shapes.PersonalizeDatasetGroupSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetGroups',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasetGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListDatasetImportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListDatasetImportJobsRequest) {
  }

  public get datasetImportJobs(): shapes.PersonalizeDatasetImportJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetImportJobs',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasetImportJobs.datasetImportJobs'),
        outputPath: 'datasetImportJobs',
        parameters: {
          datasetArn: this.__input.datasetArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetImportJobs.datasetImportJobs', props);
    return resource.getResponseField('datasetImportJobs') as unknown as shapes.PersonalizeDatasetImportJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetImportJobs',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasetImportJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          datasetArn: this.__input.datasetArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetImportJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListDatasets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListDatasetsRequest) {
  }

  public get datasets(): shapes.PersonalizeDatasetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasets.datasets'),
        outputPath: 'datasets',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.datasets', props);
    return resource.getResponseField('datasets') as unknown as shapes.PersonalizeDatasetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListDatasets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListEventTrackers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListEventTrackersRequest) {
  }

  public get eventTrackers(): shapes.PersonalizeEventTrackerSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventTrackers',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListEventTrackers.eventTrackers'),
        outputPath: 'eventTrackers',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventTrackers.eventTrackers', props);
    return resource.getResponseField('eventTrackers') as unknown as shapes.PersonalizeEventTrackerSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventTrackers',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListEventTrackers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventTrackers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListFilters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListFiltersRequest) {
  }

  public get filters(): shapes.PersonalizeFilterSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFilters',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListFilters.Filters'),
        outputPath: 'Filters',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFilters.Filters', props);
    return resource.getResponseField('Filters') as unknown as shapes.PersonalizeFilterSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFilters',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListFilters.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFilters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListRecipes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListRecipesRequest) {
  }

  public get recipes(): shapes.PersonalizeRecipeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecipes',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListRecipes.recipes'),
        outputPath: 'recipes',
        parameters: {
          recipeProvider: this.__input.recipeProvider,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecipes.recipes', props);
    return resource.getResponseField('recipes') as unknown as shapes.PersonalizeRecipeSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecipes',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListRecipes.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          recipeProvider: this.__input.recipeProvider,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecipes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListSchemas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListSchemasRequest) {
  }

  public get schemas(): shapes.PersonalizeDatasetSchemaSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListSchemas.schemas'),
        outputPath: 'schemas',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.schemas', props);
    return resource.getResponseField('schemas') as unknown as shapes.PersonalizeDatasetSchemaSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListSchemas.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListSolutionVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListSolutionVersionsRequest) {
  }

  public get solutionVersions(): shapes.PersonalizeSolutionVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSolutionVersions',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListSolutionVersions.solutionVersions'),
        outputPath: 'solutionVersions',
        parameters: {
          solutionArn: this.__input.solutionArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSolutionVersions.solutionVersions', props);
    return resource.getResponseField('solutionVersions') as unknown as shapes.PersonalizeSolutionVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSolutionVersions',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListSolutionVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          solutionArn: this.__input.solutionArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSolutionVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesListSolutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeListSolutionsRequest) {
  }

  public get solutions(): shapes.PersonalizeSolutionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSolutions',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListSolutions.solutions'),
        outputPath: 'solutions',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSolutions.solutions', props);
    return resource.getResponseField('solutions') as unknown as shapes.PersonalizeSolutionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSolutions',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.ListSolutions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          datasetGroupArn: this.__input.datasetGroupArn,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSolutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeResponsesUpdateCampaign {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PersonalizeUpdateCampaignRequest) {
  }

  public get campaignArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCampaign',
        service: 'Personalize',
        physicalResourceId: cr.PhysicalResourceId.of('Personalize.UpdateCampaign.campaignArn'),
        outputPath: 'campaignArn',
        parameters: {
          campaignArn: this.__input.campaignArn,
          solutionVersionArn: this.__input.solutionVersionArn,
          minProvisionedTPS: this.__input.minProvisionedTPS,
          campaignConfig: {
            itemExplorationConfig: this.__input.campaignConfig?.itemExplorationConfig,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCampaign.campaignArn', props);
    return resource.getResponseField('campaignArn') as unknown as string;
  }

}

