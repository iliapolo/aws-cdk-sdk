import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SageMakerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTags(input: shapes.SageMakerAddTagsInput): SageMakerResponsesAddTags {
    return new SageMakerResponsesAddTags(this, this.__resources, input);
  }

  public associateTrialComponent(input: shapes.SageMakerAssociateTrialComponentRequest): SageMakerResponsesAssociateTrialComponent {
    return new SageMakerResponsesAssociateTrialComponent(this, this.__resources, input);
  }

  public createAlgorithm(input: shapes.SageMakerCreateAlgorithmInput): SageMakerResponsesCreateAlgorithm {
    return new SageMakerResponsesCreateAlgorithm(this, this.__resources, input);
  }

  public createApp(input: shapes.SageMakerCreateAppRequest): SageMakerResponsesCreateApp {
    return new SageMakerResponsesCreateApp(this, this.__resources, input);
  }

  public createAppImageConfig(input: shapes.SageMakerCreateAppImageConfigRequest): SageMakerResponsesCreateAppImageConfig {
    return new SageMakerResponsesCreateAppImageConfig(this, this.__resources, input);
  }

  public createAutoMlJob(input: shapes.SageMakerCreateAutoMlJobRequest): SageMakerResponsesCreateAutoMlJob {
    return new SageMakerResponsesCreateAutoMlJob(this, this.__resources, input);
  }

  public createCodeRepository(input: shapes.SageMakerCreateCodeRepositoryInput): SageMakerResponsesCreateCodeRepository {
    return new SageMakerResponsesCreateCodeRepository(this, this.__resources, input);
  }

  public createCompilationJob(input: shapes.SageMakerCreateCompilationJobRequest): SageMakerResponsesCreateCompilationJob {
    return new SageMakerResponsesCreateCompilationJob(this, this.__resources, input);
  }

  public createDomain(input: shapes.SageMakerCreateDomainRequest): SageMakerResponsesCreateDomain {
    return new SageMakerResponsesCreateDomain(this, this.__resources, input);
  }

  public createEndpoint(input: shapes.SageMakerCreateEndpointInput): SageMakerResponsesCreateEndpoint {
    return new SageMakerResponsesCreateEndpoint(this, this.__resources, input);
  }

  public createEndpointConfig(input: shapes.SageMakerCreateEndpointConfigInput): SageMakerResponsesCreateEndpointConfig {
    return new SageMakerResponsesCreateEndpointConfig(this, this.__resources, input);
  }

  public createExperiment(input: shapes.SageMakerCreateExperimentRequest): SageMakerResponsesCreateExperiment {
    return new SageMakerResponsesCreateExperiment(this, this.__resources, input);
  }

  public createFlowDefinition(input: shapes.SageMakerCreateFlowDefinitionRequest): SageMakerResponsesCreateFlowDefinition {
    return new SageMakerResponsesCreateFlowDefinition(this, this.__resources, input);
  }

  public createHumanTaskUi(input: shapes.SageMakerCreateHumanTaskUiRequest): SageMakerResponsesCreateHumanTaskUi {
    return new SageMakerResponsesCreateHumanTaskUi(this, this.__resources, input);
  }

  public createHyperParameterTuningJob(input: shapes.SageMakerCreateHyperParameterTuningJobRequest): SageMakerResponsesCreateHyperParameterTuningJob {
    return new SageMakerResponsesCreateHyperParameterTuningJob(this, this.__resources, input);
  }

  public createImage(input: shapes.SageMakerCreateImageRequest): SageMakerResponsesCreateImage {
    return new SageMakerResponsesCreateImage(this, this.__resources, input);
  }

  public createImageVersion(input: shapes.SageMakerCreateImageVersionRequest): SageMakerResponsesCreateImageVersion {
    return new SageMakerResponsesCreateImageVersion(this, this.__resources, input);
  }

  public createLabelingJob(input: shapes.SageMakerCreateLabelingJobRequest): SageMakerResponsesCreateLabelingJob {
    return new SageMakerResponsesCreateLabelingJob(this, this.__resources, input);
  }

  public createModel(input: shapes.SageMakerCreateModelInput): SageMakerResponsesCreateModel {
    return new SageMakerResponsesCreateModel(this, this.__resources, input);
  }

  public createModelPackage(input: shapes.SageMakerCreateModelPackageInput): SageMakerResponsesCreateModelPackage {
    return new SageMakerResponsesCreateModelPackage(this, this.__resources, input);
  }

  public createMonitoringSchedule(input: shapes.SageMakerCreateMonitoringScheduleRequest): SageMakerResponsesCreateMonitoringSchedule {
    return new SageMakerResponsesCreateMonitoringSchedule(this, this.__resources, input);
  }

  public createNotebookInstance(input: shapes.SageMakerCreateNotebookInstanceInput): SageMakerResponsesCreateNotebookInstance {
    return new SageMakerResponsesCreateNotebookInstance(this, this.__resources, input);
  }

  public createNotebookInstanceLifecycleConfig(input: shapes.SageMakerCreateNotebookInstanceLifecycleConfigInput): SageMakerResponsesCreateNotebookInstanceLifecycleConfig {
    return new SageMakerResponsesCreateNotebookInstanceLifecycleConfig(this, this.__resources, input);
  }

  public createPresignedDomainUrl(input: shapes.SageMakerCreatePresignedDomainUrlRequest): SageMakerResponsesCreatePresignedDomainUrl {
    return new SageMakerResponsesCreatePresignedDomainUrl(this, this.__resources, input);
  }

  public createPresignedNotebookInstanceUrl(input: shapes.SageMakerCreatePresignedNotebookInstanceUrlInput): SageMakerResponsesCreatePresignedNotebookInstanceUrl {
    return new SageMakerResponsesCreatePresignedNotebookInstanceUrl(this, this.__resources, input);
  }

  public createProcessingJob(input: shapes.SageMakerCreateProcessingJobRequest): SageMakerResponsesCreateProcessingJob {
    return new SageMakerResponsesCreateProcessingJob(this, this.__resources, input);
  }

  public createTrainingJob(input: shapes.SageMakerCreateTrainingJobRequest): SageMakerResponsesCreateTrainingJob {
    return new SageMakerResponsesCreateTrainingJob(this, this.__resources, input);
  }

  public createTransformJob(input: shapes.SageMakerCreateTransformJobRequest): SageMakerResponsesCreateTransformJob {
    return new SageMakerResponsesCreateTransformJob(this, this.__resources, input);
  }

  public createTrial(input: shapes.SageMakerCreateTrialRequest): SageMakerResponsesCreateTrial {
    return new SageMakerResponsesCreateTrial(this, this.__resources, input);
  }

  public createTrialComponent(input: shapes.SageMakerCreateTrialComponentRequest): SageMakerResponsesCreateTrialComponent {
    return new SageMakerResponsesCreateTrialComponent(this, this.__resources, input);
  }

  public createUserProfile(input: shapes.SageMakerCreateUserProfileRequest): SageMakerResponsesCreateUserProfile {
    return new SageMakerResponsesCreateUserProfile(this, this.__resources, input);
  }

  public createWorkforce(input: shapes.SageMakerCreateWorkforceRequest): SageMakerResponsesCreateWorkforce {
    return new SageMakerResponsesCreateWorkforce(this, this.__resources, input);
  }

  public createWorkteam(input: shapes.SageMakerCreateWorkteamRequest): SageMakerResponsesCreateWorkteam {
    return new SageMakerResponsesCreateWorkteam(this, this.__resources, input);
  }

  public deleteAlgorithm(input: shapes.SageMakerDeleteAlgorithmInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteAlgorithm'),
        parameters: {
          AlgorithmName: input.algorithmName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAlgorithm', props);
  }

  public deleteApp(input: shapes.SageMakerDeleteAppRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteApp'),
        parameters: {
          DomainId: input.domainId,
          UserProfileName: input.userProfileName,
          AppType: input.appType,
          AppName: input.appName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApp', props);
  }

  public deleteAppImageConfig(input: shapes.SageMakerDeleteAppImageConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteAppImageConfig'),
        parameters: {
          AppImageConfigName: input.appImageConfigName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppImageConfig', props);
  }

  public deleteCodeRepository(input: shapes.SageMakerDeleteCodeRepositoryInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteCodeRepository'),
        parameters: {
          CodeRepositoryName: input.codeRepositoryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCodeRepository', props);
  }

  public deleteDomain(input: shapes.SageMakerDeleteDomainRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteDomain'),
        parameters: {
          DomainId: input.domainId,
          RetentionPolicy: {
            HomeEfsFileSystem: input.retentionPolicy?.homeEfsFileSystem,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDomain', props);
  }

  public deleteEndpoint(input: shapes.SageMakerDeleteEndpointInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteEndpoint'),
        parameters: {
          EndpointName: input.endpointName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEndpoint', props);
  }

  public deleteEndpointConfig(input: shapes.SageMakerDeleteEndpointConfigInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteEndpointConfig'),
        parameters: {
          EndpointConfigName: input.endpointConfigName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEndpointConfig', props);
  }

  public deleteExperiment(input: shapes.SageMakerDeleteExperimentRequest): SageMakerResponsesDeleteExperiment {
    return new SageMakerResponsesDeleteExperiment(this, this.__resources, input);
  }

  public deleteFlowDefinition(input: shapes.SageMakerDeleteFlowDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteFlowDefinition'),
        parameters: {
          FlowDefinitionName: input.flowDefinitionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFlowDefinition', props);
  }

  public deleteHumanTaskUi(input: shapes.SageMakerDeleteHumanTaskUiRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteHumanTaskUi'),
        parameters: {
          HumanTaskUiName: input.humanTaskUiName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteHumanTaskUi', props);
  }

  public deleteImage(input: shapes.SageMakerDeleteImageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteImage'),
        parameters: {
          ImageName: input.imageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteImage', props);
  }

  public deleteImageVersion(input: shapes.SageMakerDeleteImageVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteImageVersion'),
        parameters: {
          ImageName: input.imageName,
          Version: input.version,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteImageVersion', props);
  }

  public deleteModel(input: shapes.SageMakerDeleteModelInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteModel'),
        parameters: {
          ModelName: input.modelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteModel', props);
  }

  public deleteModelPackage(input: shapes.SageMakerDeleteModelPackageInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteModelPackage'),
        parameters: {
          ModelPackageName: input.modelPackageName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteModelPackage', props);
  }

  public deleteMonitoringSchedule(input: shapes.SageMakerDeleteMonitoringScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteMonitoringSchedule'),
        parameters: {
          MonitoringScheduleName: input.monitoringScheduleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteMonitoringSchedule', props);
  }

  public deleteNotebookInstance(input: shapes.SageMakerDeleteNotebookInstanceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteNotebookInstance'),
        parameters: {
          NotebookInstanceName: input.notebookInstanceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNotebookInstance', props);
  }

  public deleteNotebookInstanceLifecycleConfig(input: shapes.SageMakerDeleteNotebookInstanceLifecycleConfigInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteNotebookInstanceLifecycleConfig'),
        parameters: {
          NotebookInstanceLifecycleConfigName: input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNotebookInstanceLifecycleConfig', props);
  }

  public deleteTags(input: shapes.SageMakerDeleteTagsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTags',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteTags'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTags', props);
  }

  public deleteTrial(input: shapes.SageMakerDeleteTrialRequest): SageMakerResponsesDeleteTrial {
    return new SageMakerResponsesDeleteTrial(this, this.__resources, input);
  }

  public deleteTrialComponent(input: shapes.SageMakerDeleteTrialComponentRequest): SageMakerResponsesDeleteTrialComponent {
    return new SageMakerResponsesDeleteTrialComponent(this, this.__resources, input);
  }

  public deleteUserProfile(input: shapes.SageMakerDeleteUserProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteUserProfile'),
        parameters: {
          DomainId: input.domainId,
          UserProfileName: input.userProfileName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUserProfile', props);
  }

  public deleteWorkforce(input: shapes.SageMakerDeleteWorkforceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteWorkforce'),
        parameters: {
          WorkforceName: input.workforceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorkforce', props);
  }

  public deleteWorkteam(input: shapes.SageMakerDeleteWorkteamRequest): SageMakerResponsesDeleteWorkteam {
    return new SageMakerResponsesDeleteWorkteam(this, this.__resources, input);
  }

  public describeAlgorithm(input: shapes.SageMakerDescribeAlgorithmInput): SageMakerResponsesDescribeAlgorithm {
    return new SageMakerResponsesDescribeAlgorithm(this, this.__resources, input);
  }

  public describeApp(input: shapes.SageMakerDescribeAppRequest): SageMakerResponsesDescribeApp {
    return new SageMakerResponsesDescribeApp(this, this.__resources, input);
  }

  public describeAppImageConfig(input: shapes.SageMakerDescribeAppImageConfigRequest): SageMakerResponsesDescribeAppImageConfig {
    return new SageMakerResponsesDescribeAppImageConfig(this, this.__resources, input);
  }

  public describeAutoMlJob(input: shapes.SageMakerDescribeAutoMlJobRequest): SageMakerResponsesDescribeAutoMlJob {
    return new SageMakerResponsesDescribeAutoMlJob(this, this.__resources, input);
  }

  public describeCodeRepository(input: shapes.SageMakerDescribeCodeRepositoryInput): SageMakerResponsesDescribeCodeRepository {
    return new SageMakerResponsesDescribeCodeRepository(this, this.__resources, input);
  }

  public describeCompilationJob(input: shapes.SageMakerDescribeCompilationJobRequest): SageMakerResponsesDescribeCompilationJob {
    return new SageMakerResponsesDescribeCompilationJob(this, this.__resources, input);
  }

  public describeDomain(input: shapes.SageMakerDescribeDomainRequest): SageMakerResponsesDescribeDomain {
    return new SageMakerResponsesDescribeDomain(this, this.__resources, input);
  }

  public describeEndpoint(input: shapes.SageMakerDescribeEndpointInput): SageMakerResponsesDescribeEndpoint {
    return new SageMakerResponsesDescribeEndpoint(this, this.__resources, input);
  }

  public describeEndpointConfig(input: shapes.SageMakerDescribeEndpointConfigInput): SageMakerResponsesDescribeEndpointConfig {
    return new SageMakerResponsesDescribeEndpointConfig(this, this.__resources, input);
  }

  public describeExperiment(input: shapes.SageMakerDescribeExperimentRequest): SageMakerResponsesDescribeExperiment {
    return new SageMakerResponsesDescribeExperiment(this, this.__resources, input);
  }

  public describeFlowDefinition(input: shapes.SageMakerDescribeFlowDefinitionRequest): SageMakerResponsesDescribeFlowDefinition {
    return new SageMakerResponsesDescribeFlowDefinition(this, this.__resources, input);
  }

  public describeHumanTaskUi(input: shapes.SageMakerDescribeHumanTaskUiRequest): SageMakerResponsesDescribeHumanTaskUi {
    return new SageMakerResponsesDescribeHumanTaskUi(this, this.__resources, input);
  }

  public describeHyperParameterTuningJob(input: shapes.SageMakerDescribeHyperParameterTuningJobRequest): SageMakerResponsesDescribeHyperParameterTuningJob {
    return new SageMakerResponsesDescribeHyperParameterTuningJob(this, this.__resources, input);
  }

  public describeImage(input: shapes.SageMakerDescribeImageRequest): SageMakerResponsesDescribeImage {
    return new SageMakerResponsesDescribeImage(this, this.__resources, input);
  }

  public describeImageVersion(input: shapes.SageMakerDescribeImageVersionRequest): SageMakerResponsesDescribeImageVersion {
    return new SageMakerResponsesDescribeImageVersion(this, this.__resources, input);
  }

  public describeLabelingJob(input: shapes.SageMakerDescribeLabelingJobRequest): SageMakerResponsesDescribeLabelingJob {
    return new SageMakerResponsesDescribeLabelingJob(this, this.__resources, input);
  }

  public describeModel(input: shapes.SageMakerDescribeModelInput): SageMakerResponsesDescribeModel {
    return new SageMakerResponsesDescribeModel(this, this.__resources, input);
  }

  public describeModelPackage(input: shapes.SageMakerDescribeModelPackageInput): SageMakerResponsesDescribeModelPackage {
    return new SageMakerResponsesDescribeModelPackage(this, this.__resources, input);
  }

  public describeMonitoringSchedule(input: shapes.SageMakerDescribeMonitoringScheduleRequest): SageMakerResponsesDescribeMonitoringSchedule {
    return new SageMakerResponsesDescribeMonitoringSchedule(this, this.__resources, input);
  }

  public describeNotebookInstance(input: shapes.SageMakerDescribeNotebookInstanceInput): SageMakerResponsesDescribeNotebookInstance {
    return new SageMakerResponsesDescribeNotebookInstance(this, this.__resources, input);
  }

  public describeNotebookInstanceLifecycleConfig(input: shapes.SageMakerDescribeNotebookInstanceLifecycleConfigInput): SageMakerResponsesDescribeNotebookInstanceLifecycleConfig {
    return new SageMakerResponsesDescribeNotebookInstanceLifecycleConfig(this, this.__resources, input);
  }

  public describeProcessingJob(input: shapes.SageMakerDescribeProcessingJobRequest): SageMakerResponsesDescribeProcessingJob {
    return new SageMakerResponsesDescribeProcessingJob(this, this.__resources, input);
  }

  public describeSubscribedWorkteam(input: shapes.SageMakerDescribeSubscribedWorkteamRequest): SageMakerResponsesDescribeSubscribedWorkteam {
    return new SageMakerResponsesDescribeSubscribedWorkteam(this, this.__resources, input);
  }

  public describeTrainingJob(input: shapes.SageMakerDescribeTrainingJobRequest): SageMakerResponsesDescribeTrainingJob {
    return new SageMakerResponsesDescribeTrainingJob(this, this.__resources, input);
  }

  public describeTransformJob(input: shapes.SageMakerDescribeTransformJobRequest): SageMakerResponsesDescribeTransformJob {
    return new SageMakerResponsesDescribeTransformJob(this, this.__resources, input);
  }

  public describeTrial(input: shapes.SageMakerDescribeTrialRequest): SageMakerResponsesDescribeTrial {
    return new SageMakerResponsesDescribeTrial(this, this.__resources, input);
  }

  public describeTrialComponent(input: shapes.SageMakerDescribeTrialComponentRequest): SageMakerResponsesDescribeTrialComponent {
    return new SageMakerResponsesDescribeTrialComponent(this, this.__resources, input);
  }

  public describeUserProfile(input: shapes.SageMakerDescribeUserProfileRequest): SageMakerResponsesDescribeUserProfile {
    return new SageMakerResponsesDescribeUserProfile(this, this.__resources, input);
  }

  public describeWorkforce(input: shapes.SageMakerDescribeWorkforceRequest): SageMakerResponsesDescribeWorkforce {
    return new SageMakerResponsesDescribeWorkforce(this, this.__resources, input);
  }

  public describeWorkteam(input: shapes.SageMakerDescribeWorkteamRequest): SageMakerResponsesDescribeWorkteam {
    return new SageMakerResponsesDescribeWorkteam(this, this.__resources, input);
  }

  public disassociateTrialComponent(input: shapes.SageMakerDisassociateTrialComponentRequest): SageMakerResponsesDisassociateTrialComponent {
    return new SageMakerResponsesDisassociateTrialComponent(this, this.__resources, input);
  }

  public fetchSearchSuggestions(input: shapes.SageMakerGetSearchSuggestionsRequest): SageMakerResponsesFetchSearchSuggestions {
    return new SageMakerResponsesFetchSearchSuggestions(this, this.__resources, input);
  }

  public listAlgorithms(input: shapes.SageMakerListAlgorithmsInput): SageMakerResponsesListAlgorithms {
    return new SageMakerResponsesListAlgorithms(this, this.__resources, input);
  }

  public listAppImageConfigs(input: shapes.SageMakerListAppImageConfigsRequest): SageMakerResponsesListAppImageConfigs {
    return new SageMakerResponsesListAppImageConfigs(this, this.__resources, input);
  }

  public listApps(input: shapes.SageMakerListAppsRequest): SageMakerResponsesListApps {
    return new SageMakerResponsesListApps(this, this.__resources, input);
  }

  public listAutoMlJobs(input: shapes.SageMakerListAutoMlJobsRequest): SageMakerResponsesListAutoMlJobs {
    return new SageMakerResponsesListAutoMlJobs(this, this.__resources, input);
  }

  public listCandidatesForAutoMlJob(input: shapes.SageMakerListCandidatesForAutoMlJobRequest): SageMakerResponsesListCandidatesForAutoMlJob {
    return new SageMakerResponsesListCandidatesForAutoMlJob(this, this.__resources, input);
  }

  public listCodeRepositories(input: shapes.SageMakerListCodeRepositoriesInput): SageMakerResponsesListCodeRepositories {
    return new SageMakerResponsesListCodeRepositories(this, this.__resources, input);
  }

  public listCompilationJobs(input: shapes.SageMakerListCompilationJobsRequest): SageMakerResponsesListCompilationJobs {
    return new SageMakerResponsesListCompilationJobs(this, this.__resources, input);
  }

  public listDomains(input: shapes.SageMakerListDomainsRequest): SageMakerResponsesListDomains {
    return new SageMakerResponsesListDomains(this, this.__resources, input);
  }

  public listEndpointConfigs(input: shapes.SageMakerListEndpointConfigsInput): SageMakerResponsesListEndpointConfigs {
    return new SageMakerResponsesListEndpointConfigs(this, this.__resources, input);
  }

  public listEndpoints(input: shapes.SageMakerListEndpointsInput): SageMakerResponsesListEndpoints {
    return new SageMakerResponsesListEndpoints(this, this.__resources, input);
  }

  public listExperiments(input: shapes.SageMakerListExperimentsRequest): SageMakerResponsesListExperiments {
    return new SageMakerResponsesListExperiments(this, this.__resources, input);
  }

  public listFlowDefinitions(input: shapes.SageMakerListFlowDefinitionsRequest): SageMakerResponsesListFlowDefinitions {
    return new SageMakerResponsesListFlowDefinitions(this, this.__resources, input);
  }

  public listHumanTaskUis(input: shapes.SageMakerListHumanTaskUisRequest): SageMakerResponsesListHumanTaskUis {
    return new SageMakerResponsesListHumanTaskUis(this, this.__resources, input);
  }

  public listHyperParameterTuningJobs(input: shapes.SageMakerListHyperParameterTuningJobsRequest): SageMakerResponsesListHyperParameterTuningJobs {
    return new SageMakerResponsesListHyperParameterTuningJobs(this, this.__resources, input);
  }

  public listImageVersions(input: shapes.SageMakerListImageVersionsRequest): SageMakerResponsesListImageVersions {
    return new SageMakerResponsesListImageVersions(this, this.__resources, input);
  }

  public listImages(input: shapes.SageMakerListImagesRequest): SageMakerResponsesListImages {
    return new SageMakerResponsesListImages(this, this.__resources, input);
  }

  public listLabelingJobs(input: shapes.SageMakerListLabelingJobsRequest): SageMakerResponsesListLabelingJobs {
    return new SageMakerResponsesListLabelingJobs(this, this.__resources, input);
  }

  public listLabelingJobsForWorkteam(input: shapes.SageMakerListLabelingJobsForWorkteamRequest): SageMakerResponsesListLabelingJobsForWorkteam {
    return new SageMakerResponsesListLabelingJobsForWorkteam(this, this.__resources, input);
  }

  public listModelPackages(input: shapes.SageMakerListModelPackagesInput): SageMakerResponsesListModelPackages {
    return new SageMakerResponsesListModelPackages(this, this.__resources, input);
  }

  public listModels(input: shapes.SageMakerListModelsInput): SageMakerResponsesListModels {
    return new SageMakerResponsesListModels(this, this.__resources, input);
  }

  public listMonitoringExecutions(input: shapes.SageMakerListMonitoringExecutionsRequest): SageMakerResponsesListMonitoringExecutions {
    return new SageMakerResponsesListMonitoringExecutions(this, this.__resources, input);
  }

  public listMonitoringSchedules(input: shapes.SageMakerListMonitoringSchedulesRequest): SageMakerResponsesListMonitoringSchedules {
    return new SageMakerResponsesListMonitoringSchedules(this, this.__resources, input);
  }

  public listNotebookInstanceLifecycleConfigs(input: shapes.SageMakerListNotebookInstanceLifecycleConfigsInput): SageMakerResponsesListNotebookInstanceLifecycleConfigs {
    return new SageMakerResponsesListNotebookInstanceLifecycleConfigs(this, this.__resources, input);
  }

  public listNotebookInstances(input: shapes.SageMakerListNotebookInstancesInput): SageMakerResponsesListNotebookInstances {
    return new SageMakerResponsesListNotebookInstances(this, this.__resources, input);
  }

  public listProcessingJobs(input: shapes.SageMakerListProcessingJobsRequest): SageMakerResponsesListProcessingJobs {
    return new SageMakerResponsesListProcessingJobs(this, this.__resources, input);
  }

  public listSubscribedWorkteams(input: shapes.SageMakerListSubscribedWorkteamsRequest): SageMakerResponsesListSubscribedWorkteams {
    return new SageMakerResponsesListSubscribedWorkteams(this, this.__resources, input);
  }

  public listTags(input: shapes.SageMakerListTagsInput): SageMakerResponsesListTags {
    return new SageMakerResponsesListTags(this, this.__resources, input);
  }

  public listTrainingJobs(input: shapes.SageMakerListTrainingJobsRequest): SageMakerResponsesListTrainingJobs {
    return new SageMakerResponsesListTrainingJobs(this, this.__resources, input);
  }

  public listTrainingJobsForHyperParameterTuningJob(input: shapes.SageMakerListTrainingJobsForHyperParameterTuningJobRequest): SageMakerResponsesListTrainingJobsForHyperParameterTuningJob {
    return new SageMakerResponsesListTrainingJobsForHyperParameterTuningJob(this, this.__resources, input);
  }

  public listTransformJobs(input: shapes.SageMakerListTransformJobsRequest): SageMakerResponsesListTransformJobs {
    return new SageMakerResponsesListTransformJobs(this, this.__resources, input);
  }

  public listTrialComponents(input: shapes.SageMakerListTrialComponentsRequest): SageMakerResponsesListTrialComponents {
    return new SageMakerResponsesListTrialComponents(this, this.__resources, input);
  }

  public listTrials(input: shapes.SageMakerListTrialsRequest): SageMakerResponsesListTrials {
    return new SageMakerResponsesListTrials(this, this.__resources, input);
  }

  public listUserProfiles(input: shapes.SageMakerListUserProfilesRequest): SageMakerResponsesListUserProfiles {
    return new SageMakerResponsesListUserProfiles(this, this.__resources, input);
  }

  public listWorkforces(input: shapes.SageMakerListWorkforcesRequest): SageMakerResponsesListWorkforces {
    return new SageMakerResponsesListWorkforces(this, this.__resources, input);
  }

  public listWorkteams(input: shapes.SageMakerListWorkteamsRequest): SageMakerResponsesListWorkteams {
    return new SageMakerResponsesListWorkteams(this, this.__resources, input);
  }

  public renderUiTemplate(input: shapes.SageMakerRenderUiTemplateRequest): SageMakerResponsesRenderUiTemplate {
    return new SageMakerResponsesRenderUiTemplate(this, this.__resources, input);
  }

  public search(input: shapes.SageMakerSearchRequest): SageMakerResponsesSearch {
    return new SageMakerResponsesSearch(this, this.__resources, input);
  }

  public startMonitoringSchedule(input: shapes.SageMakerStartMonitoringScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StartMonitoringSchedule'),
        parameters: {
          MonitoringScheduleName: input.monitoringScheduleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartMonitoringSchedule', props);
  }

  public startNotebookInstance(input: shapes.SageMakerStartNotebookInstanceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StartNotebookInstance'),
        parameters: {
          NotebookInstanceName: input.notebookInstanceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartNotebookInstance', props);
  }

  public stopAutoMlJob(input: shapes.SageMakerStopAutoMlJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopAutoMLJob'),
        parameters: {
          AutoMLJobName: input.autoMlJobName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopAutoMLJob', props);
  }

  public stopCompilationJob(input: shapes.SageMakerStopCompilationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopCompilationJob'),
        parameters: {
          CompilationJobName: input.compilationJobName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopCompilationJob', props);
  }

  public stopHyperParameterTuningJob(input: shapes.SageMakerStopHyperParameterTuningJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopHyperParameterTuningJob'),
        parameters: {
          HyperParameterTuningJobName: input.hyperParameterTuningJobName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopHyperParameterTuningJob', props);
  }

  public stopLabelingJob(input: shapes.SageMakerStopLabelingJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopLabelingJob'),
        parameters: {
          LabelingJobName: input.labelingJobName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopLabelingJob', props);
  }

  public stopMonitoringSchedule(input: shapes.SageMakerStopMonitoringScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopMonitoringSchedule'),
        parameters: {
          MonitoringScheduleName: input.monitoringScheduleName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopMonitoringSchedule', props);
  }

  public stopNotebookInstance(input: shapes.SageMakerStopNotebookInstanceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopNotebookInstance'),
        parameters: {
          NotebookInstanceName: input.notebookInstanceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopNotebookInstance', props);
  }

  public stopProcessingJob(input: shapes.SageMakerStopProcessingJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopProcessingJob'),
        parameters: {
          ProcessingJobName: input.processingJobName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopProcessingJob', props);
  }

  public stopTrainingJob(input: shapes.SageMakerStopTrainingJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopTrainingJob'),
        parameters: {
          TrainingJobName: input.trainingJobName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopTrainingJob', props);
  }

  public stopTransformJob(input: shapes.SageMakerStopTransformJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.StopTransformJob'),
        parameters: {
          TransformJobName: input.transformJobName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopTransformJob', props);
  }

  public updateAppImageConfig(input: shapes.SageMakerUpdateAppImageConfigRequest): SageMakerResponsesUpdateAppImageConfig {
    return new SageMakerResponsesUpdateAppImageConfig(this, this.__resources, input);
  }

  public updateCodeRepository(input: shapes.SageMakerUpdateCodeRepositoryInput): SageMakerResponsesUpdateCodeRepository {
    return new SageMakerResponsesUpdateCodeRepository(this, this.__resources, input);
  }

  public updateDomain(input: shapes.SageMakerUpdateDomainRequest): SageMakerResponsesUpdateDomain {
    return new SageMakerResponsesUpdateDomain(this, this.__resources, input);
  }

  public updateEndpoint(input: shapes.SageMakerUpdateEndpointInput): SageMakerResponsesUpdateEndpoint {
    return new SageMakerResponsesUpdateEndpoint(this, this.__resources, input);
  }

  public updateEndpointWeightsAndCapacities(input: shapes.SageMakerUpdateEndpointWeightsAndCapacitiesInput): SageMakerResponsesUpdateEndpointWeightsAndCapacities {
    return new SageMakerResponsesUpdateEndpointWeightsAndCapacities(this, this.__resources, input);
  }

  public updateExperiment(input: shapes.SageMakerUpdateExperimentRequest): SageMakerResponsesUpdateExperiment {
    return new SageMakerResponsesUpdateExperiment(this, this.__resources, input);
  }

  public updateImage(input: shapes.SageMakerUpdateImageRequest): SageMakerResponsesUpdateImage {
    return new SageMakerResponsesUpdateImage(this, this.__resources, input);
  }

  public updateMonitoringSchedule(input: shapes.SageMakerUpdateMonitoringScheduleRequest): SageMakerResponsesUpdateMonitoringSchedule {
    return new SageMakerResponsesUpdateMonitoringSchedule(this, this.__resources, input);
  }

  public updateNotebookInstance(input: shapes.SageMakerUpdateNotebookInstanceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateNotebookInstance'),
        parameters: {
          NotebookInstanceName: input.notebookInstanceName,
          InstanceType: input.instanceType,
          RoleArn: input.roleArn,
          LifecycleConfigName: input.lifecycleConfigName,
          DisassociateLifecycleConfig: input.disassociateLifecycleConfig,
          VolumeSizeInGB: input.volumeSizeInGb,
          DefaultCodeRepository: input.defaultCodeRepository,
          AdditionalCodeRepositories: input.additionalCodeRepositories,
          AcceleratorTypes: input.acceleratorTypes,
          DisassociateAcceleratorTypes: input.disassociateAcceleratorTypes,
          DisassociateDefaultCodeRepository: input.disassociateDefaultCodeRepository,
          DisassociateAdditionalCodeRepositories: input.disassociateAdditionalCodeRepositories,
          RootAccess: input.rootAccess,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateNotebookInstance', props);
  }

  public updateNotebookInstanceLifecycleConfig(input: shapes.SageMakerUpdateNotebookInstanceLifecycleConfigInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateNotebookInstanceLifecycleConfig'),
        parameters: {
          NotebookInstanceLifecycleConfigName: input.notebookInstanceLifecycleConfigName,
          OnCreate: input.onCreate,
          OnStart: input.onStart,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateNotebookInstanceLifecycleConfig', props);
  }

  public updateTrial(input: shapes.SageMakerUpdateTrialRequest): SageMakerResponsesUpdateTrial {
    return new SageMakerResponsesUpdateTrial(this, this.__resources, input);
  }

  public updateTrialComponent(input: shapes.SageMakerUpdateTrialComponentRequest): SageMakerResponsesUpdateTrialComponent {
    return new SageMakerResponsesUpdateTrialComponent(this, this.__resources, input);
  }

  public updateUserProfile(input: shapes.SageMakerUpdateUserProfileRequest): SageMakerResponsesUpdateUserProfile {
    return new SageMakerResponsesUpdateUserProfile(this, this.__resources, input);
  }

  public updateWorkforce(input: shapes.SageMakerUpdateWorkforceRequest): SageMakerResponsesUpdateWorkforce {
    return new SageMakerResponsesUpdateWorkforce(this, this.__resources, input);
  }

  public updateWorkteam(input: shapes.SageMakerUpdateWorkteamRequest): SageMakerResponsesUpdateWorkteam {
    return new SageMakerResponsesUpdateWorkteam(this, this.__resources, input);
  }

}

export class SageMakerResponsesAddTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerAddTagsInput) {
  }

  public get tags(): shapes.SageMakerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTags',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.AddTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SageMakerTag[];
  }

}

export class SageMakerResponsesAssociateTrialComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerAssociateTrialComponentRequest) {
  }

  public get trialComponentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.AssociateTrialComponent.TrialComponentArn'),
        outputPath: 'TrialComponentArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

  public get trialArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.AssociateTrialComponent.TrialArn'),
        outputPath: 'TrialArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateTrialComponent.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateAlgorithm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateAlgorithmInput) {
  }

  public get algorithmArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateAlgorithm.AlgorithmArn'),
        outputPath: 'AlgorithmArn',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
          AlgorithmDescription: this.__input.algorithmDescription,
          TrainingSpecification: {
            TrainingImage: this.__input.trainingSpecification.trainingImage,
            TrainingImageDigest: this.__input.trainingSpecification.trainingImageDigest,
            SupportedHyperParameters: this.__input.trainingSpecification.supportedHyperParameters,
            SupportedTrainingInstanceTypes: this.__input.trainingSpecification.supportedTrainingInstanceTypes,
            SupportsDistributedTraining: this.__input.trainingSpecification.supportsDistributedTraining,
            MetricDefinitions: this.__input.trainingSpecification.metricDefinitions,
            TrainingChannels: this.__input.trainingSpecification.trainingChannels,
            SupportedTuningJobObjectiveMetrics: this.__input.trainingSpecification.supportedTuningJobObjectiveMetrics,
          },
          InferenceSpecification: {
            Containers: this.__input.inferenceSpecification?.containers,
            SupportedTransformInstanceTypes: this.__input.inferenceSpecification?.supportedTransformInstanceTypes,
            SupportedRealtimeInferenceInstanceTypes: this.__input.inferenceSpecification?.supportedRealtimeInferenceInstanceTypes,
            SupportedContentTypes: this.__input.inferenceSpecification?.supportedContentTypes,
            SupportedResponseMIMETypes: this.__input.inferenceSpecification?.supportedResponseMimeTypes,
          },
          ValidationSpecification: {
            ValidationRole: this.__input.validationSpecification?.validationRole,
            ValidationProfiles: this.__input.validationSpecification?.validationProfiles,
          },
          CertifyForMarketplace: this.__input.certifyForMarketplace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAlgorithm.AlgorithmArn', props);
    return resource.getResponseField('AlgorithmArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateAppRequest) {
  }

  public get appArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateApp.AppArn'),
        outputPath: 'AppArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
          Tags: this.__input.tags,
          ResourceSpec: {
            SageMakerImageArn: this.__input.resourceSpec?.sageMakerImageArn,
            SageMakerImageVersionArn: this.__input.resourceSpec?.sageMakerImageVersionArn,
            InstanceType: this.__input.resourceSpec?.instanceType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.AppArn', props);
    return resource.getResponseField('AppArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateAppImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateAppImageConfigRequest) {
  }

  public get appImageConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateAppImageConfig.AppImageConfigArn'),
        outputPath: 'AppImageConfigArn',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
          Tags: this.__input.tags,
          KernelGatewayImageConfig: {
            KernelSpecs: this.__input.kernelGatewayImageConfig?.kernelSpecs,
            FileSystemConfig: {
              MountPath: this.__input.kernelGatewayImageConfig?.fileSystemConfig?.mountPath,
              DefaultUid: this.__input.kernelGatewayImageConfig?.fileSystemConfig?.defaultUid,
              DefaultGid: this.__input.kernelGatewayImageConfig?.fileSystemConfig?.defaultGid,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppImageConfig.AppImageConfigArn', props);
    return resource.getResponseField('AppImageConfigArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateAutoMlJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateAutoMlJobRequest) {
  }

  public get autoMlJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateAutoMLJob.AutoMLJobArn'),
        outputPath: 'AutoMLJobArn',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
          InputDataConfig: this.__input.inputDataConfig,
          OutputDataConfig: {
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
            S3OutputPath: this.__input.outputDataConfig.s3OutputPath,
          },
          ProblemType: this.__input.problemType,
          AutoMLJobObjective: {
            MetricName: this.__input.autoMlJobObjective?.metricName,
          },
          AutoMLJobConfig: {
            CompletionCriteria: {
              MaxCandidates: this.__input.autoMlJobConfig?.completionCriteria?.maxCandidates,
              MaxRuntimePerTrainingJobInSeconds: this.__input.autoMlJobConfig?.completionCriteria?.maxRuntimePerTrainingJobInSeconds,
              MaxAutoMLJobRuntimeInSeconds: this.__input.autoMlJobConfig?.completionCriteria?.maxAutoMlJobRuntimeInSeconds,
            },
            SecurityConfig: {
              VolumeKmsKeyId: this.__input.autoMlJobConfig?.securityConfig?.volumeKmsKeyId,
              EnableInterContainerTrafficEncryption: this.__input.autoMlJobConfig?.securityConfig?.enableInterContainerTrafficEncryption,
              VpcConfig: {
                SecurityGroupIds: this.__input.autoMlJobConfig?.securityConfig?.vpcConfig?.securityGroupIds,
                Subnets: this.__input.autoMlJobConfig?.securityConfig?.vpcConfig?.subnets,
              },
            },
          },
          RoleArn: this.__input.roleArn,
          GenerateCandidateDefinitionsOnly: this.__input.generateCandidateDefinitionsOnly,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoMLJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateCodeRepositoryInput) {
  }

  public get codeRepositoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateCodeRepository.CodeRepositoryArn'),
        outputPath: 'CodeRepositoryArn',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
          GitConfig: {
            RepositoryUrl: this.__input.gitConfig.repositoryUrl,
            Branch: this.__input.gitConfig.branch,
            SecretArn: this.__input.gitConfig.secretArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeRepository.CodeRepositoryArn', props);
    return resource.getResponseField('CodeRepositoryArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateCompilationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateCompilationJobRequest) {
  }

  public get compilationJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateCompilationJob.CompilationJobArn'),
        outputPath: 'CompilationJobArn',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
          RoleArn: this.__input.roleArn,
          InputConfig: {
            S3Uri: this.__input.inputConfig.s3Uri,
            DataInputConfig: this.__input.inputConfig.dataInputConfig,
            Framework: this.__input.inputConfig.framework,
          },
          OutputConfig: {
            S3OutputLocation: this.__input.outputConfig.s3OutputLocation,
            TargetDevice: this.__input.outputConfig.targetDevice,
            TargetPlatform: {
              Os: this.__input.outputConfig.targetPlatform?.os,
              Arch: this.__input.outputConfig.targetPlatform?.arch,
              Accelerator: this.__input.outputConfig.targetPlatform?.accelerator,
            },
            CompilerOptions: this.__input.outputConfig.compilerOptions,
          },
          StoppingCondition: {
            MaxRuntimeInSeconds: this.__input.stoppingCondition.maxRuntimeInSeconds,
            MaxWaitTimeInSeconds: this.__input.stoppingCondition.maxWaitTimeInSeconds,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCompilationJob.CompilationJobArn', props);
    return resource.getResponseField('CompilationJobArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateDomainRequest) {
  }

  public get domainArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateDomain.DomainArn'),
        outputPath: 'DomainArn',
        parameters: {
          DomainName: this.__input.domainName,
          AuthMode: this.__input.authMode,
          DefaultUserSettings: {
            ExecutionRole: this.__input.defaultUserSettings.executionRole,
            SecurityGroups: this.__input.defaultUserSettings.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.__input.defaultUserSettings.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.__input.defaultUserSettings.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.__input.defaultUserSettings.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.__input.defaultUserSettings.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
          SubnetIds: this.__input.subnetIds,
          VpcId: this.__input.vpcId,
          Tags: this.__input.tags,
          AppNetworkAccessType: this.__input.appNetworkAccessType,
          HomeEfsFileSystemKmsKeyId: this.__input.homeEfsFileSystemKmsKeyId,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainArn', props);
    return resource.getResponseField('DomainArn') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateDomain.Url'),
        outputPath: 'Url',
        parameters: {
          DomainName: this.__input.domainName,
          AuthMode: this.__input.authMode,
          DefaultUserSettings: {
            ExecutionRole: this.__input.defaultUserSettings.executionRole,
            SecurityGroups: this.__input.defaultUserSettings.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.__input.defaultUserSettings.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.__input.defaultUserSettings.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.__input.defaultUserSettings.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.__input.defaultUserSettings.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
          SubnetIds: this.__input.subnetIds,
          VpcId: this.__input.vpcId,
          Tags: this.__input.tags,
          AppNetworkAccessType: this.__input.appNetworkAccessType,
          HomeEfsFileSystemKmsKeyId: this.__input.homeEfsFileSystemKmsKeyId,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

}

export class SageMakerResponsesCreateEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateEndpointInput) {
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateEndpoint.EndpointArn'),
        outputPath: 'EndpointArn',
        parameters: {
          EndpointName: this.__input.endpointName,
          EndpointConfigName: this.__input.endpointConfigName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateEndpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateEndpointConfigInput) {
  }

  public get endpointConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateEndpointConfig.EndpointConfigArn'),
        outputPath: 'EndpointConfigArn',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
          ProductionVariants: this.__input.productionVariants,
          DataCaptureConfig: {
            EnableCapture: this.__input.dataCaptureConfig?.enableCapture,
            InitialSamplingPercentage: this.__input.dataCaptureConfig?.initialSamplingPercentage,
            DestinationS3Uri: this.__input.dataCaptureConfig?.destinationS3Uri,
            KmsKeyId: this.__input.dataCaptureConfig?.kmsKeyId,
            CaptureOptions: this.__input.dataCaptureConfig?.captureOptions,
            CaptureContentTypeHeader: {
              CsvContentTypes: this.__input.dataCaptureConfig?.captureContentTypeHeader?.csvContentTypes,
              JsonContentTypes: this.__input.dataCaptureConfig?.captureContentTypeHeader?.jsonContentTypes,
            },
          },
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpointConfig.EndpointConfigArn', props);
    return resource.getResponseField('EndpointConfigArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateExperimentRequest) {
  }

  public get experimentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateExperiment.ExperimentArn'),
        outputPath: 'ExperimentArn',
        parameters: {
          ExperimentName: this.__input.experimentName,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateExperiment.ExperimentArn', props);
    return resource.getResponseField('ExperimentArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateFlowDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateFlowDefinitionRequest) {
  }

  public get flowDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateFlowDefinition.FlowDefinitionArn'),
        outputPath: 'FlowDefinitionArn',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
          HumanLoopRequestSource: {
            AwsManagedHumanLoopRequestSource: this.__input.humanLoopRequestSource?.awsManagedHumanLoopRequestSource,
          },
          HumanLoopActivationConfig: {
            HumanLoopActivationConditionsConfig: {
              HumanLoopActivationConditions: this.__input.humanLoopActivationConfig?.humanLoopActivationConditionsConfig.humanLoopActivationConditions,
            },
          },
          HumanLoopConfig: {
            WorkteamArn: this.__input.humanLoopConfig.workteamArn,
            HumanTaskUiArn: this.__input.humanLoopConfig.humanTaskUiArn,
            TaskTitle: this.__input.humanLoopConfig.taskTitle,
            TaskDescription: this.__input.humanLoopConfig.taskDescription,
            TaskCount: this.__input.humanLoopConfig.taskCount,
            TaskAvailabilityLifetimeInSeconds: this.__input.humanLoopConfig.taskAvailabilityLifetimeInSeconds,
            TaskTimeLimitInSeconds: this.__input.humanLoopConfig.taskTimeLimitInSeconds,
            TaskKeywords: this.__input.humanLoopConfig.taskKeywords,
            PublicWorkforceTaskPrice: {
              AmountInUsd: {
                Dollars: this.__input.humanLoopConfig.publicWorkforceTaskPrice?.amountInUsd?.dollars,
                Cents: this.__input.humanLoopConfig.publicWorkforceTaskPrice?.amountInUsd?.cents,
                TenthFractionsOfACent: this.__input.humanLoopConfig.publicWorkforceTaskPrice?.amountInUsd?.tenthFractionsOfACent,
              },
            },
          },
          OutputConfig: {
            S3OutputPath: this.__input.outputConfig.s3OutputPath,
            KmsKeyId: this.__input.outputConfig.kmsKeyId,
          },
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFlowDefinition.FlowDefinitionArn', props);
    return resource.getResponseField('FlowDefinitionArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateHumanTaskUi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateHumanTaskUiRequest) {
  }

  public get humanTaskUiArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateHumanTaskUi.HumanTaskUiArn'),
        outputPath: 'HumanTaskUiArn',
        parameters: {
          HumanTaskUiName: this.__input.humanTaskUiName,
          UiTemplate: {
            Content: this.__input.uiTemplate.content,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHumanTaskUi.HumanTaskUiArn', props);
    return resource.getResponseField('HumanTaskUiArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateHyperParameterTuningJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateHyperParameterTuningJobRequest) {
  }

  public get hyperParameterTuningJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateHyperParameterTuningJob.HyperParameterTuningJobArn'),
        outputPath: 'HyperParameterTuningJobArn',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
          HyperParameterTuningJobConfig: {
            Strategy: this.__input.hyperParameterTuningJobConfig.strategy,
            HyperParameterTuningJobObjective: {
              Type: this.__input.hyperParameterTuningJobConfig.hyperParameterTuningJobObjective?.type,
              MetricName: this.__input.hyperParameterTuningJobConfig.hyperParameterTuningJobObjective?.metricName,
            },
            ResourceLimits: {
              MaxNumberOfTrainingJobs: this.__input.hyperParameterTuningJobConfig.resourceLimits.maxNumberOfTrainingJobs,
              MaxParallelTrainingJobs: this.__input.hyperParameterTuningJobConfig.resourceLimits.maxParallelTrainingJobs,
            },
            ParameterRanges: {
              IntegerParameterRanges: this.__input.hyperParameterTuningJobConfig.parameterRanges?.integerParameterRanges,
              ContinuousParameterRanges: this.__input.hyperParameterTuningJobConfig.parameterRanges?.continuousParameterRanges,
              CategoricalParameterRanges: this.__input.hyperParameterTuningJobConfig.parameterRanges?.categoricalParameterRanges,
            },
            TrainingJobEarlyStoppingType: this.__input.hyperParameterTuningJobConfig.trainingJobEarlyStoppingType,
            TuningJobCompletionCriteria: {
              TargetObjectiveMetricValue: this.__input.hyperParameterTuningJobConfig.tuningJobCompletionCriteria?.targetObjectiveMetricValue,
            },
          },
          TrainingJobDefinition: {
            DefinitionName: this.__input.trainingJobDefinition?.definitionName,
            TuningObjective: {
              Type: this.__input.trainingJobDefinition?.tuningObjective?.type,
              MetricName: this.__input.trainingJobDefinition?.tuningObjective?.metricName,
            },
            HyperParameterRanges: {
              IntegerParameterRanges: this.__input.trainingJobDefinition?.hyperParameterRanges?.integerParameterRanges,
              ContinuousParameterRanges: this.__input.trainingJobDefinition?.hyperParameterRanges?.continuousParameterRanges,
              CategoricalParameterRanges: this.__input.trainingJobDefinition?.hyperParameterRanges?.categoricalParameterRanges,
            },
            StaticHyperParameters: this.__input.trainingJobDefinition?.staticHyperParameters,
            AlgorithmSpecification: {
              TrainingImage: this.__input.trainingJobDefinition?.algorithmSpecification.trainingImage,
              TrainingInputMode: this.__input.trainingJobDefinition?.algorithmSpecification.trainingInputMode,
              AlgorithmName: this.__input.trainingJobDefinition?.algorithmSpecification.algorithmName,
              MetricDefinitions: this.__input.trainingJobDefinition?.algorithmSpecification.metricDefinitions,
            },
            RoleArn: this.__input.trainingJobDefinition?.roleArn,
            InputDataConfig: this.__input.trainingJobDefinition?.inputDataConfig,
            VpcConfig: {
              SecurityGroupIds: this.__input.trainingJobDefinition?.vpcConfig?.securityGroupIds,
              Subnets: this.__input.trainingJobDefinition?.vpcConfig?.subnets,
            },
            OutputDataConfig: {
              KmsKeyId: this.__input.trainingJobDefinition?.outputDataConfig.kmsKeyId,
              S3OutputPath: this.__input.trainingJobDefinition?.outputDataConfig.s3OutputPath,
            },
            ResourceConfig: {
              InstanceType: this.__input.trainingJobDefinition?.resourceConfig.instanceType,
              InstanceCount: this.__input.trainingJobDefinition?.resourceConfig.instanceCount,
              VolumeSizeInGB: this.__input.trainingJobDefinition?.resourceConfig.volumeSizeInGb,
              VolumeKmsKeyId: this.__input.trainingJobDefinition?.resourceConfig.volumeKmsKeyId,
            },
            StoppingCondition: {
              MaxRuntimeInSeconds: this.__input.trainingJobDefinition?.stoppingCondition.maxRuntimeInSeconds,
              MaxWaitTimeInSeconds: this.__input.trainingJobDefinition?.stoppingCondition.maxWaitTimeInSeconds,
            },
            EnableNetworkIsolation: this.__input.trainingJobDefinition?.enableNetworkIsolation,
            EnableInterContainerTrafficEncryption: this.__input.trainingJobDefinition?.enableInterContainerTrafficEncryption,
            EnableManagedSpotTraining: this.__input.trainingJobDefinition?.enableManagedSpotTraining,
            CheckpointConfig: {
              S3Uri: this.__input.trainingJobDefinition?.checkpointConfig?.s3Uri,
              LocalPath: this.__input.trainingJobDefinition?.checkpointConfig?.localPath,
            },
          },
          TrainingJobDefinitions: this.__input.trainingJobDefinitions,
          WarmStartConfig: {
            ParentHyperParameterTuningJobs: this.__input.warmStartConfig?.parentHyperParameterTuningJobs,
            WarmStartType: this.__input.warmStartConfig?.warmStartType,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHyperParameterTuningJob.HyperParameterTuningJobArn', props);
    return resource.getResponseField('HyperParameterTuningJobArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateImageRequest) {
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateImage.ImageArn'),
        outputPath: 'ImageArn',
        parameters: {
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          ImageName: this.__input.imageName,
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImage.ImageArn', props);
    return resource.getResponseField('ImageArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateImageVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateImageVersionRequest) {
  }

  public get imageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateImageVersion.ImageVersionArn'),
        outputPath: 'ImageVersionArn',
        parameters: {
          BaseImage: this.__input.baseImage,
          ClientToken: this.__input.clientToken,
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageVersion.ImageVersionArn', props);
    return resource.getResponseField('ImageVersionArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateLabelingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateLabelingJobRequest) {
  }

  public get labelingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateLabelingJob.LabelingJobArn'),
        outputPath: 'LabelingJobArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
          LabelAttributeName: this.__input.labelAttributeName,
          InputConfig: {
            DataSource: {
              S3DataSource: {
                ManifestS3Uri: this.__input.inputConfig.dataSource.s3DataSource?.manifestS3Uri,
              },
              SnsDataSource: {
                SnsTopicArn: this.__input.inputConfig.dataSource.snsDataSource?.snsTopicArn,
              },
            },
            DataAttributes: {
              ContentClassifiers: this.__input.inputConfig.dataAttributes?.contentClassifiers,
            },
          },
          OutputConfig: {
            S3OutputPath: this.__input.outputConfig.s3OutputPath,
            KmsKeyId: this.__input.outputConfig.kmsKeyId,
            SnsTopicArn: this.__input.outputConfig.snsTopicArn,
          },
          RoleArn: this.__input.roleArn,
          LabelCategoryConfigS3Uri: this.__input.labelCategoryConfigS3Uri,
          StoppingConditions: {
            MaxHumanLabeledObjectCount: this.__input.stoppingConditions?.maxHumanLabeledObjectCount,
            MaxPercentageOfInputDatasetLabeled: this.__input.stoppingConditions?.maxPercentageOfInputDatasetLabeled,
          },
          LabelingJobAlgorithmsConfig: {
            LabelingJobAlgorithmSpecificationArn: this.__input.labelingJobAlgorithmsConfig?.labelingJobAlgorithmSpecificationArn,
            InitialActiveLearningModelArn: this.__input.labelingJobAlgorithmsConfig?.initialActiveLearningModelArn,
            LabelingJobResourceConfig: {
              VolumeKmsKeyId: this.__input.labelingJobAlgorithmsConfig?.labelingJobResourceConfig?.volumeKmsKeyId,
            },
          },
          HumanTaskConfig: {
            WorkteamArn: this.__input.humanTaskConfig.workteamArn,
            UiConfig: {
              UiTemplateS3Uri: this.__input.humanTaskConfig.uiConfig.uiTemplateS3Uri,
              HumanTaskUiArn: this.__input.humanTaskConfig.uiConfig.humanTaskUiArn,
            },
            PreHumanTaskLambdaArn: this.__input.humanTaskConfig.preHumanTaskLambdaArn,
            TaskKeywords: this.__input.humanTaskConfig.taskKeywords,
            TaskTitle: this.__input.humanTaskConfig.taskTitle,
            TaskDescription: this.__input.humanTaskConfig.taskDescription,
            NumberOfHumanWorkersPerDataObject: this.__input.humanTaskConfig.numberOfHumanWorkersPerDataObject,
            TaskTimeLimitInSeconds: this.__input.humanTaskConfig.taskTimeLimitInSeconds,
            TaskAvailabilityLifetimeInSeconds: this.__input.humanTaskConfig.taskAvailabilityLifetimeInSeconds,
            MaxConcurrentTaskCount: this.__input.humanTaskConfig.maxConcurrentTaskCount,
            AnnotationConsolidationConfig: {
              AnnotationConsolidationLambdaArn: this.__input.humanTaskConfig.annotationConsolidationConfig.annotationConsolidationLambdaArn,
            },
            PublicWorkforceTaskPrice: {
              AmountInUsd: {
                Dollars: this.__input.humanTaskConfig.publicWorkforceTaskPrice?.amountInUsd?.dollars,
                Cents: this.__input.humanTaskConfig.publicWorkforceTaskPrice?.amountInUsd?.cents,
                TenthFractionsOfACent: this.__input.humanTaskConfig.publicWorkforceTaskPrice?.amountInUsd?.tenthFractionsOfACent,
              },
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLabelingJob.LabelingJobArn', props);
    return resource.getResponseField('LabelingJobArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateModelInput) {
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateModel.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          ModelName: this.__input.modelName,
          PrimaryContainer: {
            ContainerHostname: this.__input.primaryContainer?.containerHostname,
            Image: this.__input.primaryContainer?.image,
            ImageConfig: {
              RepositoryAccessMode: this.__input.primaryContainer?.imageConfig?.repositoryAccessMode,
            },
            Mode: this.__input.primaryContainer?.mode,
            ModelDataUrl: this.__input.primaryContainer?.modelDataUrl,
            Environment: this.__input.primaryContainer?.environment,
            ModelPackageName: this.__input.primaryContainer?.modelPackageName,
          },
          Containers: this.__input.containers,
          ExecutionRoleArn: this.__input.executionRoleArn,
          Tags: this.__input.tags,
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
          EnableNetworkIsolation: this.__input.enableNetworkIsolation,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModel.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateModelPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateModelPackageInput) {
  }

  public get modelPackageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateModelPackage.ModelPackageArn'),
        outputPath: 'ModelPackageArn',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
          ModelPackageDescription: this.__input.modelPackageDescription,
          InferenceSpecification: {
            Containers: this.__input.inferenceSpecification?.containers,
            SupportedTransformInstanceTypes: this.__input.inferenceSpecification?.supportedTransformInstanceTypes,
            SupportedRealtimeInferenceInstanceTypes: this.__input.inferenceSpecification?.supportedRealtimeInferenceInstanceTypes,
            SupportedContentTypes: this.__input.inferenceSpecification?.supportedContentTypes,
            SupportedResponseMIMETypes: this.__input.inferenceSpecification?.supportedResponseMimeTypes,
          },
          ValidationSpecification: {
            ValidationRole: this.__input.validationSpecification?.validationRole,
            ValidationProfiles: this.__input.validationSpecification?.validationProfiles,
          },
          SourceAlgorithmSpecification: {
            SourceAlgorithms: this.__input.sourceAlgorithmSpecification?.sourceAlgorithms,
          },
          CertifyForMarketplace: this.__input.certifyForMarketplace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateModelPackage.ModelPackageArn', props);
    return resource.getResponseField('ModelPackageArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateMonitoringSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateMonitoringScheduleRequest) {
  }

  public get monitoringScheduleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateMonitoringSchedule.MonitoringScheduleArn'),
        outputPath: 'MonitoringScheduleArn',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
          MonitoringScheduleConfig: {
            ScheduleConfig: {
              ScheduleExpression: this.__input.monitoringScheduleConfig.scheduleConfig?.scheduleExpression,
            },
            MonitoringJobDefinition: {
              BaselineConfig: {
                ConstraintsResource: {
                  S3Uri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.constraintsResource?.s3Uri,
                },
                StatisticsResource: {
                  S3Uri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.statisticsResource?.s3Uri,
                },
              },
              MonitoringInputs: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringInputs,
              MonitoringOutputConfig: {
                MonitoringOutputs: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.monitoringOutputs,
                KmsKeyId: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.kmsKeyId,
              },
              MonitoringResources: {
                ClusterConfig: {
                  InstanceCount: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceCount,
                  InstanceType: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceType,
                  VolumeSizeInGB: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeSizeInGb,
                  VolumeKmsKeyId: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeKmsKeyId,
                },
              },
              MonitoringAppSpecification: {
                ImageUri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.imageUri,
                ContainerEntrypoint: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerEntrypoint,
                ContainerArguments: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerArguments,
                RecordPreprocessorSourceUri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.recordPreprocessorSourceUri,
                PostAnalyticsProcessorSourceUri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.postAnalyticsProcessorSourceUri,
              },
              StoppingCondition: {
                MaxRuntimeInSeconds: this.__input.monitoringScheduleConfig.monitoringJobDefinition.stoppingCondition?.maxRuntimeInSeconds,
              },
              Environment: this.__input.monitoringScheduleConfig.monitoringJobDefinition.environment,
              NetworkConfig: {
                EnableInterContainerTrafficEncryption: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableInterContainerTrafficEncryption,
                EnableNetworkIsolation: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableNetworkIsolation,
                VpcConfig: {
                  SecurityGroupIds: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.securityGroupIds,
                  Subnets: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.subnets,
                },
              },
              RoleArn: this.__input.monitoringScheduleConfig.monitoringJobDefinition.roleArn,
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMonitoringSchedule.MonitoringScheduleArn', props);
    return resource.getResponseField('MonitoringScheduleArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateNotebookInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateNotebookInstanceInput) {
  }

  public get notebookInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateNotebookInstance.NotebookInstanceArn'),
        outputPath: 'NotebookInstanceArn',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
          InstanceType: this.__input.instanceType,
          SubnetId: this.__input.subnetId,
          SecurityGroupIds: this.__input.securityGroupIds,
          RoleArn: this.__input.roleArn,
          KmsKeyId: this.__input.kmsKeyId,
          Tags: this.__input.tags,
          LifecycleConfigName: this.__input.lifecycleConfigName,
          DirectInternetAccess: this.__input.directInternetAccess,
          VolumeSizeInGB: this.__input.volumeSizeInGb,
          AcceleratorTypes: this.__input.acceleratorTypes,
          DefaultCodeRepository: this.__input.defaultCodeRepository,
          AdditionalCodeRepositories: this.__input.additionalCodeRepositories,
          RootAccess: this.__input.rootAccess,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNotebookInstance.NotebookInstanceArn', props);
    return resource.getResponseField('NotebookInstanceArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateNotebookInstanceLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateNotebookInstanceLifecycleConfigInput) {
  }

  public get notebookInstanceLifecycleConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigArn'),
        outputPath: 'NotebookInstanceLifecycleConfigArn',
        parameters: {
          NotebookInstanceLifecycleConfigName: this.__input.notebookInstanceLifecycleConfigName,
          OnCreate: this.__input.onCreate,
          OnStart: this.__input.onStart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigArn', props);
    return resource.getResponseField('NotebookInstanceLifecycleConfigArn') as unknown as string;
  }

}

export class SageMakerResponsesCreatePresignedDomainUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreatePresignedDomainUrlRequest) {
  }

  public get authorizedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPresignedDomainUrl',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreatePresignedDomainUrl.AuthorizedUrl'),
        outputPath: 'AuthorizedUrl',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          SessionExpirationDurationInSeconds: this.__input.sessionExpirationDurationInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePresignedDomainUrl.AuthorizedUrl', props);
    return resource.getResponseField('AuthorizedUrl') as unknown as string;
  }

}

export class SageMakerResponsesCreatePresignedNotebookInstanceUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreatePresignedNotebookInstanceUrlInput) {
  }

  public get authorizedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPresignedNotebookInstanceUrl',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreatePresignedNotebookInstanceUrl.AuthorizedUrl'),
        outputPath: 'AuthorizedUrl',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
          SessionExpirationDurationInSeconds: this.__input.sessionExpirationDurationInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePresignedNotebookInstanceUrl.AuthorizedUrl', props);
    return resource.getResponseField('AuthorizedUrl') as unknown as string;
  }

}

export class SageMakerResponsesCreateProcessingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateProcessingJobRequest) {
  }

  public get processingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateProcessingJob.ProcessingJobArn'),
        outputPath: 'ProcessingJobArn',
        parameters: {
          ProcessingInputs: this.__input.processingInputs,
          ProcessingOutputConfig: {
            Outputs: this.__input.processingOutputConfig?.outputs,
            KmsKeyId: this.__input.processingOutputConfig?.kmsKeyId,
          },
          ProcessingJobName: this.__input.processingJobName,
          ProcessingResources: {
            ClusterConfig: {
              InstanceCount: this.__input.processingResources.clusterConfig.instanceCount,
              InstanceType: this.__input.processingResources.clusterConfig.instanceType,
              VolumeSizeInGB: this.__input.processingResources.clusterConfig.volumeSizeInGb,
              VolumeKmsKeyId: this.__input.processingResources.clusterConfig.volumeKmsKeyId,
            },
          },
          StoppingCondition: {
            MaxRuntimeInSeconds: this.__input.stoppingCondition?.maxRuntimeInSeconds,
          },
          AppSpecification: {
            ImageUri: this.__input.appSpecification.imageUri,
            ContainerEntrypoint: this.__input.appSpecification.containerEntrypoint,
            ContainerArguments: this.__input.appSpecification.containerArguments,
          },
          Environment: this.__input.environment,
          NetworkConfig: {
            EnableInterContainerTrafficEncryption: this.__input.networkConfig?.enableInterContainerTrafficEncryption,
            EnableNetworkIsolation: this.__input.networkConfig?.enableNetworkIsolation,
            VpcConfig: {
              SecurityGroupIds: this.__input.networkConfig?.vpcConfig?.securityGroupIds,
              Subnets: this.__input.networkConfig?.vpcConfig?.subnets,
            },
          },
          RoleArn: this.__input.roleArn,
          Tags: this.__input.tags,
          ExperimentConfig: {
            ExperimentName: this.__input.experimentConfig?.experimentName,
            TrialName: this.__input.experimentConfig?.trialName,
            TrialComponentDisplayName: this.__input.experimentConfig?.trialComponentDisplayName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProcessingJob.ProcessingJobArn', props);
    return resource.getResponseField('ProcessingJobArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateTrainingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateTrainingJobRequest) {
  }

  public get trainingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateTrainingJob.TrainingJobArn'),
        outputPath: 'TrainingJobArn',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
          HyperParameters: this.__input.hyperParameters,
          AlgorithmSpecification: {
            TrainingImage: this.__input.algorithmSpecification.trainingImage,
            AlgorithmName: this.__input.algorithmSpecification.algorithmName,
            TrainingInputMode: this.__input.algorithmSpecification.trainingInputMode,
            MetricDefinitions: this.__input.algorithmSpecification.metricDefinitions,
            EnableSageMakerMetricsTimeSeries: this.__input.algorithmSpecification.enableSageMakerMetricsTimeSeries,
          },
          RoleArn: this.__input.roleArn,
          InputDataConfig: this.__input.inputDataConfig,
          OutputDataConfig: {
            KmsKeyId: this.__input.outputDataConfig.kmsKeyId,
            S3OutputPath: this.__input.outputDataConfig.s3OutputPath,
          },
          ResourceConfig: {
            InstanceType: this.__input.resourceConfig.instanceType,
            InstanceCount: this.__input.resourceConfig.instanceCount,
            VolumeSizeInGB: this.__input.resourceConfig.volumeSizeInGb,
            VolumeKmsKeyId: this.__input.resourceConfig.volumeKmsKeyId,
          },
          VpcConfig: {
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            Subnets: this.__input.vpcConfig?.subnets,
          },
          StoppingCondition: {
            MaxRuntimeInSeconds: this.__input.stoppingCondition.maxRuntimeInSeconds,
            MaxWaitTimeInSeconds: this.__input.stoppingCondition.maxWaitTimeInSeconds,
          },
          Tags: this.__input.tags,
          EnableNetworkIsolation: this.__input.enableNetworkIsolation,
          EnableInterContainerTrafficEncryption: this.__input.enableInterContainerTrafficEncryption,
          EnableManagedSpotTraining: this.__input.enableManagedSpotTraining,
          CheckpointConfig: {
            S3Uri: this.__input.checkpointConfig?.s3Uri,
            LocalPath: this.__input.checkpointConfig?.localPath,
          },
          DebugHookConfig: {
            LocalPath: this.__input.debugHookConfig?.localPath,
            S3OutputPath: this.__input.debugHookConfig?.s3OutputPath,
            HookParameters: this.__input.debugHookConfig?.hookParameters,
            CollectionConfigurations: this.__input.debugHookConfig?.collectionConfigurations,
          },
          DebugRuleConfigurations: this.__input.debugRuleConfigurations,
          TensorBoardOutputConfig: {
            LocalPath: this.__input.tensorBoardOutputConfig?.localPath,
            S3OutputPath: this.__input.tensorBoardOutputConfig?.s3OutputPath,
          },
          ExperimentConfig: {
            ExperimentName: this.__input.experimentConfig?.experimentName,
            TrialName: this.__input.experimentConfig?.trialName,
            TrialComponentDisplayName: this.__input.experimentConfig?.trialComponentDisplayName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrainingJob.TrainingJobArn', props);
    return resource.getResponseField('TrainingJobArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateTransformJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateTransformJobRequest) {
  }

  public get transformJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateTransformJob.TransformJobArn'),
        outputPath: 'TransformJobArn',
        parameters: {
          TransformJobName: this.__input.transformJobName,
          ModelName: this.__input.modelName,
          MaxConcurrentTransforms: this.__input.maxConcurrentTransforms,
          ModelClientConfig: {
            InvocationsTimeoutInSeconds: this.__input.modelClientConfig?.invocationsTimeoutInSeconds,
            InvocationsMaxRetries: this.__input.modelClientConfig?.invocationsMaxRetries,
          },
          MaxPayloadInMB: this.__input.maxPayloadInMb,
          BatchStrategy: this.__input.batchStrategy,
          Environment: this.__input.environment,
          TransformInput: {
            DataSource: {
              S3DataSource: {
                S3DataType: this.__input.transformInput.dataSource.s3DataSource.s3DataType,
                S3Uri: this.__input.transformInput.dataSource.s3DataSource.s3Uri,
              },
            },
            ContentType: this.__input.transformInput.contentType,
            CompressionType: this.__input.transformInput.compressionType,
            SplitType: this.__input.transformInput.splitType,
          },
          TransformOutput: {
            S3OutputPath: this.__input.transformOutput.s3OutputPath,
            Accept: this.__input.transformOutput.accept,
            AssembleWith: this.__input.transformOutput.assembleWith,
            KmsKeyId: this.__input.transformOutput.kmsKeyId,
          },
          TransformResources: {
            InstanceType: this.__input.transformResources.instanceType,
            InstanceCount: this.__input.transformResources.instanceCount,
            VolumeKmsKeyId: this.__input.transformResources.volumeKmsKeyId,
          },
          DataProcessing: {
            InputFilter: this.__input.dataProcessing?.inputFilter,
            OutputFilter: this.__input.dataProcessing?.outputFilter,
            JoinSource: this.__input.dataProcessing?.joinSource,
          },
          Tags: this.__input.tags,
          ExperimentConfig: {
            ExperimentName: this.__input.experimentConfig?.experimentName,
            TrialName: this.__input.experimentConfig?.trialName,
            TrialComponentDisplayName: this.__input.experimentConfig?.trialComponentDisplayName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTransformJob.TransformJobArn', props);
    return resource.getResponseField('TransformJobArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateTrial {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateTrialRequest) {
  }

  public get trialArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateTrial.TrialArn'),
        outputPath: 'TrialArn',
        parameters: {
          TrialName: this.__input.trialName,
          DisplayName: this.__input.displayName,
          ExperimentName: this.__input.experimentName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrial.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateTrialComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateTrialComponentRequest) {
  }

  public get trialComponentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateTrialComponent.TrialComponentArn'),
        outputPath: 'TrialComponentArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
          DisplayName: this.__input.displayName,
          Status: {
            PrimaryStatus: this.__input.status?.primaryStatus,
            Message: this.__input.status?.message,
          },
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Parameters: this.__input.parameters,
          InputArtifacts: this.__input.inputArtifacts,
          OutputArtifacts: this.__input.outputArtifacts,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateUserProfileRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateUserProfile.UserProfileArn'),
        outputPath: 'UserProfileArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          SingleSignOnUserIdentifier: this.__input.singleSignOnUserIdentifier,
          SingleSignOnUserValue: this.__input.singleSignOnUserValue,
          Tags: this.__input.tags,
          UserSettings: {
            ExecutionRole: this.__input.userSettings?.executionRole,
            SecurityGroups: this.__input.userSettings?.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.__input.userSettings?.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.__input.userSettings?.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.__input.userSettings?.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.__input.userSettings?.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.UserProfileArn', props);
    return resource.getResponseField('UserProfileArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateWorkforce {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateWorkforceRequest) {
  }

  public get workforceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateWorkforce.WorkforceArn'),
        outputPath: 'WorkforceArn',
        parameters: {
          CognitoConfig: {
            UserPool: this.__input.cognitoConfig?.userPool,
            ClientId: this.__input.cognitoConfig?.clientId,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          WorkforceName: this.__input.workforceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkforce.WorkforceArn', props);
    return resource.getResponseField('WorkforceArn') as unknown as string;
  }

}

export class SageMakerResponsesCreateWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerCreateWorkteamRequest) {
  }

  public get workteamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.CreateWorkteam.WorkteamArn'),
        outputPath: 'WorkteamArn',
        parameters: {
          WorkteamName: this.__input.workteamName,
          WorkforceName: this.__input.workforceName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkteam.WorkteamArn', props);
    return resource.getResponseField('WorkteamArn') as unknown as string;
  }

}

export class SageMakerResponsesDeleteExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDeleteExperimentRequest) {
  }

  public get experimentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteExperiment.ExperimentArn'),
        outputPath: 'ExperimentArn',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExperiment.ExperimentArn', props);
    return resource.getResponseField('ExperimentArn') as unknown as string;
  }

}

export class SageMakerResponsesDeleteTrial {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDeleteTrialRequest) {
  }

  public get trialArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteTrial.TrialArn'),
        outputPath: 'TrialArn',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTrial.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerResponsesDeleteTrialComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDeleteTrialComponentRequest) {
  }

  public get trialComponentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteTrialComponent.TrialComponentArn'),
        outputPath: 'TrialComponentArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

}

export class SageMakerResponsesDeleteWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDeleteWorkteamRequest) {
  }

  public get success(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DeleteWorkteam.Success'),
        outputPath: 'Success',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteWorkteam.Success', props);
    return resource.getResponseField('Success') as unknown as boolean;
  }

}

export class SageMakerResponsesDescribeAlgorithm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAlgorithmInput) {
  }

  public get algorithmName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.AlgorithmName'),
        outputPath: 'AlgorithmName',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.AlgorithmName', props);
    return resource.getResponseField('AlgorithmName') as unknown as string;
  }

  public get algorithmArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.AlgorithmArn'),
        outputPath: 'AlgorithmArn',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.AlgorithmArn', props);
    return resource.getResponseField('AlgorithmArn') as unknown as string;
  }

  public get algorithmDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.AlgorithmDescription'),
        outputPath: 'AlgorithmDescription',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.AlgorithmDescription', props);
    return resource.getResponseField('AlgorithmDescription') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get trainingSpecification(): SageMakerResponsesDescribeAlgorithmTrainingSpecification {
    return new SageMakerResponsesDescribeAlgorithmTrainingSpecification(this.__scope, this.__resources, this.__input);
  }

  public get inferenceSpecification(): SageMakerResponsesDescribeAlgorithmInferenceSpecification {
    return new SageMakerResponsesDescribeAlgorithmInferenceSpecification(this.__scope, this.__resources, this.__input);
  }

  public get validationSpecification(): SageMakerResponsesDescribeAlgorithmValidationSpecification {
    return new SageMakerResponsesDescribeAlgorithmValidationSpecification(this.__scope, this.__resources, this.__input);
  }

  public get algorithmStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.AlgorithmStatus'),
        outputPath: 'AlgorithmStatus',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.AlgorithmStatus', props);
    return resource.getResponseField('AlgorithmStatus') as unknown as string;
  }

  public get algorithmStatusDetails(): SageMakerResponsesDescribeAlgorithmAlgorithmStatusDetails {
    return new SageMakerResponsesDescribeAlgorithmAlgorithmStatusDetails(this.__scope, this.__resources, this.__input);
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.ProductId'),
        outputPath: 'ProductId',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.ProductId', props);
    return resource.getResponseField('ProductId') as unknown as string;
  }

  public get certifyForMarketplace(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.CertifyForMarketplace'),
        outputPath: 'CertifyForMarketplace',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.CertifyForMarketplace', props);
    return resource.getResponseField('CertifyForMarketplace') as unknown as boolean;
  }

}

export class SageMakerResponsesDescribeAlgorithmTrainingSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAlgorithmInput) {
  }

  public get trainingImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.TrainingImage'),
        outputPath: 'TrainingSpecification.TrainingImage',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.TrainingImage', props);
    return resource.getResponseField('TrainingSpecification.TrainingImage') as unknown as string;
  }

  public get trainingImageDigest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.TrainingImageDigest'),
        outputPath: 'TrainingSpecification.TrainingImageDigest',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.TrainingImageDigest', props);
    return resource.getResponseField('TrainingSpecification.TrainingImageDigest') as unknown as string;
  }

  public get supportedHyperParameters(): shapes.SageMakerHyperParameterSpecification[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.SupportedHyperParameters'),
        outputPath: 'TrainingSpecification.SupportedHyperParameters',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.SupportedHyperParameters', props);
    return resource.getResponseField('TrainingSpecification.SupportedHyperParameters') as unknown as shapes.SageMakerHyperParameterSpecification[];
  }

  public get supportedTrainingInstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.SupportedTrainingInstanceTypes'),
        outputPath: 'TrainingSpecification.SupportedTrainingInstanceTypes',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.SupportedTrainingInstanceTypes', props);
    return resource.getResponseField('TrainingSpecification.SupportedTrainingInstanceTypes') as unknown as string[];
  }

  public get supportsDistributedTraining(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.SupportsDistributedTraining'),
        outputPath: 'TrainingSpecification.SupportsDistributedTraining',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.SupportsDistributedTraining', props);
    return resource.getResponseField('TrainingSpecification.SupportsDistributedTraining') as unknown as boolean;
  }

  public get metricDefinitions(): shapes.SageMakerMetricDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.MetricDefinitions'),
        outputPath: 'TrainingSpecification.MetricDefinitions',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.MetricDefinitions', props);
    return resource.getResponseField('TrainingSpecification.MetricDefinitions') as unknown as shapes.SageMakerMetricDefinition[];
  }

  public get trainingChannels(): shapes.SageMakerChannelSpecification[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.TrainingChannels'),
        outputPath: 'TrainingSpecification.TrainingChannels',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.TrainingChannels', props);
    return resource.getResponseField('TrainingSpecification.TrainingChannels') as unknown as shapes.SageMakerChannelSpecification[];
  }

  public get supportedTuningJobObjectiveMetrics(): shapes.SageMakerHyperParameterTuningJobObjective[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.TrainingSpecification.SupportedTuningJobObjectiveMetrics'),
        outputPath: 'TrainingSpecification.SupportedTuningJobObjectiveMetrics',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.TrainingSpecification.SupportedTuningJobObjectiveMetrics', props);
    return resource.getResponseField('TrainingSpecification.SupportedTuningJobObjectiveMetrics') as unknown as shapes.SageMakerHyperParameterTuningJobObjective[];
  }

}

export class SageMakerResponsesDescribeAlgorithmInferenceSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAlgorithmInput) {
  }

  public get containers(): shapes.SageMakerModelPackageContainerDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.InferenceSpecification.Containers'),
        outputPath: 'InferenceSpecification.Containers',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.InferenceSpecification.Containers', props);
    return resource.getResponseField('InferenceSpecification.Containers') as unknown as shapes.SageMakerModelPackageContainerDefinition[];
  }

  public get supportedTransformInstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.InferenceSpecification.SupportedTransformInstanceTypes'),
        outputPath: 'InferenceSpecification.SupportedTransformInstanceTypes',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.InferenceSpecification.SupportedTransformInstanceTypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedTransformInstanceTypes') as unknown as string[];
  }

  public get supportedRealtimeInferenceInstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.InferenceSpecification.SupportedRealtimeInferenceInstanceTypes'),
        outputPath: 'InferenceSpecification.SupportedRealtimeInferenceInstanceTypes',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.InferenceSpecification.SupportedRealtimeInferenceInstanceTypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedRealtimeInferenceInstanceTypes') as unknown as string[];
  }

  public get supportedContentTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.InferenceSpecification.SupportedContentTypes'),
        outputPath: 'InferenceSpecification.SupportedContentTypes',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.InferenceSpecification.SupportedContentTypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedContentTypes') as unknown as string[];
  }

  public get supportedResponseMimeTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.InferenceSpecification.SupportedResponseMIMETypes'),
        outputPath: 'InferenceSpecification.SupportedResponseMIMETypes',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.InferenceSpecification.SupportedResponseMIMETypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedResponseMIMETypes') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeAlgorithmValidationSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAlgorithmInput) {
  }

  public get validationRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.ValidationSpecification.ValidationRole'),
        outputPath: 'ValidationSpecification.ValidationRole',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.ValidationSpecification.ValidationRole', props);
    return resource.getResponseField('ValidationSpecification.ValidationRole') as unknown as string;
  }

  public get validationProfiles(): shapes.SageMakerAlgorithmValidationProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.ValidationSpecification.ValidationProfiles'),
        outputPath: 'ValidationSpecification.ValidationProfiles',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.ValidationSpecification.ValidationProfiles', props);
    return resource.getResponseField('ValidationSpecification.ValidationProfiles') as unknown as shapes.SageMakerAlgorithmValidationProfile[];
  }

}

export class SageMakerResponsesDescribeAlgorithmAlgorithmStatusDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAlgorithmInput) {
  }

  public get validationStatuses(): shapes.SageMakerAlgorithmStatusItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.AlgorithmStatusDetails.ValidationStatuses'),
        outputPath: 'AlgorithmStatusDetails.ValidationStatuses',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.AlgorithmStatusDetails.ValidationStatuses', props);
    return resource.getResponseField('AlgorithmStatusDetails.ValidationStatuses') as unknown as shapes.SageMakerAlgorithmStatusItem[];
  }

  public get imageScanStatuses(): shapes.SageMakerAlgorithmStatusItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAlgorithm',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAlgorithm.AlgorithmStatusDetails.ImageScanStatuses'),
        outputPath: 'AlgorithmStatusDetails.ImageScanStatuses',
        parameters: {
          AlgorithmName: this.__input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAlgorithm.AlgorithmStatusDetails.ImageScanStatuses', props);
    return resource.getResponseField('AlgorithmStatusDetails.ImageScanStatuses') as unknown as shapes.SageMakerAlgorithmStatusItem[];
  }

}

export class SageMakerResponsesDescribeApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAppRequest) {
  }

  public get appArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.AppArn'),
        outputPath: 'AppArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.AppArn', props);
    return resource.getResponseField('AppArn') as unknown as string;
  }

  public get appType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.AppType'),
        outputPath: 'AppType',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.AppType', props);
    return resource.getResponseField('AppType') as unknown as string;
  }

  public get appName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.AppName'),
        outputPath: 'AppName',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.AppName', props);
    return resource.getResponseField('AppName') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.DomainId'),
        outputPath: 'DomainId',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.DomainId', props);
    return resource.getResponseField('DomainId') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.UserProfileName'),
        outputPath: 'UserProfileName',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.UserProfileName', props);
    return resource.getResponseField('UserProfileName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.Status'),
        outputPath: 'Status',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get lastHealthCheckTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.LastHealthCheckTimestamp'),
        outputPath: 'LastHealthCheckTimestamp',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.LastHealthCheckTimestamp', props);
    return resource.getResponseField('LastHealthCheckTimestamp') as unknown as string;
  }

  public get lastUserActivityTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.LastUserActivityTimestamp'),
        outputPath: 'LastUserActivityTimestamp',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.LastUserActivityTimestamp', props);
    return resource.getResponseField('LastUserActivityTimestamp') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get resourceSpec(): SageMakerResponsesDescribeAppResourceSpec {
    return new SageMakerResponsesDescribeAppResourceSpec(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeAppResourceSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAppRequest) {
  }

  public get sageMakerImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.ResourceSpec.SageMakerImageArn'),
        outputPath: 'ResourceSpec.SageMakerImageArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.ResourceSpec.SageMakerImageArn', props);
    return resource.getResponseField('ResourceSpec.SageMakerImageArn') as unknown as string;
  }

  public get sageMakerImageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.ResourceSpec.SageMakerImageVersionArn'),
        outputPath: 'ResourceSpec.SageMakerImageVersionArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.ResourceSpec.SageMakerImageVersionArn', props);
    return resource.getResponseField('ResourceSpec.SageMakerImageVersionArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApp',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeApp.ResourceSpec.InstanceType'),
        outputPath: 'ResourceSpec.InstanceType',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          AppType: this.__input.appType,
          AppName: this.__input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApp.ResourceSpec.InstanceType', props);
    return resource.getResponseField('ResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeAppImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAppImageConfigRequest) {
  }

  public get appImageConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.AppImageConfigArn'),
        outputPath: 'AppImageConfigArn',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.AppImageConfigArn', props);
    return resource.getResponseField('AppImageConfigArn') as unknown as string;
  }

  public get appImageConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.AppImageConfigName'),
        outputPath: 'AppImageConfigName',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.AppImageConfigName', props);
    return resource.getResponseField('AppImageConfigName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get kernelGatewayImageConfig(): SageMakerResponsesDescribeAppImageConfigKernelGatewayImageConfig {
    return new SageMakerResponsesDescribeAppImageConfigKernelGatewayImageConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeAppImageConfigKernelGatewayImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAppImageConfigRequest) {
  }

  public get kernelSpecs(): shapes.SageMakerKernelSpec[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.KernelGatewayImageConfig.KernelSpecs'),
        outputPath: 'KernelGatewayImageConfig.KernelSpecs',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.KernelGatewayImageConfig.KernelSpecs', props);
    return resource.getResponseField('KernelGatewayImageConfig.KernelSpecs') as unknown as shapes.SageMakerKernelSpec[];
  }

  public get fileSystemConfig(): SageMakerResponsesDescribeAppImageConfigKernelGatewayImageConfigFileSystemConfig {
    return new SageMakerResponsesDescribeAppImageConfigKernelGatewayImageConfigFileSystemConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeAppImageConfigKernelGatewayImageConfigFileSystemConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAppImageConfigRequest) {
  }

  public get mountPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.MountPath'),
        outputPath: 'KernelGatewayImageConfig.FileSystemConfig.MountPath',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.MountPath', props);
    return resource.getResponseField('KernelGatewayImageConfig.FileSystemConfig.MountPath') as unknown as string;
  }

  public get defaultUid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.DefaultUid'),
        outputPath: 'KernelGatewayImageConfig.FileSystemConfig.DefaultUid',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.DefaultUid', props);
    return resource.getResponseField('KernelGatewayImageConfig.FileSystemConfig.DefaultUid') as unknown as number;
  }

  public get defaultGid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.DefaultGid'),
        outputPath: 'KernelGatewayImageConfig.FileSystemConfig.DefaultGid',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.DefaultGid', props);
    return resource.getResponseField('KernelGatewayImageConfig.FileSystemConfig.DefaultGid') as unknown as number;
  }

}

export class SageMakerResponsesDescribeAutoMlJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get autoMlJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobName'),
        outputPath: 'AutoMLJobName',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobName', props);
    return resource.getResponseField('AutoMLJobName') as unknown as string;
  }

  public get autoMlJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobArn'),
        outputPath: 'AutoMLJobArn',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

  public get inputDataConfig(): shapes.SageMakerAutoMlChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.InputDataConfig'),
        outputPath: 'InputDataConfig',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.InputDataConfig', props);
    return resource.getResponseField('InputDataConfig') as unknown as shapes.SageMakerAutoMlChannel[];
  }

  public get outputDataConfig(): SageMakerResponsesDescribeAutoMlJobOutputDataConfig {
    return new SageMakerResponsesDescribeAutoMlJobOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get autoMlJobObjective(): SageMakerResponsesDescribeAutoMlJobAutoMlJobObjective {
    return new SageMakerResponsesDescribeAutoMlJobAutoMlJobObjective(this.__scope, this.__resources, this.__input);
  }

  public get problemType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.ProblemType'),
        outputPath: 'ProblemType',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.ProblemType', props);
    return resource.getResponseField('ProblemType') as unknown as string;
  }

  public get autoMlJobConfig(): SageMakerResponsesDescribeAutoMlJobAutoMlJobConfig {
    return new SageMakerResponsesDescribeAutoMlJobAutoMlJobConfig(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get bestCandidate(): SageMakerResponsesDescribeAutoMlJobBestCandidate {
    return new SageMakerResponsesDescribeAutoMlJobBestCandidate(this.__scope, this.__resources, this.__input);
  }

  public get autoMlJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobStatus'),
        outputPath: 'AutoMLJobStatus',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobStatus', props);
    return resource.getResponseField('AutoMLJobStatus') as unknown as string;
  }

  public get autoMlJobSecondaryStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobSecondaryStatus'),
        outputPath: 'AutoMLJobSecondaryStatus',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobSecondaryStatus', props);
    return resource.getResponseField('AutoMLJobSecondaryStatus') as unknown as string;
  }

  public get generateCandidateDefinitionsOnly(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.GenerateCandidateDefinitionsOnly'),
        outputPath: 'GenerateCandidateDefinitionsOnly',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.GenerateCandidateDefinitionsOnly', props);
    return resource.getResponseField('GenerateCandidateDefinitionsOnly') as unknown as boolean;
  }

  public get autoMlJobArtifacts(): SageMakerResponsesDescribeAutoMlJobAutoMlJobArtifacts {
    return new SageMakerResponsesDescribeAutoMlJobAutoMlJobArtifacts(this.__scope, this.__resources, this.__input);
  }

  public get resolvedAttributes(): SageMakerResponsesDescribeAutoMlJobResolvedAttributes {
    return new SageMakerResponsesDescribeAutoMlJobResolvedAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeAutoMlJobOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.OutputDataConfig.KmsKeyId'),
        outputPath: 'OutputDataConfig.KmsKeyId',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('OutputDataConfig.KmsKeyId') as unknown as string;
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.OutputDataConfig.S3OutputPath'),
        outputPath: 'OutputDataConfig.S3OutputPath',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.OutputDataConfig.S3OutputPath', props);
    return resource.getResponseField('OutputDataConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerResponsesDescribeAutoMlJobAutoMlJobObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobObjective.MetricName'),
        outputPath: 'AutoMLJobObjective.MetricName',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobObjective.MetricName', props);
    return resource.getResponseField('AutoMLJobObjective.MetricName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeAutoMlJobAutoMlJobConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get completionCriteria(): SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigCompletionCriteria {
    return new SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigCompletionCriteria(this.__scope, this.__resources, this.__input);
  }

  public get securityConfig(): SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigSecurityConfig {
    return new SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigSecurityConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigCompletionCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get maxCandidates(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxCandidates'),
        outputPath: 'AutoMLJobConfig.CompletionCriteria.MaxCandidates',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxCandidates', props);
    return resource.getResponseField('AutoMLJobConfig.CompletionCriteria.MaxCandidates') as unknown as number;
  }

  public get maxRuntimePerTrainingJobInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds'),
        outputPath: 'AutoMLJobConfig.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds', props);
    return resource.getResponseField('AutoMLJobConfig.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds') as unknown as number;
  }

  public get maxAutoMlJobRuntimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds'),
        outputPath: 'AutoMLJobConfig.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds', props);
    return resource.getResponseField('AutoMLJobConfig.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigSecurityConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VolumeKmsKeyId'),
        outputPath: 'AutoMLJobConfig.SecurityConfig.VolumeKmsKeyId',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('AutoMLJobConfig.SecurityConfig.VolumeKmsKeyId') as unknown as string;
  }

  public get enableInterContainerTrafficEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.EnableInterContainerTrafficEncryption'),
        outputPath: 'AutoMLJobConfig.SecurityConfig.EnableInterContainerTrafficEncryption',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.EnableInterContainerTrafficEncryption', props);
    return resource.getResponseField('AutoMLJobConfig.SecurityConfig.EnableInterContainerTrafficEncryption') as unknown as boolean;
  }

  public get vpcConfig(): SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigSecurityConfigVpcConfig {
    return new SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigSecurityConfigVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeAutoMlJobAutoMlJobConfigSecurityConfigVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VpcConfig.SecurityGroupIds'),
        outputPath: 'AutoMLJobConfig.SecurityConfig.VpcConfig.SecurityGroupIds',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('AutoMLJobConfig.SecurityConfig.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VpcConfig.Subnets'),
        outputPath: 'AutoMLJobConfig.SecurityConfig.VpcConfig.Subnets',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VpcConfig.Subnets', props);
    return resource.getResponseField('AutoMLJobConfig.SecurityConfig.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeAutoMlJobBestCandidate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get candidateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.CandidateName'),
        outputPath: 'BestCandidate.CandidateName',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.CandidateName', props);
    return resource.getResponseField('BestCandidate.CandidateName') as unknown as string;
  }

  public get finalAutoMlJobObjectiveMetric(): SageMakerResponsesDescribeAutoMlJobBestCandidateFinalAutoMlJobObjectiveMetric {
    return new SageMakerResponsesDescribeAutoMlJobBestCandidateFinalAutoMlJobObjectiveMetric(this.__scope, this.__resources, this.__input);
  }

  public get objectiveStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.ObjectiveStatus'),
        outputPath: 'BestCandidate.ObjectiveStatus',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.ObjectiveStatus', props);
    return resource.getResponseField('BestCandidate.ObjectiveStatus') as unknown as string;
  }

  public get candidateSteps(): shapes.SageMakerAutoMlCandidateStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.CandidateSteps'),
        outputPath: 'BestCandidate.CandidateSteps',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.CandidateSteps', props);
    return resource.getResponseField('BestCandidate.CandidateSteps') as unknown as shapes.SageMakerAutoMlCandidateStep[];
  }

  public get candidateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.CandidateStatus'),
        outputPath: 'BestCandidate.CandidateStatus',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.CandidateStatus', props);
    return resource.getResponseField('BestCandidate.CandidateStatus') as unknown as string;
  }

  public get inferenceContainers(): shapes.SageMakerAutoMlContainerDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.InferenceContainers'),
        outputPath: 'BestCandidate.InferenceContainers',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.InferenceContainers', props);
    return resource.getResponseField('BestCandidate.InferenceContainers') as unknown as shapes.SageMakerAutoMlContainerDefinition[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.CreationTime'),
        outputPath: 'BestCandidate.CreationTime',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.CreationTime', props);
    return resource.getResponseField('BestCandidate.CreationTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.EndTime'),
        outputPath: 'BestCandidate.EndTime',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.EndTime', props);
    return resource.getResponseField('BestCandidate.EndTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.LastModifiedTime'),
        outputPath: 'BestCandidate.LastModifiedTime',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.LastModifiedTime', props);
    return resource.getResponseField('BestCandidate.LastModifiedTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.FailureReason'),
        outputPath: 'BestCandidate.FailureReason',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.FailureReason', props);
    return resource.getResponseField('BestCandidate.FailureReason') as unknown as string;
  }

}

