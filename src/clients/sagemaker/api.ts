import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SageMakerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTags(input: shapes.SageMakerAddTagsInput): SageMakerAddTags {
    return new SageMakerAddTags(this, 'AddTags', this.__resources, input);
  }

  public associateTrialComponent(input: shapes.SageMakerAssociateTrialComponentRequest): SageMakerAssociateTrialComponent {
    return new SageMakerAssociateTrialComponent(this, 'AssociateTrialComponent', this.__resources, input);
  }

  public createAlgorithm(input: shapes.SageMakerCreateAlgorithmInput): SageMakerCreateAlgorithm {
    return new SageMakerCreateAlgorithm(this, 'CreateAlgorithm', this.__resources, input);
  }

  public createApp(input: shapes.SageMakerCreateAppRequest): SageMakerCreateApp {
    return new SageMakerCreateApp(this, 'CreateApp', this.__resources, input);
  }

  public createAppImageConfig(input: shapes.SageMakerCreateAppImageConfigRequest): SageMakerCreateAppImageConfig {
    return new SageMakerCreateAppImageConfig(this, 'CreateAppImageConfig', this.__resources, input);
  }

  public createAutoMlJob(input: shapes.SageMakerCreateAutoMlJobRequest): SageMakerCreateAutoMlJob {
    return new SageMakerCreateAutoMlJob(this, 'CreateAutoMlJob', this.__resources, input);
  }

  public createCodeRepository(input: shapes.SageMakerCreateCodeRepositoryInput): SageMakerCreateCodeRepository {
    return new SageMakerCreateCodeRepository(this, 'CreateCodeRepository', this.__resources, input);
  }

  public createCompilationJob(input: shapes.SageMakerCreateCompilationJobRequest): SageMakerCreateCompilationJob {
    return new SageMakerCreateCompilationJob(this, 'CreateCompilationJob', this.__resources, input);
  }

  public createDomain(input: shapes.SageMakerCreateDomainRequest): SageMakerCreateDomain {
    return new SageMakerCreateDomain(this, 'CreateDomain', this.__resources, input);
  }

  public createEndpoint(input: shapes.SageMakerCreateEndpointInput): SageMakerCreateEndpoint {
    return new SageMakerCreateEndpoint(this, 'CreateEndpoint', this.__resources, input);
  }

  public createEndpointConfig(input: shapes.SageMakerCreateEndpointConfigInput): SageMakerCreateEndpointConfig {
    return new SageMakerCreateEndpointConfig(this, 'CreateEndpointConfig', this.__resources, input);
  }

  public createExperiment(input: shapes.SageMakerCreateExperimentRequest): SageMakerCreateExperiment {
    return new SageMakerCreateExperiment(this, 'CreateExperiment', this.__resources, input);
  }

  public createFlowDefinition(input: shapes.SageMakerCreateFlowDefinitionRequest): SageMakerCreateFlowDefinition {
    return new SageMakerCreateFlowDefinition(this, 'CreateFlowDefinition', this.__resources, input);
  }

  public createHumanTaskUi(input: shapes.SageMakerCreateHumanTaskUiRequest): SageMakerCreateHumanTaskUi {
    return new SageMakerCreateHumanTaskUi(this, 'CreateHumanTaskUi', this.__resources, input);
  }

  public createHyperParameterTuningJob(input: shapes.SageMakerCreateHyperParameterTuningJobRequest): SageMakerCreateHyperParameterTuningJob {
    return new SageMakerCreateHyperParameterTuningJob(this, 'CreateHyperParameterTuningJob', this.__resources, input);
  }

  public createImage(input: shapes.SageMakerCreateImageRequest): SageMakerCreateImage {
    return new SageMakerCreateImage(this, 'CreateImage', this.__resources, input);
  }

  public createImageVersion(input: shapes.SageMakerCreateImageVersionRequest): SageMakerCreateImageVersion {
    return new SageMakerCreateImageVersion(this, 'CreateImageVersion', this.__resources, input);
  }

  public createLabelingJob(input: shapes.SageMakerCreateLabelingJobRequest): SageMakerCreateLabelingJob {
    return new SageMakerCreateLabelingJob(this, 'CreateLabelingJob', this.__resources, input);
  }

  public createModel(input: shapes.SageMakerCreateModelInput): SageMakerCreateModel {
    return new SageMakerCreateModel(this, 'CreateModel', this.__resources, input);
  }

  public createModelPackage(input: shapes.SageMakerCreateModelPackageInput): SageMakerCreateModelPackage {
    return new SageMakerCreateModelPackage(this, 'CreateModelPackage', this.__resources, input);
  }

  public createMonitoringSchedule(input: shapes.SageMakerCreateMonitoringScheduleRequest): SageMakerCreateMonitoringSchedule {
    return new SageMakerCreateMonitoringSchedule(this, 'CreateMonitoringSchedule', this.__resources, input);
  }

  public createNotebookInstance(input: shapes.SageMakerCreateNotebookInstanceInput): SageMakerCreateNotebookInstance {
    return new SageMakerCreateNotebookInstance(this, 'CreateNotebookInstance', this.__resources, input);
  }

  public createNotebookInstanceLifecycleConfig(input: shapes.SageMakerCreateNotebookInstanceLifecycleConfigInput): SageMakerCreateNotebookInstanceLifecycleConfig {
    return new SageMakerCreateNotebookInstanceLifecycleConfig(this, 'CreateNotebookInstanceLifecycleConfig', this.__resources, input);
  }

  public createPresignedDomainUrl(input: shapes.SageMakerCreatePresignedDomainUrlRequest): SageMakerCreatePresignedDomainUrl {
    return new SageMakerCreatePresignedDomainUrl(this, 'CreatePresignedDomainUrl', this.__resources, input);
  }

  public createPresignedNotebookInstanceUrl(input: shapes.SageMakerCreatePresignedNotebookInstanceUrlInput): SageMakerCreatePresignedNotebookInstanceUrl {
    return new SageMakerCreatePresignedNotebookInstanceUrl(this, 'CreatePresignedNotebookInstanceUrl', this.__resources, input);
  }

  public createProcessingJob(input: shapes.SageMakerCreateProcessingJobRequest): SageMakerCreateProcessingJob {
    return new SageMakerCreateProcessingJob(this, 'CreateProcessingJob', this.__resources, input);
  }

  public createTrainingJob(input: shapes.SageMakerCreateTrainingJobRequest): SageMakerCreateTrainingJob {
    return new SageMakerCreateTrainingJob(this, 'CreateTrainingJob', this.__resources, input);
  }

  public createTransformJob(input: shapes.SageMakerCreateTransformJobRequest): SageMakerCreateTransformJob {
    return new SageMakerCreateTransformJob(this, 'CreateTransformJob', this.__resources, input);
  }

  public createTrial(input: shapes.SageMakerCreateTrialRequest): SageMakerCreateTrial {
    return new SageMakerCreateTrial(this, 'CreateTrial', this.__resources, input);
  }

  public createTrialComponent(input: shapes.SageMakerCreateTrialComponentRequest): SageMakerCreateTrialComponent {
    return new SageMakerCreateTrialComponent(this, 'CreateTrialComponent', this.__resources, input);
  }

  public createUserProfile(input: shapes.SageMakerCreateUserProfileRequest): SageMakerCreateUserProfile {
    return new SageMakerCreateUserProfile(this, 'CreateUserProfile', this.__resources, input);
  }

  public createWorkforce(input: shapes.SageMakerCreateWorkforceRequest): SageMakerCreateWorkforce {
    return new SageMakerCreateWorkforce(this, 'CreateWorkforce', this.__resources, input);
  }

  public createWorkteam(input: shapes.SageMakerCreateWorkteamRequest): SageMakerCreateWorkteam {
    return new SageMakerCreateWorkteam(this, 'CreateWorkteam', this.__resources, input);
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

  public deleteExperiment(input: shapes.SageMakerDeleteExperimentRequest): SageMakerDeleteExperiment {
    return new SageMakerDeleteExperiment(this, 'DeleteExperiment', this.__resources, input);
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

  public deleteTrial(input: shapes.SageMakerDeleteTrialRequest): SageMakerDeleteTrial {
    return new SageMakerDeleteTrial(this, 'DeleteTrial', this.__resources, input);
  }

  public deleteTrialComponent(input: shapes.SageMakerDeleteTrialComponentRequest): SageMakerDeleteTrialComponent {
    return new SageMakerDeleteTrialComponent(this, 'DeleteTrialComponent', this.__resources, input);
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

  public deleteWorkteam(input: shapes.SageMakerDeleteWorkteamRequest): SageMakerDeleteWorkteam {
    return new SageMakerDeleteWorkteam(this, 'DeleteWorkteam', this.__resources, input);
  }

  public describeAlgorithm(input: shapes.SageMakerDescribeAlgorithmInput): SageMakerDescribeAlgorithm {
    return new SageMakerDescribeAlgorithm(this, 'DescribeAlgorithm', this.__resources, input);
  }

  public describeApp(input: shapes.SageMakerDescribeAppRequest): SageMakerDescribeApp {
    return new SageMakerDescribeApp(this, 'DescribeApp', this.__resources, input);
  }

  public describeAppImageConfig(input: shapes.SageMakerDescribeAppImageConfigRequest): SageMakerDescribeAppImageConfig {
    return new SageMakerDescribeAppImageConfig(this, 'DescribeAppImageConfig', this.__resources, input);
  }

  public describeAutoMlJob(input: shapes.SageMakerDescribeAutoMlJobRequest): SageMakerDescribeAutoMlJob {
    return new SageMakerDescribeAutoMlJob(this, 'DescribeAutoMlJob', this.__resources, input);
  }

  public describeCodeRepository(input: shapes.SageMakerDescribeCodeRepositoryInput): SageMakerDescribeCodeRepository {
    return new SageMakerDescribeCodeRepository(this, 'DescribeCodeRepository', this.__resources, input);
  }

  public describeCompilationJob(input: shapes.SageMakerDescribeCompilationJobRequest): SageMakerDescribeCompilationJob {
    return new SageMakerDescribeCompilationJob(this, 'DescribeCompilationJob', this.__resources, input);
  }

  public describeDomain(input: shapes.SageMakerDescribeDomainRequest): SageMakerDescribeDomain {
    return new SageMakerDescribeDomain(this, 'DescribeDomain', this.__resources, input);
  }

  public describeEndpoint(input: shapes.SageMakerDescribeEndpointInput): SageMakerDescribeEndpoint {
    return new SageMakerDescribeEndpoint(this, 'DescribeEndpoint', this.__resources, input);
  }

  public describeEndpointConfig(input: shapes.SageMakerDescribeEndpointConfigInput): SageMakerDescribeEndpointConfig {
    return new SageMakerDescribeEndpointConfig(this, 'DescribeEndpointConfig', this.__resources, input);
  }

  public describeExperiment(input: shapes.SageMakerDescribeExperimentRequest): SageMakerDescribeExperiment {
    return new SageMakerDescribeExperiment(this, 'DescribeExperiment', this.__resources, input);
  }

  public describeFlowDefinition(input: shapes.SageMakerDescribeFlowDefinitionRequest): SageMakerDescribeFlowDefinition {
    return new SageMakerDescribeFlowDefinition(this, 'DescribeFlowDefinition', this.__resources, input);
  }

  public describeHumanTaskUi(input: shapes.SageMakerDescribeHumanTaskUiRequest): SageMakerDescribeHumanTaskUi {
    return new SageMakerDescribeHumanTaskUi(this, 'DescribeHumanTaskUi', this.__resources, input);
  }

  public describeHyperParameterTuningJob(input: shapes.SageMakerDescribeHyperParameterTuningJobRequest): SageMakerDescribeHyperParameterTuningJob {
    return new SageMakerDescribeHyperParameterTuningJob(this, 'DescribeHyperParameterTuningJob', this.__resources, input);
  }

  public describeImage(input: shapes.SageMakerDescribeImageRequest): SageMakerDescribeImage {
    return new SageMakerDescribeImage(this, 'DescribeImage', this.__resources, input);
  }

  public describeImageVersion(input: shapes.SageMakerDescribeImageVersionRequest): SageMakerDescribeImageVersion {
    return new SageMakerDescribeImageVersion(this, 'DescribeImageVersion', this.__resources, input);
  }

  public describeLabelingJob(input: shapes.SageMakerDescribeLabelingJobRequest): SageMakerDescribeLabelingJob {
    return new SageMakerDescribeLabelingJob(this, 'DescribeLabelingJob', this.__resources, input);
  }

  public describeModel(input: shapes.SageMakerDescribeModelInput): SageMakerDescribeModel {
    return new SageMakerDescribeModel(this, 'DescribeModel', this.__resources, input);
  }

  public describeModelPackage(input: shapes.SageMakerDescribeModelPackageInput): SageMakerDescribeModelPackage {
    return new SageMakerDescribeModelPackage(this, 'DescribeModelPackage', this.__resources, input);
  }

  public describeMonitoringSchedule(input: shapes.SageMakerDescribeMonitoringScheduleRequest): SageMakerDescribeMonitoringSchedule {
    return new SageMakerDescribeMonitoringSchedule(this, 'DescribeMonitoringSchedule', this.__resources, input);
  }

  public describeNotebookInstance(input: shapes.SageMakerDescribeNotebookInstanceInput): SageMakerDescribeNotebookInstance {
    return new SageMakerDescribeNotebookInstance(this, 'DescribeNotebookInstance', this.__resources, input);
  }

  public describeNotebookInstanceLifecycleConfig(input: shapes.SageMakerDescribeNotebookInstanceLifecycleConfigInput): SageMakerDescribeNotebookInstanceLifecycleConfig {
    return new SageMakerDescribeNotebookInstanceLifecycleConfig(this, 'DescribeNotebookInstanceLifecycleConfig', this.__resources, input);
  }

  public describeProcessingJob(input: shapes.SageMakerDescribeProcessingJobRequest): SageMakerDescribeProcessingJob {
    return new SageMakerDescribeProcessingJob(this, 'DescribeProcessingJob', this.__resources, input);
  }

  public describeSubscribedWorkteam(input: shapes.SageMakerDescribeSubscribedWorkteamRequest): SageMakerDescribeSubscribedWorkteam {
    return new SageMakerDescribeSubscribedWorkteam(this, 'DescribeSubscribedWorkteam', this.__resources, input);
  }

  public describeTrainingJob(input: shapes.SageMakerDescribeTrainingJobRequest): SageMakerDescribeTrainingJob {
    return new SageMakerDescribeTrainingJob(this, 'DescribeTrainingJob', this.__resources, input);
  }

  public describeTransformJob(input: shapes.SageMakerDescribeTransformJobRequest): SageMakerDescribeTransformJob {
    return new SageMakerDescribeTransformJob(this, 'DescribeTransformJob', this.__resources, input);
  }

  public describeTrial(input: shapes.SageMakerDescribeTrialRequest): SageMakerDescribeTrial {
    return new SageMakerDescribeTrial(this, 'DescribeTrial', this.__resources, input);
  }

  public describeTrialComponent(input: shapes.SageMakerDescribeTrialComponentRequest): SageMakerDescribeTrialComponent {
    return new SageMakerDescribeTrialComponent(this, 'DescribeTrialComponent', this.__resources, input);
  }

  public describeUserProfile(input: shapes.SageMakerDescribeUserProfileRequest): SageMakerDescribeUserProfile {
    return new SageMakerDescribeUserProfile(this, 'DescribeUserProfile', this.__resources, input);
  }

  public describeWorkforce(input: shapes.SageMakerDescribeWorkforceRequest): SageMakerDescribeWorkforce {
    return new SageMakerDescribeWorkforce(this, 'DescribeWorkforce', this.__resources, input);
  }

  public describeWorkteam(input: shapes.SageMakerDescribeWorkteamRequest): SageMakerDescribeWorkteam {
    return new SageMakerDescribeWorkteam(this, 'DescribeWorkteam', this.__resources, input);
  }

  public disassociateTrialComponent(input: shapes.SageMakerDisassociateTrialComponentRequest): SageMakerDisassociateTrialComponent {
    return new SageMakerDisassociateTrialComponent(this, 'DisassociateTrialComponent', this.__resources, input);
  }

  public fetchSearchSuggestions(input: shapes.SageMakerGetSearchSuggestionsRequest): SageMakerFetchSearchSuggestions {
    return new SageMakerFetchSearchSuggestions(this, 'FetchSearchSuggestions', this.__resources, input);
  }

  public listAlgorithms(input: shapes.SageMakerListAlgorithmsInput): SageMakerListAlgorithms {
    return new SageMakerListAlgorithms(this, 'ListAlgorithms', this.__resources, input);
  }

  public listAppImageConfigs(input: shapes.SageMakerListAppImageConfigsRequest): SageMakerListAppImageConfigs {
    return new SageMakerListAppImageConfigs(this, 'ListAppImageConfigs', this.__resources, input);
  }

  public listApps(input: shapes.SageMakerListAppsRequest): SageMakerListApps {
    return new SageMakerListApps(this, 'ListApps', this.__resources, input);
  }

  public listAutoMlJobs(input: shapes.SageMakerListAutoMlJobsRequest): SageMakerListAutoMlJobs {
    return new SageMakerListAutoMlJobs(this, 'ListAutoMlJobs', this.__resources, input);
  }

  public listCandidatesForAutoMlJob(input: shapes.SageMakerListCandidatesForAutoMlJobRequest): SageMakerListCandidatesForAutoMlJob {
    return new SageMakerListCandidatesForAutoMlJob(this, 'ListCandidatesForAutoMlJob', this.__resources, input);
  }

  public listCodeRepositories(input: shapes.SageMakerListCodeRepositoriesInput): SageMakerListCodeRepositories {
    return new SageMakerListCodeRepositories(this, 'ListCodeRepositories', this.__resources, input);
  }

  public listCompilationJobs(input: shapes.SageMakerListCompilationJobsRequest): SageMakerListCompilationJobs {
    return new SageMakerListCompilationJobs(this, 'ListCompilationJobs', this.__resources, input);
  }

  public listDomains(input: shapes.SageMakerListDomainsRequest): SageMakerListDomains {
    return new SageMakerListDomains(this, 'ListDomains', this.__resources, input);
  }

  public listEndpointConfigs(input: shapes.SageMakerListEndpointConfigsInput): SageMakerListEndpointConfigs {
    return new SageMakerListEndpointConfigs(this, 'ListEndpointConfigs', this.__resources, input);
  }

  public listEndpoints(input: shapes.SageMakerListEndpointsInput): SageMakerListEndpoints {
    return new SageMakerListEndpoints(this, 'ListEndpoints', this.__resources, input);
  }

  public listExperiments(input: shapes.SageMakerListExperimentsRequest): SageMakerListExperiments {
    return new SageMakerListExperiments(this, 'ListExperiments', this.__resources, input);
  }

  public listFlowDefinitions(input: shapes.SageMakerListFlowDefinitionsRequest): SageMakerListFlowDefinitions {
    return new SageMakerListFlowDefinitions(this, 'ListFlowDefinitions', this.__resources, input);
  }

  public listHumanTaskUis(input: shapes.SageMakerListHumanTaskUisRequest): SageMakerListHumanTaskUis {
    return new SageMakerListHumanTaskUis(this, 'ListHumanTaskUis', this.__resources, input);
  }

  public listHyperParameterTuningJobs(input: shapes.SageMakerListHyperParameterTuningJobsRequest): SageMakerListHyperParameterTuningJobs {
    return new SageMakerListHyperParameterTuningJobs(this, 'ListHyperParameterTuningJobs', this.__resources, input);
  }

  public listImageVersions(input: shapes.SageMakerListImageVersionsRequest): SageMakerListImageVersions {
    return new SageMakerListImageVersions(this, 'ListImageVersions', this.__resources, input);
  }

  public listImages(input: shapes.SageMakerListImagesRequest): SageMakerListImages {
    return new SageMakerListImages(this, 'ListImages', this.__resources, input);
  }

  public listLabelingJobs(input: shapes.SageMakerListLabelingJobsRequest): SageMakerListLabelingJobs {
    return new SageMakerListLabelingJobs(this, 'ListLabelingJobs', this.__resources, input);
  }

  public listLabelingJobsForWorkteam(input: shapes.SageMakerListLabelingJobsForWorkteamRequest): SageMakerListLabelingJobsForWorkteam {
    return new SageMakerListLabelingJobsForWorkteam(this, 'ListLabelingJobsForWorkteam', this.__resources, input);
  }

  public listModelPackages(input: shapes.SageMakerListModelPackagesInput): SageMakerListModelPackages {
    return new SageMakerListModelPackages(this, 'ListModelPackages', this.__resources, input);
  }

  public listModels(input: shapes.SageMakerListModelsInput): SageMakerListModels {
    return new SageMakerListModels(this, 'ListModels', this.__resources, input);
  }

  public listMonitoringExecutions(input: shapes.SageMakerListMonitoringExecutionsRequest): SageMakerListMonitoringExecutions {
    return new SageMakerListMonitoringExecutions(this, 'ListMonitoringExecutions', this.__resources, input);
  }

  public listMonitoringSchedules(input: shapes.SageMakerListMonitoringSchedulesRequest): SageMakerListMonitoringSchedules {
    return new SageMakerListMonitoringSchedules(this, 'ListMonitoringSchedules', this.__resources, input);
  }

  public listNotebookInstanceLifecycleConfigs(input: shapes.SageMakerListNotebookInstanceLifecycleConfigsInput): SageMakerListNotebookInstanceLifecycleConfigs {
    return new SageMakerListNotebookInstanceLifecycleConfigs(this, 'ListNotebookInstanceLifecycleConfigs', this.__resources, input);
  }

  public listNotebookInstances(input: shapes.SageMakerListNotebookInstancesInput): SageMakerListNotebookInstances {
    return new SageMakerListNotebookInstances(this, 'ListNotebookInstances', this.__resources, input);
  }

  public listProcessingJobs(input: shapes.SageMakerListProcessingJobsRequest): SageMakerListProcessingJobs {
    return new SageMakerListProcessingJobs(this, 'ListProcessingJobs', this.__resources, input);
  }

  public listSubscribedWorkteams(input: shapes.SageMakerListSubscribedWorkteamsRequest): SageMakerListSubscribedWorkteams {
    return new SageMakerListSubscribedWorkteams(this, 'ListSubscribedWorkteams', this.__resources, input);
  }

  public listTags(input: shapes.SageMakerListTagsInput): SageMakerListTags {
    return new SageMakerListTags(this, 'ListTags', this.__resources, input);
  }

  public listTrainingJobs(input: shapes.SageMakerListTrainingJobsRequest): SageMakerListTrainingJobs {
    return new SageMakerListTrainingJobs(this, 'ListTrainingJobs', this.__resources, input);
  }

  public listTrainingJobsForHyperParameterTuningJob(input: shapes.SageMakerListTrainingJobsForHyperParameterTuningJobRequest): SageMakerListTrainingJobsForHyperParameterTuningJob {
    return new SageMakerListTrainingJobsForHyperParameterTuningJob(this, 'ListTrainingJobsForHyperParameterTuningJob', this.__resources, input);
  }

  public listTransformJobs(input: shapes.SageMakerListTransformJobsRequest): SageMakerListTransformJobs {
    return new SageMakerListTransformJobs(this, 'ListTransformJobs', this.__resources, input);
  }

  public listTrialComponents(input: shapes.SageMakerListTrialComponentsRequest): SageMakerListTrialComponents {
    return new SageMakerListTrialComponents(this, 'ListTrialComponents', this.__resources, input);
  }

  public listTrials(input: shapes.SageMakerListTrialsRequest): SageMakerListTrials {
    return new SageMakerListTrials(this, 'ListTrials', this.__resources, input);
  }

  public listUserProfiles(input: shapes.SageMakerListUserProfilesRequest): SageMakerListUserProfiles {
    return new SageMakerListUserProfiles(this, 'ListUserProfiles', this.__resources, input);
  }

  public listWorkforces(input: shapes.SageMakerListWorkforcesRequest): SageMakerListWorkforces {
    return new SageMakerListWorkforces(this, 'ListWorkforces', this.__resources, input);
  }

  public listWorkteams(input: shapes.SageMakerListWorkteamsRequest): SageMakerListWorkteams {
    return new SageMakerListWorkteams(this, 'ListWorkteams', this.__resources, input);
  }

  public renderUiTemplate(input: shapes.SageMakerRenderUiTemplateRequest): SageMakerRenderUiTemplate {
    return new SageMakerRenderUiTemplate(this, 'RenderUiTemplate', this.__resources, input);
  }

  public search(input: shapes.SageMakerSearchRequest): SageMakerSearch {
    return new SageMakerSearch(this, 'Search', this.__resources, input);
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

  public updateAppImageConfig(input: shapes.SageMakerUpdateAppImageConfigRequest): SageMakerUpdateAppImageConfig {
    return new SageMakerUpdateAppImageConfig(this, 'UpdateAppImageConfig', this.__resources, input);
  }

  public updateCodeRepository(input: shapes.SageMakerUpdateCodeRepositoryInput): SageMakerUpdateCodeRepository {
    return new SageMakerUpdateCodeRepository(this, 'UpdateCodeRepository', this.__resources, input);
  }

  public updateDomain(input: shapes.SageMakerUpdateDomainRequest): SageMakerUpdateDomain {
    return new SageMakerUpdateDomain(this, 'UpdateDomain', this.__resources, input);
  }

  public updateEndpoint(input: shapes.SageMakerUpdateEndpointInput): SageMakerUpdateEndpoint {
    return new SageMakerUpdateEndpoint(this, 'UpdateEndpoint', this.__resources, input);
  }

  public updateEndpointWeightsAndCapacities(input: shapes.SageMakerUpdateEndpointWeightsAndCapacitiesInput): SageMakerUpdateEndpointWeightsAndCapacities {
    return new SageMakerUpdateEndpointWeightsAndCapacities(this, 'UpdateEndpointWeightsAndCapacities', this.__resources, input);
  }

  public updateExperiment(input: shapes.SageMakerUpdateExperimentRequest): SageMakerUpdateExperiment {
    return new SageMakerUpdateExperiment(this, 'UpdateExperiment', this.__resources, input);
  }

  public updateImage(input: shapes.SageMakerUpdateImageRequest): SageMakerUpdateImage {
    return new SageMakerUpdateImage(this, 'UpdateImage', this.__resources, input);
  }

  public updateMonitoringSchedule(input: shapes.SageMakerUpdateMonitoringScheduleRequest): SageMakerUpdateMonitoringSchedule {
    return new SageMakerUpdateMonitoringSchedule(this, 'UpdateMonitoringSchedule', this.__resources, input);
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

  public updateTrial(input: shapes.SageMakerUpdateTrialRequest): SageMakerUpdateTrial {
    return new SageMakerUpdateTrial(this, 'UpdateTrial', this.__resources, input);
  }

  public updateTrialComponent(input: shapes.SageMakerUpdateTrialComponentRequest): SageMakerUpdateTrialComponent {
    return new SageMakerUpdateTrialComponent(this, 'UpdateTrialComponent', this.__resources, input);
  }

  public updateUserProfile(input: shapes.SageMakerUpdateUserProfileRequest): SageMakerUpdateUserProfile {
    return new SageMakerUpdateUserProfile(this, 'UpdateUserProfile', this.__resources, input);
  }

  public updateWorkforce(input: shapes.SageMakerUpdateWorkforceRequest): SageMakerUpdateWorkforce {
    return new SageMakerUpdateWorkforce(this, 'UpdateWorkforce', this.__resources, input);
  }

  public updateWorkteam(input: shapes.SageMakerUpdateWorkteamRequest): SageMakerUpdateWorkteam {
    return new SageMakerUpdateWorkteam(this, 'UpdateWorkteam', this.__resources, input);
  }

}

export class SageMakerAddTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerAddTagsInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SageMakerTag[];
  }

}

export class SageMakerAssociateTrialComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerAssociateTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateTrialComponent.TrialComponentArn', props);
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
          TrialComponentName: this.input.trialComponentName,
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateTrialComponent.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerCreateAlgorithm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateAlgorithmInput) {
    super(scope, id);
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
          AlgorithmName: this.input.algorithmName,
          AlgorithmDescription: this.input.algorithmDescription,
          TrainingSpecification: {
            TrainingImage: this.input.trainingSpecification.trainingImage,
            TrainingImageDigest: this.input.trainingSpecification.trainingImageDigest,
            SupportedHyperParameters: this.input.trainingSpecification.supportedHyperParameters,
            SupportedTrainingInstanceTypes: this.input.trainingSpecification.supportedTrainingInstanceTypes,
            SupportsDistributedTraining: this.input.trainingSpecification.supportsDistributedTraining,
            MetricDefinitions: this.input.trainingSpecification.metricDefinitions,
            TrainingChannels: this.input.trainingSpecification.trainingChannels,
            SupportedTuningJobObjectiveMetrics: this.input.trainingSpecification.supportedTuningJobObjectiveMetrics,
          },
          InferenceSpecification: {
            Containers: this.input.inferenceSpecification?.containers,
            SupportedTransformInstanceTypes: this.input.inferenceSpecification?.supportedTransformInstanceTypes,
            SupportedRealtimeInferenceInstanceTypes: this.input.inferenceSpecification?.supportedRealtimeInferenceInstanceTypes,
            SupportedContentTypes: this.input.inferenceSpecification?.supportedContentTypes,
            SupportedResponseMIMETypes: this.input.inferenceSpecification?.supportedResponseMimeTypes,
          },
          ValidationSpecification: {
            ValidationRole: this.input.validationSpecification?.validationRole,
            ValidationProfiles: this.input.validationSpecification?.validationProfiles,
          },
          CertifyForMarketplace: this.input.certifyForMarketplace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAlgorithm.AlgorithmArn', props);
    return resource.getResponseField('AlgorithmArn') as unknown as string;
  }

}

