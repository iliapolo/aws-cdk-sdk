import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppConfigClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApplication(input: shapes.AppConfigCreateApplicationRequest): AppConfigCreateApplication {
    return new AppConfigCreateApplication(this, 'CreateApplication', this.__resources, input);
  }

  public createConfigurationProfile(input: shapes.AppConfigCreateConfigurationProfileRequest): AppConfigCreateConfigurationProfile {
    return new AppConfigCreateConfigurationProfile(this, 'CreateConfigurationProfile', this.__resources, input);
  }

  public createDeploymentStrategy(input: shapes.AppConfigCreateDeploymentStrategyRequest): AppConfigCreateDeploymentStrategy {
    return new AppConfigCreateDeploymentStrategy(this, 'CreateDeploymentStrategy', this.__resources, input);
  }

  public createEnvironment(input: shapes.AppConfigCreateEnvironmentRequest): AppConfigCreateEnvironment {
    return new AppConfigCreateEnvironment(this, 'CreateEnvironment', this.__resources, input);
  }

  public createHostedConfigurationVersion(input: shapes.AppConfigCreateHostedConfigurationVersionRequest): AppConfigCreateHostedConfigurationVersion {
    return new AppConfigCreateHostedConfigurationVersion(this, 'CreateHostedConfigurationVersion', this.__resources, input);
  }

  public deleteApplication(input: shapes.AppConfigDeleteApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.DeleteApplication'),
        parameters: {
          ApplicationId: input.applicationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplication', props);
  }

  public deleteConfigurationProfile(input: shapes.AppConfigDeleteConfigurationProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.DeleteConfigurationProfile'),
        parameters: {
          ApplicationId: input.applicationId,
          ConfigurationProfileId: input.configurationProfileId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConfigurationProfile', props);
  }

  public deleteDeploymentStrategy(input: shapes.AppConfigDeleteDeploymentStrategyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.DeleteDeploymentStrategy'),
        parameters: {
          DeploymentStrategyId: input.deploymentStrategyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeploymentStrategy', props);
  }

  public deleteEnvironment(input: shapes.AppConfigDeleteEnvironmentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.DeleteEnvironment'),
        parameters: {
          ApplicationId: input.applicationId,
          EnvironmentId: input.environmentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEnvironment', props);
  }

  public deleteHostedConfigurationVersion(input: shapes.AppConfigDeleteHostedConfigurationVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.DeleteHostedConfigurationVersion'),
        parameters: {
          ApplicationId: input.applicationId,
          ConfigurationProfileId: input.configurationProfileId,
          VersionNumber: input.versionNumber,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteHostedConfigurationVersion', props);
  }

  public fetchApplication(input: shapes.AppConfigGetApplicationRequest): AppConfigFetchApplication {
    return new AppConfigFetchApplication(this, 'FetchApplication', this.__resources, input);
  }

  public fetchConfiguration(input: shapes.AppConfigGetConfigurationRequest): AppConfigFetchConfiguration {
    return new AppConfigFetchConfiguration(this, 'FetchConfiguration', this.__resources, input);
  }

  public fetchConfigurationProfile(input: shapes.AppConfigGetConfigurationProfileRequest): AppConfigFetchConfigurationProfile {
    return new AppConfigFetchConfigurationProfile(this, 'FetchConfigurationProfile', this.__resources, input);
  }

  public fetchDeployment(input: shapes.AppConfigGetDeploymentRequest): AppConfigFetchDeployment {
    return new AppConfigFetchDeployment(this, 'FetchDeployment', this.__resources, input);
  }

  public fetchDeploymentStrategy(input: shapes.AppConfigGetDeploymentStrategyRequest): AppConfigFetchDeploymentStrategy {
    return new AppConfigFetchDeploymentStrategy(this, 'FetchDeploymentStrategy', this.__resources, input);
  }

  public fetchEnvironment(input: shapes.AppConfigGetEnvironmentRequest): AppConfigFetchEnvironment {
    return new AppConfigFetchEnvironment(this, 'FetchEnvironment', this.__resources, input);
  }

  public fetchHostedConfigurationVersion(input: shapes.AppConfigGetHostedConfigurationVersionRequest): AppConfigFetchHostedConfigurationVersion {
    return new AppConfigFetchHostedConfigurationVersion(this, 'FetchHostedConfigurationVersion', this.__resources, input);
  }

  public listApplications(input: shapes.AppConfigListApplicationsRequest): AppConfigListApplications {
    return new AppConfigListApplications(this, 'ListApplications', this.__resources, input);
  }

  public listConfigurationProfiles(input: shapes.AppConfigListConfigurationProfilesRequest): AppConfigListConfigurationProfiles {
    return new AppConfigListConfigurationProfiles(this, 'ListConfigurationProfiles', this.__resources, input);
  }

  public listDeploymentStrategies(input: shapes.AppConfigListDeploymentStrategiesRequest): AppConfigListDeploymentStrategies {
    return new AppConfigListDeploymentStrategies(this, 'ListDeploymentStrategies', this.__resources, input);
  }

  public listDeployments(input: shapes.AppConfigListDeploymentsRequest): AppConfigListDeployments {
    return new AppConfigListDeployments(this, 'ListDeployments', this.__resources, input);
  }

  public listEnvironments(input: shapes.AppConfigListEnvironmentsRequest): AppConfigListEnvironments {
    return new AppConfigListEnvironments(this, 'ListEnvironments', this.__resources, input);
  }

  public listHostedConfigurationVersions(input: shapes.AppConfigListHostedConfigurationVersionsRequest): AppConfigListHostedConfigurationVersions {
    return new AppConfigListHostedConfigurationVersions(this, 'ListHostedConfigurationVersions', this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppConfigListTagsForResourceRequest): AppConfigListTagsForResource {
    return new AppConfigListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public startDeployment(input: shapes.AppConfigStartDeploymentRequest): AppConfigStartDeployment {
    return new AppConfigStartDeployment(this, 'StartDeployment', this.__resources, input);
  }

  public stopDeployment(input: shapes.AppConfigStopDeploymentRequest): AppConfigStopDeployment {
    return new AppConfigStopDeployment(this, 'StopDeployment', this.__resources, input);
  }

  public tagResource(input: shapes.AppConfigTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AppConfigUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApplication(input: shapes.AppConfigUpdateApplicationRequest): AppConfigUpdateApplication {
    return new AppConfigUpdateApplication(this, 'UpdateApplication', this.__resources, input);
  }

  public updateConfigurationProfile(input: shapes.AppConfigUpdateConfigurationProfileRequest): AppConfigUpdateConfigurationProfile {
    return new AppConfigUpdateConfigurationProfile(this, 'UpdateConfigurationProfile', this.__resources, input);
  }

  public updateDeploymentStrategy(input: shapes.AppConfigUpdateDeploymentStrategyRequest): AppConfigUpdateDeploymentStrategy {
    return new AppConfigUpdateDeploymentStrategy(this, 'UpdateDeploymentStrategy', this.__resources, input);
  }

  public updateEnvironment(input: shapes.AppConfigUpdateEnvironmentRequest): AppConfigUpdateEnvironment {
    return new AppConfigUpdateEnvironment(this, 'UpdateEnvironment', this.__resources, input);
  }

  public validateConfiguration(input: shapes.AppConfigValidateConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateConfiguration',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ValidateConfiguration'),
        parameters: {
          ApplicationId: input.applicationId,
          ConfigurationProfileId: input.configurationProfileId,
          ConfigurationVersion: input.configurationVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ValidateConfiguration', props);
  }

}

export class AppConfigCreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigCreateApplicationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateApplication.Id'),
        outputPath: 'Id',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateApplication.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateApplication.Description'),
        outputPath: 'Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class AppConfigCreateConfigurationProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigCreateConfigurationProfileRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateConfigurationProfile.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          LocationUri: this.input.locationUri,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationProfile.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateConfigurationProfile.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          LocationUri: this.input.locationUri,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationProfile.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateConfigurationProfile.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          LocationUri: this.input.locationUri,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationProfile.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateConfigurationProfile.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          LocationUri: this.input.locationUri,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationProfile.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateConfigurationProfile.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          LocationUri: this.input.locationUri,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationProfile.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get retrievalRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateConfigurationProfile.RetrievalRoleArn'),
        outputPath: 'RetrievalRoleArn',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          LocationUri: this.input.locationUri,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationProfile.RetrievalRoleArn', props);
    return resource.getResponseField('RetrievalRoleArn') as unknown as string;
  }

  public get validators(): shapes.AppConfigValidator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateConfigurationProfile.Validators'),
        outputPath: 'Validators',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          LocationUri: this.input.locationUri,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfigurationProfile.Validators', props);
    return resource.getResponseField('Validators') as unknown as shapes.AppConfigValidator[];
  }

}

export class AppConfigCreateDeploymentStrategy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigCreateDeploymentStrategyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.Id'),
        outputPath: 'Id',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.Description'),
        outputPath: 'Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get deploymentDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.DeploymentDurationInMinutes'),
        outputPath: 'DeploymentDurationInMinutes',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.DeploymentDurationInMinutes', props);
    return resource.getResponseField('DeploymentDurationInMinutes') as unknown as number;
  }

  public get growthType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.GrowthType'),
        outputPath: 'GrowthType',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.GrowthType', props);
    return resource.getResponseField('GrowthType') as unknown as string;
  }

  public get growthFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.GrowthFactor'),
        outputPath: 'GrowthFactor',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.GrowthFactor', props);
    return resource.getResponseField('GrowthFactor') as unknown as number;
  }

  public get finalBakeTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.FinalBakeTimeInMinutes'),
        outputPath: 'FinalBakeTimeInMinutes',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.FinalBakeTimeInMinutes', props);
    return resource.getResponseField('FinalBakeTimeInMinutes') as unknown as number;
  }

  public get replicateTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateDeploymentStrategy.ReplicateTo'),
        outputPath: 'ReplicateTo',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
          ReplicateTo: this.input.replicateTo,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentStrategy.ReplicateTo', props);
    return resource.getResponseField('ReplicateTo') as unknown as string;
  }

}