export class SageMakerResponsesDescribeAutoMlJobBestCandidateFinalAutoMlJobObjectiveMetric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.Type'),
        outputPath: 'BestCandidate.FinalAutoMLJobObjectiveMetric.Type',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.Type', props);
    return resource.getResponseField('BestCandidate.FinalAutoMLJobObjectiveMetric.Type') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.MetricName'),
        outputPath: 'BestCandidate.FinalAutoMLJobObjectiveMetric.MetricName',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.MetricName', props);
    return resource.getResponseField('BestCandidate.FinalAutoMLJobObjectiveMetric.MetricName') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.Value'),
        outputPath: 'BestCandidate.FinalAutoMLJobObjectiveMetric.Value',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.Value', props);
    return resource.getResponseField('BestCandidate.FinalAutoMLJobObjectiveMetric.Value') as unknown as number;
  }

}

export class SageMakerResponsesDescribeAutoMlJobAutoMlJobArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get candidateDefinitionNotebookLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobArtifacts.CandidateDefinitionNotebookLocation'),
        outputPath: 'AutoMLJobArtifacts.CandidateDefinitionNotebookLocation',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobArtifacts.CandidateDefinitionNotebookLocation', props);
    return resource.getResponseField('AutoMLJobArtifacts.CandidateDefinitionNotebookLocation') as unknown as string;
  }

  public get dataExplorationNotebookLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.AutoMLJobArtifacts.DataExplorationNotebookLocation'),
        outputPath: 'AutoMLJobArtifacts.DataExplorationNotebookLocation',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.AutoMLJobArtifacts.DataExplorationNotebookLocation', props);
    return resource.getResponseField('AutoMLJobArtifacts.DataExplorationNotebookLocation') as unknown as string;
  }

}

export class SageMakerResponsesDescribeAutoMlJobResolvedAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get autoMlJobObjective(): SageMakerResponsesDescribeAutoMlJobResolvedAttributesAutoMlJobObjective {
    return new SageMakerResponsesDescribeAutoMlJobResolvedAttributesAutoMlJobObjective(this.__scope, this.__resources, this.__input);
  }

  public get problemType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.ResolvedAttributes.ProblemType'),
        outputPath: 'ResolvedAttributes.ProblemType',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.ResolvedAttributes.ProblemType', props);
    return resource.getResponseField('ResolvedAttributes.ProblemType') as unknown as string;
  }

  public get completionCriteria(): SageMakerResponsesDescribeAutoMlJobResolvedAttributesCompletionCriteria {
    return new SageMakerResponsesDescribeAutoMlJobResolvedAttributesCompletionCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeAutoMlJobResolvedAttributesAutoMlJobObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.ResolvedAttributes.AutoMLJobObjective.MetricName'),
        outputPath: 'ResolvedAttributes.AutoMLJobObjective.MetricName',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.ResolvedAttributes.AutoMLJobObjective.MetricName', props);
    return resource.getResponseField('ResolvedAttributes.AutoMLJobObjective.MetricName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeAutoMlJobResolvedAttributesCompletionCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeAutoMlJobRequest) {
  }

  public get maxCandidates(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxCandidates'),
        outputPath: 'ResolvedAttributes.CompletionCriteria.MaxCandidates',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxCandidates', props);
    return resource.getResponseField('ResolvedAttributes.CompletionCriteria.MaxCandidates') as unknown as number;
  }

  public get maxRuntimePerTrainingJobInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds'),
        outputPath: 'ResolvedAttributes.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds', props);
    return resource.getResponseField('ResolvedAttributes.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds') as unknown as number;
  }

  public get maxAutoMlJobRuntimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds'),
        outputPath: 'ResolvedAttributes.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds', props);
    return resource.getResponseField('ResolvedAttributes.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerResponsesDescribeCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCodeRepositoryInput) {
  }

  public get codeRepositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCodeRepository.CodeRepositoryName'),
        outputPath: 'CodeRepositoryName',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeRepository.CodeRepositoryName', props);
    return resource.getResponseField('CodeRepositoryName') as unknown as string;
  }

  public get codeRepositoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCodeRepository.CodeRepositoryArn'),
        outputPath: 'CodeRepositoryArn',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeRepository.CodeRepositoryArn', props);
    return resource.getResponseField('CodeRepositoryArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCodeRepository.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeRepository.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCodeRepository.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeRepository.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get gitConfig(): SageMakerResponsesDescribeCodeRepositoryGitConfig {
    return new SageMakerResponsesDescribeCodeRepositoryGitConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeCodeRepositoryGitConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCodeRepositoryInput) {
  }

  public get repositoryUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCodeRepository.GitConfig.RepositoryUrl'),
        outputPath: 'GitConfig.RepositoryUrl',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeRepository.GitConfig.RepositoryUrl', props);
    return resource.getResponseField('GitConfig.RepositoryUrl') as unknown as string;
  }

  public get branch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCodeRepository.GitConfig.Branch'),
        outputPath: 'GitConfig.Branch',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeRepository.GitConfig.Branch', props);
    return resource.getResponseField('GitConfig.Branch') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCodeRepository.GitConfig.SecretArn'),
        outputPath: 'GitConfig.SecretArn',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeRepository.GitConfig.SecretArn', props);
    return resource.getResponseField('GitConfig.SecretArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeCompilationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCompilationJobRequest) {
  }

  public get compilationJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.CompilationJobName'),
        outputPath: 'CompilationJobName',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.CompilationJobName', props);
    return resource.getResponseField('CompilationJobName') as unknown as string;
  }

  public get compilationJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.CompilationJobArn'),
        outputPath: 'CompilationJobArn',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.CompilationJobArn', props);
    return resource.getResponseField('CompilationJobArn') as unknown as string;
  }

  public get compilationJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.CompilationJobStatus'),
        outputPath: 'CompilationJobStatus',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.CompilationJobStatus', props);
    return resource.getResponseField('CompilationJobStatus') as unknown as string;
  }

  public get compilationStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.CompilationStartTime'),
        outputPath: 'CompilationStartTime',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.CompilationStartTime', props);
    return resource.getResponseField('CompilationStartTime') as unknown as string;
  }

  public get compilationEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.CompilationEndTime'),
        outputPath: 'CompilationEndTime',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.CompilationEndTime', props);
    return resource.getResponseField('CompilationEndTime') as unknown as string;
  }

  public get stoppingCondition(): SageMakerResponsesDescribeCompilationJobStoppingCondition {
    return new SageMakerResponsesDescribeCompilationJobStoppingCondition(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get modelArtifacts(): SageMakerResponsesDescribeCompilationJobModelArtifacts {
    return new SageMakerResponsesDescribeCompilationJobModelArtifacts(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get inputConfig(): SageMakerResponsesDescribeCompilationJobInputConfig {
    return new SageMakerResponsesDescribeCompilationJobInputConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputConfig(): SageMakerResponsesDescribeCompilationJobOutputConfig {
    return new SageMakerResponsesDescribeCompilationJobOutputConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeCompilationJobStoppingCondition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCompilationJobRequest) {
  }

  public get maxRuntimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.StoppingCondition.MaxRuntimeInSeconds'),
        outputPath: 'StoppingCondition.MaxRuntimeInSeconds',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.StoppingCondition.MaxRuntimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxRuntimeInSeconds') as unknown as number;
  }

  public get maxWaitTimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.StoppingCondition.MaxWaitTimeInSeconds'),
        outputPath: 'StoppingCondition.MaxWaitTimeInSeconds',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.StoppingCondition.MaxWaitTimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxWaitTimeInSeconds') as unknown as number;
  }

}

export class SageMakerResponsesDescribeCompilationJobModelArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCompilationJobRequest) {
  }

  public get s3ModelArtifacts(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.ModelArtifacts.S3ModelArtifacts'),
        outputPath: 'ModelArtifacts.S3ModelArtifacts',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.ModelArtifacts.S3ModelArtifacts', props);
    return resource.getResponseField('ModelArtifacts.S3ModelArtifacts') as unknown as string;
  }

}

export class SageMakerResponsesDescribeCompilationJobInputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCompilationJobRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.InputConfig.S3Uri'),
        outputPath: 'InputConfig.S3Uri',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.InputConfig.S3Uri', props);
    return resource.getResponseField('InputConfig.S3Uri') as unknown as string;
  }

  public get dataInputConfig(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.InputConfig.DataInputConfig'),
        outputPath: 'InputConfig.DataInputConfig',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.InputConfig.DataInputConfig', props);
    return resource.getResponseField('InputConfig.DataInputConfig') as unknown as string;
  }

  public get framework(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.InputConfig.Framework'),
        outputPath: 'InputConfig.Framework',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.InputConfig.Framework', props);
    return resource.getResponseField('InputConfig.Framework') as unknown as string;
  }

}

export class SageMakerResponsesDescribeCompilationJobOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCompilationJobRequest) {
  }

  public get s3OutputLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.OutputConfig.S3OutputLocation'),
        outputPath: 'OutputConfig.S3OutputLocation',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.OutputConfig.S3OutputLocation', props);
    return resource.getResponseField('OutputConfig.S3OutputLocation') as unknown as string;
  }

  public get targetDevice(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.OutputConfig.TargetDevice'),
        outputPath: 'OutputConfig.TargetDevice',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.OutputConfig.TargetDevice', props);
    return resource.getResponseField('OutputConfig.TargetDevice') as unknown as string;
  }

  public get targetPlatform(): SageMakerResponsesDescribeCompilationJobOutputConfigTargetPlatform {
    return new SageMakerResponsesDescribeCompilationJobOutputConfigTargetPlatform(this.__scope, this.__resources, this.__input);
  }

  public get compilerOptions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.OutputConfig.CompilerOptions'),
        outputPath: 'OutputConfig.CompilerOptions',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.OutputConfig.CompilerOptions', props);
    return resource.getResponseField('OutputConfig.CompilerOptions') as unknown as string;
  }

}

export class SageMakerResponsesDescribeCompilationJobOutputConfigTargetPlatform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeCompilationJobRequest) {
  }

  public get os(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.OutputConfig.TargetPlatform.Os'),
        outputPath: 'OutputConfig.TargetPlatform.Os',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.OutputConfig.TargetPlatform.Os', props);
    return resource.getResponseField('OutputConfig.TargetPlatform.Os') as unknown as string;
  }

  public get arch(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.OutputConfig.TargetPlatform.Arch'),
        outputPath: 'OutputConfig.TargetPlatform.Arch',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.OutputConfig.TargetPlatform.Arch', props);
    return resource.getResponseField('OutputConfig.TargetPlatform.Arch') as unknown as string;
  }

  public get accelerator(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompilationJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeCompilationJob.OutputConfig.TargetPlatform.Accelerator'),
        outputPath: 'OutputConfig.TargetPlatform.Accelerator',
        parameters: {
          CompilationJobName: this.__input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompilationJob.OutputConfig.TargetPlatform.Accelerator', props);
    return resource.getResponseField('OutputConfig.TargetPlatform.Accelerator') as unknown as string;
  }

}

export class SageMakerResponsesDescribeDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get domainArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DomainArn'),
        outputPath: 'DomainArn',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DomainArn', props);
    return resource.getResponseField('DomainArn') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DomainId'),
        outputPath: 'DomainId',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DomainId', props);
    return resource.getResponseField('DomainId') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get homeEfsFileSystemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.HomeEfsFileSystemId'),
        outputPath: 'HomeEfsFileSystemId',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.HomeEfsFileSystemId', props);
    return resource.getResponseField('HomeEfsFileSystemId') as unknown as string;
  }

  public get singleSignOnManagedApplicationInstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.SingleSignOnManagedApplicationInstanceId'),
        outputPath: 'SingleSignOnManagedApplicationInstanceId',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.SingleSignOnManagedApplicationInstanceId', props);
    return resource.getResponseField('SingleSignOnManagedApplicationInstanceId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.Status'),
        outputPath: 'Status',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get authMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.AuthMode'),
        outputPath: 'AuthMode',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.AuthMode', props);
    return resource.getResponseField('AuthMode') as unknown as string;
  }

  public get defaultUserSettings(): SageMakerResponsesDescribeDomainDefaultUserSettings {
    return new SageMakerResponsesDescribeDomainDefaultUserSettings(this.__scope, this.__resources, this.__input);
  }

  public get appNetworkAccessType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.AppNetworkAccessType'),
        outputPath: 'AppNetworkAccessType',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.AppNetworkAccessType', props);
    return resource.getResponseField('AppNetworkAccessType') as unknown as string;
  }

  public get homeEfsFileSystemKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.HomeEfsFileSystemKmsKeyId'),
        outputPath: 'HomeEfsFileSystemKmsKeyId',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.HomeEfsFileSystemKmsKeyId', props);
    return resource.getResponseField('HomeEfsFileSystemKmsKeyId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.SubnetIds'),
        outputPath: 'SubnetIds',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.SubnetIds', props);
    return resource.getResponseField('SubnetIds') as unknown as string[];
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.Url'),
        outputPath: 'Url',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.VpcId'),
        outputPath: 'VpcId',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.VpcId', props);
    return resource.getResponseField('VpcId') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get executionRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.ExecutionRole'),
        outputPath: 'DefaultUserSettings.ExecutionRole',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.ExecutionRole', props);
    return resource.getResponseField('DefaultUserSettings.ExecutionRole') as unknown as string;
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.SecurityGroups'),
        outputPath: 'DefaultUserSettings.SecurityGroups',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.SecurityGroups', props);
    return resource.getResponseField('DefaultUserSettings.SecurityGroups') as unknown as string[];
  }

  public get sharingSettings(): SageMakerResponsesDescribeDomainDefaultUserSettingsSharingSettings {
    return new SageMakerResponsesDescribeDomainDefaultUserSettingsSharingSettings(this.__scope, this.__resources, this.__input);
  }

  public get jupyterServerAppSettings(): SageMakerResponsesDescribeDomainDefaultUserSettingsJupyterServerAppSettings {
    return new SageMakerResponsesDescribeDomainDefaultUserSettingsJupyterServerAppSettings(this.__scope, this.__resources, this.__input);
  }

  public get kernelGatewayAppSettings(): SageMakerResponsesDescribeDomainDefaultUserSettingsKernelGatewayAppSettings {
    return new SageMakerResponsesDescribeDomainDefaultUserSettingsKernelGatewayAppSettings(this.__scope, this.__resources, this.__input);
  }

  public get tensorBoardAppSettings(): SageMakerResponsesDescribeDomainDefaultUserSettingsTensorBoardAppSettings {
    return new SageMakerResponsesDescribeDomainDefaultUserSettingsTensorBoardAppSettings(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettingsSharingSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get notebookOutputOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.SharingSettings.NotebookOutputOption'),
        outputPath: 'DefaultUserSettings.SharingSettings.NotebookOutputOption',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.SharingSettings.NotebookOutputOption', props);
    return resource.getResponseField('DefaultUserSettings.SharingSettings.NotebookOutputOption') as unknown as string;
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.SharingSettings.S3OutputPath'),
        outputPath: 'DefaultUserSettings.SharingSettings.S3OutputPath',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.SharingSettings.S3OutputPath', props);
    return resource.getResponseField('DefaultUserSettings.SharingSettings.S3OutputPath') as unknown as string;
  }

  public get s3KmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.SharingSettings.S3KmsKeyId'),
        outputPath: 'DefaultUserSettings.SharingSettings.S3KmsKeyId',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.SharingSettings.S3KmsKeyId', props);
    return resource.getResponseField('DefaultUserSettings.SharingSettings.S3KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettingsJupyterServerAppSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get defaultResourceSpec(): SageMakerResponsesDescribeDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    return new SageMakerResponsesDescribeDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get sageMakerImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn'),
        outputPath: 'DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
    return resource.getResponseField('DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn') as unknown as string;
  }

  public get sageMakerImageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn'),
        outputPath: 'DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
    return resource.getResponseField('DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType'),
        outputPath: 'DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettingsKernelGatewayAppSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get defaultResourceSpec(): SageMakerResponsesDescribeDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    return new SageMakerResponsesDescribeDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(this.__scope, this.__resources, this.__input);
  }

  public get customImages(): shapes.SageMakerCustomImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.CustomImages'),
        outputPath: 'DefaultUserSettings.KernelGatewayAppSettings.CustomImages',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.CustomImages', props);
    return resource.getResponseField('DefaultUserSettings.KernelGatewayAppSettings.CustomImages') as unknown as shapes.SageMakerCustomImage[];
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get sageMakerImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn'),
        outputPath: 'DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
    return resource.getResponseField('DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn') as unknown as string;
  }

  public get sageMakerImageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn'),
        outputPath: 'DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
    return resource.getResponseField('DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType'),
        outputPath: 'DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettingsTensorBoardAppSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get defaultResourceSpec(): SageMakerResponsesDescribeDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    return new SageMakerResponsesDescribeDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeDomainRequest) {
  }

  public get sageMakerImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn'),
        outputPath: 'DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
    return resource.getResponseField('DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn') as unknown as string;
  }

  public get sageMakerImageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn'),
        outputPath: 'DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
    return resource.getResponseField('DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType'),
        outputPath: 'DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType',
        parameters: {
          DomainId: this.__input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeEndpointInput) {
  }

  public get endpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.EndpointName'),
        outputPath: 'EndpointName',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointName', props);
    return resource.getResponseField('EndpointName') as unknown as string;
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.EndpointArn'),
        outputPath: 'EndpointArn',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

  public get endpointConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.EndpointConfigName'),
        outputPath: 'EndpointConfigName',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointConfigName', props);
    return resource.getResponseField('EndpointConfigName') as unknown as string;
  }

  public get productionVariants(): shapes.SageMakerProductionVariantSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.ProductionVariants'),
        outputPath: 'ProductionVariants',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.ProductionVariants', props);
    return resource.getResponseField('ProductionVariants') as unknown as shapes.SageMakerProductionVariantSummary[];
  }

  public get dataCaptureConfig(): SageMakerResponsesDescribeEndpointDataCaptureConfig {
    return new SageMakerResponsesDescribeEndpointDataCaptureConfig(this.__scope, this.__resources, this.__input);
  }

  public get endpointStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.EndpointStatus'),
        outputPath: 'EndpointStatus',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.EndpointStatus', props);
    return resource.getResponseField('EndpointStatus') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

}

export class SageMakerResponsesDescribeEndpointDataCaptureConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeEndpointInput) {
  }

  public get enableCapture(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.DataCaptureConfig.EnableCapture'),
        outputPath: 'DataCaptureConfig.EnableCapture',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.DataCaptureConfig.EnableCapture', props);
    return resource.getResponseField('DataCaptureConfig.EnableCapture') as unknown as boolean;
  }

  public get captureStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.DataCaptureConfig.CaptureStatus'),
        outputPath: 'DataCaptureConfig.CaptureStatus',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.DataCaptureConfig.CaptureStatus', props);
    return resource.getResponseField('DataCaptureConfig.CaptureStatus') as unknown as string;
  }

  public get currentSamplingPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.DataCaptureConfig.CurrentSamplingPercentage'),
        outputPath: 'DataCaptureConfig.CurrentSamplingPercentage',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.DataCaptureConfig.CurrentSamplingPercentage', props);
    return resource.getResponseField('DataCaptureConfig.CurrentSamplingPercentage') as unknown as number;
  }

  public get destinationS3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.DataCaptureConfig.DestinationS3Uri'),
        outputPath: 'DataCaptureConfig.DestinationS3Uri',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.DataCaptureConfig.DestinationS3Uri', props);
    return resource.getResponseField('DataCaptureConfig.DestinationS3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpoint.DataCaptureConfig.KmsKeyId'),
        outputPath: 'DataCaptureConfig.KmsKeyId',
        parameters: {
          EndpointName: this.__input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoint.DataCaptureConfig.KmsKeyId', props);
    return resource.getResponseField('DataCaptureConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeEndpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeEndpointConfigInput) {
  }

  public get endpointConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.EndpointConfigName'),
        outputPath: 'EndpointConfigName',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.EndpointConfigName', props);
    return resource.getResponseField('EndpointConfigName') as unknown as string;
  }

  public get endpointConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.EndpointConfigArn'),
        outputPath: 'EndpointConfigArn',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.EndpointConfigArn', props);
    return resource.getResponseField('EndpointConfigArn') as unknown as string;
  }

  public get productionVariants(): shapes.SageMakerProductionVariant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.ProductionVariants'),
        outputPath: 'ProductionVariants',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.ProductionVariants', props);
    return resource.getResponseField('ProductionVariants') as unknown as shapes.SageMakerProductionVariant[];
  }

  public get dataCaptureConfig(): SageMakerResponsesDescribeEndpointConfigDataCaptureConfig {
    return new SageMakerResponsesDescribeEndpointConfigDataCaptureConfig(this.__scope, this.__resources, this.__input);
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class SageMakerResponsesDescribeEndpointConfigDataCaptureConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeEndpointConfigInput) {
  }

  public get enableCapture(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.DataCaptureConfig.EnableCapture'),
        outputPath: 'DataCaptureConfig.EnableCapture',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.DataCaptureConfig.EnableCapture', props);
    return resource.getResponseField('DataCaptureConfig.EnableCapture') as unknown as boolean;
  }

  public get initialSamplingPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.DataCaptureConfig.InitialSamplingPercentage'),
        outputPath: 'DataCaptureConfig.InitialSamplingPercentage',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.DataCaptureConfig.InitialSamplingPercentage', props);
    return resource.getResponseField('DataCaptureConfig.InitialSamplingPercentage') as unknown as number;
  }

  public get destinationS3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.DataCaptureConfig.DestinationS3Uri'),
        outputPath: 'DataCaptureConfig.DestinationS3Uri',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.DataCaptureConfig.DestinationS3Uri', props);
    return resource.getResponseField('DataCaptureConfig.DestinationS3Uri') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.DataCaptureConfig.KmsKeyId'),
        outputPath: 'DataCaptureConfig.KmsKeyId',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.DataCaptureConfig.KmsKeyId', props);
    return resource.getResponseField('DataCaptureConfig.KmsKeyId') as unknown as string;
  }

  public get captureOptions(): shapes.SageMakerCaptureOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.DataCaptureConfig.CaptureOptions'),
        outputPath: 'DataCaptureConfig.CaptureOptions',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.DataCaptureConfig.CaptureOptions', props);
    return resource.getResponseField('DataCaptureConfig.CaptureOptions') as unknown as shapes.SageMakerCaptureOption[];
  }

  public get captureContentTypeHeader(): SageMakerResponsesDescribeEndpointConfigDataCaptureConfigCaptureContentTypeHeader {
    return new SageMakerResponsesDescribeEndpointConfigDataCaptureConfigCaptureContentTypeHeader(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeEndpointConfigDataCaptureConfigCaptureContentTypeHeader {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeEndpointConfigInput) {
  }

  public get csvContentTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.DataCaptureConfig.CaptureContentTypeHeader.CsvContentTypes'),
        outputPath: 'DataCaptureConfig.CaptureContentTypeHeader.CsvContentTypes',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.DataCaptureConfig.CaptureContentTypeHeader.CsvContentTypes', props);
    return resource.getResponseField('DataCaptureConfig.CaptureContentTypeHeader.CsvContentTypes') as unknown as string[];
  }

  public get jsonContentTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpointConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeEndpointConfig.DataCaptureConfig.CaptureContentTypeHeader.JsonContentTypes'),
        outputPath: 'DataCaptureConfig.CaptureContentTypeHeader.JsonContentTypes',
        parameters: {
          EndpointConfigName: this.__input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpointConfig.DataCaptureConfig.CaptureContentTypeHeader.JsonContentTypes', props);
    return resource.getResponseField('DataCaptureConfig.CaptureContentTypeHeader.JsonContentTypes') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeExperimentRequest) {
  }

  public get experimentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.ExperimentName'),
        outputPath: 'ExperimentName',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.ExperimentName', props);
    return resource.getResponseField('ExperimentName') as unknown as string;
  }

  public get experimentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.ExperimentArn'),
        outputPath: 'ExperimentArn',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.ExperimentArn', props);
    return resource.getResponseField('ExperimentArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get source(): SageMakerResponsesDescribeExperimentSource {
    return new SageMakerResponsesDescribeExperimentSource(this.__scope, this.__resources, this.__input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.Description'),
        outputPath: 'Description',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get createdBy(): SageMakerResponsesDescribeExperimentCreatedBy {
    return new SageMakerResponsesDescribeExperimentCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get lastModifiedBy(): SageMakerResponsesDescribeExperimentLastModifiedBy {
    return new SageMakerResponsesDescribeExperimentLastModifiedBy(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeExperimentSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeExperimentRequest) {
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.Source.SourceArn'),
        outputPath: 'Source.SourceArn',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.Source.SourceArn', props);
    return resource.getResponseField('Source.SourceArn') as unknown as string;
  }

  public get sourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.Source.SourceType'),
        outputPath: 'Source.SourceType',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.Source.SourceType', props);
    return resource.getResponseField('Source.SourceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeExperimentCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeExperimentRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.CreatedBy.UserProfileArn'),
        outputPath: 'CreatedBy.UserProfileArn',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.CreatedBy.UserProfileArn', props);
    return resource.getResponseField('CreatedBy.UserProfileArn') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.CreatedBy.UserProfileName'),
        outputPath: 'CreatedBy.UserProfileName',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.CreatedBy.UserProfileName', props);
    return resource.getResponseField('CreatedBy.UserProfileName') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.CreatedBy.DomainId'),
        outputPath: 'CreatedBy.DomainId',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.CreatedBy.DomainId', props);
    return resource.getResponseField('CreatedBy.DomainId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeExperimentLastModifiedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeExperimentRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.LastModifiedBy.UserProfileArn'),
        outputPath: 'LastModifiedBy.UserProfileArn',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.LastModifiedBy.UserProfileArn', props);
    return resource.getResponseField('LastModifiedBy.UserProfileArn') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.LastModifiedBy.UserProfileName'),
        outputPath: 'LastModifiedBy.UserProfileName',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.LastModifiedBy.UserProfileName', props);
    return resource.getResponseField('LastModifiedBy.UserProfileName') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeExperiment.LastModifiedBy.DomainId'),
        outputPath: 'LastModifiedBy.DomainId',
        parameters: {
          ExperimentName: this.__input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExperiment.LastModifiedBy.DomainId', props);
    return resource.getResponseField('LastModifiedBy.DomainId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeFlowDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get flowDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.FlowDefinitionArn'),
        outputPath: 'FlowDefinitionArn',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.FlowDefinitionArn', props);
    return resource.getResponseField('FlowDefinitionArn') as unknown as string;
  }

  public get flowDefinitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.FlowDefinitionName'),
        outputPath: 'FlowDefinitionName',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.FlowDefinitionName', props);
    return resource.getResponseField('FlowDefinitionName') as unknown as string;
  }

  public get flowDefinitionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.FlowDefinitionStatus'),
        outputPath: 'FlowDefinitionStatus',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.FlowDefinitionStatus', props);
    return resource.getResponseField('FlowDefinitionStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get humanLoopRequestSource(): SageMakerResponsesDescribeFlowDefinitionHumanLoopRequestSource {
    return new SageMakerResponsesDescribeFlowDefinitionHumanLoopRequestSource(this.__scope, this.__resources, this.__input);
  }

  public get humanLoopActivationConfig(): SageMakerResponsesDescribeFlowDefinitionHumanLoopActivationConfig {
    return new SageMakerResponsesDescribeFlowDefinitionHumanLoopActivationConfig(this.__scope, this.__resources, this.__input);
  }

  public get humanLoopConfig(): SageMakerResponsesDescribeFlowDefinitionHumanLoopConfig {
    return new SageMakerResponsesDescribeFlowDefinitionHumanLoopConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputConfig(): SageMakerResponsesDescribeFlowDefinitionOutputConfig {
    return new SageMakerResponsesDescribeFlowDefinitionOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

}

export class SageMakerResponsesDescribeFlowDefinitionHumanLoopRequestSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get awsManagedHumanLoopRequestSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopRequestSource.AwsManagedHumanLoopRequestSource'),
        outputPath: 'HumanLoopRequestSource.AwsManagedHumanLoopRequestSource',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopRequestSource.AwsManagedHumanLoopRequestSource', props);
    return resource.getResponseField('HumanLoopRequestSource.AwsManagedHumanLoopRequestSource') as unknown as string;
  }

}

export class SageMakerResponsesDescribeFlowDefinitionHumanLoopActivationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get humanLoopActivationConditionsConfig(): SageMakerResponsesDescribeFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
    return new SageMakerResponsesDescribeFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get humanLoopActivationConditions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopActivationConfig.HumanLoopActivationConditionsConfig.HumanLoopActivationConditions'),
        outputPath: 'HumanLoopActivationConfig.HumanLoopActivationConditionsConfig.HumanLoopActivationConditions',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopActivationConfig.HumanLoopActivationConditionsConfig.HumanLoopActivationConditions', props);
    return resource.getResponseField('HumanLoopActivationConfig.HumanLoopActivationConditionsConfig.HumanLoopActivationConditions') as unknown as string;
  }

}

export class SageMakerResponsesDescribeFlowDefinitionHumanLoopConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get workteamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.WorkteamArn'),
        outputPath: 'HumanLoopConfig.WorkteamArn',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.WorkteamArn', props);
    return resource.getResponseField('HumanLoopConfig.WorkteamArn') as unknown as string;
  }

  public get humanTaskUiArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.HumanTaskUiArn'),
        outputPath: 'HumanLoopConfig.HumanTaskUiArn',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.HumanTaskUiArn', props);
    return resource.getResponseField('HumanLoopConfig.HumanTaskUiArn') as unknown as string;
  }

  public get taskTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.TaskTitle'),
        outputPath: 'HumanLoopConfig.TaskTitle',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.TaskTitle', props);
    return resource.getResponseField('HumanLoopConfig.TaskTitle') as unknown as string;
  }

  public get taskDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.TaskDescription'),
        outputPath: 'HumanLoopConfig.TaskDescription',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.TaskDescription', props);
    return resource.getResponseField('HumanLoopConfig.TaskDescription') as unknown as string;
  }

  public get taskCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.TaskCount'),
        outputPath: 'HumanLoopConfig.TaskCount',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.TaskCount', props);
    return resource.getResponseField('HumanLoopConfig.TaskCount') as unknown as number;
  }

  public get taskAvailabilityLifetimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.TaskAvailabilityLifetimeInSeconds'),
        outputPath: 'HumanLoopConfig.TaskAvailabilityLifetimeInSeconds',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.TaskAvailabilityLifetimeInSeconds', props);
    return resource.getResponseField('HumanLoopConfig.TaskAvailabilityLifetimeInSeconds') as unknown as number;
  }

  public get taskTimeLimitInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.TaskTimeLimitInSeconds'),
        outputPath: 'HumanLoopConfig.TaskTimeLimitInSeconds',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.TaskTimeLimitInSeconds', props);
    return resource.getResponseField('HumanLoopConfig.TaskTimeLimitInSeconds') as unknown as number;
  }

  public get taskKeywords(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.TaskKeywords'),
        outputPath: 'HumanLoopConfig.TaskKeywords',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.TaskKeywords', props);
    return resource.getResponseField('HumanLoopConfig.TaskKeywords') as unknown as string[];
  }

  public get publicWorkforceTaskPrice(): SageMakerResponsesDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
    return new SageMakerResponsesDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get amountInUsd(): SageMakerResponsesDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
    return new SageMakerResponsesDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get dollars(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars'),
        outputPath: 'HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars', props);
    return resource.getResponseField('HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars') as unknown as number;
  }

  public get cents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents'),
        outputPath: 'HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents', props);
    return resource.getResponseField('HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents') as unknown as number;
  }

  public get tenthFractionsOfACent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent'),
        outputPath: 'HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent', props);
    return resource.getResponseField('HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent') as unknown as number;
  }

}

export class SageMakerResponsesDescribeFlowDefinitionOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeFlowDefinitionRequest) {
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.OutputConfig.S3OutputPath'),
        outputPath: 'OutputConfig.S3OutputPath',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.OutputConfig.S3OutputPath', props);
    return resource.getResponseField('OutputConfig.S3OutputPath') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFlowDefinition',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeFlowDefinition.OutputConfig.KmsKeyId'),
        outputPath: 'OutputConfig.KmsKeyId',
        parameters: {
          FlowDefinitionName: this.__input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFlowDefinition.OutputConfig.KmsKeyId', props);
    return resource.getResponseField('OutputConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHumanTaskUi {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHumanTaskUiRequest) {
  }

  public get humanTaskUiArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHumanTaskUi.HumanTaskUiArn'),
        outputPath: 'HumanTaskUiArn',
        parameters: {
          HumanTaskUiName: this.__input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHumanTaskUi.HumanTaskUiArn', props);
    return resource.getResponseField('HumanTaskUiArn') as unknown as string;
  }

  public get humanTaskUiName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHumanTaskUi.HumanTaskUiName'),
        outputPath: 'HumanTaskUiName',
        parameters: {
          HumanTaskUiName: this.__input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHumanTaskUi.HumanTaskUiName', props);
    return resource.getResponseField('HumanTaskUiName') as unknown as string;
  }

  public get humanTaskUiStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHumanTaskUi.HumanTaskUiStatus'),
        outputPath: 'HumanTaskUiStatus',
        parameters: {
          HumanTaskUiName: this.__input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHumanTaskUi.HumanTaskUiStatus', props);
    return resource.getResponseField('HumanTaskUiStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHumanTaskUi.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          HumanTaskUiName: this.__input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHumanTaskUi.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get uiTemplate(): SageMakerResponsesDescribeHumanTaskUiUiTemplate {
    return new SageMakerResponsesDescribeHumanTaskUiUiTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeHumanTaskUiUiTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHumanTaskUiRequest) {
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHumanTaskUi.UiTemplate.Url'),
        outputPath: 'UiTemplate.Url',
        parameters: {
          HumanTaskUiName: this.__input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHumanTaskUi.UiTemplate.Url', props);
    return resource.getResponseField('UiTemplate.Url') as unknown as string;
  }

  public get contentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHumanTaskUi',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHumanTaskUi.UiTemplate.ContentSha256'),
        outputPath: 'UiTemplate.ContentSha256',
        parameters: {
          HumanTaskUiName: this.__input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHumanTaskUi.UiTemplate.ContentSha256', props);
    return resource.getResponseField('UiTemplate.ContentSha256') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get hyperParameterTuningJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobName'),
        outputPath: 'HyperParameterTuningJobName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobName', props);
    return resource.getResponseField('HyperParameterTuningJobName') as unknown as string;
  }

  public get hyperParameterTuningJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobArn'),
        outputPath: 'HyperParameterTuningJobArn',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobArn', props);
    return resource.getResponseField('HyperParameterTuningJobArn') as unknown as string;
  }

  public get hyperParameterTuningJobConfig(): SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfig {
    return new SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfig(this.__scope, this.__resources, this.__input);
  }

  public get trainingJobDefinition(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinition {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinition(this.__scope, this.__resources, this.__input);
  }

  public get trainingJobDefinitions(): shapes.SageMakerHyperParameterTrainingJobDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinitions'),
        outputPath: 'TrainingJobDefinitions',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinitions', props);
    return resource.getResponseField('TrainingJobDefinitions') as unknown as shapes.SageMakerHyperParameterTrainingJobDefinition[];
  }

  public get hyperParameterTuningJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobStatus'),
        outputPath: 'HyperParameterTuningJobStatus',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobStatus', props);
    return resource.getResponseField('HyperParameterTuningJobStatus') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get hyperParameterTuningEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningEndTime'),
        outputPath: 'HyperParameterTuningEndTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningEndTime', props);
    return resource.getResponseField('HyperParameterTuningEndTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get trainingJobStatusCounters(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobStatusCounters {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobStatusCounters(this.__scope, this.__resources, this.__input);
  }

  public get objectiveStatusCounters(): SageMakerResponsesDescribeHyperParameterTuningJobObjectiveStatusCounters {
    return new SageMakerResponsesDescribeHyperParameterTuningJobObjectiveStatusCounters(this.__scope, this.__resources, this.__input);
  }

  public get bestTrainingJob(): SageMakerResponsesDescribeHyperParameterTuningJobBestTrainingJob {
    return new SageMakerResponsesDescribeHyperParameterTuningJobBestTrainingJob(this.__scope, this.__resources, this.__input);
  }

  public get overallBestTrainingJob(): SageMakerResponsesDescribeHyperParameterTuningJobOverallBestTrainingJob {
    return new SageMakerResponsesDescribeHyperParameterTuningJobOverallBestTrainingJob(this.__scope, this.__resources, this.__input);
  }

  public get warmStartConfig(): SageMakerResponsesDescribeHyperParameterTuningJobWarmStartConfig {
    return new SageMakerResponsesDescribeHyperParameterTuningJobWarmStartConfig(this.__scope, this.__resources, this.__input);
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get strategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.Strategy'),
        outputPath: 'HyperParameterTuningJobConfig.Strategy',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.Strategy', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.Strategy') as unknown as string;
  }

  public get hyperParameterTuningJobObjective(): SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigHyperParameterTuningJobObjective {
    return new SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigHyperParameterTuningJobObjective(this.__scope, this.__resources, this.__input);
  }

  public get resourceLimits(): SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigResourceLimits {
    return new SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigResourceLimits(this.__scope, this.__resources, this.__input);
  }

  public get parameterRanges(): SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigParameterRanges {
    return new SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigParameterRanges(this.__scope, this.__resources, this.__input);
  }

  public get trainingJobEarlyStoppingType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.TrainingJobEarlyStoppingType'),
        outputPath: 'HyperParameterTuningJobConfig.TrainingJobEarlyStoppingType',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.TrainingJobEarlyStoppingType', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.TrainingJobEarlyStoppingType') as unknown as string;
  }

  public get tuningJobCompletionCriteria(): SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigTuningJobCompletionCriteria {
    return new SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigTuningJobCompletionCriteria(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigHyperParameterTuningJobObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.Type'),
        outputPath: 'HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.Type',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.Type', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.Type') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.MetricName'),
        outputPath: 'HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.MetricName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.MetricName', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.MetricName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigResourceLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get maxNumberOfTrainingJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ResourceLimits.MaxNumberOfTrainingJobs'),
        outputPath: 'HyperParameterTuningJobConfig.ResourceLimits.MaxNumberOfTrainingJobs',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ResourceLimits.MaxNumberOfTrainingJobs', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.ResourceLimits.MaxNumberOfTrainingJobs') as unknown as number;
  }

  public get maxParallelTrainingJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ResourceLimits.MaxParallelTrainingJobs'),
        outputPath: 'HyperParameterTuningJobConfig.ResourceLimits.MaxParallelTrainingJobs',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ResourceLimits.MaxParallelTrainingJobs', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.ResourceLimits.MaxParallelTrainingJobs') as unknown as number;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigParameterRanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get integerParameterRanges(): shapes.SageMakerIntegerParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.IntegerParameterRanges'),
        outputPath: 'HyperParameterTuningJobConfig.ParameterRanges.IntegerParameterRanges',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.IntegerParameterRanges', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.ParameterRanges.IntegerParameterRanges') as unknown as shapes.SageMakerIntegerParameterRange[];
  }

  public get continuousParameterRanges(): shapes.SageMakerContinuousParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.ContinuousParameterRanges'),
        outputPath: 'HyperParameterTuningJobConfig.ParameterRanges.ContinuousParameterRanges',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.ContinuousParameterRanges', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.ParameterRanges.ContinuousParameterRanges') as unknown as shapes.SageMakerContinuousParameterRange[];
  }

  public get categoricalParameterRanges(): shapes.SageMakerCategoricalParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.CategoricalParameterRanges'),
        outputPath: 'HyperParameterTuningJobConfig.ParameterRanges.CategoricalParameterRanges',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.CategoricalParameterRanges', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.ParameterRanges.CategoricalParameterRanges') as unknown as shapes.SageMakerCategoricalParameterRange[];
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobHyperParameterTuningJobConfigTuningJobCompletionCriteria {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get targetObjectiveMetricValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.TuningJobCompletionCriteria.TargetObjectiveMetricValue'),
        outputPath: 'HyperParameterTuningJobConfig.TuningJobCompletionCriteria.TargetObjectiveMetricValue',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.TuningJobCompletionCriteria.TargetObjectiveMetricValue', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.TuningJobCompletionCriteria.TargetObjectiveMetricValue') as unknown as number;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get definitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.DefinitionName'),
        outputPath: 'TrainingJobDefinition.DefinitionName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.DefinitionName', props);
    return resource.getResponseField('TrainingJobDefinition.DefinitionName') as unknown as string;
  }

  public get tuningObjective(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionTuningObjective {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionTuningObjective(this.__scope, this.__resources, this.__input);
  }

  public get hyperParameterRanges(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges(this.__scope, this.__resources, this.__input);
  }

  public get staticHyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.StaticHyperParameters'),
        outputPath: 'TrainingJobDefinition.StaticHyperParameters',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.StaticHyperParameters', props);
    return resource.getResponseField('TrainingJobDefinition.StaticHyperParameters') as unknown as Record<string, string>;
  }

  public get algorithmSpecification(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.RoleArn'),
        outputPath: 'TrainingJobDefinition.RoleArn',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.RoleArn', props);
    return resource.getResponseField('TrainingJobDefinition.RoleArn') as unknown as string;
  }

  public get inputDataConfig(): shapes.SageMakerChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.InputDataConfig'),
        outputPath: 'TrainingJobDefinition.InputDataConfig',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.InputDataConfig', props);
    return resource.getResponseField('TrainingJobDefinition.InputDataConfig') as unknown as shapes.SageMakerChannel[];
  }

  public get vpcConfig(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionVpcConfig {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputDataConfig(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get resourceConfig(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionResourceConfig {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionResourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get stoppingCondition(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionStoppingCondition {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionStoppingCondition(this.__scope, this.__resources, this.__input);
  }

  public get enableNetworkIsolation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableNetworkIsolation'),
        outputPath: 'TrainingJobDefinition.EnableNetworkIsolation',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableNetworkIsolation', props);
    return resource.getResponseField('TrainingJobDefinition.EnableNetworkIsolation') as unknown as boolean;
  }

  public get enableInterContainerTrafficEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableInterContainerTrafficEncryption'),
        outputPath: 'TrainingJobDefinition.EnableInterContainerTrafficEncryption',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableInterContainerTrafficEncryption', props);
    return resource.getResponseField('TrainingJobDefinition.EnableInterContainerTrafficEncryption') as unknown as boolean;
  }

  public get enableManagedSpotTraining(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableManagedSpotTraining'),
        outputPath: 'TrainingJobDefinition.EnableManagedSpotTraining',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableManagedSpotTraining', props);
    return resource.getResponseField('TrainingJobDefinition.EnableManagedSpotTraining') as unknown as boolean;
  }

  public get checkpointConfig(): SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig {
    return new SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionTuningObjective {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.TuningObjective.Type'),
        outputPath: 'TrainingJobDefinition.TuningObjective.Type',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.TuningObjective.Type', props);
    return resource.getResponseField('TrainingJobDefinition.TuningObjective.Type') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.TuningObjective.MetricName'),
        outputPath: 'TrainingJobDefinition.TuningObjective.MetricName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.TuningObjective.MetricName', props);
    return resource.getResponseField('TrainingJobDefinition.TuningObjective.MetricName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get integerParameterRanges(): shapes.SageMakerIntegerParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.IntegerParameterRanges'),
        outputPath: 'TrainingJobDefinition.HyperParameterRanges.IntegerParameterRanges',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.IntegerParameterRanges', props);
    return resource.getResponseField('TrainingJobDefinition.HyperParameterRanges.IntegerParameterRanges') as unknown as shapes.SageMakerIntegerParameterRange[];
  }

  public get continuousParameterRanges(): shapes.SageMakerContinuousParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.ContinuousParameterRanges'),
        outputPath: 'TrainingJobDefinition.HyperParameterRanges.ContinuousParameterRanges',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.ContinuousParameterRanges', props);
    return resource.getResponseField('TrainingJobDefinition.HyperParameterRanges.ContinuousParameterRanges') as unknown as shapes.SageMakerContinuousParameterRange[];
  }

  public get categoricalParameterRanges(): shapes.SageMakerCategoricalParameterRange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.CategoricalParameterRanges'),
        outputPath: 'TrainingJobDefinition.HyperParameterRanges.CategoricalParameterRanges',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.CategoricalParameterRanges', props);
    return resource.getResponseField('TrainingJobDefinition.HyperParameterRanges.CategoricalParameterRanges') as unknown as shapes.SageMakerCategoricalParameterRange[];
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get trainingImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.TrainingImage'),
        outputPath: 'TrainingJobDefinition.AlgorithmSpecification.TrainingImage',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.TrainingImage', props);
    return resource.getResponseField('TrainingJobDefinition.AlgorithmSpecification.TrainingImage') as unknown as string;
  }

  public get trainingInputMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.TrainingInputMode'),
        outputPath: 'TrainingJobDefinition.AlgorithmSpecification.TrainingInputMode',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.TrainingInputMode', props);
    return resource.getResponseField('TrainingJobDefinition.AlgorithmSpecification.TrainingInputMode') as unknown as string;
  }

  public get algorithmName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.AlgorithmName'),
        outputPath: 'TrainingJobDefinition.AlgorithmSpecification.AlgorithmName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.AlgorithmName', props);
    return resource.getResponseField('TrainingJobDefinition.AlgorithmSpecification.AlgorithmName') as unknown as string;
  }

  public get metricDefinitions(): shapes.SageMakerMetricDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.MetricDefinitions'),
        outputPath: 'TrainingJobDefinition.AlgorithmSpecification.MetricDefinitions',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.MetricDefinitions', props);
    return resource.getResponseField('TrainingJobDefinition.AlgorithmSpecification.MetricDefinitions') as unknown as shapes.SageMakerMetricDefinition[];
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.VpcConfig.SecurityGroupIds'),
        outputPath: 'TrainingJobDefinition.VpcConfig.SecurityGroupIds',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('TrainingJobDefinition.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.VpcConfig.Subnets'),
        outputPath: 'TrainingJobDefinition.VpcConfig.Subnets',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.VpcConfig.Subnets', props);
    return resource.getResponseField('TrainingJobDefinition.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.OutputDataConfig.KmsKeyId'),
        outputPath: 'TrainingJobDefinition.OutputDataConfig.KmsKeyId',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('TrainingJobDefinition.OutputDataConfig.KmsKeyId') as unknown as string;
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.OutputDataConfig.S3OutputPath'),
        outputPath: 'TrainingJobDefinition.OutputDataConfig.S3OutputPath',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.OutputDataConfig.S3OutputPath', props);
    return resource.getResponseField('TrainingJobDefinition.OutputDataConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionResourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.InstanceType'),
        outputPath: 'TrainingJobDefinition.ResourceConfig.InstanceType',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.InstanceType', props);
    return resource.getResponseField('TrainingJobDefinition.ResourceConfig.InstanceType') as unknown as string;
  }

  public get instanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.InstanceCount'),
        outputPath: 'TrainingJobDefinition.ResourceConfig.InstanceCount',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.InstanceCount', props);
    return resource.getResponseField('TrainingJobDefinition.ResourceConfig.InstanceCount') as unknown as number;
  }

  public get volumeSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.VolumeSizeInGB'),
        outputPath: 'TrainingJobDefinition.ResourceConfig.VolumeSizeInGB',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.VolumeSizeInGB', props);
    return resource.getResponseField('TrainingJobDefinition.ResourceConfig.VolumeSizeInGB') as unknown as number;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.VolumeKmsKeyId'),
        outputPath: 'TrainingJobDefinition.ResourceConfig.VolumeKmsKeyId',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('TrainingJobDefinition.ResourceConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionStoppingCondition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get maxRuntimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.StoppingCondition.MaxRuntimeInSeconds'),
        outputPath: 'TrainingJobDefinition.StoppingCondition.MaxRuntimeInSeconds',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.StoppingCondition.MaxRuntimeInSeconds', props);
    return resource.getResponseField('TrainingJobDefinition.StoppingCondition.MaxRuntimeInSeconds') as unknown as number;
  }

  public get maxWaitTimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.StoppingCondition.MaxWaitTimeInSeconds'),
        outputPath: 'TrainingJobDefinition.StoppingCondition.MaxWaitTimeInSeconds',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.StoppingCondition.MaxWaitTimeInSeconds', props);
    return resource.getResponseField('TrainingJobDefinition.StoppingCondition.MaxWaitTimeInSeconds') as unknown as number;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.CheckpointConfig.S3Uri'),
        outputPath: 'TrainingJobDefinition.CheckpointConfig.S3Uri',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.CheckpointConfig.S3Uri', props);
    return resource.getResponseField('TrainingJobDefinition.CheckpointConfig.S3Uri') as unknown as string;
  }

  public get localPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobDefinition.CheckpointConfig.LocalPath'),
        outputPath: 'TrainingJobDefinition.CheckpointConfig.LocalPath',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.CheckpointConfig.LocalPath', props);
    return resource.getResponseField('TrainingJobDefinition.CheckpointConfig.LocalPath') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobTrainingJobStatusCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get completed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobStatusCounters.Completed'),
        outputPath: 'TrainingJobStatusCounters.Completed',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.Completed', props);
    return resource.getResponseField('TrainingJobStatusCounters.Completed') as unknown as number;
  }

  public get inProgress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobStatusCounters.InProgress'),
        outputPath: 'TrainingJobStatusCounters.InProgress',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.InProgress', props);
    return resource.getResponseField('TrainingJobStatusCounters.InProgress') as unknown as number;
  }

  public get retryableError(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobStatusCounters.RetryableError'),
        outputPath: 'TrainingJobStatusCounters.RetryableError',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.RetryableError', props);
    return resource.getResponseField('TrainingJobStatusCounters.RetryableError') as unknown as number;
  }

  public get nonRetryableError(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobStatusCounters.NonRetryableError'),
        outputPath: 'TrainingJobStatusCounters.NonRetryableError',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.NonRetryableError', props);
    return resource.getResponseField('TrainingJobStatusCounters.NonRetryableError') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.TrainingJobStatusCounters.Stopped'),
        outputPath: 'TrainingJobStatusCounters.Stopped',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.Stopped', props);
    return resource.getResponseField('TrainingJobStatusCounters.Stopped') as unknown as number;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobObjectiveStatusCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get succeeded(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Succeeded'),
        outputPath: 'ObjectiveStatusCounters.Succeeded',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Succeeded', props);
    return resource.getResponseField('ObjectiveStatusCounters.Succeeded') as unknown as number;
  }

  public get pending(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Pending'),
        outputPath: 'ObjectiveStatusCounters.Pending',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Pending', props);
    return resource.getResponseField('ObjectiveStatusCounters.Pending') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Failed'),
        outputPath: 'ObjectiveStatusCounters.Failed',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Failed', props);
    return resource.getResponseField('ObjectiveStatusCounters.Failed') as unknown as number;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobBestTrainingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get trainingJobDefinitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobDefinitionName'),
        outputPath: 'BestTrainingJob.TrainingJobDefinitionName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobDefinitionName', props);
    return resource.getResponseField('BestTrainingJob.TrainingJobDefinitionName') as unknown as string;
  }

  public get trainingJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobName'),
        outputPath: 'BestTrainingJob.TrainingJobName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobName', props);
    return resource.getResponseField('BestTrainingJob.TrainingJobName') as unknown as string;
  }

  public get trainingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobArn'),
        outputPath: 'BestTrainingJob.TrainingJobArn',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobArn', props);
    return resource.getResponseField('BestTrainingJob.TrainingJobArn') as unknown as string;
  }

  public get tuningJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TuningJobName'),
        outputPath: 'BestTrainingJob.TuningJobName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TuningJobName', props);
    return resource.getResponseField('BestTrainingJob.TuningJobName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.CreationTime'),
        outputPath: 'BestTrainingJob.CreationTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.CreationTime', props);
    return resource.getResponseField('BestTrainingJob.CreationTime') as unknown as string;
  }

  public get trainingStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TrainingStartTime'),
        outputPath: 'BestTrainingJob.TrainingStartTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingStartTime', props);
    return resource.getResponseField('BestTrainingJob.TrainingStartTime') as unknown as string;
  }

  public get trainingEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TrainingEndTime'),
        outputPath: 'BestTrainingJob.TrainingEndTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingEndTime', props);
    return resource.getResponseField('BestTrainingJob.TrainingEndTime') as unknown as string;
  }

  public get trainingJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobStatus'),
        outputPath: 'BestTrainingJob.TrainingJobStatus',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobStatus', props);
    return resource.getResponseField('BestTrainingJob.TrainingJobStatus') as unknown as string;
  }

  public get tunedHyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.TunedHyperParameters'),
        outputPath: 'BestTrainingJob.TunedHyperParameters',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.TunedHyperParameters', props);
    return resource.getResponseField('BestTrainingJob.TunedHyperParameters') as unknown as Record<string, string>;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.FailureReason'),
        outputPath: 'BestTrainingJob.FailureReason',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.FailureReason', props);
    return resource.getResponseField('BestTrainingJob.FailureReason') as unknown as string;
  }

  public get finalHyperParameterTuningJobObjectiveMetric(): SageMakerResponsesDescribeHyperParameterTuningJobBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric {
    return new SageMakerResponsesDescribeHyperParameterTuningJobBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric(this.__scope, this.__resources, this.__input);
  }

  public get objectiveStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.ObjectiveStatus'),
        outputPath: 'BestTrainingJob.ObjectiveStatus',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.ObjectiveStatus', props);
    return resource.getResponseField('BestTrainingJob.ObjectiveStatus') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type'),
        outputPath: 'BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type', props);
    return resource.getResponseField('BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName'),
        outputPath: 'BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName', props);
    return resource.getResponseField('BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value'),
        outputPath: 'BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value', props);
    return resource.getResponseField('BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value') as unknown as number;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobOverallBestTrainingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get trainingJobDefinitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobDefinitionName'),
        outputPath: 'OverallBestTrainingJob.TrainingJobDefinitionName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobDefinitionName', props);
    return resource.getResponseField('OverallBestTrainingJob.TrainingJobDefinitionName') as unknown as string;
  }

  public get trainingJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobName'),
        outputPath: 'OverallBestTrainingJob.TrainingJobName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobName', props);
    return resource.getResponseField('OverallBestTrainingJob.TrainingJobName') as unknown as string;
  }

  public get trainingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobArn'),
        outputPath: 'OverallBestTrainingJob.TrainingJobArn',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobArn', props);
    return resource.getResponseField('OverallBestTrainingJob.TrainingJobArn') as unknown as string;
  }

  public get tuningJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TuningJobName'),
        outputPath: 'OverallBestTrainingJob.TuningJobName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TuningJobName', props);
    return resource.getResponseField('OverallBestTrainingJob.TuningJobName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.CreationTime'),
        outputPath: 'OverallBestTrainingJob.CreationTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.CreationTime', props);
    return resource.getResponseField('OverallBestTrainingJob.CreationTime') as unknown as string;
  }

  public get trainingStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingStartTime'),
        outputPath: 'OverallBestTrainingJob.TrainingStartTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingStartTime', props);
    return resource.getResponseField('OverallBestTrainingJob.TrainingStartTime') as unknown as string;
  }

  public get trainingEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingEndTime'),
        outputPath: 'OverallBestTrainingJob.TrainingEndTime',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingEndTime', props);
    return resource.getResponseField('OverallBestTrainingJob.TrainingEndTime') as unknown as string;
  }

  public get trainingJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobStatus'),
        outputPath: 'OverallBestTrainingJob.TrainingJobStatus',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobStatus', props);
    return resource.getResponseField('OverallBestTrainingJob.TrainingJobStatus') as unknown as string;
  }

  public get tunedHyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.TunedHyperParameters'),
        outputPath: 'OverallBestTrainingJob.TunedHyperParameters',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TunedHyperParameters', props);
    return resource.getResponseField('OverallBestTrainingJob.TunedHyperParameters') as unknown as Record<string, string>;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.FailureReason'),
        outputPath: 'OverallBestTrainingJob.FailureReason',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FailureReason', props);
    return resource.getResponseField('OverallBestTrainingJob.FailureReason') as unknown as string;
  }

  public get finalHyperParameterTuningJobObjectiveMetric(): SageMakerResponsesDescribeHyperParameterTuningJobOverallBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric {
    return new SageMakerResponsesDescribeHyperParameterTuningJobOverallBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric(this.__scope, this.__resources, this.__input);
  }

  public get objectiveStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.ObjectiveStatus'),
        outputPath: 'OverallBestTrainingJob.ObjectiveStatus',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.ObjectiveStatus', props);
    return resource.getResponseField('OverallBestTrainingJob.ObjectiveStatus') as unknown as string;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobOverallBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type'),
        outputPath: 'OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type', props);
    return resource.getResponseField('OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type') as unknown as string;
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName'),
        outputPath: 'OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName', props);
    return resource.getResponseField('OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName') as unknown as string;
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value'),
        outputPath: 'OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value', props);
    return resource.getResponseField('OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value') as unknown as number;
  }

}