export class SageMakerCreateApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateAppRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
          Tags: this.input.tags,
          ResourceSpec: {
            SageMakerImageArn: this.input.resourceSpec?.sageMakerImageArn,
            SageMakerImageVersionArn: this.input.resourceSpec?.sageMakerImageVersionArn,
            InstanceType: this.input.resourceSpec?.instanceType,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.AppArn', props);
    return resource.getResponseField('AppArn') as unknown as string;
  }

}

export class SageMakerCreateAppImageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateAppImageConfigRequest) {
    super(scope, id);
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
          AppImageConfigName: this.input.appImageConfigName,
          Tags: this.input.tags,
          KernelGatewayImageConfig: {
            KernelSpecs: this.input.kernelGatewayImageConfig?.kernelSpecs,
            FileSystemConfig: {
              MountPath: this.input.kernelGatewayImageConfig?.fileSystemConfig?.mountPath,
              DefaultUid: this.input.kernelGatewayImageConfig?.fileSystemConfig?.defaultUid,
              DefaultGid: this.input.kernelGatewayImageConfig?.fileSystemConfig?.defaultGid,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAppImageConfig.AppImageConfigArn', props);
    return resource.getResponseField('AppImageConfigArn') as unknown as string;
  }

}

export class SageMakerCreateAutoMlJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
          InputDataConfig: this.input.inputDataConfig,
          OutputDataConfig: {
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
            S3OutputPath: this.input.outputDataConfig.s3OutputPath,
          },
          ProblemType: this.input.problemType,
          AutoMLJobObjective: {
            MetricName: this.input.autoMlJobObjective?.metricName,
          },
          AutoMLJobConfig: {
            CompletionCriteria: {
              MaxCandidates: this.input.autoMlJobConfig?.completionCriteria?.maxCandidates,
              MaxRuntimePerTrainingJobInSeconds: this.input.autoMlJobConfig?.completionCriteria?.maxRuntimePerTrainingJobInSeconds,
              MaxAutoMLJobRuntimeInSeconds: this.input.autoMlJobConfig?.completionCriteria?.maxAutoMlJobRuntimeInSeconds,
            },
            SecurityConfig: {
              VolumeKmsKeyId: this.input.autoMlJobConfig?.securityConfig?.volumeKmsKeyId,
              EnableInterContainerTrafficEncryption: this.input.autoMlJobConfig?.securityConfig?.enableInterContainerTrafficEncryption,
              VpcConfig: {
                SecurityGroupIds: this.input.autoMlJobConfig?.securityConfig?.vpcConfig?.securityGroupIds,
                Subnets: this.input.autoMlJobConfig?.securityConfig?.vpcConfig?.subnets,
              },
            },
          },
          RoleArn: this.input.roleArn,
          GenerateCandidateDefinitionsOnly: this.input.generateCandidateDefinitionsOnly,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAutoMLJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

}

export class SageMakerCreateCodeRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateCodeRepositoryInput) {
    super(scope, id);
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
          CodeRepositoryName: this.input.codeRepositoryName,
          GitConfig: {
            RepositoryUrl: this.input.gitConfig.repositoryUrl,
            Branch: this.input.gitConfig.branch,
            SecretArn: this.input.gitConfig.secretArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeRepository.CodeRepositoryArn', props);
    return resource.getResponseField('CodeRepositoryArn') as unknown as string;
  }

}

export class SageMakerCreateCompilationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateCompilationJobRequest) {
    super(scope, id);
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
          CompilationJobName: this.input.compilationJobName,
          RoleArn: this.input.roleArn,
          InputConfig: {
            S3Uri: this.input.inputConfig.s3Uri,
            DataInputConfig: this.input.inputConfig.dataInputConfig,
            Framework: this.input.inputConfig.framework,
          },
          OutputConfig: {
            S3OutputLocation: this.input.outputConfig.s3OutputLocation,
            TargetDevice: this.input.outputConfig.targetDevice,
            TargetPlatform: {
              Os: this.input.outputConfig.targetPlatform?.os,
              Arch: this.input.outputConfig.targetPlatform?.arch,
              Accelerator: this.input.outputConfig.targetPlatform?.accelerator,
            },
            CompilerOptions: this.input.outputConfig.compilerOptions,
          },
          StoppingCondition: {
            MaxRuntimeInSeconds: this.input.stoppingCondition.maxRuntimeInSeconds,
            MaxWaitTimeInSeconds: this.input.stoppingCondition.maxWaitTimeInSeconds,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCompilationJob.CompilationJobArn', props);
    return resource.getResponseField('CompilationJobArn') as unknown as string;
  }

}

export class SageMakerCreateDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateDomainRequest) {
    super(scope, id);
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
          DomainName: this.input.domainName,
          AuthMode: this.input.authMode,
          DefaultUserSettings: {
            ExecutionRole: this.input.defaultUserSettings.executionRole,
            SecurityGroups: this.input.defaultUserSettings.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.input.defaultUserSettings.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.input.defaultUserSettings.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.input.defaultUserSettings.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.input.defaultUserSettings.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
          SubnetIds: this.input.subnetIds,
          VpcId: this.input.vpcId,
          Tags: this.input.tags,
          AppNetworkAccessType: this.input.appNetworkAccessType,
          HomeEfsFileSystemKmsKeyId: this.input.homeEfsFileSystemKmsKeyId,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainArn', props);
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
          DomainName: this.input.domainName,
          AuthMode: this.input.authMode,
          DefaultUserSettings: {
            ExecutionRole: this.input.defaultUserSettings.executionRole,
            SecurityGroups: this.input.defaultUserSettings.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.input.defaultUserSettings.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.input.defaultUserSettings.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.input.defaultUserSettings.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.input.defaultUserSettings.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
          SubnetIds: this.input.subnetIds,
          VpcId: this.input.vpcId,
          Tags: this.input.tags,
          AppNetworkAccessType: this.input.appNetworkAccessType,
          HomeEfsFileSystemKmsKeyId: this.input.homeEfsFileSystemKmsKeyId,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

}

export class SageMakerCreateEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateEndpointInput) {
    super(scope, id);
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
          EndpointName: this.input.endpointName,
          EndpointConfigName: this.input.endpointConfigName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SageMakerCreateEndpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateEndpointConfigInput) {
    super(scope, id);
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
          EndpointConfigName: this.input.endpointConfigName,
          ProductionVariants: this.input.productionVariants,
          DataCaptureConfig: {
            EnableCapture: this.input.dataCaptureConfig?.enableCapture,
            InitialSamplingPercentage: this.input.dataCaptureConfig?.initialSamplingPercentage,
            DestinationS3Uri: this.input.dataCaptureConfig?.destinationS3Uri,
            KmsKeyId: this.input.dataCaptureConfig?.kmsKeyId,
            CaptureOptions: this.input.dataCaptureConfig?.captureOptions,
            CaptureContentTypeHeader: {
              CsvContentTypes: this.input.dataCaptureConfig?.captureContentTypeHeader?.csvContentTypes,
              JsonContentTypes: this.input.dataCaptureConfig?.captureContentTypeHeader?.jsonContentTypes,
            },
          },
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpointConfig.EndpointConfigArn', props);
    return resource.getResponseField('EndpointConfigArn') as unknown as string;
  }

}

export class SageMakerCreateExperiment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateExperimentRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateExperiment.ExperimentArn', props);
    return resource.getResponseField('ExperimentArn') as unknown as string;
  }

}

export class SageMakerCreateFlowDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateFlowDefinitionRequest) {
    super(scope, id);
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
          FlowDefinitionName: this.input.flowDefinitionName,
          HumanLoopRequestSource: {
            AwsManagedHumanLoopRequestSource: this.input.humanLoopRequestSource?.awsManagedHumanLoopRequestSource,
          },
          HumanLoopActivationConfig: {
            HumanLoopActivationConditionsConfig: {
              HumanLoopActivationConditions: this.input.humanLoopActivationConfig?.humanLoopActivationConditionsConfig.humanLoopActivationConditions,
            },
          },
          HumanLoopConfig: {
            WorkteamArn: this.input.humanLoopConfig.workteamArn,
            HumanTaskUiArn: this.input.humanLoopConfig.humanTaskUiArn,
            TaskTitle: this.input.humanLoopConfig.taskTitle,
            TaskDescription: this.input.humanLoopConfig.taskDescription,
            TaskCount: this.input.humanLoopConfig.taskCount,
            TaskAvailabilityLifetimeInSeconds: this.input.humanLoopConfig.taskAvailabilityLifetimeInSeconds,
            TaskTimeLimitInSeconds: this.input.humanLoopConfig.taskTimeLimitInSeconds,
            TaskKeywords: this.input.humanLoopConfig.taskKeywords,
            PublicWorkforceTaskPrice: {
              AmountInUsd: {
                Dollars: this.input.humanLoopConfig.publicWorkforceTaskPrice?.amountInUsd?.dollars,
                Cents: this.input.humanLoopConfig.publicWorkforceTaskPrice?.amountInUsd?.cents,
                TenthFractionsOfACent: this.input.humanLoopConfig.publicWorkforceTaskPrice?.amountInUsd?.tenthFractionsOfACent,
              },
            },
          },
          OutputConfig: {
            S3OutputPath: this.input.outputConfig.s3OutputPath,
            KmsKeyId: this.input.outputConfig.kmsKeyId,
          },
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFlowDefinition.FlowDefinitionArn', props);
    return resource.getResponseField('FlowDefinitionArn') as unknown as string;
  }

}

export class SageMakerCreateHumanTaskUi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateHumanTaskUiRequest) {
    super(scope, id);
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
          HumanTaskUiName: this.input.humanTaskUiName,
          UiTemplate: {
            Content: this.input.uiTemplate.content,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHumanTaskUi.HumanTaskUiArn', props);
    return resource.getResponseField('HumanTaskUiArn') as unknown as string;
  }

}

export class SageMakerCreateHyperParameterTuningJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
          HyperParameterTuningJobConfig: {
            Strategy: this.input.hyperParameterTuningJobConfig.strategy,
            HyperParameterTuningJobObjective: {
              Type: this.input.hyperParameterTuningJobConfig.hyperParameterTuningJobObjective?.type,
              MetricName: this.input.hyperParameterTuningJobConfig.hyperParameterTuningJobObjective?.metricName,
            },
            ResourceLimits: {
              MaxNumberOfTrainingJobs: this.input.hyperParameterTuningJobConfig.resourceLimits.maxNumberOfTrainingJobs,
              MaxParallelTrainingJobs: this.input.hyperParameterTuningJobConfig.resourceLimits.maxParallelTrainingJobs,
            },
            ParameterRanges: {
              IntegerParameterRanges: this.input.hyperParameterTuningJobConfig.parameterRanges?.integerParameterRanges,
              ContinuousParameterRanges: this.input.hyperParameterTuningJobConfig.parameterRanges?.continuousParameterRanges,
              CategoricalParameterRanges: this.input.hyperParameterTuningJobConfig.parameterRanges?.categoricalParameterRanges,
            },
            TrainingJobEarlyStoppingType: this.input.hyperParameterTuningJobConfig.trainingJobEarlyStoppingType,
            TuningJobCompletionCriteria: {
              TargetObjectiveMetricValue: this.input.hyperParameterTuningJobConfig.tuningJobCompletionCriteria?.targetObjectiveMetricValue,
            },
          },
          TrainingJobDefinition: {
            DefinitionName: this.input.trainingJobDefinition?.definitionName,
            TuningObjective: {
              Type: this.input.trainingJobDefinition?.tuningObjective?.type,
              MetricName: this.input.trainingJobDefinition?.tuningObjective?.metricName,
            },
            HyperParameterRanges: {
              IntegerParameterRanges: this.input.trainingJobDefinition?.hyperParameterRanges?.integerParameterRanges,
              ContinuousParameterRanges: this.input.trainingJobDefinition?.hyperParameterRanges?.continuousParameterRanges,
              CategoricalParameterRanges: this.input.trainingJobDefinition?.hyperParameterRanges?.categoricalParameterRanges,
            },
            StaticHyperParameters: this.input.trainingJobDefinition?.staticHyperParameters,
            AlgorithmSpecification: {
              TrainingImage: this.input.trainingJobDefinition?.algorithmSpecification.trainingImage,
              TrainingInputMode: this.input.trainingJobDefinition?.algorithmSpecification.trainingInputMode,
              AlgorithmName: this.input.trainingJobDefinition?.algorithmSpecification.algorithmName,
              MetricDefinitions: this.input.trainingJobDefinition?.algorithmSpecification.metricDefinitions,
            },
            RoleArn: this.input.trainingJobDefinition?.roleArn,
            InputDataConfig: this.input.trainingJobDefinition?.inputDataConfig,
            VpcConfig: {
              SecurityGroupIds: this.input.trainingJobDefinition?.vpcConfig?.securityGroupIds,
              Subnets: this.input.trainingJobDefinition?.vpcConfig?.subnets,
            },
            OutputDataConfig: {
              KmsKeyId: this.input.trainingJobDefinition?.outputDataConfig.kmsKeyId,
              S3OutputPath: this.input.trainingJobDefinition?.outputDataConfig.s3OutputPath,
            },
            ResourceConfig: {
              InstanceType: this.input.trainingJobDefinition?.resourceConfig.instanceType,
              InstanceCount: this.input.trainingJobDefinition?.resourceConfig.instanceCount,
              VolumeSizeInGB: this.input.trainingJobDefinition?.resourceConfig.volumeSizeInGb,
              VolumeKmsKeyId: this.input.trainingJobDefinition?.resourceConfig.volumeKmsKeyId,
            },
            StoppingCondition: {
              MaxRuntimeInSeconds: this.input.trainingJobDefinition?.stoppingCondition.maxRuntimeInSeconds,
              MaxWaitTimeInSeconds: this.input.trainingJobDefinition?.stoppingCondition.maxWaitTimeInSeconds,
            },
            EnableNetworkIsolation: this.input.trainingJobDefinition?.enableNetworkIsolation,
            EnableInterContainerTrafficEncryption: this.input.trainingJobDefinition?.enableInterContainerTrafficEncryption,
            EnableManagedSpotTraining: this.input.trainingJobDefinition?.enableManagedSpotTraining,
            CheckpointConfig: {
              S3Uri: this.input.trainingJobDefinition?.checkpointConfig?.s3Uri,
              LocalPath: this.input.trainingJobDefinition?.checkpointConfig?.localPath,
            },
          },
          TrainingJobDefinitions: this.input.trainingJobDefinitions,
          WarmStartConfig: {
            ParentHyperParameterTuningJobs: this.input.warmStartConfig?.parentHyperParameterTuningJobs,
            WarmStartType: this.input.warmStartConfig?.warmStartType,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHyperParameterTuningJob.HyperParameterTuningJobArn', props);
    return resource.getResponseField('HyperParameterTuningJobArn') as unknown as string;
  }

}

