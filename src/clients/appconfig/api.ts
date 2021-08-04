import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppConfigClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createApplication(input: shapes.AppConfigCreateApplicationRequest): AppConfigResponsesCreateApplication {
    return new AppConfigResponsesCreateApplication(this, this.__resources, input);
  }

  public createConfigurationProfile(input: shapes.AppConfigCreateConfigurationProfileRequest): AppConfigResponsesCreateConfigurationProfile {
    return new AppConfigResponsesCreateConfigurationProfile(this, this.__resources, input);
  }

  public createDeploymentStrategy(input: shapes.AppConfigCreateDeploymentStrategyRequest): AppConfigResponsesCreateDeploymentStrategy {
    return new AppConfigResponsesCreateDeploymentStrategy(this, this.__resources, input);
  }

  public createEnvironment(input: shapes.AppConfigCreateEnvironmentRequest): AppConfigResponsesCreateEnvironment {
    return new AppConfigResponsesCreateEnvironment(this, this.__resources, input);
  }

  public createHostedConfigurationVersion(input: shapes.AppConfigCreateHostedConfigurationVersionRequest): AppConfigResponsesCreateHostedConfigurationVersion {
    return new AppConfigResponsesCreateHostedConfigurationVersion(this, this.__resources, input);
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

  public fetchApplication(input: shapes.AppConfigGetApplicationRequest): AppConfigResponsesFetchApplication {
    return new AppConfigResponsesFetchApplication(this, this.__resources, input);
  }

  public fetchConfiguration(input: shapes.AppConfigGetConfigurationRequest): AppConfigResponsesFetchConfiguration {
    return new AppConfigResponsesFetchConfiguration(this, this.__resources, input);
  }

  public fetchConfigurationProfile(input: shapes.AppConfigGetConfigurationProfileRequest): AppConfigResponsesFetchConfigurationProfile {
    return new AppConfigResponsesFetchConfigurationProfile(this, this.__resources, input);
  }

  public fetchDeployment(input: shapes.AppConfigGetDeploymentRequest): AppConfigResponsesFetchDeployment {
    return new AppConfigResponsesFetchDeployment(this, this.__resources, input);
  }

  public fetchDeploymentStrategy(input: shapes.AppConfigGetDeploymentStrategyRequest): AppConfigResponsesFetchDeploymentStrategy {
    return new AppConfigResponsesFetchDeploymentStrategy(this, this.__resources, input);
  }

  public fetchEnvironment(input: shapes.AppConfigGetEnvironmentRequest): AppConfigResponsesFetchEnvironment {
    return new AppConfigResponsesFetchEnvironment(this, this.__resources, input);
  }

  public fetchHostedConfigurationVersion(input: shapes.AppConfigGetHostedConfigurationVersionRequest): AppConfigResponsesFetchHostedConfigurationVersion {
    return new AppConfigResponsesFetchHostedConfigurationVersion(this, this.__resources, input);
  }

  public listApplications(input: shapes.AppConfigListApplicationsRequest): AppConfigResponsesListApplications {
    return new AppConfigResponsesListApplications(this, this.__resources, input);
  }

  public listConfigurationProfiles(input: shapes.AppConfigListConfigurationProfilesRequest): AppConfigResponsesListConfigurationProfiles {
    return new AppConfigResponsesListConfigurationProfiles(this, this.__resources, input);
  }

  public listDeploymentStrategies(input: shapes.AppConfigListDeploymentStrategiesRequest): AppConfigResponsesListDeploymentStrategies {
    return new AppConfigResponsesListDeploymentStrategies(this, this.__resources, input);
  }

  public listDeployments(input: shapes.AppConfigListDeploymentsRequest): AppConfigResponsesListDeployments {
    return new AppConfigResponsesListDeployments(this, this.__resources, input);
  }

  public listEnvironments(input: shapes.AppConfigListEnvironmentsRequest): AppConfigResponsesListEnvironments {
    return new AppConfigResponsesListEnvironments(this, this.__resources, input);
  }

  public listHostedConfigurationVersions(input: shapes.AppConfigListHostedConfigurationVersionsRequest): AppConfigResponsesListHostedConfigurationVersions {
    return new AppConfigResponsesListHostedConfigurationVersions(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppConfigListTagsForResourceRequest): AppConfigResponsesListTagsForResource {
    return new AppConfigResponsesListTagsForResource(this, this.__resources, input);
  }

  public startDeployment(input: shapes.AppConfigStartDeploymentRequest): AppConfigResponsesStartDeployment {
    return new AppConfigResponsesStartDeployment(this, this.__resources, input);
  }

  public stopDeployment(input: shapes.AppConfigStopDeploymentRequest): AppConfigResponsesStopDeployment {
    return new AppConfigResponsesStopDeployment(this, this.__resources, input);
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

  public updateApplication(input: shapes.AppConfigUpdateApplicationRequest): AppConfigResponsesUpdateApplication {
    return new AppConfigResponsesUpdateApplication(this, this.__resources, input);
  }

  public updateConfigurationProfile(input: shapes.AppConfigUpdateConfigurationProfileRequest): AppConfigResponsesUpdateConfigurationProfile {
    return new AppConfigResponsesUpdateConfigurationProfile(this, this.__resources, input);
  }

  public updateDeploymentStrategy(input: shapes.AppConfigUpdateDeploymentStrategyRequest): AppConfigResponsesUpdateDeploymentStrategy {
    return new AppConfigResponsesUpdateDeploymentStrategy(this, this.__resources, input);
  }

  public updateEnvironment(input: shapes.AppConfigUpdateEnvironmentRequest): AppConfigResponsesUpdateEnvironment {
    return new AppConfigResponsesUpdateEnvironment(this, this.__resources, input);
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

export class AppConfigResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigCreateApplicationRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Id', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class AppConfigResponsesCreateConfigurationProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigCreateConfigurationProfileRequest) {
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          LocationUri: this.__input.locationUri,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationProfile.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          LocationUri: this.__input.locationUri,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationProfile.Id', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          LocationUri: this.__input.locationUri,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationProfile.Name', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          LocationUri: this.__input.locationUri,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationProfile.Description', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          LocationUri: this.__input.locationUri,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationProfile.LocationUri', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          LocationUri: this.__input.locationUri,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationProfile.RetrievalRoleArn', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          LocationUri: this.__input.locationUri,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfigurationProfile.Validators', props);
    return resource.getResponseField('Validators') as unknown as shapes.AppConfigValidator[];
  }

}

export class AppConfigResponsesCreateDeploymentStrategy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigCreateDeploymentStrategyRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.Id', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.Description', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.DeploymentDurationInMinutes', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.GrowthType', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.GrowthFactor', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.FinalBakeTimeInMinutes', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
          ReplicateTo: this.__input.replicateTo,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentStrategy.ReplicateTo', props);
    return resource.getResponseField('ReplicateTo') as unknown as string;
  }

}

