import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ProtonClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptEnvironmentAccountConnection(input: shapes.ProtonAcceptEnvironmentAccountConnectionInput): ProtonResponsesAcceptEnvironmentAccountConnection {
    return new ProtonResponsesAcceptEnvironmentAccountConnection(this, this.__resources, input);
  }

  public cancelEnvironmentDeployment(input: shapes.ProtonCancelEnvironmentDeploymentInput): ProtonResponsesCancelEnvironmentDeployment {
    return new ProtonResponsesCancelEnvironmentDeployment(this, this.__resources, input);
  }

  public cancelServiceInstanceDeployment(input: shapes.ProtonCancelServiceInstanceDeploymentInput): ProtonResponsesCancelServiceInstanceDeployment {
    return new ProtonResponsesCancelServiceInstanceDeployment(this, this.__resources, input);
  }

  public cancelServicePipelineDeployment(input: shapes.ProtonCancelServicePipelineDeploymentInput): ProtonResponsesCancelServicePipelineDeployment {
    return new ProtonResponsesCancelServicePipelineDeployment(this, this.__resources, input);
  }

  public createEnvironment(input: shapes.ProtonCreateEnvironmentInput): ProtonResponsesCreateEnvironment {
    return new ProtonResponsesCreateEnvironment(this, this.__resources, input);
  }

  public createEnvironmentAccountConnection(input: shapes.ProtonCreateEnvironmentAccountConnectionInput): ProtonResponsesCreateEnvironmentAccountConnection {
    return new ProtonResponsesCreateEnvironmentAccountConnection(this, this.__resources, input);
  }

  public createEnvironmentTemplate(input: shapes.ProtonCreateEnvironmentTemplateInput): ProtonResponsesCreateEnvironmentTemplate {
    return new ProtonResponsesCreateEnvironmentTemplate(this, this.__resources, input);
  }

  public createEnvironmentTemplateVersion(input: shapes.ProtonCreateEnvironmentTemplateVersionInput): ProtonResponsesCreateEnvironmentTemplateVersion {
    return new ProtonResponsesCreateEnvironmentTemplateVersion(this, this.__resources, input);
  }

  public createService(input: shapes.ProtonCreateServiceInput): ProtonResponsesCreateService {
    return new ProtonResponsesCreateService(this, this.__resources, input);
  }

  public createServiceTemplate(input: shapes.ProtonCreateServiceTemplateInput): ProtonResponsesCreateServiceTemplate {
    return new ProtonResponsesCreateServiceTemplate(this, this.__resources, input);
  }

  public createServiceTemplateVersion(input: shapes.ProtonCreateServiceTemplateVersionInput): ProtonResponsesCreateServiceTemplateVersion {
    return new ProtonResponsesCreateServiceTemplateVersion(this, this.__resources, input);
  }

  public deleteEnvironment(input: shapes.ProtonDeleteEnvironmentInput): ProtonResponsesDeleteEnvironment {
    return new ProtonResponsesDeleteEnvironment(this, this.__resources, input);
  }

  public deleteEnvironmentAccountConnection(input: shapes.ProtonDeleteEnvironmentAccountConnectionInput): ProtonResponsesDeleteEnvironmentAccountConnection {
    return new ProtonResponsesDeleteEnvironmentAccountConnection(this, this.__resources, input);
  }

  public deleteEnvironmentTemplate(input: shapes.ProtonDeleteEnvironmentTemplateInput): ProtonResponsesDeleteEnvironmentTemplate {
    return new ProtonResponsesDeleteEnvironmentTemplate(this, this.__resources, input);
  }

  public deleteEnvironmentTemplateVersion(input: shapes.ProtonDeleteEnvironmentTemplateVersionInput): ProtonResponsesDeleteEnvironmentTemplateVersion {
    return new ProtonResponsesDeleteEnvironmentTemplateVersion(this, this.__resources, input);
  }

  public deleteService(input: shapes.ProtonDeleteServiceInput): ProtonResponsesDeleteService {
    return new ProtonResponsesDeleteService(this, this.__resources, input);
  }

  public deleteServiceTemplate(input: shapes.ProtonDeleteServiceTemplateInput): ProtonResponsesDeleteServiceTemplate {
    return new ProtonResponsesDeleteServiceTemplate(this, this.__resources, input);
  }

  public deleteServiceTemplateVersion(input: shapes.ProtonDeleteServiceTemplateVersionInput): ProtonResponsesDeleteServiceTemplateVersion {
    return new ProtonResponsesDeleteServiceTemplateVersion(this, this.__resources, input);
  }

  public fetchAccountSettings(): ProtonResponsesFetchAccountSettings {
    return new ProtonResponsesFetchAccountSettings(this, this.__resources);
  }

  public fetchEnvironment(input: shapes.ProtonGetEnvironmentInput): ProtonResponsesFetchEnvironment {
    return new ProtonResponsesFetchEnvironment(this, this.__resources, input);
  }

  public fetchEnvironmentAccountConnection(input: shapes.ProtonGetEnvironmentAccountConnectionInput): ProtonResponsesFetchEnvironmentAccountConnection {
    return new ProtonResponsesFetchEnvironmentAccountConnection(this, this.__resources, input);
  }

  public fetchEnvironmentTemplate(input: shapes.ProtonGetEnvironmentTemplateInput): ProtonResponsesFetchEnvironmentTemplate {
    return new ProtonResponsesFetchEnvironmentTemplate(this, this.__resources, input);
  }

  public fetchEnvironmentTemplateVersion(input: shapes.ProtonGetEnvironmentTemplateVersionInput): ProtonResponsesFetchEnvironmentTemplateVersion {
    return new ProtonResponsesFetchEnvironmentTemplateVersion(this, this.__resources, input);
  }

  public fetchService(input: shapes.ProtonGetServiceInput): ProtonResponsesFetchService {
    return new ProtonResponsesFetchService(this, this.__resources, input);
  }

  public fetchServiceInstance(input: shapes.ProtonGetServiceInstanceInput): ProtonResponsesFetchServiceInstance {
    return new ProtonResponsesFetchServiceInstance(this, this.__resources, input);
  }

  public fetchServiceTemplate(input: shapes.ProtonGetServiceTemplateInput): ProtonResponsesFetchServiceTemplate {
    return new ProtonResponsesFetchServiceTemplate(this, this.__resources, input);
  }

  public fetchServiceTemplateVersion(input: shapes.ProtonGetServiceTemplateVersionInput): ProtonResponsesFetchServiceTemplateVersion {
    return new ProtonResponsesFetchServiceTemplateVersion(this, this.__resources, input);
  }

  public listEnvironmentAccountConnections(input: shapes.ProtonListEnvironmentAccountConnectionsInput): ProtonResponsesListEnvironmentAccountConnections {
    return new ProtonResponsesListEnvironmentAccountConnections(this, this.__resources, input);
  }

  public listEnvironmentTemplateVersions(input: shapes.ProtonListEnvironmentTemplateVersionsInput): ProtonResponsesListEnvironmentTemplateVersions {
    return new ProtonResponsesListEnvironmentTemplateVersions(this, this.__resources, input);
  }

  public listEnvironmentTemplates(input: shapes.ProtonListEnvironmentTemplatesInput): ProtonResponsesListEnvironmentTemplates {
    return new ProtonResponsesListEnvironmentTemplates(this, this.__resources, input);
  }

  public listEnvironments(input: shapes.ProtonListEnvironmentsInput): ProtonResponsesListEnvironments {
    return new ProtonResponsesListEnvironments(this, this.__resources, input);
  }

  public listServiceInstances(input: shapes.ProtonListServiceInstancesInput): ProtonResponsesListServiceInstances {
    return new ProtonResponsesListServiceInstances(this, this.__resources, input);
  }

  public listServiceTemplateVersions(input: shapes.ProtonListServiceTemplateVersionsInput): ProtonResponsesListServiceTemplateVersions {
    return new ProtonResponsesListServiceTemplateVersions(this, this.__resources, input);
  }

  public listServiceTemplates(input: shapes.ProtonListServiceTemplatesInput): ProtonResponsesListServiceTemplates {
    return new ProtonResponsesListServiceTemplates(this, this.__resources, input);
  }

  public listServices(input: shapes.ProtonListServicesInput): ProtonResponsesListServices {
    return new ProtonResponsesListServices(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ProtonListTagsForResourceInput): ProtonResponsesListTagsForResource {
    return new ProtonResponsesListTagsForResource(this, this.__resources, input);
  }

  public rejectEnvironmentAccountConnection(input: shapes.ProtonRejectEnvironmentAccountConnectionInput): ProtonResponsesRejectEnvironmentAccountConnection {
    return new ProtonResponsesRejectEnvironmentAccountConnection(this, this.__resources, input);
  }

  public tagResource(input: shapes.ProtonTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ProtonUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAccountSettings(input: shapes.ProtonUpdateAccountSettingsInput): ProtonResponsesUpdateAccountSettings {
    return new ProtonResponsesUpdateAccountSettings(this, this.__resources, input);
  }

  public updateEnvironment(input: shapes.ProtonUpdateEnvironmentInput): ProtonResponsesUpdateEnvironment {
    return new ProtonResponsesUpdateEnvironment(this, this.__resources, input);
  }

  public updateEnvironmentAccountConnection(input: shapes.ProtonUpdateEnvironmentAccountConnectionInput): ProtonResponsesUpdateEnvironmentAccountConnection {
    return new ProtonResponsesUpdateEnvironmentAccountConnection(this, this.__resources, input);
  }

  public updateEnvironmentTemplate(input: shapes.ProtonUpdateEnvironmentTemplateInput): ProtonResponsesUpdateEnvironmentTemplate {
    return new ProtonResponsesUpdateEnvironmentTemplate(this, this.__resources, input);
  }

  public updateEnvironmentTemplateVersion(input: shapes.ProtonUpdateEnvironmentTemplateVersionInput): ProtonResponsesUpdateEnvironmentTemplateVersion {
    return new ProtonResponsesUpdateEnvironmentTemplateVersion(this, this.__resources, input);
  }

  public updateService(input: shapes.ProtonUpdateServiceInput): ProtonResponsesUpdateService {
    return new ProtonResponsesUpdateService(this, this.__resources, input);
  }

  public updateServiceInstance(input: shapes.ProtonUpdateServiceInstanceInput): ProtonResponsesUpdateServiceInstance {
    return new ProtonResponsesUpdateServiceInstance(this, this.__resources, input);
  }

  public updateServicePipeline(input: shapes.ProtonUpdateServicePipelineInput): ProtonResponsesUpdateServicePipeline {
    return new ProtonResponsesUpdateServicePipeline(this, this.__resources, input);
  }

  public updateServiceTemplate(input: shapes.ProtonUpdateServiceTemplateInput): ProtonResponsesUpdateServiceTemplate {
    return new ProtonResponsesUpdateServiceTemplate(this, this.__resources, input);
  }

  public updateServiceTemplateVersion(input: shapes.ProtonUpdateServiceTemplateVersionInput): ProtonResponsesUpdateServiceTemplateVersion {
    return new ProtonResponsesUpdateServiceTemplateVersion(this, this.__resources, input);
  }

}

export class ProtonResponsesAcceptEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonAcceptEnvironmentAccountConnectionInput) {
  }

  public get environmentAccountConnection(): ProtonResponsesAcceptEnvironmentAccountConnectionEnvironmentAccountConnection {
    return new ProtonResponsesAcceptEnvironmentAccountConnectionEnvironmentAccountConnection(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesAcceptEnvironmentAccountConnectionEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonAcceptEnvironmentAccountConnectionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.arn'),
        outputPath: 'environmentAccountConnection.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.arn', props);
    return resource.getResponseField('environmentAccountConnection.arn') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId'),
        outputPath: 'environmentAccountConnection.environmentAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId', props);
    return resource.getResponseField('environmentAccountConnection.environmentAccountId') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.environmentName'),
        outputPath: 'environmentAccountConnection.environmentName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.environmentName', props);
    return resource.getResponseField('environmentAccountConnection.environmentName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.id'),
        outputPath: 'environmentAccountConnection.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.id', props);
    return resource.getResponseField('environmentAccountConnection.id') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt'),
        outputPath: 'environmentAccountConnection.lastModifiedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt', props);
    return resource.getResponseField('environmentAccountConnection.lastModifiedAt') as unknown as string;
  }

  public get managementAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.managementAccountId'),
        outputPath: 'environmentAccountConnection.managementAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.managementAccountId', props);
    return resource.getResponseField('environmentAccountConnection.managementAccountId') as unknown as string;
  }

  public get requestedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.requestedAt'),
        outputPath: 'environmentAccountConnection.requestedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.requestedAt', props);
    return resource.getResponseField('environmentAccountConnection.requestedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.roleArn'),
        outputPath: 'environmentAccountConnection.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.roleArn', props);
    return resource.getResponseField('environmentAccountConnection.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.AcceptEnvironmentAccountConnection.environmentAccountConnection.status'),
        outputPath: 'environmentAccountConnection.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptEnvironmentAccountConnection.environmentAccountConnection.status', props);
    return resource.getResponseField('environmentAccountConnection.status') as unknown as string;
  }

}

export class ProtonResponsesCancelEnvironmentDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCancelEnvironmentDeploymentInput) {
  }

  public get environment(): ProtonResponsesCancelEnvironmentDeploymentEnvironment {
    return new ProtonResponsesCancelEnvironmentDeploymentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCancelEnvironmentDeploymentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCancelEnvironmentDeploymentInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.arn'),
        outputPath: 'environment.arn',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.arn', props);
    return resource.getResponseField('environment.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.createdAt'),
        outputPath: 'environment.createdAt',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.createdAt', props);
    return resource.getResponseField('environment.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.deploymentStatus'),
        outputPath: 'environment.deploymentStatus',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.deploymentStatus', props);
    return resource.getResponseField('environment.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.deploymentStatusMessage'),
        outputPath: 'environment.deploymentStatusMessage',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.deploymentStatusMessage', props);
    return resource.getResponseField('environment.deploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.description'),
        outputPath: 'environment.description',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.description', props);
    return resource.getResponseField('environment.description') as unknown as string;
  }

  public get environmentAccountConnectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.environmentAccountConnectionId'),
        outputPath: 'environment.environmentAccountConnectionId',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.environmentAccountConnectionId', props);
    return resource.getResponseField('environment.environmentAccountConnectionId') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.environmentAccountId'),
        outputPath: 'environment.environmentAccountId',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.environmentAccountId', props);
    return resource.getResponseField('environment.environmentAccountId') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.lastDeploymentAttemptedAt'),
        outputPath: 'environment.lastDeploymentAttemptedAt',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('environment.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.lastDeploymentSucceededAt'),
        outputPath: 'environment.lastDeploymentSucceededAt',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.lastDeploymentSucceededAt', props);
    return resource.getResponseField('environment.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.name'),
        outputPath: 'environment.name',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.name', props);
    return resource.getResponseField('environment.name') as unknown as string;
  }

  public get protonServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.protonServiceRoleArn'),
        outputPath: 'environment.protonServiceRoleArn',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.protonServiceRoleArn', props);
    return resource.getResponseField('environment.protonServiceRoleArn') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.provisioning'),
        outputPath: 'environment.provisioning',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.provisioning', props);
    return resource.getResponseField('environment.provisioning') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.spec'),
        outputPath: 'environment.spec',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.spec', props);
    return resource.getResponseField('environment.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.templateMajorVersion'),
        outputPath: 'environment.templateMajorVersion',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.templateMajorVersion', props);
    return resource.getResponseField('environment.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.templateMinorVersion'),
        outputPath: 'environment.templateMinorVersion',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.templateMinorVersion', props);
    return resource.getResponseField('environment.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelEnvironmentDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelEnvironmentDeployment.environment.templateName'),
        outputPath: 'environment.templateName',
        parameters: {
          environmentName: this.__input.environmentName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelEnvironmentDeployment.environment.templateName', props);
    return resource.getResponseField('environment.templateName') as unknown as string;
  }

}

export class ProtonResponsesCancelServiceInstanceDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCancelServiceInstanceDeploymentInput) {
  }

  public get serviceInstance(): ProtonResponsesCancelServiceInstanceDeploymentServiceInstance {
    return new ProtonResponsesCancelServiceInstanceDeploymentServiceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCancelServiceInstanceDeploymentServiceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCancelServiceInstanceDeploymentInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.arn'),
        outputPath: 'serviceInstance.arn',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.arn', props);
    return resource.getResponseField('serviceInstance.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.createdAt'),
        outputPath: 'serviceInstance.createdAt',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.createdAt', props);
    return resource.getResponseField('serviceInstance.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.deploymentStatus'),
        outputPath: 'serviceInstance.deploymentStatus',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.deploymentStatus', props);
    return resource.getResponseField('serviceInstance.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.deploymentStatusMessage'),
        outputPath: 'serviceInstance.deploymentStatusMessage',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.deploymentStatusMessage', props);
    return resource.getResponseField('serviceInstance.deploymentStatusMessage') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.environmentName'),
        outputPath: 'serviceInstance.environmentName',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.environmentName', props);
    return resource.getResponseField('serviceInstance.environmentName') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.lastDeploymentAttemptedAt'),
        outputPath: 'serviceInstance.lastDeploymentAttemptedAt',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('serviceInstance.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.lastDeploymentSucceededAt'),
        outputPath: 'serviceInstance.lastDeploymentSucceededAt',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.lastDeploymentSucceededAt', props);
    return resource.getResponseField('serviceInstance.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.name'),
        outputPath: 'serviceInstance.name',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.name', props);
    return resource.getResponseField('serviceInstance.name') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.serviceName'),
        outputPath: 'serviceInstance.serviceName',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.serviceName', props);
    return resource.getResponseField('serviceInstance.serviceName') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.spec'),
        outputPath: 'serviceInstance.spec',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.spec', props);
    return resource.getResponseField('serviceInstance.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.templateMajorVersion'),
        outputPath: 'serviceInstance.templateMajorVersion',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.templateMajorVersion', props);
    return resource.getResponseField('serviceInstance.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.templateMinorVersion'),
        outputPath: 'serviceInstance.templateMinorVersion',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.templateMinorVersion', props);
    return resource.getResponseField('serviceInstance.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServiceInstanceDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServiceInstanceDeployment.serviceInstance.templateName'),
        outputPath: 'serviceInstance.templateName',
        parameters: {
          serviceInstanceName: this.__input.serviceInstanceName,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServiceInstanceDeployment.serviceInstance.templateName', props);
    return resource.getResponseField('serviceInstance.templateName') as unknown as string;
  }

}

export class ProtonResponsesCancelServicePipelineDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCancelServicePipelineDeploymentInput) {
  }

  public get pipeline(): ProtonResponsesCancelServicePipelineDeploymentPipeline {
    return new ProtonResponsesCancelServicePipelineDeploymentPipeline(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCancelServicePipelineDeploymentPipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCancelServicePipelineDeploymentInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.arn'),
        outputPath: 'pipeline.arn',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.arn', props);
    return resource.getResponseField('pipeline.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.createdAt'),
        outputPath: 'pipeline.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.createdAt', props);
    return resource.getResponseField('pipeline.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.deploymentStatus'),
        outputPath: 'pipeline.deploymentStatus',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.deploymentStatus', props);
    return resource.getResponseField('pipeline.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.deploymentStatusMessage'),
        outputPath: 'pipeline.deploymentStatusMessage',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.deploymentStatusMessage', props);
    return resource.getResponseField('pipeline.deploymentStatusMessage') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.lastDeploymentAttemptedAt'),
        outputPath: 'pipeline.lastDeploymentAttemptedAt',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('pipeline.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.lastDeploymentSucceededAt'),
        outputPath: 'pipeline.lastDeploymentSucceededAt',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.lastDeploymentSucceededAt', props);
    return resource.getResponseField('pipeline.lastDeploymentSucceededAt') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.spec'),
        outputPath: 'pipeline.spec',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.spec', props);
    return resource.getResponseField('pipeline.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.templateMajorVersion'),
        outputPath: 'pipeline.templateMajorVersion',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.templateMajorVersion', props);
    return resource.getResponseField('pipeline.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.templateMinorVersion'),
        outputPath: 'pipeline.templateMinorVersion',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.templateMinorVersion', props);
    return resource.getResponseField('pipeline.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelServicePipelineDeployment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CancelServicePipelineDeployment.pipeline.templateName'),
        outputPath: 'pipeline.templateName',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelServicePipelineDeployment.pipeline.templateName', props);
    return resource.getResponseField('pipeline.templateName') as unknown as string;
  }

}

export class ProtonResponsesCreateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentInput) {
  }

  public get environment(): ProtonResponsesCreateEnvironmentEnvironment {
    return new ProtonResponsesCreateEnvironmentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCreateEnvironmentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.arn'),
        outputPath: 'environment.arn',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.arn', props);
    return resource.getResponseField('environment.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.createdAt'),
        outputPath: 'environment.createdAt',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.createdAt', props);
    return resource.getResponseField('environment.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.deploymentStatus'),
        outputPath: 'environment.deploymentStatus',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.deploymentStatus', props);
    return resource.getResponseField('environment.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.deploymentStatusMessage'),
        outputPath: 'environment.deploymentStatusMessage',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.deploymentStatusMessage', props);
    return resource.getResponseField('environment.deploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.description'),
        outputPath: 'environment.description',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.description', props);
    return resource.getResponseField('environment.description') as unknown as string;
  }

  public get environmentAccountConnectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.environmentAccountConnectionId'),
        outputPath: 'environment.environmentAccountConnectionId',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.environmentAccountConnectionId', props);
    return resource.getResponseField('environment.environmentAccountConnectionId') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.environmentAccountId'),
        outputPath: 'environment.environmentAccountId',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.environmentAccountId', props);
    return resource.getResponseField('environment.environmentAccountId') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.lastDeploymentAttemptedAt'),
        outputPath: 'environment.lastDeploymentAttemptedAt',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('environment.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.lastDeploymentSucceededAt'),
        outputPath: 'environment.lastDeploymentSucceededAt',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.lastDeploymentSucceededAt', props);
    return resource.getResponseField('environment.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.name'),
        outputPath: 'environment.name',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.name', props);
    return resource.getResponseField('environment.name') as unknown as string;
  }

  public get protonServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.protonServiceRoleArn'),
        outputPath: 'environment.protonServiceRoleArn',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.protonServiceRoleArn', props);
    return resource.getResponseField('environment.protonServiceRoleArn') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.provisioning'),
        outputPath: 'environment.provisioning',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.provisioning', props);
    return resource.getResponseField('environment.provisioning') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.spec'),
        outputPath: 'environment.spec',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.spec', props);
    return resource.getResponseField('environment.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.templateMajorVersion'),
        outputPath: 'environment.templateMajorVersion',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.templateMajorVersion', props);
    return resource.getResponseField('environment.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.templateMinorVersion'),
        outputPath: 'environment.templateMinorVersion',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.templateMinorVersion', props);
    return resource.getResponseField('environment.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironment.environment.templateName'),
        outputPath: 'environment.templateName',
        parameters: {
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironment.environment.templateName', props);
    return resource.getResponseField('environment.templateName') as unknown as string;
  }

}

export class ProtonResponsesCreateEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentAccountConnectionInput) {
  }

  public get environmentAccountConnection(): ProtonResponsesCreateEnvironmentAccountConnectionEnvironmentAccountConnection {
    return new ProtonResponsesCreateEnvironmentAccountConnectionEnvironmentAccountConnection(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCreateEnvironmentAccountConnectionEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentAccountConnectionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.arn'),
        outputPath: 'environmentAccountConnection.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.arn', props);
    return resource.getResponseField('environmentAccountConnection.arn') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId'),
        outputPath: 'environmentAccountConnection.environmentAccountId',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId', props);
    return resource.getResponseField('environmentAccountConnection.environmentAccountId') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.environmentName'),
        outputPath: 'environmentAccountConnection.environmentName',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.environmentName', props);
    return resource.getResponseField('environmentAccountConnection.environmentName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.id'),
        outputPath: 'environmentAccountConnection.id',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.id', props);
    return resource.getResponseField('environmentAccountConnection.id') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt'),
        outputPath: 'environmentAccountConnection.lastModifiedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt', props);
    return resource.getResponseField('environmentAccountConnection.lastModifiedAt') as unknown as string;
  }

  public get managementAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.managementAccountId'),
        outputPath: 'environmentAccountConnection.managementAccountId',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.managementAccountId', props);
    return resource.getResponseField('environmentAccountConnection.managementAccountId') as unknown as string;
  }

  public get requestedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.requestedAt'),
        outputPath: 'environmentAccountConnection.requestedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.requestedAt', props);
    return resource.getResponseField('environmentAccountConnection.requestedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.roleArn'),
        outputPath: 'environmentAccountConnection.roleArn',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.roleArn', props);
    return resource.getResponseField('environmentAccountConnection.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentAccountConnection.environmentAccountConnection.status'),
        outputPath: 'environmentAccountConnection.status',
        parameters: {
          clientToken: this.__input.clientToken,
          environmentName: this.__input.environmentName,
          managementAccountId: this.__input.managementAccountId,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentAccountConnection.environmentAccountConnection.status', props);
    return resource.getResponseField('environmentAccountConnection.status') as unknown as string;
  }

}