export class AppConfigCreateEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigCreateEnvironmentRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateEnvironment.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateEnvironment.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateEnvironment.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateEnvironment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateEnvironment.State'),
        outputPath: 'State',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get monitors(): shapes.AppConfigMonitor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateEnvironment.Monitors'),
        outputPath: 'Monitors',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEnvironment.Monitors', props);
    return resource.getResponseField('Monitors') as unknown as shapes.AppConfigMonitor[];
  }

}

export class AppConfigCreateHostedConfigurationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigCreateHostedConfigurationVersionRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateHostedConfigurationVersion.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Description: this.input.description,
          Content: {
          },
          ContentType: this.input.contentType,
          LatestVersionNumber: this.input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedConfigurationVersion.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get configurationProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateHostedConfigurationVersion.ConfigurationProfileId'),
        outputPath: 'ConfigurationProfileId',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Description: this.input.description,
          Content: {
          },
          ContentType: this.input.contentType,
          LatestVersionNumber: this.input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedConfigurationVersion.ConfigurationProfileId', props);
    return resource.getResponseField('ConfigurationProfileId') as unknown as string;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateHostedConfigurationVersion.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Description: this.input.description,
          Content: {
          },
          ContentType: this.input.contentType,
          LatestVersionNumber: this.input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedConfigurationVersion.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateHostedConfigurationVersion.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Description: this.input.description,
          Content: {
          },
          ContentType: this.input.contentType,
          LatestVersionNumber: this.input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedConfigurationVersion.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get content(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateHostedConfigurationVersion.Content'),
        outputPath: 'Content',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Description: this.input.description,
          Content: {
          },
          ContentType: this.input.contentType,
          LatestVersionNumber: this.input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedConfigurationVersion.Content', props);
    return resource.getResponseField('Content') as unknown as any;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.CreateHostedConfigurationVersion.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Description: this.input.description,
          Content: {
          },
          ContentType: this.input.contentType,
          LatestVersionNumber: this.input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHostedConfigurationVersion.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class AppConfigFetchApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigGetApplicationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetApplication.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetApplication.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetApplication.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class AppConfigFetchConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigGetConfigurationRequest) {
    super(scope, id);
  }

  public get content(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfiguration',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfiguration.Content'),
        outputPath: 'Content',
        parameters: {
          Application: this.input.application,
          Environment: this.input.environment,
          Configuration: this.input.configuration,
          ClientId: this.input.clientId,
          ClientConfigurationVersion: this.input.clientConfigurationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfiguration.Content', props);
    return resource.getResponseField('Content') as unknown as any;
  }

  public get configurationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfiguration',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfiguration.ConfigurationVersion'),
        outputPath: 'ConfigurationVersion',
        parameters: {
          Application: this.input.application,
          Environment: this.input.environment,
          Configuration: this.input.configuration,
          ClientId: this.input.clientId,
          ClientConfigurationVersion: this.input.clientConfigurationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfiguration.ConfigurationVersion', props);
    return resource.getResponseField('ConfigurationVersion') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfiguration',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfiguration.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          Application: this.input.application,
          Environment: this.input.environment,
          Configuration: this.input.configuration,
          ClientId: this.input.clientId,
          ClientConfigurationVersion: this.input.clientConfigurationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfiguration.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class AppConfigFetchConfigurationProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigGetConfigurationProfileRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfigurationProfile.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationProfile.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfigurationProfile.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationProfile.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfigurationProfile.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationProfile.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfigurationProfile.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationProfile.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfigurationProfile.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationProfile.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get retrievalRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfigurationProfile.RetrievalRoleArn'),
        outputPath: 'RetrievalRoleArn',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationProfile.RetrievalRoleArn', props);
    return resource.getResponseField('RetrievalRoleArn') as unknown as string;
  }

  public get validators(): shapes.AppConfigValidator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetConfigurationProfile.Validators'),
        outputPath: 'Validators',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConfigurationProfile.Validators', props);
    return resource.getResponseField('Validators') as unknown as shapes.AppConfigValidator[];
  }

}