export class SageMakerResponsesDescribeHyperParameterTuningJobWarmStartConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
  }

  public get parentHyperParameterTuningJobs(): shapes.SageMakerParentHyperParameterTuningJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.WarmStartConfig.ParentHyperParameterTuningJobs'),
        outputPath: 'WarmStartConfig.ParentHyperParameterTuningJobs',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.WarmStartConfig.ParentHyperParameterTuningJobs', props);
    return resource.getResponseField('WarmStartConfig.ParentHyperParameterTuningJobs') as unknown as shapes.SageMakerParentHyperParameterTuningJob[];
  }

  public get warmStartType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeHyperParameterTuningJob.WarmStartConfig.WarmStartType'),
        outputPath: 'WarmStartConfig.WarmStartType',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeHyperParameterTuningJob.WarmStartConfig.WarmStartType', props);
    return resource.getResponseField('WarmStartConfig.WarmStartType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeImageRequest) {
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.Description'),
        outputPath: 'Description',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.ImageArn'),
        outputPath: 'ImageArn',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.ImageArn', props);
    return resource.getResponseField('ImageArn') as unknown as string;
  }

  public get imageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.ImageName'),
        outputPath: 'ImageName',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.ImageName', props);
    return resource.getResponseField('ImageName') as unknown as string;
  }

  public get imageStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.ImageStatus'),
        outputPath: 'ImageStatus',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.ImageStatus', props);
    return resource.getResponseField('ImageStatus') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImage.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          ImageName: this.__input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImage.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeImageVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeImageVersionRequest) {
  }

  public get baseImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.BaseImage'),
        outputPath: 'BaseImage',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.BaseImage', props);
    return resource.getResponseField('BaseImage') as unknown as string;
  }

  public get containerImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.ContainerImage'),
        outputPath: 'ContainerImage',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.ContainerImage', props);
    return resource.getResponseField('ContainerImage') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.ImageArn'),
        outputPath: 'ImageArn',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.ImageArn', props);
    return resource.getResponseField('ImageArn') as unknown as string;
  }

  public get imageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.ImageVersionArn'),
        outputPath: 'ImageVersionArn',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.ImageVersionArn', props);
    return resource.getResponseField('ImageVersionArn') as unknown as string;
  }

  public get imageVersionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.ImageVersionStatus'),
        outputPath: 'ImageVersionStatus',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.ImageVersionStatus', props);
    return resource.getResponseField('ImageVersionStatus') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageVersion',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeImageVersion.Version'),
        outputPath: 'Version',
        parameters: {
          ImageName: this.__input.imageName,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageVersion.Version', props);
    return resource.getResponseField('Version') as unknown as number;
  }

}

export class SageMakerResponsesDescribeLabelingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get labelingJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobStatus'),
        outputPath: 'LabelingJobStatus',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobStatus', props);
    return resource.getResponseField('LabelingJobStatus') as unknown as string;
  }

  public get labelCounters(): SageMakerResponsesDescribeLabelingJobLabelCounters {
    return new SageMakerResponsesDescribeLabelingJobLabelCounters(this.__scope, this.__resources, this.__input);
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get jobReferenceCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.JobReferenceCode'),
        outputPath: 'JobReferenceCode',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.JobReferenceCode', props);
    return resource.getResponseField('JobReferenceCode') as unknown as string;
  }

  public get labelingJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobName'),
        outputPath: 'LabelingJobName',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobName', props);
    return resource.getResponseField('LabelingJobName') as unknown as string;
  }

  public get labelingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobArn'),
        outputPath: 'LabelingJobArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobArn', props);
    return resource.getResponseField('LabelingJobArn') as unknown as string;
  }

  public get labelAttributeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelAttributeName'),
        outputPath: 'LabelAttributeName',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelAttributeName', props);
    return resource.getResponseField('LabelAttributeName') as unknown as string;
  }

  public get inputConfig(): SageMakerResponsesDescribeLabelingJobInputConfig {
    return new SageMakerResponsesDescribeLabelingJobInputConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputConfig(): SageMakerResponsesDescribeLabelingJobOutputConfig {
    return new SageMakerResponsesDescribeLabelingJobOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get labelCategoryConfigS3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelCategoryConfigS3Uri'),
        outputPath: 'LabelCategoryConfigS3Uri',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelCategoryConfigS3Uri', props);
    return resource.getResponseField('LabelCategoryConfigS3Uri') as unknown as string;
  }

  public get stoppingConditions(): SageMakerResponsesDescribeLabelingJobStoppingConditions {
    return new SageMakerResponsesDescribeLabelingJobStoppingConditions(this.__scope, this.__resources, this.__input);
  }

  public get labelingJobAlgorithmsConfig(): SageMakerResponsesDescribeLabelingJobLabelingJobAlgorithmsConfig {
    return new SageMakerResponsesDescribeLabelingJobLabelingJobAlgorithmsConfig(this.__scope, this.__resources, this.__input);
  }

  public get humanTaskConfig(): SageMakerResponsesDescribeLabelingJobHumanTaskConfig {
    return new SageMakerResponsesDescribeLabelingJobHumanTaskConfig(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.SageMakerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.Tags'),
        outputPath: 'Tags',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SageMakerTag[];
  }

  public get labelingJobOutput(): SageMakerResponsesDescribeLabelingJobLabelingJobOutput {
    return new SageMakerResponsesDescribeLabelingJobLabelingJobOutput(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeLabelingJobLabelCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get totalLabeled(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelCounters.TotalLabeled'),
        outputPath: 'LabelCounters.TotalLabeled',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelCounters.TotalLabeled', props);
    return resource.getResponseField('LabelCounters.TotalLabeled') as unknown as number;
  }

  public get humanLabeled(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelCounters.HumanLabeled'),
        outputPath: 'LabelCounters.HumanLabeled',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelCounters.HumanLabeled', props);
    return resource.getResponseField('LabelCounters.HumanLabeled') as unknown as number;
  }

  public get machineLabeled(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelCounters.MachineLabeled'),
        outputPath: 'LabelCounters.MachineLabeled',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelCounters.MachineLabeled', props);
    return resource.getResponseField('LabelCounters.MachineLabeled') as unknown as number;
  }

  public get failedNonRetryableError(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelCounters.FailedNonRetryableError'),
        outputPath: 'LabelCounters.FailedNonRetryableError',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelCounters.FailedNonRetryableError', props);
    return resource.getResponseField('LabelCounters.FailedNonRetryableError') as unknown as number;
  }

  public get unlabeled(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelCounters.Unlabeled'),
        outputPath: 'LabelCounters.Unlabeled',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelCounters.Unlabeled', props);
    return resource.getResponseField('LabelCounters.Unlabeled') as unknown as number;
  }

}

export class SageMakerResponsesDescribeLabelingJobInputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get dataSource(): SageMakerResponsesDescribeLabelingJobInputConfigDataSource {
    return new SageMakerResponsesDescribeLabelingJobInputConfigDataSource(this.__scope, this.__resources, this.__input);
  }

  public get dataAttributes(): SageMakerResponsesDescribeLabelingJobInputConfigDataAttributes {
    return new SageMakerResponsesDescribeLabelingJobInputConfigDataAttributes(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeLabelingJobInputConfigDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get s3DataSource(): SageMakerResponsesDescribeLabelingJobInputConfigDataSourceS3DataSource {
    return new SageMakerResponsesDescribeLabelingJobInputConfigDataSourceS3DataSource(this.__scope, this.__resources, this.__input);
  }

  public get snsDataSource(): SageMakerResponsesDescribeLabelingJobInputConfigDataSourceSnsDataSource {
    return new SageMakerResponsesDescribeLabelingJobInputConfigDataSourceSnsDataSource(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeLabelingJobInputConfigDataSourceS3DataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get manifestS3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.InputConfig.DataSource.S3DataSource.ManifestS3Uri'),
        outputPath: 'InputConfig.DataSource.S3DataSource.ManifestS3Uri',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.InputConfig.DataSource.S3DataSource.ManifestS3Uri', props);
    return resource.getResponseField('InputConfig.DataSource.S3DataSource.ManifestS3Uri') as unknown as string;
  }

}

export class SageMakerResponsesDescribeLabelingJobInputConfigDataSourceSnsDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.InputConfig.DataSource.SnsDataSource.SnsTopicArn'),
        outputPath: 'InputConfig.DataSource.SnsDataSource.SnsTopicArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.InputConfig.DataSource.SnsDataSource.SnsTopicArn', props);
    return resource.getResponseField('InputConfig.DataSource.SnsDataSource.SnsTopicArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeLabelingJobInputConfigDataAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get contentClassifiers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.InputConfig.DataAttributes.ContentClassifiers'),
        outputPath: 'InputConfig.DataAttributes.ContentClassifiers',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.InputConfig.DataAttributes.ContentClassifiers', props);
    return resource.getResponseField('InputConfig.DataAttributes.ContentClassifiers') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeLabelingJobOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.OutputConfig.S3OutputPath'),
        outputPath: 'OutputConfig.S3OutputPath',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.OutputConfig.S3OutputPath', props);
    return resource.getResponseField('OutputConfig.S3OutputPath') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.OutputConfig.KmsKeyId'),
        outputPath: 'OutputConfig.KmsKeyId',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.OutputConfig.KmsKeyId', props);
    return resource.getResponseField('OutputConfig.KmsKeyId') as unknown as string;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.OutputConfig.SnsTopicArn'),
        outputPath: 'OutputConfig.SnsTopicArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.OutputConfig.SnsTopicArn', props);
    return resource.getResponseField('OutputConfig.SnsTopicArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeLabelingJobStoppingConditions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get maxHumanLabeledObjectCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.StoppingConditions.MaxHumanLabeledObjectCount'),
        outputPath: 'StoppingConditions.MaxHumanLabeledObjectCount',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.StoppingConditions.MaxHumanLabeledObjectCount', props);
    return resource.getResponseField('StoppingConditions.MaxHumanLabeledObjectCount') as unknown as number;
  }

  public get maxPercentageOfInputDatasetLabeled(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.StoppingConditions.MaxPercentageOfInputDatasetLabeled'),
        outputPath: 'StoppingConditions.MaxPercentageOfInputDatasetLabeled',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.StoppingConditions.MaxPercentageOfInputDatasetLabeled', props);
    return resource.getResponseField('StoppingConditions.MaxPercentageOfInputDatasetLabeled') as unknown as number;
  }

}

export class SageMakerResponsesDescribeLabelingJobLabelingJobAlgorithmsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get labelingJobAlgorithmSpecificationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobAlgorithmsConfig.LabelingJobAlgorithmSpecificationArn'),
        outputPath: 'LabelingJobAlgorithmsConfig.LabelingJobAlgorithmSpecificationArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobAlgorithmsConfig.LabelingJobAlgorithmSpecificationArn', props);
    return resource.getResponseField('LabelingJobAlgorithmsConfig.LabelingJobAlgorithmSpecificationArn') as unknown as string;
  }

  public get initialActiveLearningModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobAlgorithmsConfig.InitialActiveLearningModelArn'),
        outputPath: 'LabelingJobAlgorithmsConfig.InitialActiveLearningModelArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobAlgorithmsConfig.InitialActiveLearningModelArn', props);
    return resource.getResponseField('LabelingJobAlgorithmsConfig.InitialActiveLearningModelArn') as unknown as string;
  }

  public get labelingJobResourceConfig(): SageMakerResponsesDescribeLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig {
    return new SageMakerResponsesDescribeLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobAlgorithmsConfig.LabelingJobResourceConfig.VolumeKmsKeyId'),
        outputPath: 'LabelingJobAlgorithmsConfig.LabelingJobResourceConfig.VolumeKmsKeyId',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobAlgorithmsConfig.LabelingJobResourceConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('LabelingJobAlgorithmsConfig.LabelingJobResourceConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeLabelingJobHumanTaskConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get workteamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.WorkteamArn'),
        outputPath: 'HumanTaskConfig.WorkteamArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.WorkteamArn', props);
    return resource.getResponseField('HumanTaskConfig.WorkteamArn') as unknown as string;
  }

  public get uiConfig(): SageMakerResponsesDescribeLabelingJobHumanTaskConfigUiConfig {
    return new SageMakerResponsesDescribeLabelingJobHumanTaskConfigUiConfig(this.__scope, this.__resources, this.__input);
  }

  public get preHumanTaskLambdaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.PreHumanTaskLambdaArn'),
        outputPath: 'HumanTaskConfig.PreHumanTaskLambdaArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.PreHumanTaskLambdaArn', props);
    return resource.getResponseField('HumanTaskConfig.PreHumanTaskLambdaArn') as unknown as string;
  }

  public get taskKeywords(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.TaskKeywords'),
        outputPath: 'HumanTaskConfig.TaskKeywords',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.TaskKeywords', props);
    return resource.getResponseField('HumanTaskConfig.TaskKeywords') as unknown as string[];
  }

  public get taskTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.TaskTitle'),
        outputPath: 'HumanTaskConfig.TaskTitle',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.TaskTitle', props);
    return resource.getResponseField('HumanTaskConfig.TaskTitle') as unknown as string;
  }

  public get taskDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.TaskDescription'),
        outputPath: 'HumanTaskConfig.TaskDescription',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.TaskDescription', props);
    return resource.getResponseField('HumanTaskConfig.TaskDescription') as unknown as string;
  }

  public get numberOfHumanWorkersPerDataObject(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.NumberOfHumanWorkersPerDataObject'),
        outputPath: 'HumanTaskConfig.NumberOfHumanWorkersPerDataObject',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.NumberOfHumanWorkersPerDataObject', props);
    return resource.getResponseField('HumanTaskConfig.NumberOfHumanWorkersPerDataObject') as unknown as number;
  }

  public get taskTimeLimitInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.TaskTimeLimitInSeconds'),
        outputPath: 'HumanTaskConfig.TaskTimeLimitInSeconds',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.TaskTimeLimitInSeconds', props);
    return resource.getResponseField('HumanTaskConfig.TaskTimeLimitInSeconds') as unknown as number;
  }

  public get taskAvailabilityLifetimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.TaskAvailabilityLifetimeInSeconds'),
        outputPath: 'HumanTaskConfig.TaskAvailabilityLifetimeInSeconds',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.TaskAvailabilityLifetimeInSeconds', props);
    return resource.getResponseField('HumanTaskConfig.TaskAvailabilityLifetimeInSeconds') as unknown as number;
  }

  public get maxConcurrentTaskCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.MaxConcurrentTaskCount'),
        outputPath: 'HumanTaskConfig.MaxConcurrentTaskCount',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.MaxConcurrentTaskCount', props);
    return resource.getResponseField('HumanTaskConfig.MaxConcurrentTaskCount') as unknown as number;
  }

  public get annotationConsolidationConfig(): SageMakerResponsesDescribeLabelingJobHumanTaskConfigAnnotationConsolidationConfig {
    return new SageMakerResponsesDescribeLabelingJobHumanTaskConfigAnnotationConsolidationConfig(this.__scope, this.__resources, this.__input);
  }

  public get publicWorkforceTaskPrice(): SageMakerResponsesDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPrice {
    return new SageMakerResponsesDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPrice(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeLabelingJobHumanTaskConfigUiConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get uiTemplateS3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.UiConfig.UiTemplateS3Uri'),
        outputPath: 'HumanTaskConfig.UiConfig.UiTemplateS3Uri',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.UiConfig.UiTemplateS3Uri', props);
    return resource.getResponseField('HumanTaskConfig.UiConfig.UiTemplateS3Uri') as unknown as string;
  }

  public get humanTaskUiArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.UiConfig.HumanTaskUiArn'),
        outputPath: 'HumanTaskConfig.UiConfig.HumanTaskUiArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.UiConfig.HumanTaskUiArn', props);
    return resource.getResponseField('HumanTaskConfig.UiConfig.HumanTaskUiArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeLabelingJobHumanTaskConfigAnnotationConsolidationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get annotationConsolidationLambdaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.AnnotationConsolidationConfig.AnnotationConsolidationLambdaArn'),
        outputPath: 'HumanTaskConfig.AnnotationConsolidationConfig.AnnotationConsolidationLambdaArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.AnnotationConsolidationConfig.AnnotationConsolidationLambdaArn', props);
    return resource.getResponseField('HumanTaskConfig.AnnotationConsolidationConfig.AnnotationConsolidationLambdaArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPrice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get amountInUsd(): SageMakerResponsesDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd {
    return new SageMakerResponsesDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get dollars(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars'),
        outputPath: 'HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars', props);
    return resource.getResponseField('HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars') as unknown as number;
  }

  public get cents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents'),
        outputPath: 'HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents', props);
    return resource.getResponseField('HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents') as unknown as number;
  }

  public get tenthFractionsOfACent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent'),
        outputPath: 'HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent', props);
    return resource.getResponseField('HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent') as unknown as number;
  }

}

export class SageMakerResponsesDescribeLabelingJobLabelingJobOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeLabelingJobRequest) {
  }

  public get outputDatasetS3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobOutput.OutputDatasetS3Uri'),
        outputPath: 'LabelingJobOutput.OutputDatasetS3Uri',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobOutput.OutputDatasetS3Uri', props);
    return resource.getResponseField('LabelingJobOutput.OutputDatasetS3Uri') as unknown as string;
  }

  public get finalActiveLearningModelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLabelingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeLabelingJob.LabelingJobOutput.FinalActiveLearningModelArn'),
        outputPath: 'LabelingJobOutput.FinalActiveLearningModelArn',
        parameters: {
          LabelingJobName: this.__input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLabelingJob.LabelingJobOutput.FinalActiveLearningModelArn', props);
    return resource.getResponseField('LabelingJobOutput.FinalActiveLearningModelArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelInput) {
  }

  public get modelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.ModelName'),
        outputPath: 'ModelName',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelName', props);
    return resource.getResponseField('ModelName') as unknown as string;
  }

  public get primaryContainer(): SageMakerResponsesDescribeModelPrimaryContainer {
    return new SageMakerResponsesDescribeModelPrimaryContainer(this.__scope, this.__resources, this.__input);
  }

  public get containers(): shapes.SageMakerContainerDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.Containers'),
        outputPath: 'Containers',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.Containers', props);
    return resource.getResponseField('Containers') as unknown as shapes.SageMakerContainerDefinition[];
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.ExecutionRoleArn'),
        outputPath: 'ExecutionRoleArn',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ExecutionRoleArn', props);
    return resource.getResponseField('ExecutionRoleArn') as unknown as string;
  }

  public get vpcConfig(): SageMakerResponsesDescribeModelVpcConfig {
    return new SageMakerResponsesDescribeModelVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get modelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.ModelArn'),
        outputPath: 'ModelArn',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

  public get enableNetworkIsolation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.EnableNetworkIsolation'),
        outputPath: 'EnableNetworkIsolation',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.EnableNetworkIsolation', props);
    return resource.getResponseField('EnableNetworkIsolation') as unknown as boolean;
  }

}

export class SageMakerResponsesDescribeModelPrimaryContainer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelInput) {
  }

  public get containerHostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.PrimaryContainer.ContainerHostname'),
        outputPath: 'PrimaryContainer.ContainerHostname',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.PrimaryContainer.ContainerHostname', props);
    return resource.getResponseField('PrimaryContainer.ContainerHostname') as unknown as string;
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.PrimaryContainer.Image'),
        outputPath: 'PrimaryContainer.Image',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.PrimaryContainer.Image', props);
    return resource.getResponseField('PrimaryContainer.Image') as unknown as string;
  }

  public get imageConfig(): SageMakerResponsesDescribeModelPrimaryContainerImageConfig {
    return new SageMakerResponsesDescribeModelPrimaryContainerImageConfig(this.__scope, this.__resources, this.__input);
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.PrimaryContainer.Mode'),
        outputPath: 'PrimaryContainer.Mode',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.PrimaryContainer.Mode', props);
    return resource.getResponseField('PrimaryContainer.Mode') as unknown as string;
  }

  public get modelDataUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.PrimaryContainer.ModelDataUrl'),
        outputPath: 'PrimaryContainer.ModelDataUrl',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.PrimaryContainer.ModelDataUrl', props);
    return resource.getResponseField('PrimaryContainer.ModelDataUrl') as unknown as string;
  }

  public get environment(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.PrimaryContainer.Environment'),
        outputPath: 'PrimaryContainer.Environment',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.PrimaryContainer.Environment', props);
    return resource.getResponseField('PrimaryContainer.Environment') as unknown as Record<string, string>;
  }

  public get modelPackageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.PrimaryContainer.ModelPackageName'),
        outputPath: 'PrimaryContainer.ModelPackageName',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.PrimaryContainer.ModelPackageName', props);
    return resource.getResponseField('PrimaryContainer.ModelPackageName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeModelPrimaryContainerImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelInput) {
  }

  public get repositoryAccessMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.PrimaryContainer.ImageConfig.RepositoryAccessMode'),
        outputPath: 'PrimaryContainer.ImageConfig.RepositoryAccessMode',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.PrimaryContainer.ImageConfig.RepositoryAccessMode', props);
    return resource.getResponseField('PrimaryContainer.ImageConfig.RepositoryAccessMode') as unknown as string;
  }

}

export class SageMakerResponsesDescribeModelVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelInput) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.VpcConfig.SecurityGroupIds'),
        outputPath: 'VpcConfig.SecurityGroupIds',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModel',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModel.VpcConfig.Subnets'),
        outputPath: 'VpcConfig.Subnets',
        parameters: {
          ModelName: this.__input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModel.VpcConfig.Subnets', props);
    return resource.getResponseField('VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeModelPackage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelPackageInput) {
  }

  public get modelPackageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ModelPackageName'),
        outputPath: 'ModelPackageName',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ModelPackageName', props);
    return resource.getResponseField('ModelPackageName') as unknown as string;
  }

  public get modelPackageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ModelPackageArn'),
        outputPath: 'ModelPackageArn',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ModelPackageArn', props);
    return resource.getResponseField('ModelPackageArn') as unknown as string;
  }

  public get modelPackageDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ModelPackageDescription'),
        outputPath: 'ModelPackageDescription',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ModelPackageDescription', props);
    return resource.getResponseField('ModelPackageDescription') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get inferenceSpecification(): SageMakerResponsesDescribeModelPackageInferenceSpecification {
    return new SageMakerResponsesDescribeModelPackageInferenceSpecification(this.__scope, this.__resources, this.__input);
  }

  public get sourceAlgorithmSpecification(): SageMakerResponsesDescribeModelPackageSourceAlgorithmSpecification {
    return new SageMakerResponsesDescribeModelPackageSourceAlgorithmSpecification(this.__scope, this.__resources, this.__input);
  }

  public get validationSpecification(): SageMakerResponsesDescribeModelPackageValidationSpecification {
    return new SageMakerResponsesDescribeModelPackageValidationSpecification(this.__scope, this.__resources, this.__input);
  }

  public get modelPackageStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ModelPackageStatus'),
        outputPath: 'ModelPackageStatus',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ModelPackageStatus', props);
    return resource.getResponseField('ModelPackageStatus') as unknown as string;
  }

  public get modelPackageStatusDetails(): SageMakerResponsesDescribeModelPackageModelPackageStatusDetails {
    return new SageMakerResponsesDescribeModelPackageModelPackageStatusDetails(this.__scope, this.__resources, this.__input);
  }

  public get certifyForMarketplace(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.CertifyForMarketplace'),
        outputPath: 'CertifyForMarketplace',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.CertifyForMarketplace', props);
    return resource.getResponseField('CertifyForMarketplace') as unknown as boolean;
  }

}

export class SageMakerResponsesDescribeModelPackageInferenceSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelPackageInput) {
  }

  public get containers(): shapes.SageMakerModelPackageContainerDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.InferenceSpecification.Containers'),
        outputPath: 'InferenceSpecification.Containers',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.InferenceSpecification.Containers', props);
    return resource.getResponseField('InferenceSpecification.Containers') as unknown as shapes.SageMakerModelPackageContainerDefinition[];
  }

  public get supportedTransformInstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.InferenceSpecification.SupportedTransformInstanceTypes'),
        outputPath: 'InferenceSpecification.SupportedTransformInstanceTypes',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.InferenceSpecification.SupportedTransformInstanceTypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedTransformInstanceTypes') as unknown as string[];
  }

  public get supportedRealtimeInferenceInstanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.InferenceSpecification.SupportedRealtimeInferenceInstanceTypes'),
        outputPath: 'InferenceSpecification.SupportedRealtimeInferenceInstanceTypes',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.InferenceSpecification.SupportedRealtimeInferenceInstanceTypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedRealtimeInferenceInstanceTypes') as unknown as string[];
  }

  public get supportedContentTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.InferenceSpecification.SupportedContentTypes'),
        outputPath: 'InferenceSpecification.SupportedContentTypes',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.InferenceSpecification.SupportedContentTypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedContentTypes') as unknown as string[];
  }

  public get supportedResponseMimeTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.InferenceSpecification.SupportedResponseMIMETypes'),
        outputPath: 'InferenceSpecification.SupportedResponseMIMETypes',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.InferenceSpecification.SupportedResponseMIMETypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedResponseMIMETypes') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeModelPackageSourceAlgorithmSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelPackageInput) {
  }

  public get sourceAlgorithms(): shapes.SageMakerSourceAlgorithm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.SourceAlgorithmSpecification.SourceAlgorithms'),
        outputPath: 'SourceAlgorithmSpecification.SourceAlgorithms',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.SourceAlgorithmSpecification.SourceAlgorithms', props);
    return resource.getResponseField('SourceAlgorithmSpecification.SourceAlgorithms') as unknown as shapes.SageMakerSourceAlgorithm[];
  }

}