export class SageMakerCreateImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateImageRequest) {
    super(scope, id);
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
          Description: this.input.description,
          DisplayName: this.input.displayName,
          ImageName: this.input.imageName,
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImage.ImageArn', props);
    return resource.getResponseField('ImageArn') as unknown as string;
  }

}

export class SageMakerCreateImageVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateImageVersionRequest) {
    super(scope, id);
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
          BaseImage: this.input.baseImage,
          ClientToken: this.input.clientToken,
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageVersion.ImageVersionArn', props);
    return resource.getResponseField('ImageVersionArn') as unknown as string;
  }

}

export class SageMakerCreateLabelingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
          LabelAttributeName: this.input.labelAttributeName,
          InputConfig: {
            DataSource: {
              S3DataSource: {
                ManifestS3Uri: this.input.inputConfig.dataSource.s3DataSource?.manifestS3Uri,
              },
              SnsDataSource: {
                SnsTopicArn: this.input.inputConfig.dataSource.snsDataSource?.snsTopicArn,
              },
            },
            DataAttributes: {
              ContentClassifiers: this.input.inputConfig.dataAttributes?.contentClassifiers,
            },
          },
          OutputConfig: {
            S3OutputPath: this.input.outputConfig.s3OutputPath,
            KmsKeyId: this.input.outputConfig.kmsKeyId,
            SnsTopicArn: this.input.outputConfig.snsTopicArn,
          },
          RoleArn: this.input.roleArn,
          LabelCategoryConfigS3Uri: this.input.labelCategoryConfigS3Uri,
          StoppingConditions: {
            MaxHumanLabeledObjectCount: this.input.stoppingConditions?.maxHumanLabeledObjectCount,
            MaxPercentageOfInputDatasetLabeled: this.input.stoppingConditions?.maxPercentageOfInputDatasetLabeled,
          },
          LabelingJobAlgorithmsConfig: {
            LabelingJobAlgorithmSpecificationArn: this.input.labelingJobAlgorithmsConfig?.labelingJobAlgorithmSpecificationArn,
            InitialActiveLearningModelArn: this.input.labelingJobAlgorithmsConfig?.initialActiveLearningModelArn,
            LabelingJobResourceConfig: {
              VolumeKmsKeyId: this.input.labelingJobAlgorithmsConfig?.labelingJobResourceConfig?.volumeKmsKeyId,
            },
          },
          HumanTaskConfig: {
            WorkteamArn: this.input.humanTaskConfig.workteamArn,
            UiConfig: {
              UiTemplateS3Uri: this.input.humanTaskConfig.uiConfig.uiTemplateS3Uri,
              HumanTaskUiArn: this.input.humanTaskConfig.uiConfig.humanTaskUiArn,
            },
            PreHumanTaskLambdaArn: this.input.humanTaskConfig.preHumanTaskLambdaArn,
            TaskKeywords: this.input.humanTaskConfig.taskKeywords,
            TaskTitle: this.input.humanTaskConfig.taskTitle,
            TaskDescription: this.input.humanTaskConfig.taskDescription,
            NumberOfHumanWorkersPerDataObject: this.input.humanTaskConfig.numberOfHumanWorkersPerDataObject,
            TaskTimeLimitInSeconds: this.input.humanTaskConfig.taskTimeLimitInSeconds,
            TaskAvailabilityLifetimeInSeconds: this.input.humanTaskConfig.taskAvailabilityLifetimeInSeconds,
            MaxConcurrentTaskCount: this.input.humanTaskConfig.maxConcurrentTaskCount,
            AnnotationConsolidationConfig: {
              AnnotationConsolidationLambdaArn: this.input.humanTaskConfig.annotationConsolidationConfig.annotationConsolidationLambdaArn,
            },
            PublicWorkforceTaskPrice: {
              AmountInUsd: {
                Dollars: this.input.humanTaskConfig.publicWorkforceTaskPrice?.amountInUsd?.dollars,
                Cents: this.input.humanTaskConfig.publicWorkforceTaskPrice?.amountInUsd?.cents,
                TenthFractionsOfACent: this.input.humanTaskConfig.publicWorkforceTaskPrice?.amountInUsd?.tenthFractionsOfACent,
              },
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLabelingJob.LabelingJobArn', props);
    return resource.getResponseField('LabelingJobArn') as unknown as string;
  }

}

export class SageMakerCreateModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateModelInput) {
    super(scope, id);
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
          ModelName: this.input.modelName,
          PrimaryContainer: {
            ContainerHostname: this.input.primaryContainer?.containerHostname,
            Image: this.input.primaryContainer?.image,
            ImageConfig: {
              RepositoryAccessMode: this.input.primaryContainer?.imageConfig?.repositoryAccessMode,
            },
            Mode: this.input.primaryContainer?.mode,
            ModelDataUrl: this.input.primaryContainer?.modelDataUrl,
            Environment: this.input.primaryContainer?.environment,
            ModelPackageName: this.input.primaryContainer?.modelPackageName,
          },
          Containers: this.input.containers,
          ExecutionRoleArn: this.input.executionRoleArn,
          Tags: this.input.tags,
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
          EnableNetworkIsolation: this.input.enableNetworkIsolation,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModel.ModelArn', props);
    return resource.getResponseField('ModelArn') as unknown as string;
  }

}

export class SageMakerCreateModelPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateModelPackageInput) {
    super(scope, id);
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
          ModelPackageName: this.input.modelPackageName,
          ModelPackageDescription: this.input.modelPackageDescription,
          InferenceSpecification: {
            Containers: this.input.inferenceSpecification?.containers,
            SupportedTransformInstanceTypes: this.input.inferenceSpecification?.supportedTransformInstanceTypes,
            SupportedRealtimeInferenceInstanceTypes: this.input.inferenceSpecification?.supportedRealtimeInferenceInstanceTypes,
            SupportedContentTypes: this.input.inferenceSpecification?.supportedContentTypes,
            SupportedResponseMIMETypes: this.input.inferenceSpecification?.supportedResponseMimeTypes,
          },
          ValidationSpecification: {
            ValidationRole: this.input.validationSpecification?.validationRole,
            ValidationProfiles: this.input.validationSpecification?.validationProfiles,
          },
          SourceAlgorithmSpecification: {
            SourceAlgorithms: this.input.sourceAlgorithmSpecification?.sourceAlgorithms,
          },
          CertifyForMarketplace: this.input.certifyForMarketplace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateModelPackage.ModelPackageArn', props);
    return resource.getResponseField('ModelPackageArn') as unknown as string;
  }

}

export class SageMakerCreateMonitoringSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
          MonitoringScheduleConfig: {
            ScheduleConfig: {
              ScheduleExpression: this.input.monitoringScheduleConfig.scheduleConfig?.scheduleExpression,
            },
            MonitoringJobDefinition: {
              BaselineConfig: {
                ConstraintsResource: {
                  S3Uri: this.input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.constraintsResource?.s3Uri,
                },
                StatisticsResource: {
                  S3Uri: this.input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.statisticsResource?.s3Uri,
                },
              },
              MonitoringInputs: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringInputs,
              MonitoringOutputConfig: {
                MonitoringOutputs: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.monitoringOutputs,
                KmsKeyId: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.kmsKeyId,
              },
              MonitoringResources: {
                ClusterConfig: {
                  InstanceCount: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceCount,
                  InstanceType: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceType,
                  VolumeSizeInGB: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeSizeInGb,
                  VolumeKmsKeyId: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeKmsKeyId,
                },
              },
              MonitoringAppSpecification: {
                ImageUri: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.imageUri,
                ContainerEntrypoint: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerEntrypoint,
                ContainerArguments: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerArguments,
                RecordPreprocessorSourceUri: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.recordPreprocessorSourceUri,
                PostAnalyticsProcessorSourceUri: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.postAnalyticsProcessorSourceUri,
              },
              StoppingCondition: {
                MaxRuntimeInSeconds: this.input.monitoringScheduleConfig.monitoringJobDefinition.stoppingCondition?.maxRuntimeInSeconds,
              },
              Environment: this.input.monitoringScheduleConfig.monitoringJobDefinition.environment,
              NetworkConfig: {
                EnableInterContainerTrafficEncryption: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableInterContainerTrafficEncryption,
                EnableNetworkIsolation: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableNetworkIsolation,
                VpcConfig: {
                  SecurityGroupIds: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.securityGroupIds,
                  Subnets: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.subnets,
                },
              },
              RoleArn: this.input.monitoringScheduleConfig.monitoringJobDefinition.roleArn,
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMonitoringSchedule.MonitoringScheduleArn', props);
    return resource.getResponseField('MonitoringScheduleArn') as unknown as string;
  }

}

export class SageMakerCreateNotebookInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateNotebookInstanceInput) {
    super(scope, id);
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
          NotebookInstanceName: this.input.notebookInstanceName,
          InstanceType: this.input.instanceType,
          SubnetId: this.input.subnetId,
          SecurityGroupIds: this.input.securityGroupIds,
          RoleArn: this.input.roleArn,
          KmsKeyId: this.input.kmsKeyId,
          Tags: this.input.tags,
          LifecycleConfigName: this.input.lifecycleConfigName,
          DirectInternetAccess: this.input.directInternetAccess,
          VolumeSizeInGB: this.input.volumeSizeInGb,
          AcceleratorTypes: this.input.acceleratorTypes,
          DefaultCodeRepository: this.input.defaultCodeRepository,
          AdditionalCodeRepositories: this.input.additionalCodeRepositories,
          RootAccess: this.input.rootAccess,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNotebookInstance.NotebookInstanceArn', props);
    return resource.getResponseField('NotebookInstanceArn') as unknown as string;
  }

}

export class SageMakerCreateNotebookInstanceLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateNotebookInstanceLifecycleConfigInput) {
    super(scope, id);
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
          NotebookInstanceLifecycleConfigName: this.input.notebookInstanceLifecycleConfigName,
          OnCreate: this.input.onCreate,
          OnStart: this.input.onStart,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigArn', props);
    return resource.getResponseField('NotebookInstanceLifecycleConfigArn') as unknown as string;
  }

}

export class SageMakerCreatePresignedDomainUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreatePresignedDomainUrlRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          SessionExpirationDurationInSeconds: this.input.sessionExpirationDurationInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePresignedDomainUrl.AuthorizedUrl', props);
    return resource.getResponseField('AuthorizedUrl') as unknown as string;
  }

}

export class SageMakerCreatePresignedNotebookInstanceUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreatePresignedNotebookInstanceUrlInput) {
    super(scope, id);
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
          NotebookInstanceName: this.input.notebookInstanceName,
          SessionExpirationDurationInSeconds: this.input.sessionExpirationDurationInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePresignedNotebookInstanceUrl.AuthorizedUrl', props);
    return resource.getResponseField('AuthorizedUrl') as unknown as string;
  }

}

export class SageMakerCreateProcessingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateProcessingJobRequest) {
    super(scope, id);
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
          ProcessingInputs: this.input.processingInputs,
          ProcessingOutputConfig: {
            Outputs: this.input.processingOutputConfig?.outputs,
            KmsKeyId: this.input.processingOutputConfig?.kmsKeyId,
          },
          ProcessingJobName: this.input.processingJobName,
          ProcessingResources: {
            ClusterConfig: {
              InstanceCount: this.input.processingResources.clusterConfig.instanceCount,
              InstanceType: this.input.processingResources.clusterConfig.instanceType,
              VolumeSizeInGB: this.input.processingResources.clusterConfig.volumeSizeInGb,
              VolumeKmsKeyId: this.input.processingResources.clusterConfig.volumeKmsKeyId,
            },
          },
          StoppingCondition: {
            MaxRuntimeInSeconds: this.input.stoppingCondition?.maxRuntimeInSeconds,
          },
          AppSpecification: {
            ImageUri: this.input.appSpecification.imageUri,
            ContainerEntrypoint: this.input.appSpecification.containerEntrypoint,
            ContainerArguments: this.input.appSpecification.containerArguments,
          },
          Environment: this.input.environment,
          NetworkConfig: {
            EnableInterContainerTrafficEncryption: this.input.networkConfig?.enableInterContainerTrafficEncryption,
            EnableNetworkIsolation: this.input.networkConfig?.enableNetworkIsolation,
            VpcConfig: {
              SecurityGroupIds: this.input.networkConfig?.vpcConfig?.securityGroupIds,
              Subnets: this.input.networkConfig?.vpcConfig?.subnets,
            },
          },
          RoleArn: this.input.roleArn,
          Tags: this.input.tags,
          ExperimentConfig: {
            ExperimentName: this.input.experimentConfig?.experimentName,
            TrialName: this.input.experimentConfig?.trialName,
            TrialComponentDisplayName: this.input.experimentConfig?.trialComponentDisplayName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProcessingJob.ProcessingJobArn', props);
    return resource.getResponseField('ProcessingJobArn') as unknown as string;
  }

}

export class SageMakerCreateTrainingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
          HyperParameters: this.input.hyperParameters,
          AlgorithmSpecification: {
            TrainingImage: this.input.algorithmSpecification.trainingImage,
            AlgorithmName: this.input.algorithmSpecification.algorithmName,
            TrainingInputMode: this.input.algorithmSpecification.trainingInputMode,
            MetricDefinitions: this.input.algorithmSpecification.metricDefinitions,
            EnableSageMakerMetricsTimeSeries: this.input.algorithmSpecification.enableSageMakerMetricsTimeSeries,
          },
          RoleArn: this.input.roleArn,
          InputDataConfig: this.input.inputDataConfig,
          OutputDataConfig: {
            KmsKeyId: this.input.outputDataConfig.kmsKeyId,
            S3OutputPath: this.input.outputDataConfig.s3OutputPath,
          },
          ResourceConfig: {
            InstanceType: this.input.resourceConfig.instanceType,
            InstanceCount: this.input.resourceConfig.instanceCount,
            VolumeSizeInGB: this.input.resourceConfig.volumeSizeInGb,
            VolumeKmsKeyId: this.input.resourceConfig.volumeKmsKeyId,
          },
          VpcConfig: {
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
            Subnets: this.input.vpcConfig?.subnets,
          },
          StoppingCondition: {
            MaxRuntimeInSeconds: this.input.stoppingCondition.maxRuntimeInSeconds,
            MaxWaitTimeInSeconds: this.input.stoppingCondition.maxWaitTimeInSeconds,
          },
          Tags: this.input.tags,
          EnableNetworkIsolation: this.input.enableNetworkIsolation,
          EnableInterContainerTrafficEncryption: this.input.enableInterContainerTrafficEncryption,
          EnableManagedSpotTraining: this.input.enableManagedSpotTraining,
          CheckpointConfig: {
            S3Uri: this.input.checkpointConfig?.s3Uri,
            LocalPath: this.input.checkpointConfig?.localPath,
          },
          DebugHookConfig: {
            LocalPath: this.input.debugHookConfig?.localPath,
            S3OutputPath: this.input.debugHookConfig?.s3OutputPath,
            HookParameters: this.input.debugHookConfig?.hookParameters,
            CollectionConfigurations: this.input.debugHookConfig?.collectionConfigurations,
          },
          DebugRuleConfigurations: this.input.debugRuleConfigurations,
          TensorBoardOutputConfig: {
            LocalPath: this.input.tensorBoardOutputConfig?.localPath,
            S3OutputPath: this.input.tensorBoardOutputConfig?.s3OutputPath,
          },
          ExperimentConfig: {
            ExperimentName: this.input.experimentConfig?.experimentName,
            TrialName: this.input.experimentConfig?.trialName,
            TrialComponentDisplayName: this.input.experimentConfig?.trialComponentDisplayName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrainingJob.TrainingJobArn', props);
    return resource.getResponseField('TrainingJobArn') as unknown as string;
  }

}

export class SageMakerCreateTransformJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
          ModelName: this.input.modelName,
          MaxConcurrentTransforms: this.input.maxConcurrentTransforms,
          ModelClientConfig: {
            InvocationsTimeoutInSeconds: this.input.modelClientConfig?.invocationsTimeoutInSeconds,
            InvocationsMaxRetries: this.input.modelClientConfig?.invocationsMaxRetries,
          },
          MaxPayloadInMB: this.input.maxPayloadInMb,
          BatchStrategy: this.input.batchStrategy,
          Environment: this.input.environment,
          TransformInput: {
            DataSource: {
              S3DataSource: {
                S3DataType: this.input.transformInput.dataSource.s3DataSource.s3DataType,
                S3Uri: this.input.transformInput.dataSource.s3DataSource.s3Uri,
              },
            },
            ContentType: this.input.transformInput.contentType,
            CompressionType: this.input.transformInput.compressionType,
            SplitType: this.input.transformInput.splitType,
          },
          TransformOutput: {
            S3OutputPath: this.input.transformOutput.s3OutputPath,
            Accept: this.input.transformOutput.accept,
            AssembleWith: this.input.transformOutput.assembleWith,
            KmsKeyId: this.input.transformOutput.kmsKeyId,
          },
          TransformResources: {
            InstanceType: this.input.transformResources.instanceType,
            InstanceCount: this.input.transformResources.instanceCount,
            VolumeKmsKeyId: this.input.transformResources.volumeKmsKeyId,
          },
          DataProcessing: {
            InputFilter: this.input.dataProcessing?.inputFilter,
            OutputFilter: this.input.dataProcessing?.outputFilter,
            JoinSource: this.input.dataProcessing?.joinSource,
          },
          Tags: this.input.tags,
          ExperimentConfig: {
            ExperimentName: this.input.experimentConfig?.experimentName,
            TrialName: this.input.experimentConfig?.trialName,
            TrialComponentDisplayName: this.input.experimentConfig?.trialComponentDisplayName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTransformJob.TransformJobArn', props);
    return resource.getResponseField('TransformJobArn') as unknown as string;
  }

}

export class SageMakerCreateTrial extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateTrialRequest) {
    super(scope, id);
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
          TrialName: this.input.trialName,
          DisplayName: this.input.displayName,
          ExperimentName: this.input.experimentName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrial.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerCreateTrialComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
          DisplayName: this.input.displayName,
          Status: {
            PrimaryStatus: this.input.status?.primaryStatus,
            Message: this.input.status?.message,
          },
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Parameters: this.input.parameters,
          InputArtifacts: this.input.inputArtifacts,
          OutputArtifacts: this.input.outputArtifacts,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

}

export class SageMakerCreateUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          SingleSignOnUserIdentifier: this.input.singleSignOnUserIdentifier,
          SingleSignOnUserValue: this.input.singleSignOnUserValue,
          Tags: this.input.tags,
          UserSettings: {
            ExecutionRole: this.input.userSettings?.executionRole,
            SecurityGroups: this.input.userSettings?.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.input.userSettings?.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.input.userSettings?.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.input.userSettings?.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.input.userSettings?.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.UserProfileArn', props);
    return resource.getResponseField('UserProfileArn') as unknown as string;
  }

}

export class SageMakerCreateWorkforce extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateWorkforceRequest) {
    super(scope, id);
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
            UserPool: this.input.cognitoConfig?.userPool,
            ClientId: this.input.cognitoConfig?.clientId,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          WorkforceName: this.input.workforceName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorkforce.WorkforceArn', props);
    return resource.getResponseField('WorkforceArn') as unknown as string;
  }

}

export class SageMakerCreateWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerCreateWorkteamRequest) {
    super(scope, id);
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
          WorkteamName: this.input.workteamName,
          WorkforceName: this.input.workforceName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorkteam.WorkteamArn', props);
    return resource.getResponseField('WorkteamArn') as unknown as string;
  }

}

export class SageMakerDeleteExperiment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDeleteExperimentRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExperiment.ExperimentArn', props);
    return resource.getResponseField('ExperimentArn') as unknown as string;
  }

}

export class SageMakerDeleteTrial extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDeleteTrialRequest) {
    super(scope, id);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTrial.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerDeleteTrialComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDeleteTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

}