export class AppConfigFetchDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigGetDeploymentRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.EnvironmentId'),
        outputPath: 'EnvironmentId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.EnvironmentId', props);
    return resource.getResponseField('EnvironmentId') as unknown as string;
  }

  public get deploymentStrategyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.DeploymentStrategyId'),
        outputPath: 'DeploymentStrategyId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.DeploymentStrategyId', props);
    return resource.getResponseField('DeploymentStrategyId') as unknown as string;
  }

  public get configurationProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.ConfigurationProfileId'),
        outputPath: 'ConfigurationProfileId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.ConfigurationProfileId', props);
    return resource.getResponseField('ConfigurationProfileId') as unknown as string;
  }

  public get deploymentNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.DeploymentNumber'),
        outputPath: 'DeploymentNumber',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.DeploymentNumber', props);
    return resource.getResponseField('DeploymentNumber') as unknown as number;
  }

  public get configurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.ConfigurationName'),
        outputPath: 'ConfigurationName',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.ConfigurationName', props);
    return resource.getResponseField('ConfigurationName') as unknown as string;
  }

  public get configurationLocationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.ConfigurationLocationUri'),
        outputPath: 'ConfigurationLocationUri',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.ConfigurationLocationUri', props);
    return resource.getResponseField('ConfigurationLocationUri') as unknown as string;
  }

  public get configurationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.ConfigurationVersion'),
        outputPath: 'ConfigurationVersion',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.ConfigurationVersion', props);
    return resource.getResponseField('ConfigurationVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get deploymentDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.DeploymentDurationInMinutes'),
        outputPath: 'DeploymentDurationInMinutes',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.DeploymentDurationInMinutes', props);
    return resource.getResponseField('DeploymentDurationInMinutes') as unknown as number;
  }

  public get growthType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.GrowthType'),
        outputPath: 'GrowthType',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.GrowthType', props);
    return resource.getResponseField('GrowthType') as unknown as string;
  }

  public get growthFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.GrowthFactor'),
        outputPath: 'GrowthFactor',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.GrowthFactor', props);
    return resource.getResponseField('GrowthFactor') as unknown as number;
  }

  public get finalBakeTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.FinalBakeTimeInMinutes'),
        outputPath: 'FinalBakeTimeInMinutes',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.FinalBakeTimeInMinutes', props);
    return resource.getResponseField('FinalBakeTimeInMinutes') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.State'),
        outputPath: 'State',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get eventLog(): shapes.AppConfigDeploymentEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.EventLog'),
        outputPath: 'EventLog',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.EventLog', props);
    return resource.getResponseField('EventLog') as unknown as shapes.AppConfigDeploymentEvent[];
  }

  public get percentageComplete(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.PercentageComplete'),
        outputPath: 'PercentageComplete',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.PercentageComplete', props);
    return resource.getResponseField('PercentageComplete') as unknown as number;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.StartedAt'),
        outputPath: 'StartedAt',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

  public get completedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeployment.CompletedAt'),
        outputPath: 'CompletedAt',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployment.CompletedAt', props);
    return resource.getResponseField('CompletedAt') as unknown as string;
  }

}