export class ProtonResponsesCreateEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentTemplateInput) {
  }

  public get environmentTemplate(): ProtonResponsesCreateEnvironmentTemplateEnvironmentTemplate {
    return new ProtonResponsesCreateEnvironmentTemplateEnvironmentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCreateEnvironmentTemplateEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.arn'),
        outputPath: 'environmentTemplate.arn',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.arn', props);
    return resource.getResponseField('environmentTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.createdAt'),
        outputPath: 'environmentTemplate.createdAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.createdAt', props);
    return resource.getResponseField('environmentTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.description'),
        outputPath: 'environmentTemplate.description',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.description', props);
    return resource.getResponseField('environmentTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.displayName'),
        outputPath: 'environmentTemplate.displayName',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.displayName', props);
    return resource.getResponseField('environmentTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.encryptionKey'),
        outputPath: 'environmentTemplate.encryptionKey',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.encryptionKey', props);
    return resource.getResponseField('environmentTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.lastModifiedAt'),
        outputPath: 'environmentTemplate.lastModifiedAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.name'),
        outputPath: 'environmentTemplate.name',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.name', props);
    return resource.getResponseField('environmentTemplate.name') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.provisioning'),
        outputPath: 'environmentTemplate.provisioning',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.provisioning', props);
    return resource.getResponseField('environmentTemplate.provisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplate.environmentTemplate.recommendedVersion'),
        outputPath: 'environmentTemplate.recommendedVersion',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          provisioning: this.__input.provisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplate.environmentTemplate.recommendedVersion', props);
    return resource.getResponseField('environmentTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesCreateEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentTemplateVersionInput) {
  }

  public get environmentTemplateVersion(): ProtonResponsesCreateEnvironmentTemplateVersionEnvironmentTemplateVersion {
    return new ProtonResponsesCreateEnvironmentTemplateVersionEnvironmentTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCreateEnvironmentTemplateVersionEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateEnvironmentTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.arn'),
        outputPath: 'environmentTemplateVersion.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.arn', props);
    return resource.getResponseField('environmentTemplateVersion.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.createdAt'),
        outputPath: 'environmentTemplateVersion.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.createdAt', props);
    return resource.getResponseField('environmentTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.description'),
        outputPath: 'environmentTemplateVersion.description',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.description', props);
    return resource.getResponseField('environmentTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt'),
        outputPath: 'environmentTemplateVersion.lastModifiedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion'),
        outputPath: 'environmentTemplateVersion.majorVersion',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion'),
        outputPath: 'environmentTemplateVersion.minorVersion',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion'),
        outputPath: 'environmentTemplateVersion.recommendedMinorVersion',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.schema'),
        outputPath: 'environmentTemplateVersion.schema',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.schema', props);
    return resource.getResponseField('environmentTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.status'),
        outputPath: 'environmentTemplateVersion.status',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.status', props);
    return resource.getResponseField('environmentTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage'),
        outputPath: 'environmentTemplateVersion.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage', props);
    return resource.getResponseField('environmentTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateEnvironmentTemplateVersion.environmentTemplateVersion.templateName'),
        outputPath: 'environmentTemplateVersion.templateName',
        parameters: {
          clientToken: this.__input.clientToken,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEnvironmentTemplateVersion.environmentTemplateVersion.templateName', props);
    return resource.getResponseField('environmentTemplateVersion.templateName') as unknown as string;
  }

}

export class ProtonResponsesCreateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateServiceInput) {
  }

  public get service(): ProtonResponsesCreateServiceService {
    return new ProtonResponsesCreateServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCreateServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.arn'),
        outputPath: 'service.arn',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.arn', props);
    return resource.getResponseField('service.arn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.branchName'),
        outputPath: 'service.branchName',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.branchName', props);
    return resource.getResponseField('service.branchName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.createdAt'),
        outputPath: 'service.createdAt',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.createdAt', props);
    return resource.getResponseField('service.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.description'),
        outputPath: 'service.description',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.description', props);
    return resource.getResponseField('service.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.lastModifiedAt'),
        outputPath: 'service.lastModifiedAt',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.lastModifiedAt', props);
    return resource.getResponseField('service.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.name'),
        outputPath: 'service.name',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.name', props);
    return resource.getResponseField('service.name') as unknown as string;
  }

  public get pipeline(): ProtonResponsesCreateServiceServicePipeline {
    return new ProtonResponsesCreateServiceServicePipeline(this.__scope, this.__resources, this.__input);
  }

  public get repositoryConnectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.repositoryConnectionArn'),
        outputPath: 'service.repositoryConnectionArn',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.repositoryConnectionArn', props);
    return resource.getResponseField('service.repositoryConnectionArn') as unknown as string;
  }

  public get repositoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.repositoryId'),
        outputPath: 'service.repositoryId',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.repositoryId', props);
    return resource.getResponseField('service.repositoryId') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.spec'),
        outputPath: 'service.spec',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.spec', props);
    return resource.getResponseField('service.spec') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.status'),
        outputPath: 'service.status',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.status', props);
    return resource.getResponseField('service.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.statusMessage'),
        outputPath: 'service.statusMessage',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.statusMessage', props);
    return resource.getResponseField('service.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.templateName'),
        outputPath: 'service.templateName',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.templateName', props);
    return resource.getResponseField('service.templateName') as unknown as string;
  }

}

export class ProtonResponsesCreateServiceServicePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.arn'),
        outputPath: 'service.pipeline.arn',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.arn', props);
    return resource.getResponseField('service.pipeline.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.createdAt'),
        outputPath: 'service.pipeline.createdAt',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.createdAt', props);
    return resource.getResponseField('service.pipeline.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.deploymentStatus'),
        outputPath: 'service.pipeline.deploymentStatus',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.deploymentStatus', props);
    return resource.getResponseField('service.pipeline.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.deploymentStatusMessage'),
        outputPath: 'service.pipeline.deploymentStatusMessage',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.deploymentStatusMessage', props);
    return resource.getResponseField('service.pipeline.deploymentStatusMessage') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.lastDeploymentAttemptedAt'),
        outputPath: 'service.pipeline.lastDeploymentAttemptedAt',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.lastDeploymentSucceededAt'),
        outputPath: 'service.pipeline.lastDeploymentSucceededAt',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.lastDeploymentSucceededAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentSucceededAt') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.spec'),
        outputPath: 'service.pipeline.spec',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.spec', props);
    return resource.getResponseField('service.pipeline.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.templateMajorVersion'),
        outputPath: 'service.pipeline.templateMajorVersion',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.templateMajorVersion', props);
    return resource.getResponseField('service.pipeline.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.templateMinorVersion'),
        outputPath: 'service.pipeline.templateMinorVersion',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.templateMinorVersion', props);
    return resource.getResponseField('service.pipeline.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateService.service.pipeline.templateName'),
        outputPath: 'service.pipeline.templateName',
        parameters: {
          branchName: this.__input.branchName,
          description: this.__input.description,
          name: this.__input.name,
          repositoryConnectionArn: this.__input.repositoryConnectionArn,
          repositoryId: this.__input.repositoryId,
          spec: this.__input.spec,
          tags: this.__input.tags,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.service.pipeline.templateName', props);
    return resource.getResponseField('service.pipeline.templateName') as unknown as string;
  }

}

export class ProtonResponsesCreateServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateServiceTemplateInput) {
  }

  public get serviceTemplate(): ProtonResponsesCreateServiceTemplateServiceTemplate {
    return new ProtonResponsesCreateServiceTemplateServiceTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCreateServiceTemplateServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateServiceTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.arn'),
        outputPath: 'serviceTemplate.arn',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.arn', props);
    return resource.getResponseField('serviceTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.createdAt'),
        outputPath: 'serviceTemplate.createdAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.createdAt', props);
    return resource.getResponseField('serviceTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.description'),
        outputPath: 'serviceTemplate.description',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.description', props);
    return resource.getResponseField('serviceTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.displayName'),
        outputPath: 'serviceTemplate.displayName',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.displayName', props);
    return resource.getResponseField('serviceTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.encryptionKey'),
        outputPath: 'serviceTemplate.encryptionKey',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.encryptionKey', props);
    return resource.getResponseField('serviceTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.lastModifiedAt'),
        outputPath: 'serviceTemplate.lastModifiedAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.name'),
        outputPath: 'serviceTemplate.name',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.name', props);
    return resource.getResponseField('serviceTemplate.name') as unknown as string;
  }

  public get pipelineProvisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.pipelineProvisioning'),
        outputPath: 'serviceTemplate.pipelineProvisioning',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.pipelineProvisioning', props);
    return resource.getResponseField('serviceTemplate.pipelineProvisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplate.serviceTemplate.recommendedVersion'),
        outputPath: 'serviceTemplate.recommendedVersion',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          encryptionKey: this.__input.encryptionKey,
          name: this.__input.name,
          pipelineProvisioning: this.__input.pipelineProvisioning,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplate.serviceTemplate.recommendedVersion', props);
    return resource.getResponseField('serviceTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesCreateServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateServiceTemplateVersionInput) {
  }

  public get serviceTemplateVersion(): ProtonResponsesCreateServiceTemplateVersionServiceTemplateVersion {
    return new ProtonResponsesCreateServiceTemplateVersionServiceTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesCreateServiceTemplateVersionServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonCreateServiceTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.arn'),
        outputPath: 'serviceTemplateVersion.arn',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.arn', props);
    return resource.getResponseField('serviceTemplateVersion.arn') as unknown as string;
  }

  public get compatibleEnvironmentTemplates(): shapes.ProtonCompatibleEnvironmentTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates'),
        outputPath: 'serviceTemplateVersion.compatibleEnvironmentTemplates',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates', props);
    return resource.getResponseField('serviceTemplateVersion.compatibleEnvironmentTemplates') as unknown as shapes.ProtonCompatibleEnvironmentTemplate[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.createdAt'),
        outputPath: 'serviceTemplateVersion.createdAt',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.createdAt', props);
    return resource.getResponseField('serviceTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.description'),
        outputPath: 'serviceTemplateVersion.description',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.description', props);
    return resource.getResponseField('serviceTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt'),
        outputPath: 'serviceTemplateVersion.lastModifiedAt',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.majorVersion'),
        outputPath: 'serviceTemplateVersion.majorVersion',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.majorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.minorVersion'),
        outputPath: 'serviceTemplateVersion.minorVersion',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.minorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion'),
        outputPath: 'serviceTemplateVersion.recommendedMinorVersion',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.schema'),
        outputPath: 'serviceTemplateVersion.schema',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.schema', props);
    return resource.getResponseField('serviceTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.status'),
        outputPath: 'serviceTemplateVersion.status',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.status', props);
    return resource.getResponseField('serviceTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.statusMessage'),
        outputPath: 'serviceTemplateVersion.statusMessage',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.statusMessage', props);
    return resource.getResponseField('serviceTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.CreateServiceTemplateVersion.serviceTemplateVersion.templateName'),
        outputPath: 'serviceTemplateVersion.templateName',
        parameters: {
          clientToken: this.__input.clientToken,
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          source: {
            s3: {
              bucket: this.__input.source.s3?.bucket,
              key: this.__input.source.s3?.key,
            },
          },
          tags: this.__input.tags,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceTemplateVersion.serviceTemplateVersion.templateName', props);
    return resource.getResponseField('serviceTemplateVersion.templateName') as unknown as string;
  }

}

export class ProtonResponsesDeleteEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentInput) {
  }

  public get environment(): ProtonResponsesDeleteEnvironmentEnvironment {
    return new ProtonResponsesDeleteEnvironmentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesDeleteEnvironmentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.arn'),
        outputPath: 'environment.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.arn', props);
    return resource.getResponseField('environment.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.createdAt'),
        outputPath: 'environment.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.createdAt', props);
    return resource.getResponseField('environment.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.deploymentStatus'),
        outputPath: 'environment.deploymentStatus',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.deploymentStatus', props);
    return resource.getResponseField('environment.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.deploymentStatusMessage'),
        outputPath: 'environment.deploymentStatusMessage',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.deploymentStatusMessage', props);
    return resource.getResponseField('environment.deploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.description'),
        outputPath: 'environment.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.description', props);
    return resource.getResponseField('environment.description') as unknown as string;
  }

  public get environmentAccountConnectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.environmentAccountConnectionId'),
        outputPath: 'environment.environmentAccountConnectionId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.environmentAccountConnectionId', props);
    return resource.getResponseField('environment.environmentAccountConnectionId') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.environmentAccountId'),
        outputPath: 'environment.environmentAccountId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.environmentAccountId', props);
    return resource.getResponseField('environment.environmentAccountId') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.lastDeploymentAttemptedAt'),
        outputPath: 'environment.lastDeploymentAttemptedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('environment.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.lastDeploymentSucceededAt'),
        outputPath: 'environment.lastDeploymentSucceededAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.lastDeploymentSucceededAt', props);
    return resource.getResponseField('environment.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.name'),
        outputPath: 'environment.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.name', props);
    return resource.getResponseField('environment.name') as unknown as string;
  }

  public get protonServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.protonServiceRoleArn'),
        outputPath: 'environment.protonServiceRoleArn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.protonServiceRoleArn', props);
    return resource.getResponseField('environment.protonServiceRoleArn') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.provisioning'),
        outputPath: 'environment.provisioning',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.provisioning', props);
    return resource.getResponseField('environment.provisioning') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.spec'),
        outputPath: 'environment.spec',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.spec', props);
    return resource.getResponseField('environment.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.templateMajorVersion'),
        outputPath: 'environment.templateMajorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.templateMajorVersion', props);
    return resource.getResponseField('environment.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.templateMinorVersion'),
        outputPath: 'environment.templateMinorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.templateMinorVersion', props);
    return resource.getResponseField('environment.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironment.environment.templateName'),
        outputPath: 'environment.templateName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironment.environment.templateName', props);
    return resource.getResponseField('environment.templateName') as unknown as string;
  }

}

export class ProtonResponsesDeleteEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentAccountConnectionInput) {
  }

  public get environmentAccountConnection(): ProtonResponsesDeleteEnvironmentAccountConnectionEnvironmentAccountConnection {
    return new ProtonResponsesDeleteEnvironmentAccountConnectionEnvironmentAccountConnection(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesDeleteEnvironmentAccountConnectionEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentAccountConnectionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.arn'),
        outputPath: 'environmentAccountConnection.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.arn', props);
    return resource.getResponseField('environmentAccountConnection.arn') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId'),
        outputPath: 'environmentAccountConnection.environmentAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId', props);
    return resource.getResponseField('environmentAccountConnection.environmentAccountId') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.environmentName'),
        outputPath: 'environmentAccountConnection.environmentName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.environmentName', props);
    return resource.getResponseField('environmentAccountConnection.environmentName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.id'),
        outputPath: 'environmentAccountConnection.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.id', props);
    return resource.getResponseField('environmentAccountConnection.id') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt'),
        outputPath: 'environmentAccountConnection.lastModifiedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt', props);
    return resource.getResponseField('environmentAccountConnection.lastModifiedAt') as unknown as string;
  }

  public get managementAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.managementAccountId'),
        outputPath: 'environmentAccountConnection.managementAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.managementAccountId', props);
    return resource.getResponseField('environmentAccountConnection.managementAccountId') as unknown as string;
  }

  public get requestedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.requestedAt'),
        outputPath: 'environmentAccountConnection.requestedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.requestedAt', props);
    return resource.getResponseField('environmentAccountConnection.requestedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.roleArn'),
        outputPath: 'environmentAccountConnection.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.roleArn', props);
    return resource.getResponseField('environmentAccountConnection.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentAccountConnection.environmentAccountConnection.status'),
        outputPath: 'environmentAccountConnection.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentAccountConnection.environmentAccountConnection.status', props);
    return resource.getResponseField('environmentAccountConnection.status') as unknown as string;
  }

}

export class ProtonResponsesDeleteEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentTemplateInput) {
  }

  public get environmentTemplate(): ProtonResponsesDeleteEnvironmentTemplateEnvironmentTemplate {
    return new ProtonResponsesDeleteEnvironmentTemplateEnvironmentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesDeleteEnvironmentTemplateEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.arn'),
        outputPath: 'environmentTemplate.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.arn', props);
    return resource.getResponseField('environmentTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.createdAt'),
        outputPath: 'environmentTemplate.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.createdAt', props);
    return resource.getResponseField('environmentTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.description'),
        outputPath: 'environmentTemplate.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.description', props);
    return resource.getResponseField('environmentTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.displayName'),
        outputPath: 'environmentTemplate.displayName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.displayName', props);
    return resource.getResponseField('environmentTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.encryptionKey'),
        outputPath: 'environmentTemplate.encryptionKey',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.encryptionKey', props);
    return resource.getResponseField('environmentTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.lastModifiedAt'),
        outputPath: 'environmentTemplate.lastModifiedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.name'),
        outputPath: 'environmentTemplate.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.name', props);
    return resource.getResponseField('environmentTemplate.name') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.provisioning'),
        outputPath: 'environmentTemplate.provisioning',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.provisioning', props);
    return resource.getResponseField('environmentTemplate.provisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplate.environmentTemplate.recommendedVersion'),
        outputPath: 'environmentTemplate.recommendedVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplate.environmentTemplate.recommendedVersion', props);
    return resource.getResponseField('environmentTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesDeleteEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentTemplateVersionInput) {
  }

  public get environmentTemplateVersion(): ProtonResponsesDeleteEnvironmentTemplateVersionEnvironmentTemplateVersion {
    return new ProtonResponsesDeleteEnvironmentTemplateVersionEnvironmentTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesDeleteEnvironmentTemplateVersionEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteEnvironmentTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.arn'),
        outputPath: 'environmentTemplateVersion.arn',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.arn', props);
    return resource.getResponseField('environmentTemplateVersion.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.createdAt'),
        outputPath: 'environmentTemplateVersion.createdAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.createdAt', props);
    return resource.getResponseField('environmentTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.description'),
        outputPath: 'environmentTemplateVersion.description',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.description', props);
    return resource.getResponseField('environmentTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt'),
        outputPath: 'environmentTemplateVersion.lastModifiedAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion'),
        outputPath: 'environmentTemplateVersion.majorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion'),
        outputPath: 'environmentTemplateVersion.minorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion'),
        outputPath: 'environmentTemplateVersion.recommendedMinorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.schema'),
        outputPath: 'environmentTemplateVersion.schema',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.schema', props);
    return resource.getResponseField('environmentTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.status'),
        outputPath: 'environmentTemplateVersion.status',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.status', props);
    return resource.getResponseField('environmentTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage'),
        outputPath: 'environmentTemplateVersion.statusMessage',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage', props);
    return resource.getResponseField('environmentTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteEnvironmentTemplateVersion.environmentTemplateVersion.templateName'),
        outputPath: 'environmentTemplateVersion.templateName',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEnvironmentTemplateVersion.environmentTemplateVersion.templateName', props);
    return resource.getResponseField('environmentTemplateVersion.templateName') as unknown as string;
  }

}

export class ProtonResponsesDeleteService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteServiceInput) {
  }

  public get service(): ProtonResponsesDeleteServiceService {
    return new ProtonResponsesDeleteServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesDeleteServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.arn'),
        outputPath: 'service.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.arn', props);
    return resource.getResponseField('service.arn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.branchName'),
        outputPath: 'service.branchName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.branchName', props);
    return resource.getResponseField('service.branchName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.createdAt'),
        outputPath: 'service.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.createdAt', props);
    return resource.getResponseField('service.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.description'),
        outputPath: 'service.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.description', props);
    return resource.getResponseField('service.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.lastModifiedAt'),
        outputPath: 'service.lastModifiedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.lastModifiedAt', props);
    return resource.getResponseField('service.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.name'),
        outputPath: 'service.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.name', props);
    return resource.getResponseField('service.name') as unknown as string;
  }

  public get pipeline(): ProtonResponsesDeleteServiceServicePipeline {
    return new ProtonResponsesDeleteServiceServicePipeline(this.__scope, this.__resources, this.__input);
  }

  public get repositoryConnectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.repositoryConnectionArn'),
        outputPath: 'service.repositoryConnectionArn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.repositoryConnectionArn', props);
    return resource.getResponseField('service.repositoryConnectionArn') as unknown as string;
  }

  public get repositoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.repositoryId'),
        outputPath: 'service.repositoryId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.repositoryId', props);
    return resource.getResponseField('service.repositoryId') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.spec'),
        outputPath: 'service.spec',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.spec', props);
    return resource.getResponseField('service.spec') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.status'),
        outputPath: 'service.status',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.status', props);
    return resource.getResponseField('service.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.statusMessage'),
        outputPath: 'service.statusMessage',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.statusMessage', props);
    return resource.getResponseField('service.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.templateName'),
        outputPath: 'service.templateName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.templateName', props);
    return resource.getResponseField('service.templateName') as unknown as string;
  }

}

export class ProtonResponsesDeleteServiceServicePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.arn'),
        outputPath: 'service.pipeline.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.arn', props);
    return resource.getResponseField('service.pipeline.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.createdAt'),
        outputPath: 'service.pipeline.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.createdAt', props);
    return resource.getResponseField('service.pipeline.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.deploymentStatus'),
        outputPath: 'service.pipeline.deploymentStatus',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.deploymentStatus', props);
    return resource.getResponseField('service.pipeline.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.deploymentStatusMessage'),
        outputPath: 'service.pipeline.deploymentStatusMessage',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.deploymentStatusMessage', props);
    return resource.getResponseField('service.pipeline.deploymentStatusMessage') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.lastDeploymentAttemptedAt'),
        outputPath: 'service.pipeline.lastDeploymentAttemptedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.lastDeploymentSucceededAt'),
        outputPath: 'service.pipeline.lastDeploymentSucceededAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.lastDeploymentSucceededAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentSucceededAt') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.spec'),
        outputPath: 'service.pipeline.spec',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.spec', props);
    return resource.getResponseField('service.pipeline.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.templateMajorVersion'),
        outputPath: 'service.pipeline.templateMajorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.templateMajorVersion', props);
    return resource.getResponseField('service.pipeline.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.templateMinorVersion'),
        outputPath: 'service.pipeline.templateMinorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.templateMinorVersion', props);
    return resource.getResponseField('service.pipeline.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteService.service.pipeline.templateName'),
        outputPath: 'service.pipeline.templateName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.service.pipeline.templateName', props);
    return resource.getResponseField('service.pipeline.templateName') as unknown as string;
  }

}

export class ProtonResponsesDeleteServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteServiceTemplateInput) {
  }

  public get serviceTemplate(): ProtonResponsesDeleteServiceTemplateServiceTemplate {
    return new ProtonResponsesDeleteServiceTemplateServiceTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesDeleteServiceTemplateServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteServiceTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.arn'),
        outputPath: 'serviceTemplate.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.arn', props);
    return resource.getResponseField('serviceTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.createdAt'),
        outputPath: 'serviceTemplate.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.createdAt', props);
    return resource.getResponseField('serviceTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.description'),
        outputPath: 'serviceTemplate.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.description', props);
    return resource.getResponseField('serviceTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.displayName'),
        outputPath: 'serviceTemplate.displayName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.displayName', props);
    return resource.getResponseField('serviceTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.encryptionKey'),
        outputPath: 'serviceTemplate.encryptionKey',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.encryptionKey', props);
    return resource.getResponseField('serviceTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.lastModifiedAt'),
        outputPath: 'serviceTemplate.lastModifiedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.name'),
        outputPath: 'serviceTemplate.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.name', props);
    return resource.getResponseField('serviceTemplate.name') as unknown as string;
  }

  public get pipelineProvisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.pipelineProvisioning'),
        outputPath: 'serviceTemplate.pipelineProvisioning',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.pipelineProvisioning', props);
    return resource.getResponseField('serviceTemplate.pipelineProvisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplate.serviceTemplate.recommendedVersion'),
        outputPath: 'serviceTemplate.recommendedVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplate.serviceTemplate.recommendedVersion', props);
    return resource.getResponseField('serviceTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesDeleteServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteServiceTemplateVersionInput) {
  }

  public get serviceTemplateVersion(): ProtonResponsesDeleteServiceTemplateVersionServiceTemplateVersion {
    return new ProtonResponsesDeleteServiceTemplateVersionServiceTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesDeleteServiceTemplateVersionServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonDeleteServiceTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.arn'),
        outputPath: 'serviceTemplateVersion.arn',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.arn', props);
    return resource.getResponseField('serviceTemplateVersion.arn') as unknown as string;
  }

  public get compatibleEnvironmentTemplates(): shapes.ProtonCompatibleEnvironmentTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates'),
        outputPath: 'serviceTemplateVersion.compatibleEnvironmentTemplates',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates', props);
    return resource.getResponseField('serviceTemplateVersion.compatibleEnvironmentTemplates') as unknown as shapes.ProtonCompatibleEnvironmentTemplate[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.createdAt'),
        outputPath: 'serviceTemplateVersion.createdAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.createdAt', props);
    return resource.getResponseField('serviceTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.description'),
        outputPath: 'serviceTemplateVersion.description',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.description', props);
    return resource.getResponseField('serviceTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt'),
        outputPath: 'serviceTemplateVersion.lastModifiedAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.majorVersion'),
        outputPath: 'serviceTemplateVersion.majorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.majorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.minorVersion'),
        outputPath: 'serviceTemplateVersion.minorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.minorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion'),
        outputPath: 'serviceTemplateVersion.recommendedMinorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.schema'),
        outputPath: 'serviceTemplateVersion.schema',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.schema', props);
    return resource.getResponseField('serviceTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.status'),
        outputPath: 'serviceTemplateVersion.status',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.status', props);
    return resource.getResponseField('serviceTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.statusMessage'),
        outputPath: 'serviceTemplateVersion.statusMessage',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.statusMessage', props);
    return resource.getResponseField('serviceTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.DeleteServiceTemplateVersion.serviceTemplateVersion.templateName'),
        outputPath: 'serviceTemplateVersion.templateName',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteServiceTemplateVersion.serviceTemplateVersion.templateName', props);
    return resource.getResponseField('serviceTemplateVersion.templateName') as unknown as string;
  }

}

export class ProtonResponsesFetchAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get accountSettings(): ProtonResponsesFetchAccountSettingsAccountSettings {
    return new ProtonResponsesFetchAccountSettingsAccountSettings(this.__scope, this.__resources);
  }

}

export class ProtonResponsesFetchAccountSettingsAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get pipelineServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetAccountSettings.accountSettings.pipelineServiceRoleArn'),
        outputPath: 'accountSettings.pipelineServiceRoleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.pipelineServiceRoleArn', props);
    return resource.getResponseField('accountSettings.pipelineServiceRoleArn') as unknown as string;
  }

}

export class ProtonResponsesFetchEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentInput) {
  }

  public get environment(): ProtonResponsesFetchEnvironmentEnvironment {
    return new ProtonResponsesFetchEnvironmentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchEnvironmentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.arn'),
        outputPath: 'environment.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.arn', props);
    return resource.getResponseField('environment.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.createdAt'),
        outputPath: 'environment.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.createdAt', props);
    return resource.getResponseField('environment.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.deploymentStatus'),
        outputPath: 'environment.deploymentStatus',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.deploymentStatus', props);
    return resource.getResponseField('environment.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.deploymentStatusMessage'),
        outputPath: 'environment.deploymentStatusMessage',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.deploymentStatusMessage', props);
    return resource.getResponseField('environment.deploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.description'),
        outputPath: 'environment.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.description', props);
    return resource.getResponseField('environment.description') as unknown as string;
  }

  public get environmentAccountConnectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.environmentAccountConnectionId'),
        outputPath: 'environment.environmentAccountConnectionId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.environmentAccountConnectionId', props);
    return resource.getResponseField('environment.environmentAccountConnectionId') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.environmentAccountId'),
        outputPath: 'environment.environmentAccountId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.environmentAccountId', props);
    return resource.getResponseField('environment.environmentAccountId') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.lastDeploymentAttemptedAt'),
        outputPath: 'environment.lastDeploymentAttemptedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('environment.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.lastDeploymentSucceededAt'),
        outputPath: 'environment.lastDeploymentSucceededAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.lastDeploymentSucceededAt', props);
    return resource.getResponseField('environment.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.name'),
        outputPath: 'environment.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.name', props);
    return resource.getResponseField('environment.name') as unknown as string;
  }

  public get protonServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.protonServiceRoleArn'),
        outputPath: 'environment.protonServiceRoleArn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.protonServiceRoleArn', props);
    return resource.getResponseField('environment.protonServiceRoleArn') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.provisioning'),
        outputPath: 'environment.provisioning',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.provisioning', props);
    return resource.getResponseField('environment.provisioning') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.spec'),
        outputPath: 'environment.spec',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.spec', props);
    return resource.getResponseField('environment.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.templateMajorVersion'),
        outputPath: 'environment.templateMajorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.templateMajorVersion', props);
    return resource.getResponseField('environment.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.templateMinorVersion'),
        outputPath: 'environment.templateMinorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.templateMinorVersion', props);
    return resource.getResponseField('environment.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironment.environment.templateName'),
        outputPath: 'environment.templateName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironment.environment.templateName', props);
    return resource.getResponseField('environment.templateName') as unknown as string;
  }

}

export class ProtonResponsesFetchEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentAccountConnectionInput) {
  }

  public get environmentAccountConnection(): ProtonResponsesFetchEnvironmentAccountConnectionEnvironmentAccountConnection {
    return new ProtonResponsesFetchEnvironmentAccountConnectionEnvironmentAccountConnection(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchEnvironmentAccountConnectionEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentAccountConnectionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.arn'),
        outputPath: 'environmentAccountConnection.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.arn', props);
    return resource.getResponseField('environmentAccountConnection.arn') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId'),
        outputPath: 'environmentAccountConnection.environmentAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId', props);
    return resource.getResponseField('environmentAccountConnection.environmentAccountId') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.environmentName'),
        outputPath: 'environmentAccountConnection.environmentName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.environmentName', props);
    return resource.getResponseField('environmentAccountConnection.environmentName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.id'),
        outputPath: 'environmentAccountConnection.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.id', props);
    return resource.getResponseField('environmentAccountConnection.id') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt'),
        outputPath: 'environmentAccountConnection.lastModifiedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt', props);
    return resource.getResponseField('environmentAccountConnection.lastModifiedAt') as unknown as string;
  }

  public get managementAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.managementAccountId'),
        outputPath: 'environmentAccountConnection.managementAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.managementAccountId', props);
    return resource.getResponseField('environmentAccountConnection.managementAccountId') as unknown as string;
  }

  public get requestedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.requestedAt'),
        outputPath: 'environmentAccountConnection.requestedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.requestedAt', props);
    return resource.getResponseField('environmentAccountConnection.requestedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.roleArn'),
        outputPath: 'environmentAccountConnection.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.roleArn', props);
    return resource.getResponseField('environmentAccountConnection.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentAccountConnection.environmentAccountConnection.status'),
        outputPath: 'environmentAccountConnection.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentAccountConnection.environmentAccountConnection.status', props);
    return resource.getResponseField('environmentAccountConnection.status') as unknown as string;
  }

}

export class ProtonResponsesFetchEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentTemplateInput) {
  }

  public get environmentTemplate(): ProtonResponsesFetchEnvironmentTemplateEnvironmentTemplate {
    return new ProtonResponsesFetchEnvironmentTemplateEnvironmentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchEnvironmentTemplateEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.arn'),
        outputPath: 'environmentTemplate.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.arn', props);
    return resource.getResponseField('environmentTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.createdAt'),
        outputPath: 'environmentTemplate.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.createdAt', props);
    return resource.getResponseField('environmentTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.description'),
        outputPath: 'environmentTemplate.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.description', props);
    return resource.getResponseField('environmentTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.displayName'),
        outputPath: 'environmentTemplate.displayName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.displayName', props);
    return resource.getResponseField('environmentTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.encryptionKey'),
        outputPath: 'environmentTemplate.encryptionKey',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.encryptionKey', props);
    return resource.getResponseField('environmentTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.lastModifiedAt'),
        outputPath: 'environmentTemplate.lastModifiedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.name'),
        outputPath: 'environmentTemplate.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.name', props);
    return resource.getResponseField('environmentTemplate.name') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.provisioning'),
        outputPath: 'environmentTemplate.provisioning',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.provisioning', props);
    return resource.getResponseField('environmentTemplate.provisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplate.environmentTemplate.recommendedVersion'),
        outputPath: 'environmentTemplate.recommendedVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplate.environmentTemplate.recommendedVersion', props);
    return resource.getResponseField('environmentTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesFetchEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentTemplateVersionInput) {
  }

  public get environmentTemplateVersion(): ProtonResponsesFetchEnvironmentTemplateVersionEnvironmentTemplateVersion {
    return new ProtonResponsesFetchEnvironmentTemplateVersionEnvironmentTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchEnvironmentTemplateVersionEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetEnvironmentTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.arn'),
        outputPath: 'environmentTemplateVersion.arn',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.arn', props);
    return resource.getResponseField('environmentTemplateVersion.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.createdAt'),
        outputPath: 'environmentTemplateVersion.createdAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.createdAt', props);
    return resource.getResponseField('environmentTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.description'),
        outputPath: 'environmentTemplateVersion.description',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.description', props);
    return resource.getResponseField('environmentTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt'),
        outputPath: 'environmentTemplateVersion.lastModifiedAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion'),
        outputPath: 'environmentTemplateVersion.majorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion'),
        outputPath: 'environmentTemplateVersion.minorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion'),
        outputPath: 'environmentTemplateVersion.recommendedMinorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.schema'),
        outputPath: 'environmentTemplateVersion.schema',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.schema', props);
    return resource.getResponseField('environmentTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.status'),
        outputPath: 'environmentTemplateVersion.status',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.status', props);
    return resource.getResponseField('environmentTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage'),
        outputPath: 'environmentTemplateVersion.statusMessage',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage', props);
    return resource.getResponseField('environmentTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetEnvironmentTemplateVersion.environmentTemplateVersion.templateName'),
        outputPath: 'environmentTemplateVersion.templateName',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEnvironmentTemplateVersion.environmentTemplateVersion.templateName', props);
    return resource.getResponseField('environmentTemplateVersion.templateName') as unknown as string;
  }

}

export class ProtonResponsesFetchService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceInput) {
  }

  public get service(): ProtonResponsesFetchServiceService {
    return new ProtonResponsesFetchServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.arn'),
        outputPath: 'service.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.arn', props);
    return resource.getResponseField('service.arn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.branchName'),
        outputPath: 'service.branchName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.branchName', props);
    return resource.getResponseField('service.branchName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.createdAt'),
        outputPath: 'service.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.createdAt', props);
    return resource.getResponseField('service.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.description'),
        outputPath: 'service.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.description', props);
    return resource.getResponseField('service.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.lastModifiedAt'),
        outputPath: 'service.lastModifiedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.lastModifiedAt', props);
    return resource.getResponseField('service.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.name'),
        outputPath: 'service.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.name', props);
    return resource.getResponseField('service.name') as unknown as string;
  }

  public get pipeline(): ProtonResponsesFetchServiceServicePipeline {
    return new ProtonResponsesFetchServiceServicePipeline(this.__scope, this.__resources, this.__input);
  }

  public get repositoryConnectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.repositoryConnectionArn'),
        outputPath: 'service.repositoryConnectionArn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.repositoryConnectionArn', props);
    return resource.getResponseField('service.repositoryConnectionArn') as unknown as string;
  }

  public get repositoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.repositoryId'),
        outputPath: 'service.repositoryId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.repositoryId', props);
    return resource.getResponseField('service.repositoryId') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.spec'),
        outputPath: 'service.spec',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.spec', props);
    return resource.getResponseField('service.spec') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.status'),
        outputPath: 'service.status',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.status', props);
    return resource.getResponseField('service.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.statusMessage'),
        outputPath: 'service.statusMessage',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.statusMessage', props);
    return resource.getResponseField('service.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.templateName'),
        outputPath: 'service.templateName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.templateName', props);
    return resource.getResponseField('service.templateName') as unknown as string;
  }

}

export class ProtonResponsesFetchServiceServicePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.arn'),
        outputPath: 'service.pipeline.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.arn', props);
    return resource.getResponseField('service.pipeline.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.createdAt'),
        outputPath: 'service.pipeline.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.createdAt', props);
    return resource.getResponseField('service.pipeline.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.deploymentStatus'),
        outputPath: 'service.pipeline.deploymentStatus',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.deploymentStatus', props);
    return resource.getResponseField('service.pipeline.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.deploymentStatusMessage'),
        outputPath: 'service.pipeline.deploymentStatusMessage',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.deploymentStatusMessage', props);
    return resource.getResponseField('service.pipeline.deploymentStatusMessage') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.lastDeploymentAttemptedAt'),
        outputPath: 'service.pipeline.lastDeploymentAttemptedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.lastDeploymentSucceededAt'),
        outputPath: 'service.pipeline.lastDeploymentSucceededAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.lastDeploymentSucceededAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentSucceededAt') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.spec'),
        outputPath: 'service.pipeline.spec',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.spec', props);
    return resource.getResponseField('service.pipeline.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.templateMajorVersion'),
        outputPath: 'service.pipeline.templateMajorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.templateMajorVersion', props);
    return resource.getResponseField('service.pipeline.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.templateMinorVersion'),
        outputPath: 'service.pipeline.templateMinorVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.templateMinorVersion', props);
    return resource.getResponseField('service.pipeline.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetService.service.pipeline.templateName'),
        outputPath: 'service.pipeline.templateName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.service.pipeline.templateName', props);
    return resource.getResponseField('service.pipeline.templateName') as unknown as string;
  }

}

export class ProtonResponsesFetchServiceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceInstanceInput) {
  }

  public get serviceInstance(): ProtonResponsesFetchServiceInstanceServiceInstance {
    return new ProtonResponsesFetchServiceInstanceServiceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchServiceInstanceServiceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceInstanceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.arn'),
        outputPath: 'serviceInstance.arn',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.arn', props);
    return resource.getResponseField('serviceInstance.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.createdAt'),
        outputPath: 'serviceInstance.createdAt',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.createdAt', props);
    return resource.getResponseField('serviceInstance.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.deploymentStatus'),
        outputPath: 'serviceInstance.deploymentStatus',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.deploymentStatus', props);
    return resource.getResponseField('serviceInstance.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.deploymentStatusMessage'),
        outputPath: 'serviceInstance.deploymentStatusMessage',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.deploymentStatusMessage', props);
    return resource.getResponseField('serviceInstance.deploymentStatusMessage') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.environmentName'),
        outputPath: 'serviceInstance.environmentName',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.environmentName', props);
    return resource.getResponseField('serviceInstance.environmentName') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.lastDeploymentAttemptedAt'),
        outputPath: 'serviceInstance.lastDeploymentAttemptedAt',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('serviceInstance.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.lastDeploymentSucceededAt'),
        outputPath: 'serviceInstance.lastDeploymentSucceededAt',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.lastDeploymentSucceededAt', props);
    return resource.getResponseField('serviceInstance.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.name'),
        outputPath: 'serviceInstance.name',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.name', props);
    return resource.getResponseField('serviceInstance.name') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.serviceName'),
        outputPath: 'serviceInstance.serviceName',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.serviceName', props);
    return resource.getResponseField('serviceInstance.serviceName') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.spec'),
        outputPath: 'serviceInstance.spec',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.spec', props);
    return resource.getResponseField('serviceInstance.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.templateMajorVersion'),
        outputPath: 'serviceInstance.templateMajorVersion',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.templateMajorVersion', props);
    return resource.getResponseField('serviceInstance.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.templateMinorVersion'),
        outputPath: 'serviceInstance.templateMinorVersion',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.templateMinorVersion', props);
    return resource.getResponseField('serviceInstance.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceInstance.serviceInstance.templateName'),
        outputPath: 'serviceInstance.templateName',
        parameters: {
          name: this.__input.name,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceInstance.serviceInstance.templateName', props);
    return resource.getResponseField('serviceInstance.templateName') as unknown as string;
  }

}

export class ProtonResponsesFetchServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceTemplateInput) {
  }

  public get serviceTemplate(): ProtonResponsesFetchServiceTemplateServiceTemplate {
    return new ProtonResponsesFetchServiceTemplateServiceTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchServiceTemplateServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.arn'),
        outputPath: 'serviceTemplate.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.arn', props);
    return resource.getResponseField('serviceTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.createdAt'),
        outputPath: 'serviceTemplate.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.createdAt', props);
    return resource.getResponseField('serviceTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.description'),
        outputPath: 'serviceTemplate.description',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.description', props);
    return resource.getResponseField('serviceTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.displayName'),
        outputPath: 'serviceTemplate.displayName',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.displayName', props);
    return resource.getResponseField('serviceTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.encryptionKey'),
        outputPath: 'serviceTemplate.encryptionKey',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.encryptionKey', props);
    return resource.getResponseField('serviceTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.lastModifiedAt'),
        outputPath: 'serviceTemplate.lastModifiedAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.name'),
        outputPath: 'serviceTemplate.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.name', props);
    return resource.getResponseField('serviceTemplate.name') as unknown as string;
  }

  public get pipelineProvisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.pipelineProvisioning'),
        outputPath: 'serviceTemplate.pipelineProvisioning',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.pipelineProvisioning', props);
    return resource.getResponseField('serviceTemplate.pipelineProvisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplate.serviceTemplate.recommendedVersion'),
        outputPath: 'serviceTemplate.recommendedVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplate.serviceTemplate.recommendedVersion', props);
    return resource.getResponseField('serviceTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesFetchServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceTemplateVersionInput) {
  }

  public get serviceTemplateVersion(): ProtonResponsesFetchServiceTemplateVersionServiceTemplateVersion {
    return new ProtonResponsesFetchServiceTemplateVersionServiceTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesFetchServiceTemplateVersionServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonGetServiceTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.arn'),
        outputPath: 'serviceTemplateVersion.arn',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.arn', props);
    return resource.getResponseField('serviceTemplateVersion.arn') as unknown as string;
  }

  public get compatibleEnvironmentTemplates(): shapes.ProtonCompatibleEnvironmentTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates'),
        outputPath: 'serviceTemplateVersion.compatibleEnvironmentTemplates',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates', props);
    return resource.getResponseField('serviceTemplateVersion.compatibleEnvironmentTemplates') as unknown as shapes.ProtonCompatibleEnvironmentTemplate[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.createdAt'),
        outputPath: 'serviceTemplateVersion.createdAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.createdAt', props);
    return resource.getResponseField('serviceTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.description'),
        outputPath: 'serviceTemplateVersion.description',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.description', props);
    return resource.getResponseField('serviceTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt'),
        outputPath: 'serviceTemplateVersion.lastModifiedAt',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.majorVersion'),
        outputPath: 'serviceTemplateVersion.majorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.majorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.minorVersion'),
        outputPath: 'serviceTemplateVersion.minorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.minorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion'),
        outputPath: 'serviceTemplateVersion.recommendedMinorVersion',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.schema'),
        outputPath: 'serviceTemplateVersion.schema',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.schema', props);
    return resource.getResponseField('serviceTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.status'),
        outputPath: 'serviceTemplateVersion.status',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.status', props);
    return resource.getResponseField('serviceTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.statusMessage'),
        outputPath: 'serviceTemplateVersion.statusMessage',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.statusMessage', props);
    return resource.getResponseField('serviceTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.GetServiceTemplateVersion.serviceTemplateVersion.templateName'),
        outputPath: 'serviceTemplateVersion.templateName',
        parameters: {
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceTemplateVersion.serviceTemplateVersion.templateName', props);
    return resource.getResponseField('serviceTemplateVersion.templateName') as unknown as string;
  }

}

export class ProtonResponsesListEnvironmentAccountConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListEnvironmentAccountConnectionsInput) {
  }

  public get environmentAccountConnections(): shapes.ProtonEnvironmentAccountConnectionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironmentAccountConnections',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironmentAccountConnections.environmentAccountConnections'),
        outputPath: 'environmentAccountConnections',
        parameters: {
          environmentName: this.__input.environmentName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          requestedBy: this.__input.requestedBy,
          statuses: this.__input.statuses,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironmentAccountConnections.environmentAccountConnections', props);
    return resource.getResponseField('environmentAccountConnections') as unknown as shapes.ProtonEnvironmentAccountConnectionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironmentAccountConnections',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironmentAccountConnections.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          environmentName: this.__input.environmentName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          requestedBy: this.__input.requestedBy,
          statuses: this.__input.statuses,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironmentAccountConnections.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ProtonResponsesListEnvironmentTemplateVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListEnvironmentTemplateVersionsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironmentTemplateVersions',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironmentTemplateVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          majorVersion: this.__input.majorVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironmentTemplateVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get templateVersions(): shapes.ProtonEnvironmentTemplateVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironmentTemplateVersions',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironmentTemplateVersions.templateVersions'),
        outputPath: 'templateVersions',
        parameters: {
          majorVersion: this.__input.majorVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironmentTemplateVersions.templateVersions', props);
    return resource.getResponseField('templateVersions') as unknown as shapes.ProtonEnvironmentTemplateVersionSummary[];
  }

}

export class ProtonResponsesListEnvironmentTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListEnvironmentTemplatesInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironmentTemplates',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironmentTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironmentTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get templates(): shapes.ProtonEnvironmentTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironmentTemplates',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironmentTemplates.templates'),
        outputPath: 'templates',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironmentTemplates.templates', props);
    return resource.getResponseField('templates') as unknown as shapes.ProtonEnvironmentTemplateSummary[];
  }

}

export class ProtonResponsesListEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListEnvironmentsInput) {
  }

  public get environments(): shapes.ProtonEnvironmentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironments.environments'),
        outputPath: 'environments',
        parameters: {
          environmentTemplates: this.__input.environmentTemplates,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.environments', props);
    return resource.getResponseField('environments') as unknown as shapes.ProtonEnvironmentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEnvironments',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListEnvironments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          environmentTemplates: this.__input.environmentTemplates,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEnvironments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ProtonResponsesListServiceInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListServiceInstancesInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceInstances',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServiceInstances.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get serviceInstances(): shapes.ProtonServiceInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceInstances',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServiceInstances.serviceInstances'),
        outputPath: 'serviceInstances',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceInstances.serviceInstances', props);
    return resource.getResponseField('serviceInstances') as unknown as shapes.ProtonServiceInstanceSummary[];
  }

}

export class ProtonResponsesListServiceTemplateVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListServiceTemplateVersionsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceTemplateVersions',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServiceTemplateVersions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          majorVersion: this.__input.majorVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceTemplateVersions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get templateVersions(): shapes.ProtonServiceTemplateVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceTemplateVersions',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServiceTemplateVersions.templateVersions'),
        outputPath: 'templateVersions',
        parameters: {
          majorVersion: this.__input.majorVersion,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceTemplateVersions.templateVersions', props);
    return resource.getResponseField('templateVersions') as unknown as shapes.ProtonServiceTemplateVersionSummary[];
  }

}

export class ProtonResponsesListServiceTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListServiceTemplatesInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceTemplates',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServiceTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get templates(): shapes.ProtonServiceTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceTemplates',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServiceTemplates.templates'),
        outputPath: 'templates',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceTemplates.templates', props);
    return resource.getResponseField('templates') as unknown as shapes.ProtonServiceTemplateSummary[];
  }

}

export class ProtonResponsesListServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListServicesInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServices.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get services(): shapes.ProtonServiceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListServices.services'),
        outputPath: 'services',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.services', props);
    return resource.getResponseField('services') as unknown as shapes.ProtonServiceSummary[];
  }

}

export class ProtonResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonListTagsForResourceInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListTagsForResource.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get tags(): shapes.ProtonTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.ProtonTag[];
  }

}