export class SageMakerDeleteWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDeleteWorkteamRequest) {
    super(scope, id);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWorkteam.Success', props);
    return resource.getResponseField('Success') as unknown as boolean;
  }

}

export class SageMakerDescribeAlgorithm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAlgorithmInput) {
    super(scope, id);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.AlgorithmName', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.AlgorithmArn', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.AlgorithmDescription', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get trainingSpecification(): SageMakerDescribeAlgorithmTrainingSpecification {
    return new SageMakerDescribeAlgorithmTrainingSpecification(this, 'TrainingSpecification', this.__resources, this.input);
  }

  public get inferenceSpecification(): SageMakerDescribeAlgorithmInferenceSpecification {
    return new SageMakerDescribeAlgorithmInferenceSpecification(this, 'InferenceSpecification', this.__resources, this.input);
  }

  public get validationSpecification(): SageMakerDescribeAlgorithmValidationSpecification {
    return new SageMakerDescribeAlgorithmValidationSpecification(this, 'ValidationSpecification', this.__resources, this.input);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.AlgorithmStatus', props);
    return resource.getResponseField('AlgorithmStatus') as unknown as string;
  }

  public get algorithmStatusDetails(): SageMakerDescribeAlgorithmAlgorithmStatusDetails {
    return new SageMakerDescribeAlgorithmAlgorithmStatusDetails(this, 'AlgorithmStatusDetails', this.__resources, this.input);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.ProductId', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.CertifyForMarketplace', props);
    return resource.getResponseField('CertifyForMarketplace') as unknown as boolean;
  }

}

export class SageMakerDescribeAlgorithmTrainingSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAlgorithmInput) {
    super(scope, id);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.TrainingImage', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.TrainingImageDigest', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.SupportedHyperParameters', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.SupportedTrainingInstanceTypes', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.SupportsDistributedTraining', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.MetricDefinitions', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.TrainingChannels', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.TrainingSpecification.SupportedTuningJobObjectiveMetrics', props);
    return resource.getResponseField('TrainingSpecification.SupportedTuningJobObjectiveMetrics') as unknown as shapes.SageMakerHyperParameterTuningJobObjective[];
  }

}

export class SageMakerDescribeAlgorithmInferenceSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAlgorithmInput) {
    super(scope, id);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.InferenceSpecification.Containers', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.InferenceSpecification.SupportedTransformInstanceTypes', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.InferenceSpecification.SupportedRealtimeInferenceInstanceTypes', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.InferenceSpecification.SupportedContentTypes', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.InferenceSpecification.SupportedResponseMIMETypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedResponseMIMETypes') as unknown as string[];
  }

}

export class SageMakerDescribeAlgorithmValidationSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAlgorithmInput) {
    super(scope, id);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.ValidationSpecification.ValidationRole', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.ValidationSpecification.ValidationProfiles', props);
    return resource.getResponseField('ValidationSpecification.ValidationProfiles') as unknown as shapes.SageMakerAlgorithmValidationProfile[];
  }

}

export class SageMakerDescribeAlgorithmAlgorithmStatusDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAlgorithmInput) {
    super(scope, id);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.AlgorithmStatusDetails.ValidationStatuses', props);
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
          AlgorithmName: this.input.algorithmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAlgorithm.AlgorithmStatusDetails.ImageScanStatuses', props);
    return resource.getResponseField('AlgorithmStatusDetails.ImageScanStatuses') as unknown as shapes.SageMakerAlgorithmStatusItem[];
  }

}

export class SageMakerDescribeApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAppRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.AppArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.AppType', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.AppName', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.DomainId', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.UserProfileName', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.Status', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.LastHealthCheckTimestamp', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.LastUserActivityTimestamp', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.CreationTime', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get resourceSpec(): SageMakerDescribeAppResourceSpec {
    return new SageMakerDescribeAppResourceSpec(this, 'ResourceSpec', this.__resources, this.input);
  }

}

export class SageMakerDescribeAppResourceSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAppRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.ResourceSpec.SageMakerImageArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.ResourceSpec.SageMakerImageVersionArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          AppType: this.input.appType,
          AppName: this.input.appName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApp.ResourceSpec.InstanceType', props);
    return resource.getResponseField('ResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerDescribeAppImageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAppImageConfigRequest) {
    super(scope, id);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.AppImageConfigArn', props);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.AppImageConfigName', props);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.CreationTime', props);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get kernelGatewayImageConfig(): SageMakerDescribeAppImageConfigKernelGatewayImageConfig {
    return new SageMakerDescribeAppImageConfigKernelGatewayImageConfig(this, 'KernelGatewayImageConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeAppImageConfigKernelGatewayImageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAppImageConfigRequest) {
    super(scope, id);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.KernelGatewayImageConfig.KernelSpecs', props);
    return resource.getResponseField('KernelGatewayImageConfig.KernelSpecs') as unknown as shapes.SageMakerKernelSpec[];
  }

  public get fileSystemConfig(): SageMakerDescribeAppImageConfigKernelGatewayImageConfigFileSystemConfig {
    return new SageMakerDescribeAppImageConfigKernelGatewayImageConfigFileSystemConfig(this, 'FileSystemConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeAppImageConfigKernelGatewayImageConfigFileSystemConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAppImageConfigRequest) {
    super(scope, id);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.MountPath', props);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.DefaultUid', props);
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
          AppImageConfigName: this.input.appImageConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAppImageConfig.KernelGatewayImageConfig.FileSystemConfig.DefaultGid', props);
    return resource.getResponseField('KernelGatewayImageConfig.FileSystemConfig.DefaultGid') as unknown as number;
  }

}

export class SageMakerDescribeAutoMlJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobName', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobArn', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.InputDataConfig', props);
    return resource.getResponseField('InputDataConfig') as unknown as shapes.SageMakerAutoMlChannel[];
  }

  public get outputDataConfig(): SageMakerDescribeAutoMlJobOutputDataConfig {
    return new SageMakerDescribeAutoMlJobOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get autoMlJobObjective(): SageMakerDescribeAutoMlJobAutoMlJobObjective {
    return new SageMakerDescribeAutoMlJobAutoMlJobObjective(this, 'AutoMlJobObjective', this.__resources, this.input);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.ProblemType', props);
    return resource.getResponseField('ProblemType') as unknown as string;
  }

  public get autoMlJobConfig(): SageMakerDescribeAutoMlJobAutoMlJobConfig {
    return new SageMakerDescribeAutoMlJobAutoMlJobConfig(this, 'AutoMlJobConfig', this.__resources, this.input);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.CreationTime', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.EndTime', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.LastModifiedTime', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get bestCandidate(): SageMakerDescribeAutoMlJobBestCandidate {
    return new SageMakerDescribeAutoMlJobBestCandidate(this, 'BestCandidate', this.__resources, this.input);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobStatus', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobSecondaryStatus', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.GenerateCandidateDefinitionsOnly', props);
    return resource.getResponseField('GenerateCandidateDefinitionsOnly') as unknown as boolean;
  }

  public get autoMlJobArtifacts(): SageMakerDescribeAutoMlJobAutoMlJobArtifacts {
    return new SageMakerDescribeAutoMlJobAutoMlJobArtifacts(this, 'AutoMlJobArtifacts', this.__resources, this.input);
  }

  public get resolvedAttributes(): SageMakerDescribeAutoMlJobResolvedAttributes {
    return new SageMakerDescribeAutoMlJobResolvedAttributes(this, 'ResolvedAttributes', this.__resources, this.input);
  }

}

export class SageMakerDescribeAutoMlJobOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.OutputDataConfig.KmsKeyId', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.OutputDataConfig.S3OutputPath', props);
    return resource.getResponseField('OutputDataConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerDescribeAutoMlJobAutoMlJobObjective extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobObjective.MetricName', props);
    return resource.getResponseField('AutoMLJobObjective.MetricName') as unknown as string;
  }

}

export class SageMakerDescribeAutoMlJobAutoMlJobConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
  }

  public get completionCriteria(): SageMakerDescribeAutoMlJobAutoMlJobConfigCompletionCriteria {
    return new SageMakerDescribeAutoMlJobAutoMlJobConfigCompletionCriteria(this, 'CompletionCriteria', this.__resources, this.input);
  }

  public get securityConfig(): SageMakerDescribeAutoMlJobAutoMlJobConfigSecurityConfig {
    return new SageMakerDescribeAutoMlJobAutoMlJobConfigSecurityConfig(this, 'SecurityConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeAutoMlJobAutoMlJobConfigCompletionCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxCandidates', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobConfig.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds', props);
    return resource.getResponseField('AutoMLJobConfig.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerDescribeAutoMlJobAutoMlJobConfigSecurityConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VolumeKmsKeyId', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.EnableInterContainerTrafficEncryption', props);
    return resource.getResponseField('AutoMLJobConfig.SecurityConfig.EnableInterContainerTrafficEncryption') as unknown as boolean;
  }

  public get vpcConfig(): SageMakerDescribeAutoMlJobAutoMlJobConfigSecurityConfigVpcConfig {
    return new SageMakerDescribeAutoMlJobAutoMlJobConfigSecurityConfigVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeAutoMlJobAutoMlJobConfigSecurityConfigVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VpcConfig.SecurityGroupIds', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobConfig.SecurityConfig.VpcConfig.Subnets', props);
    return resource.getResponseField('AutoMLJobConfig.SecurityConfig.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerDescribeAutoMlJobBestCandidate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.CandidateName', props);
    return resource.getResponseField('BestCandidate.CandidateName') as unknown as string;
  }

  public get finalAutoMlJobObjectiveMetric(): SageMakerDescribeAutoMlJobBestCandidateFinalAutoMlJobObjectiveMetric {
    return new SageMakerDescribeAutoMlJobBestCandidateFinalAutoMlJobObjectiveMetric(this, 'FinalAutoMlJobObjectiveMetric', this.__resources, this.input);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.ObjectiveStatus', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.CandidateSteps', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.CandidateStatus', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.InferenceContainers', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.CreationTime', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.EndTime', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.LastModifiedTime', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.FailureReason', props);
    return resource.getResponseField('BestCandidate.FailureReason') as unknown as string;
  }

}

export class SageMakerDescribeAutoMlJobBestCandidateFinalAutoMlJobObjectiveMetric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.Type', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.MetricName', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.BestCandidate.FinalAutoMLJobObjectiveMetric.Value', props);
    return resource.getResponseField('BestCandidate.FinalAutoMLJobObjectiveMetric.Value') as unknown as number;
  }

}

export class SageMakerDescribeAutoMlJobAutoMlJobArtifacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobArtifacts.CandidateDefinitionNotebookLocation', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.AutoMLJobArtifacts.DataExplorationNotebookLocation', props);
    return resource.getResponseField('AutoMLJobArtifacts.DataExplorationNotebookLocation') as unknown as string;
  }

}

export class SageMakerDescribeAutoMlJobResolvedAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
  }

  public get autoMlJobObjective(): SageMakerDescribeAutoMlJobResolvedAttributesAutoMlJobObjective {
    return new SageMakerDescribeAutoMlJobResolvedAttributesAutoMlJobObjective(this, 'AutoMlJobObjective', this.__resources, this.input);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.ResolvedAttributes.ProblemType', props);
    return resource.getResponseField('ResolvedAttributes.ProblemType') as unknown as string;
  }

  public get completionCriteria(): SageMakerDescribeAutoMlJobResolvedAttributesCompletionCriteria {
    return new SageMakerDescribeAutoMlJobResolvedAttributesCompletionCriteria(this, 'CompletionCriteria', this.__resources, this.input);
  }

}

export class SageMakerDescribeAutoMlJobResolvedAttributesAutoMlJobObjective extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.ResolvedAttributes.AutoMLJobObjective.MetricName', props);
    return resource.getResponseField('ResolvedAttributes.AutoMLJobObjective.MetricName') as unknown as string;
  }

}

export class SageMakerDescribeAutoMlJobResolvedAttributesCompletionCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxCandidates', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxRuntimePerTrainingJobInSeconds', props);
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
          AutoMLJobName: this.input.autoMlJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutoMLJob.ResolvedAttributes.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds', props);
    return resource.getResponseField('ResolvedAttributes.CompletionCriteria.MaxAutoMLJobRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerDescribeCodeRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCodeRepositoryInput) {
    super(scope, id);
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
          CodeRepositoryName: this.input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeRepository.CodeRepositoryName', props);
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
          CodeRepositoryName: this.input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeRepository.CodeRepositoryArn', props);
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
          CodeRepositoryName: this.input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeRepository.CreationTime', props);
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
          CodeRepositoryName: this.input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeRepository.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get gitConfig(): SageMakerDescribeCodeRepositoryGitConfig {
    return new SageMakerDescribeCodeRepositoryGitConfig(this, 'GitConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeCodeRepositoryGitConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCodeRepositoryInput) {
    super(scope, id);
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
          CodeRepositoryName: this.input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeRepository.GitConfig.RepositoryUrl', props);
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
          CodeRepositoryName: this.input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeRepository.GitConfig.Branch', props);
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
          CodeRepositoryName: this.input.codeRepositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeRepository.GitConfig.SecretArn', props);
    return resource.getResponseField('GitConfig.SecretArn') as unknown as string;
  }

}

export class SageMakerDescribeCompilationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCompilationJobRequest) {
    super(scope, id);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.CompilationJobName', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.CompilationJobArn', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.CompilationJobStatus', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.CompilationStartTime', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.CompilationEndTime', props);
    return resource.getResponseField('CompilationEndTime') as unknown as string;
  }

  public get stoppingCondition(): SageMakerDescribeCompilationJobStoppingCondition {
    return new SageMakerDescribeCompilationJobStoppingCondition(this, 'StoppingCondition', this.__resources, this.input);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.CreationTime', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.LastModifiedTime', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get modelArtifacts(): SageMakerDescribeCompilationJobModelArtifacts {
    return new SageMakerDescribeCompilationJobModelArtifacts(this, 'ModelArtifacts', this.__resources, this.input);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get inputConfig(): SageMakerDescribeCompilationJobInputConfig {
    return new SageMakerDescribeCompilationJobInputConfig(this, 'InputConfig', this.__resources, this.input);
  }

  public get outputConfig(): SageMakerDescribeCompilationJobOutputConfig {
    return new SageMakerDescribeCompilationJobOutputConfig(this, 'OutputConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeCompilationJobStoppingCondition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCompilationJobRequest) {
    super(scope, id);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.StoppingCondition.MaxRuntimeInSeconds', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.StoppingCondition.MaxWaitTimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxWaitTimeInSeconds') as unknown as number;
  }

}

export class SageMakerDescribeCompilationJobModelArtifacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCompilationJobRequest) {
    super(scope, id);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.ModelArtifacts.S3ModelArtifacts', props);
    return resource.getResponseField('ModelArtifacts.S3ModelArtifacts') as unknown as string;
  }

}

export class SageMakerDescribeCompilationJobInputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCompilationJobRequest) {
    super(scope, id);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.InputConfig.S3Uri', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.InputConfig.DataInputConfig', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.InputConfig.Framework', props);
    return resource.getResponseField('InputConfig.Framework') as unknown as string;
  }

}

export class SageMakerDescribeCompilationJobOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCompilationJobRequest) {
    super(scope, id);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.OutputConfig.S3OutputLocation', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.OutputConfig.TargetDevice', props);
    return resource.getResponseField('OutputConfig.TargetDevice') as unknown as string;
  }

  public get targetPlatform(): SageMakerDescribeCompilationJobOutputConfigTargetPlatform {
    return new SageMakerDescribeCompilationJobOutputConfigTargetPlatform(this, 'TargetPlatform', this.__resources, this.input);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.OutputConfig.CompilerOptions', props);
    return resource.getResponseField('OutputConfig.CompilerOptions') as unknown as string;
  }

}

export class SageMakerDescribeCompilationJobOutputConfigTargetPlatform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeCompilationJobRequest) {
    super(scope, id);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.OutputConfig.TargetPlatform.Os', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.OutputConfig.TargetPlatform.Arch', props);
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
          CompilationJobName: this.input.compilationJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompilationJob.OutputConfig.TargetPlatform.Accelerator', props);
    return resource.getResponseField('OutputConfig.TargetPlatform.Accelerator') as unknown as string;
  }

}

export class SageMakerDescribeDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DomainArn', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DomainId', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DomainName', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.HomeEfsFileSystemId', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.SingleSignOnManagedApplicationInstanceId', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.Status', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.CreationTime', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.LastModifiedTime', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.FailureReason', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.AuthMode', props);
    return resource.getResponseField('AuthMode') as unknown as string;
  }

  public get defaultUserSettings(): SageMakerDescribeDomainDefaultUserSettings {
    return new SageMakerDescribeDomainDefaultUserSettings(this, 'DefaultUserSettings', this.__resources, this.input);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.AppNetworkAccessType', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.HomeEfsFileSystemKmsKeyId', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.SubnetIds', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.Url', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.VpcId', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.KmsKeyId', props);
    return resource.getResponseField('KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeDomainDefaultUserSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.ExecutionRole', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.SecurityGroups', props);
    return resource.getResponseField('DefaultUserSettings.SecurityGroups') as unknown as string[];
  }

  public get sharingSettings(): SageMakerDescribeDomainDefaultUserSettingsSharingSettings {
    return new SageMakerDescribeDomainDefaultUserSettingsSharingSettings(this, 'SharingSettings', this.__resources, this.input);
  }

  public get jupyterServerAppSettings(): SageMakerDescribeDomainDefaultUserSettingsJupyterServerAppSettings {
    return new SageMakerDescribeDomainDefaultUserSettingsJupyterServerAppSettings(this, 'JupyterServerAppSettings', this.__resources, this.input);
  }

  public get kernelGatewayAppSettings(): SageMakerDescribeDomainDefaultUserSettingsKernelGatewayAppSettings {
    return new SageMakerDescribeDomainDefaultUserSettingsKernelGatewayAppSettings(this, 'KernelGatewayAppSettings', this.__resources, this.input);
  }

  public get tensorBoardAppSettings(): SageMakerDescribeDomainDefaultUserSettingsTensorBoardAppSettings {
    return new SageMakerDescribeDomainDefaultUserSettingsTensorBoardAppSettings(this, 'TensorBoardAppSettings', this.__resources, this.input);
  }

}

export class SageMakerDescribeDomainDefaultUserSettingsSharingSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.SharingSettings.NotebookOutputOption', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.SharingSettings.S3OutputPath', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.SharingSettings.S3KmsKeyId', props);
    return resource.getResponseField('DefaultUserSettings.SharingSettings.S3KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeDomainDefaultUserSettingsJupyterServerAppSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
  }

  public get defaultResourceSpec(): SageMakerDescribeDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    return new SageMakerDescribeDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec(this, 'DefaultResourceSpec', this.__resources, this.input);
  }

}

export class SageMakerDescribeDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('DefaultUserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerDescribeDomainDefaultUserSettingsKernelGatewayAppSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
  }

  public get defaultResourceSpec(): SageMakerDescribeDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    return new SageMakerDescribeDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(this, 'DefaultResourceSpec', this.__resources, this.input);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.CustomImages', props);
    return resource.getResponseField('DefaultUserSettings.KernelGatewayAppSettings.CustomImages') as unknown as shapes.SageMakerCustomImage[];
  }

}

export class SageMakerDescribeDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('DefaultUserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerDescribeDomainDefaultUserSettingsTensorBoardAppSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
  }

  public get defaultResourceSpec(): SageMakerDescribeDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    return new SageMakerDescribeDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec(this, 'DefaultResourceSpec', this.__resources, this.input);
  }

}

export class SageMakerDescribeDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeDomainRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
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
          DomainId: this.input.domainId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('DefaultUserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerDescribeEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeEndpointInput) {
    super(scope, id);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointName', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointArn', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointConfigName', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.ProductionVariants', props);
    return resource.getResponseField('ProductionVariants') as unknown as shapes.SageMakerProductionVariantSummary[];
  }

  public get dataCaptureConfig(): SageMakerDescribeEndpointDataCaptureConfig {
    return new SageMakerDescribeEndpointDataCaptureConfig(this, 'DataCaptureConfig', this.__resources, this.input);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.EndpointStatus', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.FailureReason', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.CreationTime', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

}

export class SageMakerDescribeEndpointDataCaptureConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeEndpointInput) {
    super(scope, id);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.DataCaptureConfig.EnableCapture', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.DataCaptureConfig.CaptureStatus', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.DataCaptureConfig.CurrentSamplingPercentage', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.DataCaptureConfig.DestinationS3Uri', props);
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
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpoint.DataCaptureConfig.KmsKeyId', props);
    return resource.getResponseField('DataCaptureConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeEndpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeEndpointConfigInput) {
    super(scope, id);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.EndpointConfigName', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.EndpointConfigArn', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.ProductionVariants', props);
    return resource.getResponseField('ProductionVariants') as unknown as shapes.SageMakerProductionVariant[];
  }

  public get dataCaptureConfig(): SageMakerDescribeEndpointConfigDataCaptureConfig {
    return new SageMakerDescribeEndpointConfigDataCaptureConfig(this, 'DataCaptureConfig', this.__resources, this.input);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.KmsKeyId', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class SageMakerDescribeEndpointConfigDataCaptureConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeEndpointConfigInput) {
    super(scope, id);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.DataCaptureConfig.EnableCapture', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.DataCaptureConfig.InitialSamplingPercentage', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.DataCaptureConfig.DestinationS3Uri', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.DataCaptureConfig.KmsKeyId', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.DataCaptureConfig.CaptureOptions', props);
    return resource.getResponseField('DataCaptureConfig.CaptureOptions') as unknown as shapes.SageMakerCaptureOption[];
  }

  public get captureContentTypeHeader(): SageMakerDescribeEndpointConfigDataCaptureConfigCaptureContentTypeHeader {
    return new SageMakerDescribeEndpointConfigDataCaptureConfigCaptureContentTypeHeader(this, 'CaptureContentTypeHeader', this.__resources, this.input);
  }

}