export class AppConfigFetchDeploymentStrategy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigGetDeploymentStrategyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.Id'),
        outputPath: 'Id',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.Name'),
        outputPath: 'Name',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.Description'),
        outputPath: 'Description',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get deploymentDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.DeploymentDurationInMinutes'),
        outputPath: 'DeploymentDurationInMinutes',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.DeploymentDurationInMinutes', props);
    return resource.getResponseField('DeploymentDurationInMinutes') as unknown as number;
  }

  public get growthType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.GrowthType'),
        outputPath: 'GrowthType',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.GrowthType', props);
    return resource.getResponseField('GrowthType') as unknown as string;
  }

  public get growthFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.GrowthFactor'),
        outputPath: 'GrowthFactor',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.GrowthFactor', props);
    return resource.getResponseField('GrowthFactor') as unknown as number;
  }

  public get finalBakeTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.FinalBakeTimeInMinutes'),
        outputPath: 'FinalBakeTimeInMinutes',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.FinalBakeTimeInMinutes', props);
    return resource.getResponseField('FinalBakeTimeInMinutes') as unknown as number;
  }

  public get replicateTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetDeploymentStrategy.ReplicateTo'),
        outputPath: 'ReplicateTo',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeploymentStrategy.ReplicateTo', props);
    return resource.getResponseField('ReplicateTo') as unknown as string;
  }

}

