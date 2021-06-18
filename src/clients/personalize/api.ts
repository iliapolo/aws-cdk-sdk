import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PersonalizeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createBatchInferenceJob(input: shapes.PersonalizeCreateBatchInferenceJobRequest): PersonalizeCreateBatchInferenceJob {
    return new PersonalizeCreateBatchInferenceJob(this, 'CreateBatchInferenceJob', this.__resources, input);
  }

  public createCampaign(input: shapes.PersonalizeCreateCampaignRequest): PersonalizeCreateCampaign {
    return new PersonalizeCreateCampaign(this, 'CreateCampaign', this.__resources, input);
  }

  public createDataset(input: shapes.PersonalizeCreateDatasetRequest): PersonalizeCreateDataset {
    return new PersonalizeCreateDataset(this, 'CreateDataset', this.__resources, input);
  }

  public createDatasetGroup(input: shapes.PersonalizeCreateDatasetGroupRequest): PersonalizeCreateDatasetGroup {
    return new PersonalizeCreateDatasetGroup(this, 'CreateDatasetGroup', this.__resources, input);
  }

  public createDatasetImportJob(input: shapes.PersonalizeCreateDatasetImportJobRequest): PersonalizeCreateDatasetImportJob {
    return new PersonalizeCreateDatasetImportJob(this, 'CreateDatasetImportJob', this.__resources, input);
  }

  public createEventTracker(input: shapes.PersonalizeCreateEventTrackerRequest): PersonalizeCreateEventTracker {
    return new PersonalizeCreateEventTracker(this, 'CreateEventTracker', this.__resources, input);
  }

  public createFilter(input: shapes.PersonalizeCreateFilterRequest): PersonalizeCreateFilter {
    return new PersonalizeCreateFilter(this, 'CreateFilter', this.__resources, input);
  }

  public createSchema(input: shapes.PersonalizeCreateSchemaRequest): PersonalizeCreateSchema {
    return new PersonalizeCreateSchema(this, 'CreateSchema', this.__resources, input);
  }

  public createSolution(input: shapes.PersonalizeCreateSolutionRequest): PersonalizeCreateSolution {
    return new PersonalizeCreateSolution(this, 'CreateSolution', this.__resources, input);
  }

  public createSolutionVersion(input: shapes.PersonalizeCreateSolutionVersionRequest): PersonalizeCreateSolutionVersion {
    return new PersonalizeCreateSolutionVersion(this, 'CreateSolutionVersion', this.__resources, input);
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

  public describeAlgorithm(input: shapes.PersonalizeDescribeAlgorithmRequest): PersonalizeDescribeAlgorithm {
    return new PersonalizeDescribeAlgorithm(this, 'DescribeAlgorithm', this.__resources, input);
  }

  public describeBatchInferenceJob(input: shapes.PersonalizeDescribeBatchInferenceJobRequest): PersonalizeDescribeBatchInferenceJob {
    return new PersonalizeDescribeBatchInferenceJob(this, 'DescribeBatchInferenceJob', this.__resources, input);
  }

  public describeCampaign(input: shapes.PersonalizeDescribeCampaignRequest): PersonalizeDescribeCampaign {
    return new PersonalizeDescribeCampaign(this, 'DescribeCampaign', this.__resources, input);
  }

  public describeDataset(input: shapes.PersonalizeDescribeDatasetRequest): PersonalizeDescribeDataset {
    return new PersonalizeDescribeDataset(this, 'DescribeDataset', this.__resources, input);
  }

  public describeDatasetGroup(input: shapes.PersonalizeDescribeDatasetGroupRequest): PersonalizeDescribeDatasetGroup {
    return new PersonalizeDescribeDatasetGroup(this, 'DescribeDatasetGroup', this.__resources, input);
  }

  public describeDatasetImportJob(input: shapes.PersonalizeDescribeDatasetImportJobRequest): PersonalizeDescribeDatasetImportJob {
    return new PersonalizeDescribeDatasetImportJob(this, 'DescribeDatasetImportJob', this.__resources, input);
  }

  public describeEventTracker(input: shapes.PersonalizeDescribeEventTrackerRequest): PersonalizeDescribeEventTracker {
    return new PersonalizeDescribeEventTracker(this, 'DescribeEventTracker', this.__resources, input);
  }

  public describeFeatureTransformation(input: shapes.PersonalizeDescribeFeatureTransformationRequest): PersonalizeDescribeFeatureTransformation {
    return new PersonalizeDescribeFeatureTransformation(this, 'DescribeFeatureTransformation', this.__resources, input);
  }

  public describeFilter(input: shapes.PersonalizeDescribeFilterRequest): PersonalizeDescribeFilter {
    return new PersonalizeDescribeFilter(this, 'DescribeFilter', this.__resources, input);
  }

  public describeRecipe(input: shapes.PersonalizeDescribeRecipeRequest): PersonalizeDescribeRecipe {
    return new PersonalizeDescribeRecipe(this, 'DescribeRecipe', this.__resources, input);
  }

  public describeSchema(input: shapes.PersonalizeDescribeSchemaRequest): PersonalizeDescribeSchema {
    return new PersonalizeDescribeSchema(this, 'DescribeSchema', this.__resources, input);
  }

  public describeSolution(input: shapes.PersonalizeDescribeSolutionRequest): PersonalizeDescribeSolution {
    return new PersonalizeDescribeSolution(this, 'DescribeSolution', this.__resources, input);
  }

  public describeSolutionVersion(input: shapes.PersonalizeDescribeSolutionVersionRequest): PersonalizeDescribeSolutionVersion {
    return new PersonalizeDescribeSolutionVersion(this, 'DescribeSolutionVersion', this.__resources, input);
  }

  public fetchSolutionMetrics(input: shapes.PersonalizeGetSolutionMetricsRequest): PersonalizeFetchSolutionMetrics {
    return new PersonalizeFetchSolutionMetrics(this, 'FetchSolutionMetrics', this.__resources, input);
  }

  public listBatchInferenceJobs(input: shapes.PersonalizeListBatchInferenceJobsRequest): PersonalizeListBatchInferenceJobs {
    return new PersonalizeListBatchInferenceJobs(this, 'ListBatchInferenceJobs', this.__resources, input);
  }

  public listCampaigns(input: shapes.PersonalizeListCampaignsRequest): PersonalizeListCampaigns {
    return new PersonalizeListCampaigns(this, 'ListCampaigns', this.__resources, input);
  }

  public listDatasetGroups(input: shapes.PersonalizeListDatasetGroupsRequest): PersonalizeListDatasetGroups {
    return new PersonalizeListDatasetGroups(this, 'ListDatasetGroups', this.__resources, input);
  }

  public listDatasetImportJobs(input: shapes.PersonalizeListDatasetImportJobsRequest): PersonalizeListDatasetImportJobs {
    return new PersonalizeListDatasetImportJobs(this, 'ListDatasetImportJobs', this.__resources, input);
  }

  public listDatasets(input: shapes.PersonalizeListDatasetsRequest): PersonalizeListDatasets {
    return new PersonalizeListDatasets(this, 'ListDatasets', this.__resources, input);
  }

  public listEventTrackers(input: shapes.PersonalizeListEventTrackersRequest): PersonalizeListEventTrackers {
    return new PersonalizeListEventTrackers(this, 'ListEventTrackers', this.__resources, input);
  }

  public listFilters(input: shapes.PersonalizeListFiltersRequest): PersonalizeListFilters {
    return new PersonalizeListFilters(this, 'ListFilters', this.__resources, input);
  }

  public listRecipes(input: shapes.PersonalizeListRecipesRequest): PersonalizeListRecipes {
    return new PersonalizeListRecipes(this, 'ListRecipes', this.__resources, input);
  }

  public listSchemas(input: shapes.PersonalizeListSchemasRequest): PersonalizeListSchemas {
    return new PersonalizeListSchemas(this, 'ListSchemas', this.__resources, input);
  }

  public listSolutionVersions(input: shapes.PersonalizeListSolutionVersionsRequest): PersonalizeListSolutionVersions {
    return new PersonalizeListSolutionVersions(this, 'ListSolutionVersions', this.__resources, input);
  }

  public listSolutions(input: shapes.PersonalizeListSolutionsRequest): PersonalizeListSolutions {
    return new PersonalizeListSolutions(this, 'ListSolutions', this.__resources, input);
  }

  public updateCampaign(input: shapes.PersonalizeUpdateCampaignRequest): PersonalizeUpdateCampaign {
    return new PersonalizeUpdateCampaign(this, 'UpdateCampaign', this.__resources, input);
  }

}

export class PersonalizeCreateBatchInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateBatchInferenceJobRequest) {
    super(scope, id);
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
          jobName: this.input.jobName,
          solutionVersionArn: this.input.solutionVersionArn,
          filterArn: this.input.filterArn,
          numResults: this.input.numResults,
          jobInput: {
            s3DataSource: {
              path: this.input.jobInput.s3DataSource.path,
              kmsKeyArn: this.input.jobInput.s3DataSource.kmsKeyArn,
            },
          },
          jobOutput: {
            s3DataDestination: {
              path: this.input.jobOutput.s3DataDestination.path,
              kmsKeyArn: this.input.jobOutput.s3DataDestination.kmsKeyArn,
            },
          },
          roleArn: this.input.roleArn,
          batchInferenceJobConfig: {
            itemExplorationConfig: this.input.batchInferenceJobConfig?.itemExplorationConfig,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBatchInferenceJob.batchInferenceJobArn', props);
    return resource.getResponseField('batchInferenceJobArn') as unknown as string;
  }

}

export class PersonalizeCreateCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateCampaignRequest) {
    super(scope, id);
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
          name: this.input.name,
          solutionVersionArn: this.input.solutionVersionArn,
          minProvisionedTPS: this.input.minProvisionedTPS,
          campaignConfig: {
            itemExplorationConfig: this.input.campaignConfig?.itemExplorationConfig,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCampaign.campaignArn', props);
    return resource.getResponseField('campaignArn') as unknown as string;
  }

}