export class SageMakerResponsesDescribeModelPackageValidationSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelPackageInput) {
  }

  public get validationRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ValidationSpecification.ValidationRole'),
        outputPath: 'ValidationSpecification.ValidationRole',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ValidationSpecification.ValidationRole', props);
    return resource.getResponseField('ValidationSpecification.ValidationRole') as unknown as string;
  }

  public get validationProfiles(): shapes.SageMakerModelPackageValidationProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ValidationSpecification.ValidationProfiles'),
        outputPath: 'ValidationSpecification.ValidationProfiles',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ValidationSpecification.ValidationProfiles', props);
    return resource.getResponseField('ValidationSpecification.ValidationProfiles') as unknown as shapes.SageMakerModelPackageValidationProfile[];
  }

}

export class SageMakerResponsesDescribeModelPackageModelPackageStatusDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeModelPackageInput) {
  }

  public get validationStatuses(): shapes.SageMakerModelPackageStatusItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ModelPackageStatusDetails.ValidationStatuses'),
        outputPath: 'ModelPackageStatusDetails.ValidationStatuses',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ModelPackageStatusDetails.ValidationStatuses', props);
    return resource.getResponseField('ModelPackageStatusDetails.ValidationStatuses') as unknown as shapes.SageMakerModelPackageStatusItem[];
  }

  public get imageScanStatuses(): shapes.SageMakerModelPackageStatusItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeModelPackage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeModelPackage.ModelPackageStatusDetails.ImageScanStatuses'),
        outputPath: 'ModelPackageStatusDetails.ImageScanStatuses',
        parameters: {
          ModelPackageName: this.__input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeModelPackage.ModelPackageStatusDetails.ImageScanStatuses', props);
    return resource.getResponseField('ModelPackageStatusDetails.ImageScanStatuses') as unknown as shapes.SageMakerModelPackageStatusItem[];
  }

}

export class SageMakerResponsesDescribeMonitoringSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get monitoringScheduleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleArn'),
        outputPath: 'MonitoringScheduleArn',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleArn', props);
    return resource.getResponseField('MonitoringScheduleArn') as unknown as string;
  }

  public get monitoringScheduleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleName'),
        outputPath: 'MonitoringScheduleName',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleName', props);
    return resource.getResponseField('MonitoringScheduleName') as unknown as string;
  }

  public get monitoringScheduleStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleStatus'),
        outputPath: 'MonitoringScheduleStatus',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleStatus', props);
    return resource.getResponseField('MonitoringScheduleStatus') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get monitoringScheduleConfig(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfig {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfig(this.__scope, this.__resources, this.__input);
  }

  public get endpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.EndpointName'),
        outputPath: 'EndpointName',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.EndpointName', props);
    return resource.getResponseField('EndpointName') as unknown as string;
  }

  public get lastMonitoringExecutionSummary(): SageMakerResponsesDescribeMonitoringScheduleLastMonitoringExecutionSummary {
    return new SageMakerResponsesDescribeMonitoringScheduleLastMonitoringExecutionSummary(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get scheduleConfig(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigScheduleConfig {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigScheduleConfig(this.__scope, this.__resources, this.__input);
  }

  public get monitoringJobDefinition(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigScheduleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.ScheduleConfig.ScheduleExpression'),
        outputPath: 'MonitoringScheduleConfig.ScheduleConfig.ScheduleExpression',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.ScheduleConfig.ScheduleExpression', props);
    return resource.getResponseField('MonitoringScheduleConfig.ScheduleConfig.ScheduleExpression') as unknown as string;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get baselineConfig(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig(this.__scope, this.__resources, this.__input);
  }

  public get monitoringInputs(): shapes.SageMakerMonitoringInput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringInputs'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringInputs',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringInputs', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringInputs') as unknown as shapes.SageMakerMonitoringInput[];
  }

  public get monitoringOutputConfig(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get monitoringResources(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources(this.__scope, this.__resources, this.__input);
  }

  public get monitoringAppSpecification(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification(this.__scope, this.__resources, this.__input);
  }

  public get stoppingCondition(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition(this.__scope, this.__resources, this.__input);
  }

  public get environment(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.Environment'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.Environment',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.Environment', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.Environment') as unknown as Record<string, string>;
  }

  public get networkConfig(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.RoleArn'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.RoleArn',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.RoleArn', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.RoleArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get constraintsResource(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource(this.__scope, this.__resources, this.__input);
  }

  public get statisticsResource(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.ConstraintsResource.S3Uri'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.ConstraintsResource.S3Uri',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.ConstraintsResource.S3Uri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.ConstraintsResource.S3Uri') as unknown as string;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.StatisticsResource.S3Uri'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.StatisticsResource.S3Uri',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.StatisticsResource.S3Uri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.StatisticsResource.S3Uri') as unknown as string;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get monitoringOutputs(): shapes.SageMakerMonitoringOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.MonitoringOutputs'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.MonitoringOutputs',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.MonitoringOutputs', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.MonitoringOutputs') as unknown as shapes.SageMakerMonitoringOutput[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.KmsKeyId'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.KmsKeyId',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.KmsKeyId', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get clusterConfig(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get instanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceCount'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceCount',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceCount', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceCount') as unknown as number;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceType'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceType',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceType', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceType') as unknown as string;
  }

  public get volumeSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeSizeInGB'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeSizeInGB',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeSizeInGB', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeSizeInGB') as unknown as number;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeKmsKeyId'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeKmsKeyId',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get imageUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ImageUri'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ImageUri',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ImageUri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ImageUri') as unknown as string;
  }

  public get containerEntrypoint(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerEntrypoint'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerEntrypoint',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerEntrypoint', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerEntrypoint') as unknown as string[];
  }

  public get containerArguments(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerArguments'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerArguments',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerArguments', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerArguments') as unknown as string[];
  }

  public get recordPreprocessorSourceUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.RecordPreprocessorSourceUri'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.RecordPreprocessorSourceUri',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.RecordPreprocessorSourceUri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.RecordPreprocessorSourceUri') as unknown as string;
  }

  public get postAnalyticsProcessorSourceUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.PostAnalyticsProcessorSourceUri'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.PostAnalyticsProcessorSourceUri',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.PostAnalyticsProcessorSourceUri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.PostAnalyticsProcessorSourceUri') as unknown as string;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get maxRuntimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.StoppingCondition.MaxRuntimeInSeconds'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.StoppingCondition.MaxRuntimeInSeconds',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.StoppingCondition.MaxRuntimeInSeconds', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.StoppingCondition.MaxRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get enableInterContainerTrafficEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableInterContainerTrafficEncryption'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableInterContainerTrafficEncryption',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableInterContainerTrafficEncryption', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableInterContainerTrafficEncryption') as unknown as boolean;
  }

  public get enableNetworkIsolation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableNetworkIsolation'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableNetworkIsolation',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableNetworkIsolation', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableNetworkIsolation') as unknown as boolean;
  }

  public get vpcConfig(): SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig {
    return new SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.SecurityGroupIds'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.SecurityGroupIds',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.Subnets'),
        outputPath: 'MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.Subnets',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.Subnets', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeMonitoringScheduleLastMonitoringExecutionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
  }

  public get monitoringScheduleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.MonitoringScheduleName'),
        outputPath: 'LastMonitoringExecutionSummary.MonitoringScheduleName',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.MonitoringScheduleName', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.MonitoringScheduleName') as unknown as string;
  }

  public get scheduledTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.ScheduledTime'),
        outputPath: 'LastMonitoringExecutionSummary.ScheduledTime',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.ScheduledTime', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.ScheduledTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.CreationTime'),
        outputPath: 'LastMonitoringExecutionSummary.CreationTime',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.CreationTime', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.CreationTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.LastModifiedTime'),
        outputPath: 'LastMonitoringExecutionSummary.LastModifiedTime',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.LastModifiedTime', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.LastModifiedTime') as unknown as string;
  }

  public get monitoringExecutionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.MonitoringExecutionStatus'),
        outputPath: 'LastMonitoringExecutionSummary.MonitoringExecutionStatus',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.MonitoringExecutionStatus', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.MonitoringExecutionStatus') as unknown as string;
  }

  public get processingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.ProcessingJobArn'),
        outputPath: 'LastMonitoringExecutionSummary.ProcessingJobArn',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.ProcessingJobArn', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.ProcessingJobArn') as unknown as string;
  }

  public get endpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.EndpointName'),
        outputPath: 'LastMonitoringExecutionSummary.EndpointName',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.EndpointName', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.EndpointName') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeMonitoringSchedule.LastMonitoringExecutionSummary.FailureReason'),
        outputPath: 'LastMonitoringExecutionSummary.FailureReason',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.FailureReason', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.FailureReason') as unknown as string;
  }

}

export class SageMakerResponsesDescribeNotebookInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeNotebookInstanceInput) {
  }

  public get notebookInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.NotebookInstanceArn'),
        outputPath: 'NotebookInstanceArn',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.NotebookInstanceArn', props);
    return resource.getResponseField('NotebookInstanceArn') as unknown as string;
  }

  public get notebookInstanceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.NotebookInstanceName'),
        outputPath: 'NotebookInstanceName',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.NotebookInstanceName', props);
    return resource.getResponseField('NotebookInstanceName') as unknown as string;
  }

  public get notebookInstanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.NotebookInstanceStatus'),
        outputPath: 'NotebookInstanceStatus',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.NotebookInstanceStatus', props);
    return resource.getResponseField('NotebookInstanceStatus') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.Url'),
        outputPath: 'Url',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.InstanceType'),
        outputPath: 'InstanceType',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.InstanceType', props);
    return resource.getResponseField('InstanceType') as unknown as string;
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.SubnetId'),
        outputPath: 'SubnetId',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.SubnetId', props);
    return resource.getResponseField('SubnetId') as unknown as string;
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.SecurityGroups'),
        outputPath: 'SecurityGroups',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.SecurityGroups', props);
    return resource.getResponseField('SecurityGroups') as unknown as string[];
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.KmsKeyId'),
        outputPath: 'KmsKeyId',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

  public get networkInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.NetworkInterfaceId'),
        outputPath: 'NetworkInterfaceId',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.NetworkInterfaceId', props);
    return resource.getResponseField('NetworkInterfaceId') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get notebookInstanceLifecycleConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.NotebookInstanceLifecycleConfigName'),
        outputPath: 'NotebookInstanceLifecycleConfigName',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.NotebookInstanceLifecycleConfigName', props);
    return resource.getResponseField('NotebookInstanceLifecycleConfigName') as unknown as string;
  }

  public get directInternetAccess(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.DirectInternetAccess'),
        outputPath: 'DirectInternetAccess',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.DirectInternetAccess', props);
    return resource.getResponseField('DirectInternetAccess') as unknown as string;
  }

  public get volumeSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.VolumeSizeInGB'),
        outputPath: 'VolumeSizeInGB',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.VolumeSizeInGB', props);
    return resource.getResponseField('VolumeSizeInGB') as unknown as number;
  }

  public get acceleratorTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.AcceleratorTypes'),
        outputPath: 'AcceleratorTypes',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.AcceleratorTypes', props);
    return resource.getResponseField('AcceleratorTypes') as unknown as string[];
  }

  public get defaultCodeRepository(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.DefaultCodeRepository'),
        outputPath: 'DefaultCodeRepository',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.DefaultCodeRepository', props);
    return resource.getResponseField('DefaultCodeRepository') as unknown as string;
  }

  public get additionalCodeRepositories(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.AdditionalCodeRepositories'),
        outputPath: 'AdditionalCodeRepositories',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.AdditionalCodeRepositories', props);
    return resource.getResponseField('AdditionalCodeRepositories') as unknown as string[];
  }

  public get rootAccess(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstance',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstance.RootAccess'),
        outputPath: 'RootAccess',
        parameters: {
          NotebookInstanceName: this.__input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstance.RootAccess', props);
    return resource.getResponseField('RootAccess') as unknown as string;
  }

}

export class SageMakerResponsesDescribeNotebookInstanceLifecycleConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeNotebookInstanceLifecycleConfigInput) {
  }

  public get notebookInstanceLifecycleConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigArn'),
        outputPath: 'NotebookInstanceLifecycleConfigArn',
        parameters: {
          NotebookInstanceLifecycleConfigName: this.__input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigArn', props);
    return resource.getResponseField('NotebookInstanceLifecycleConfigArn') as unknown as string;
  }

  public get notebookInstanceLifecycleConfigName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigName'),
        outputPath: 'NotebookInstanceLifecycleConfigName',
        parameters: {
          NotebookInstanceLifecycleConfigName: this.__input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigName', props);
    return resource.getResponseField('NotebookInstanceLifecycleConfigName') as unknown as string;
  }

  public get onCreate(): shapes.SageMakerNotebookInstanceLifecycleHook[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstanceLifecycleConfig.OnCreate'),
        outputPath: 'OnCreate',
        parameters: {
          NotebookInstanceLifecycleConfigName: this.__input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstanceLifecycleConfig.OnCreate', props);
    return resource.getResponseField('OnCreate') as unknown as shapes.SageMakerNotebookInstanceLifecycleHook[];
  }

  public get onStart(): shapes.SageMakerNotebookInstanceLifecycleHook[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstanceLifecycleConfig.OnStart'),
        outputPath: 'OnStart',
        parameters: {
          NotebookInstanceLifecycleConfigName: this.__input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstanceLifecycleConfig.OnStart', props);
    return resource.getResponseField('OnStart') as unknown as shapes.SageMakerNotebookInstanceLifecycleHook[];
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstanceLifecycleConfig.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          NotebookInstanceLifecycleConfigName: this.__input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstanceLifecycleConfig.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNotebookInstanceLifecycleConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeNotebookInstanceLifecycleConfig.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          NotebookInstanceLifecycleConfigName: this.__input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNotebookInstanceLifecycleConfig.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class SageMakerResponsesDescribeProcessingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get processingInputs(): shapes.SageMakerProcessingInput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingInputs'),
        outputPath: 'ProcessingInputs',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingInputs', props);
    return resource.getResponseField('ProcessingInputs') as unknown as shapes.SageMakerProcessingInput[];
  }

  public get processingOutputConfig(): SageMakerResponsesDescribeProcessingJobProcessingOutputConfig {
    return new SageMakerResponsesDescribeProcessingJobProcessingOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get processingJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingJobName'),
        outputPath: 'ProcessingJobName',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingJobName', props);
    return resource.getResponseField('ProcessingJobName') as unknown as string;
  }

  public get processingResources(): SageMakerResponsesDescribeProcessingJobProcessingResources {
    return new SageMakerResponsesDescribeProcessingJobProcessingResources(this.__scope, this.__resources, this.__input);
  }

  public get stoppingCondition(): SageMakerResponsesDescribeProcessingJobStoppingCondition {
    return new SageMakerResponsesDescribeProcessingJobStoppingCondition(this.__scope, this.__resources, this.__input);
  }

  public get appSpecification(): SageMakerResponsesDescribeProcessingJobAppSpecification {
    return new SageMakerResponsesDescribeProcessingJobAppSpecification(this.__scope, this.__resources, this.__input);
  }

  public get environment(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.Environment'),
        outputPath: 'Environment',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.Environment', props);
    return resource.getResponseField('Environment') as unknown as Record<string, string>;
  }

  public get networkConfig(): SageMakerResponsesDescribeProcessingJobNetworkConfig {
    return new SageMakerResponsesDescribeProcessingJobNetworkConfig(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get experimentConfig(): SageMakerResponsesDescribeProcessingJobExperimentConfig {
    return new SageMakerResponsesDescribeProcessingJobExperimentConfig(this.__scope, this.__resources, this.__input);
  }

  public get processingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingJobArn'),
        outputPath: 'ProcessingJobArn',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingJobArn', props);
    return resource.getResponseField('ProcessingJobArn') as unknown as string;
  }

  public get processingJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingJobStatus'),
        outputPath: 'ProcessingJobStatus',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingJobStatus', props);
    return resource.getResponseField('ProcessingJobStatus') as unknown as string;
  }

  public get exitMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ExitMessage'),
        outputPath: 'ExitMessage',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ExitMessage', props);
    return resource.getResponseField('ExitMessage') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get processingEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingEndTime'),
        outputPath: 'ProcessingEndTime',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingEndTime', props);
    return resource.getResponseField('ProcessingEndTime') as unknown as string;
  }

  public get processingStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingStartTime'),
        outputPath: 'ProcessingStartTime',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingStartTime', props);
    return resource.getResponseField('ProcessingStartTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get monitoringScheduleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.MonitoringScheduleArn'),
        outputPath: 'MonitoringScheduleArn',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.MonitoringScheduleArn', props);
    return resource.getResponseField('MonitoringScheduleArn') as unknown as string;
  }

  public get autoMlJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.AutoMLJobArn'),
        outputPath: 'AutoMLJobArn',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

  public get trainingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.TrainingJobArn'),
        outputPath: 'TrainingJobArn',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.TrainingJobArn', props);
    return resource.getResponseField('TrainingJobArn') as unknown as string;
  }

}

export class SageMakerResponsesDescribeProcessingJobProcessingOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get outputs(): shapes.SageMakerProcessingOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingOutputConfig.Outputs'),
        outputPath: 'ProcessingOutputConfig.Outputs',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingOutputConfig.Outputs', props);
    return resource.getResponseField('ProcessingOutputConfig.Outputs') as unknown as shapes.SageMakerProcessingOutput[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingOutputConfig.KmsKeyId'),
        outputPath: 'ProcessingOutputConfig.KmsKeyId',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingOutputConfig.KmsKeyId', props);
    return resource.getResponseField('ProcessingOutputConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeProcessingJobProcessingResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get clusterConfig(): SageMakerResponsesDescribeProcessingJobProcessingResourcesClusterConfig {
    return new SageMakerResponsesDescribeProcessingJobProcessingResourcesClusterConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeProcessingJobProcessingResourcesClusterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get instanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingResources.ClusterConfig.InstanceCount'),
        outputPath: 'ProcessingResources.ClusterConfig.InstanceCount',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.InstanceCount', props);
    return resource.getResponseField('ProcessingResources.ClusterConfig.InstanceCount') as unknown as number;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingResources.ClusterConfig.InstanceType'),
        outputPath: 'ProcessingResources.ClusterConfig.InstanceType',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.InstanceType', props);
    return resource.getResponseField('ProcessingResources.ClusterConfig.InstanceType') as unknown as string;
  }

  public get volumeSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingResources.ClusterConfig.VolumeSizeInGB'),
        outputPath: 'ProcessingResources.ClusterConfig.VolumeSizeInGB',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.VolumeSizeInGB', props);
    return resource.getResponseField('ProcessingResources.ClusterConfig.VolumeSizeInGB') as unknown as number;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ProcessingResources.ClusterConfig.VolumeKmsKeyId'),
        outputPath: 'ProcessingResources.ClusterConfig.VolumeKmsKeyId',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('ProcessingResources.ClusterConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeProcessingJobStoppingCondition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get maxRuntimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.StoppingCondition.MaxRuntimeInSeconds'),
        outputPath: 'StoppingCondition.MaxRuntimeInSeconds',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.StoppingCondition.MaxRuntimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerResponsesDescribeProcessingJobAppSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get imageUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.AppSpecification.ImageUri'),
        outputPath: 'AppSpecification.ImageUri',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.AppSpecification.ImageUri', props);
    return resource.getResponseField('AppSpecification.ImageUri') as unknown as string;
  }

  public get containerEntrypoint(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.AppSpecification.ContainerEntrypoint'),
        outputPath: 'AppSpecification.ContainerEntrypoint',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.AppSpecification.ContainerEntrypoint', props);
    return resource.getResponseField('AppSpecification.ContainerEntrypoint') as unknown as string[];
  }

  public get containerArguments(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.AppSpecification.ContainerArguments'),
        outputPath: 'AppSpecification.ContainerArguments',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.AppSpecification.ContainerArguments', props);
    return resource.getResponseField('AppSpecification.ContainerArguments') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeProcessingJobNetworkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get enableInterContainerTrafficEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.NetworkConfig.EnableInterContainerTrafficEncryption'),
        outputPath: 'NetworkConfig.EnableInterContainerTrafficEncryption',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.NetworkConfig.EnableInterContainerTrafficEncryption', props);
    return resource.getResponseField('NetworkConfig.EnableInterContainerTrafficEncryption') as unknown as boolean;
  }

  public get enableNetworkIsolation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.NetworkConfig.EnableNetworkIsolation'),
        outputPath: 'NetworkConfig.EnableNetworkIsolation',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.NetworkConfig.EnableNetworkIsolation', props);
    return resource.getResponseField('NetworkConfig.EnableNetworkIsolation') as unknown as boolean;
  }

  public get vpcConfig(): SageMakerResponsesDescribeProcessingJobNetworkConfigVpcConfig {
    return new SageMakerResponsesDescribeProcessingJobNetworkConfigVpcConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeProcessingJobNetworkConfigVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.NetworkConfig.VpcConfig.SecurityGroupIds'),
        outputPath: 'NetworkConfig.VpcConfig.SecurityGroupIds',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.NetworkConfig.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('NetworkConfig.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.NetworkConfig.VpcConfig.Subnets'),
        outputPath: 'NetworkConfig.VpcConfig.Subnets',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.NetworkConfig.VpcConfig.Subnets', props);
    return resource.getResponseField('NetworkConfig.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeProcessingJobExperimentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeProcessingJobRequest) {
  }

  public get experimentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ExperimentConfig.ExperimentName'),
        outputPath: 'ExperimentConfig.ExperimentName',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ExperimentConfig.ExperimentName', props);
    return resource.getResponseField('ExperimentConfig.ExperimentName') as unknown as string;
  }

  public get trialName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ExperimentConfig.TrialName'),
        outputPath: 'ExperimentConfig.TrialName',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ExperimentConfig.TrialName', props);
    return resource.getResponseField('ExperimentConfig.TrialName') as unknown as string;
  }

  public get trialComponentDisplayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProcessingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeProcessingJob.ExperimentConfig.TrialComponentDisplayName'),
        outputPath: 'ExperimentConfig.TrialComponentDisplayName',
        parameters: {
          ProcessingJobName: this.__input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProcessingJob.ExperimentConfig.TrialComponentDisplayName', props);
    return resource.getResponseField('ExperimentConfig.TrialComponentDisplayName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeSubscribedWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeSubscribedWorkteamRequest) {
  }

  public get subscribedWorkteam(): SageMakerResponsesDescribeSubscribedWorkteamSubscribedWorkteam {
    return new SageMakerResponsesDescribeSubscribedWorkteamSubscribedWorkteam(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeSubscribedWorkteamSubscribedWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeSubscribedWorkteamRequest) {
  }

  public get workteamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscribedWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeSubscribedWorkteam.SubscribedWorkteam.WorkteamArn'),
        outputPath: 'SubscribedWorkteam.WorkteamArn',
        parameters: {
          WorkteamArn: this.__input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscribedWorkteam.SubscribedWorkteam.WorkteamArn', props);
    return resource.getResponseField('SubscribedWorkteam.WorkteamArn') as unknown as string;
  }

  public get marketplaceTitle(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscribedWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeSubscribedWorkteam.SubscribedWorkteam.MarketplaceTitle'),
        outputPath: 'SubscribedWorkteam.MarketplaceTitle',
        parameters: {
          WorkteamArn: this.__input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscribedWorkteam.SubscribedWorkteam.MarketplaceTitle', props);
    return resource.getResponseField('SubscribedWorkteam.MarketplaceTitle') as unknown as string;
  }

  public get sellerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscribedWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeSubscribedWorkteam.SubscribedWorkteam.SellerName'),
        outputPath: 'SubscribedWorkteam.SellerName',
        parameters: {
          WorkteamArn: this.__input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscribedWorkteam.SubscribedWorkteam.SellerName', props);
    return resource.getResponseField('SubscribedWorkteam.SellerName') as unknown as string;
  }

  public get marketplaceDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscribedWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeSubscribedWorkteam.SubscribedWorkteam.MarketplaceDescription'),
        outputPath: 'SubscribedWorkteam.MarketplaceDescription',
        parameters: {
          WorkteamArn: this.__input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscribedWorkteam.SubscribedWorkteam.MarketplaceDescription', props);
    return resource.getResponseField('SubscribedWorkteam.MarketplaceDescription') as unknown as string;
  }

  public get listingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubscribedWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeSubscribedWorkteam.SubscribedWorkteam.ListingId'),
        outputPath: 'SubscribedWorkteam.ListingId',
        parameters: {
          WorkteamArn: this.__input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubscribedWorkteam.SubscribedWorkteam.ListingId', props);
    return resource.getResponseField('SubscribedWorkteam.ListingId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrainingJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get trainingJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TrainingJobName'),
        outputPath: 'TrainingJobName',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TrainingJobName', props);
    return resource.getResponseField('TrainingJobName') as unknown as string;
  }

  public get trainingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TrainingJobArn'),
        outputPath: 'TrainingJobArn',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TrainingJobArn', props);
    return resource.getResponseField('TrainingJobArn') as unknown as string;
  }

  public get tuningJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TuningJobArn'),
        outputPath: 'TuningJobArn',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TuningJobArn', props);
    return resource.getResponseField('TuningJobArn') as unknown as string;
  }

  public get labelingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.LabelingJobArn'),
        outputPath: 'LabelingJobArn',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.LabelingJobArn', props);
    return resource.getResponseField('LabelingJobArn') as unknown as string;
  }

  public get autoMlJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.AutoMLJobArn'),
        outputPath: 'AutoMLJobArn',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

  public get modelArtifacts(): SageMakerResponsesDescribeTrainingJobModelArtifacts {
    return new SageMakerResponsesDescribeTrainingJobModelArtifacts(this.__scope, this.__resources, this.__input);
  }

  public get trainingJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TrainingJobStatus'),
        outputPath: 'TrainingJobStatus',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TrainingJobStatus', props);
    return resource.getResponseField('TrainingJobStatus') as unknown as string;
  }

  public get secondaryStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.SecondaryStatus'),
        outputPath: 'SecondaryStatus',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.SecondaryStatus', props);
    return resource.getResponseField('SecondaryStatus') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get hyperParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.HyperParameters'),
        outputPath: 'HyperParameters',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.HyperParameters', props);
    return resource.getResponseField('HyperParameters') as unknown as Record<string, string>;
  }

  public get algorithmSpecification(): SageMakerResponsesDescribeTrainingJobAlgorithmSpecification {
    return new SageMakerResponsesDescribeTrainingJobAlgorithmSpecification(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get inputDataConfig(): shapes.SageMakerChannel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.InputDataConfig'),
        outputPath: 'InputDataConfig',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.InputDataConfig', props);
    return resource.getResponseField('InputDataConfig') as unknown as shapes.SageMakerChannel[];
  }

  public get outputDataConfig(): SageMakerResponsesDescribeTrainingJobOutputDataConfig {
    return new SageMakerResponsesDescribeTrainingJobOutputDataConfig(this.__scope, this.__resources, this.__input);
  }

  public get resourceConfig(): SageMakerResponsesDescribeTrainingJobResourceConfig {
    return new SageMakerResponsesDescribeTrainingJobResourceConfig(this.__scope, this.__resources, this.__input);
  }

  public get vpcConfig(): SageMakerResponsesDescribeTrainingJobVpcConfig {
    return new SageMakerResponsesDescribeTrainingJobVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get stoppingCondition(): SageMakerResponsesDescribeTrainingJobStoppingCondition {
    return new SageMakerResponsesDescribeTrainingJobStoppingCondition(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get trainingStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TrainingStartTime'),
        outputPath: 'TrainingStartTime',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TrainingStartTime', props);
    return resource.getResponseField('TrainingStartTime') as unknown as string;
  }

  public get trainingEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TrainingEndTime'),
        outputPath: 'TrainingEndTime',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TrainingEndTime', props);
    return resource.getResponseField('TrainingEndTime') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get secondaryStatusTransitions(): shapes.SageMakerSecondaryStatusTransition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.SecondaryStatusTransitions'),
        outputPath: 'SecondaryStatusTransitions',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.SecondaryStatusTransitions', props);
    return resource.getResponseField('SecondaryStatusTransitions') as unknown as shapes.SageMakerSecondaryStatusTransition[];
  }

  public get finalMetricDataList(): shapes.SageMakerMetricData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.FinalMetricDataList'),
        outputPath: 'FinalMetricDataList',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.FinalMetricDataList', props);
    return resource.getResponseField('FinalMetricDataList') as unknown as shapes.SageMakerMetricData[];
  }

  public get enableNetworkIsolation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.EnableNetworkIsolation'),
        outputPath: 'EnableNetworkIsolation',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.EnableNetworkIsolation', props);
    return resource.getResponseField('EnableNetworkIsolation') as unknown as boolean;
  }

  public get enableInterContainerTrafficEncryption(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.EnableInterContainerTrafficEncryption'),
        outputPath: 'EnableInterContainerTrafficEncryption',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.EnableInterContainerTrafficEncryption', props);
    return resource.getResponseField('EnableInterContainerTrafficEncryption') as unknown as boolean;
  }

  public get enableManagedSpotTraining(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.EnableManagedSpotTraining'),
        outputPath: 'EnableManagedSpotTraining',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.EnableManagedSpotTraining', props);
    return resource.getResponseField('EnableManagedSpotTraining') as unknown as boolean;
  }

  public get checkpointConfig(): SageMakerResponsesDescribeTrainingJobCheckpointConfig {
    return new SageMakerResponsesDescribeTrainingJobCheckpointConfig(this.__scope, this.__resources, this.__input);
  }

  public get trainingTimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TrainingTimeInSeconds'),
        outputPath: 'TrainingTimeInSeconds',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TrainingTimeInSeconds', props);
    return resource.getResponseField('TrainingTimeInSeconds') as unknown as number;
  }

  public get billableTimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.BillableTimeInSeconds'),
        outputPath: 'BillableTimeInSeconds',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.BillableTimeInSeconds', props);
    return resource.getResponseField('BillableTimeInSeconds') as unknown as number;
  }

  public get debugHookConfig(): SageMakerResponsesDescribeTrainingJobDebugHookConfig {
    return new SageMakerResponsesDescribeTrainingJobDebugHookConfig(this.__scope, this.__resources, this.__input);
  }

  public get experimentConfig(): SageMakerResponsesDescribeTrainingJobExperimentConfig {
    return new SageMakerResponsesDescribeTrainingJobExperimentConfig(this.__scope, this.__resources, this.__input);
  }

  public get debugRuleConfigurations(): shapes.SageMakerDebugRuleConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.DebugRuleConfigurations'),
        outputPath: 'DebugRuleConfigurations',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.DebugRuleConfigurations', props);
    return resource.getResponseField('DebugRuleConfigurations') as unknown as shapes.SageMakerDebugRuleConfiguration[];
  }

  public get tensorBoardOutputConfig(): SageMakerResponsesDescribeTrainingJobTensorBoardOutputConfig {
    return new SageMakerResponsesDescribeTrainingJobTensorBoardOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get debugRuleEvaluationStatuses(): shapes.SageMakerDebugRuleEvaluationStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.DebugRuleEvaluationStatuses'),
        outputPath: 'DebugRuleEvaluationStatuses',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.DebugRuleEvaluationStatuses', props);
    return resource.getResponseField('DebugRuleEvaluationStatuses') as unknown as shapes.SageMakerDebugRuleEvaluationStatus[];
  }

}

export class SageMakerResponsesDescribeTrainingJobModelArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get s3ModelArtifacts(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ModelArtifacts.S3ModelArtifacts'),
        outputPath: 'ModelArtifacts.S3ModelArtifacts',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ModelArtifacts.S3ModelArtifacts', props);
    return resource.getResponseField('ModelArtifacts.S3ModelArtifacts') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrainingJobAlgorithmSpecification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get trainingImage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.AlgorithmSpecification.TrainingImage'),
        outputPath: 'AlgorithmSpecification.TrainingImage',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.AlgorithmSpecification.TrainingImage', props);
    return resource.getResponseField('AlgorithmSpecification.TrainingImage') as unknown as string;
  }

  public get algorithmName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.AlgorithmSpecification.AlgorithmName'),
        outputPath: 'AlgorithmSpecification.AlgorithmName',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.AlgorithmSpecification.AlgorithmName', props);
    return resource.getResponseField('AlgorithmSpecification.AlgorithmName') as unknown as string;
  }

  public get trainingInputMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.AlgorithmSpecification.TrainingInputMode'),
        outputPath: 'AlgorithmSpecification.TrainingInputMode',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.AlgorithmSpecification.TrainingInputMode', props);
    return resource.getResponseField('AlgorithmSpecification.TrainingInputMode') as unknown as string;
  }

  public get metricDefinitions(): shapes.SageMakerMetricDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.AlgorithmSpecification.MetricDefinitions'),
        outputPath: 'AlgorithmSpecification.MetricDefinitions',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.AlgorithmSpecification.MetricDefinitions', props);
    return resource.getResponseField('AlgorithmSpecification.MetricDefinitions') as unknown as shapes.SageMakerMetricDefinition[];
  }

  public get enableSageMakerMetricsTimeSeries(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.AlgorithmSpecification.EnableSageMakerMetricsTimeSeries'),
        outputPath: 'AlgorithmSpecification.EnableSageMakerMetricsTimeSeries',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.AlgorithmSpecification.EnableSageMakerMetricsTimeSeries', props);
    return resource.getResponseField('AlgorithmSpecification.EnableSageMakerMetricsTimeSeries') as unknown as boolean;
  }

}

export class SageMakerResponsesDescribeTrainingJobOutputDataConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.OutputDataConfig.KmsKeyId'),
        outputPath: 'OutputDataConfig.KmsKeyId',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.OutputDataConfig.KmsKeyId', props);
    return resource.getResponseField('OutputDataConfig.KmsKeyId') as unknown as string;
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.OutputDataConfig.S3OutputPath'),
        outputPath: 'OutputDataConfig.S3OutputPath',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.OutputDataConfig.S3OutputPath', props);
    return resource.getResponseField('OutputDataConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrainingJobResourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ResourceConfig.InstanceType'),
        outputPath: 'ResourceConfig.InstanceType',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ResourceConfig.InstanceType', props);
    return resource.getResponseField('ResourceConfig.InstanceType') as unknown as string;
  }

  public get instanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ResourceConfig.InstanceCount'),
        outputPath: 'ResourceConfig.InstanceCount',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ResourceConfig.InstanceCount', props);
    return resource.getResponseField('ResourceConfig.InstanceCount') as unknown as number;
  }

  public get volumeSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ResourceConfig.VolumeSizeInGB'),
        outputPath: 'ResourceConfig.VolumeSizeInGB',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ResourceConfig.VolumeSizeInGB', props);
    return resource.getResponseField('ResourceConfig.VolumeSizeInGB') as unknown as number;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ResourceConfig.VolumeKmsKeyId'),
        outputPath: 'ResourceConfig.VolumeKmsKeyId',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ResourceConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('ResourceConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrainingJobVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.VpcConfig.SecurityGroupIds'),
        outputPath: 'VpcConfig.SecurityGroupIds',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfig.SecurityGroupIds') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.VpcConfig.Subnets'),
        outputPath: 'VpcConfig.Subnets',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.VpcConfig.Subnets', props);
    return resource.getResponseField('VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeTrainingJobStoppingCondition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get maxRuntimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.StoppingCondition.MaxRuntimeInSeconds'),
        outputPath: 'StoppingCondition.MaxRuntimeInSeconds',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.StoppingCondition.MaxRuntimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxRuntimeInSeconds') as unknown as number;
  }

  public get maxWaitTimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.StoppingCondition.MaxWaitTimeInSeconds'),
        outputPath: 'StoppingCondition.MaxWaitTimeInSeconds',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.StoppingCondition.MaxWaitTimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxWaitTimeInSeconds') as unknown as number;
  }

}