export class AppConfigResponsesCreateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigCreateEnvironmentRequest) {
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Id', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Name', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Description', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.State', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.Monitors', props);
    return resource.getResponseField('Monitors') as unknown as shapes.AppConfigMonitor[];
  }

}

export class AppConfigResponsesCreateHostedConfigurationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigCreateHostedConfigurationVersionRequest) {
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Description: this.__input.description,
          Content: {
          },
          ContentType: this.__input.contentType,
          LatestVersionNumber: this.__input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedConfigurationVersion.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Description: this.__input.description,
          Content: {
          },
          ContentType: this.__input.contentType,
          LatestVersionNumber: this.__input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedConfigurationVersion.ConfigurationProfileId', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Description: this.__input.description,
          Content: {
          },
          ContentType: this.__input.contentType,
          LatestVersionNumber: this.__input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedConfigurationVersion.VersionNumber', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Description: this.__input.description,
          Content: {
          },
          ContentType: this.__input.contentType,
          LatestVersionNumber: this.__input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedConfigurationVersion.Description', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Description: this.__input.description,
          Content: {
          },
          ContentType: this.__input.contentType,
          LatestVersionNumber: this.__input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedConfigurationVersion.Content', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Description: this.__input.description,
          Content: {
          },
          ContentType: this.__input.contentType,
          LatestVersionNumber: this.__input.latestVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHostedConfigurationVersion.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class AppConfigResponsesFetchApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigGetApplicationRequest) {
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
          ApplicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.Id', props);
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
          ApplicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.Name', props);
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
          ApplicationId: this.__input.applicationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class AppConfigResponsesFetchConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigGetConfigurationRequest) {
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
          Application: this.__input.application,
          Environment: this.__input.environment,
          Configuration: this.__input.configuration,
          ClientId: this.__input.clientId,
          ClientConfigurationVersion: this.__input.clientConfigurationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfiguration.Content', props);
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
          Application: this.__input.application,
          Environment: this.__input.environment,
          Configuration: this.__input.configuration,
          ClientId: this.__input.clientId,
          ClientConfigurationVersion: this.__input.clientConfigurationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfiguration.ConfigurationVersion', props);
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
          Application: this.__input.application,
          Environment: this.__input.environment,
          Configuration: this.__input.configuration,
          ClientId: this.__input.clientId,
          ClientConfigurationVersion: this.__input.clientConfigurationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfiguration.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class AppConfigResponsesFetchConfigurationProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigGetConfigurationProfileRequest) {
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationProfile.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationProfile.Id', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationProfile.Name', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationProfile.Description', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationProfile.LocationUri', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationProfile.RetrievalRoleArn', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConfigurationProfile.Validators', props);
    return resource.getResponseField('Validators') as unknown as shapes.AppConfigValidator[];
  }

}

export class AppConfigResponsesFetchDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigGetDeploymentRequest) {
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.EnvironmentId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.DeploymentStrategyId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.ConfigurationProfileId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.DeploymentNumber', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.ConfigurationName', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.ConfigurationLocationUri', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.ConfigurationVersion', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.Description', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.DeploymentDurationInMinutes', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.GrowthType', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.GrowthFactor', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.FinalBakeTimeInMinutes', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.State', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.EventLog', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.PercentageComplete', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.StartedAt', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployment.CompletedAt', props);
    return resource.getResponseField('CompletedAt') as unknown as string;
  }

}

export class AppConfigResponsesFetchDeploymentStrategy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigGetDeploymentStrategyRequest) {
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.Id', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.Name', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.Description', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.DeploymentDurationInMinutes', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.GrowthType', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.GrowthFactor', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.FinalBakeTimeInMinutes', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeploymentStrategy.ReplicateTo', props);
    return resource.getResponseField('ReplicateTo') as unknown as string;
  }

}

export class AppConfigResponsesFetchEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigGetEnvironmentRequest) {
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Id', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Name', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Description', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.State', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.Monitors', props);
    return resource.getResponseField('Monitors') as unknown as shapes.AppConfigMonitor[];
  }

}

export class AppConfigResponsesFetchHostedConfigurationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigGetHostedConfigurationVersionRequest) {
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedConfigurationVersion.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedConfigurationVersion.ConfigurationProfileId', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedConfigurationVersion.VersionNumber', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedConfigurationVersion.Description', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedConfigurationVersion.Content', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostedConfigurationVersion.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

}