export class PersonalizeCreateDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateDatasetRequest) {
    super(scope, id);
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
          name: this.input.name,
          schemaArn: this.input.schemaArn,
          datasetGroupArn: this.input.datasetGroupArn,
          datasetType: this.input.datasetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataset.datasetArn', props);
    return resource.getResponseField('datasetArn') as unknown as string;
  }

}

export class PersonalizeCreateDatasetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateDatasetGroupRequest) {
    super(scope, id);
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
          name: this.input.name,
          roleArn: this.input.roleArn,
          kmsKeyArn: this.input.kmsKeyArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatasetGroup.datasetGroupArn', props);
    return resource.getResponseField('datasetGroupArn') as unknown as string;
  }

}

export class PersonalizeCreateDatasetImportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateDatasetImportJobRequest) {
    super(scope, id);
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
          jobName: this.input.jobName,
          datasetArn: this.input.datasetArn,
          dataSource: {
            dataLocation: this.input.dataSource.dataLocation,
          },
          roleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatasetImportJob.datasetImportJobArn', props);
    return resource.getResponseField('datasetImportJobArn') as unknown as string;
  }

}

export class PersonalizeCreateEventTracker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateEventTrackerRequest) {
    super(scope, id);
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
          name: this.input.name,
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventTracker.eventTrackerArn', props);
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
          name: this.input.name,
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEventTracker.trackingId', props);
    return resource.getResponseField('trackingId') as unknown as string;
  }

}

export class PersonalizeCreateFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateFilterRequest) {
    super(scope, id);
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
          name: this.input.name,
          datasetGroupArn: this.input.datasetGroupArn,
          filterExpression: this.input.filterExpression,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFilter.filterArn', props);
    return resource.getResponseField('filterArn') as unknown as string;
  }

}

export class PersonalizeCreateSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateSchemaRequest) {
    super(scope, id);
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
          name: this.input.name,
          schema: this.input.schema,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.schemaArn', props);
    return resource.getResponseField('schemaArn') as unknown as string;
  }

}

export class PersonalizeCreateSolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateSolutionRequest) {
    super(scope, id);
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
          name: this.input.name,
          performHPO: this.input.performHPO,
          performAutoML: this.input.performAutoML,
          recipeArn: this.input.recipeArn,
          datasetGroupArn: this.input.datasetGroupArn,
          eventType: this.input.eventType,
          solutionConfig: {
            eventValueThreshold: this.input.solutionConfig?.eventValueThreshold,
            hpoConfig: {
              hpoObjective: {
                type: this.input.solutionConfig?.hpoConfig?.hpoObjective?.type,
                metricName: this.input.solutionConfig?.hpoConfig?.hpoObjective?.metricName,
                metricRegex: this.input.solutionConfig?.hpoConfig?.hpoObjective?.metricRegex,
              },
              hpoResourceConfig: {
                maxNumberOfTrainingJobs: this.input.solutionConfig?.hpoConfig?.hpoResourceConfig?.maxNumberOfTrainingJobs,
                maxParallelTrainingJobs: this.input.solutionConfig?.hpoConfig?.hpoResourceConfig?.maxParallelTrainingJobs,
              },
              algorithmHyperParameterRanges: {
                integerHyperParameterRanges: this.input.solutionConfig?.hpoConfig?.algorithmHyperParameterRanges?.integerHyperParameterRanges,
                continuousHyperParameterRanges: this.input.solutionConfig?.hpoConfig?.algorithmHyperParameterRanges?.continuousHyperParameterRanges,
                categoricalHyperParameterRanges: this.input.solutionConfig?.hpoConfig?.algorithmHyperParameterRanges?.categoricalHyperParameterRanges,
              },
            },
            algorithmHyperParameters: this.input.solutionConfig?.algorithmHyperParameters,
            featureTransformationParameters: this.input.solutionConfig?.featureTransformationParameters,
            autoMLConfig: {
              metricName: this.input.solutionConfig?.autoMLConfig?.metricName,
              recipeList: this.input.solutionConfig?.autoMLConfig?.recipeList,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSolution.solutionArn', props);
    return resource.getResponseField('solutionArn') as unknown as string;
  }

}

export class PersonalizeCreateSolutionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeCreateSolutionVersionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
          trainingMode: this.input.trainingMode,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSolutionVersion.solutionVersionArn', props);
    return resource.getResponseField('solutionVersionArn') as unknown as string;
  }

}