export class SageMakerResponsesDescribeTrainingJobCheckpointConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.CheckpointConfig.S3Uri'),
        outputPath: 'CheckpointConfig.S3Uri',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.CheckpointConfig.S3Uri', props);
    return resource.getResponseField('CheckpointConfig.S3Uri') as unknown as string;
  }

  public get localPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.CheckpointConfig.LocalPath'),
        outputPath: 'CheckpointConfig.LocalPath',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.CheckpointConfig.LocalPath', props);
    return resource.getResponseField('CheckpointConfig.LocalPath') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrainingJobDebugHookConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get localPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.DebugHookConfig.LocalPath'),
        outputPath: 'DebugHookConfig.LocalPath',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.DebugHookConfig.LocalPath', props);
    return resource.getResponseField('DebugHookConfig.LocalPath') as unknown as string;
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.DebugHookConfig.S3OutputPath'),
        outputPath: 'DebugHookConfig.S3OutputPath',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.DebugHookConfig.S3OutputPath', props);
    return resource.getResponseField('DebugHookConfig.S3OutputPath') as unknown as string;
  }

  public get hookParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.DebugHookConfig.HookParameters'),
        outputPath: 'DebugHookConfig.HookParameters',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.DebugHookConfig.HookParameters', props);
    return resource.getResponseField('DebugHookConfig.HookParameters') as unknown as Record<string, string>;
  }

  public get collectionConfigurations(): shapes.SageMakerCollectionConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.DebugHookConfig.CollectionConfigurations'),
        outputPath: 'DebugHookConfig.CollectionConfigurations',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.DebugHookConfig.CollectionConfigurations', props);
    return resource.getResponseField('DebugHookConfig.CollectionConfigurations') as unknown as shapes.SageMakerCollectionConfiguration[];
  }

}

export class SageMakerResponsesDescribeTrainingJobExperimentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get experimentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ExperimentConfig.ExperimentName'),
        outputPath: 'ExperimentConfig.ExperimentName',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ExperimentConfig.ExperimentName', props);
    return resource.getResponseField('ExperimentConfig.ExperimentName') as unknown as string;
  }

  public get trialName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ExperimentConfig.TrialName'),
        outputPath: 'ExperimentConfig.TrialName',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ExperimentConfig.TrialName', props);
    return resource.getResponseField('ExperimentConfig.TrialName') as unknown as string;
  }

  public get trialComponentDisplayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.ExperimentConfig.TrialComponentDisplayName'),
        outputPath: 'ExperimentConfig.TrialComponentDisplayName',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.ExperimentConfig.TrialComponentDisplayName', props);
    return resource.getResponseField('ExperimentConfig.TrialComponentDisplayName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrainingJobTensorBoardOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrainingJobRequest) {
  }

  public get localPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TensorBoardOutputConfig.LocalPath'),
        outputPath: 'TensorBoardOutputConfig.LocalPath',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TensorBoardOutputConfig.LocalPath', props);
    return resource.getResponseField('TensorBoardOutputConfig.LocalPath') as unknown as string;
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrainingJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrainingJob.TensorBoardOutputConfig.S3OutputPath'),
        outputPath: 'TensorBoardOutputConfig.S3OutputPath',
        parameters: {
          TrainingJobName: this.__input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrainingJob.TensorBoardOutputConfig.S3OutputPath', props);
    return resource.getResponseField('TensorBoardOutputConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTransformJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get transformJobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformJobName'),
        outputPath: 'TransformJobName',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformJobName', props);
    return resource.getResponseField('TransformJobName') as unknown as string;
  }

  public get transformJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformJobArn'),
        outputPath: 'TransformJobArn',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformJobArn', props);
    return resource.getResponseField('TransformJobArn') as unknown as string;
  }

  public get transformJobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformJobStatus'),
        outputPath: 'TransformJobStatus',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformJobStatus', props);
    return resource.getResponseField('TransformJobStatus') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get modelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.ModelName'),
        outputPath: 'ModelName',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.ModelName', props);
    return resource.getResponseField('ModelName') as unknown as string;
  }

  public get maxConcurrentTransforms(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.MaxConcurrentTransforms'),
        outputPath: 'MaxConcurrentTransforms',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.MaxConcurrentTransforms', props);
    return resource.getResponseField('MaxConcurrentTransforms') as unknown as number;
  }

  public get modelClientConfig(): SageMakerResponsesDescribeTransformJobModelClientConfig {
    return new SageMakerResponsesDescribeTransformJobModelClientConfig(this.__scope, this.__resources, this.__input);
  }

  public get maxPayloadInMb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.MaxPayloadInMB'),
        outputPath: 'MaxPayloadInMB',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.MaxPayloadInMB', props);
    return resource.getResponseField('MaxPayloadInMB') as unknown as number;
  }

  public get batchStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.BatchStrategy'),
        outputPath: 'BatchStrategy',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.BatchStrategy', props);
    return resource.getResponseField('BatchStrategy') as unknown as string;
  }

  public get environment(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.Environment'),
        outputPath: 'Environment',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.Environment', props);
    return resource.getResponseField('Environment') as unknown as Record<string, string>;
  }

  public get transformInput(): SageMakerResponsesDescribeTransformJobTransformInput {
    return new SageMakerResponsesDescribeTransformJobTransformInput(this.__scope, this.__resources, this.__input);
  }

  public get transformOutput(): SageMakerResponsesDescribeTransformJobTransformOutput {
    return new SageMakerResponsesDescribeTransformJobTransformOutput(this.__scope, this.__resources, this.__input);
  }

  public get transformResources(): SageMakerResponsesDescribeTransformJobTransformResources {
    return new SageMakerResponsesDescribeTransformJobTransformResources(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get transformStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformStartTime'),
        outputPath: 'TransformStartTime',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformStartTime', props);
    return resource.getResponseField('TransformStartTime') as unknown as string;
  }

  public get transformEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformEndTime'),
        outputPath: 'TransformEndTime',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformEndTime', props);
    return resource.getResponseField('TransformEndTime') as unknown as string;
  }

  public get labelingJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.LabelingJobArn'),
        outputPath: 'LabelingJobArn',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.LabelingJobArn', props);
    return resource.getResponseField('LabelingJobArn') as unknown as string;
  }

  public get autoMlJobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.AutoMLJobArn'),
        outputPath: 'AutoMLJobArn',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

  public get dataProcessing(): SageMakerResponsesDescribeTransformJobDataProcessing {
    return new SageMakerResponsesDescribeTransformJobDataProcessing(this.__scope, this.__resources, this.__input);
  }

  public get experimentConfig(): SageMakerResponsesDescribeTransformJobExperimentConfig {
    return new SageMakerResponsesDescribeTransformJobExperimentConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeTransformJobModelClientConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get invocationsTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.ModelClientConfig.InvocationsTimeoutInSeconds'),
        outputPath: 'ModelClientConfig.InvocationsTimeoutInSeconds',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.ModelClientConfig.InvocationsTimeoutInSeconds', props);
    return resource.getResponseField('ModelClientConfig.InvocationsTimeoutInSeconds') as unknown as number;
  }

  public get invocationsMaxRetries(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.ModelClientConfig.InvocationsMaxRetries'),
        outputPath: 'ModelClientConfig.InvocationsMaxRetries',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.ModelClientConfig.InvocationsMaxRetries', props);
    return resource.getResponseField('ModelClientConfig.InvocationsMaxRetries') as unknown as number;
  }

}

export class SageMakerResponsesDescribeTransformJobTransformInput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get dataSource(): SageMakerResponsesDescribeTransformJobTransformInputDataSource {
    return new SageMakerResponsesDescribeTransformJobTransformInputDataSource(this.__scope, this.__resources, this.__input);
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformInput.ContentType'),
        outputPath: 'TransformInput.ContentType',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformInput.ContentType', props);
    return resource.getResponseField('TransformInput.ContentType') as unknown as string;
  }

  public get compressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformInput.CompressionType'),
        outputPath: 'TransformInput.CompressionType',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformInput.CompressionType', props);
    return resource.getResponseField('TransformInput.CompressionType') as unknown as string;
  }

  public get splitType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformInput.SplitType'),
        outputPath: 'TransformInput.SplitType',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformInput.SplitType', props);
    return resource.getResponseField('TransformInput.SplitType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTransformJobTransformInputDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get s3DataSource(): SageMakerResponsesDescribeTransformJobTransformInputDataSourceS3DataSource {
    return new SageMakerResponsesDescribeTransformJobTransformInputDataSourceS3DataSource(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeTransformJobTransformInputDataSourceS3DataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get s3DataType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformInput.DataSource.S3DataSource.S3DataType'),
        outputPath: 'TransformInput.DataSource.S3DataSource.S3DataType',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformInput.DataSource.S3DataSource.S3DataType', props);
    return resource.getResponseField('TransformInput.DataSource.S3DataSource.S3DataType') as unknown as string;
  }

  public get s3Uri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformInput.DataSource.S3DataSource.S3Uri'),
        outputPath: 'TransformInput.DataSource.S3DataSource.S3Uri',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformInput.DataSource.S3DataSource.S3Uri', props);
    return resource.getResponseField('TransformInput.DataSource.S3DataSource.S3Uri') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTransformJobTransformOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformOutput.S3OutputPath'),
        outputPath: 'TransformOutput.S3OutputPath',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformOutput.S3OutputPath', props);
    return resource.getResponseField('TransformOutput.S3OutputPath') as unknown as string;
  }

  public get accept(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformOutput.Accept'),
        outputPath: 'TransformOutput.Accept',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformOutput.Accept', props);
    return resource.getResponseField('TransformOutput.Accept') as unknown as string;
  }

  public get assembleWith(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformOutput.AssembleWith'),
        outputPath: 'TransformOutput.AssembleWith',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformOutput.AssembleWith', props);
    return resource.getResponseField('TransformOutput.AssembleWith') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformOutput.KmsKeyId'),
        outputPath: 'TransformOutput.KmsKeyId',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformOutput.KmsKeyId', props);
    return resource.getResponseField('TransformOutput.KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTransformJobTransformResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformResources.InstanceType'),
        outputPath: 'TransformResources.InstanceType',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformResources.InstanceType', props);
    return resource.getResponseField('TransformResources.InstanceType') as unknown as string;
  }

  public get instanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformResources.InstanceCount'),
        outputPath: 'TransformResources.InstanceCount',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformResources.InstanceCount', props);
    return resource.getResponseField('TransformResources.InstanceCount') as unknown as number;
  }

  public get volumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.TransformResources.VolumeKmsKeyId'),
        outputPath: 'TransformResources.VolumeKmsKeyId',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.TransformResources.VolumeKmsKeyId', props);
    return resource.getResponseField('TransformResources.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTransformJobDataProcessing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get inputFilter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.DataProcessing.InputFilter'),
        outputPath: 'DataProcessing.InputFilter',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.DataProcessing.InputFilter', props);
    return resource.getResponseField('DataProcessing.InputFilter') as unknown as string;
  }

  public get outputFilter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.DataProcessing.OutputFilter'),
        outputPath: 'DataProcessing.OutputFilter',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.DataProcessing.OutputFilter', props);
    return resource.getResponseField('DataProcessing.OutputFilter') as unknown as string;
  }

  public get joinSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.DataProcessing.JoinSource'),
        outputPath: 'DataProcessing.JoinSource',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.DataProcessing.JoinSource', props);
    return resource.getResponseField('DataProcessing.JoinSource') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTransformJobExperimentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTransformJobRequest) {
  }

  public get experimentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.ExperimentConfig.ExperimentName'),
        outputPath: 'ExperimentConfig.ExperimentName',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.ExperimentConfig.ExperimentName', props);
    return resource.getResponseField('ExperimentConfig.ExperimentName') as unknown as string;
  }

  public get trialName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.ExperimentConfig.TrialName'),
        outputPath: 'ExperimentConfig.TrialName',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.ExperimentConfig.TrialName', props);
    return resource.getResponseField('ExperimentConfig.TrialName') as unknown as string;
  }

  public get trialComponentDisplayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTransformJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTransformJob.ExperimentConfig.TrialComponentDisplayName'),
        outputPath: 'ExperimentConfig.TrialComponentDisplayName',
        parameters: {
          TransformJobName: this.__input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTransformJob.ExperimentConfig.TrialComponentDisplayName', props);
    return resource.getResponseField('ExperimentConfig.TrialComponentDisplayName') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrial {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialRequest) {
  }

  public get trialName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.TrialName'),
        outputPath: 'TrialName',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.TrialName', props);
    return resource.getResponseField('TrialName') as unknown as string;
  }

  public get trialArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.TrialArn'),
        outputPath: 'TrialArn',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get experimentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.ExperimentName'),
        outputPath: 'ExperimentName',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.ExperimentName', props);
    return resource.getResponseField('ExperimentName') as unknown as string;
  }

  public get source(): SageMakerResponsesDescribeTrialSource {
    return new SageMakerResponsesDescribeTrialSource(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get createdBy(): SageMakerResponsesDescribeTrialCreatedBy {
    return new SageMakerResponsesDescribeTrialCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get lastModifiedBy(): SageMakerResponsesDescribeTrialLastModifiedBy {
    return new SageMakerResponsesDescribeTrialLastModifiedBy(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeTrialSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialRequest) {
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.Source.SourceArn'),
        outputPath: 'Source.SourceArn',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.Source.SourceArn', props);
    return resource.getResponseField('Source.SourceArn') as unknown as string;
  }

  public get sourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.Source.SourceType'),
        outputPath: 'Source.SourceType',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.Source.SourceType', props);
    return resource.getResponseField('Source.SourceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrialCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.CreatedBy.UserProfileArn'),
        outputPath: 'CreatedBy.UserProfileArn',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.CreatedBy.UserProfileArn', props);
    return resource.getResponseField('CreatedBy.UserProfileArn') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.CreatedBy.UserProfileName'),
        outputPath: 'CreatedBy.UserProfileName',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.CreatedBy.UserProfileName', props);
    return resource.getResponseField('CreatedBy.UserProfileName') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.CreatedBy.DomainId'),
        outputPath: 'CreatedBy.DomainId',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.CreatedBy.DomainId', props);
    return resource.getResponseField('CreatedBy.DomainId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrialLastModifiedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.LastModifiedBy.UserProfileArn'),
        outputPath: 'LastModifiedBy.UserProfileArn',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.LastModifiedBy.UserProfileArn', props);
    return resource.getResponseField('LastModifiedBy.UserProfileArn') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.LastModifiedBy.UserProfileName'),
        outputPath: 'LastModifiedBy.UserProfileName',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.LastModifiedBy.UserProfileName', props);
    return resource.getResponseField('LastModifiedBy.UserProfileName') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrial.LastModifiedBy.DomainId'),
        outputPath: 'LastModifiedBy.DomainId',
        parameters: {
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrial.LastModifiedBy.DomainId', props);
    return resource.getResponseField('LastModifiedBy.DomainId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrialComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialComponentRequest) {
  }

  public get trialComponentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.TrialComponentName'),
        outputPath: 'TrialComponentName',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.TrialComponentName', props);
    return resource.getResponseField('TrialComponentName') as unknown as string;
  }

  public get trialComponentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.TrialComponentArn'),
        outputPath: 'TrialComponentArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get source(): SageMakerResponsesDescribeTrialComponentSource {
    return new SageMakerResponsesDescribeTrialComponentSource(this.__scope, this.__resources, this.__input);
  }

  public get status(): SageMakerResponsesDescribeTrialComponentStatus {
    return new SageMakerResponsesDescribeTrialComponentStatus(this.__scope, this.__resources, this.__input);
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get createdBy(): SageMakerResponsesDescribeTrialComponentCreatedBy {
    return new SageMakerResponsesDescribeTrialComponentCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get lastModifiedBy(): SageMakerResponsesDescribeTrialComponentLastModifiedBy {
    return new SageMakerResponsesDescribeTrialComponentLastModifiedBy(this.__scope, this.__resources, this.__input);
  }

  public get parameters(): Record<string, shapes.SageMakerTrialComponentParameterValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as Record<string, shapes.SageMakerTrialComponentParameterValue>;
  }

  public get inputArtifacts(): Record<string, shapes.SageMakerTrialComponentArtifact> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.InputArtifacts'),
        outputPath: 'InputArtifacts',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.InputArtifacts', props);
    return resource.getResponseField('InputArtifacts') as unknown as Record<string, shapes.SageMakerTrialComponentArtifact>;
  }

  public get outputArtifacts(): Record<string, shapes.SageMakerTrialComponentArtifact> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.OutputArtifacts'),
        outputPath: 'OutputArtifacts',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.OutputArtifacts', props);
    return resource.getResponseField('OutputArtifacts') as unknown as Record<string, shapes.SageMakerTrialComponentArtifact>;
  }

  public get metrics(): shapes.SageMakerTrialComponentMetricSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.Metrics'),
        outputPath: 'Metrics',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.Metrics', props);
    return resource.getResponseField('Metrics') as unknown as shapes.SageMakerTrialComponentMetricSummary[];
  }

}

export class SageMakerResponsesDescribeTrialComponentSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialComponentRequest) {
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.Source.SourceArn'),
        outputPath: 'Source.SourceArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.Source.SourceArn', props);
    return resource.getResponseField('Source.SourceArn') as unknown as string;
  }

  public get sourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.Source.SourceType'),
        outputPath: 'Source.SourceType',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.Source.SourceType', props);
    return resource.getResponseField('Source.SourceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrialComponentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialComponentRequest) {
  }

  public get primaryStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.Status.PrimaryStatus'),
        outputPath: 'Status.PrimaryStatus',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.Status.PrimaryStatus', props);
    return resource.getResponseField('Status.PrimaryStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.Status.Message'),
        outputPath: 'Status.Message',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.Status.Message', props);
    return resource.getResponseField('Status.Message') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrialComponentCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialComponentRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.CreatedBy.UserProfileArn'),
        outputPath: 'CreatedBy.UserProfileArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.CreatedBy.UserProfileArn', props);
    return resource.getResponseField('CreatedBy.UserProfileArn') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.CreatedBy.UserProfileName'),
        outputPath: 'CreatedBy.UserProfileName',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.CreatedBy.UserProfileName', props);
    return resource.getResponseField('CreatedBy.UserProfileName') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.CreatedBy.DomainId'),
        outputPath: 'CreatedBy.DomainId',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.CreatedBy.DomainId', props);
    return resource.getResponseField('CreatedBy.DomainId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeTrialComponentLastModifiedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeTrialComponentRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.LastModifiedBy.UserProfileArn'),
        outputPath: 'LastModifiedBy.UserProfileArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.LastModifiedBy.UserProfileArn', props);
    return resource.getResponseField('LastModifiedBy.UserProfileArn') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.LastModifiedBy.UserProfileName'),
        outputPath: 'LastModifiedBy.UserProfileName',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.LastModifiedBy.UserProfileName', props);
    return resource.getResponseField('LastModifiedBy.UserProfileName') as unknown as string;
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeTrialComponent.LastModifiedBy.DomainId'),
        outputPath: 'LastModifiedBy.DomainId',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTrialComponent.LastModifiedBy.DomainId', props);
    return resource.getResponseField('LastModifiedBy.DomainId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.DomainId'),
        outputPath: 'DomainId',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.DomainId', props);
    return resource.getResponseField('DomainId') as unknown as string;
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserProfileArn'),
        outputPath: 'UserProfileArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserProfileArn', props);
    return resource.getResponseField('UserProfileArn') as unknown as string;
  }

  public get userProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserProfileName'),
        outputPath: 'UserProfileName',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserProfileName', props);
    return resource.getResponseField('UserProfileName') as unknown as string;
  }

  public get homeEfsFileSystemUid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.HomeEfsFileSystemUid'),
        outputPath: 'HomeEfsFileSystemUid',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.HomeEfsFileSystemUid', props);
    return resource.getResponseField('HomeEfsFileSystemUid') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.Status'),
        outputPath: 'Status',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.LastModifiedTime'),
        outputPath: 'LastModifiedTime',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get singleSignOnUserIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.SingleSignOnUserIdentifier'),
        outputPath: 'SingleSignOnUserIdentifier',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.SingleSignOnUserIdentifier', props);
    return resource.getResponseField('SingleSignOnUserIdentifier') as unknown as string;
  }

  public get singleSignOnUserValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.SingleSignOnUserValue'),
        outputPath: 'SingleSignOnUserValue',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.SingleSignOnUserValue', props);
    return resource.getResponseField('SingleSignOnUserValue') as unknown as string;
  }

  public get userSettings(): SageMakerResponsesDescribeUserProfileUserSettings {
    return new SageMakerResponsesDescribeUserProfileUserSettings(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get executionRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.ExecutionRole'),
        outputPath: 'UserSettings.ExecutionRole',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.ExecutionRole', props);
    return resource.getResponseField('UserSettings.ExecutionRole') as unknown as string;
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.SecurityGroups'),
        outputPath: 'UserSettings.SecurityGroups',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.SecurityGroups', props);
    return resource.getResponseField('UserSettings.SecurityGroups') as unknown as string[];
  }

  public get sharingSettings(): SageMakerResponsesDescribeUserProfileUserSettingsSharingSettings {
    return new SageMakerResponsesDescribeUserProfileUserSettingsSharingSettings(this.__scope, this.__resources, this.__input);
  }

  public get jupyterServerAppSettings(): SageMakerResponsesDescribeUserProfileUserSettingsJupyterServerAppSettings {
    return new SageMakerResponsesDescribeUserProfileUserSettingsJupyterServerAppSettings(this.__scope, this.__resources, this.__input);
  }

  public get kernelGatewayAppSettings(): SageMakerResponsesDescribeUserProfileUserSettingsKernelGatewayAppSettings {
    return new SageMakerResponsesDescribeUserProfileUserSettingsKernelGatewayAppSettings(this.__scope, this.__resources, this.__input);
  }

  public get tensorBoardAppSettings(): SageMakerResponsesDescribeUserProfileUserSettingsTensorBoardAppSettings {
    return new SageMakerResponsesDescribeUserProfileUserSettingsTensorBoardAppSettings(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettingsSharingSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get notebookOutputOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.SharingSettings.NotebookOutputOption'),
        outputPath: 'UserSettings.SharingSettings.NotebookOutputOption',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.SharingSettings.NotebookOutputOption', props);
    return resource.getResponseField('UserSettings.SharingSettings.NotebookOutputOption') as unknown as string;
  }

  public get s3OutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.SharingSettings.S3OutputPath'),
        outputPath: 'UserSettings.SharingSettings.S3OutputPath',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.SharingSettings.S3OutputPath', props);
    return resource.getResponseField('UserSettings.SharingSettings.S3OutputPath') as unknown as string;
  }

  public get s3KmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.SharingSettings.S3KmsKeyId'),
        outputPath: 'UserSettings.SharingSettings.S3KmsKeyId',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.SharingSettings.S3KmsKeyId', props);
    return resource.getResponseField('UserSettings.SharingSettings.S3KmsKeyId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettingsJupyterServerAppSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get defaultResourceSpec(): SageMakerResponsesDescribeUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    return new SageMakerResponsesDescribeUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get sageMakerImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn'),
        outputPath: 'UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
    return resource.getResponseField('UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn') as unknown as string;
  }

  public get sageMakerImageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn'),
        outputPath: 'UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
    return resource.getResponseField('UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType'),
        outputPath: 'UserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('UserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettingsKernelGatewayAppSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get defaultResourceSpec(): SageMakerResponsesDescribeUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    return new SageMakerResponsesDescribeUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(this.__scope, this.__resources, this.__input);
  }

  public get customImages(): shapes.SageMakerCustomImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.KernelGatewayAppSettings.CustomImages'),
        outputPath: 'UserSettings.KernelGatewayAppSettings.CustomImages',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.CustomImages', props);
    return resource.getResponseField('UserSettings.KernelGatewayAppSettings.CustomImages') as unknown as shapes.SageMakerCustomImage[];
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get sageMakerImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn'),
        outputPath: 'UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
    return resource.getResponseField('UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn') as unknown as string;
  }

  public get sageMakerImageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn'),
        outputPath: 'UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
    return resource.getResponseField('UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType'),
        outputPath: 'UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettingsTensorBoardAppSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get defaultResourceSpec(): SageMakerResponsesDescribeUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    return new SageMakerResponsesDescribeUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeUserProfileRequest) {
  }

  public get sageMakerImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn'),
        outputPath: 'UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
    return resource.getResponseField('UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn') as unknown as string;
  }

  public get sageMakerImageVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn'),
        outputPath: 'UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
    return resource.getResponseField('UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType'),
        outputPath: 'UserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('UserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerResponsesDescribeWorkforce {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkforceRequest) {
  }

  public get workforce(): SageMakerResponsesDescribeWorkforceWorkforce {
    return new SageMakerResponsesDescribeWorkforceWorkforce(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeWorkforceWorkforce {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkforceRequest) {
  }

  public get workforceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.WorkforceName'),
        outputPath: 'Workforce.WorkforceName',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.WorkforceName', props);
    return resource.getResponseField('Workforce.WorkforceName') as unknown as string;
  }

  public get workforceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.WorkforceArn'),
        outputPath: 'Workforce.WorkforceArn',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.WorkforceArn', props);
    return resource.getResponseField('Workforce.WorkforceArn') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.LastUpdatedDate'),
        outputPath: 'Workforce.LastUpdatedDate',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.LastUpdatedDate', props);
    return resource.getResponseField('Workforce.LastUpdatedDate') as unknown as string;
  }

  public get sourceIpConfig(): SageMakerResponsesDescribeWorkforceWorkforceSourceIpConfig {
    return new SageMakerResponsesDescribeWorkforceWorkforceSourceIpConfig(this.__scope, this.__resources, this.__input);
  }

  public get subDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.SubDomain'),
        outputPath: 'Workforce.SubDomain',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.SubDomain', props);
    return resource.getResponseField('Workforce.SubDomain') as unknown as string;
  }

  public get cognitoConfig(): SageMakerResponsesDescribeWorkforceWorkforceCognitoConfig {
    return new SageMakerResponsesDescribeWorkforceWorkforceCognitoConfig(this.__scope, this.__resources, this.__input);
  }

  public get oidcConfig(): SageMakerResponsesDescribeWorkforceWorkforceOidcConfig {
    return new SageMakerResponsesDescribeWorkforceWorkforceOidcConfig(this.__scope, this.__resources, this.__input);
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.CreateDate'),
        outputPath: 'Workforce.CreateDate',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.CreateDate', props);
    return resource.getResponseField('Workforce.CreateDate') as unknown as string;
  }

}

export class SageMakerResponsesDescribeWorkforceWorkforceSourceIpConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkforceRequest) {
  }

  public get cidrs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.SourceIpConfig.Cidrs'),
        outputPath: 'Workforce.SourceIpConfig.Cidrs',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.SourceIpConfig.Cidrs', props);
    return resource.getResponseField('Workforce.SourceIpConfig.Cidrs') as unknown as string[];
  }

}

export class SageMakerResponsesDescribeWorkforceWorkforceCognitoConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkforceRequest) {
  }

  public get userPool(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.CognitoConfig.UserPool'),
        outputPath: 'Workforce.CognitoConfig.UserPool',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.CognitoConfig.UserPool', props);
    return resource.getResponseField('Workforce.CognitoConfig.UserPool') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.CognitoConfig.ClientId'),
        outputPath: 'Workforce.CognitoConfig.ClientId',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.CognitoConfig.ClientId', props);
    return resource.getResponseField('Workforce.CognitoConfig.ClientId') as unknown as string;
  }

}

export class SageMakerResponsesDescribeWorkforceWorkforceOidcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkforceRequest) {
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.OidcConfig.ClientId'),
        outputPath: 'Workforce.OidcConfig.ClientId',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.OidcConfig.ClientId', props);
    return resource.getResponseField('Workforce.OidcConfig.ClientId') as unknown as string;
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.OidcConfig.Issuer'),
        outputPath: 'Workforce.OidcConfig.Issuer',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.OidcConfig.Issuer', props);
    return resource.getResponseField('Workforce.OidcConfig.Issuer') as unknown as string;
  }

  public get authorizationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.OidcConfig.AuthorizationEndpoint'),
        outputPath: 'Workforce.OidcConfig.AuthorizationEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.OidcConfig.AuthorizationEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.AuthorizationEndpoint') as unknown as string;
  }

  public get tokenEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.OidcConfig.TokenEndpoint'),
        outputPath: 'Workforce.OidcConfig.TokenEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.OidcConfig.TokenEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.TokenEndpoint') as unknown as string;
  }

  public get userInfoEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.OidcConfig.UserInfoEndpoint'),
        outputPath: 'Workforce.OidcConfig.UserInfoEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.OidcConfig.UserInfoEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.UserInfoEndpoint') as unknown as string;
  }

  public get logoutEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.OidcConfig.LogoutEndpoint'),
        outputPath: 'Workforce.OidcConfig.LogoutEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.OidcConfig.LogoutEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.LogoutEndpoint') as unknown as string;
  }

  public get jwksUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkforce.Workforce.OidcConfig.JwksUri'),
        outputPath: 'Workforce.OidcConfig.JwksUri',
        parameters: {
          WorkforceName: this.__input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkforce.Workforce.OidcConfig.JwksUri', props);
    return resource.getResponseField('Workforce.OidcConfig.JwksUri') as unknown as string;
  }

}

export class SageMakerResponsesDescribeWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkteamRequest) {
  }

  public get workteam(): SageMakerResponsesDescribeWorkteamWorkteam {
    return new SageMakerResponsesDescribeWorkteamWorkteam(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeWorkteamWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkteamRequest) {
  }

  public get workteamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.WorkteamName'),
        outputPath: 'Workteam.WorkteamName',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.WorkteamName', props);
    return resource.getResponseField('Workteam.WorkteamName') as unknown as string;
  }

  public get memberDefinitions(): shapes.SageMakerMemberDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.MemberDefinitions'),
        outputPath: 'Workteam.MemberDefinitions',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.MemberDefinitions', props);
    return resource.getResponseField('Workteam.MemberDefinitions') as unknown as shapes.SageMakerMemberDefinition[];
  }

  public get workteamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.WorkteamArn'),
        outputPath: 'Workteam.WorkteamArn',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.WorkteamArn', props);
    return resource.getResponseField('Workteam.WorkteamArn') as unknown as string;
  }

  public get workforceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.WorkforceArn'),
        outputPath: 'Workteam.WorkforceArn',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.WorkforceArn', props);
    return resource.getResponseField('Workteam.WorkforceArn') as unknown as string;
  }

  public get productListingIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.ProductListingIds'),
        outputPath: 'Workteam.ProductListingIds',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.ProductListingIds', props);
    return resource.getResponseField('Workteam.ProductListingIds') as unknown as string[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.Description'),
        outputPath: 'Workteam.Description',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.Description', props);
    return resource.getResponseField('Workteam.Description') as unknown as string;
  }

  public get subDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.SubDomain'),
        outputPath: 'Workteam.SubDomain',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.SubDomain', props);
    return resource.getResponseField('Workteam.SubDomain') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.CreateDate'),
        outputPath: 'Workteam.CreateDate',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.CreateDate', props);
    return resource.getResponseField('Workteam.CreateDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.LastUpdatedDate'),
        outputPath: 'Workteam.LastUpdatedDate',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.LastUpdatedDate', props);
    return resource.getResponseField('Workteam.LastUpdatedDate') as unknown as string;
  }

  public get notificationConfiguration(): SageMakerResponsesDescribeWorkteamWorkteamNotificationConfiguration {
    return new SageMakerResponsesDescribeWorkteamWorkteamNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesDescribeWorkteamWorkteamNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDescribeWorkteamRequest) {
  }

  public get notificationTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DescribeWorkteam.Workteam.NotificationConfiguration.NotificationTopicArn'),
        outputPath: 'Workteam.NotificationConfiguration.NotificationTopicArn',
        parameters: {
          WorkteamName: this.__input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkteam.Workteam.NotificationConfiguration.NotificationTopicArn', props);
    return resource.getResponseField('Workteam.NotificationConfiguration.NotificationTopicArn') as unknown as string;
  }

}

export class SageMakerResponsesDisassociateTrialComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerDisassociateTrialComponentRequest) {
  }

  public get trialComponentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DisassociateTrialComponent.TrialComponentArn'),
        outputPath: 'TrialComponentArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

  public get trialArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.DisassociateTrialComponent.TrialArn'),
        outputPath: 'TrialArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
          TrialName: this.__input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateTrialComponent.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerResponsesFetchSearchSuggestions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerGetSearchSuggestionsRequest) {
  }

  public get propertyNameSuggestions(): shapes.SageMakerPropertyNameSuggestion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSearchSuggestions',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.GetSearchSuggestions.PropertyNameSuggestions'),
        outputPath: 'PropertyNameSuggestions',
        parameters: {
          Resource: this.__input.resource,
          SuggestionQuery: {
            PropertyNameQuery: {
              PropertyNameHint: this.__input.suggestionQuery?.propertyNameQuery?.propertyNameHint,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSearchSuggestions.PropertyNameSuggestions', props);
    return resource.getResponseField('PropertyNameSuggestions') as unknown as shapes.SageMakerPropertyNameSuggestion[];
  }

}

export class SageMakerResponsesListAlgorithms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListAlgorithmsInput) {
  }

  public get algorithmSummaryList(): shapes.SageMakerAlgorithmSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlgorithms',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListAlgorithms.AlgorithmSummaryList'),
        outputPath: 'AlgorithmSummaryList',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlgorithms.AlgorithmSummaryList', props);
    return resource.getResponseField('AlgorithmSummaryList') as unknown as shapes.SageMakerAlgorithmSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAlgorithms',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListAlgorithms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAlgorithms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListAppImageConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListAppImageConfigsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppImageConfigs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListAppImageConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          ModifiedTimeBefore: this.__input.modifiedTimeBefore,
          ModifiedTimeAfter: this.__input.modifiedTimeAfter,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppImageConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get appImageConfigs(): shapes.SageMakerAppImageConfigDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppImageConfigs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListAppImageConfigs.AppImageConfigs'),
        outputPath: 'AppImageConfigs',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          ModifiedTimeBefore: this.__input.modifiedTimeBefore,
          ModifiedTimeAfter: this.__input.modifiedTimeAfter,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppImageConfigs.AppImageConfigs', props);
    return resource.getResponseField('AppImageConfigs') as unknown as shapes.SageMakerAppImageConfigDetails[];
  }

}