export class SageMakerDescribeEndpointConfigDataCaptureConfigCaptureContentTypeHeader extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeEndpointConfigInput) {
    super(scope, id);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.DataCaptureConfig.CaptureContentTypeHeader.CsvContentTypes', props);
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
          EndpointConfigName: this.input.endpointConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEndpointConfig.DataCaptureConfig.CaptureContentTypeHeader.JsonContentTypes', props);
    return resource.getResponseField('DataCaptureConfig.CaptureContentTypeHeader.JsonContentTypes') as unknown as string[];
  }

}

export class SageMakerDescribeExperiment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeExperimentRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.ExperimentName', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.ExperimentArn', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get source(): SageMakerDescribeExperimentSource {
    return new SageMakerDescribeExperimentSource(this, 'Source', this.__resources, this.input);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.Description', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get createdBy(): SageMakerDescribeExperimentCreatedBy {
    return new SageMakerDescribeExperimentCreatedBy(this, 'CreatedBy', this.__resources, this.input);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get lastModifiedBy(): SageMakerDescribeExperimentLastModifiedBy {
    return new SageMakerDescribeExperimentLastModifiedBy(this, 'LastModifiedBy', this.__resources, this.input);
  }

}

export class SageMakerDescribeExperimentSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeExperimentRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.Source.SourceArn', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.Source.SourceType', props);
    return resource.getResponseField('Source.SourceType') as unknown as string;
  }

}

export class SageMakerDescribeExperimentCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeExperimentRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.CreatedBy.UserProfileArn', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.CreatedBy.UserProfileName', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.CreatedBy.DomainId', props);
    return resource.getResponseField('CreatedBy.DomainId') as unknown as string;
  }

}

export class SageMakerDescribeExperimentLastModifiedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeExperimentRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.LastModifiedBy.UserProfileArn', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.LastModifiedBy.UserProfileName', props);
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
          ExperimentName: this.input.experimentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExperiment.LastModifiedBy.DomainId', props);
    return resource.getResponseField('LastModifiedBy.DomainId') as unknown as string;
  }

}

export class SageMakerDescribeFlowDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.FlowDefinitionArn', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.FlowDefinitionName', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.FlowDefinitionStatus', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get humanLoopRequestSource(): SageMakerDescribeFlowDefinitionHumanLoopRequestSource {
    return new SageMakerDescribeFlowDefinitionHumanLoopRequestSource(this, 'HumanLoopRequestSource', this.__resources, this.input);
  }

  public get humanLoopActivationConfig(): SageMakerDescribeFlowDefinitionHumanLoopActivationConfig {
    return new SageMakerDescribeFlowDefinitionHumanLoopActivationConfig(this, 'HumanLoopActivationConfig', this.__resources, this.input);
  }

  public get humanLoopConfig(): SageMakerDescribeFlowDefinitionHumanLoopConfig {
    return new SageMakerDescribeFlowDefinitionHumanLoopConfig(this, 'HumanLoopConfig', this.__resources, this.input);
  }

  public get outputConfig(): SageMakerDescribeFlowDefinitionOutputConfig {
    return new SageMakerDescribeFlowDefinitionOutputConfig(this, 'OutputConfig', this.__resources, this.input);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.RoleArn', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

}

export class SageMakerDescribeFlowDefinitionHumanLoopRequestSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopRequestSource.AwsManagedHumanLoopRequestSource', props);
    return resource.getResponseField('HumanLoopRequestSource.AwsManagedHumanLoopRequestSource') as unknown as string;
  }

}

export class SageMakerDescribeFlowDefinitionHumanLoopActivationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
  }

  public get humanLoopActivationConditionsConfig(): SageMakerDescribeFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
    return new SageMakerDescribeFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig(this, 'HumanLoopActivationConditionsConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopActivationConfig.HumanLoopActivationConditionsConfig.HumanLoopActivationConditions', props);
    return resource.getResponseField('HumanLoopActivationConfig.HumanLoopActivationConditionsConfig.HumanLoopActivationConditions') as unknown as string;
  }

}

export class SageMakerDescribeFlowDefinitionHumanLoopConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.WorkteamArn', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.HumanTaskUiArn', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.TaskTitle', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.TaskDescription', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.TaskCount', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.TaskAvailabilityLifetimeInSeconds', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.TaskTimeLimitInSeconds', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.TaskKeywords', props);
    return resource.getResponseField('HumanLoopConfig.TaskKeywords') as unknown as string[];
  }

  public get publicWorkforceTaskPrice(): SageMakerDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
    return new SageMakerDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice(this, 'PublicWorkforceTaskPrice', this.__resources, this.input);
  }

}

export class SageMakerDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
  }

  public get amountInUsd(): SageMakerDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
    return new SageMakerDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd(this, 'AmountInUsd', this.__resources, this.input);
  }

}

export class SageMakerDescribeFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent', props);
    return resource.getResponseField('HumanLoopConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent') as unknown as number;
  }

}

export class SageMakerDescribeFlowDefinitionOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeFlowDefinitionRequest) {
    super(scope, id);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.OutputConfig.S3OutputPath', props);
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
          FlowDefinitionName: this.input.flowDefinitionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFlowDefinition.OutputConfig.KmsKeyId', props);
    return resource.getResponseField('OutputConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeHumanTaskUi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHumanTaskUiRequest) {
    super(scope, id);
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
          HumanTaskUiName: this.input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHumanTaskUi.HumanTaskUiArn', props);
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
          HumanTaskUiName: this.input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHumanTaskUi.HumanTaskUiName', props);
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
          HumanTaskUiName: this.input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHumanTaskUi.HumanTaskUiStatus', props);
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
          HumanTaskUiName: this.input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHumanTaskUi.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get uiTemplate(): SageMakerDescribeHumanTaskUiUiTemplate {
    return new SageMakerDescribeHumanTaskUiUiTemplate(this, 'UiTemplate', this.__resources, this.input);
  }

}

export class SageMakerDescribeHumanTaskUiUiTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHumanTaskUiRequest) {
    super(scope, id);
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
          HumanTaskUiName: this.input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHumanTaskUi.UiTemplate.Url', props);
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
          HumanTaskUiName: this.input.humanTaskUiName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHumanTaskUi.UiTemplate.ContentSha256', props);
    return resource.getResponseField('UiTemplate.ContentSha256') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobArn', props);
    return resource.getResponseField('HyperParameterTuningJobArn') as unknown as string;
  }

  public get hyperParameterTuningJobConfig(): SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfig {
    return new SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfig(this, 'HyperParameterTuningJobConfig', this.__resources, this.input);
  }

  public get trainingJobDefinition(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinition {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinition(this, 'TrainingJobDefinition', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinitions', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobStatus', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.CreationTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningEndTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get trainingJobStatusCounters(): SageMakerDescribeHyperParameterTuningJobTrainingJobStatusCounters {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobStatusCounters(this, 'TrainingJobStatusCounters', this.__resources, this.input);
  }

  public get objectiveStatusCounters(): SageMakerDescribeHyperParameterTuningJobObjectiveStatusCounters {
    return new SageMakerDescribeHyperParameterTuningJobObjectiveStatusCounters(this, 'ObjectiveStatusCounters', this.__resources, this.input);
  }

  public get bestTrainingJob(): SageMakerDescribeHyperParameterTuningJobBestTrainingJob {
    return new SageMakerDescribeHyperParameterTuningJobBestTrainingJob(this, 'BestTrainingJob', this.__resources, this.input);
  }

  public get overallBestTrainingJob(): SageMakerDescribeHyperParameterTuningJobOverallBestTrainingJob {
    return new SageMakerDescribeHyperParameterTuningJobOverallBestTrainingJob(this, 'OverallBestTrainingJob', this.__resources, this.input);
  }

  public get warmStartConfig(): SageMakerDescribeHyperParameterTuningJobWarmStartConfig {
    return new SageMakerDescribeHyperParameterTuningJobWarmStartConfig(this, 'WarmStartConfig', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.Strategy', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.Strategy') as unknown as string;
  }

  public get hyperParameterTuningJobObjective(): SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigHyperParameterTuningJobObjective {
    return new SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigHyperParameterTuningJobObjective(this, 'HyperParameterTuningJobObjective', this.__resources, this.input);
  }

  public get resourceLimits(): SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigResourceLimits {
    return new SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigResourceLimits(this, 'ResourceLimits', this.__resources, this.input);
  }

  public get parameterRanges(): SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigParameterRanges {
    return new SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigParameterRanges(this, 'ParameterRanges', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.TrainingJobEarlyStoppingType', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.TrainingJobEarlyStoppingType') as unknown as string;
  }

  public get tuningJobCompletionCriteria(): SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigTuningJobCompletionCriteria {
    return new SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigTuningJobCompletionCriteria(this, 'TuningJobCompletionCriteria', this.__resources, this.input);
  }

}

export class SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigHyperParameterTuningJobObjective extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.Type', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.MetricName', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.HyperParameterTuningJobObjective.MetricName') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigResourceLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ResourceLimits.MaxNumberOfTrainingJobs', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ResourceLimits.MaxParallelTrainingJobs', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.ResourceLimits.MaxParallelTrainingJobs') as unknown as number;
  }

}

export class SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigParameterRanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.IntegerParameterRanges', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.ContinuousParameterRanges', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.ParameterRanges.CategoricalParameterRanges', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.ParameterRanges.CategoricalParameterRanges') as unknown as shapes.SageMakerCategoricalParameterRange[];
  }

}

export class SageMakerDescribeHyperParameterTuningJobHyperParameterTuningJobConfigTuningJobCompletionCriteria extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.HyperParameterTuningJobConfig.TuningJobCompletionCriteria.TargetObjectiveMetricValue', props);
    return resource.getResponseField('HyperParameterTuningJobConfig.TuningJobCompletionCriteria.TargetObjectiveMetricValue') as unknown as number;
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.DefinitionName', props);
    return resource.getResponseField('TrainingJobDefinition.DefinitionName') as unknown as string;
  }

  public get tuningObjective(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionTuningObjective {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionTuningObjective(this, 'TuningObjective', this.__resources, this.input);
  }

  public get hyperParameterRanges(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges(this, 'HyperParameterRanges', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.StaticHyperParameters', props);
    return resource.getResponseField('TrainingJobDefinition.StaticHyperParameters') as unknown as Record<string, string>;
  }

  public get algorithmSpecification(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification(this, 'AlgorithmSpecification', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.RoleArn', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.InputDataConfig', props);
    return resource.getResponseField('TrainingJobDefinition.InputDataConfig') as unknown as shapes.SageMakerChannel[];
  }

  public get vpcConfig(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionVpcConfig {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get outputDataConfig(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get resourceConfig(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionResourceConfig {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionResourceConfig(this, 'ResourceConfig', this.__resources, this.input);
  }

  public get stoppingCondition(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionStoppingCondition {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionStoppingCondition(this, 'StoppingCondition', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableNetworkIsolation', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableInterContainerTrafficEncryption', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.EnableManagedSpotTraining', props);
    return resource.getResponseField('TrainingJobDefinition.EnableManagedSpotTraining') as unknown as boolean;
  }

  public get checkpointConfig(): SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig {
    return new SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig(this, 'CheckpointConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionTuningObjective extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.TuningObjective.Type', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.TuningObjective.MetricName', props);
    return resource.getResponseField('TrainingJobDefinition.TuningObjective.MetricName') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.IntegerParameterRanges', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.ContinuousParameterRanges', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.HyperParameterRanges.CategoricalParameterRanges', props);
    return resource.getResponseField('TrainingJobDefinition.HyperParameterRanges.CategoricalParameterRanges') as unknown as shapes.SageMakerCategoricalParameterRange[];
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.TrainingImage', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.TrainingInputMode', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.AlgorithmName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.AlgorithmSpecification.MetricDefinitions', props);
    return resource.getResponseField('TrainingJobDefinition.AlgorithmSpecification.MetricDefinitions') as unknown as shapes.SageMakerMetricDefinition[];
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.VpcConfig.SecurityGroupIds', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.VpcConfig.Subnets', props);
    return resource.getResponseField('TrainingJobDefinition.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.OutputDataConfig.KmsKeyId', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.OutputDataConfig.S3OutputPath', props);
    return resource.getResponseField('TrainingJobDefinition.OutputDataConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionResourceConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.InstanceType', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.InstanceCount', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.VolumeSizeInGB', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.ResourceConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('TrainingJobDefinition.ResourceConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionStoppingCondition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.StoppingCondition.MaxRuntimeInSeconds', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.StoppingCondition.MaxWaitTimeInSeconds', props);
    return resource.getResponseField('TrainingJobDefinition.StoppingCondition.MaxWaitTimeInSeconds') as unknown as number;
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.CheckpointConfig.S3Uri', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobDefinition.CheckpointConfig.LocalPath', props);
    return resource.getResponseField('TrainingJobDefinition.CheckpointConfig.LocalPath') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobTrainingJobStatusCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.Completed', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.InProgress', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.RetryableError', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.NonRetryableError', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.TrainingJobStatusCounters.Stopped', props);
    return resource.getResponseField('TrainingJobStatusCounters.Stopped') as unknown as number;
  }

}

export class SageMakerDescribeHyperParameterTuningJobObjectiveStatusCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Succeeded', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Pending', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.ObjectiveStatusCounters.Failed', props);
    return resource.getResponseField('ObjectiveStatusCounters.Failed') as unknown as number;
  }

}

export class SageMakerDescribeHyperParameterTuningJobBestTrainingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobDefinitionName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobArn', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TuningJobName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.CreationTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingStartTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingEndTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TrainingJobStatus', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.TunedHyperParameters', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.FailureReason', props);
    return resource.getResponseField('BestTrainingJob.FailureReason') as unknown as string;
  }

  public get finalHyperParameterTuningJobObjectiveMetric(): SageMakerDescribeHyperParameterTuningJobBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric {
    return new SageMakerDescribeHyperParameterTuningJobBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric(this, 'FinalHyperParameterTuningJobObjectiveMetric', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.ObjectiveStatus', props);
    return resource.getResponseField('BestTrainingJob.ObjectiveStatus') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value', props);
    return resource.getResponseField('BestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value') as unknown as number;
  }

}

export class SageMakerDescribeHyperParameterTuningJobOverallBestTrainingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobDefinitionName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobArn', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TuningJobName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.CreationTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingStartTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingEndTime', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TrainingJobStatus', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.TunedHyperParameters', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FailureReason', props);
    return resource.getResponseField('OverallBestTrainingJob.FailureReason') as unknown as string;
  }

  public get finalHyperParameterTuningJobObjectiveMetric(): SageMakerDescribeHyperParameterTuningJobOverallBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric {
    return new SageMakerDescribeHyperParameterTuningJobOverallBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric(this, 'FinalHyperParameterTuningJobObjectiveMetric', this.__resources, this.input);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.ObjectiveStatus', props);
    return resource.getResponseField('OverallBestTrainingJob.ObjectiveStatus') as unknown as string;
  }

}

export class SageMakerDescribeHyperParameterTuningJobOverallBestTrainingJobFinalHyperParameterTuningJobObjectiveMetric extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Type', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.MetricName', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value', props);
    return resource.getResponseField('OverallBestTrainingJob.FinalHyperParameterTuningJobObjectiveMetric.Value') as unknown as number;
  }

}

export class SageMakerDescribeHyperParameterTuningJobWarmStartConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.WarmStartConfig.ParentHyperParameterTuningJobs', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeHyperParameterTuningJob.WarmStartConfig.WarmStartType', props);
    return resource.getResponseField('WarmStartConfig.WarmStartType') as unknown as string;
  }

}

export class SageMakerDescribeImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeImageRequest) {
    super(scope, id);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.CreationTime', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.Description', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.DisplayName', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.FailureReason', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.ImageArn', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.ImageName', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.ImageStatus', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.LastModifiedTime', props);
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
          ImageName: this.input.imageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImage.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

}

export class SageMakerDescribeImageVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeImageVersionRequest) {
    super(scope, id);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.BaseImage', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.ContainerImage', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.CreationTime', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.FailureReason', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.ImageArn', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.ImageVersionArn', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.ImageVersionStatus', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.LastModifiedTime', props);
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
          ImageName: this.input.imageName,
          Version: this.input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageVersion.Version', props);
    return resource.getResponseField('Version') as unknown as number;
  }

}

export class SageMakerDescribeLabelingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobStatus', props);
    return resource.getResponseField('LabelingJobStatus') as unknown as string;
  }

  public get labelCounters(): SageMakerDescribeLabelingJobLabelCounters {
    return new SageMakerDescribeLabelingJobLabelCounters(this, 'LabelCounters', this.__resources, this.input);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.FailureReason', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.CreationTime', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LastModifiedTime', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.JobReferenceCode', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobName', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobArn', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelAttributeName', props);
    return resource.getResponseField('LabelAttributeName') as unknown as string;
  }

  public get inputConfig(): SageMakerDescribeLabelingJobInputConfig {
    return new SageMakerDescribeLabelingJobInputConfig(this, 'InputConfig', this.__resources, this.input);
  }

  public get outputConfig(): SageMakerDescribeLabelingJobOutputConfig {
    return new SageMakerDescribeLabelingJobOutputConfig(this, 'OutputConfig', this.__resources, this.input);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.RoleArn', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelCategoryConfigS3Uri', props);
    return resource.getResponseField('LabelCategoryConfigS3Uri') as unknown as string;
  }

  public get stoppingConditions(): SageMakerDescribeLabelingJobStoppingConditions {
    return new SageMakerDescribeLabelingJobStoppingConditions(this, 'StoppingConditions', this.__resources, this.input);
  }

  public get labelingJobAlgorithmsConfig(): SageMakerDescribeLabelingJobLabelingJobAlgorithmsConfig {
    return new SageMakerDescribeLabelingJobLabelingJobAlgorithmsConfig(this, 'LabelingJobAlgorithmsConfig', this.__resources, this.input);
  }

  public get humanTaskConfig(): SageMakerDescribeLabelingJobHumanTaskConfig {
    return new SageMakerDescribeLabelingJobHumanTaskConfig(this, 'HumanTaskConfig', this.__resources, this.input);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.SageMakerTag[];
  }

  public get labelingJobOutput(): SageMakerDescribeLabelingJobLabelingJobOutput {
    return new SageMakerDescribeLabelingJobLabelingJobOutput(this, 'LabelingJobOutput', this.__resources, this.input);
  }

}

export class SageMakerDescribeLabelingJobLabelCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelCounters.TotalLabeled', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelCounters.HumanLabeled', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelCounters.MachineLabeled', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelCounters.FailedNonRetryableError', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelCounters.Unlabeled', props);
    return resource.getResponseField('LabelCounters.Unlabeled') as unknown as number;
  }

}

export class SageMakerDescribeLabelingJobInputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
  }

  public get dataSource(): SageMakerDescribeLabelingJobInputConfigDataSource {
    return new SageMakerDescribeLabelingJobInputConfigDataSource(this, 'DataSource', this.__resources, this.input);
  }

  public get dataAttributes(): SageMakerDescribeLabelingJobInputConfigDataAttributes {
    return new SageMakerDescribeLabelingJobInputConfigDataAttributes(this, 'DataAttributes', this.__resources, this.input);
  }

}

export class SageMakerDescribeLabelingJobInputConfigDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
  }

  public get s3DataSource(): SageMakerDescribeLabelingJobInputConfigDataSourceS3DataSource {
    return new SageMakerDescribeLabelingJobInputConfigDataSourceS3DataSource(this, 'S3DataSource', this.__resources, this.input);
  }

  public get snsDataSource(): SageMakerDescribeLabelingJobInputConfigDataSourceSnsDataSource {
    return new SageMakerDescribeLabelingJobInputConfigDataSourceSnsDataSource(this, 'SnsDataSource', this.__resources, this.input);
  }

}

export class SageMakerDescribeLabelingJobInputConfigDataSourceS3DataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.InputConfig.DataSource.S3DataSource.ManifestS3Uri', props);
    return resource.getResponseField('InputConfig.DataSource.S3DataSource.ManifestS3Uri') as unknown as string;
  }

}

export class SageMakerDescribeLabelingJobInputConfigDataSourceSnsDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.InputConfig.DataSource.SnsDataSource.SnsTopicArn', props);
    return resource.getResponseField('InputConfig.DataSource.SnsDataSource.SnsTopicArn') as unknown as string;
  }

}

export class SageMakerDescribeLabelingJobInputConfigDataAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.InputConfig.DataAttributes.ContentClassifiers', props);
    return resource.getResponseField('InputConfig.DataAttributes.ContentClassifiers') as unknown as string[];
  }

}

export class SageMakerDescribeLabelingJobOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.OutputConfig.S3OutputPath', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.OutputConfig.KmsKeyId', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.OutputConfig.SnsTopicArn', props);
    return resource.getResponseField('OutputConfig.SnsTopicArn') as unknown as string;
  }

}