export class PersonalizeDescribeAlgorithm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeAlgorithmRequest) {
    super(scope, id);
  }

  public get algorithm(): PersonalizeDescribeAlgorithmAlgorithm {
    return new PersonalizeDescribeAlgorithmAlgorithm(this, 'Algorithm', this.__resources, this.input);
  }

}

export class PersonalizeDescribeAlgorithmAlgorithm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeAlgorithmRequest) {
    super(scope, id);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.name', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.algorithmArn', props);
    return resource.getResponseField('algorithm.algorithmArn') as unknown as string;
  }

  public get algorithmImage(): PersonalizeDescribeAlgorithmAlgorithmAlgorithmImage {
    return new PersonalizeDescribeAlgorithmAlgorithmAlgorithmImage(this, 'AlgorithmImage', this.__resources, this.input);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.defaultHyperParameters', props);
    return resource.getResponseField('algorithm.defaultHyperParameters') as unknown as Record<string, string>;
  }

  public get defaultHyperParameterRanges(): PersonalizeDescribeAlgorithmAlgorithmDefaultHyperParameterRanges {
    return new PersonalizeDescribeAlgorithmAlgorithmDefaultHyperParameterRanges(this, 'DefaultHyperParameterRanges', this.__resources, this.input);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.defaultResourceConfig', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.trainingInputMode', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.roleArn', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.creationDateTime', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.lastUpdatedDateTime', props);
    return resource.getResponseField('algorithm.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeAlgorithmAlgorithmAlgorithmImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeAlgorithmRequest) {
    super(scope, id);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.algorithmImage.name', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.algorithmImage.dockerURI', props);
    return resource.getResponseField('algorithm.algorithmImage.dockerURI') as unknown as string;
  }

}

export class PersonalizeDescribeAlgorithmAlgorithmDefaultHyperParameterRanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeAlgorithmRequest) {
    super(scope, id);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.defaultHyperParameterRanges.integerHyperParameterRanges', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.defaultHyperParameterRanges.continuousHyperParameterRanges', props);
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
          algorithmArn: this.input.algorithmArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.algorithm.defaultHyperParameterRanges.categoricalHyperParameterRanges', props);
    return resource.getResponseField('algorithm.defaultHyperParameterRanges.categoricalHyperParameterRanges') as unknown as shapes.PersonalizeDefaultCategoricalHyperParameterRange[];
  }

}

export class PersonalizeDescribeBatchInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
    super(scope, id);
  }

  public get batchInferenceJob(): PersonalizeDescribeBatchInferenceJobBatchInferenceJob {
    return new PersonalizeDescribeBatchInferenceJobBatchInferenceJob(this, 'BatchInferenceJob', this.__resources, this.input);
  }

}

export class PersonalizeDescribeBatchInferenceJobBatchInferenceJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
    super(scope, id);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.jobName', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.batchInferenceJobArn', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.filterArn', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.failureReason', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.solutionVersionArn', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.numResults', props);
    return resource.getResponseField('batchInferenceJob.numResults') as unknown as number;
  }

  public get jobInput(): PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobInput {
    return new PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobInput(this, 'JobInput', this.__resources, this.input);
  }

  public get jobOutput(): PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobOutput {
    return new PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobOutput(this, 'JobOutput', this.__resources, this.input);
  }

  public get batchInferenceJobConfig(): PersonalizeDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig {
    return new PersonalizeDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig(this, 'BatchInferenceJobConfig', this.__resources, this.input);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.roleArn', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.status', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.creationDateTime', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.lastUpdatedDateTime', props);
    return resource.getResponseField('batchInferenceJob.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
    super(scope, id);
  }

  public get s3DataSource(): PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource {
    return new PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource(this, 'S3DataSource', this.__resources, this.input);
  }

}

export class PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobInputS3DataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
    super(scope, id);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.jobInput.s3DataSource.path', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.jobInput.s3DataSource.kmsKeyArn', props);
    return resource.getResponseField('batchInferenceJob.jobInput.s3DataSource.kmsKeyArn') as unknown as string;
  }

}

export class PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
    super(scope, id);
  }

  public get s3DataDestination(): PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination {
    return new PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination(this, 'S3DataDestination', this.__resources, this.input);
  }

}

export class PersonalizeDescribeBatchInferenceJobBatchInferenceJobJobOutputS3DataDestination extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
    super(scope, id);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.jobOutput.s3DataDestination.path', props);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.jobOutput.s3DataDestination.kmsKeyArn', props);
    return resource.getResponseField('batchInferenceJob.jobOutput.s3DataDestination.kmsKeyArn') as unknown as string;
  }

}

export class PersonalizeDescribeBatchInferenceJobBatchInferenceJobBatchInferenceJobConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeBatchInferenceJobRequest) {
    super(scope, id);
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
          batchInferenceJobArn: this.input.batchInferenceJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchInferenceJob.batchInferenceJob.batchInferenceJobConfig.itemExplorationConfig', props);
    return resource.getResponseField('batchInferenceJob.batchInferenceJobConfig.itemExplorationConfig') as unknown as Record<string, string>;
  }

}