export class SageMakerResponsesListApps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListAppsRequest) {
  }

  public get apps(): shapes.SageMakerAppDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApps',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListApps.Apps'),
        outputPath: 'Apps',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          DomainIdEquals: this.__input.domainIdEquals,
          UserProfileNameEquals: this.__input.userProfileNameEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApps.Apps', props);
    return resource.getResponseField('Apps') as unknown as shapes.SageMakerAppDetails[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApps',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListApps.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          DomainIdEquals: this.__input.domainIdEquals,
          UserProfileNameEquals: this.__input.userProfileNameEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApps.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListAutoMlJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListAutoMlJobsRequest) {
  }

  public get autoMlJobSummaries(): shapes.SageMakerAutoMlJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAutoMlJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListAutoMLJobs.AutoMLJobSummaries'),
        outputPath: 'AutoMLJobSummaries',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAutoMLJobs.AutoMLJobSummaries', props);
    return resource.getResponseField('AutoMLJobSummaries') as unknown as shapes.SageMakerAutoMlJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAutoMlJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListAutoMLJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAutoMLJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListCandidatesForAutoMlJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListCandidatesForAutoMlJobRequest) {
  }

  public get candidates(): shapes.SageMakerAutoMlCandidate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCandidatesForAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListCandidatesForAutoMLJob.Candidates'),
        outputPath: 'Candidates',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
          StatusEquals: this.__input.statusEquals,
          CandidateNameEquals: this.__input.candidateNameEquals,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCandidatesForAutoMLJob.Candidates', props);
    return resource.getResponseField('Candidates') as unknown as shapes.SageMakerAutoMlCandidate[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCandidatesForAutoMlJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListCandidatesForAutoMLJob.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoMLJobName: this.__input.autoMlJobName,
          StatusEquals: this.__input.statusEquals,
          CandidateNameEquals: this.__input.candidateNameEquals,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCandidatesForAutoMLJob.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListCodeRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListCodeRepositoriesInput) {
  }

  public get codeRepositorySummaryList(): shapes.SageMakerCodeRepositorySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCodeRepositories',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListCodeRepositories.CodeRepositorySummaryList'),
        outputPath: 'CodeRepositorySummaryList',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCodeRepositories.CodeRepositorySummaryList', props);
    return resource.getResponseField('CodeRepositorySummaryList') as unknown as shapes.SageMakerCodeRepositorySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCodeRepositories',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListCodeRepositories.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCodeRepositories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListCompilationJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListCompilationJobsRequest) {
  }

  public get compilationJobSummaries(): shapes.SageMakerCompilationJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCompilationJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListCompilationJobs.CompilationJobSummaries'),
        outputPath: 'CompilationJobSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCompilationJobs.CompilationJobSummaries', props);
    return resource.getResponseField('CompilationJobSummaries') as unknown as shapes.SageMakerCompilationJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCompilationJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListCompilationJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCompilationJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListDomainsRequest) {
  }

  public get domains(): shapes.SageMakerDomainDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListDomains.Domains'),
        outputPath: 'Domains',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.Domains', props);
    return resource.getResponseField('Domains') as unknown as shapes.SageMakerDomainDetails[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListDomains.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListEndpointConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListEndpointConfigsInput) {
  }

  public get endpointConfigs(): shapes.SageMakerEndpointConfigSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpointConfigs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListEndpointConfigs.EndpointConfigs'),
        outputPath: 'EndpointConfigs',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpointConfigs.EndpointConfigs', props);
    return resource.getResponseField('EndpointConfigs') as unknown as shapes.SageMakerEndpointConfigSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpointConfigs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListEndpointConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpointConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListEndpointsInput) {
  }

  public get endpoints(): shapes.SageMakerEndpointSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpoints',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListEndpoints.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.SageMakerEndpointSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpoints',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListExperiments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListExperimentsRequest) {
  }

  public get experimentSummaries(): shapes.SageMakerExperimentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExperiments',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListExperiments.ExperimentSummaries'),
        outputPath: 'ExperimentSummaries',
        parameters: {
          CreatedAfter: this.__input.createdAfter,
          CreatedBefore: this.__input.createdBefore,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExperiments.ExperimentSummaries', props);
    return resource.getResponseField('ExperimentSummaries') as unknown as shapes.SageMakerExperimentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExperiments',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListExperiments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreatedAfter: this.__input.createdAfter,
          CreatedBefore: this.__input.createdBefore,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExperiments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListFlowDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListFlowDefinitionsRequest) {
  }

  public get flowDefinitionSummaries(): shapes.SageMakerFlowDefinitionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlowDefinitions',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListFlowDefinitions.FlowDefinitionSummaries'),
        outputPath: 'FlowDefinitionSummaries',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlowDefinitions.FlowDefinitionSummaries', props);
    return resource.getResponseField('FlowDefinitionSummaries') as unknown as shapes.SageMakerFlowDefinitionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFlowDefinitions',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListFlowDefinitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFlowDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListHumanTaskUis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListHumanTaskUisRequest) {
  }

  public get humanTaskUiSummaries(): shapes.SageMakerHumanTaskUiSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHumanTaskUis',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListHumanTaskUis.HumanTaskUiSummaries'),
        outputPath: 'HumanTaskUiSummaries',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHumanTaskUis.HumanTaskUiSummaries', props);
    return resource.getResponseField('HumanTaskUiSummaries') as unknown as shapes.SageMakerHumanTaskUiSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHumanTaskUis',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListHumanTaskUis.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHumanTaskUis.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListHyperParameterTuningJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListHyperParameterTuningJobsRequest) {
  }

  public get hyperParameterTuningJobSummaries(): shapes.SageMakerHyperParameterTuningJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHyperParameterTuningJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListHyperParameterTuningJobs.HyperParameterTuningJobSummaries'),
        outputPath: 'HyperParameterTuningJobSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHyperParameterTuningJobs.HyperParameterTuningJobSummaries', props);
    return resource.getResponseField('HyperParameterTuningJobSummaries') as unknown as shapes.SageMakerHyperParameterTuningJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHyperParameterTuningJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListHyperParameterTuningJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHyperParameterTuningJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListImageVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListImageVersionsRequest) {
  }

  public get imageVersions(): shapes.SageMakerImageVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageVersions',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListImageVersions.ImageVersions'),
        outputPath: 'ImageVersions',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          ImageName: this.__input.imageName,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageVersions.ImageVersions', props);
    return resource.getResponseField('ImageVersions') as unknown as shapes.SageMakerImageVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImageVersions',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListImageVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          ImageName: this.__input.imageName,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImageVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListImagesRequest) {
  }

  public get images(): shapes.SageMakerImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImages',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListImages.Images'),
        outputPath: 'Images',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImages.Images', props);
    return resource.getResponseField('Images') as unknown as shapes.SageMakerImage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImages',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListImages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListLabelingJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListLabelingJobsRequest) {
  }

  public get labelingJobSummaryList(): shapes.SageMakerLabelingJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLabelingJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListLabelingJobs.LabelingJobSummaryList'),
        outputPath: 'LabelingJobSummaryList',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          NameContains: this.__input.nameContains,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLabelingJobs.LabelingJobSummaryList', props);
    return resource.getResponseField('LabelingJobSummaryList') as unknown as shapes.SageMakerLabelingJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLabelingJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListLabelingJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          NameContains: this.__input.nameContains,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLabelingJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListLabelingJobsForWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListLabelingJobsForWorkteamRequest) {
  }

  public get labelingJobSummaryList(): shapes.SageMakerLabelingJobForWorkteamSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLabelingJobsForWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListLabelingJobsForWorkteam.LabelingJobSummaryList'),
        outputPath: 'LabelingJobSummaryList',
        parameters: {
          WorkteamArn: this.__input.workteamArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          JobReferenceCodeContains: this.__input.jobReferenceCodeContains,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLabelingJobsForWorkteam.LabelingJobSummaryList', props);
    return resource.getResponseField('LabelingJobSummaryList') as unknown as shapes.SageMakerLabelingJobForWorkteamSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLabelingJobsForWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListLabelingJobsForWorkteam.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkteamArn: this.__input.workteamArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          JobReferenceCodeContains: this.__input.jobReferenceCodeContains,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLabelingJobsForWorkteam.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListModelPackages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListModelPackagesInput) {
  }

  public get modelPackageSummaryList(): shapes.SageMakerModelPackageSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModelPackages',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListModelPackages.ModelPackageSummaryList'),
        outputPath: 'ModelPackageSummaryList',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModelPackages.ModelPackageSummaryList', props);
    return resource.getResponseField('ModelPackageSummaryList') as unknown as shapes.SageMakerModelPackageSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModelPackages',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListModelPackages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModelPackages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListModelsInput) {
  }

  public get models(): shapes.SageMakerModelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModels',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListModels.Models'),
        outputPath: 'Models',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModels.Models', props);
    return resource.getResponseField('Models') as unknown as shapes.SageMakerModelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listModels',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListModels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListMonitoringExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListMonitoringExecutionsRequest) {
  }

  public get monitoringExecutionSummaries(): shapes.SageMakerMonitoringExecutionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMonitoringExecutions',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListMonitoringExecutions.MonitoringExecutionSummaries'),
        outputPath: 'MonitoringExecutionSummaries',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
          EndpointName: this.__input.endpointName,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ScheduledTimeBefore: this.__input.scheduledTimeBefore,
          ScheduledTimeAfter: this.__input.scheduledTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMonitoringExecutions.MonitoringExecutionSummaries', props);
    return resource.getResponseField('MonitoringExecutionSummaries') as unknown as shapes.SageMakerMonitoringExecutionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMonitoringExecutions',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListMonitoringExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
          EndpointName: this.__input.endpointName,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ScheduledTimeBefore: this.__input.scheduledTimeBefore,
          ScheduledTimeAfter: this.__input.scheduledTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMonitoringExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListMonitoringSchedules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListMonitoringSchedulesRequest) {
  }

  public get monitoringScheduleSummaries(): shapes.SageMakerMonitoringScheduleSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMonitoringSchedules',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListMonitoringSchedules.MonitoringScheduleSummaries'),
        outputPath: 'MonitoringScheduleSummaries',
        parameters: {
          EndpointName: this.__input.endpointName,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMonitoringSchedules.MonitoringScheduleSummaries', props);
    return resource.getResponseField('MonitoringScheduleSummaries') as unknown as shapes.SageMakerMonitoringScheduleSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMonitoringSchedules',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListMonitoringSchedules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EndpointName: this.__input.endpointName,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMonitoringSchedules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListNotebookInstanceLifecycleConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListNotebookInstanceLifecycleConfigsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotebookInstanceLifecycleConfigs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListNotebookInstanceLifecycleConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotebookInstanceLifecycleConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get notebookInstanceLifecycleConfigs(): shapes.SageMakerNotebookInstanceLifecycleConfigSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotebookInstanceLifecycleConfigs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListNotebookInstanceLifecycleConfigs.NotebookInstanceLifecycleConfigs'),
        outputPath: 'NotebookInstanceLifecycleConfigs',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotebookInstanceLifecycleConfigs.NotebookInstanceLifecycleConfigs', props);
    return resource.getResponseField('NotebookInstanceLifecycleConfigs') as unknown as shapes.SageMakerNotebookInstanceLifecycleConfigSummary[];
  }

}

export class SageMakerResponsesListNotebookInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListNotebookInstancesInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotebookInstances',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListNotebookInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
          NotebookInstanceLifecycleConfigNameContains: this.__input.notebookInstanceLifecycleConfigNameContains,
          DefaultCodeRepositoryContains: this.__input.defaultCodeRepositoryContains,
          AdditionalCodeRepositoryEquals: this.__input.additionalCodeRepositoryEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotebookInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get notebookInstances(): shapes.SageMakerNotebookInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNotebookInstances',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListNotebookInstances.NotebookInstances'),
        outputPath: 'NotebookInstances',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          CreationTimeBefore: this.__input.creationTimeBefore,
          CreationTimeAfter: this.__input.creationTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          StatusEquals: this.__input.statusEquals,
          NotebookInstanceLifecycleConfigNameContains: this.__input.notebookInstanceLifecycleConfigNameContains,
          DefaultCodeRepositoryContains: this.__input.defaultCodeRepositoryContains,
          AdditionalCodeRepositoryEquals: this.__input.additionalCodeRepositoryEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNotebookInstances.NotebookInstances', props);
    return resource.getResponseField('NotebookInstances') as unknown as shapes.SageMakerNotebookInstanceSummary[];
  }

}

export class SageMakerResponsesListProcessingJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListProcessingJobsRequest) {
  }

  public get processingJobSummaries(): shapes.SageMakerProcessingJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProcessingJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListProcessingJobs.ProcessingJobSummaries'),
        outputPath: 'ProcessingJobSummaries',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProcessingJobs.ProcessingJobSummaries', props);
    return resource.getResponseField('ProcessingJobSummaries') as unknown as shapes.SageMakerProcessingJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProcessingJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListProcessingJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProcessingJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListSubscribedWorkteams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListSubscribedWorkteamsRequest) {
  }

  public get subscribedWorkteams(): shapes.SageMakerSubscribedWorkteam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscribedWorkteams',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListSubscribedWorkteams.SubscribedWorkteams'),
        outputPath: 'SubscribedWorkteams',
        parameters: {
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscribedWorkteams.SubscribedWorkteams', props);
    return resource.getResponseField('SubscribedWorkteams') as unknown as shapes.SageMakerSubscribedWorkteam[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSubscribedWorkteams',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListSubscribedWorkteams.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSubscribedWorkteams.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListTagsInput) {
  }

  public get tags(): shapes.SageMakerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SageMakerTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListTrainingJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListTrainingJobsRequest) {
  }

  public get trainingJobSummaries(): shapes.SageMakerTrainingJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrainingJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrainingJobs.TrainingJobSummaries'),
        outputPath: 'TrainingJobSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrainingJobs.TrainingJobSummaries', props);
    return resource.getResponseField('TrainingJobSummaries') as unknown as shapes.SageMakerTrainingJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrainingJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrainingJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrainingJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListTrainingJobsForHyperParameterTuningJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListTrainingJobsForHyperParameterTuningJobRequest) {
  }

  public get trainingJobSummaries(): shapes.SageMakerHyperParameterTrainingJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrainingJobsForHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrainingJobsForHyperParameterTuningJob.TrainingJobSummaries'),
        outputPath: 'TrainingJobSummaries',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrainingJobsForHyperParameterTuningJob.TrainingJobSummaries', props);
    return resource.getResponseField('TrainingJobSummaries') as unknown as shapes.SageMakerHyperParameterTrainingJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrainingJobsForHyperParameterTuningJob',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrainingJobsForHyperParameterTuningJob.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          HyperParameterTuningJobName: this.__input.hyperParameterTuningJobName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrainingJobsForHyperParameterTuningJob.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListTransformJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListTransformJobsRequest) {
  }

  public get transformJobSummaries(): shapes.SageMakerTransformJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTransformJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTransformJobs.TransformJobSummaries'),
        outputPath: 'TransformJobSummaries',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTransformJobs.TransformJobSummaries', props);
    return resource.getResponseField('TransformJobSummaries') as unknown as shapes.SageMakerTransformJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTransformJobs',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTransformJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CreationTimeAfter: this.__input.creationTimeAfter,
          CreationTimeBefore: this.__input.creationTimeBefore,
          LastModifiedTimeAfter: this.__input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.__input.lastModifiedTimeBefore,
          NameContains: this.__input.nameContains,
          StatusEquals: this.__input.statusEquals,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTransformJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListTrialComponents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListTrialComponentsRequest) {
  }

  public get trialComponentSummaries(): shapes.SageMakerTrialComponentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrialComponents',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrialComponents.TrialComponentSummaries'),
        outputPath: 'TrialComponentSummaries',
        parameters: {
          ExperimentName: this.__input.experimentName,
          TrialName: this.__input.trialName,
          SourceArn: this.__input.sourceArn,
          CreatedAfter: this.__input.createdAfter,
          CreatedBefore: this.__input.createdBefore,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrialComponents.TrialComponentSummaries', props);
    return resource.getResponseField('TrialComponentSummaries') as unknown as shapes.SageMakerTrialComponentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrialComponents',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrialComponents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ExperimentName: this.__input.experimentName,
          TrialName: this.__input.trialName,
          SourceArn: this.__input.sourceArn,
          CreatedAfter: this.__input.createdAfter,
          CreatedBefore: this.__input.createdBefore,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrialComponents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListTrials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListTrialsRequest) {
  }

  public get trialSummaries(): shapes.SageMakerTrialSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrials',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrials.TrialSummaries'),
        outputPath: 'TrialSummaries',
        parameters: {
          ExperimentName: this.__input.experimentName,
          TrialComponentName: this.__input.trialComponentName,
          CreatedAfter: this.__input.createdAfter,
          CreatedBefore: this.__input.createdBefore,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrials.TrialSummaries', props);
    return resource.getResponseField('TrialSummaries') as unknown as shapes.SageMakerTrialSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTrials',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListTrials.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ExperimentName: this.__input.experimentName,
          TrialComponentName: this.__input.trialComponentName,
          CreatedAfter: this.__input.createdAfter,
          CreatedBefore: this.__input.createdBefore,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTrials.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListUserProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListUserProfilesRequest) {
  }

  public get userProfiles(): shapes.SageMakerUserProfileDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserProfiles',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListUserProfiles.UserProfiles'),
        outputPath: 'UserProfiles',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          DomainIdEquals: this.__input.domainIdEquals,
          UserProfileNameContains: this.__input.userProfileNameContains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserProfiles.UserProfiles', props);
    return resource.getResponseField('UserProfiles') as unknown as shapes.SageMakerUserProfileDetails[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserProfiles',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListUserProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          SortOrder: this.__input.sortOrder,
          SortBy: this.__input.sortBy,
          DomainIdEquals: this.__input.domainIdEquals,
          UserProfileNameContains: this.__input.userProfileNameContains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListWorkforces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListWorkforcesRequest) {
  }

  public get workforces(): shapes.SageMakerWorkforce[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkforces',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListWorkforces.Workforces'),
        outputPath: 'Workforces',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkforces.Workforces', props);
    return resource.getResponseField('Workforces') as unknown as shapes.SageMakerWorkforce[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkforces',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListWorkforces.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkforces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesListWorkteams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerListWorkteamsRequest) {
  }

  public get workteams(): shapes.SageMakerWorkteam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkteams',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListWorkteams.Workteams'),
        outputPath: 'Workteams',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkteams.Workteams', props);
    return resource.getResponseField('Workteams') as unknown as shapes.SageMakerWorkteam[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkteams',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.ListWorkteams.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NameContains: this.__input.nameContains,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkteams.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesRenderUiTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerRenderUiTemplateRequest) {
  }

  public get renderedContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renderUiTemplate',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.RenderUiTemplate.RenderedContent'),
        outputPath: 'RenderedContent',
        parameters: {
          UiTemplate: {
            Content: this.__input.uiTemplate?.content,
          },
          Task: {
            Input: this.__input.task.input,
          },
          RoleArn: this.__input.roleArn,
          HumanTaskUiArn: this.__input.humanTaskUiArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenderUiTemplate.RenderedContent', props);
    return resource.getResponseField('RenderedContent') as unknown as string;
  }

  public get errors(): shapes.SageMakerRenderingError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renderUiTemplate',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.RenderUiTemplate.Errors'),
        outputPath: 'Errors',
        parameters: {
          UiTemplate: {
            Content: this.__input.uiTemplate?.content,
          },
          Task: {
            Input: this.__input.task.input,
          },
          RoleArn: this.__input.roleArn,
          HumanTaskUiArn: this.__input.humanTaskUiArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenderUiTemplate.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.SageMakerRenderingError[];
  }

}

export class SageMakerResponsesSearch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerSearchRequest) {
  }

  public get results(): shapes.SageMakerSearchRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.Search.Results'),
        outputPath: 'Results',
        parameters: {
          Resource: this.__input.resource,
          SearchExpression: {
            Filters: this.__input.searchExpression?.filters,
            NestedFilters: this.__input.searchExpression?.nestedFilters,
            SubExpressions: this.__input.searchExpression?.subExpressions,
            Operator: this.__input.searchExpression?.operator,
          },
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.SageMakerSearchRecord[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.Search.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Resource: this.__input.resource,
          SearchExpression: {
            Filters: this.__input.searchExpression?.filters,
            NestedFilters: this.__input.searchExpression?.nestedFilters,
            SubExpressions: this.__input.searchExpression?.subExpressions,
            Operator: this.__input.searchExpression?.operator,
          },
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerResponsesUpdateAppImageConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateAppImageConfigRequest) {
  }

  public get appImageConfigArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAppImageConfig',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateAppImageConfig.AppImageConfigArn'),
        outputPath: 'AppImageConfigArn',
        parameters: {
          AppImageConfigName: this.__input.appImageConfigName,
          KernelGatewayImageConfig: {
            KernelSpecs: this.__input.kernelGatewayImageConfig?.kernelSpecs,
            FileSystemConfig: {
              MountPath: this.__input.kernelGatewayImageConfig?.fileSystemConfig?.mountPath,
              DefaultUid: this.__input.kernelGatewayImageConfig?.fileSystemConfig?.defaultUid,
              DefaultGid: this.__input.kernelGatewayImageConfig?.fileSystemConfig?.defaultGid,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAppImageConfig.AppImageConfigArn', props);
    return resource.getResponseField('AppImageConfigArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateCodeRepositoryInput) {
  }

  public get codeRepositoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCodeRepository',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateCodeRepository.CodeRepositoryArn'),
        outputPath: 'CodeRepositoryArn',
        parameters: {
          CodeRepositoryName: this.__input.codeRepositoryName,
          GitConfig: {
            SecretArn: this.__input.gitConfig?.secretArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCodeRepository.CodeRepositoryArn', props);
    return resource.getResponseField('CodeRepositoryArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateDomainRequest) {
  }

  public get domainArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomain',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateDomain.DomainArn'),
        outputPath: 'DomainArn',
        parameters: {
          DomainId: this.__input.domainId,
          DefaultUserSettings: {
            ExecutionRole: this.__input.defaultUserSettings?.executionRole,
            SecurityGroups: this.__input.defaultUserSettings?.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.__input.defaultUserSettings?.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.__input.defaultUserSettings?.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.__input.defaultUserSettings?.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings?.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.__input.defaultUserSettings?.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.defaultUserSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.defaultUserSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.defaultUserSettings?.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomain.DomainArn', props);
    return resource.getResponseField('DomainArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateEndpointInput) {
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpoint',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateEndpoint.EndpointArn'),
        outputPath: 'EndpointArn',
        parameters: {
          EndpointName: this.__input.endpointName,
          EndpointConfigName: this.__input.endpointConfigName,
          RetainAllVariantProperties: this.__input.retainAllVariantProperties,
          ExcludeRetainedVariantProperties: this.__input.excludeRetainedVariantProperties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateEndpointWeightsAndCapacities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateEndpointWeightsAndCapacitiesInput) {
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEndpointWeightsAndCapacities',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateEndpointWeightsAndCapacities.EndpointArn'),
        outputPath: 'EndpointArn',
        parameters: {
          EndpointName: this.__input.endpointName,
          DesiredWeightsAndCapacities: this.__input.desiredWeightsAndCapacities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEndpointWeightsAndCapacities.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateExperiment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateExperimentRequest) {
  }

  public get experimentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateExperiment',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateExperiment.ExperimentArn'),
        outputPath: 'ExperimentArn',
        parameters: {
          ExperimentName: this.__input.experimentName,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateExperiment.ExperimentArn', props);
    return resource.getResponseField('ExperimentArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateImageRequest) {
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateImage',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateImage.ImageArn'),
        outputPath: 'ImageArn',
        parameters: {
          DeleteProperties: this.__input.deleteProperties,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          ImageName: this.__input.imageName,
          RoleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateImage.ImageArn', props);
    return resource.getResponseField('ImageArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateMonitoringSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateMonitoringScheduleRequest) {
  }

  public get monitoringScheduleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMonitoringSchedule',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateMonitoringSchedule.MonitoringScheduleArn'),
        outputPath: 'MonitoringScheduleArn',
        parameters: {
          MonitoringScheduleName: this.__input.monitoringScheduleName,
          MonitoringScheduleConfig: {
            ScheduleConfig: {
              ScheduleExpression: this.__input.monitoringScheduleConfig.scheduleConfig?.scheduleExpression,
            },
            MonitoringJobDefinition: {
              BaselineConfig: {
                ConstraintsResource: {
                  S3Uri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.constraintsResource?.s3Uri,
                },
                StatisticsResource: {
                  S3Uri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.statisticsResource?.s3Uri,
                },
              },
              MonitoringInputs: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringInputs,
              MonitoringOutputConfig: {
                MonitoringOutputs: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.monitoringOutputs,
                KmsKeyId: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.kmsKeyId,
              },
              MonitoringResources: {
                ClusterConfig: {
                  InstanceCount: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceCount,
                  InstanceType: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceType,
                  VolumeSizeInGB: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeSizeInGb,
                  VolumeKmsKeyId: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeKmsKeyId,
                },
              },
              MonitoringAppSpecification: {
                ImageUri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.imageUri,
                ContainerEntrypoint: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerEntrypoint,
                ContainerArguments: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerArguments,
                RecordPreprocessorSourceUri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.recordPreprocessorSourceUri,
                PostAnalyticsProcessorSourceUri: this.__input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.postAnalyticsProcessorSourceUri,
              },
              StoppingCondition: {
                MaxRuntimeInSeconds: this.__input.monitoringScheduleConfig.monitoringJobDefinition.stoppingCondition?.maxRuntimeInSeconds,
              },
              Environment: this.__input.monitoringScheduleConfig.monitoringJobDefinition.environment,
              NetworkConfig: {
                EnableInterContainerTrafficEncryption: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableInterContainerTrafficEncryption,
                EnableNetworkIsolation: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableNetworkIsolation,
                VpcConfig: {
                  SecurityGroupIds: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.securityGroupIds,
                  Subnets: this.__input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.subnets,
                },
              },
              RoleArn: this.__input.monitoringScheduleConfig.monitoringJobDefinition.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMonitoringSchedule.MonitoringScheduleArn', props);
    return resource.getResponseField('MonitoringScheduleArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateTrial {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateTrialRequest) {
  }

  public get trialArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrial',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateTrial.TrialArn'),
        outputPath: 'TrialArn',
        parameters: {
          TrialName: this.__input.trialName,
          DisplayName: this.__input.displayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrial.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateTrialComponent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateTrialComponentRequest) {
  }

  public get trialComponentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrialComponent',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateTrialComponent.TrialComponentArn'),
        outputPath: 'TrialComponentArn',
        parameters: {
          TrialComponentName: this.__input.trialComponentName,
          DisplayName: this.__input.displayName,
          Status: {
            PrimaryStatus: this.__input.status?.primaryStatus,
            Message: this.__input.status?.message,
          },
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Parameters: this.__input.parameters,
          ParametersToRemove: this.__input.parametersToRemove,
          InputArtifacts: this.__input.inputArtifacts,
          InputArtifactsToRemove: this.__input.inputArtifactsToRemove,
          OutputArtifacts: this.__input.outputArtifacts,
          OutputArtifactsToRemove: this.__input.outputArtifactsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateUserProfileRequest) {
  }

  public get userProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateUserProfile.UserProfileArn'),
        outputPath: 'UserProfileArn',
        parameters: {
          DomainId: this.__input.domainId,
          UserProfileName: this.__input.userProfileName,
          UserSettings: {
            ExecutionRole: this.__input.userSettings?.executionRole,
            SecurityGroups: this.__input.userSettings?.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.__input.userSettings?.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.__input.userSettings?.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.__input.userSettings?.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.__input.userSettings?.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.__input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.__input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.__input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUserProfile.UserProfileArn', props);
    return resource.getResponseField('UserProfileArn') as unknown as string;
  }

}

export class SageMakerResponsesUpdateWorkforce {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkforceRequest) {
  }

  public get workforce(): SageMakerResponsesUpdateWorkforceWorkforce {
    return new SageMakerResponsesUpdateWorkforceWorkforce(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesUpdateWorkforceWorkforce {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkforceRequest) {
  }

  public get workforceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.WorkforceName'),
        outputPath: 'Workforce.WorkforceName',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.WorkforceName', props);
    return resource.getResponseField('Workforce.WorkforceName') as unknown as string;
  }

  public get workforceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.WorkforceArn'),
        outputPath: 'Workforce.WorkforceArn',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.WorkforceArn', props);
    return resource.getResponseField('Workforce.WorkforceArn') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.LastUpdatedDate'),
        outputPath: 'Workforce.LastUpdatedDate',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.LastUpdatedDate', props);
    return resource.getResponseField('Workforce.LastUpdatedDate') as unknown as string;
  }

  public get sourceIpConfig(): SageMakerResponsesUpdateWorkforceWorkforceSourceIpConfig {
    return new SageMakerResponsesUpdateWorkforceWorkforceSourceIpConfig(this.__scope, this.__resources, this.__input);
  }

  public get subDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.SubDomain'),
        outputPath: 'Workforce.SubDomain',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.SubDomain', props);
    return resource.getResponseField('Workforce.SubDomain') as unknown as string;
  }

  public get cognitoConfig(): SageMakerResponsesUpdateWorkforceWorkforceCognitoConfig {
    return new SageMakerResponsesUpdateWorkforceWorkforceCognitoConfig(this.__scope, this.__resources, this.__input);
  }

  public get oidcConfig(): SageMakerResponsesUpdateWorkforceWorkforceOidcConfig {
    return new SageMakerResponsesUpdateWorkforceWorkforceOidcConfig(this.__scope, this.__resources, this.__input);
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.CreateDate'),
        outputPath: 'Workforce.CreateDate',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.CreateDate', props);
    return resource.getResponseField('Workforce.CreateDate') as unknown as string;
  }

}

export class SageMakerResponsesUpdateWorkforceWorkforceSourceIpConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkforceRequest) {
  }

  public get cidrs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.SourceIpConfig.Cidrs'),
        outputPath: 'Workforce.SourceIpConfig.Cidrs',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.SourceIpConfig.Cidrs', props);
    return resource.getResponseField('Workforce.SourceIpConfig.Cidrs') as unknown as string[];
  }

}

export class SageMakerResponsesUpdateWorkforceWorkforceCognitoConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkforceRequest) {
  }

  public get userPool(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.CognitoConfig.UserPool'),
        outputPath: 'Workforce.CognitoConfig.UserPool',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.CognitoConfig.UserPool', props);
    return resource.getResponseField('Workforce.CognitoConfig.UserPool') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.CognitoConfig.ClientId'),
        outputPath: 'Workforce.CognitoConfig.ClientId',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.CognitoConfig.ClientId', props);
    return resource.getResponseField('Workforce.CognitoConfig.ClientId') as unknown as string;
  }

}

export class SageMakerResponsesUpdateWorkforceWorkforceOidcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkforceRequest) {
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.OidcConfig.ClientId'),
        outputPath: 'Workforce.OidcConfig.ClientId',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.OidcConfig.ClientId', props);
    return resource.getResponseField('Workforce.OidcConfig.ClientId') as unknown as string;
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.OidcConfig.Issuer'),
        outputPath: 'Workforce.OidcConfig.Issuer',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.OidcConfig.Issuer', props);
    return resource.getResponseField('Workforce.OidcConfig.Issuer') as unknown as string;
  }

  public get authorizationEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.OidcConfig.AuthorizationEndpoint'),
        outputPath: 'Workforce.OidcConfig.AuthorizationEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.OidcConfig.AuthorizationEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.AuthorizationEndpoint') as unknown as string;
  }

  public get tokenEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.OidcConfig.TokenEndpoint'),
        outputPath: 'Workforce.OidcConfig.TokenEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.OidcConfig.TokenEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.TokenEndpoint') as unknown as string;
  }

  public get userInfoEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.OidcConfig.UserInfoEndpoint'),
        outputPath: 'Workforce.OidcConfig.UserInfoEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.OidcConfig.UserInfoEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.UserInfoEndpoint') as unknown as string;
  }

  public get logoutEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.OidcConfig.LogoutEndpoint'),
        outputPath: 'Workforce.OidcConfig.LogoutEndpoint',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.OidcConfig.LogoutEndpoint', props);
    return resource.getResponseField('Workforce.OidcConfig.LogoutEndpoint') as unknown as string;
  }

  public get jwksUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkforce',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkforce.Workforce.OidcConfig.JwksUri'),
        outputPath: 'Workforce.OidcConfig.JwksUri',
        parameters: {
          WorkforceName: this.__input.workforceName,
          SourceIpConfig: {
            Cidrs: this.__input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.__input.oidcConfig?.clientId,
            ClientSecret: this.__input.oidcConfig?.clientSecret,
            Issuer: this.__input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.__input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.__input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.__input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.__input.oidcConfig?.logoutEndpoint,
            JwksUri: this.__input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkforce.Workforce.OidcConfig.JwksUri', props);
    return resource.getResponseField('Workforce.OidcConfig.JwksUri') as unknown as string;
  }

}

export class SageMakerResponsesUpdateWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkteamRequest) {
  }

  public get workteam(): SageMakerResponsesUpdateWorkteamWorkteam {
    return new SageMakerResponsesUpdateWorkteamWorkteam(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesUpdateWorkteamWorkteam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkteamRequest) {
  }

  public get workteamName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.WorkteamName'),
        outputPath: 'Workteam.WorkteamName',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.WorkteamName', props);
    return resource.getResponseField('Workteam.WorkteamName') as unknown as string;
  }

  public get memberDefinitions(): shapes.SageMakerMemberDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.MemberDefinitions'),
        outputPath: 'Workteam.MemberDefinitions',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.MemberDefinitions', props);
    return resource.getResponseField('Workteam.MemberDefinitions') as unknown as shapes.SageMakerMemberDefinition[];
  }

  public get workteamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.WorkteamArn'),
        outputPath: 'Workteam.WorkteamArn',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.WorkteamArn', props);
    return resource.getResponseField('Workteam.WorkteamArn') as unknown as string;
  }

  public get workforceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.WorkforceArn'),
        outputPath: 'Workteam.WorkforceArn',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.WorkforceArn', props);
    return resource.getResponseField('Workteam.WorkforceArn') as unknown as string;
  }

  public get productListingIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.ProductListingIds'),
        outputPath: 'Workteam.ProductListingIds',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.ProductListingIds', props);
    return resource.getResponseField('Workteam.ProductListingIds') as unknown as string[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.Description'),
        outputPath: 'Workteam.Description',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.Description', props);
    return resource.getResponseField('Workteam.Description') as unknown as string;
  }

  public get subDomain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.SubDomain'),
        outputPath: 'Workteam.SubDomain',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.SubDomain', props);
    return resource.getResponseField('Workteam.SubDomain') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.CreateDate'),
        outputPath: 'Workteam.CreateDate',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.CreateDate', props);
    return resource.getResponseField('Workteam.CreateDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.LastUpdatedDate'),
        outputPath: 'Workteam.LastUpdatedDate',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.LastUpdatedDate', props);
    return resource.getResponseField('Workteam.LastUpdatedDate') as unknown as string;
  }

  public get notificationConfiguration(): SageMakerResponsesUpdateWorkteamWorkteamNotificationConfiguration {
    return new SageMakerResponsesUpdateWorkteamWorkteamNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SageMakerResponsesUpdateWorkteamWorkteamNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SageMakerUpdateWorkteamRequest) {
  }

  public get notificationTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkteam',
        service: 'SageMaker',
        physicalResourceId: cr.PhysicalResourceId.of('SageMaker.UpdateWorkteam.Workteam.NotificationConfiguration.NotificationTopicArn'),
        outputPath: 'Workteam.NotificationConfiguration.NotificationTopicArn',
        parameters: {
          WorkteamName: this.__input.workteamName,
          MemberDefinitions: this.__input.memberDefinitions,
          Description: this.__input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.__input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorkteam.Workteam.NotificationConfiguration.NotificationTopicArn', props);
    return resource.getResponseField('Workteam.NotificationConfiguration.NotificationTopicArn') as unknown as string;
  }

}