export class SageMakerDescribeLabelingJobStoppingConditions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.StoppingConditions.MaxHumanLabeledObjectCount', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.StoppingConditions.MaxPercentageOfInputDatasetLabeled', props);
    return resource.getResponseField('StoppingConditions.MaxPercentageOfInputDatasetLabeled') as unknown as number;
  }

}

export class SageMakerDescribeLabelingJobLabelingJobAlgorithmsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobAlgorithmsConfig.LabelingJobAlgorithmSpecificationArn', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobAlgorithmsConfig.InitialActiveLearningModelArn', props);
    return resource.getResponseField('LabelingJobAlgorithmsConfig.InitialActiveLearningModelArn') as unknown as string;
  }

  public get labelingJobResourceConfig(): SageMakerDescribeLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig {
    return new SageMakerDescribeLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig(this, 'LabelingJobResourceConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobAlgorithmsConfig.LabelingJobResourceConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('LabelingJobAlgorithmsConfig.LabelingJobResourceConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeLabelingJobHumanTaskConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.WorkteamArn', props);
    return resource.getResponseField('HumanTaskConfig.WorkteamArn') as unknown as string;
  }

  public get uiConfig(): SageMakerDescribeLabelingJobHumanTaskConfigUiConfig {
    return new SageMakerDescribeLabelingJobHumanTaskConfigUiConfig(this, 'UiConfig', this.__resources, this.input);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.PreHumanTaskLambdaArn', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.TaskKeywords', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.TaskTitle', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.TaskDescription', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.NumberOfHumanWorkersPerDataObject', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.TaskTimeLimitInSeconds', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.TaskAvailabilityLifetimeInSeconds', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.MaxConcurrentTaskCount', props);
    return resource.getResponseField('HumanTaskConfig.MaxConcurrentTaskCount') as unknown as number;
  }

  public get annotationConsolidationConfig(): SageMakerDescribeLabelingJobHumanTaskConfigAnnotationConsolidationConfig {
    return new SageMakerDescribeLabelingJobHumanTaskConfigAnnotationConsolidationConfig(this, 'AnnotationConsolidationConfig', this.__resources, this.input);
  }

  public get publicWorkforceTaskPrice(): SageMakerDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPrice {
    return new SageMakerDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPrice(this, 'PublicWorkforceTaskPrice', this.__resources, this.input);
  }

}

export class SageMakerDescribeLabelingJobHumanTaskConfigUiConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.UiConfig.UiTemplateS3Uri', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.UiConfig.HumanTaskUiArn', props);
    return resource.getResponseField('HumanTaskConfig.UiConfig.HumanTaskUiArn') as unknown as string;
  }

}

export class SageMakerDescribeLabelingJobHumanTaskConfigAnnotationConsolidationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.AnnotationConsolidationConfig.AnnotationConsolidationLambdaArn', props);
    return resource.getResponseField('HumanTaskConfig.AnnotationConsolidationConfig.AnnotationConsolidationLambdaArn') as unknown as string;
  }

}

export class SageMakerDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPrice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
  }

  public get amountInUsd(): SageMakerDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd {
    return new SageMakerDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd(this, 'AmountInUsd', this.__resources, this.input);
  }

}

export class SageMakerDescribeLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Dollars', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.Cents', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent', props);
    return resource.getResponseField('HumanTaskConfig.PublicWorkforceTaskPrice.AmountInUsd.TenthFractionsOfACent') as unknown as number;
  }

}

export class SageMakerDescribeLabelingJobLabelingJobOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeLabelingJobRequest) {
    super(scope, id);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobOutput.OutputDatasetS3Uri', props);
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
          LabelingJobName: this.input.labelingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLabelingJob.LabelingJobOutput.FinalActiveLearningModelArn', props);
    return resource.getResponseField('LabelingJobOutput.FinalActiveLearningModelArn') as unknown as string;
  }

}

export class SageMakerDescribeModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelInput) {
    super(scope, id);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.ModelName', props);
    return resource.getResponseField('ModelName') as unknown as string;
  }

  public get primaryContainer(): SageMakerDescribeModelPrimaryContainer {
    return new SageMakerDescribeModelPrimaryContainer(this, 'PrimaryContainer', this.__resources, this.input);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.Containers', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.ExecutionRoleArn', props);
    return resource.getResponseField('ExecutionRoleArn') as unknown as string;
  }

  public get vpcConfig(): SageMakerDescribeModelVpcConfig {
    return new SageMakerDescribeModelVpcConfig(this, 'VpcConfig', this.__resources, this.input);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.CreationTime', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.ModelArn', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.EnableNetworkIsolation', props);
    return resource.getResponseField('EnableNetworkIsolation') as unknown as boolean;
  }

}

export class SageMakerDescribeModelPrimaryContainer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelInput) {
    super(scope, id);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.PrimaryContainer.ContainerHostname', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.PrimaryContainer.Image', props);
    return resource.getResponseField('PrimaryContainer.Image') as unknown as string;
  }

  public get imageConfig(): SageMakerDescribeModelPrimaryContainerImageConfig {
    return new SageMakerDescribeModelPrimaryContainerImageConfig(this, 'ImageConfig', this.__resources, this.input);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.PrimaryContainer.Mode', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.PrimaryContainer.ModelDataUrl', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.PrimaryContainer.Environment', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.PrimaryContainer.ModelPackageName', props);
    return resource.getResponseField('PrimaryContainer.ModelPackageName') as unknown as string;
  }

}

export class SageMakerDescribeModelPrimaryContainerImageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelInput) {
    super(scope, id);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.PrimaryContainer.ImageConfig.RepositoryAccessMode', props);
    return resource.getResponseField('PrimaryContainer.ImageConfig.RepositoryAccessMode') as unknown as string;
  }

}

export class SageMakerDescribeModelVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelInput) {
    super(scope, id);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.VpcConfig.SecurityGroupIds', props);
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
          ModelName: this.input.modelName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModel.VpcConfig.Subnets', props);
    return resource.getResponseField('VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerDescribeModelPackage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelPackageInput) {
    super(scope, id);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ModelPackageName', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ModelPackageArn', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ModelPackageDescription', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get inferenceSpecification(): SageMakerDescribeModelPackageInferenceSpecification {
    return new SageMakerDescribeModelPackageInferenceSpecification(this, 'InferenceSpecification', this.__resources, this.input);
  }

  public get sourceAlgorithmSpecification(): SageMakerDescribeModelPackageSourceAlgorithmSpecification {
    return new SageMakerDescribeModelPackageSourceAlgorithmSpecification(this, 'SourceAlgorithmSpecification', this.__resources, this.input);
  }

  public get validationSpecification(): SageMakerDescribeModelPackageValidationSpecification {
    return new SageMakerDescribeModelPackageValidationSpecification(this, 'ValidationSpecification', this.__resources, this.input);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ModelPackageStatus', props);
    return resource.getResponseField('ModelPackageStatus') as unknown as string;
  }

  public get modelPackageStatusDetails(): SageMakerDescribeModelPackageModelPackageStatusDetails {
    return new SageMakerDescribeModelPackageModelPackageStatusDetails(this, 'ModelPackageStatusDetails', this.__resources, this.input);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.CertifyForMarketplace', props);
    return resource.getResponseField('CertifyForMarketplace') as unknown as boolean;
  }

}

export class SageMakerDescribeModelPackageInferenceSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelPackageInput) {
    super(scope, id);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.InferenceSpecification.Containers', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.InferenceSpecification.SupportedTransformInstanceTypes', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.InferenceSpecification.SupportedRealtimeInferenceInstanceTypes', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.InferenceSpecification.SupportedContentTypes', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.InferenceSpecification.SupportedResponseMIMETypes', props);
    return resource.getResponseField('InferenceSpecification.SupportedResponseMIMETypes') as unknown as string[];
  }

}

export class SageMakerDescribeModelPackageSourceAlgorithmSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelPackageInput) {
    super(scope, id);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.SourceAlgorithmSpecification.SourceAlgorithms', props);
    return resource.getResponseField('SourceAlgorithmSpecification.SourceAlgorithms') as unknown as shapes.SageMakerSourceAlgorithm[];
  }

}

export class SageMakerDescribeModelPackageValidationSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelPackageInput) {
    super(scope, id);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ValidationSpecification.ValidationRole', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ValidationSpecification.ValidationProfiles', props);
    return resource.getResponseField('ValidationSpecification.ValidationProfiles') as unknown as shapes.SageMakerModelPackageValidationProfile[];
  }

}

export class SageMakerDescribeModelPackageModelPackageStatusDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeModelPackageInput) {
    super(scope, id);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ModelPackageStatusDetails.ValidationStatuses', props);
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
          ModelPackageName: this.input.modelPackageName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeModelPackage.ModelPackageStatusDetails.ImageScanStatuses', props);
    return resource.getResponseField('ModelPackageStatusDetails.ImageScanStatuses') as unknown as shapes.SageMakerModelPackageStatusItem[];
  }

}

export class SageMakerDescribeMonitoringSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleArn', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleName', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleStatus', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.FailureReason', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.CreationTime', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get monitoringScheduleConfig(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfig {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfig(this, 'MonitoringScheduleConfig', this.__resources, this.input);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.EndpointName', props);
    return resource.getResponseField('EndpointName') as unknown as string;
  }

  public get lastMonitoringExecutionSummary(): SageMakerDescribeMonitoringScheduleLastMonitoringExecutionSummary {
    return new SageMakerDescribeMonitoringScheduleLastMonitoringExecutionSummary(this, 'LastMonitoringExecutionSummary', this.__resources, this.input);
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
  }

  public get scheduleConfig(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigScheduleConfig {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigScheduleConfig(this, 'ScheduleConfig', this.__resources, this.input);
  }

  public get monitoringJobDefinition(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition(this, 'MonitoringJobDefinition', this.__resources, this.input);
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigScheduleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.ScheduleConfig.ScheduleExpression', props);
    return resource.getResponseField('MonitoringScheduleConfig.ScheduleConfig.ScheduleExpression') as unknown as string;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
  }

  public get baselineConfig(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig(this, 'BaselineConfig', this.__resources, this.input);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringInputs', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringInputs') as unknown as shapes.SageMakerMonitoringInput[];
  }

  public get monitoringOutputConfig(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig(this, 'MonitoringOutputConfig', this.__resources, this.input);
  }

  public get monitoringResources(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources(this, 'MonitoringResources', this.__resources, this.input);
  }

  public get monitoringAppSpecification(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification(this, 'MonitoringAppSpecification', this.__resources, this.input);
  }

  public get stoppingCondition(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition(this, 'StoppingCondition', this.__resources, this.input);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.Environment', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.Environment') as unknown as Record<string, string>;
  }

  public get networkConfig(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig(this, 'NetworkConfig', this.__resources, this.input);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.RoleArn', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.RoleArn') as unknown as string;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
  }

  public get constraintsResource(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource(this, 'ConstraintsResource', this.__resources, this.input);
  }

  public get statisticsResource(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource(this, 'StatisticsResource', this.__resources, this.input);
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.ConstraintsResource.S3Uri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.ConstraintsResource.S3Uri') as unknown as string;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.StatisticsResource.S3Uri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.BaselineConfig.StatisticsResource.S3Uri') as unknown as string;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.MonitoringOutputs', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.KmsKeyId', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringOutputConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
  }

  public get clusterConfig(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig(this, 'ClusterConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceCount', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.InstanceType', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeSizeInGB', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringResources.ClusterConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ImageUri', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerEntrypoint', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.ContainerArguments', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.RecordPreprocessorSourceUri', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.PostAnalyticsProcessorSourceUri', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.MonitoringAppSpecification.PostAnalyticsProcessorSourceUri') as unknown as string;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.StoppingCondition.MaxRuntimeInSeconds', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.StoppingCondition.MaxRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableInterContainerTrafficEncryption', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableNetworkIsolation', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.EnableNetworkIsolation') as unknown as boolean;
  }

  public get vpcConfig(): SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig {
    return new SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.SecurityGroupIds', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.Subnets', props);
    return resource.getResponseField('MonitoringScheduleConfig.MonitoringJobDefinition.NetworkConfig.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerDescribeMonitoringScheduleLastMonitoringExecutionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.MonitoringScheduleName', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.ScheduledTime', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.CreationTime', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.LastModifiedTime', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.MonitoringExecutionStatus', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.ProcessingJobArn', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.EndpointName', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMonitoringSchedule.LastMonitoringExecutionSummary.FailureReason', props);
    return resource.getResponseField('LastMonitoringExecutionSummary.FailureReason') as unknown as string;
  }

}

export class SageMakerDescribeNotebookInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeNotebookInstanceInput) {
    super(scope, id);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.NotebookInstanceArn', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.NotebookInstanceName', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.NotebookInstanceStatus', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.FailureReason', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.Url', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.InstanceType', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.SubnetId', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.SecurityGroups', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.RoleArn', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.KmsKeyId', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.NetworkInterfaceId', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.LastModifiedTime', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.CreationTime', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.NotebookInstanceLifecycleConfigName', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.DirectInternetAccess', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.VolumeSizeInGB', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.AcceleratorTypes', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.DefaultCodeRepository', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.AdditionalCodeRepositories', props);
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
          NotebookInstanceName: this.input.notebookInstanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstance.RootAccess', props);
    return resource.getResponseField('RootAccess') as unknown as string;
  }

}

export class SageMakerDescribeNotebookInstanceLifecycleConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeNotebookInstanceLifecycleConfigInput) {
    super(scope, id);
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
          NotebookInstanceLifecycleConfigName: this.input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigArn', props);
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
          NotebookInstanceLifecycleConfigName: this.input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleConfigName', props);
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
          NotebookInstanceLifecycleConfigName: this.input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstanceLifecycleConfig.OnCreate', props);
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
          NotebookInstanceLifecycleConfigName: this.input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstanceLifecycleConfig.OnStart', props);
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
          NotebookInstanceLifecycleConfigName: this.input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstanceLifecycleConfig.LastModifiedTime', props);
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
          NotebookInstanceLifecycleConfigName: this.input.notebookInstanceLifecycleConfigName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNotebookInstanceLifecycleConfig.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class SageMakerDescribeProcessingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingInputs', props);
    return resource.getResponseField('ProcessingInputs') as unknown as shapes.SageMakerProcessingInput[];
  }

  public get processingOutputConfig(): SageMakerDescribeProcessingJobProcessingOutputConfig {
    return new SageMakerDescribeProcessingJobProcessingOutputConfig(this, 'ProcessingOutputConfig', this.__resources, this.input);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingJobName', props);
    return resource.getResponseField('ProcessingJobName') as unknown as string;
  }

  public get processingResources(): SageMakerDescribeProcessingJobProcessingResources {
    return new SageMakerDescribeProcessingJobProcessingResources(this, 'ProcessingResources', this.__resources, this.input);
  }

  public get stoppingCondition(): SageMakerDescribeProcessingJobStoppingCondition {
    return new SageMakerDescribeProcessingJobStoppingCondition(this, 'StoppingCondition', this.__resources, this.input);
  }

  public get appSpecification(): SageMakerDescribeProcessingJobAppSpecification {
    return new SageMakerDescribeProcessingJobAppSpecification(this, 'AppSpecification', this.__resources, this.input);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.Environment', props);
    return resource.getResponseField('Environment') as unknown as Record<string, string>;
  }

  public get networkConfig(): SageMakerDescribeProcessingJobNetworkConfig {
    return new SageMakerDescribeProcessingJobNetworkConfig(this, 'NetworkConfig', this.__resources, this.input);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get experimentConfig(): SageMakerDescribeProcessingJobExperimentConfig {
    return new SageMakerDescribeProcessingJobExperimentConfig(this, 'ExperimentConfig', this.__resources, this.input);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingJobArn', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingJobStatus', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ExitMessage', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.FailureReason', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingEndTime', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingStartTime', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.LastModifiedTime', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.CreationTime', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.MonitoringScheduleArn', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.AutoMLJobArn', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.TrainingJobArn', props);
    return resource.getResponseField('TrainingJobArn') as unknown as string;
  }

}

export class SageMakerDescribeProcessingJobProcessingOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingOutputConfig.Outputs', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingOutputConfig.KmsKeyId', props);
    return resource.getResponseField('ProcessingOutputConfig.KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeProcessingJobProcessingResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
  }

  public get clusterConfig(): SageMakerDescribeProcessingJobProcessingResourcesClusterConfig {
    return new SageMakerDescribeProcessingJobProcessingResourcesClusterConfig(this, 'ClusterConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeProcessingJobProcessingResourcesClusterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.InstanceCount', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.InstanceType', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.VolumeSizeInGB', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ProcessingResources.ClusterConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('ProcessingResources.ClusterConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeProcessingJobStoppingCondition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.StoppingCondition.MaxRuntimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxRuntimeInSeconds') as unknown as number;
  }

}

export class SageMakerDescribeProcessingJobAppSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.AppSpecification.ImageUri', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.AppSpecification.ContainerEntrypoint', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.AppSpecification.ContainerArguments', props);
    return resource.getResponseField('AppSpecification.ContainerArguments') as unknown as string[];
  }

}

export class SageMakerDescribeProcessingJobNetworkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.NetworkConfig.EnableInterContainerTrafficEncryption', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.NetworkConfig.EnableNetworkIsolation', props);
    return resource.getResponseField('NetworkConfig.EnableNetworkIsolation') as unknown as boolean;
  }

  public get vpcConfig(): SageMakerDescribeProcessingJobNetworkConfigVpcConfig {
    return new SageMakerDescribeProcessingJobNetworkConfigVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeProcessingJobNetworkConfigVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.NetworkConfig.VpcConfig.SecurityGroupIds', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.NetworkConfig.VpcConfig.Subnets', props);
    return resource.getResponseField('NetworkConfig.VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerDescribeProcessingJobExperimentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeProcessingJobRequest) {
    super(scope, id);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ExperimentConfig.ExperimentName', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ExperimentConfig.TrialName', props);
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
          ProcessingJobName: this.input.processingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProcessingJob.ExperimentConfig.TrialComponentDisplayName', props);
    return resource.getResponseField('ExperimentConfig.TrialComponentDisplayName') as unknown as string;
  }

}

export class SageMakerDescribeSubscribedWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeSubscribedWorkteamRequest) {
    super(scope, id);
  }

  public get subscribedWorkteam(): SageMakerDescribeSubscribedWorkteamSubscribedWorkteam {
    return new SageMakerDescribeSubscribedWorkteamSubscribedWorkteam(this, 'SubscribedWorkteam', this.__resources, this.input);
  }

}

export class SageMakerDescribeSubscribedWorkteamSubscribedWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeSubscribedWorkteamRequest) {
    super(scope, id);
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
          WorkteamArn: this.input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscribedWorkteam.SubscribedWorkteam.WorkteamArn', props);
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
          WorkteamArn: this.input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscribedWorkteam.SubscribedWorkteam.MarketplaceTitle', props);
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
          WorkteamArn: this.input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscribedWorkteam.SubscribedWorkteam.SellerName', props);
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
          WorkteamArn: this.input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscribedWorkteam.SubscribedWorkteam.MarketplaceDescription', props);
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
          WorkteamArn: this.input.workteamArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubscribedWorkteam.SubscribedWorkteam.ListingId', props);
    return resource.getResponseField('SubscribedWorkteam.ListingId') as unknown as string;
  }

}

export class SageMakerDescribeTrainingJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TrainingJobName', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TrainingJobArn', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TuningJobArn', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.LabelingJobArn', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

  public get modelArtifacts(): SageMakerDescribeTrainingJobModelArtifacts {
    return new SageMakerDescribeTrainingJobModelArtifacts(this, 'ModelArtifacts', this.__resources, this.input);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TrainingJobStatus', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.SecondaryStatus', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.FailureReason', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.HyperParameters', props);
    return resource.getResponseField('HyperParameters') as unknown as Record<string, string>;
  }

  public get algorithmSpecification(): SageMakerDescribeTrainingJobAlgorithmSpecification {
    return new SageMakerDescribeTrainingJobAlgorithmSpecification(this, 'AlgorithmSpecification', this.__resources, this.input);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.RoleArn', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.InputDataConfig', props);
    return resource.getResponseField('InputDataConfig') as unknown as shapes.SageMakerChannel[];
  }

  public get outputDataConfig(): SageMakerDescribeTrainingJobOutputDataConfig {
    return new SageMakerDescribeTrainingJobOutputDataConfig(this, 'OutputDataConfig', this.__resources, this.input);
  }

  public get resourceConfig(): SageMakerDescribeTrainingJobResourceConfig {
    return new SageMakerDescribeTrainingJobResourceConfig(this, 'ResourceConfig', this.__resources, this.input);
  }

  public get vpcConfig(): SageMakerDescribeTrainingJobVpcConfig {
    return new SageMakerDescribeTrainingJobVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get stoppingCondition(): SageMakerDescribeTrainingJobStoppingCondition {
    return new SageMakerDescribeTrainingJobStoppingCondition(this, 'StoppingCondition', this.__resources, this.input);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.CreationTime', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TrainingStartTime', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TrainingEndTime', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.LastModifiedTime', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.SecondaryStatusTransitions', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.FinalMetricDataList', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.EnableNetworkIsolation', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.EnableInterContainerTrafficEncryption', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.EnableManagedSpotTraining', props);
    return resource.getResponseField('EnableManagedSpotTraining') as unknown as boolean;
  }

  public get checkpointConfig(): SageMakerDescribeTrainingJobCheckpointConfig {
    return new SageMakerDescribeTrainingJobCheckpointConfig(this, 'CheckpointConfig', this.__resources, this.input);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TrainingTimeInSeconds', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.BillableTimeInSeconds', props);
    return resource.getResponseField('BillableTimeInSeconds') as unknown as number;
  }

  public get debugHookConfig(): SageMakerDescribeTrainingJobDebugHookConfig {
    return new SageMakerDescribeTrainingJobDebugHookConfig(this, 'DebugHookConfig', this.__resources, this.input);
  }

  public get experimentConfig(): SageMakerDescribeTrainingJobExperimentConfig {
    return new SageMakerDescribeTrainingJobExperimentConfig(this, 'ExperimentConfig', this.__resources, this.input);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.DebugRuleConfigurations', props);
    return resource.getResponseField('DebugRuleConfigurations') as unknown as shapes.SageMakerDebugRuleConfiguration[];
  }

  public get tensorBoardOutputConfig(): SageMakerDescribeTrainingJobTensorBoardOutputConfig {
    return new SageMakerDescribeTrainingJobTensorBoardOutputConfig(this, 'TensorBoardOutputConfig', this.__resources, this.input);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.DebugRuleEvaluationStatuses', props);
    return resource.getResponseField('DebugRuleEvaluationStatuses') as unknown as shapes.SageMakerDebugRuleEvaluationStatus[];
  }

}