export class PersonalizeDescribeCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeCampaignRequest) {
    super(scope, id);
  }

  public get campaign(): PersonalizeDescribeCampaignCampaign {
    return new PersonalizeDescribeCampaignCampaign(this, 'Campaign', this.__resources, this.input);
  }

}

export class PersonalizeDescribeCampaignCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeCampaignRequest) {
    super(scope, id);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.name', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.campaignArn', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.solutionVersionArn', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.minProvisionedTPS', props);
    return resource.getResponseField('campaign.minProvisionedTPS') as unknown as number;
  }

  public get campaignConfig(): PersonalizeDescribeCampaignCampaignCampaignConfig {
    return new PersonalizeDescribeCampaignCampaignCampaignConfig(this, 'CampaignConfig', this.__resources, this.input);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.status', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.failureReason', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.creationDateTime', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.lastUpdatedDateTime', props);
    return resource.getResponseField('campaign.lastUpdatedDateTime') as unknown as string;
  }

  public get latestCampaignUpdate(): PersonalizeDescribeCampaignCampaignLatestCampaignUpdate {
    return new PersonalizeDescribeCampaignCampaignLatestCampaignUpdate(this, 'LatestCampaignUpdate', this.__resources, this.input);
  }

}

export class PersonalizeDescribeCampaignCampaignCampaignConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeCampaignRequest) {
    super(scope, id);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.campaignConfig.itemExplorationConfig', props);
    return resource.getResponseField('campaign.campaignConfig.itemExplorationConfig') as unknown as Record<string, string>;
  }

}

export class PersonalizeDescribeCampaignCampaignLatestCampaignUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeCampaignRequest) {
    super(scope, id);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.latestCampaignUpdate.solutionVersionArn', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.latestCampaignUpdate.minProvisionedTPS', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.minProvisionedTPS') as unknown as number;
  }

  public get campaignConfig(): PersonalizeDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig {
    return new PersonalizeDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig(this, 'CampaignConfig', this.__resources, this.input);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.latestCampaignUpdate.status', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.latestCampaignUpdate.failureReason', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.latestCampaignUpdate.creationDateTime', props);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.latestCampaignUpdate.lastUpdatedDateTime', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeCampaignCampaignLatestCampaignUpdateCampaignConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeCampaignRequest) {
    super(scope, id);
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
          campaignArn: this.input.campaignArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCampaign.campaign.latestCampaignUpdate.campaignConfig.itemExplorationConfig', props);
    return resource.getResponseField('campaign.latestCampaignUpdate.campaignConfig.itemExplorationConfig') as unknown as Record<string, string>;
  }

}

export class PersonalizeDescribeDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeDatasetRequest) {
    super(scope, id);
  }

  public get dataset(): PersonalizeDescribeDatasetDataset {
    return new PersonalizeDescribeDatasetDataset(this, 'Dataset', this.__resources, this.input);
  }

}

export class PersonalizeDescribeDatasetDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeDatasetRequest) {
    super(scope, id);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.name', props);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.datasetArn', props);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.datasetGroupArn', props);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.datasetType', props);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.schemaArn', props);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.status', props);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.creationDateTime', props);
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
          datasetArn: this.input.datasetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.lastUpdatedDateTime', props);
    return resource.getResponseField('dataset.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeDatasetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeDatasetGroupRequest) {
    super(scope, id);
  }

  public get datasetGroup(): PersonalizeDescribeDatasetGroupDatasetGroup {
    return new PersonalizeDescribeDatasetGroupDatasetGroup(this, 'DatasetGroup', this.__resources, this.input);
  }

}

export class PersonalizeDescribeDatasetGroupDatasetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeDatasetGroupRequest) {
    super(scope, id);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.name', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.datasetGroupArn', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.status', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.roleArn', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.kmsKeyArn', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.creationDateTime', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.lastUpdatedDateTime', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetGroup.datasetGroup.failureReason', props);
    return resource.getResponseField('datasetGroup.failureReason') as unknown as string;
  }

}

export class PersonalizeDescribeDatasetImportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeDatasetImportJobRequest) {
    super(scope, id);
  }

  public get datasetImportJob(): PersonalizeDescribeDatasetImportJobDatasetImportJob {
    return new PersonalizeDescribeDatasetImportJobDatasetImportJob(this, 'DatasetImportJob', this.__resources, this.input);
  }

}