export class AppConfigFetchEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigGetEnvironmentRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetEnvironment.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetEnvironment.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetEnvironment.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetEnvironment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetEnvironment.State'),
        outputPath: 'State',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get monitors(): shapes.AppConfigMonitor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetEnvironment.Monitors'),
        outputPath: 'Monitors',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEnvironment.Monitors', props);
    return resource.getResponseField('Monitors') as unknown as shapes.AppConfigMonitor[];
  }

}

export class AppConfigFetchHostedConfigurationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigGetHostedConfigurationVersionRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetHostedConfigurationVersion.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedConfigurationVersion.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get configurationProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetHostedConfigurationVersion.ConfigurationProfileId'),
        outputPath: 'ConfigurationProfileId',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedConfigurationVersion.ConfigurationProfileId', props);
    return resource.getResponseField('ConfigurationProfileId') as unknown as string;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetHostedConfigurationVersion.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedConfigurationVersion.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetHostedConfigurationVersion.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedConfigurationVersion.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get content(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetHostedConfigurationVersion.Content'),
        outputPath: 'Content',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedConfigurationVersion.Content', props);
    return resource.getResponseField('Content') as unknown as any;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostedConfigurationVersion',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.GetHostedConfigurationVersion.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostedConfigurationVersion.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class AppConfigListApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigListApplicationsRequest) {
    super(scope, id);
  }

  public get items(): shapes.AppConfigApplication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListApplications.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.AppConfigApplication[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListApplications.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigListConfigurationProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigListConfigurationProfilesRequest) {
    super(scope, id);
  }

  public get items(): shapes.AppConfigConfigurationProfileSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationProfiles',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListConfigurationProfiles.Items'),
        outputPath: 'Items',
        parameters: {
          ApplicationId: this.input.applicationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationProfiles.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.AppConfigConfigurationProfileSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationProfiles',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListConfigurationProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationId: this.input.applicationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigListDeploymentStrategies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigListDeploymentStrategiesRequest) {
    super(scope, id);
  }

  public get items(): shapes.AppConfigDeploymentStrategy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentStrategies',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListDeploymentStrategies.Items'),
        outputPath: 'Items',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentStrategies.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.AppConfigDeploymentStrategy[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentStrategies',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListDeploymentStrategies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentStrategies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigListDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigListDeploymentsRequest) {
    super(scope, id);
  }

  public get items(): shapes.AppConfigDeploymentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListDeployments.Items'),
        outputPath: 'Items',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeployments.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.AppConfigDeploymentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeployments',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListDeployments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigListEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigListEnvironmentsRequest) {
    super(scope, id);
  }

  public get items(): shapes.AppConfigEnvironment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListEnvironments.Items'),
        outputPath: 'Items',
        parameters: {
          ApplicationId: this.input.applicationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnvironments.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.AppConfigEnvironment[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListEnvironments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationId: this.input.applicationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigListHostedConfigurationVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigListHostedConfigurationVersionsRequest) {
    super(scope, id);
  }

  public get items(): shapes.AppConfigHostedConfigurationVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedConfigurationVersions',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListHostedConfigurationVersions.Items'),
        outputPath: 'Items',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedConfigurationVersions.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.AppConfigHostedConfigurationVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHostedConfigurationVersions',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListHostedConfigurationVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHostedConfigurationVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.ListTagsForResource.Tags'),
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