export class AppConfigResponsesListApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigListApplicationsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.Items', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigResponsesListConfigurationProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigListConfigurationProfilesRequest) {
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
          ApplicationId: this.__input.applicationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationProfiles.Items', props);
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
          ApplicationId: this.__input.applicationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigResponsesListDeploymentStrategies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigListDeploymentStrategiesRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentStrategies.Items', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentStrategies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigResponsesListDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigListDeploymentsRequest) {
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.Items', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeployments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigResponsesListEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigListEnvironmentsRequest) {
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
          ApplicationId: this.__input.applicationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.Items', props);
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
          ApplicationId: this.__input.applicationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigResponsesListHostedConfigurationVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigListHostedConfigurationVersionsRequest) {
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedConfigurationVersions.Items', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHostedConfigurationVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppConfigResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class AppConfigResponsesStartDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigStartDeploymentRequest) {
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.EnvironmentId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.DeploymentStrategyId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.ConfigurationProfileId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.DeploymentNumber', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.ConfigurationName', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.ConfigurationLocationUri', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.ConfigurationVersion', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.Description', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.DeploymentDurationInMinutes', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.GrowthType', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.GrowthFactor', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.FinalBakeTimeInMinutes', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.State', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.EventLog', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.PercentageComplete', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.StartedAt', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          ConfigurationVersion: this.__input.configurationVersion,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.CompletedAt', props);
    return resource.getResponseField('CompletedAt') as unknown as string;
  }

}

export class AppConfigResponsesStopDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigStopDeploymentRequest) {
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.EnvironmentId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.DeploymentStrategyId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.ConfigurationProfileId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.DeploymentNumber', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.ConfigurationName', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.ConfigurationLocationUri', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.ConfigurationVersion', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.Description', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.DeploymentDurationInMinutes', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.GrowthType', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.GrowthFactor', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.FinalBakeTimeInMinutes', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.State', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.EventLog', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.PercentageComplete', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.StartedAt', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          DeploymentNumber: this.__input.deploymentNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDeployment.CompletedAt', props);
    return resource.getResponseField('CompletedAt') as unknown as string;
  }

}

export class AppConfigResponsesUpdateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigUpdateApplicationRequest) {
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Id', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Name', props);
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
          ApplicationId: this.__input.applicationId,
          Name: this.__input.name,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class AppConfigResponsesUpdateConfigurationProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigUpdateConfigurationProfileRequest) {
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Name: this.__input.name,
          Description: this.__input.description,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationProfile.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Name: this.__input.name,
          Description: this.__input.description,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationProfile.Id', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Name: this.__input.name,
          Description: this.__input.description,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationProfile.Name', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Name: this.__input.name,
          Description: this.__input.description,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationProfile.Description', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Name: this.__input.name,
          Description: this.__input.description,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationProfile.LocationUri', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Name: this.__input.name,
          Description: this.__input.description,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationProfile.RetrievalRoleArn', props);
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
          ApplicationId: this.__input.applicationId,
          ConfigurationProfileId: this.__input.configurationProfileId,
          Name: this.__input.name,
          Description: this.__input.description,
          RetrievalRoleArn: this.__input.retrievalRoleArn,
          Validators: this.__input.validators,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfigurationProfile.Validators', props);
    return resource.getResponseField('Validators') as unknown as shapes.AppConfigValidator[];
  }

}

export class AppConfigResponsesUpdateDeploymentStrategy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigUpdateDeploymentStrategyRequest) {
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.Id', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.Name', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.Description', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.DeploymentDurationInMinutes', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.GrowthType', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.GrowthFactor', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.FinalBakeTimeInMinutes', props);
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
          DeploymentStrategyId: this.__input.deploymentStrategyId,
          Description: this.__input.description,
          DeploymentDurationInMinutes: this.__input.deploymentDurationInMinutes,
          FinalBakeTimeInMinutes: this.__input.finalBakeTimeInMinutes,
          GrowthFactor: this.__input.growthFactor,
          GrowthType: this.__input.growthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeploymentStrategy.ReplicateTo', props);
    return resource.getResponseField('ReplicateTo') as unknown as string;
  }

}

export class AppConfigResponsesUpdateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppConfigUpdateEnvironmentRequest) {
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.ApplicationId', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Id', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Name', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Description', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.State', props);
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
          ApplicationId: this.__input.applicationId,
          EnvironmentId: this.__input.environmentId,
          Name: this.__input.name,
          Description: this.__input.description,
          Monitors: this.__input.monitors,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.Monitors', props);
    return resource.getResponseField('Monitors') as unknown as shapes.AppConfigMonitor[];
  }

}