export class PersonalizeDescribeDatasetImportJobDatasetImportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeDatasetImportJobRequest) {
    super(scope, id);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.jobName', props);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.datasetImportJobArn', props);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.datasetArn', props);
    return resource.getResponseField('datasetImportJob.datasetArn') as unknown as string;
  }

  public get dataSource(): PersonalizeDescribeDatasetImportJobDatasetImportJobDataSource {
    return new PersonalizeDescribeDatasetImportJobDatasetImportJobDataSource(this, 'DataSource', this.__resources, this.input);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.roleArn', props);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.status', props);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.creationDateTime', props);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.lastUpdatedDateTime', props);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.failureReason', props);
    return resource.getResponseField('datasetImportJob.failureReason') as unknown as string;
  }

}

export class PersonalizeDescribeDatasetImportJobDatasetImportJobDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeDatasetImportJobRequest) {
    super(scope, id);
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
          datasetImportJobArn: this.input.datasetImportJobArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatasetImportJob.datasetImportJob.dataSource.dataLocation', props);
    return resource.getResponseField('datasetImportJob.dataSource.dataLocation') as unknown as string;
  }

}

export class PersonalizeDescribeEventTracker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeEventTrackerRequest) {
    super(scope, id);
  }

  public get eventTracker(): PersonalizeDescribeEventTrackerEventTracker {
    return new PersonalizeDescribeEventTrackerEventTracker(this, 'EventTracker', this.__resources, this.input);
  }

}

export class PersonalizeDescribeEventTrackerEventTracker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeEventTrackerRequest) {
    super(scope, id);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.name', props);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.eventTrackerArn', props);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.accountId', props);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.trackingId', props);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.datasetGroupArn', props);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.status', props);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.creationDateTime', props);
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
          eventTrackerArn: this.input.eventTrackerArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventTracker.eventTracker.lastUpdatedDateTime', props);
    return resource.getResponseField('eventTracker.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeFeatureTransformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeFeatureTransformationRequest) {
    super(scope, id);
  }

  public get featureTransformation(): PersonalizeDescribeFeatureTransformationFeatureTransformation {
    return new PersonalizeDescribeFeatureTransformationFeatureTransformation(this, 'FeatureTransformation', this.__resources, this.input);
  }

}

export class PersonalizeDescribeFeatureTransformationFeatureTransformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeFeatureTransformationRequest) {
    super(scope, id);
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
          featureTransformationArn: this.input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFeatureTransformation.featureTransformation.name', props);
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
          featureTransformationArn: this.input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFeatureTransformation.featureTransformation.featureTransformationArn', props);
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
          featureTransformationArn: this.input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFeatureTransformation.featureTransformation.defaultParameters', props);
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
          featureTransformationArn: this.input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFeatureTransformation.featureTransformation.creationDateTime', props);
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
          featureTransformationArn: this.input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFeatureTransformation.featureTransformation.lastUpdatedDateTime', props);
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
          featureTransformationArn: this.input.featureTransformationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFeatureTransformation.featureTransformation.status', props);
    return resource.getResponseField('featureTransformation.status') as unknown as string;
  }

}

export class PersonalizeDescribeFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeFilterRequest) {
    super(scope, id);
  }

  public get filter(): PersonalizeDescribeFilterFilter {
    return new PersonalizeDescribeFilterFilter(this, 'Filter', this.__resources, this.input);
  }

}

export class PersonalizeDescribeFilterFilter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeFilterRequest) {
    super(scope, id);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.name', props);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.filterArn', props);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.creationDateTime', props);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.lastUpdatedDateTime', props);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.datasetGroupArn', props);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.failureReason', props);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.filterExpression', props);
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
          filterArn: this.input.filterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFilter.filter.status', props);
    return resource.getResponseField('filter.status') as unknown as string;
  }

}

export class PersonalizeDescribeRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeRecipeRequest) {
    super(scope, id);
  }

  public get recipe(): PersonalizeDescribeRecipeRecipe {
    return new PersonalizeDescribeRecipeRecipe(this, 'Recipe', this.__resources, this.input);
  }

}