export class AppConfigStartDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigStartDeploymentRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.EnvironmentId'),
        outputPath: 'EnvironmentId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.EnvironmentId', props);
    return resource.getResponseField('EnvironmentId') as unknown as string;
  }

  public get deploymentStrategyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.DeploymentStrategyId'),
        outputPath: 'DeploymentStrategyId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.DeploymentStrategyId', props);
    return resource.getResponseField('DeploymentStrategyId') as unknown as string;
  }

  public get configurationProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.ConfigurationProfileId'),
        outputPath: 'ConfigurationProfileId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.ConfigurationProfileId', props);
    return resource.getResponseField('ConfigurationProfileId') as unknown as string;
  }

  public get deploymentNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.DeploymentNumber'),
        outputPath: 'DeploymentNumber',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.DeploymentNumber', props);
    return resource.getResponseField('DeploymentNumber') as unknown as number;
  }

  public get configurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.ConfigurationName'),
        outputPath: 'ConfigurationName',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.ConfigurationName', props);
    return resource.getResponseField('ConfigurationName') as unknown as string;
  }

  public get configurationLocationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.ConfigurationLocationUri'),
        outputPath: 'ConfigurationLocationUri',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.ConfigurationLocationUri', props);
    return resource.getResponseField('ConfigurationLocationUri') as unknown as string;
  }

  public get configurationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.ConfigurationVersion'),
        outputPath: 'ConfigurationVersion',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.ConfigurationVersion', props);
    return resource.getResponseField('ConfigurationVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get deploymentDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.DeploymentDurationInMinutes'),
        outputPath: 'DeploymentDurationInMinutes',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.DeploymentDurationInMinutes', props);
    return resource.getResponseField('DeploymentDurationInMinutes') as unknown as number;
  }

  public get growthType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.GrowthType'),
        outputPath: 'GrowthType',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.GrowthType', props);
    return resource.getResponseField('GrowthType') as unknown as string;
  }

  public get growthFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.GrowthFactor'),
        outputPath: 'GrowthFactor',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.GrowthFactor', props);
    return resource.getResponseField('GrowthFactor') as unknown as number;
  }

  public get finalBakeTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.FinalBakeTimeInMinutes'),
        outputPath: 'FinalBakeTimeInMinutes',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.FinalBakeTimeInMinutes', props);
    return resource.getResponseField('FinalBakeTimeInMinutes') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.State'),
        outputPath: 'State',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get eventLog(): shapes.AppConfigDeploymentEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.EventLog'),
        outputPath: 'EventLog',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.EventLog', props);
    return resource.getResponseField('EventLog') as unknown as shapes.AppConfigDeploymentEvent[];
  }

  public get percentageComplete(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.PercentageComplete'),
        outputPath: 'PercentageComplete',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.PercentageComplete', props);
    return resource.getResponseField('PercentageComplete') as unknown as number;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.StartedAt'),
        outputPath: 'StartedAt',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

  public get completedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StartDeployment.CompletedAt'),
        outputPath: 'CompletedAt',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentStrategyId: this.input.deploymentStrategyId,
          ConfigurationProfileId: this.input.configurationProfileId,
          ConfigurationVersion: this.input.configurationVersion,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDeployment.CompletedAt', props);
    return resource.getResponseField('CompletedAt') as unknown as string;
  }

}