export class ProtonResponsesRejectEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonRejectEnvironmentAccountConnectionInput) {
  }

  public get environmentAccountConnection(): ProtonResponsesRejectEnvironmentAccountConnectionEnvironmentAccountConnection {
    return new ProtonResponsesRejectEnvironmentAccountConnectionEnvironmentAccountConnection(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesRejectEnvironmentAccountConnectionEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonRejectEnvironmentAccountConnectionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.arn'),
        outputPath: 'environmentAccountConnection.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.arn', props);
    return resource.getResponseField('environmentAccountConnection.arn') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId'),
        outputPath: 'environmentAccountConnection.environmentAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId', props);
    return resource.getResponseField('environmentAccountConnection.environmentAccountId') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.environmentName'),
        outputPath: 'environmentAccountConnection.environmentName',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.environmentName', props);
    return resource.getResponseField('environmentAccountConnection.environmentName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.id'),
        outputPath: 'environmentAccountConnection.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.id', props);
    return resource.getResponseField('environmentAccountConnection.id') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt'),
        outputPath: 'environmentAccountConnection.lastModifiedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt', props);
    return resource.getResponseField('environmentAccountConnection.lastModifiedAt') as unknown as string;
  }

  public get managementAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.managementAccountId'),
        outputPath: 'environmentAccountConnection.managementAccountId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.managementAccountId', props);
    return resource.getResponseField('environmentAccountConnection.managementAccountId') as unknown as string;
  }

  public get requestedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.requestedAt'),
        outputPath: 'environmentAccountConnection.requestedAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.requestedAt', props);
    return resource.getResponseField('environmentAccountConnection.requestedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.roleArn'),
        outputPath: 'environmentAccountConnection.roleArn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.roleArn', props);
    return resource.getResponseField('environmentAccountConnection.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.RejectEnvironmentAccountConnection.environmentAccountConnection.status'),
        outputPath: 'environmentAccountConnection.status',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectEnvironmentAccountConnection.environmentAccountConnection.status', props);
    return resource.getResponseField('environmentAccountConnection.status') as unknown as string;
  }

}

export class ProtonResponsesUpdateAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateAccountSettingsInput) {
  }

  public get accountSettings(): ProtonResponsesUpdateAccountSettingsAccountSettings {
    return new ProtonResponsesUpdateAccountSettingsAccountSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateAccountSettingsAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateAccountSettingsInput) {
  }

  public get pipelineServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountSettings',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateAccountSettings.accountSettings.pipelineServiceRoleArn'),
        outputPath: 'accountSettings.pipelineServiceRoleArn',
        parameters: {
          pipelineServiceRoleArn: this.__input.pipelineServiceRoleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountSettings.accountSettings.pipelineServiceRoleArn', props);
    return resource.getResponseField('accountSettings.pipelineServiceRoleArn') as unknown as string;
  }

}

export class ProtonResponsesUpdateEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentInput) {
  }

  public get environment(): ProtonResponsesUpdateEnvironmentEnvironment {
    return new ProtonResponsesUpdateEnvironmentEnvironment(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateEnvironmentEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.arn'),
        outputPath: 'environment.arn',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.arn', props);
    return resource.getResponseField('environment.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.createdAt'),
        outputPath: 'environment.createdAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.createdAt', props);
    return resource.getResponseField('environment.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.deploymentStatus'),
        outputPath: 'environment.deploymentStatus',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.deploymentStatus', props);
    return resource.getResponseField('environment.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.deploymentStatusMessage'),
        outputPath: 'environment.deploymentStatusMessage',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.deploymentStatusMessage', props);
    return resource.getResponseField('environment.deploymentStatusMessage') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.description'),
        outputPath: 'environment.description',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.description', props);
    return resource.getResponseField('environment.description') as unknown as string;
  }

  public get environmentAccountConnectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.environmentAccountConnectionId'),
        outputPath: 'environment.environmentAccountConnectionId',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.environmentAccountConnectionId', props);
    return resource.getResponseField('environment.environmentAccountConnectionId') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.environmentAccountId'),
        outputPath: 'environment.environmentAccountId',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.environmentAccountId', props);
    return resource.getResponseField('environment.environmentAccountId') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.lastDeploymentAttemptedAt'),
        outputPath: 'environment.lastDeploymentAttemptedAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('environment.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.lastDeploymentSucceededAt'),
        outputPath: 'environment.lastDeploymentSucceededAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.lastDeploymentSucceededAt', props);
    return resource.getResponseField('environment.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.name'),
        outputPath: 'environment.name',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.name', props);
    return resource.getResponseField('environment.name') as unknown as string;
  }

  public get protonServiceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.protonServiceRoleArn'),
        outputPath: 'environment.protonServiceRoleArn',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.protonServiceRoleArn', props);
    return resource.getResponseField('environment.protonServiceRoleArn') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.provisioning'),
        outputPath: 'environment.provisioning',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.provisioning', props);
    return resource.getResponseField('environment.provisioning') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.spec'),
        outputPath: 'environment.spec',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.spec', props);
    return resource.getResponseField('environment.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.templateMajorVersion'),
        outputPath: 'environment.templateMajorVersion',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.templateMajorVersion', props);
    return resource.getResponseField('environment.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.templateMinorVersion'),
        outputPath: 'environment.templateMinorVersion',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.templateMinorVersion', props);
    return resource.getResponseField('environment.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironment',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironment.environment.templateName'),
        outputPath: 'environment.templateName',
        parameters: {
          deploymentType: this.__input.deploymentType,
          description: this.__input.description,
          environmentAccountConnectionId: this.__input.environmentAccountConnectionId,
          name: this.__input.name,
          protonServiceRoleArn: this.__input.protonServiceRoleArn,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironment.environment.templateName', props);
    return resource.getResponseField('environment.templateName') as unknown as string;
  }

}

export class ProtonResponsesUpdateEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentAccountConnectionInput) {
  }

  public get environmentAccountConnection(): ProtonResponsesUpdateEnvironmentAccountConnectionEnvironmentAccountConnection {
    return new ProtonResponsesUpdateEnvironmentAccountConnectionEnvironmentAccountConnection(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateEnvironmentAccountConnectionEnvironmentAccountConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentAccountConnectionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.arn'),
        outputPath: 'environmentAccountConnection.arn',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.arn', props);
    return resource.getResponseField('environmentAccountConnection.arn') as unknown as string;
  }

  public get environmentAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId'),
        outputPath: 'environmentAccountConnection.environmentAccountId',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.environmentAccountId', props);
    return resource.getResponseField('environmentAccountConnection.environmentAccountId') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.environmentName'),
        outputPath: 'environmentAccountConnection.environmentName',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.environmentName', props);
    return resource.getResponseField('environmentAccountConnection.environmentName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.id'),
        outputPath: 'environmentAccountConnection.id',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.id', props);
    return resource.getResponseField('environmentAccountConnection.id') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt'),
        outputPath: 'environmentAccountConnection.lastModifiedAt',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.lastModifiedAt', props);
    return resource.getResponseField('environmentAccountConnection.lastModifiedAt') as unknown as string;
  }

  public get managementAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.managementAccountId'),
        outputPath: 'environmentAccountConnection.managementAccountId',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.managementAccountId', props);
    return resource.getResponseField('environmentAccountConnection.managementAccountId') as unknown as string;
  }

  public get requestedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.requestedAt'),
        outputPath: 'environmentAccountConnection.requestedAt',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.requestedAt', props);
    return resource.getResponseField('environmentAccountConnection.requestedAt') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.roleArn'),
        outputPath: 'environmentAccountConnection.roleArn',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.roleArn', props);
    return resource.getResponseField('environmentAccountConnection.roleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentAccountConnection',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentAccountConnection.environmentAccountConnection.status'),
        outputPath: 'environmentAccountConnection.status',
        parameters: {
          id: this.__input.id,
          roleArn: this.__input.roleArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentAccountConnection.environmentAccountConnection.status', props);
    return resource.getResponseField('environmentAccountConnection.status') as unknown as string;
  }

}

export class ProtonResponsesUpdateEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentTemplateInput) {
  }

  public get environmentTemplate(): ProtonResponsesUpdateEnvironmentTemplateEnvironmentTemplate {
    return new ProtonResponsesUpdateEnvironmentTemplateEnvironmentTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateEnvironmentTemplateEnvironmentTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.arn'),
        outputPath: 'environmentTemplate.arn',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.arn', props);
    return resource.getResponseField('environmentTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.createdAt'),
        outputPath: 'environmentTemplate.createdAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.createdAt', props);
    return resource.getResponseField('environmentTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.description'),
        outputPath: 'environmentTemplate.description',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.description', props);
    return resource.getResponseField('environmentTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.displayName'),
        outputPath: 'environmentTemplate.displayName',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.displayName', props);
    return resource.getResponseField('environmentTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.encryptionKey'),
        outputPath: 'environmentTemplate.encryptionKey',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.encryptionKey', props);
    return resource.getResponseField('environmentTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.lastModifiedAt'),
        outputPath: 'environmentTemplate.lastModifiedAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.name'),
        outputPath: 'environmentTemplate.name',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.name', props);
    return resource.getResponseField('environmentTemplate.name') as unknown as string;
  }

  public get provisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.provisioning'),
        outputPath: 'environmentTemplate.provisioning',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.provisioning', props);
    return resource.getResponseField('environmentTemplate.provisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplate.environmentTemplate.recommendedVersion'),
        outputPath: 'environmentTemplate.recommendedVersion',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplate.environmentTemplate.recommendedVersion', props);
    return resource.getResponseField('environmentTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesUpdateEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentTemplateVersionInput) {
  }

  public get environmentTemplateVersion(): ProtonResponsesUpdateEnvironmentTemplateVersionEnvironmentTemplateVersion {
    return new ProtonResponsesUpdateEnvironmentTemplateVersionEnvironmentTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateEnvironmentTemplateVersionEnvironmentTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateEnvironmentTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.arn'),
        outputPath: 'environmentTemplateVersion.arn',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.arn', props);
    return resource.getResponseField('environmentTemplateVersion.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.createdAt'),
        outputPath: 'environmentTemplateVersion.createdAt',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.createdAt', props);
    return resource.getResponseField('environmentTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.description'),
        outputPath: 'environmentTemplateVersion.description',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.description', props);
    return resource.getResponseField('environmentTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt'),
        outputPath: 'environmentTemplateVersion.lastModifiedAt',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('environmentTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion'),
        outputPath: 'environmentTemplateVersion.majorVersion',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.majorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion'),
        outputPath: 'environmentTemplateVersion.minorVersion',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.minorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion'),
        outputPath: 'environmentTemplateVersion.recommendedMinorVersion',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('environmentTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.schema'),
        outputPath: 'environmentTemplateVersion.schema',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.schema', props);
    return resource.getResponseField('environmentTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.status'),
        outputPath: 'environmentTemplateVersion.status',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.status', props);
    return resource.getResponseField('environmentTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage'),
        outputPath: 'environmentTemplateVersion.statusMessage',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.statusMessage', props);
    return resource.getResponseField('environmentTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEnvironmentTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateEnvironmentTemplateVersion.environmentTemplateVersion.templateName'),
        outputPath: 'environmentTemplateVersion.templateName',
        parameters: {
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEnvironmentTemplateVersion.environmentTemplateVersion.templateName', props);
    return resource.getResponseField('environmentTemplateVersion.templateName') as unknown as string;
  }

}

export class ProtonResponsesUpdateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceInput) {
  }

  public get service(): ProtonResponsesUpdateServiceService {
    return new ProtonResponsesUpdateServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.arn'),
        outputPath: 'service.arn',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.arn', props);
    return resource.getResponseField('service.arn') as unknown as string;
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.branchName'),
        outputPath: 'service.branchName',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.branchName', props);
    return resource.getResponseField('service.branchName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.createdAt'),
        outputPath: 'service.createdAt',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.createdAt', props);
    return resource.getResponseField('service.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.description'),
        outputPath: 'service.description',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.description', props);
    return resource.getResponseField('service.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.lastModifiedAt'),
        outputPath: 'service.lastModifiedAt',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.lastModifiedAt', props);
    return resource.getResponseField('service.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.name'),
        outputPath: 'service.name',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.name', props);
    return resource.getResponseField('service.name') as unknown as string;
  }

  public get pipeline(): ProtonResponsesUpdateServiceServicePipeline {
    return new ProtonResponsesUpdateServiceServicePipeline(this.__scope, this.__resources, this.__input);
  }

  public get repositoryConnectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.repositoryConnectionArn'),
        outputPath: 'service.repositoryConnectionArn',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.repositoryConnectionArn', props);
    return resource.getResponseField('service.repositoryConnectionArn') as unknown as string;
  }

  public get repositoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.repositoryId'),
        outputPath: 'service.repositoryId',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.repositoryId', props);
    return resource.getResponseField('service.repositoryId') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.spec'),
        outputPath: 'service.spec',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.spec', props);
    return resource.getResponseField('service.spec') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.status'),
        outputPath: 'service.status',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.status', props);
    return resource.getResponseField('service.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.statusMessage'),
        outputPath: 'service.statusMessage',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.statusMessage', props);
    return resource.getResponseField('service.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.templateName'),
        outputPath: 'service.templateName',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.templateName', props);
    return resource.getResponseField('service.templateName') as unknown as string;
  }

}

export class ProtonResponsesUpdateServiceServicePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.arn'),
        outputPath: 'service.pipeline.arn',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.arn', props);
    return resource.getResponseField('service.pipeline.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.createdAt'),
        outputPath: 'service.pipeline.createdAt',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.createdAt', props);
    return resource.getResponseField('service.pipeline.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.deploymentStatus'),
        outputPath: 'service.pipeline.deploymentStatus',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.deploymentStatus', props);
    return resource.getResponseField('service.pipeline.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.deploymentStatusMessage'),
        outputPath: 'service.pipeline.deploymentStatusMessage',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.deploymentStatusMessage', props);
    return resource.getResponseField('service.pipeline.deploymentStatusMessage') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.lastDeploymentAttemptedAt'),
        outputPath: 'service.pipeline.lastDeploymentAttemptedAt',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.lastDeploymentSucceededAt'),
        outputPath: 'service.pipeline.lastDeploymentSucceededAt',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.lastDeploymentSucceededAt', props);
    return resource.getResponseField('service.pipeline.lastDeploymentSucceededAt') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.spec'),
        outputPath: 'service.pipeline.spec',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.spec', props);
    return resource.getResponseField('service.pipeline.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.templateMajorVersion'),
        outputPath: 'service.pipeline.templateMajorVersion',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.templateMajorVersion', props);
    return resource.getResponseField('service.pipeline.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.templateMinorVersion'),
        outputPath: 'service.pipeline.templateMinorVersion',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.templateMinorVersion', props);
    return resource.getResponseField('service.pipeline.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateService.service.pipeline.templateName'),
        outputPath: 'service.pipeline.templateName',
        parameters: {
          description: this.__input.description,
          name: this.__input.name,
          spec: this.__input.spec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.service.pipeline.templateName', props);
    return resource.getResponseField('service.pipeline.templateName') as unknown as string;
  }

}

export class ProtonResponsesUpdateServiceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceInstanceInput) {
  }

  public get serviceInstance(): ProtonResponsesUpdateServiceInstanceServiceInstance {
    return new ProtonResponsesUpdateServiceInstanceServiceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateServiceInstanceServiceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceInstanceInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.arn'),
        outputPath: 'serviceInstance.arn',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.arn', props);
    return resource.getResponseField('serviceInstance.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.createdAt'),
        outputPath: 'serviceInstance.createdAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.createdAt', props);
    return resource.getResponseField('serviceInstance.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.deploymentStatus'),
        outputPath: 'serviceInstance.deploymentStatus',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.deploymentStatus', props);
    return resource.getResponseField('serviceInstance.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.deploymentStatusMessage'),
        outputPath: 'serviceInstance.deploymentStatusMessage',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.deploymentStatusMessage', props);
    return resource.getResponseField('serviceInstance.deploymentStatusMessage') as unknown as string;
  }

  public get environmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.environmentName'),
        outputPath: 'serviceInstance.environmentName',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.environmentName', props);
    return resource.getResponseField('serviceInstance.environmentName') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.lastDeploymentAttemptedAt'),
        outputPath: 'serviceInstance.lastDeploymentAttemptedAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('serviceInstance.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.lastDeploymentSucceededAt'),
        outputPath: 'serviceInstance.lastDeploymentSucceededAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.lastDeploymentSucceededAt', props);
    return resource.getResponseField('serviceInstance.lastDeploymentSucceededAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.name'),
        outputPath: 'serviceInstance.name',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.name', props);
    return resource.getResponseField('serviceInstance.name') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.serviceName'),
        outputPath: 'serviceInstance.serviceName',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.serviceName', props);
    return resource.getResponseField('serviceInstance.serviceName') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.spec'),
        outputPath: 'serviceInstance.spec',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.spec', props);
    return resource.getResponseField('serviceInstance.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.templateMajorVersion'),
        outputPath: 'serviceInstance.templateMajorVersion',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.templateMajorVersion', props);
    return resource.getResponseField('serviceInstance.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.templateMinorVersion'),
        outputPath: 'serviceInstance.templateMinorVersion',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.templateMinorVersion', props);
    return resource.getResponseField('serviceInstance.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceInstance',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceInstance.serviceInstance.templateName'),
        outputPath: 'serviceInstance.templateName',
        parameters: {
          deploymentType: this.__input.deploymentType,
          name: this.__input.name,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceInstance.serviceInstance.templateName', props);
    return resource.getResponseField('serviceInstance.templateName') as unknown as string;
  }

}

export class ProtonResponsesUpdateServicePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServicePipelineInput) {
  }

  public get pipeline(): ProtonResponsesUpdateServicePipelinePipeline {
    return new ProtonResponsesUpdateServicePipelinePipeline(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateServicePipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServicePipelineInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.arn'),
        outputPath: 'pipeline.arn',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.arn', props);
    return resource.getResponseField('pipeline.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.createdAt'),
        outputPath: 'pipeline.createdAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.createdAt', props);
    return resource.getResponseField('pipeline.createdAt') as unknown as string;
  }

  public get deploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.deploymentStatus'),
        outputPath: 'pipeline.deploymentStatus',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.deploymentStatus', props);
    return resource.getResponseField('pipeline.deploymentStatus') as unknown as string;
  }

  public get deploymentStatusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.deploymentStatusMessage'),
        outputPath: 'pipeline.deploymentStatusMessage',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.deploymentStatusMessage', props);
    return resource.getResponseField('pipeline.deploymentStatusMessage') as unknown as string;
  }

  public get lastDeploymentAttemptedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.lastDeploymentAttemptedAt'),
        outputPath: 'pipeline.lastDeploymentAttemptedAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.lastDeploymentAttemptedAt', props);
    return resource.getResponseField('pipeline.lastDeploymentAttemptedAt') as unknown as string;
  }

  public get lastDeploymentSucceededAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.lastDeploymentSucceededAt'),
        outputPath: 'pipeline.lastDeploymentSucceededAt',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.lastDeploymentSucceededAt', props);
    return resource.getResponseField('pipeline.lastDeploymentSucceededAt') as unknown as string;
  }

  public get spec(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.spec'),
        outputPath: 'pipeline.spec',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.spec', props);
    return resource.getResponseField('pipeline.spec') as unknown as string;
  }

  public get templateMajorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.templateMajorVersion'),
        outputPath: 'pipeline.templateMajorVersion',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.templateMajorVersion', props);
    return resource.getResponseField('pipeline.templateMajorVersion') as unknown as string;
  }

  public get templateMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.templateMinorVersion'),
        outputPath: 'pipeline.templateMinorVersion',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.templateMinorVersion', props);
    return resource.getResponseField('pipeline.templateMinorVersion') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServicePipeline',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServicePipeline.pipeline.templateName'),
        outputPath: 'pipeline.templateName',
        parameters: {
          deploymentType: this.__input.deploymentType,
          serviceName: this.__input.serviceName,
          spec: this.__input.spec,
          templateMajorVersion: this.__input.templateMajorVersion,
          templateMinorVersion: this.__input.templateMinorVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServicePipeline.pipeline.templateName', props);
    return resource.getResponseField('pipeline.templateName') as unknown as string;
  }

}

export class ProtonResponsesUpdateServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceTemplateInput) {
  }

  public get serviceTemplate(): ProtonResponsesUpdateServiceTemplateServiceTemplate {
    return new ProtonResponsesUpdateServiceTemplateServiceTemplate(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateServiceTemplateServiceTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceTemplateInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.arn'),
        outputPath: 'serviceTemplate.arn',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.arn', props);
    return resource.getResponseField('serviceTemplate.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.createdAt'),
        outputPath: 'serviceTemplate.createdAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.createdAt', props);
    return resource.getResponseField('serviceTemplate.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.description'),
        outputPath: 'serviceTemplate.description',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.description', props);
    return resource.getResponseField('serviceTemplate.description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.displayName'),
        outputPath: 'serviceTemplate.displayName',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.displayName', props);
    return resource.getResponseField('serviceTemplate.displayName') as unknown as string;
  }

  public get encryptionKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.encryptionKey'),
        outputPath: 'serviceTemplate.encryptionKey',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.encryptionKey', props);
    return resource.getResponseField('serviceTemplate.encryptionKey') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.lastModifiedAt'),
        outputPath: 'serviceTemplate.lastModifiedAt',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplate.lastModifiedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.name'),
        outputPath: 'serviceTemplate.name',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.name', props);
    return resource.getResponseField('serviceTemplate.name') as unknown as string;
  }

  public get pipelineProvisioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.pipelineProvisioning'),
        outputPath: 'serviceTemplate.pipelineProvisioning',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.pipelineProvisioning', props);
    return resource.getResponseField('serviceTemplate.pipelineProvisioning') as unknown as string;
  }

  public get recommendedVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplate',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplate.serviceTemplate.recommendedVersion'),
        outputPath: 'serviceTemplate.recommendedVersion',
        parameters: {
          description: this.__input.description,
          displayName: this.__input.displayName,
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplate.serviceTemplate.recommendedVersion', props);
    return resource.getResponseField('serviceTemplate.recommendedVersion') as unknown as string;
  }

}

export class ProtonResponsesUpdateServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceTemplateVersionInput) {
  }

  public get serviceTemplateVersion(): ProtonResponsesUpdateServiceTemplateVersionServiceTemplateVersion {
    return new ProtonResponsesUpdateServiceTemplateVersionServiceTemplateVersion(this.__scope, this.__resources, this.__input);
  }

}

export class ProtonResponsesUpdateServiceTemplateVersionServiceTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ProtonUpdateServiceTemplateVersionInput) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.arn'),
        outputPath: 'serviceTemplateVersion.arn',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.arn', props);
    return resource.getResponseField('serviceTemplateVersion.arn') as unknown as string;
  }

  public get compatibleEnvironmentTemplates(): shapes.ProtonCompatibleEnvironmentTemplate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates'),
        outputPath: 'serviceTemplateVersion.compatibleEnvironmentTemplates',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.compatibleEnvironmentTemplates', props);
    return resource.getResponseField('serviceTemplateVersion.compatibleEnvironmentTemplates') as unknown as shapes.ProtonCompatibleEnvironmentTemplate[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.createdAt'),
        outputPath: 'serviceTemplateVersion.createdAt',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.createdAt', props);
    return resource.getResponseField('serviceTemplateVersion.createdAt') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.description'),
        outputPath: 'serviceTemplateVersion.description',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.description', props);
    return resource.getResponseField('serviceTemplateVersion.description') as unknown as string;
  }

  public get lastModifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt'),
        outputPath: 'serviceTemplateVersion.lastModifiedAt',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.lastModifiedAt', props);
    return resource.getResponseField('serviceTemplateVersion.lastModifiedAt') as unknown as string;
  }

  public get majorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.majorVersion'),
        outputPath: 'serviceTemplateVersion.majorVersion',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.majorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.majorVersion') as unknown as string;
  }

  public get minorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.minorVersion'),
        outputPath: 'serviceTemplateVersion.minorVersion',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.minorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.minorVersion') as unknown as string;
  }

  public get recommendedMinorVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion'),
        outputPath: 'serviceTemplateVersion.recommendedMinorVersion',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.recommendedMinorVersion', props);
    return resource.getResponseField('serviceTemplateVersion.recommendedMinorVersion') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.schema'),
        outputPath: 'serviceTemplateVersion.schema',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.schema', props);
    return resource.getResponseField('serviceTemplateVersion.schema') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.status'),
        outputPath: 'serviceTemplateVersion.status',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.status', props);
    return resource.getResponseField('serviceTemplateVersion.status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.statusMessage'),
        outputPath: 'serviceTemplateVersion.statusMessage',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.statusMessage', props);
    return resource.getResponseField('serviceTemplateVersion.statusMessage') as unknown as string;
  }

  public get templateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceTemplateVersion',
        service: 'Proton',
        physicalResourceId: cr.PhysicalResourceId.of('Proton.UpdateServiceTemplateVersion.serviceTemplateVersion.templateName'),
        outputPath: 'serviceTemplateVersion.templateName',
        parameters: {
          compatibleEnvironmentTemplates: this.__input.compatibleEnvironmentTemplates,
          description: this.__input.description,
          majorVersion: this.__input.majorVersion,
          minorVersion: this.__input.minorVersion,
          status: this.__input.status,
          templateName: this.__input.templateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceTemplateVersion.serviceTemplateVersion.templateName', props);
    return resource.getResponseField('serviceTemplateVersion.templateName') as unknown as string;
  }

}