export class PersonalizeDescribeRecipeRecipe extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeRecipeRequest) {
    super(scope, id);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.name', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.recipeArn', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.algorithmArn', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.featureTransformationArn', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.status', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.description', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.creationDateTime', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.recipeType', props);
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
          recipeArn: this.input.recipeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecipe.recipe.lastUpdatedDateTime', props);
    return resource.getResponseField('recipe.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSchemaRequest) {
    super(scope, id);
  }

  public get schema(): PersonalizeDescribeSchemaSchema {
    return new PersonalizeDescribeSchemaSchema(this, 'Schema', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSchemaSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSchemaRequest) {
    super(scope, id);
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
          schemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.schema.name', props);
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
          schemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.schema.schemaArn', props);
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
          schemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.schema.schema', props);
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
          schemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.schema.creationDateTime', props);
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
          schemaArn: this.input.schemaArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSchema.schema.lastUpdatedDateTime', props);
    return resource.getResponseField('schema.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeSolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
  }

  public get solution(): PersonalizeDescribeSolutionSolution {
    return new PersonalizeDescribeSolutionSolution(this, 'Solution', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSolutionSolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.name', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionArn', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.performHPO', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.performAutoML', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.recipeArn', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.datasetGroupArn', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.eventType', props);
    return resource.getResponseField('solution.eventType') as unknown as string;
  }

  public get solutionConfig(): PersonalizeDescribeSolutionSolutionSolutionConfig {
    return new PersonalizeDescribeSolutionSolutionSolutionConfig(this, 'SolutionConfig', this.__resources, this.input);
  }

  public get autoMlResult(): PersonalizeDescribeSolutionSolutionAutoMlResult {
    return new PersonalizeDescribeSolutionSolutionAutoMlResult(this, 'AutoMlResult', this.__resources, this.input);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.status', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.creationDateTime', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.lastUpdatedDateTime', props);
    return resource.getResponseField('solution.lastUpdatedDateTime') as unknown as string;
  }

  public get latestSolutionVersion(): PersonalizeDescribeSolutionSolutionLatestSolutionVersion {
    return new PersonalizeDescribeSolutionSolutionLatestSolutionVersion(this, 'LatestSolutionVersion', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSolutionSolutionSolutionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.eventValueThreshold', props);
    return resource.getResponseField('solution.solutionConfig.eventValueThreshold') as unknown as string;
  }

  public get hpoConfig(): PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfig {
    return new PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfig(this, 'HpoConfig', this.__resources, this.input);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.algorithmHyperParameters', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.featureTransformationParameters', props);
    return resource.getResponseField('solution.solutionConfig.featureTransformationParameters') as unknown as Record<string, string>;
  }

  public get autoMlConfig(): PersonalizeDescribeSolutionSolutionSolutionConfigAutoMlConfig {
    return new PersonalizeDescribeSolutionSolutionSolutionConfigAutoMlConfig(this, 'AutoMlConfig', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
  }

  public get hpoObjective(): PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective {
    return new PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective(this, 'HpoObjective', this.__resources, this.input);
  }

  public get hpoResourceConfig(): PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig {
    return new PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig(this, 'HpoResourceConfig', this.__resources, this.input);
  }

  public get algorithmHyperParameterRanges(): PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {
    return new PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges(this, 'AlgorithmHyperParameterRanges', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigHpoObjective extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.type', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.metricName', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoObjective.metricRegex', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.hpoObjective.metricRegex') as unknown as string;
  }

}

export class PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigHpoResourceConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs') as unknown as string;
  }

}

export class PersonalizeDescribeSolutionSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges', props);
    return resource.getResponseField('solution.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges') as unknown as shapes.PersonalizeCategoricalHyperParameterRange[];
  }

}

export class PersonalizeDescribeSolutionSolutionSolutionConfigAutoMlConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.autoMLConfig.metricName', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.solutionConfig.autoMLConfig.recipeList', props);
    return resource.getResponseField('solution.solutionConfig.autoMLConfig.recipeList') as unknown as string[];
  }

}

export class PersonalizeDescribeSolutionSolutionAutoMlResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.autoMLResult.bestRecipeArn', props);
    return resource.getResponseField('solution.autoMLResult.bestRecipeArn') as unknown as string;
  }

}

export class PersonalizeDescribeSolutionSolutionLatestSolutionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.latestSolutionVersion.solutionVersionArn', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.latestSolutionVersion.status', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.latestSolutionVersion.creationDateTime', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.latestSolutionVersion.lastUpdatedDateTime', props);
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
          solutionArn: this.input.solutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolution.solution.latestSolutionVersion.failureReason', props);
    return resource.getResponseField('solution.latestSolutionVersion.failureReason') as unknown as string;
  }

}

export class PersonalizeDescribeSolutionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
  }

  public get solutionVersion(): PersonalizeDescribeSolutionVersionSolutionVersion {
    return new PersonalizeDescribeSolutionVersionSolutionVersion(this, 'SolutionVersion', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionVersionArn', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionArn', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.performHPO', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.performAutoML', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.recipeArn', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.eventType', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.datasetGroupArn', props);
    return resource.getResponseField('solutionVersion.datasetGroupArn') as unknown as string;
  }

  public get solutionConfig(): PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfig {
    return new PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfig(this, 'SolutionConfig', this.__resources, this.input);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.trainingHours', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.trainingMode', props);
    return resource.getResponseField('solutionVersion.trainingMode') as unknown as string;
  }

  public get tunedHpoParams(): PersonalizeDescribeSolutionVersionSolutionVersionTunedHpoParams {
    return new PersonalizeDescribeSolutionVersionSolutionVersionTunedHpoParams(this, 'TunedHpoParams', this.__resources, this.input);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.status', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.failureReason', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.creationDateTime', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.lastUpdatedDateTime', props);
    return resource.getResponseField('solutionVersion.lastUpdatedDateTime') as unknown as string;
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.eventValueThreshold', props);
    return resource.getResponseField('solutionVersion.solutionConfig.eventValueThreshold') as unknown as string;
  }

  public get hpoConfig(): PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig {
    return new PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig(this, 'HpoConfig', this.__resources, this.input);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.algorithmHyperParameters', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.featureTransformationParameters', props);
    return resource.getResponseField('solutionVersion.solutionConfig.featureTransformationParameters') as unknown as Record<string, string>;
  }

  public get autoMlConfig(): PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig {
    return new PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig(this, 'AutoMlConfig', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
  }

  public get hpoObjective(): PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective {
    return new PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective(this, 'HpoObjective', this.__resources, this.input);
  }

  public get hpoResourceConfig(): PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig {
    return new PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig(this, 'HpoResourceConfig', this.__resources, this.input);
  }

  public get algorithmHyperParameterRanges(): PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges {
    return new PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges(this, 'AlgorithmHyperParameterRanges', this.__resources, this.input);
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoObjective extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.type', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricName', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricRegex', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.hpoObjective.metricRegex') as unknown as string;
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigHpoResourceConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxNumberOfTrainingJobs', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.hpoResourceConfig.maxParallelTrainingJobs') as unknown as string;
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigHpoConfigAlgorithmHyperParameterRanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.integerHyperParameterRanges', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.continuousHyperParameterRanges', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges', props);
    return resource.getResponseField('solutionVersion.solutionConfig.hpoConfig.algorithmHyperParameterRanges.categoricalHyperParameterRanges') as unknown as shapes.PersonalizeCategoricalHyperParameterRange[];
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersionSolutionConfigAutoMlConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.autoMLConfig.metricName', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.solutionConfig.autoMLConfig.recipeList', props);
    return resource.getResponseField('solutionVersion.solutionConfig.autoMLConfig.recipeList') as unknown as string[];
  }

}

export class PersonalizeDescribeSolutionVersionSolutionVersionTunedHpoParams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeDescribeSolutionVersionRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSolutionVersion.solutionVersion.tunedHPOParams.algorithmHyperParameters', props);
    return resource.getResponseField('solutionVersion.tunedHPOParams.algorithmHyperParameters') as unknown as Record<string, string>;
  }

}

export class PersonalizeFetchSolutionMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeGetSolutionMetricsRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSolutionMetrics.solutionVersionArn', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSolutionMetrics.metrics', props);
    return resource.getResponseField('metrics') as unknown as Record<string, number>;
  }

}

export class PersonalizeListBatchInferenceJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListBatchInferenceJobsRequest) {
    super(scope, id);
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
          solutionVersionArn: this.input.solutionVersionArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBatchInferenceJobs.batchInferenceJobs', props);
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
          solutionVersionArn: this.input.solutionVersionArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBatchInferenceJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListCampaigns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListCampaignsRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCampaigns.campaigns', props);
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
          solutionArn: this.input.solutionArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCampaigns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListDatasetGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListDatasetGroupsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasetGroups.datasetGroups', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasetGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListDatasetImportJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListDatasetImportJobsRequest) {
    super(scope, id);
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
          datasetArn: this.input.datasetArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasetImportJobs.datasetImportJobs', props);
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
          datasetArn: this.input.datasetArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasetImportJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListDatasets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListDatasetsRequest) {
    super(scope, id);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.datasets', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListEventTrackers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListEventTrackersRequest) {
    super(scope, id);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventTrackers.eventTrackers', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEventTrackers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListFilters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListFiltersRequest) {
    super(scope, id);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFilters.Filters', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFilters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListRecipes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListRecipesRequest) {
    super(scope, id);
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
          recipeProvider: this.input.recipeProvider,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecipes.recipes', props);
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
          recipeProvider: this.input.recipeProvider,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecipes.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListSchemas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListSchemasRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.schemas', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListSolutionVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListSolutionVersionsRequest) {
    super(scope, id);
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
          solutionArn: this.input.solutionArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSolutionVersions.solutionVersions', props);
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
          solutionArn: this.input.solutionArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSolutionVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeListSolutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeListSolutionsRequest) {
    super(scope, id);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSolutions.solutions', props);
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
          datasetGroupArn: this.input.datasetGroupArn,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSolutions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class PersonalizeUpdateCampaign extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PersonalizeUpdateCampaignRequest) {
    super(scope, id);
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
          campaignArn: this.input.campaignArn,
          solutionVersionArn: this.input.solutionVersionArn,
          minProvisionedTPS: this.input.minProvisionedTPS,
          campaignConfig: {
            itemExplorationConfig: this.input.campaignConfig?.itemExplorationConfig,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCampaign.campaignArn', props);
    return resource.getResponseField('campaignArn') as unknown as string;
  }

}