export class AppConfigStopDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigStopDeploymentRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get environmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.EnvironmentId'),
        outputPath: 'EnvironmentId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.EnvironmentId', props);
    return resource.getResponseField('EnvironmentId') as unknown as string;
  }

  public get deploymentStrategyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.DeploymentStrategyId'),
        outputPath: 'DeploymentStrategyId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.DeploymentStrategyId', props);
    return resource.getResponseField('DeploymentStrategyId') as unknown as string;
  }

  public get configurationProfileId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.ConfigurationProfileId'),
        outputPath: 'ConfigurationProfileId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.ConfigurationProfileId', props);
    return resource.getResponseField('ConfigurationProfileId') as unknown as string;
  }

  public get deploymentNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.DeploymentNumber'),
        outputPath: 'DeploymentNumber',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.DeploymentNumber', props);
    return resource.getResponseField('DeploymentNumber') as unknown as number;
  }

  public get configurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.ConfigurationName'),
        outputPath: 'ConfigurationName',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.ConfigurationName', props);
    return resource.getResponseField('ConfigurationName') as unknown as string;
  }

  public get configurationLocationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.ConfigurationLocationUri'),
        outputPath: 'ConfigurationLocationUri',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.ConfigurationLocationUri', props);
    return resource.getResponseField('ConfigurationLocationUri') as unknown as string;
  }

  public get configurationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.ConfigurationVersion'),
        outputPath: 'ConfigurationVersion',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.ConfigurationVersion', props);
    return resource.getResponseField('ConfigurationVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get deploymentDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.DeploymentDurationInMinutes'),
        outputPath: 'DeploymentDurationInMinutes',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.DeploymentDurationInMinutes', props);
    return resource.getResponseField('DeploymentDurationInMinutes') as unknown as number;
  }

  public get growthType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.GrowthType'),
        outputPath: 'GrowthType',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.GrowthType', props);
    return resource.getResponseField('GrowthType') as unknown as string;
  }

  public get growthFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.GrowthFactor'),
        outputPath: 'GrowthFactor',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.GrowthFactor', props);
    return resource.getResponseField('GrowthFactor') as unknown as number;
  }

  public get finalBakeTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.FinalBakeTimeInMinutes'),
        outputPath: 'FinalBakeTimeInMinutes',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.FinalBakeTimeInMinutes', props);
    return resource.getResponseField('FinalBakeTimeInMinutes') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.State'),
        outputPath: 'State',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get eventLog(): shapes.AppConfigDeploymentEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.EventLog'),
        outputPath: 'EventLog',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.EventLog', props);
    return resource.getResponseField('EventLog') as unknown as shapes.AppConfigDeploymentEvent[];
  }

  public get percentageComplete(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.PercentageComplete'),
        outputPath: 'PercentageComplete',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.PercentageComplete', props);
    return resource.getResponseField('PercentageComplete') as unknown as number;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.StartedAt'),
        outputPath: 'StartedAt',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

  public get completedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDeployment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.StopDeployment.CompletedAt'),
        outputPath: 'CompletedAt',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          DeploymentNumber: this.input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDeployment.CompletedAt', props);
    return resource.getResponseField('CompletedAt') as unknown as string;
  }

}