export class SageMakerDescribeTrainingJobModelArtifacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ModelArtifacts.S3ModelArtifacts', props);
    return resource.getResponseField('ModelArtifacts.S3ModelArtifacts') as unknown as string;
  }

}

export class SageMakerDescribeTrainingJobAlgorithmSpecification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.AlgorithmSpecification.TrainingImage', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.AlgorithmSpecification.AlgorithmName', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.AlgorithmSpecification.TrainingInputMode', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.AlgorithmSpecification.MetricDefinitions', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.AlgorithmSpecification.EnableSageMakerMetricsTimeSeries', props);
    return resource.getResponseField('AlgorithmSpecification.EnableSageMakerMetricsTimeSeries') as unknown as boolean;
  }

}

export class SageMakerDescribeTrainingJobOutputDataConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.OutputDataConfig.KmsKeyId', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.OutputDataConfig.S3OutputPath', props);
    return resource.getResponseField('OutputDataConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerDescribeTrainingJobResourceConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ResourceConfig.InstanceType', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ResourceConfig.InstanceCount', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ResourceConfig.VolumeSizeInGB', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ResourceConfig.VolumeKmsKeyId', props);
    return resource.getResponseField('ResourceConfig.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeTrainingJobVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.VpcConfig.SecurityGroupIds', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.VpcConfig.Subnets', props);
    return resource.getResponseField('VpcConfig.Subnets') as unknown as string[];
  }

}

export class SageMakerDescribeTrainingJobStoppingCondition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.StoppingCondition.MaxRuntimeInSeconds', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.StoppingCondition.MaxWaitTimeInSeconds', props);
    return resource.getResponseField('StoppingCondition.MaxWaitTimeInSeconds') as unknown as number;
  }

}

export class SageMakerDescribeTrainingJobCheckpointConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.CheckpointConfig.S3Uri', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.CheckpointConfig.LocalPath', props);
    return resource.getResponseField('CheckpointConfig.LocalPath') as unknown as string;
  }

}

export class SageMakerDescribeTrainingJobDebugHookConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.DebugHookConfig.LocalPath', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.DebugHookConfig.S3OutputPath', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.DebugHookConfig.HookParameters', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.DebugHookConfig.CollectionConfigurations', props);
    return resource.getResponseField('DebugHookConfig.CollectionConfigurations') as unknown as shapes.SageMakerCollectionConfiguration[];
  }

}

export class SageMakerDescribeTrainingJobExperimentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ExperimentConfig.ExperimentName', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ExperimentConfig.TrialName', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.ExperimentConfig.TrialComponentDisplayName', props);
    return resource.getResponseField('ExperimentConfig.TrialComponentDisplayName') as unknown as string;
  }

}

export class SageMakerDescribeTrainingJobTensorBoardOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrainingJobRequest) {
    super(scope, id);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TensorBoardOutputConfig.LocalPath', props);
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
          TrainingJobName: this.input.trainingJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrainingJob.TensorBoardOutputConfig.S3OutputPath', props);
    return resource.getResponseField('TensorBoardOutputConfig.S3OutputPath') as unknown as string;
  }

}

export class SageMakerDescribeTransformJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformJobName', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformJobArn', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformJobStatus', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.FailureReason', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.ModelName', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.MaxConcurrentTransforms', props);
    return resource.getResponseField('MaxConcurrentTransforms') as unknown as number;
  }

  public get modelClientConfig(): SageMakerDescribeTransformJobModelClientConfig {
    return new SageMakerDescribeTransformJobModelClientConfig(this, 'ModelClientConfig', this.__resources, this.input);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.MaxPayloadInMB', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.BatchStrategy', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.Environment', props);
    return resource.getResponseField('Environment') as unknown as Record<string, string>;
  }

  public get transformInput(): SageMakerDescribeTransformJobTransformInput {
    return new SageMakerDescribeTransformJobTransformInput(this, 'TransformInput', this.__resources, this.input);
  }

  public get transformOutput(): SageMakerDescribeTransformJobTransformOutput {
    return new SageMakerDescribeTransformJobTransformOutput(this, 'TransformOutput', this.__resources, this.input);
  }

  public get transformResources(): SageMakerDescribeTransformJobTransformResources {
    return new SageMakerDescribeTransformJobTransformResources(this, 'TransformResources', this.__resources, this.input);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.CreationTime', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformStartTime', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformEndTime', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.LabelingJobArn', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.AutoMLJobArn', props);
    return resource.getResponseField('AutoMLJobArn') as unknown as string;
  }

  public get dataProcessing(): SageMakerDescribeTransformJobDataProcessing {
    return new SageMakerDescribeTransformJobDataProcessing(this, 'DataProcessing', this.__resources, this.input);
  }

  public get experimentConfig(): SageMakerDescribeTransformJobExperimentConfig {
    return new SageMakerDescribeTransformJobExperimentConfig(this, 'ExperimentConfig', this.__resources, this.input);
  }

}

export class SageMakerDescribeTransformJobModelClientConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.ModelClientConfig.InvocationsTimeoutInSeconds', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.ModelClientConfig.InvocationsMaxRetries', props);
    return resource.getResponseField('ModelClientConfig.InvocationsMaxRetries') as unknown as number;
  }

}

export class SageMakerDescribeTransformJobTransformInput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
  }

  public get dataSource(): SageMakerDescribeTransformJobTransformInputDataSource {
    return new SageMakerDescribeTransformJobTransformInputDataSource(this, 'DataSource', this.__resources, this.input);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformInput.ContentType', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformInput.CompressionType', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformInput.SplitType', props);
    return resource.getResponseField('TransformInput.SplitType') as unknown as string;
  }

}

export class SageMakerDescribeTransformJobTransformInputDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
  }

  public get s3DataSource(): SageMakerDescribeTransformJobTransformInputDataSourceS3DataSource {
    return new SageMakerDescribeTransformJobTransformInputDataSourceS3DataSource(this, 'S3DataSource', this.__resources, this.input);
  }

}

export class SageMakerDescribeTransformJobTransformInputDataSourceS3DataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformInput.DataSource.S3DataSource.S3DataType', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformInput.DataSource.S3DataSource.S3Uri', props);
    return resource.getResponseField('TransformInput.DataSource.S3DataSource.S3Uri') as unknown as string;
  }

}

export class SageMakerDescribeTransformJobTransformOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformOutput.S3OutputPath', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformOutput.Accept', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformOutput.AssembleWith', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformOutput.KmsKeyId', props);
    return resource.getResponseField('TransformOutput.KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeTransformJobTransformResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformResources.InstanceType', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformResources.InstanceCount', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.TransformResources.VolumeKmsKeyId', props);
    return resource.getResponseField('TransformResources.VolumeKmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeTransformJobDataProcessing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.DataProcessing.InputFilter', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.DataProcessing.OutputFilter', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.DataProcessing.JoinSource', props);
    return resource.getResponseField('DataProcessing.JoinSource') as unknown as string;
  }

}

export class SageMakerDescribeTransformJobExperimentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTransformJobRequest) {
    super(scope, id);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.ExperimentConfig.ExperimentName', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.ExperimentConfig.TrialName', props);
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
          TransformJobName: this.input.transformJobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTransformJob.ExperimentConfig.TrialComponentDisplayName', props);
    return resource.getResponseField('ExperimentConfig.TrialComponentDisplayName') as unknown as string;
  }

}

export class SageMakerDescribeTrial extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialRequest) {
    super(scope, id);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.TrialName', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.TrialArn', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.DisplayName', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.ExperimentName', props);
    return resource.getResponseField('ExperimentName') as unknown as string;
  }

  public get source(): SageMakerDescribeTrialSource {
    return new SageMakerDescribeTrialSource(this, 'Source', this.__resources, this.input);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get createdBy(): SageMakerDescribeTrialCreatedBy {
    return new SageMakerDescribeTrialCreatedBy(this, 'CreatedBy', this.__resources, this.input);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get lastModifiedBy(): SageMakerDescribeTrialLastModifiedBy {
    return new SageMakerDescribeTrialLastModifiedBy(this, 'LastModifiedBy', this.__resources, this.input);
  }

}

export class SageMakerDescribeTrialSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialRequest) {
    super(scope, id);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.Source.SourceArn', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.Source.SourceType', props);
    return resource.getResponseField('Source.SourceType') as unknown as string;
  }

}

export class SageMakerDescribeTrialCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialRequest) {
    super(scope, id);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.CreatedBy.UserProfileArn', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.CreatedBy.UserProfileName', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.CreatedBy.DomainId', props);
    return resource.getResponseField('CreatedBy.DomainId') as unknown as string;
  }

}

export class SageMakerDescribeTrialLastModifiedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialRequest) {
    super(scope, id);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.LastModifiedBy.UserProfileArn', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.LastModifiedBy.UserProfileName', props);
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
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrial.LastModifiedBy.DomainId', props);
    return resource.getResponseField('LastModifiedBy.DomainId') as unknown as string;
  }

}

export class SageMakerDescribeTrialComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.TrialComponentName', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.TrialComponentArn', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get source(): SageMakerDescribeTrialComponentSource {
    return new SageMakerDescribeTrialComponentSource(this, 'Source', this.__resources, this.input);
  }

  public get status(): SageMakerDescribeTrialComponentStatus {
    return new SageMakerDescribeTrialComponentStatus(this, 'Status', this.__resources, this.input);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.StartTime', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.EndTime', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get createdBy(): SageMakerDescribeTrialComponentCreatedBy {
    return new SageMakerDescribeTrialComponentCreatedBy(this, 'CreatedBy', this.__resources, this.input);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.LastModifiedTime', props);
    return resource.getResponseField('LastModifiedTime') as unknown as string;
  }

  public get lastModifiedBy(): SageMakerDescribeTrialComponentLastModifiedBy {
    return new SageMakerDescribeTrialComponentLastModifiedBy(this, 'LastModifiedBy', this.__resources, this.input);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.Parameters', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.InputArtifacts', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.OutputArtifacts', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.Metrics', props);
    return resource.getResponseField('Metrics') as unknown as shapes.SageMakerTrialComponentMetricSummary[];
  }

}

export class SageMakerDescribeTrialComponentSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.Source.SourceArn', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.Source.SourceType', props);
    return resource.getResponseField('Source.SourceType') as unknown as string;
  }

}

export class SageMakerDescribeTrialComponentStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.Status.PrimaryStatus', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.Status.Message', props);
    return resource.getResponseField('Status.Message') as unknown as string;
  }

}

export class SageMakerDescribeTrialComponentCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.CreatedBy.UserProfileArn', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.CreatedBy.UserProfileName', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.CreatedBy.DomainId', props);
    return resource.getResponseField('CreatedBy.DomainId') as unknown as string;
  }

}

export class SageMakerDescribeTrialComponentLastModifiedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.LastModifiedBy.UserProfileArn', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.LastModifiedBy.UserProfileName', props);
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
          TrialComponentName: this.input.trialComponentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTrialComponent.LastModifiedBy.DomainId', props);
    return resource.getResponseField('LastModifiedBy.DomainId') as unknown as string;
  }

}

export class SageMakerDescribeUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.DomainId', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserProfileArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserProfileName', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.HomeEfsFileSystemUid', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.Status', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.LastModifiedTime', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.CreationTime', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.FailureReason', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.SingleSignOnUserIdentifier', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.SingleSignOnUserValue', props);
    return resource.getResponseField('SingleSignOnUserValue') as unknown as string;
  }

  public get userSettings(): SageMakerDescribeUserProfileUserSettings {
    return new SageMakerDescribeUserProfileUserSettings(this, 'UserSettings', this.__resources, this.input);
  }

}

export class SageMakerDescribeUserProfileUserSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.ExecutionRole', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.SecurityGroups', props);
    return resource.getResponseField('UserSettings.SecurityGroups') as unknown as string[];
  }

  public get sharingSettings(): SageMakerDescribeUserProfileUserSettingsSharingSettings {
    return new SageMakerDescribeUserProfileUserSettingsSharingSettings(this, 'SharingSettings', this.__resources, this.input);
  }

  public get jupyterServerAppSettings(): SageMakerDescribeUserProfileUserSettingsJupyterServerAppSettings {
    return new SageMakerDescribeUserProfileUserSettingsJupyterServerAppSettings(this, 'JupyterServerAppSettings', this.__resources, this.input);
  }

  public get kernelGatewayAppSettings(): SageMakerDescribeUserProfileUserSettingsKernelGatewayAppSettings {
    return new SageMakerDescribeUserProfileUserSettingsKernelGatewayAppSettings(this, 'KernelGatewayAppSettings', this.__resources, this.input);
  }

  public get tensorBoardAppSettings(): SageMakerDescribeUserProfileUserSettingsTensorBoardAppSettings {
    return new SageMakerDescribeUserProfileUserSettingsTensorBoardAppSettings(this, 'TensorBoardAppSettings', this.__resources, this.input);
  }

}

export class SageMakerDescribeUserProfileUserSettingsSharingSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.SharingSettings.NotebookOutputOption', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.SharingSettings.S3OutputPath', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.SharingSettings.S3KmsKeyId', props);
    return resource.getResponseField('UserSettings.SharingSettings.S3KmsKeyId') as unknown as string;
  }

}

export class SageMakerDescribeUserProfileUserSettingsJupyterServerAppSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
  }

  public get defaultResourceSpec(): SageMakerDescribeUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    return new SageMakerDescribeUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec(this, 'DefaultResourceSpec', this.__resources, this.input);
  }

}

export class SageMakerDescribeUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('UserSettings.JupyterServerAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerDescribeUserProfileUserSettingsKernelGatewayAppSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
  }

  public get defaultResourceSpec(): SageMakerDescribeUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    return new SageMakerDescribeUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec(this, 'DefaultResourceSpec', this.__resources, this.input);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.CustomImages', props);
    return resource.getResponseField('UserSettings.KernelGatewayAppSettings.CustomImages') as unknown as shapes.SageMakerCustomImage[];
  }

}

export class SageMakerDescribeUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('UserSettings.KernelGatewayAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerDescribeUserProfileUserSettingsTensorBoardAppSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
  }

  public get defaultResourceSpec(): SageMakerDescribeUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    return new SageMakerDescribeUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec(this, 'DefaultResourceSpec', this.__resources, this.input);
  }

}

export class SageMakerDescribeUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.SageMakerImageVersionArn', props);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.UserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType', props);
    return resource.getResponseField('UserSettings.TensorBoardAppSettings.DefaultResourceSpec.InstanceType') as unknown as string;
  }

}

export class SageMakerDescribeWorkforce extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkforceRequest) {
    super(scope, id);
  }

  public get workforce(): SageMakerDescribeWorkforceWorkforce {
    return new SageMakerDescribeWorkforceWorkforce(this, 'Workforce', this.__resources, this.input);
  }

}

export class SageMakerDescribeWorkforceWorkforce extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.WorkforceName', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.WorkforceArn', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.LastUpdatedDate', props);
    return resource.getResponseField('Workforce.LastUpdatedDate') as unknown as string;
  }

  public get sourceIpConfig(): SageMakerDescribeWorkforceWorkforceSourceIpConfig {
    return new SageMakerDescribeWorkforceWorkforceSourceIpConfig(this, 'SourceIpConfig', this.__resources, this.input);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.SubDomain', props);
    return resource.getResponseField('Workforce.SubDomain') as unknown as string;
  }

  public get cognitoConfig(): SageMakerDescribeWorkforceWorkforceCognitoConfig {
    return new SageMakerDescribeWorkforceWorkforceCognitoConfig(this, 'CognitoConfig', this.__resources, this.input);
  }

  public get oidcConfig(): SageMakerDescribeWorkforceWorkforceOidcConfig {
    return new SageMakerDescribeWorkforceWorkforceOidcConfig(this, 'OidcConfig', this.__resources, this.input);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.CreateDate', props);
    return resource.getResponseField('Workforce.CreateDate') as unknown as string;
  }

}

export class SageMakerDescribeWorkforceWorkforceSourceIpConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.SourceIpConfig.Cidrs', props);
    return resource.getResponseField('Workforce.SourceIpConfig.Cidrs') as unknown as string[];
  }

}

export class SageMakerDescribeWorkforceWorkforceCognitoConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.CognitoConfig.UserPool', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.CognitoConfig.ClientId', props);
    return resource.getResponseField('Workforce.CognitoConfig.ClientId') as unknown as string;
  }

}

export class SageMakerDescribeWorkforceWorkforceOidcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.OidcConfig.ClientId', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.OidcConfig.Issuer', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.OidcConfig.AuthorizationEndpoint', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.OidcConfig.TokenEndpoint', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.OidcConfig.UserInfoEndpoint', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.OidcConfig.LogoutEndpoint', props);
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
          WorkforceName: this.input.workforceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkforce.Workforce.OidcConfig.JwksUri', props);
    return resource.getResponseField('Workforce.OidcConfig.JwksUri') as unknown as string;
  }

}

export class SageMakerDescribeWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkteamRequest) {
    super(scope, id);
  }

  public get workteam(): SageMakerDescribeWorkteamWorkteam {
    return new SageMakerDescribeWorkteamWorkteam(this, 'Workteam', this.__resources, this.input);
  }

}

export class SageMakerDescribeWorkteamWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkteamRequest) {
    super(scope, id);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.WorkteamName', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.MemberDefinitions', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.WorkteamArn', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.WorkforceArn', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.ProductListingIds', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.Description', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.SubDomain', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.CreateDate', props);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.LastUpdatedDate', props);
    return resource.getResponseField('Workteam.LastUpdatedDate') as unknown as string;
  }

  public get notificationConfiguration(): SageMakerDescribeWorkteamWorkteamNotificationConfiguration {
    return new SageMakerDescribeWorkteamWorkteamNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

}

export class SageMakerDescribeWorkteamWorkteamNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDescribeWorkteamRequest) {
    super(scope, id);
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
          WorkteamName: this.input.workteamName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkteam.Workteam.NotificationConfiguration.NotificationTopicArn', props);
    return resource.getResponseField('Workteam.NotificationConfiguration.NotificationTopicArn') as unknown as string;
  }

}

export class SageMakerDisassociateTrialComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerDisassociateTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateTrialComponent.TrialComponentArn', props);
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
          TrialComponentName: this.input.trialComponentName,
          TrialName: this.input.trialName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateTrialComponent.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerFetchSearchSuggestions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerGetSearchSuggestionsRequest) {
    super(scope, id);
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
          Resource: this.input.resource,
          SuggestionQuery: {
            PropertyNameQuery: {
              PropertyNameHint: this.input.suggestionQuery?.propertyNameQuery?.propertyNameHint,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSearchSuggestions.PropertyNameSuggestions', props);
    return resource.getResponseField('PropertyNameSuggestions') as unknown as shapes.SageMakerPropertyNameSuggestion[];
  }

}

export class SageMakerListAlgorithms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListAlgorithmsInput) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAlgorithms.AlgorithmSummaryList', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAlgorithms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListAppImageConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListAppImageConfigsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          ModifiedTimeBefore: this.input.modifiedTimeBefore,
          ModifiedTimeAfter: this.input.modifiedTimeAfter,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppImageConfigs.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          ModifiedTimeBefore: this.input.modifiedTimeBefore,
          ModifiedTimeAfter: this.input.modifiedTimeAfter,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAppImageConfigs.AppImageConfigs', props);
    return resource.getResponseField('AppImageConfigs') as unknown as shapes.SageMakerAppImageConfigDetails[];
  }

}