export class AppConfigUpdateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigUpdateApplicationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateApplication.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateApplication.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateApplication.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          Name: this.input.name,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class AppConfigUpdateConfigurationProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigUpdateConfigurationProfileRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateConfigurationProfile.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Name: this.input.name,
          Description: this.input.description,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationProfile.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateConfigurationProfile.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Name: this.input.name,
          Description: this.input.description,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationProfile.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateConfigurationProfile.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Name: this.input.name,
          Description: this.input.description,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationProfile.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateConfigurationProfile.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Name: this.input.name,
          Description: this.input.description,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationProfile.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateConfigurationProfile.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Name: this.input.name,
          Description: this.input.description,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationProfile.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get retrievalRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateConfigurationProfile.RetrievalRoleArn'),
        outputPath: 'RetrievalRoleArn',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Name: this.input.name,
          Description: this.input.description,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationProfile.RetrievalRoleArn', props);
    return resource.getResponseField('RetrievalRoleArn') as unknown as string;
  }

  public get validators(): shapes.AppConfigValidator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfigurationProfile',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateConfigurationProfile.Validators'),
        outputPath: 'Validators',
        parameters: {
          ApplicationId: this.input.applicationId,
          ConfigurationProfileId: this.input.configurationProfileId,
          Name: this.input.name,
          Description: this.input.description,
          RetrievalRoleArn: this.input.retrievalRoleArn,
          Validators: this.input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfigurationProfile.Validators', props);
    return resource.getResponseField('Validators') as unknown as shapes.AppConfigValidator[];
  }

}

export class AppConfigUpdateDeploymentStrategy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigUpdateDeploymentStrategyRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.Id'),
        outputPath: 'Id',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.Name'),
        outputPath: 'Name',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.Description'),
        outputPath: 'Description',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get deploymentDurationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.DeploymentDurationInMinutes'),
        outputPath: 'DeploymentDurationInMinutes',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.DeploymentDurationInMinutes', props);
    return resource.getResponseField('DeploymentDurationInMinutes') as unknown as number;
  }

  public get growthType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.GrowthType'),
        outputPath: 'GrowthType',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.GrowthType', props);
    return resource.getResponseField('GrowthType') as unknown as string;
  }

  public get growthFactor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.GrowthFactor'),
        outputPath: 'GrowthFactor',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.GrowthFactor', props);
    return resource.getResponseField('GrowthFactor') as unknown as number;
  }

  public get finalBakeTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.FinalBakeTimeInMinutes'),
        outputPath: 'FinalBakeTimeInMinutes',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.FinalBakeTimeInMinutes', props);
    return resource.getResponseField('FinalBakeTimeInMinutes') as unknown as number;
  }

  public get replicateTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeploymentStrategy',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateDeploymentStrategy.ReplicateTo'),
        outputPath: 'ReplicateTo',
        parameters: {
          DeploymentStrategyId: this.input.deploymentStrategyId,
          Description: this.input.description,
          DeploymentDurationInMinutes: this.input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.input.finalBakeTimeInMinutes,
          GrowthFactor: this.input.growthFactor,
          GrowthType: this.input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeploymentStrategy.ReplicateTo', props);
    return resource.getResponseField('ReplicateTo') as unknown as string;
  }

}

export class AppConfigUpdateEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppConfigUpdateEnvironmentRequest) {
    super(scope, id);
  }

  public get applicationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateEnvironment.ApplicationId'),
        outputPath: 'ApplicationId',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.ApplicationId', props);
    return resource.getResponseField('ApplicationId') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateEnvironment.Id'),
        outputPath: 'Id',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateEnvironment.Name'),
        outputPath: 'Name',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateEnvironment.Description'),
        outputPath: 'Description',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateEnvironment.State'),
        outputPath: 'State',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get monitors(): shapes.AppConfigMonitor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'AppConfig',
        physicalResourceId: cr.PhysicalResourceId.of('AppConfig.UpdateEnvironment.Monitors'),
        outputPath: 'Monitors',
        parameters: {
          ApplicationId: this.input.applicationId,
          EnvironmentId: this.input.environmentId,
          Name: this.input.name,
          Description: this.input.description,
          Monitors: this.input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEnvironment.Monitors', props);
    return resource.getResponseField('Monitors') as unknown as shapes.AppConfigMonitor[];
  }

}