export class SageMakerListApps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListAppsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          DomainIdEquals: this.input.domainIdEquals,
          UserProfileNameEquals: this.input.userProfileNameEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApps.Apps', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          DomainIdEquals: this.input.domainIdEquals,
          UserProfileNameEquals: this.input.userProfileNameEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApps.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListAutoMlJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListAutoMlJobsRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAutoMLJobs.AutoMLJobSummaries', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAutoMLJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListCandidatesForAutoMlJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListCandidatesForAutoMlJobRequest) {
    super(scope, id);
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
          AutoMLJobName: this.input.autoMlJobName,
          StatusEquals: this.input.statusEquals,
          CandidateNameEquals: this.input.candidateNameEquals,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCandidatesForAutoMLJob.Candidates', props);
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
          AutoMLJobName: this.input.autoMlJobName,
          StatusEquals: this.input.statusEquals,
          CandidateNameEquals: this.input.candidateNameEquals,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCandidatesForAutoMLJob.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListCodeRepositories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListCodeRepositoriesInput) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCodeRepositories.CodeRepositorySummaryList', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCodeRepositories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListCompilationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListCompilationJobsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCompilationJobs.CompilationJobSummaries', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCompilationJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListDomains extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListDomainsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.Domains', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListEndpointConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListEndpointConfigsInput) {
    super(scope, id);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpointConfigs.EndpointConfigs', props);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpointConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListEndpointsInput) {
    super(scope, id);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpoints.Endpoints', props);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListExperiments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListExperimentsRequest) {
    super(scope, id);
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
          CreatedAfter: this.input.createdAfter,
          CreatedBefore: this.input.createdBefore,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExperiments.ExperimentSummaries', props);
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
          CreatedAfter: this.input.createdAfter,
          CreatedBefore: this.input.createdBefore,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExperiments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListFlowDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListFlowDefinitionsRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlowDefinitions.FlowDefinitionSummaries', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFlowDefinitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListHumanTaskUis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListHumanTaskUisRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHumanTaskUis.HumanTaskUiSummaries', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHumanTaskUis.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListHyperParameterTuningJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListHyperParameterTuningJobsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHyperParameterTuningJobs.HyperParameterTuningJobSummaries', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHyperParameterTuningJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListImageVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListImageVersionsRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          ImageName: this.input.imageName,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageVersions.ImageVersions', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          ImageName: this.input.imageName,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImageVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListImagesRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImages.Images', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListLabelingJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListLabelingJobsRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          NameContains: this.input.nameContains,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLabelingJobs.LabelingJobSummaryList', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          NameContains: this.input.nameContains,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLabelingJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListLabelingJobsForWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListLabelingJobsForWorkteamRequest) {
    super(scope, id);
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
          WorkteamArn: this.input.workteamArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          JobReferenceCodeContains: this.input.jobReferenceCodeContains,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLabelingJobsForWorkteam.LabelingJobSummaryList', props);
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
          WorkteamArn: this.input.workteamArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          JobReferenceCodeContains: this.input.jobReferenceCodeContains,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLabelingJobsForWorkteam.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListModelPackages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListModelPackagesInput) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListModelPackages.ModelPackageSummaryList', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListModelPackages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListModelsInput) {
    super(scope, id);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListModels.Models', props);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListMonitoringExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListMonitoringExecutionsRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
          EndpointName: this.input.endpointName,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ScheduledTimeBefore: this.input.scheduledTimeBefore,
          ScheduledTimeAfter: this.input.scheduledTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMonitoringExecutions.MonitoringExecutionSummaries', props);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
          EndpointName: this.input.endpointName,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ScheduledTimeBefore: this.input.scheduledTimeBefore,
          ScheduledTimeAfter: this.input.scheduledTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMonitoringExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListMonitoringSchedules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListMonitoringSchedulesRequest) {
    super(scope, id);
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
          EndpointName: this.input.endpointName,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMonitoringSchedules.MonitoringScheduleSummaries', props);
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
          EndpointName: this.input.endpointName,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMonitoringSchedules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListNotebookInstanceLifecycleConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListNotebookInstanceLifecycleConfigsInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNotebookInstanceLifecycleConfigs.NextToken', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNotebookInstanceLifecycleConfigs.NotebookInstanceLifecycleConfigs', props);
    return resource.getResponseField('NotebookInstanceLifecycleConfigs') as unknown as shapes.SageMakerNotebookInstanceLifecycleConfigSummary[];
  }

}

export class SageMakerListNotebookInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListNotebookInstancesInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
          NotebookInstanceLifecycleConfigNameContains: this.input.notebookInstanceLifecycleConfigNameContains,
          DefaultCodeRepositoryContains: this.input.defaultCodeRepositoryContains,
          AdditionalCodeRepositoryEquals: this.input.additionalCodeRepositoryEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNotebookInstances.NextToken', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          CreationTimeBefore: this.input.creationTimeBefore,
          CreationTimeAfter: this.input.creationTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          StatusEquals: this.input.statusEquals,
          NotebookInstanceLifecycleConfigNameContains: this.input.notebookInstanceLifecycleConfigNameContains,
          DefaultCodeRepositoryContains: this.input.defaultCodeRepositoryContains,
          AdditionalCodeRepositoryEquals: this.input.additionalCodeRepositoryEquals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNotebookInstances.NotebookInstances', props);
    return resource.getResponseField('NotebookInstances') as unknown as shapes.SageMakerNotebookInstanceSummary[];
  }

}

export class SageMakerListProcessingJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListProcessingJobsRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProcessingJobs.ProcessingJobSummaries', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProcessingJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListSubscribedWorkteams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListSubscribedWorkteamsRequest) {
    super(scope, id);
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
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscribedWorkteams.SubscribedWorkteams', props);
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
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSubscribedWorkteams.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListTagsInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.Tags', props);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListTrainingJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListTrainingJobsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrainingJobs.TrainingJobSummaries', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrainingJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListTrainingJobsForHyperParameterTuningJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListTrainingJobsForHyperParameterTuningJobRequest) {
    super(scope, id);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrainingJobsForHyperParameterTuningJob.TrainingJobSummaries', props);
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
          HyperParameterTuningJobName: this.input.hyperParameterTuningJobName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrainingJobsForHyperParameterTuningJob.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListTransformJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListTransformJobsRequest) {
    super(scope, id);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTransformJobs.TransformJobSummaries', props);
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
          CreationTimeAfter: this.input.creationTimeAfter,
          CreationTimeBefore: this.input.creationTimeBefore,
          LastModifiedTimeAfter: this.input.lastModifiedTimeAfter,
          LastModifiedTimeBefore: this.input.lastModifiedTimeBefore,
          NameContains: this.input.nameContains,
          StatusEquals: this.input.statusEquals,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTransformJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListTrialComponents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListTrialComponentsRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
          TrialName: this.input.trialName,
          SourceArn: this.input.sourceArn,
          CreatedAfter: this.input.createdAfter,
          CreatedBefore: this.input.createdBefore,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrialComponents.TrialComponentSummaries', props);
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
          ExperimentName: this.input.experimentName,
          TrialName: this.input.trialName,
          SourceArn: this.input.sourceArn,
          CreatedAfter: this.input.createdAfter,
          CreatedBefore: this.input.createdBefore,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrialComponents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListTrials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListTrialsRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
          TrialComponentName: this.input.trialComponentName,
          CreatedAfter: this.input.createdAfter,
          CreatedBefore: this.input.createdBefore,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrials.TrialSummaries', props);
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
          ExperimentName: this.input.experimentName,
          TrialComponentName: this.input.trialComponentName,
          CreatedAfter: this.input.createdAfter,
          CreatedBefore: this.input.createdBefore,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTrials.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListUserProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListUserProfilesRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          DomainIdEquals: this.input.domainIdEquals,
          UserProfileNameContains: this.input.userProfileNameContains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserProfiles.UserProfiles', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          SortOrder: this.input.sortOrder,
          SortBy: this.input.sortBy,
          DomainIdEquals: this.input.domainIdEquals,
          UserProfileNameContains: this.input.userProfileNameContains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListWorkforces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListWorkforcesRequest) {
    super(scope, id);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkforces.Workforces', props);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkforces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerListWorkteams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerListWorkteamsRequest) {
    super(scope, id);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkteams.Workteams', props);
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
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NameContains: this.input.nameContains,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkteams.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerRenderUiTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerRenderUiTemplateRequest) {
    super(scope, id);
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
            Content: this.input.uiTemplate?.content,
          },
          Task: {
            Input: this.input.task.input,
          },
          RoleArn: this.input.roleArn,
          HumanTaskUiArn: this.input.humanTaskUiArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenderUiTemplate.RenderedContent', props);
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
            Content: this.input.uiTemplate?.content,
          },
          Task: {
            Input: this.input.task.input,
          },
          RoleArn: this.input.roleArn,
          HumanTaskUiArn: this.input.humanTaskUiArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenderUiTemplate.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.SageMakerRenderingError[];
  }

}

export class SageMakerSearch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerSearchRequest) {
    super(scope, id);
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
          Resource: this.input.resource,
          SearchExpression: {
            Filters: this.input.searchExpression?.filters,
            NestedFilters: this.input.searchExpression?.nestedFilters,
            SubExpressions: this.input.searchExpression?.subExpressions,
            Operator: this.input.searchExpression?.operator,
          },
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.Results', props);
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
          Resource: this.input.resource,
          SearchExpression: {
            Filters: this.input.searchExpression?.filters,
            NestedFilters: this.input.searchExpression?.nestedFilters,
            SubExpressions: this.input.searchExpression?.subExpressions,
            Operator: this.input.searchExpression?.operator,
          },
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SageMakerUpdateAppImageConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateAppImageConfigRequest) {
    super(scope, id);
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
          AppImageConfigName: this.input.appImageConfigName,
          KernelGatewayImageConfig: {
            KernelSpecs: this.input.kernelGatewayImageConfig?.kernelSpecs,
            FileSystemConfig: {
              MountPath: this.input.kernelGatewayImageConfig?.fileSystemConfig?.mountPath,
              DefaultUid: this.input.kernelGatewayImageConfig?.fileSystemConfig?.defaultUid,
              DefaultGid: this.input.kernelGatewayImageConfig?.fileSystemConfig?.defaultGid,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAppImageConfig.AppImageConfigArn', props);
    return resource.getResponseField('AppImageConfigArn') as unknown as string;
  }

}

export class SageMakerUpdateCodeRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateCodeRepositoryInput) {
    super(scope, id);
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
          CodeRepositoryName: this.input.codeRepositoryName,
          GitConfig: {
            SecretArn: this.input.gitConfig?.secretArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCodeRepository.CodeRepositoryArn', props);
    return resource.getResponseField('CodeRepositoryArn') as unknown as string;
  }

}

export class SageMakerUpdateDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateDomainRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          DefaultUserSettings: {
            ExecutionRole: this.input.defaultUserSettings?.executionRole,
            SecurityGroups: this.input.defaultUserSettings?.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.input.defaultUserSettings?.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.input.defaultUserSettings?.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.input.defaultUserSettings?.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings?.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.input.defaultUserSettings?.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.defaultUserSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.defaultUserSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.defaultUserSettings?.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomain.DomainArn', props);
    return resource.getResponseField('DomainArn') as unknown as string;
  }

}

export class SageMakerUpdateEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateEndpointInput) {
    super(scope, id);
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
          EndpointName: this.input.endpointName,
          EndpointConfigName: this.input.endpointConfigName,
          RetainAllVariantProperties: this.input.retainAllVariantProperties,
          ExcludeRetainedVariantProperties: this.input.excludeRetainedVariantProperties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SageMakerUpdateEndpointWeightsAndCapacities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateEndpointWeightsAndCapacitiesInput) {
    super(scope, id);
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
          EndpointName: this.input.endpointName,
          DesiredWeightsAndCapacities: this.input.desiredWeightsAndCapacities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEndpointWeightsAndCapacities.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class SageMakerUpdateExperiment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateExperimentRequest) {
    super(scope, id);
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
          ExperimentName: this.input.experimentName,
          DisplayName: this.input.displayName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateExperiment.ExperimentArn', props);
    return resource.getResponseField('ExperimentArn') as unknown as string;
  }

}

export class SageMakerUpdateImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateImageRequest) {
    super(scope, id);
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
          DeleteProperties: this.input.deleteProperties,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          ImageName: this.input.imageName,
          RoleArn: this.input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateImage.ImageArn', props);
    return resource.getResponseField('ImageArn') as unknown as string;
  }

}

export class SageMakerUpdateMonitoringSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateMonitoringScheduleRequest) {
    super(scope, id);
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
          MonitoringScheduleName: this.input.monitoringScheduleName,
          MonitoringScheduleConfig: {
            ScheduleConfig: {
              ScheduleExpression: this.input.monitoringScheduleConfig.scheduleConfig?.scheduleExpression,
            },
            MonitoringJobDefinition: {
              BaselineConfig: {
                ConstraintsResource: {
                  S3Uri: this.input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.constraintsResource?.s3Uri,
                },
                StatisticsResource: {
                  S3Uri: this.input.monitoringScheduleConfig.monitoringJobDefinition.baselineConfig?.statisticsResource?.s3Uri,
                },
              },
              MonitoringInputs: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringInputs,
              MonitoringOutputConfig: {
                MonitoringOutputs: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.monitoringOutputs,
                KmsKeyId: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringOutputConfig.kmsKeyId,
              },
              MonitoringResources: {
                ClusterConfig: {
                  InstanceCount: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceCount,
                  InstanceType: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.instanceType,
                  VolumeSizeInGB: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeSizeInGb,
                  VolumeKmsKeyId: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringResources.clusterConfig.volumeKmsKeyId,
                },
              },
              MonitoringAppSpecification: {
                ImageUri: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.imageUri,
                ContainerEntrypoint: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerEntrypoint,
                ContainerArguments: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.containerArguments,
                RecordPreprocessorSourceUri: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.recordPreprocessorSourceUri,
                PostAnalyticsProcessorSourceUri: this.input.monitoringScheduleConfig.monitoringJobDefinition.monitoringAppSpecification.postAnalyticsProcessorSourceUri,
              },
              StoppingCondition: {
                MaxRuntimeInSeconds: this.input.monitoringScheduleConfig.monitoringJobDefinition.stoppingCondition?.maxRuntimeInSeconds,
              },
              Environment: this.input.monitoringScheduleConfig.monitoringJobDefinition.environment,
              NetworkConfig: {
                EnableInterContainerTrafficEncryption: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableInterContainerTrafficEncryption,
                EnableNetworkIsolation: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.enableNetworkIsolation,
                VpcConfig: {
                  SecurityGroupIds: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.securityGroupIds,
                  Subnets: this.input.monitoringScheduleConfig.monitoringJobDefinition.networkConfig?.vpcConfig?.subnets,
                },
              },
              RoleArn: this.input.monitoringScheduleConfig.monitoringJobDefinition.roleArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMonitoringSchedule.MonitoringScheduleArn', props);
    return resource.getResponseField('MonitoringScheduleArn') as unknown as string;
  }

}

export class SageMakerUpdateTrial extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateTrialRequest) {
    super(scope, id);
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
          TrialName: this.input.trialName,
          DisplayName: this.input.displayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrial.TrialArn', props);
    return resource.getResponseField('TrialArn') as unknown as string;
  }

}

export class SageMakerUpdateTrialComponent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateTrialComponentRequest) {
    super(scope, id);
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
          TrialComponentName: this.input.trialComponentName,
          DisplayName: this.input.displayName,
          Status: {
            PrimaryStatus: this.input.status?.primaryStatus,
            Message: this.input.status?.message,
          },
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Parameters: this.input.parameters,
          ParametersToRemove: this.input.parametersToRemove,
          InputArtifacts: this.input.inputArtifacts,
          InputArtifactsToRemove: this.input.inputArtifactsToRemove,
          OutputArtifacts: this.input.outputArtifacts,
          OutputArtifactsToRemove: this.input.outputArtifactsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrialComponent.TrialComponentArn', props);
    return resource.getResponseField('TrialComponentArn') as unknown as string;
  }

}

export class SageMakerUpdateUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateUserProfileRequest) {
    super(scope, id);
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
          DomainId: this.input.domainId,
          UserProfileName: this.input.userProfileName,
          UserSettings: {
            ExecutionRole: this.input.userSettings?.executionRole,
            SecurityGroups: this.input.userSettings?.securityGroups,
            SharingSettings: {
              NotebookOutputOption: this.input.userSettings?.sharingSettings?.notebookOutputOption,
              S3OutputPath: this.input.userSettings?.sharingSettings?.s3OutputPath,
              S3KmsKeyId: this.input.userSettings?.sharingSettings?.s3KmsKeyId,
            },
            JupyterServerAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.userSettings?.jupyterServerAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
            KernelGatewayAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.userSettings?.kernelGatewayAppSettings?.defaultResourceSpec?.instanceType,
              },
              CustomImages: this.input.userSettings?.kernelGatewayAppSettings?.customImages,
            },
            TensorBoardAppSettings: {
              DefaultResourceSpec: {
                SageMakerImageArn: this.input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageArn,
                SageMakerImageVersionArn: this.input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.sageMakerImageVersionArn,
                InstanceType: this.input.userSettings?.tensorBoardAppSettings?.defaultResourceSpec?.instanceType,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUserProfile.UserProfileArn', props);
    return resource.getResponseField('UserProfileArn') as unknown as string;
  }

}

export class SageMakerUpdateWorkforce extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkforceRequest) {
    super(scope, id);
  }

  public get workforce(): SageMakerUpdateWorkforceWorkforce {
    return new SageMakerUpdateWorkforceWorkforce(this, 'Workforce', this.__resources, this.input);
  }

}

export class SageMakerUpdateWorkforceWorkforce extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.WorkforceName', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.WorkforceArn', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.LastUpdatedDate', props);
    return resource.getResponseField('Workforce.LastUpdatedDate') as unknown as string;
  }

  public get sourceIpConfig(): SageMakerUpdateWorkforceWorkforceSourceIpConfig {
    return new SageMakerUpdateWorkforceWorkforceSourceIpConfig(this, 'SourceIpConfig', this.__resources, this.input);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.SubDomain', props);
    return resource.getResponseField('Workforce.SubDomain') as unknown as string;
  }

  public get cognitoConfig(): SageMakerUpdateWorkforceWorkforceCognitoConfig {
    return new SageMakerUpdateWorkforceWorkforceCognitoConfig(this, 'CognitoConfig', this.__resources, this.input);
  }

  public get oidcConfig(): SageMakerUpdateWorkforceWorkforceOidcConfig {
    return new SageMakerUpdateWorkforceWorkforceOidcConfig(this, 'OidcConfig', this.__resources, this.input);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.CreateDate', props);
    return resource.getResponseField('Workforce.CreateDate') as unknown as string;
  }

}

export class SageMakerUpdateWorkforceWorkforceSourceIpConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.SourceIpConfig.Cidrs', props);
    return resource.getResponseField('Workforce.SourceIpConfig.Cidrs') as unknown as string[];
  }

}

export class SageMakerUpdateWorkforceWorkforceCognitoConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.CognitoConfig.UserPool', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.CognitoConfig.ClientId', props);
    return resource.getResponseField('Workforce.CognitoConfig.ClientId') as unknown as string;
  }

}

export class SageMakerUpdateWorkforceWorkforceOidcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkforceRequest) {
    super(scope, id);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.OidcConfig.ClientId', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.OidcConfig.Issuer', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.OidcConfig.AuthorizationEndpoint', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.OidcConfig.TokenEndpoint', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.OidcConfig.UserInfoEndpoint', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.OidcConfig.LogoutEndpoint', props);
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
          WorkforceName: this.input.workforceName,
          SourceIpConfig: {
            Cidrs: this.input.sourceIpConfig?.cidrs,
          },
          OidcConfig: {
            ClientId: this.input.oidcConfig?.clientId,
            ClientSecret: this.input.oidcConfig?.clientSecret,
            Issuer: this.input.oidcConfig?.issuer,
            AuthorizationEndpoint: this.input.oidcConfig?.authorizationEndpoint,
            TokenEndpoint: this.input.oidcConfig?.tokenEndpoint,
            UserInfoEndpoint: this.input.oidcConfig?.userInfoEndpoint,
            LogoutEndpoint: this.input.oidcConfig?.logoutEndpoint,
            JwksUri: this.input.oidcConfig?.jwksUri,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkforce.Workforce.OidcConfig.JwksUri', props);
    return resource.getResponseField('Workforce.OidcConfig.JwksUri') as unknown as string;
  }

}

export class SageMakerUpdateWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkteamRequest) {
    super(scope, id);
  }

  public get workteam(): SageMakerUpdateWorkteamWorkteam {
    return new SageMakerUpdateWorkteamWorkteam(this, 'Workteam', this.__resources, this.input);
  }

}

export class SageMakerUpdateWorkteamWorkteam extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkteamRequest) {
    super(scope, id);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.WorkteamName', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.MemberDefinitions', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.WorkteamArn', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.WorkforceArn', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.ProductListingIds', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.Description', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.SubDomain', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.CreateDate', props);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.LastUpdatedDate', props);
    return resource.getResponseField('Workteam.LastUpdatedDate') as unknown as string;
  }

  public get notificationConfiguration(): SageMakerUpdateWorkteamWorkteamNotificationConfiguration {
    return new SageMakerUpdateWorkteamWorkteamNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

}

export class SageMakerUpdateWorkteamWorkteamNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SageMakerUpdateWorkteamRequest) {
    super(scope, id);
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
          WorkteamName: this.input.workteamName,
          MemberDefinitions: this.input.memberDefinitions,
          Description: this.input.description,
          NotificationConfiguration: {
            NotificationTopicArn: this.input.notificationConfiguration?.notificationTopicArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkteam.Workteam.NotificationConfiguration.NotificationTopicArn', props);
    return resource.getResponseField('Workteam.NotificationConfiguration.NotificationTopicArn') as unknown as string;
  }

}

